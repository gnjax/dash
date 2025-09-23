import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { scrapeFromJapanShippedList } from '@/scrapers/fromjapan';
import { translateJaToEn } from '@/lib/translate';

function buildPageUrl(page: number): string {
  // FromJapan shipped history page; page param TBD later.
  // We keep the builder so it's trivial to add pagination later.
  if (page <= 1) return 'https://www.fromjapan.co.jp/japan/en/member/history/ship/list';
  return `https://www.fromjapan.co.jp/japan/en/member/history/ship/list?page=${page}`;
}

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const { startPage = 1, maxPages = 1 } = await req.json().catch(() => ({})); // default: just page 1
  let pagesCrawled = 0, inserted = 0, updated = 0, stopReason = '';

  try {
    for (let pageNum = Number(startPage); pageNum < Number(startPage) + Number(maxPages); pageNum++) {
      const url = buildPageUrl(pageNum);
      const { packages } = await scrapeFromJapanShippedList(url);
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
            intlTrackingNumber: p.trackingNumbers?.[0] || null,   // single tracking per package entry
            intlTrackingUrl: null, // FJ detail URL not required here; can add later
            internationalShippingFeeYen: p.internationalShippingFeeYen ?? null,
            domesticShippingFeeYen: p.domesticShippingFeeYen ?? null,
            raw: p,
            lastSeenAt: new Date(),
          },
          create: {
            source: 'fromjapan',
            pageUrl: url,
            packageNumber: p.packageNumber, // unique (includes #1/#2 for multi-pack)
            dateShipped: p.dateShipped ? new Date(p.dateShipped) : null,
            intlTrackingNumber: p.trackingNumbers?.[0] || null,
            intlTrackingUrl: null,
            internationalShippingFeeYen: p.internationalShippingFeeYen ?? null,
            domesticShippingFeeYen: p.domesticShippingFeeYen ?? null,
            raw: p,
          },
          select: { id: true, packageNumber: true },
        });

        // Replace items for this package
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