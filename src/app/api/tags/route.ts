// src/app/api/tags/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type PlacementRow = {
  id: string;
  tagId: string;
  parentPlacementId: string | null;
  tag: { id: string; name: string; description: string | null };
};

function buildTree(rows: PlacementRow[]) {
  const byParent = new Map<string | null, PlacementRow[]>();
  for (const r of rows) {
    const k = r.parentPlacementId;
    const arr = byParent.get(k);
    if (arr) arr.push(r);
    else byParent.set(k, [r]);
  }
  const makeNode = (r: PlacementRow): any => ({
    placementId: r.id,
    tagId: r.tagId,
    name: r.tag.name,
    description: r.tag.description,
    parentPlacementId: r.parentPlacementId,
    children: (byParent.get(r.id) || [])
      .sort((a, b) => a.tag.name.localeCompare(b.tag.name))
      .map(makeNode),
  });
  const roots = (byParent.get(null) || []).sort((a, b) => a.tag.name.localeCompare(b.tag.name)).map(makeNode);
  return roots;
}

async function rebuildPlacementClosureAll() {
  await prisma.placementClosure.deleteMany({});
  const placements = await prisma.tagPlacement.findMany({ select: { id: true, parentPlacementId: true } });

  // self links
  if (placements.length) {
    await prisma.placementClosure.createMany({
      data: placements.map(p => ({ ancestorPlacementId: p.id, descendantPlacementId: p.id, depth: 0 })),
      skipDuplicates: true,
    });
  }

  // adjacency
  const childrenByParent = new Map<string, string[]>();
  for (const p of placements) {
    if (p.parentPlacementId) {
      const arr = childrenByParent.get(p.parentPlacementId);
      if (arr) arr.push(p.id);
      else childrenByParent.set(p.parentPlacementId, [p.id]);
    }
  }

  // BFS from every node as ancestor (small datasets → simple + correct)
  const pairs: { ancestorPlacementId: string; descendantPlacementId: string; depth: number }[] = [];
  for (const anc of placements) {
    const q: Array<{ id: string; depth: number }> = [{ id: anc.id, depth: 0 }];
    const seen = new Set<string>([anc.id]);
    while (q.length) {
      const { id, depth } = q.shift()!;
      const kids = childrenByParent.get(id) ?? [];
      for (const child of kids) {
        if (!seen.has(child)) {
          seen.add(child);
          pairs.push({ ancestorPlacementId: anc.id, descendantPlacementId: child, depth: depth + 1 });
          q.push({ id: child, depth: depth + 1 });
        }
      }
    }
  }
  if (pairs.length) {
    await prisma.placementClosure.createMany({ data: pairs, skipDuplicates: true });
  }
}

export async function GET(req: NextRequest) {
  const rows = await prisma.tagPlacement.findMany({
    select: {
      id: true,
      tagId: true,
      parentPlacementId: true,
      tag: { select: { id: true, name: true, description: true } },
    },
  });

  const tree = buildTree(rows);

  // parentCounts = how many placements each tag has (for 🔗 icon logic)
  const parentCounts: Record<string, number> = {};
  for (const r of rows) {
    parentCounts[r.tagId] = (parentCounts[r.tagId] || 0) + 1;
  }

  // tags list for client-side name lookup (case-insensitive)
  const tags = await prisma.tag.findMany({ select: { id: true, name: true, description: true } });

  return NextResponse.json({ tree, parentCounts, tags });
}

export async function POST(req: NextRequest) {
  try {
    const { name, description, parentPlacementId } = await req.json();
    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    // find tag by name (case-insensitive)
    let tag = await prisma.tag.findFirst({
      where: { name: { equals: name, mode: 'insensitive' } },
      select: { id: true, name: true },
    });

    if (!tag) {
      tag = await prisma.tag.create({ data: { name, description } });
    }

    // create placement under given parent (or root)
    const placement = await prisma.tagPlacement.create({
      data: { tagId: tag.id, parentPlacementId: parentPlacementId ?? null },
      select: {
        id: true,
        tagId: true,
        parentPlacementId: true,
        tag: { select: { id: true, name: true, description: true } },
      },
    });

    await rebuildPlacementClosureAll();
    return NextResponse.json({ placement }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to create/link placement.' }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { tagId, name, description } = await req.json();
    if (!tagId) return NextResponse.json({ error: 'tagId is required.' }, { status: 400 });

    const tag = await prisma.tag.update({
      where: { id: tagId },
      data: { name: name ?? undefined, description: description ?? undefined },
      select: { id: true, name: true, description: true },
    });

    return NextResponse.json({ tag });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to update tag.' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { placementId } = await req.json();
    if (!placementId) return NextResponse.json({ error: 'placementId is required.' }, { status: 400 });

    // get tagId of placement
    const placement = await prisma.tagPlacement.findUnique({
      where: { id: placementId },
      select: { id: true, tagId: true, parentPlacementId: true },
    });
    if (!placement) return NextResponse.json({ error: 'Placement not found.' }, { status: 404 });

    // delete this placement
    await prisma.tagPlacement.delete({ where: { id: placementId } });

    // if tag has no more placements and is unused by items, delete the tag too
    const [remainingPlacements, inUse] = await Promise.all([
      prisma.tagPlacement.findFirst({ where: { tagId: placement.tagId }, select: { id: true } }),
      prisma.itemTag.findFirst({ where: { tagId: placement.tagId }, select: { itemId: true } }),
    ]);

    let deletedTag = false;
    if (!remainingPlacements && !inUse) {
      await prisma.tag.delete({ where: { id: placement.tagId } });
      deletedTag = true;
    }

    await rebuildPlacementClosureAll();
    return NextResponse.json({ ok: true, deletedPlacement: true, deletedTag });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to delete placement.' }, { status: 400 });
  }
}
