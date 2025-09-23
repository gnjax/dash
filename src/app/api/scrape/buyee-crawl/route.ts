import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { scrapeBuyeeShippedList } from '@/scrapers/buyee';
import { translateJaToEn } from '@/lib/translate';

function buildPageUrl(page: number): string {
  // fixed path; vary ?page=
  return `https://buyee.jp/mybaggages/shipped/1?term=0&page=${page}`;
}

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const { startPage = 1, maxPages = 10 } = await req.json().catch(() => ({}));
  let pagesCrawled = 0, inserted = 0, updated = 0, stopReason = '';

  try {
    for (let pageNum = Number(startPage); pageNum < Number(startPage) + Number(maxPages); pageNum++) {
      const url = buildPageUrl(pageNum);
      const { packages } = await scrapeBuyeeShippedList(url);
      pagesCrawled++;

      // keep only entries with a packageNumber (should be all)
      const pagePkgs = packages.filter(p => p.packageNumber);
      if (!pagePkgs.length) { stopReason = 'empty_or_invalid_page'; break; }

      // === STOP CONDITION ===
      // Only stop if:
      //  (1) page has 10 entries
      //  (2) every entry has dateShipped (i.e., shipped)
      //  (3) every entry is already in DB (seen)
      const isFullPage = pagePkgs.length === 10;
      const allHaveDate = pagePkgs.every(p => !!p.dateShipped);
      let allSeen = false;
      if (isFullPage && allHaveDate) {
        const keys = pagePkgs.map(p => p.packageNumber!);
        const already = await prisma.scrapedPackage.findMany({
          where: { packageNumber: { in: keys } },
          select: { packageNumber: true, dateShipped: true },
        });
        allSeen = already.length === pagePkgs.length;
        const allSeenWithDate = allSeen && already.every(row => row.dateShipped != null);
        if (allSeenWithDate) { stopReason = 'all_10_shipped_on_page_already_seen'; break; }
      }
      // ======================

      // Upsert every entry (shipped or not)
      for (const p of pagePkgs) {
        const ja = (p.items || []).map(i => i.title || '');
        const en = await translateJaToEn(ja);

        const existing = await prisma.scrapedPackage.findUnique({
          where: { packageNumber: p.packageNumber! },
          select: { id: true, packageNumber: true }
        });

        const up = await prisma.scrapedPackage.upsert({
          where: { packageNumber: p.packageNumber! },
          update: {
            pageUrl: url,
            dateShipped: p.dateShipped ? new Date(p.dateShipped) : null,
            intlTrackingNumber: p.intlTrackingNumber || null,
            intlTrackingUrl: p.intlTrackingUrl || null,
            internationalShippingFeeYen: p.internationalShippingFeeYen ?? null,
            domesticShippingFeeYen: p.domesticShippingFeeYen ?? null,
            raw: p,
            lastSeenAt: new Date(),
          },
          create: {
            source: 'buyee',
            pageUrl: url,
            packageNumber: p.packageNumber!, // unique
            dateShipped: p.dateShipped ? new Date(p.dateShipped) : null,
            intlTrackingNumber: p.intlTrackingNumber || null,
            intlTrackingUrl: p.intlTrackingUrl || null,
            internationalShippingFeeYen: p.internationalShippingFeeYen ?? null,
            domesticShippingFeeYen: p.domesticShippingFeeYen ?? null,
            raw: p,
          },
          select: { id: true, packageNumber: true },
        });

        // Replace items
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
    console.error('CRAWL_ERROR', e);
    return NextResponse.json({ error: e?.message || 'crawl failed', pagesCrawled, inserted, updated }, { status: 500 });
  }
}