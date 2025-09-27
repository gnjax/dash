import path from 'path';
import fs from 'fs';
import { chromium } from 'playwright';

export type FJItem = {
  listingId?: string;     // auction ID / item_id
  orderNumber?: string;   // not exposed in JSON; leave undefined for now
  title: string;
  itemUrl: string;
  priceYen?: number;      // Charge 1 (c1_total)
};

export type FJPackage = {
  packageNumber: string;            // unique per physical package (shipmentNo#i if multi)
  baseShipmentNumber: string;       // original Shipment No. (or iid fallback)
  dateShipped?: string;             // shipped_date (YYYY-MM-DD part)
  trackingNumbers: string[];        // one or more tracking numbers
  items: FJItem[];
  internationalShippingFeeYen?: number; // Charge 2 (c2_total) split evenly across packages
  domesticShippingFeeYen?: number;      // always 0 per spec
};

export type FJShippedResult = {
  proxyName: 'fromjapan';
  pageUrl: string;
  packages: FJPackage[];
};

// Match your login helper’s path by default
const PROFILE_DIR = process.env.FJ_PROFILE_DIR || '/home/oulette/.proxy-profiles/fj-profile';
const DEBUG = process.env.DEBUG_SCRAPER === '1';
const KEEP_OPEN = process.env.KEEP_FJ_BROWSER_OPEN === '1';

function decodeUrlMaybe(u?: string): string {
  if (!u) return '';
  try { return decodeURIComponent(u); } catch { return u; }
}

function asNumber(v: unknown): number | undefined {
  return typeof v === 'number' && Number.isFinite(v) ? v : undefined;
}

/**
 * Scrape the shipped list. Supports multi-page by POSTing { currentPage } to the list endpoint.
 * @param url e.g. https://www.fromjapan.co.jp/japan/en/member/history/ship/list
 * @param page 1-based page number. Page 1 loads directly; page>1 fetched via POST and injected.
 */
export async function scrapeFromJapanShippedList(url: string, page: number = 1): Promise<FJShippedResult> {
  const absProfile = path.resolve(PROFILE_DIR);
  if (!fs.existsSync(absProfile)) {
    throw new Error(`FromJapan profile not found at ${absProfile}. Run the profile initializer to login first.`);
  }

  const context = await chromium.launchPersistentContext(absProfile, {
    channel: 'chrome',
    headless: false, // visible while stabilizing
    viewport: { width: 1366, height: 900 },
    locale: 'en-US',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9,ja;q=0.8' },
  });

  const pageObj = await context.newPage();
  try {
    // 1) Load base list page to ensure session cookies are applied
    await pageObj.goto(url, { waitUntil: 'domcontentloaded' });

    // If requesting page > 1, POST { currentPage } and inject that HTML so we can reuse the same parser
    if (Number(page) > 1) {
      const resp = await context.request.post(url, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        form: { currentPage: String(page) },
      });
      if (!resp.ok()) {
        throw new Error(`FJ list POST failed for page ${page}: ${resp.status()} ${resp.statusText()}`);
      }
      const html = await resp.text();
      await pageObj.setContent(html, { waitUntil: 'domcontentloaded' });
    }

    // 2) Wait for the embedded data blob to exist AND be non-empty
    await pageObj.waitForSelector('script#bData', { state: 'attached', timeout: 20000 }).catch(() => {});
    await pageObj.waitForFunction(() => {
      const s = document.querySelector<HTMLScriptElement>('script#bData');
      return !!(s && (s.textContent || '').trim().length > 10);
    }, { timeout: 20000 }).catch(() => { /* fallback paths below */ });

    // 3) Pull and parse the JSON embedded in #bData (robust: base64 → JSON → window.bData → inline assignment)
    const shipments = await pageObj.evaluate(() => {
      function tryParse(raw: string | null | undefined): any | null {
        if (!raw) return null;
        raw = raw.trim();
        if (!raw) return null;
        // base64 first
        try { return JSON.parse(atob(raw)); } catch {}
        // plain JSON
        try { return JSON.parse(raw); } catch {}
        return null;
      }

      function extractBData(): any | null {
        // a) <script id="bData">...</script>
        const script = document.querySelector<HTMLScriptElement>('script#bData');
        if (script) {
          const parsed = tryParse(script.textContent || '');
          if (parsed) return parsed;
        }

        // b) window.bData (string or object)
        const w: any = window as any;
        if (w && w.bData != null) {
          if (typeof w.bData === 'string') {
            const parsed = tryParse(w.bData);
            if (parsed) return parsed;
          } else if (typeof w.bData === 'object') {
            return w.bData;
          }
        }

        // c) inline assignment like: var bData = "....";
        for (const sc of Array.from(document.querySelectorAll('script'))) {
          const txt = (sc.textContent || '').trim();
          if (!txt) continue;
          const m = txt.match(/bData\s*=\s*(['"])([\s\S]*?)\1/);
          if (m && m[2]) {
            const parsed = tryParse(m[2]);
            if (parsed) return parsed;
          }
        }

        return null;
      }

      const data = extractBData() || {};
      const list: any[] =
        Array.isArray((data as any).list) ? (data as any).list :
        Array.isArray((data as any)?.data?.list) ? (data as any).data.list :
        [];

      const result: any[] = [];

      for (const shp of list) {
        try {
          // Prefer shipment_no; fallback to iid (numeric stable id)
          const shipmentNo: string | undefined =
            (shp.shipment_no_str as string) ||
            (shp.shipment_no as string) ||
            (shp.iid != null ? String(shp.iid) : undefined);
          if (!shipmentNo) continue;

          // Date shipped (YYYY-MM-DD from shipped_date)
          let dateShipped: string | undefined;
          if (typeof shp.shipped_date === 'string') {
            const m = shp.shipped_date.match(/\d{4}-\d{2}-\d{2}/);
            if (m) dateShipped = m[0];
          }

          // Tracking numbers: keys of ship_no object
          const trackingNumbers: string[] = [];
          if (shp.ship_no && typeof shp.ship_no === 'object') {
            for (const key of Object.keys(shp.ship_no)) {
              if (key && typeof key === 'string') trackingNumbers.push(key.trim());
            }
          }

          // Shipment-level shipping cost (Charge 2)
          const charge2Total: number = typeof shp.c2_total === 'number' ? shp.c2_total : 0;

          // Items (Charge 1 per item)
          const itemsRaw: any[] = Array.isArray(shp.items) ? shp.items : [];
          const items = itemsRaw.map((it) => {
            const title = (it.item_name as string) || '';
            const itemUrl = decodeURIComponent((it.item_url as string) || '');
            const listingId = (it.item_id as string) || undefined; // Yahoo auction ID, etc.
            const priceYen = typeof it.c1_total === 'number' ? it.c1_total : undefined; // Charge 1
            return { listingId, orderNumber: undefined, title, itemUrl, priceYen };
          });

          result.push({ dateShipped, shipmentNo, trackingNumbers, items, charge2Total });
        } catch {
          // ignore malformed rows
        }
      }

      return result;
    });

    // 4) Expand multi-package (split charge2 evenly; ITEMS distribution with special single-item split rule)
    const packages: FJPackage[] = [];
    for (const s of shipments as any[]) {
      if (!s.shipmentNo) continue;

      const nPkgs = Math.max(1, s.trackingNumbers?.length || 1);
      const perPkgShip = s.charge2Total ? s.charge2Total / nPkgs : 0;

      const allItems: FJItem[] = (s.items || []).map((it: any) => ({
        listingId: it.listingId,
        orderNumber: it.orderNumber,
        title: it.title,
        itemUrl: decodeUrlMaybe(it.itemUrl),
        priceYen: asNumber(it.priceYen),
      }));

      // SPECIAL CASE:
      // If there's exactly 1 item but multiple parcels, duplicate the item across all parcels
      // and split its price evenly (integers, sum preserved).
      const singleItemSplit = nPkgs > 1 && allItems.length === 1;

      // Even block distribution (default)
      const m = allItems.length;
      const base = Math.floor(m / nPkgs);
      const extra = m % nPkgs;
      let cursor = 0;

      for (let i = 0; i < nPkgs; i++) {
        let pkgItems: FJItem[];

        if (singleItemSplit) {
          const original = allItems[0];
          let share: number | undefined = undefined;

          if (typeof original.priceYen === 'number') {
            const total = Math.round(original.priceYen);
            const per = Math.floor(total / nPkgs);
            const remainder = total - per * nPkgs;
            // Distribute remainder to the first 'remainder' packages
            share = per + (i < remainder ? 1 : 0);
          }

          pkgItems = [{ ...original, priceYen: share }];
        } else {
          const pkgCount = base + (i < extra ? 1 : 0);
          pkgItems = allItems.slice(cursor, cursor + pkgCount);
          cursor += pkgCount;
        }

        const pkgSuffix = nPkgs > 1 ? `#${i + 1}` : '';
        const packageNumber = `${s.shipmentNo}${pkgSuffix}`;
        const tracking = s.trackingNumbers?.[i] ? [s.trackingNumbers[i]] : (s.trackingNumbers || []);

        packages.push({
          packageNumber,
          baseShipmentNumber: s.shipmentNo,
          dateShipped: s.dateShipped,
          trackingNumbers: tracking,
          items: pkgItems,
          internationalShippingFeeYen: perPkgShip,
          domesticShippingFeeYen: 0,
        });
      }
    }

    if ((packages.length === 0) && !Number.isNaN(page)) {
      await pageObj.screenshot({ path: '/tmp/fj-empty.png', fullPage: true }).catch(() => {});
    }

    if (DEBUG) console.log(`[FJ] scraped shipments=${(shipments as any[]).length}, packages=${packages.length} (page ${page})`);
    return { proxyName: 'fromjapan', pageUrl: url, packages };
  } finally {
    if (!KEEP_OPEN) {
      await pageObj.close().catch(() => {});
      await context.close().catch(() => {});
    } else if (DEBUG) {
      // eslint-disable-next-line no-console
      console.log('[FJ] KEEP_FJ_BROWSER_OPEN=1 set — leaving browser open.');
    }
  }
}
