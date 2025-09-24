export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { PPM_DENOM } from '@/lib/weights';
import { PackageStatus, Condition } from '@prisma/client'; // ✅ add Condition

export async function POST(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;

  const result = await prisma.$transaction(async (db) => {
    // 1) lock session by flipping finalizedAt if null
    const setFinal = await db.inventoryFillSession.updateMany({
      where: { id, finalizedAt: null },
      data: { finalizedAt: new Date() },
    });

    if (setFinal.count === 0) {
      // already finalized → still ensure the scraped package is marked Processed
      const sess = await db.inventoryFillSession.findUnique({
        where: { id },
        select: { sourceType: true, scrapedPackageId: true },
      });
      if (sess?.sourceType === 'ScrapedPackage' && sess.scrapedPackageId) {
        await db.scrapedPackage.update({
          where: { id: sess.scrapedPackageId },
          data: { status: PackageStatus.Processed },
        });
      }
      return { created: 0, alreadyFinalized: true };
    }

    const session = await db.inventoryFillSession.findUnique({
      where: { id },
      include: {
        sourceItems: { include: { entries: { include: { entryTags: true } } } },
      },
    });
    if (!session) throw new Error('Session not found after lock');

    const isScraped = session.sourceType === 'ScrapedPackage';

    // package totals
    let intlShip = 0, domShip = 0, customs = Number(session.customsTotalYen ?? 0);
    if (isScraped) {
      const pkg = await db.scrapedPackage.findUnique({ where: { id: session.scrapedPackageId! } });
      intlShip = Number(pkg?.internationalShippingFeeYen ?? 0);
      domShip = Number(pkg?.domesticShippingFeeYen ?? 0);
    } else {
      const mp = await db.manualPurchase.findUnique({ where: { id: session.manualPurchaseId! } });
      intlShip = Number(mp?.intlShippingTotalYen ?? 0);
      domShip = Number(mp?.domesticShippingTotalYen ?? 0);
    }
    const pkgShippingTotal = intlShip + domShip;

    // load source prices/titles
    const priceByKey: Record<string, number> = {};
    const titleByKey: Record<string, string> = {};
    if (isScraped) {
      const sitems = await db.scrapedItem.findMany({
        where: { scrapedPackageId: session.scrapedPackageId! },
        select: { id: true, priceYen: true, titleEn: true, titleJa: true },
      });
      for (const s of sitems) {
        priceByKey[s.id] = Number(s.priceYen ?? 0);
        titleByKey[s.id] = s.titleEn ?? s.titleJa ?? '(untitled)';
      }
    } else {
      const lines = await db.manualLine.findMany({
        where: { manualPurchaseId: session.manualPurchaseId! },
        select: { id: true, priceYen: true, title: true },
      });
      for (const l of lines) {
        priceByKey[l.id] = Number(l.priceYen ?? 0);
        titleByKey[l.id] = l.title;
      }
    }

    const pkgSubtotal = session.sourceItems.reduce((a, si) => {
      const key = si.scrapedItemId ?? si.manualLineId!;
      return a + (priceByKey[key] ?? 0);
    }, 0);

    // 2) Create items idempotently per entry using (fillEntryId, ordinal) uniqueness
    let created = 0;

    for (const si of session.sourceItems) {
      const key = si.scrapedItemId ?? si.manualLineId!;
      const sourcePrice = priceByKey[key] ?? 0;
      const sourceShip = Math.round((pkgShippingTotal * si.shippingWeightPpm) / PPM_DENOM);

      for (const e of si.entries) {
        const qty = e.quantity;
        const baseName = e.nameOverride ?? titleByKey[key] ?? '(untitled)';
        const originType = isScraped ? 'Scraped' : 'Manual';

        // Insert N items with ordinals 1..qty (skip duplicates via unique)
        const rows = Array.from({ length: qty }, (_, i) => ({
          name: baseName,
          originType: originType as any,
          scrapedItemId: si.scrapedItemId ?? null,
          manualLineId: si.manualLineId ?? null,
          fillEntryId: e.id,
          ordinal: i + 1,
          condition: (e as any).condition ?? Condition.Loose, // ✅ set condition (default Loose)
        }));

        // create items; duplicates (same fillEntryId, ordinal) are ignored
        const result = await db.inventoryItem.createMany({
          data: rows,
          skipDuplicates: true,
        });
        created += result.count; // ✅ accurate number created this run

        // fetch ids of all items for this entry (for tagging)
        const items = await db.inventoryItem.findMany({
          where: { fillEntryId: e.id },
          select: { id: true, ordinal: true },
        });

        // upsert first tag (with placement) for each item if present
        const t = e.entryTags[0];
        if (t && items.length) {
          await db.inventoryItemTag.createMany({
            data: items.map(it => ({
              itemId: it.id,
              tagId: t.tagId,
              placementId: t.placementId ?? null,
            })),
            skipDuplicates: true,
          });
        }
      }
    }

    // ✅ Mark scraped package as Processed when finalizing
    if (isScraped && session.scrapedPackageId) {
      await db.scrapedPackage.update({
        where: { id: session.scrapedPackageId },
        data: { status: PackageStatus.Processed },
      });
    }

    return { created, alreadyFinalized: false };
  });

  return NextResponse.json({ ok: true, ...result });
}
