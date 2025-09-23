import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { scrapeZenMarketParcels } from '@/scrapers/zenmarket';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { pageUrl } = await req.json().catch(() => ({}));
    const url = pageUrl || 'https://zenmarket.jp/en/profile/parcel.aspx?state=5';

    const pkgs = await scrapeZenMarketParcels(url);

    let inserted = 0;
    let updated = 0;

    for (const p of pkgs) {
      const now = new Date();
      const existing = await prisma.scrapedPackage.findUnique({
        where: { packageNumber: p.packageNumber },
      });

      const payload = {
        source: 'zenmarket' as const,
        pageUrl: p.pageUrl,
        dateShipped: p.dateShipped ? new Date(p.dateShipped) : null,
        packageNumber: p.packageNumber,
        intlTrackingNumber: p.trackingNumber ?? null,
        intlTrackingUrl: p.trackingUrl ?? null,
        internationalShippingFeeYen: p.internationalShippingFeeYen ?? 0,
        domesticShippingFeeYen: p.domesticShippingFeeYen ?? 0,
        items: p.items,
        raw: p.raw,
        lastSeenAt: now,
        ...(existing ? {} : { firstSeenAt: now }),
      };

      if (existing) {
        await prisma.scrapedPackage.update({
          where: { packageNumber: p.packageNumber },
          data: payload,
        });
        updated++;
      } else {
        await prisma.scrapedPackage.create({ data: payload });
        inserted++;
      }
    }

    return NextResponse.json({
      pagesCrawled: 1,
      inserted,
      updated,
      stopReason: '',
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: String(err?.message || err) || 'unknown error', pagesCrawled: 0, inserted: 0, updated: 0 },
      { status: 500 }
    );
  }
}