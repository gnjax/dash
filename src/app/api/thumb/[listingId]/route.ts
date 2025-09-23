// app/api/thumb/[listingId]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function buyeeAuctionUrl(listingId: string) {
  return `https://buyee.jp/item/jdirectitems/auction/${listingId}`;
}
function rakutenDetailUrl(listingIdRaw: string) {
  // Next params may decode %3A to ':' — ensure it's encoded for the URL path segment
  const encoded = listingIdRaw.includes(':') ? encodeURIComponent(listingIdRaw) : listingIdRaw;
  return `https://buyee.jp/rakuten/detail/${encoded}`;
}
function abs(url: string, base: string) {
  try { return new URL(url, base).toString(); } catch { return url; }
}

// Buyee (Yahoo) extractor
function extractBuyeeImage(html: string, pageUrl: string): string | null {
  const i = html.indexOf('id="itemPhoto_sec"');
  if (i === -1) return null;
  const slice = html.slice(i, i + 120_000); // wider window

  let m = slice.match(/<li[^>]*\sdata-thumb\s*=\s*["']([^"']+)["'][^>]*>/i);
  if (m?.[1]) return abs(m[1], pageUrl);

  m = slice.match(/<a[^>]*\shref\s*=\s*["']([^"']+\.(?:jpg|jpeg|png))(?:\?[^"']*)?["']/i);
  if (m?.[1]) return abs(m[1], pageUrl);

  m = slice.match(/<img[^>]*\sdata-src\s*=\s*["']([^"']+\.(?:jpg|jpeg|png))(?:\?[^"']*)?["']/i);
  if (m?.[1]) return abs(m[1], pageUrl);

  return null;
}

// Rakuten extractor (more forgiving)
function extractRakutenImage(html: string, pageUrl: string): string | null {
  const i = html.indexOf('id="shopping_item_main_image"');
  if (i !== -1) {
    const slice = html.slice(i, i + 120_000);
    // Prefer data-src
    let m = slice.match(/<img[^>]*\sdata-src\s*=\s*["']([^"']+\.(?:jpg|jpeg|png)(?:\?[^"']*)?)["']/i);
    if (m?.[1]) return abs(m[1], pageUrl);
    // Fallback to src
    m = slice.match(/<img[^>]*\ssrc\s*=\s*["']([^"']+\.(?:jpg|jpeg|png)(?:\?[^"']*)?)["'][^>]*>/i);
    if (m?.[1]) {
      const url = m[1];
      // Skip obvious placeholders
      if (!/loading-spacer\.gif/i.test(url)) return abs(url, pageUrl);
    }
  }
  // Last resort: first cdnrakuten image anywhere on page
  const any = html.match(/https?:\/\/[^"'<>]+cdnrakuten\.buyee\.jp[^"'<>]+?\.(?:jpg|jpeg|png)(?:\?[^"'<>]*)?/i);
  if (any?.[0]) return abs(any[0], pageUrl);
  return null;
}

async function fetchText(url: string) {
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9,ja;q=0.8',
    },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`html_fetch_${res.status}`);
  return res.text();
}
async function fetchImage(url: string) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`img_fetch_${res.status}`);
  const contentType = res.headers.get('content-type') || 'image/jpeg';
  const buf = Buffer.from(await res.arrayBuffer());
  return { buf, contentType };
}

const MERCARI_RE = /^m\d{11}$/i;

export async function GET(
  req: Request,
  ctx: { params: Promise<{ listingId: string }> }
) {
  const { listingId } = await ctx.params;
  const origin = new URL(req.url).origin;

  const servePlaceholder = async () => {
    const ph = await fetch(new URL('/placeholder-item.png', origin));
    const b = await ph.arrayBuffer();
    return new NextResponse(b, {
      status: 200,
      headers: { 'Content-Type': 'image/png', 'Cache-Control': 'no-store' },
    });
  };

  if (!/^[A-Za-z0-9_%:.-]+$/.test(listingId)) return servePlaceholder();

  // DB cache
  let cachedUrl: string | null = null;
  try {
    const cached = await prisma.listingImageCache.findUnique({ where: { listingId } });
    if (cached?.url) cachedUrl = cached.url;
  } catch {}

  // Resolve if not cached
  if (!cachedUrl) {
    try {
      if (MERCARI_RE.test(listingId)) {
        // Mercari -> direct CDN
        cachedUrl = `https://static.mercdn.net/item/detail/orig/photos/${listingId}_1.jpg`;
        await prisma.listingImageCache.upsert({
          where: { listingId },
          update: { url: cachedUrl, source: 'mercari' },
          create: { listingId, url: cachedUrl, source: 'mercari' },
        });
      } else if (listingId.includes('%3A') || listingId.includes(':')) {
        // Rakuten
        const detailUrl = rakutenDetailUrl(listingId);
        const html = await fetchText(detailUrl);
        cachedUrl = extractRakutenImage(html, detailUrl);
        await prisma.listingImageCache.upsert({
          where: { listingId },
          update: { url: cachedUrl, source: 'rakuten' },
          create: { listingId, url: cachedUrl, source: 'rakuten' },
        });
      } else {
        // Buyee (Yahoo Auctions)
        const pageUrl = buyeeAuctionUrl(listingId);
        const html = await fetchText(pageUrl);
        cachedUrl = extractBuyeeImage(html, pageUrl);
        await prisma.listingImageCache.upsert({
          where: { listingId },
          update: { url: cachedUrl, source: 'buyee' },
          create: { listingId, url: cachedUrl, source: 'buyee' },
        });
      }
    } catch {
      // ignore, fallback below
    }
  }

  // Stream image or placeholder
  try {
    if (cachedUrl) {
      const { buf, contentType } = await fetchImage(cachedUrl);
      return new NextResponse(buf, {
        status: 200,
        headers: { 'Content-Type': contentType, 'Cache-Control': 'no-store' },
      });
    }
  } catch {}

  return servePlaceholder();
}
