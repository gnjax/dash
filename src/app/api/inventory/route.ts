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
  const cursor = searchParams.get('cursor');
  const q = (searchParams.get('q') || '').trim();

  // --- Build optional WHERE for search ---
  // name (InventoryItem), tag (InventoryItemTag -> Tag), packageNumber (ScrapedPackage)
  // For packageNumber, first resolve sessions->entries so we can filter by fillEntryId.
  let entryIdsFromPackageQuery: string[] = [];
  if (q.length) {
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

  const where =
    q.length === 0
      ? undefined
      : {
          OR: [
            { name: { contains: q, mode: 'insensitive' } },
            { tags: { some: { tag: { name: { contains: q, mode: 'insensitive' } } } } },
            ...(entryIdsFromPackageQuery.length
              ? [{ fillEntryId: { in: entryIdsFromPackageQuery } }]
              : []),
          ],
        };

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
      tags: {
        select: {
          tag: { select: { id: true, name: true } },
          placementId: true,
        },
      },
    },
  });

  // 2) Batch lookups needed for allocations
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
        select: {
          id: true,
          sourceType: true,
          customsTotalYen: true,
          scrapedPackageId: true,
          manualPurchaseId: true,
        },
      })
    : [];
  const sessionsById = new Map(sessions.map(s => [s.id, s]));

  // all session source items (to compute package subtotal)
  const allSessSourceItems = sessionIds.length
    ? await prisma.inventoryFillSourceItem.findMany({
        where: { sessionId: { in: sessionIds } },
        select: { sessionId: true, scrapedItemId: true, manualLineId: true },
      })
    : [];
  const sessToSourceItems = new Map<string, { scrapedItemId: string | null; manualLineId: string | null }[]>();
  for (const si of allSessSourceItems) {
    const arr = sessToSourceItems.get(si.sessionId) ?? [];
    arr.push({ scrapedItemId: si.scrapedItemId ?? null, manualLineId: si.manualLineId ?? null });
    sessToSourceItems.set(si.sessionId, arr);
  }

  // Price lookups
  const scrapedIds = Array.from(new Set(allSessSourceItems.map(si => si.scrapedItemId).filter(Boolean) as string[]));
  const manualIds  = Array.from(new Set(allSessSourceItems.map(si => si.manualLineId ).filter(Boolean) as string[]));

  const scrapedItems = scrapedIds.length
    ? await prisma.scrapedItem.findMany({
        where: { id: { in: scrapedIds } },
        select: { id: true, priceYen: true, scrapedPackageId: true },
      })
    : [];
  const manualLines = manualIds.length
    ? await prisma.manualLine.findMany({
        where: { id: { in: manualIds } },
        select: { id: true, priceYen: true },
      })
    : [];

  const scrapedPriceById = new Map(scrapedItems.map(si => [si.id, toNum(si.priceYen)]));
  const manualPriceById  = new Map(manualLines.map(ml => [ml.id, toNum(ml.priceYen)]));

  // Session-level shipping totals & dates
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

  // Placement label via closure (root → … → leaf). We want **leaf at end**, so sort by depth DESC (depth 0 is leaf).
  const placementIds = Array.from(
    new Set(items.flatMap(i => i.tags?.map(t => t.placementId).filter(Boolean) as string[] ?? []))
  );
  const placementLabels = new Map<string, string>();
  if (placementIds.length) {
    const closures = await prisma.placementClosure.findMany({
      where: { descendantPlacementId: { in: placementIds } },
      select: {
        descendantPlacementId: true,
        depth: true,
        ancestor: { select: { id: true, tag: { select: { name: true } } } },
      },
    });
    const byDesc = new Map<string, { depth: number; name: string }[]>();
    for (const c of closures) {
      const nm = c.ancestor.tag?.name ?? '';
      if (!nm) continue;
      const arr = byDesc.get(c.descendantPlacementId) ?? [];
      arr.push({ depth: c.depth, name: nm });
      byDesc.set(c.descendantPlacementId, arr);
    }
    for (const [desc, arr] of byDesc) {
      // depth: 0=self(leaf), larger=ancestors. For leaf at end -> sort DESC so root ... leaf
      arr.sort((a, b) => b.depth - a.depth);
      placementLabels.set(desc, arr.map(x => x.name).join(' > '));
    }
  }

  // 3) Build rows
  const rows: any[] = [];

  for (const it of items) {
    const fillEntryId = it.fillEntryId || null;
    const entry = fillEntryId ? entriesById.get(fillEntryId) : null;

    if (!entry) {
      const tagParts = (it.tags || []).map(tp => {
        const t = tp.tag?.name ?? '';
        const pname = tp.placementId ? (placementLabels.get(tp.placementId) || '') : '';
        return pname ? `${t} (${pname})` : t;
      });
      rows.push({
        id: it.id,
        name: it.name,
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
    const entryShipPPM  = toNum(entry.shippingWeightPpm);

    const src = sourceItemsById.get(entry.sourceItemId)!;
    const sourceItemShipPPM = toNum(src.shippingWeightPpm);

    // Source base price (JPY)
    let sourcePriceYen = 0;
    if (src.scrapedItemId) sourcePriceYen = scrapedPriceById.get(src.scrapedItemId) ?? 0;
    else if (src.manualLineId) sourcePriceYen = manualPriceById.get(src.manualLineId) ?? 0;

    // Package subtotal (JPY)
    let packageSubtotal = 0;
    const sessSources = sessToSourceItems.get(entry.sessionId) ?? [];
    for (const s of sessSources) {
      if (s.scrapedItemId) packageSubtotal += scrapedPriceById.get(s.scrapedItemId) ?? 0;
      else if (s.manualLineId) packageSubtotal += manualPriceById.get(s.manualLineId) ?? 0;
    }

    // Session meta: shipping + dates
    const sess = sessionsById.get(entry.sessionId)!;
    let pkgShipTotal = 0;
    let fxDateISO: string | null = null;
    let packageNumber: string | null = null;
    let purchaseDateISO: string | null = null;

    if (sess.sourceType === 'ScrapedPackage' && sess.scrapedPackageId) {
      const pkg = scrapedPkgById.get(sess.scrapedPackageId) || null;
      const intl = toNum(pkg?.internationalShippingFeeYen ?? 0);
      const dom  = toNum(pkg?.domesticShippingFeeYen ?? 0);
      pkgShipTotal = intl + dom;
      fxDateISO = pkg?.dateShipped ? pkg.dateShipped.toISOString().slice(0, 10) : null;
      packageNumber = (pkg as any)?.packageNumber ?? null;
      purchaseDateISO = fxDateISO;
    } else if (sess.sourceType === 'Manual' && sess.manualPurchaseId) {
      const mp = manualById.get(sess.manualPurchaseId) || null;
      const intl = toNum((mp as any)?.intlShippingTotalYen ?? 0);
      const dom  = toNum((mp as any)?.domesticShippingTotalYen ?? 0);
      pkgShipTotal = intl + dom;
      purchaseDateISO = (mp as any)?.datePurchased
        ? new Date((mp as any).datePurchased).toISOString().slice(0, 10)
        : null;
      fxDateISO = purchaseDateISO;
    }

    // Allocations (JPY) — same as Inventory Filler
    const baseAllocJPY        = Math.round(sourcePriceYen * (entryPricePPM / PPM_DENOM));
    const sourceShipAllocJPY  = Math.round(pkgShipTotal   * (sourceItemShipPPM / PPM_DENOM));
    const entryShipAllocJPY   = Math.round(sourceShipAllocJPY * (entryShipPPM / PPM_DENOM));

    let entryCustomsJPY = 0;
    if (packageSubtotal > 0) {
      const customsTotal = toNum(sess.customsTotalYen ?? 0);
      const sourceShare  = sourcePriceYen / packageSubtotal;
      entryCustomsJPY = Math.round(customsTotal * sourceShare * (entryPricePPM / PPM_DENOM));
    }

    const basePerUnitJPY    = Math.round(baseAllocJPY / qty);
    const shipPerUnitJPY    = Math.round(entryShipAllocJPY / qty);
    const customsPerUnitJPY = Math.round(entryCustomsJPY / qty);
    const totalPerUnitJPY   = basePerUnitJPY + shipPerUnitJPY + customsPerUnitJPY;

    // Tag chain: "Tag (Root > ... > Leaf)" — leaf at the end
    const tagParts = (it.tags || []).map(tp => {
      const t = tp.tag?.name ?? '';
      const pname = tp.placementId ? (placementLabels.get(tp.placementId) || '') : '';
      return pname ? `${t} (${pname})` : t;
    });

    rows.push({
      id: it.id,
      name: it.name,
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
