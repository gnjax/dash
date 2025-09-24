import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { scrapeZenMarketParcels } from '@/scrapers/zenmarket';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { pageUrl } = await req.json().catch(() => ({}));
    const url =
      pageUrl || 'https://zenmarket.jp/en/profile/parcel.aspx?state=5';

    const pkgs = await scrapeZenMarketParcels(url);

    let inserted = 0;
    let updated = 0;

    for (const p of pkgs) {
      const now = new Date();

      // Upsert package WITHOUT nested items to avoid duplicate-creates on reruns
      const existing = await prisma.scrapedPackage.findUnique({
        where: { packageNumber: p.packageNumber },
        select: { id: true, packageNumber: true },
      });

      const up = await prisma.scrapedPackage.upsert({
        where: { packageNumber: p.packageNumber },
        update: {
          source: 'zenmarket',
          pageUrl: p.pageUrl,
          dateShipped: p.dateShipped ? new Date(p.dateShipped) : null,
          intlTrackingNumber: p.trackingNumber ?? null,
          intlTrackingUrl: p.trackingUrl ?? null,
          internationalShippingFeeYen: p.internationalShippingFeeYen ?? null,
          domesticShippingFeeYen: p.domesticShippingFeeYen ?? null,
          raw: p.raw,
          lastSeenAt: now,
        },
        create: {
          source: 'zenmarket',
          pageUrl: p.pageUrl,
          packageNumber: p.packageNumber,
          dateShipped: p.dateShipped ? new Date(p.dateShipped) : null,
          intlTrackingNumber: p.trackingNumber ?? null,
          intlTrackingUrl: p.trackingUrl ?? null,
          internationalShippingFeeYen: p.internationalShippingFeeYen ?? null,
          domesticShippingFeeYen: p.domesticShippingFeeYen ?? null,
          raw: p.raw,
          firstSeenAt: now,
          lastSeenAt: now,
        },
        select: { id: true },
      });

      // Replace items for this package idempotently
      await prisma.scrapedItem.deleteMany({
        where: { scrapedPackageId: up.id },
      });

      const items = p.items?.create ?? [];
      if (items.length) {
        await prisma.scrapedItem.createMany({
          data: items.map((it) => ({
            scrapedPackageId: up.id,
            orderNumber: it.orderNumber ?? null,
            titleJa: it.titleJa ?? null,
            titleEn: (it.titleEn ?? it.titleJa) ?? null, // JP duplicated to EN upstream
            itemUrl: it.itemUrl ?? null,
            listingId: it.listingId ?? null,
            // Prisma Decimal accepts numbers here
            priceYen:
              typeof it.priceYen === 'number' ? it.priceYen : null,
          })),
          skipDuplicates: true,
        });
      }

      if (existing) updated++;
      else inserted++;
    }

    return NextResponse.json({
      pagesCrawled: 1,
      inserted,
      updated,
      stopReason: '',
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: String(err?.message || err) || 'unknown error',
        pagesCrawled: 0,
        inserted: 0,
        updated: 0,
      },
      { status: 500 }
    );
  }
}
