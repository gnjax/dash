import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { scrapeFromJapanShippedList } from '@/scrapers/fromjapan';
import { translateJaToEn } from '@/lib/translate';

// Always use base list URL; paging is done via POST { currentPage } inside the scraper.
function baseUrl(): string {
  return 'https://www.fromjapan.co.jp/japan/en/member/history/ship/list';
}

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const { startPage = 1, maxPages = 1 } = await req.json().catch(() => ({})); // default: just page 1
  let pagesCrawled = 0, inserted = 0, updated = 0, stopReason = '';

  try {
    for (let pageNum = Number(startPage); pageNum < Number(startPage) + Number(maxPages); pageNum++) {
      const url = baseUrl();
      const { packages } = await scrapeFromJapanShippedList(url, pageNum);
      pagesCrawled++;

      if (!packages.length) { stopReason = 'empty_page'; break; }

      // Stop when EVERYTHING on the page is already in DB (they are all shipped pages)
      const keys = packages.map(p => p.packageNumber);
      const already = await prisma.scrapedPackage.findMany({
        where: { packageNumber: { in: keys } },
        select: { packageNumber: true },
      });
      if (already.length === packages.length) { stopReason = 'all_seen_on_page'; break; }

      for (const p of packages) {
        // Translate item titles
        const ja = (p.items || []).map(i => i.title || '');
        const en = await translateJaToEn(ja);

        const existing = await prisma.scrapedPackage.findUnique({
          where: { packageNumber: p.packageNumber },
          select: { id: true, packageNumber: true }
        });

        const up = await prisma.scrapedPackage.upsert({
          where: { packageNumber: p.packageNumber },
          update: {
            pageUrl: url,
            dateShipped: p.dateShipped ? new Date(p.dateShipped) : null,
            intlTrackingNumber: p.trackingNumbers?.[0] || null,
            intlTrackingUrl: null,
            internationalShippingFeeYen: p.internationalShippingFeeYen ?? null,
            domesticShippingFeeYen: p.domesticShippingFeeYen ?? null,
            raw: p,
            lastSeenAt: new Date(),
          },
          create: {
            source: 'fromjapan',
            pageUrl: url,
            packageNumber: p.packageNumber,
            dateShipped: p.dateShipped ? new Date(p.dateShipped) : null,
            intlTrackingNumber: p.trackingNumbers?.[0] || null,
            intlTrackingUrl: null,
            internationalShippingFeeYen: p.internationalShippingFeeYen ?? null,
            domesticShippingFeeYen: p.domesticShippingFeeYen ?? null,
            raw: p,
          },
          select: { id: true, packageNumber: true },
        });

        // Replace items (idempotent)
        await prisma.scrapedItem.deleteMany({ where: { scrapedPackageId: up.id } });
        if (p.items?.length) {
          await prisma.scrapedItem.createMany({
            data: p.items.map((it, idx) => ({
              scrapedPackageId: up.id,
              orderNumber: it.orderNumber || null,
              titleJa: it.title || null,
              titleEn: en[idx] || it.title || null,
              itemUrl: it.itemUrl || null,
              listingId: it.listingId || null,
              priceYen: typeof it.priceYen === 'number' ? it.priceYen : null,
            })),
            skipDuplicates: true,
          });
        }

        if (existing) updated++; else inserted++;
      }
    }

    return NextResponse.json({ pagesCrawled, inserted, updated, stopReason }, { status: 200 });
  } catch (e: any) {
    console.error('FJ_CRAWL_ERROR', e);
    return NextResponse.json({ error: e?.message || 'crawl failed', pagesCrawled, inserted, updated }, { status: 500 });
  }
}
