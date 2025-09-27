// src/app/api/inventory/assign-tag/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

async function resolvePlacementId(
  tagId: string,
  ancestorPlacementId?: string | null,
  explicitPlacementId?: string | null
) {
  if (explicitPlacementId) return explicitPlacementId;

  if (!ancestorPlacementId) {
    // Any placement for this tag is acceptable if branch not specified
    const p = await prisma.tagPlacement.findFirst({ where: { tagId }, select: { id: true } });
    return p?.id ?? null;
  }

  // Find placement of tag that is a descendant of ancestorPlacementId
  const descendants = await prisma.placementClosure.findMany({
    where: { ancestorPlacementId },
    select: { descendantPlacementId: true },
  });
  const descIds = descendants.map(d => d.descendantPlacementId);
  if (!descIds.length) return null;

  const placement = await prisma.tagPlacement.findFirst({
    where: { id: { in: descIds }, tagId },
    select: { id: true },
  });

  return placement?.id ?? null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Keep the SAME input contract as before:
    const itemIds: string[] = Array.isArray(body?.itemIds) ? body.itemIds.filter(Boolean) : [];
    const tagId: string | undefined = body?.tagId;
    const ancestorPlacementId: string | undefined = body?.ancestorPlacementId || undefined;
    const placementIdOverride: string | undefined = body?.placementId || undefined;

    if (!itemIds.length) return NextResponse.json({ error: 'itemIds[] required' }, { status: 400 });
    if (!tagId) return NextResponse.json({ error: 'tagId required' }, { status: 400 });

    // Resolve placement the same way you already had it
    const placementId = await resolvePlacementId(tagId, ancestorPlacementId, placementIdOverride);
    if (!placementId) {
      return NextResponse.json(
        { error: 'No placement found for tag under the selected branch.' },
        { status: 400 }
      );
    }

    // NEW behavior: replace existing tags for these items
    await prisma.$transaction([
      prisma.inventoryItemTag.deleteMany({ where: { itemId: { in: itemIds } } }),
      prisma.inventoryItemTag.createMany({
        data: itemIds.map(id => ({ itemId: id, tagId, placementId })),
        skipDuplicates: true,
      }),
    ]);

    return NextResponse.json({ ok: true, placementId });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to assign tag.' }, { status: 400 });
  }
}
