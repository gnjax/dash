import path from 'path';
import fs from 'fs';
import { chromium } from 'playwright';

type ZMItemRow = {
  titleJa: string;
  itemUrl: string;
  listingId?: string | null;
  priceYen?: number;
  // used only to compute domestic total; not persisted per item
  localShipYen?: number;
};

type ZMItemsNested = {
  create: Array<{
    orderNumber?: string | null;
    titleJa?: string | null;
    titleEn?: string | null;
    itemUrl?: string | null;
    listingId?: string | null;
    priceYen?: number | null;
  }>;
};

export type ZMPackage = {
  proxyName: 'zenmarket';
  pageUrl: string;

  packageNumber: string;          // pid (unique)
  displayNumber?: string;         // e.g. "#2"

  dateShipped?: string;           // YYYY-MM-DD
  trackingNumber?: string | null;
  trackingUrl?: string | null;

  internationalShippingFeeYen?: number;
  domesticShippingFeeYen?: number;

  items?: ZMItemsNested;          // Prisma nested create
  raw?: any;
};

const PROFILE_DIR = process.env.ZM_PROFILE_DIR || '.secrets/zm-profile';
const DEBUG = process.env.DEBUG_SCRAPER === '1';

function yenToNumber(txt: string | null | undefined): number {
  if (!txt) return 0;
  const n = txt.replace(/[^0-9.-]/g, '');
  const v = Number(n);
  return Number.isFinite(v) ? v : 0;
}

// supports auction.aspx?itemCode=XXXX and pretty “/auction/XXXX”
function parseListingIdFromUrl(url: string): string | null {
  try {
    const m0 = url.match(/[?&]itemCode=([A-Za-z0-9]+)/i);
    if (m0) return m0[1];
    const m = url.match(/auction\/([A-Za-z0-9]+)/i);
    if (m) return m[1];
    const m2 = url.match(/mercari\.com\/.*\/item\/([A-Za-z0-9]+)/i);
    if (m2) return m2[1];
  } catch {}
  return null;
}

export async function scrapeZenMarketParcels(
  url = 'https://zenmarket.jp/fr/profile/parcel.aspx?state=5'
): Promise<ZMPackage[]> {
  const absProfile = path.resolve(PROFILE_DIR);
  if (!fs.existsSync(absProfile)) {
    throw new Error(`ZenMarket profile not found at ${absProfile}. Log in once with a persistent context.`);
  }

  const context = await chromium.launchPersistentContext(absProfile, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1366, height: 900 },
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    locale: 'fr-FR',
    extraHTTPHeaders: { 'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8,ja;q=0.7' },
  });

  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('div.parcel', { timeout: 20000 });

    // -------- Discover parcels by walking .parcel cards --------
    const parcels = await page.evaluate(() => {
      const toNum = (s?: string | null) => {
        if (!s) return 0;
        const n = s.replace(/[^0-9.-]/g, '');
        const v = Number(n);
        return Number.isFinite(v) ? v : 0;
      };

      const normDate = (t: string): string | undefined => {
        const a = t.match(/\b(\d{4}-\d{2}-\d{2})\b/);
        if (a) return a[1];
        const b = t.match(/\b(\d{2}\/\d{2}\/\d{4})\b/);
        if (b) {
          const [dd, mm, yyyy] = b[1].split('/');
          return `${yyyy}-${mm}-${dd}`;
        }
        return undefined;
      };

      // Pull number from the parent <div> that contains `<span>Envoi:</span>` or `<span>Shipping:</span>`
      const extractIntlShipping = (card: HTMLElement): number => {
        const labelSpan = Array.from(card.querySelectorAll('span')).find(sp => {
          const t = (sp.textContent || '').trim();
          return t.startsWith('Envoi:') || t.startsWith('Shipping:');
        });
        if (!labelSpan) return 0;

        const container = labelSpan.parentElement as HTMLElement | null;
        if (!container) return 0;

        // The amount is the remaining text in the same container after removing the label text.
        let txt = (container.textContent || '').replace(labelSpan.textContent || '', '').trim();
        // e.g. "¥6,100"
        return toNum(txt);
      };

      const results: Array<{
        pid: string;
        displayNumber?: string;
        dateShipped?: string;
        trackingNumber?: string | null;
        trackingUrl?: string | null;
        intlShipping?: number;
      }> = [];

      document.querySelectorAll<HTMLDivElement>('div.parcel').forEach(card => {
        const link = card.querySelector<HTMLAnchorElement>('a[data-parcelid]');
        if (!link) return;
        const pid = link.getAttribute('data-parcelid');
        if (!pid) return;

        // e.g. "#2"
        const displayNumber =
          card.innerText.split('\n').map(s => s.trim()).find(s => /^#\d+\b/.test(s)) || undefined;

        const dateShipped = normDate(card.innerText);

        // Tracking (JP Post example in snippet)
        let trackingNumber: string | null = null;
        let trackingUrl: string | null = null;
        const links = Array.from(card.querySelectorAll('a[href]')) as HTMLAnchorElement[];
        const tlink = links.find(x => /[A-Z]{2}\d{9}[A-Z]{2}|\b\d{10,14}\b|JJD/i.test(x.textContent || ''));
        if (tlink) {
          trackingNumber = (tlink.textContent || '').trim() || null;
          trackingUrl = tlink.href || null;
        }

        const intlShipping = extractIntlShipping(card);

        results.push({ pid, displayNumber, dateShipped, trackingNumber, trackingUrl, intlShipping });
      });

      return results;
    });

    if (DEBUG) console.log('[ZM] found pids:', parcels.map((p: any) => p.pid));

    const packages: ZMPackage[] = [];

    for (const p of parcels) {
      if (!p.pid) continue;

      // Fetch parcel items
      const payload = { pid: Number(p.pid) };
      const resp = await page.evaluate(async (body) => {
        const r = await fetch('/profile/parcel.aspx/getParcelContent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',
          },
          body: JSON.stringify(body),
          credentials: 'same-origin',
        });
        return await r.json();
      }, payload);

      // JSON-first parse into ZMItemRow[]
      let rows: ZMItemRow[] = [];
      try {
        const raw = typeof resp?.d === 'string' ? resp.d : (resp?.d ? JSON.stringify(resp.d) : '[]');
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) {
          rows = arr.map((it: any) => ({
            titleJa: String(it?.ProductName ?? '').trim(),
            itemUrl: String(it?.ProductURL ?? '').trim(),
            priceYen: yenToNumber(it?.Price) + yenToNumber(it?.Tax),
            localShipYen: yenToNumber(it?.LocalShippingPrice),
            listingId: null, // fill below outside evaluate()
          }));
        }
      } catch {}

      // Fill listingId client-side and compute domestic total
      let domesticTotal = 0;
      const rawItemsReady: ZMItemRow[] = rows.map(r => {
        const listingId = parseListingIdFromUrl(r.itemUrl || '') ?? null;
        domesticTotal += (r.localShipYen || 0);
        return { ...r, listingId };
      });

      // Convert to Prisma nested create shape (duplicate titleEn from titleJa)
      const itemsNested: ZMItemsNested | undefined =
        rawItemsReady.length > 0
          ? {
              create: rawItemsReady.map(r => ({
                orderNumber: null,
                titleJa: r.titleJa ?? null,
                titleEn: r.titleJa ?? null,  // duplicate JP into EN
                itemUrl: r.itemUrl ?? null,
                listingId: r.listingId ?? null,
                priceYen: (r.priceYen ?? 0),
              })),
            }
          : undefined;

      const pkg: ZMPackage = {
        proxyName: 'zenmarket',
        pageUrl: url,
        packageNumber: String(p.pid),
        displayNumber: p.displayNumber,
        dateShipped: p.dateShipped,
        trackingNumber: p.trackingNumber ?? null,
        trackingUrl: p.trackingUrl ?? null,
        internationalShippingFeeYen: p.intlShipping ?? 0,
        domesticShippingFeeYen: domesticTotal || 0,
        items: itemsNested,
        raw: { parcelMeta: p, response: resp },
      };

      packages.push(pkg);
    }

    if (DEBUG) console.log(`[ZM] scraped packages=${packages.length}`);
    return packages;
  } finally {
    await page.close();
    await context.close();
  }
}
