import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function toNum(d: any) {
  if (!d) return 0;
  if (typeof d === 'number') return d;
  if (typeof d === 'string') return Number(d);
  if (typeof (d as any).toNumber === 'function') return (d as any).toNumber();
  return Number(d);
}

// Accept UI labels or enum strings and normalize to Prisma enum
function normalizeStatus(raw: string | null): 'Todo' | 'Processed' | 'Blacklist' | null {
  if (!raw) return null;
  const s = raw.trim().toLowerCase();
  if (s === 'todo' || s === 'to process' || s === 'to_process' || s === 'to-process' || s === 'toprocess') return 'Todo';
  if (s === 'processed') return 'Processed';
  if (s === 'blacklist' || s === 'blacklisted') return 'Blacklist';
  return null;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const q = searchParams.get('q')?.trim() || '';
  const sort = (searchParams.get('sort') || 'date_desc') as
    | 'date_desc'
    | 'date_asc'
    | 'intl_desc'
    | 'intl_asc'
    | 'dom_desc'
    | 'dom_asc'
    | 'items_desc'
    | 'items_asc';
  const source = searchParams.get('source') || '';
  const statusParam = searchParams.get('status') || '';

  const where: any = {};

  if (q) {
    where.OR = [
      { packageNumber: { contains: q, mode: 'insensitive' } },
      { intlTrackingNumber: { contains: q, mode: 'insensitive' } },
      { pageUrl: { contains: q, mode: 'insensitive' } },
      {
        items: {
          some: {
            OR: [
              { titleJa: { contains: q, mode: 'insensitive' } },
              { titleEn: { contains: q, mode: 'insensitive' } },
              { listingId: { contains: q, mode: 'insensitive' } },
            ],
          },
        },
      },
    ];
  }

  if (source) where.source = source;

  // ✅ status filter (supports UI labels or enum string)
  const status = normalizeStatus(statusParam);
  if (status) where.status = status;

  const orderBy =
    sort === 'date_asc' ? [{ dateShipped: 'asc' }] :
    sort === 'intl_desc' ? [{ internationalShippingFeeYen: 'desc' }] :
    sort === 'intl_asc' ? [{ internationalShippingFeeYen: 'asc' }] :
    sort === 'dom_desc' ? [{ domesticShippingFeeYen: 'desc' }] :
    sort === 'dom_asc' ? [{ domesticShippingFeeYen: 'asc' }] :
    sort === 'items_desc' ? [{ _count: { items: 'desc' } }] :
    sort === 'items_asc' ? [{ _count: { items: 'asc' } }] :
    // default
    [{ dateShipped: 'desc' as const }, { lastSeenAt: 'desc' as const }];

  const data = await prisma.scrapedPackage.findMany({
    where,
    orderBy,
    include: {
      items: {
        select: {
          id: true,
          titleJa: true,
          titleEn: true,
          itemUrl: true,
          listingId: true,
          priceYen: true,
        },
        take: 20,
      },
      _count: { select: { items: true } },
    },
    take: 9999,
  });

  return NextResponse.json(
    data.map((p) => ({
      id: p.id,
      source: p.source,
      pageUrl: p.pageUrl,
      dateShipped: p.dateShipped?.toISOString().slice(0, 10) ?? null,
      packageNumber: p.packageNumber,
      intlTrackingNumber: p.intlTrackingNumber,
      intlTrackingUrl: p.intlTrackingUrl,
      internationalShippingFeeYen: toNum(p.internationalShippingFeeYen),
      domesticShippingFeeYen: toNum(p.domesticShippingFeeYen),
      itemsCount: (p as any)._count.items,
      items: p.items.map((it) => ({
        id: it.id,
        title: it.titleEn || it.titleJa,
        listingId: it.listingId,
        itemUrl: it.itemUrl,
        priceYen: it.priceYen ? toNum(it.priceYen) : null,
      })),
      status: p.status, // 'Todo' | 'Processed' | 'Blacklist'
    }))
  );
}
