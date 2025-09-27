// src/app/api/inventory/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { PPM_DENOM } from '@/lib/weights';

function toNum(d: any) {
  if (d == null) return 0;
  if (typeof d === 'number') return d;
  if (typeof d === 'string') return Number(d);
  if (typeof (d as any).toNumber === 'function') return (d as any).toNumber();
  return Number(d);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = Math.max(1, Math.min(100, Number(searchParams.get('limit') ?? '50')));
  const cursor = searchParams.get('cursor') || undefined;

  // Support stacked filters: multiple ?q= values -> AND across terms
  const terms = searchParams.getAll('q').map(s => s.trim()).filter(Boolean);
  const singleQ = (searchParams.get('q') || '').trim();
  if (!terms.length && singleQ) terms.push(singleQ);

  // Helper to build a where-clause for ONE term
  async function buildWhereForTerm(q: string) {
    // Package number -> entryIds
    let entryIdsFromPackageQuery: string[] = [];
    {
      const pkgs = await prisma.scrapedPackage.findMany({
        where: { packageNumber: { contains: q, mode: 'insensitive' } },
        select: { id: true },
      });
      if (pkgs.length) {
        const sess = await prisma.inventoryFillSession.findMany({
          where: { scrapedPackageId: { in: pkgs.map(p => p.id) } },
          select: { id: true },
        });
        if (sess.length) {
          const entryIds = await prisma.inventoryFillEntry.findMany({
            where: { sessionId: { in: sess.map(s => s.id) } },
            select: { id: true },
          });
          entryIdsFromPackageQuery = entryIds.map(e => e.id);
        }
      }
    }

    // Match any segment in placement chain
    // tags (name ~ q) -> placements -> closure descendants -> InventoryItemTag.placementId
    let itemIdsFromPlacementQuery: string[] = [];
    {
      const tagHits = await prisma.tag.findMany({
        where: { name: { contains: q, mode: 'insensitive' } },
        select: { id: true },
      });
      const tagIds = tagHits.map(t => t.id);

      if (tagIds.length) {
        const ancPlacements = await prisma.tagPlacement.findMany({
          where: { tagId: { in: tagIds } },
          select: { id: true },
        });
        const ancIds = ancPlacements.map(p => p.id);

        let descIds: string[] = [];
        if (ancIds.length) {
          const closures = await prisma.placementClosure.findMany({
            where: { ancestorPlacementId: { in: ancIds } },
            select: { descendantPlacementId: true },
          });
          descIds = Array.from(new Set(closures.map(c => c.descendantPlacementId)));
        }

        const invTags = await prisma.inventoryItemTag.findMany({
          where: {
            OR: [
              { tagId: { in: tagIds } },
              ...(descIds.length ? [{ placementId: { in: descIds } }] as const : []),
            ],
          },
          select: { itemId: true },
        });
        itemIdsFromPlacementQuery = Array.from(new Set(invTags.map(it => it.itemId)));
      }
    }

    // OR group for this term; the final WHERE will AND these groups for all terms
    const clause: any = {
      OR: [
        { name: { contains: q, mode: 'insensitive' } },
        { tags: { some: { tag: { name: { contains: q, mode: 'insensitive' } } } } },
        ...(itemIdsFromPlacementQuery.length ? [{ id: { in: itemIdsFromPlacementQuery } }] : []),
        ...(entryIdsFromPackageQuery.length ? [{ fillEntryId: { in: entryIdsFromPackageQuery } }] : []),
      ],
    };
    return clause;
  }

  // Compose WHERE across terms (AND)
  let where: any = undefined;
  if (terms.length) {
    const clauses = [];
    for (const t of terms) {
      clauses.push(await buildWhereForTerm(t));
    }
    where = { AND: clauses };
  }

  // 1) Page of items
  const items = await prisma.inventoryItem.findMany({
    take: limit,
    ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
    orderBy: { id: 'desc' },
    where,
    select: {
      id: true,
      name: true,
      ordinal: true,
      scrapedItemId: true,
      manualLineId: true,
      fillEntryId: true,
      createdAt: true,
      condition: true,
      tags: {
        select: {
          tag: { select: { id: true, name: true, description: true } }, // 👈 include description
          placementId: true,
        },
      },
    },
  });

  // 2) Batch lookups for allocations
  const fillEntryIds = Array.from(new Set(items.map(i => i.fillEntryId).filter(Boolean) as string[]));
  const entries = fillEntryIds.length
    ? await prisma.inventoryFillEntry.findMany({
        where: { id: { in: fillEntryIds } },
        select: {
          id: true,
          quantity: true,
          priceWeightPpm: true,
          shippingWeightPpm: true,
          sourceItemId: true,
          sessionId: true,
        },
      })
    : [];
  const entriesById = new Map(entries.map(e => [e.id, e]));

  const sourceItemIds = Array.from(new Set(entries.map(e => e.sourceItemId)));
  const sourceItems = sourceItemIds.length
    ? await prisma.inventoryFillSourceItem.findMany({
        where: { id: { in: sourceItemIds } },
        select: {
          id: true,
          sessionId: true,
          shippingWeightPpm: true,
          scrapedItemId: true,
          manualLineId: true,
        },
      })
    : [];
  const sourceItemsById = new Map(sourceItems.map(s => [s.id, s]));

  const sessionIds = Array.from(new Set(entries.map(e => e.sessionId)));
  const sessions = sessionIds.length
    ? await prisma.inventoryFillSession.findMany({
        where: { id: { in: sessionIds } },
        select: { id: true, sourceType: true, scrapedPackageId: true, manualPurchaseId: true, customsTotalYen: true },
      })
    : [];
  const sessById = new Map(sessions.map(s => [s.id, s]));

  const scrapedIds = Array.from(new Set(sourceItems.map(s => s.scrapedItemId).filter(Boolean) as string[]));
  const manualIds = Array.from(new Set(sourceItems.map(s => s.manualLineId).filter(Boolean) as string[]));

  const scrapedItems = scrapedIds.length
    ? await prisma.scrapedItem.findMany({
        where: { id: { in: scrapedIds } },
        select: { id: true, priceYen: true },
      })
    : [];
  const manualLines = manualIds.length
    ? await prisma.manualLine.findMany({
        where: { id: { in: manualIds } },
        select: { id: true, priceYen: true },
      })
    : [];
  const scrapedPriceById = new Map(scrapedItems.map(si => [si.id, toNum(si.priceYen)]));
  const manualPriceById = new Map(manualLines.map(ml => [ml.id, toNum(ml.priceYen)]));

  // Shipping & dates
  const scrapedPkgIds = Array.from(new Set(sessions.map(s => s.scrapedPackageId).filter(Boolean) as string[]));
  const manualPurchaseIds = Array.from(new Set(sessions.map(s => s.manualPurchaseId).filter(Boolean) as string[]));
  const scrapedPkgs = scrapedPkgIds.length
    ? await prisma.scrapedPackage.findMany({
        where: { id: { in: scrapedPkgIds } },
        select: {
          id: true,
          packageNumber: true,
          dateShipped: true,
          internationalShippingFeeYen: true,
          domesticShippingFeeYen: true,
        },
      })
    : [];
  const scrapedPkgById = new Map(scrapedPkgs.map(p => [p.id, p]));

  const manualPurchases = manualPurchaseIds.length
    ? await prisma.manualPurchase.findMany({
        where: { id: { in: manualPurchaseIds } },
        select: {
          id: true,
          datePurchased: true,
          intlShippingTotalYen: true,
          domesticShippingTotalYen: true,
        },
      })
    : [];
  const manualById = new Map(manualPurchases.map(m => [m.id, m]));

  // Build placement labels (Root > ... > Leaf) and a placement "depth score" to pick the leaf-most description
  const placementIds = Array.from(
    new Set(items.flatMap(i => i.tags?.map(t => t.placementId).filter(Boolean) as string[] ?? [])),
  );
  const placementLabels = new Map<string, string>();
  const placementDepthScore = new Map<string, number>(); // higher = deeper (more segments)
  if (placementIds.length) {
    const closures = await prisma.placementClosure.findMany({
      where: { descendantPlacementId: { in: placementIds } },
      select: {
        descendantPlacementId: true,
        depth: true,
        ancestor: { select: { tag: { select: { name: true } } } },
      },
    });

    const byDesc = new Map<string, { depth: number; name: string }[]>();
    for (const c of closures) {
      const nm = (c as any).ancestor.tag?.name ?? '';
      if (!nm) continue;
      const arr = byDesc.get(c.descendantPlacementId) ?? [];
      arr.push({ depth: c.depth, name: nm });
      byDesc.set(c.descendantPlacementId, arr);
    }
    for (const [desc, arr] of byDesc) {
      // depth: 0=leaf, >0 ancestors. For root → ... → leaf order, sort DESC by depth.
      arr.sort((a, b) => b.depth - a.depth);
      placementLabels.set(desc, arr.map(x => x.name).join(' > '));
      placementDepthScore.set(desc, arr.length); // more names = deeper in the tree
    }
  }

  // 3) Rows
  const rows: any[] = [];
  for (const it of items) {
    const entry = it.fillEntryId ? entriesById.get(it.fillEntryId) : null;

    // Preferred name = deepest tag.description (if any), else item.name
    let preferredName = it.name;
    let bestScore = -1;
    for (const tp of (it.tags || [])) {
      const desc = (tp as any).tag?.description?.trim();
      if (!desc) continue;
      const score = tp.placementId ? (placementDepthScore.get(tp.placementId) ?? 0) : 0;
      if (score > bestScore) {
        bestScore = score;
        preferredName = desc;
      }
    }

    // even if no entry (should be rare), still render tags & minimal fields
    if (!entry) {
      const tagParts = (it.tags || []).map(tp => {
        const t = tp.tag?.name ?? '';
        const pname = tp.placementId ? (placementLabels.get(tp.placementId) || '') : '';
        return pname ? `${t} (${pname})` : t;
        // NOTE: name already set to preferredName above
      });
      rows.push({
        id: it.id,
        name: preferredName,
        condition: it.condition,
        tagChain: tagParts.join(' • '),
        fxDateISO: null,
        packageNumber: null,
        purchaseDateISO: null,
        jpy: { basePerUnit: 0, shipPerUnit: 0, customsPerUnit: 0, totalPerUnit: 0 },
      });
      continue;
    }

    const qty = Math.max(1, toNum(entry.quantity));
    const entryPricePPM = toNum(entry.priceWeightPpm);
    const entryShipPPM = toNum(entry.shippingWeightPpm);

    const src = sourceItemsById.get(entry.sourceItemId)!;
    const sourceItemShipPPM = toNum(src.shippingWeightPpm);

    // Source price (JPY)
    let sourcePriceYen = 0;
    if (src.scrapedItemId) sourcePriceYen = scrapedPriceById.get(src.scrapedItemId) ?? 0;
    else if (src.manualLineId) sourcePriceYen = manualPriceById.get(src.manualLineId) ?? 0;

    // Package subtotal (JPY)
    let packageSubtotal = 0;
    for (const s of (sessions.filter(ss => ss.id === entry.sessionId).length
      ? sessions.filter(ss => ss.id === entry.sessionId)
      : [])) {
      const sis = Array.from(sourceItemsById.values()).filter(si => si.sessionId === s.id);
      for (const si of sis) {
        if (si.scrapedItemId) packageSubtotal += scrapedPriceById.get(si.scrapedItemId) ?? 0;
        else if (si.manualLineId) packageSubtotal += manualPriceById.get(si.manualLineId) ?? 0;
      }
    }

    // pkg shipping + fx date
    let pkgShipTotal = 0;
    let fxDateISO: string | null = null;
    let packageNumber: string | null = null;
    let purchaseDateISO: string | null = null;

    const sess = sessById.get(entry.sessionId)!;
    if (sess.sourceType === 'ScrapedPackage' && sess.scrapedPackageId) {
      const pkg = scrapedPkgById.get(sess.scrapedPackageId) || null;
      const intl = toNum(pkg?.internationalShippingFeeYen ?? 0);
      const dom = toNum(pkg?.domesticShippingFeeYen ?? 0);
      pkgShipTotal = intl + dom;
      fxDateISO = pkg?.dateShipped ? pkg.dateShipped.toISOString().slice(0, 10) : null;
      packageNumber = (pkg as any)?.packageNumber ?? null;
      purchaseDateISO = fxDateISO;
    } else if (sess.sourceType === 'Manual' && sess.manualPurchaseId) {
      const mp = manualById.get(sess.manualPurchaseId) || null;
      const intl = toNum((mp as any)?.intlShippingTotalYen ?? 0);
      const dom = toNum((mp as any)?.domesticShippingTotalYen ?? 0);
      pkgShipTotal = intl + dom;
      purchaseDateISO = (mp as any)?.datePurchased
        ? new Date((mp as any).datePurchased).toISOString().slice(0, 10)
        : null;
      fxDateISO = purchaseDateISO;
    }

    // Allocations (same as filler)
    const baseAllocJPY = Math.round(sourcePriceYen * (entryPricePPM / PPM_DENOM));
    const sourceShipAllocJPY = Math.round(pkgShipTotal * (sourceItemShipPPM / PPM_DENOM));
    const entryShipAllocJPY = Math.round(sourceShipAllocJPY * (entryShipPPM / PPM_DENOM));

    let entryCustomsJPY = 0;
    if (packageSubtotal > 0) {
      const customsTotal = toNum(sess.customsTotalYen ?? 0);
      // source share is relative to session subtotal
      const srcKey = src.scrapedItemId ?? src.manualLineId!;
      const srcPrice =
        src.scrapedItemId ? (scrapedPriceById.get(src.scrapedItemId) ?? 0)
        : src.manualLineId ? (manualPriceById.get(src.manualLineId) ?? 0)
        : 0;
      const sourceShare = packageSubtotal > 0 ? (srcPrice / packageSubtotal) : 0;
      entryCustomsJPY = Math.round(customsTotal * sourceShare * (entryPricePPM / PPM_DENOM));
    }

    const basePerUnitJPY = Math.round(baseAllocJPY / qty);
    const shipPerUnitJPY = Math.round(entryShipAllocJPY / qty);
    const customsPerUnitJPY = Math.round(entryCustomsJPY / qty);
    const totalPerUnitJPY = basePerUnitJPY + shipPerUnitJPY + customsPerUnitJPY;

    const tagParts = (it.tags || []).map(tp => {
      const t = tp.tag?.name ?? '';
      const pname = tp.placementId ? (placementLabels.get(tp.placementId) || '') : '';
      return pname ? `${t} (${pname})` : t;
    });

    rows.push({
      id: it.id,
      name: preferredName, // 👈 use tag description when available
      condition: it.condition,
      tagChain: tagParts.join(' • '),
      fxDateISO,
      packageNumber,
      purchaseDateISO,
      jpy: {
        basePerUnit: basePerUnitJPY,
        shipPerUnit: shipPerUnitJPY,
        customsPerUnit: customsPerUnitJPY,
        totalPerUnit: totalPerUnitJPY,
      },
    });
  }

  const nextCursor = items.length === limit ? items[items.length - 1].id : null;
  return NextResponse.json({ items: rows, nextCursor });
}
