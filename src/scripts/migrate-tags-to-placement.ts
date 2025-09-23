/* scripts/migrate-tags-to-placements.ts
   Migrates from TagRelation (DAG) to TagPlacement (branch-local tree),
   and builds PlacementClosure. Safe to re-run (idempotent).
*/
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Relation = { parentId: string; childId: string };
type Placement = { id: string; tagId: string; parentPlacementId: string | null };

async function main() {
  console.log('--- Migration: TagRelation -> TagPlacement ---');

  // 1) Read tags and relations
  const [tags, rels] = await Promise.all([
    prisma.tag.findMany({ select: { id: true } }),
    prisma.tagRelation.findMany({ select: { parentId: true, childId: true } }),
  ]);
  console.log(`Tags: ${tags.length}, Relations: ${rels.length}`);

  // Build adjacency + reverse adjacency
  const childrenByTag = new Map<string, string[]>();
  const parentsByTag = new Map<string, string[]>();
  for (const r of rels) {
    (childrenByTag.get(r.parentId) ?? childrenByTag.set(r.parentId, []).get(r.parentId)!).push(r.childId);
    (parentsByTag.get(r.childId) ?? parentsByTag.set(r.childId, []).get(r.childId)!).push(r.parentId);
  }

  // 2) Ensure root placements for tags with no parents OR isolated tags
  const tagIds = new Set(tags.map(t => t.id));
  const childSet = new Set(rels.map(r => r.childId));
  const parentSet = new Set(rels.map(r => r.parentId));

  const roots: string[] = [];
  for (const tid of tagIds) {
    if (!parentsByTag.has(tid)) roots.push(tid);
  }
  console.log(`Root tags detected: ${roots.length}`);

  // Helper: ensure placement exists under given parentPlacementId
  async function ensurePlacement(tagId: string, parentPlacementId: string | null): Promise<Placement> {
    const existing = await prisma.tagPlacement.findFirst({
      where: { tagId, parentPlacementId },
      select: { id: true, tagId: true, parentPlacementId: true },
    });
    if (existing) return existing as Placement;

    const created = await prisma.tagPlacement.create({
      data: { tagId, parentPlacementId },
      select: { id: true, tagId: true, parentPlacementId: true },
    });
    return created as Placement;
  }

  // Create root placements
  const rootPlacements: Placement[] = [];
  for (const rootTagId of roots) {
    const p = await ensurePlacement(rootTagId, null);
    rootPlacements.push(p);
  }
  console.log(`Root placements created/verified: ${rootPlacements.length}`);

  // 3) Expand placements down the DAG: for each placement of a parent tag,
  //    create a child placement per TagRelation edge (parentTag -> childTag) under that *placement*.
  // We'll BFS over placements.
  const queue: Placement[] = [...rootPlacements];
  let createdCount = 0;

  // Build quick lookup for children
  function getChildren(tagId: string): string[] {
    return childrenByTag.get(tagId) ?? [];
  }

  while (queue.length) {
    const p = queue.shift()!;
    const parentTagId = p.tagId;
    const childTagIds = getChildren(parentTagId);
    if (childTagIds.length === 0) continue;

    for (const childTagId of childTagIds) {
      const childPlacement = await ensurePlacement(childTagId, p.id);
      // If it was newly created in this run, we have no way to know except by trying to find it first.
      // We still push to queue so deeper descendants get created.
      queue.push(childPlacement);
      createdCount++;
    }
  }
  console.log(`Placement expansion completed. (Created/verified edges: ${createdCount})`);

  // 4) Rebuild PlacementClosure from TagPlacement parent links
  console.log('Rebuilding PlacementClosure…');
  await prisma.placementClosure.deleteMany({});

  const allPlacements = await prisma.tagPlacement.findMany({
    select: { id: true, parentPlacementId: true },
  });

  // Self links
  if (allPlacements.length) {
    await prisma.placementClosure.createMany({
      data: allPlacements.map(p => ({
        ancestorPlacementId: p.id,
        descendantPlacementId: p.id,
        depth: 0,
      })),
      skipDuplicates: true,
    });
  }

  // Build adjacency for placements
  const childrenByPlacement = new Map<string, string[]>();
  for (const p of allPlacements) {
    if (p.parentPlacementId) {
      const arr = childrenByPlacement.get(p.parentPlacementId);
      if (arr) arr.push(p.id);
      else childrenByPlacement.set(p.parentPlacementId, [p.id]);
    }
  }

  // BFS from each placement as ancestor
  const pairs: { ancestorPlacementId: string; descendantPlacementId: string; depth: number }[] = [];
  for (const anc of allPlacements) {
    const seen = new Set<string>([anc.id]);
    const q: Array<{ id: string; depth: number }> = [{ id: anc.id, depth: 0 }];
    while (q.length) {
      const { id, depth } = q.shift()!;
      const kids = childrenByPlacement.get(id) ?? [];
      for (const kid of kids) {
        if (!seen.has(kid)) {
          seen.add(kid);
          pairs.push({
            ancestorPlacementId: anc.id,
            descendantPlacementId: kid,
            depth: depth + 1,
          });
          q.push({ id: kid, depth: depth + 1 });
        }
      }
    }
  }

  // Insert closure in manageable chunks
  const chunkSize = 5000;
  for (let i = 0; i < pairs.length; i += chunkSize) {
    const chunk = pairs.slice(i, i + chunkSize);
    await prisma.placementClosure.createMany({ data: chunk, skipDuplicates: true });
    if ((i / chunkSize) % 20 === 0) console.log(`…closure progress ${i + chunk.length}/${pairs.length}`);
  }

  console.log('PlacementClosure rebuild done.');
  console.log('--- Migration complete ---');
}

main()
  .catch((e) => {
    console.error('Migration failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
