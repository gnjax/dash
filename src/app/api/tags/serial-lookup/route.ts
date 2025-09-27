// src/app/api/tags/serial-lookup/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Basic OCR normalization/corrections for cartridge serials
function normalizeCandidates(input: string): string[] {
  const raw = (input || '').toUpperCase();
  // Extract chunks that look like serial-ish strings
  const tokens = Array.from(new Set(raw.match(/[A-Z0-9\-]{3,}/g) || []));
  const swaps: Record<string, string> = { O: '0', I: '1', Z: '2', S: '5', B: '8', '—': '-', '–': '-' };

  const cands = new Set<string>();
  for (const t of tokens) {
    const base = t.replace(/[–—]/g, '-').replace(/\s+/g, '').trim();
    if (base.length) cands.add(base);
    // swap lookalikes
    let alt = base;
    for (const [k, v] of Object.entries(swaps)) alt = alt.split(k).join(v);
    if (alt !== base) cands.add(alt);
  }
  // Only keep strings that actually include a dash (your rule)
  return Array.from(cands).filter(s => s.includes('-'));
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';
  const ancestorPlacementId = searchParams.get('ancestorPlacementId') || null;

  const candidates = normalizeCandidates(q);
  if (candidates.length === 0) {
    return NextResponse.json({ matches: [] });
  }

  // If a branch is provided, constrain to tags present under that branch
  let tagIdsScoped: Set<string> | null = null;
  let placementByTagId: Map<string, string> | null = null;

  if (ancestorPlacementId) {
    const desc = await prisma.placementClosure.findMany({
      where: { ancestorPlacementId },
      select: { descendantPlacementId: true },
    });
    const descendantIds = desc.map(d => d.descendantPlacementId);

    if (descendantIds.length) {
      const placements = await prisma.tagPlacement.findMany({
        where: { id: { in: descendantIds } },
        select: { id: true, tagId: true },
      });
      tagIdsScoped = new Set(placements.map(p => p.tagId));
      placementByTagId = new Map(placements.map(p => [p.tagId, p.id]));
    }
  }

  // Find exact name matches first (case-insensitive)
  const exact = await prisma.tag.findMany({
    where: {
      AND: [
        { name: { in: candidates, mode: 'insensitive' } },
        ...(tagIdsScoped ? [{ id: { in: Array.from(tagIdsScoped) } }] : []),
      ],
    },
    select: { id: true, name: true, description: true, photoUrl: true },
    take: 10,
  });

  // If nothing, try contains (still filtered to branch if provided)
  const fallbackNeeded = exact.length === 0;
  const fuzzy = fallbackNeeded
    ? await prisma.tag.findMany({
        where: {
          AND: [
            {
              OR: candidates.map(c => ({ name: { contains: c, mode: 'insensitive' } })),
            },
            ...(tagIdsScoped ? [{ id: { in: Array.from(tagIdsScoped) } }] : []),
          ],
        },
        select: { id: true, name: true, description: true, photoUrl: true },
        take: 10,
      })
    : [];

  const rows = (exact.length ? exact : fuzzy).map(t => ({
    tagId: t.id,
    placementIdUnderBranch: placementByTagId?.get(t.id) ?? null,
    serial: t.name,
    title: t.description,
    photoUrl: t.photoUrl || null,
  }));

  return NextResponse.json({ matches: rows });
}
