import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function toNum(d: any) {
  if (!d) return 0;
  if (typeof d === 'number') return d;
  if (typeof d === 'string') return Number(d);
  if (typeof d.toNumber === 'function') return d.toNumber();
  return Number(d);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q')?.trim() || '';
  const sort = (searchParams.get('sort') || 'date_desc') as
    | 'date_desc' | 'date_asc'
    | 'intl_desc' | 'intl_asc'
    | 'dom_desc'  | 'dom_asc'
    | 'items_desc'| 'items_asc';
  const source = searchParams.get('source') || '';
  const status = searchParams.get('status') || ''; // reserved for future flags

  const where: any = {};
  if (q) {
    where.OR = [
      { packageNumber:      { contains: q, mode: 'insensitive' } },
      { intlTrackingNumber: { contains: q, mode: 'insensitive' } },
      { pageUrl:            { contains: q, mode: 'insensitive' } },
      { items: { some: {
        OR: [
          { titleJa:  { contains: q, mode: 'insensitive' } },
          { titleEn:  { contains: q, mode: 'insensitive' } },
          { listingId:{ contains: q, mode: 'insensitive' } },
        ]
      }}},
    ];
  }
  if (source) where.source = source;
  // when you add blacklisted/processed flags on ScrapedPackage, extend `where` using `status`

  const orderBy =
    sort === 'date_asc'   ? [{ dateShipped: 'asc' }] :
    sort === 'intl_desc'  ? [{ internationalShippingFeeYen: 'desc' }] :
    sort === 'intl_asc'   ? [{ internationalShippingFeeYen: 'asc'  }] :
    sort === 'dom_desc'   ? [{ domesticShippingFeeYen: 'desc'      }] :
    sort === 'dom_asc'    ? [{ domesticShippingFeeYen: 'asc'       }] :
    sort === 'items_desc' ? [{ _count: { items: 'desc' } }] :
    sort === 'items_asc'  ? [{ _count: { items: 'asc'  } }] :
    [{ dateShipped: 'desc' as const }, { lastSeenAt: 'desc' as const }];

  const data = await prisma.scrapedPackage.findMany({
    where,
    orderBy,
    include: {
      items: {
        select: { id: true, titleJa: true, titleEn: true, itemUrl: true, listingId: true, priceYen: true },
        take: 20,
      },
      _count: { select: { items: true } },
    },
    take: 9999,
  });

  return NextResponse.json(
    data.map(p => ({
      id: p.id,
      source: p.source,
      pageUrl: p.pageUrl,
      dateShipped: p.dateShipped?.toISOString().slice(0,10) ?? null,
      packageNumber: p.packageNumber,
      intlTrackingNumber: p.intlTrackingNumber,
      intlTrackingUrl: p.intlTrackingUrl,
      internationalShippingFeeYen: toNum(p.internationalShippingFeeYen),
      domesticShippingFeeYen: toNum(p.domesticShippingFeeYen),
      itemsCount: (p as any)._count.items,
      items: p.items.map(it => ({
        id: it.id,
        title: it.titleEn || it.titleJa,
        listingId: it.listingId,
        itemUrl: it.itemUrl,
        priceYen: it.priceYen ? toNum(it.priceYen) : null,
      })),
      status: p.status,
    }))
  );
}
