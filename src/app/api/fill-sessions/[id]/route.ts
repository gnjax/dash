// src/app/api/fill-sessions/[id]/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { PPM_DENOM } from '@/lib/weights';

function toNum(d: any) {
  if (d == null) return 0;
  if (typeof d === 'number') return d;
  if (typeof d === 'string') return Number(d);
  if (typeof d.toNumber === 'function') return d.toNumber();
  return Number(d);
}

// ===================
// GET /api/fill-sessions/:id
// ===================
export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;

  // get session with source items + entries (+ tags)
  const session = await prisma.inventoryFillSession.findUnique({
    where: { id },
    include: {
      sourceItems: { include: { entries: { include: { entryTags: true } } } },
    },
  });
  if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 });

  const isScraped = session.sourceType === 'ScrapedPackage';

  // title/price (+ listingId) map for source items (scraped items or manual lines)
  const titlePriceMap: Record<string, { title: string; priceYen: number; listingId: string | null }> = {};

  // shipping totals + shipping date for FX
  let intlShip = 0;
  let domShip = 0;
  let fxDateISO: string | null = null;

  if (isScraped) {
    const pkg = await prisma.scrapedPackage.findUnique({
      where: { id: session.scrapedPackageId! },
      include: { items: true },
    });
    if (!pkg) return NextResponse.json({ error: 'Scraped package not found' }, { status: 404 });

    for (const it of pkg.items) {
      titlePriceMap[it.id] = {
        title: it.titleEn ?? it.titleJa ?? '(untitled)',
        priceYen: toNum(it.priceYen ?? 0),
        listingId: it.listingId ?? null,   // ✅ include listingId for /api/thumb/[listingId]
      };
    }

    intlShip = toNum(pkg.internationalShippingFeeYen ?? 0);
    domShip = toNum(pkg.domesticShippingFeeYen ?? 0);
    fxDateISO = pkg.dateShipped ? pkg.dateShipped.toISOString().slice(0, 10) : null; // ✅ shipping date for FX
  } else {
    const mp = await prisma.manualPurchase.findUnique({
      where: { id: session.manualPurchaseId! },
      include: { lines: true },
    });
    if (!mp) return NextResponse.json({ error: 'Manual purchase not found' }, { status: 404 });

    for (const ln of mp.lines) {
      titlePriceMap[ln.id] = {
        title: ln.title ?? '(untitled)',
        priceYen: toNum(ln.priceYen ?? 0),
        listingId: null, // manual lines have no listingId
      };
    }

    intlShip = toNum((mp as any).intlShippingTotalYen ?? 0);
    domShip = toNum((mp as any).domShippingTotalYen ?? 0);
    // no natural shipped date for manual; leave fxDateISO = null (UI will fall back to today)
  }

  // shape the response
  return NextResponse.json({
    session: {
      id: session.id,
      sourceType: session.sourceType,
      customsTotalYen: toNum(session.customsTotalYen ?? 0),
      finalizedAt: session.finalizedAt,
    },
    packageTotals: {
      intlShip,
      domShip,
      packageShippingTotal: intlShip + domShip,
    },
    // ✅ preferred FX date for UI (YYYY-MM-DD or null)
    fxDateISO,

    sourceItems: session.sourceItems.map((si) => {
      const key = si.scrapedItemId ?? si.manualLineId!;
      const meta = titlePriceMap[key] || { title: '(missing)', priceYen: 0, listingId: null };
      return {
        id: si.id,
        scrapedItemId: si.scrapedItemId,
        manualLineId: si.manualLineId,
        title: meta.title,
        priceYen: meta.priceYen,
        listingId: meta.listingId,            // ✅ expose listingId to the UI
        shippingWeightPpm: si.shippingWeightPpm,
        entries: si.entries.map(e => ({
          id: e.id,
          nameOverride: e.nameOverride,
          quantity: e.quantity,
          priceWeightPpm: e.priceWeightPpm,
          shippingWeightPpm: e.shippingWeightPpm,
          tagId: e.entryTags[0]?.tagId ?? null,
          tagPlacementId: e.entryTags[0]?.placementId ?? null, // ✅ first tag chosen
        })),
      };
    }),
  }, { status: 200 });
}

// ===================
// PATCH /api/fill-sessions/:id
// ===================
//
// body:
// {
//   customsTotalYen: number,
//   sourceItems: [{ id, shippingWeightPpm }],
//   entriesUpsert: [{
//     id?, sourceItemId, nameOverride, quantity, priceWeightPpm, shippingWeightPpm,
//     tagId, tagPlacementId
//   }]
// }
export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const body = await req.json();

  await prisma.$transaction(async (db) => {
    // 1) update customs
    if (typeof body.customsTotalYen === 'number' && Number.isFinite(body.customsTotalYen)) {
      await db.inventoryFillSession.update({
        where: { id },
        data: { customsTotalYen: body.customsTotalYen },
      });
    }

    // 2) update source item shipping weights
    if (Array.isArray(body.sourceItems)) {
      for (const si of body.sourceItems) {
        const ppm = Math.max(0, Math.min(PPM_DENOM, (si.shippingWeightPpm | 0)));
        await db.inventoryFillSourceItem.update({
          where: { id: si.id },
          data: { shippingWeightPpm: ppm },
        });
      }
    }

    // 3) upsert entries + tags
    const keepIds = new Set<string>();
    if (Array.isArray(body.entriesUpsert)) {
      for (const e of body.entriesUpsert) {
        const data = {
          sessionId: id,
          sourceItemId: e.sourceItemId,
          nameOverride: e.nameOverride ?? null,
          quantity: Math.max(1, Number(e.quantity || 1)) | 0,
          priceWeightPpm: Math.max(0, Math.min(PPM_DENOM, (e.priceWeightPpm | 0))),
          shippingWeightPpm: Math.max(0, Math.min(PPM_DENOM, (e.shippingWeightPpm | 0))),
        };

        let entryId: string;
        if (e.id) {
          entryId = String(e.id);
          await db.inventoryFillEntry.update({ where: { id: entryId }, data });
          // replace tag link
          await db.inventoryFillEntryTag.deleteMany({ where: { entryId } });
        } else {
          const created = await db.inventoryFillEntry.create({ data });
          entryId = created.id;
        }
        keepIds.add(entryId);

        if (e.tagId) {
          await db.inventoryFillEntryTag.create({
            data: {
              entryId,
              tagId: e.tagId,
              placementId: e.tagPlacementId ?? null,
            },
          });
        }
      }

      // prune entries not present anymore
      const existing = await db.inventoryFillEntry.findMany({
        where: { sessionId: id },
        select: { id: true },
      });
      const toDelete = existing.map(x => x.id).filter(dbId => !keepIds.has(dbId));
      if (toDelete.length) {
        // tags cascade via onDelete: Cascade, but deleteMany here is fine either way
        await db.inventoryFillEntry.deleteMany({ where: { id: { in: toDelete } } });
      }
    }
  });

  return NextResponse.json({ ok: true });
}
