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

const PROFILE_DIR = process.env.FJ_PROFILE_DIR || '.secrets/fj-profile';
const DEBUG = process.env.DEBUG_SCRAPER === '1';

function decodeUrlMaybe(u?: string): string {
  if (!u) return '';
  try {
    return decodeURIComponent(u);
  } catch {
    return u;
  }
}

export async function scrapeFromJapanShippedList(url: string): Promise<FJShippedResult> {
  const absProfile = path.resolve(PROFILE_DIR);
  if (!fs.existsSync(absProfile)) {
    throw new Error(`FromJapan profile not found at ${absProfile}. Run the profile initializer to login first.`);
  }

  const context = await chromium.launchPersistentContext(absProfile, {
    channel: 'chrome',
    headless: false, // keep visible while stabilizing; try true later if it still works
    viewport: { width: 1366, height: 900 },
    locale: 'en-US',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9,ja;q=0.8' },
  });

  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Wait for the embedded data blob to exist (it's a hidden script tag)
    await page.waitForSelector('script#bData', { state: 'attached', timeout: 20000 });

    // Pull and parse the JSON embedded in #bData
    const shipments = await page.evaluate(() => {
      const script = document.querySelector<HTMLScriptElement>('script#bData');
      if (!script) return [];

      let data: any = {};
      try {
        // The content is base64 JSON
        const b64 = script.textContent || '';
        const decoded = atob(b64);
        data = JSON.parse(decoded);
      } catch (e) {
        return [];
      }

      // Each entry in data.list is a shipment
      const list: any[] = Array.isArray(data.list) ? data.list : [];
      const result: any[] = [];

      for (const shp of list) {
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

        // Items
        const itemsRaw: any[] = Array.isArray(shp.items) ? shp.items : [];
        const items = itemsRaw.map((it) => {
          const title = (it.item_name as string) || '';
          const itemUrl = decodeURIComponent((it.item_url as string) || '');
          const listingId = (it.item_id as string) || undefined; // Yahoo auction ID, etc.
          const priceYen = typeof it.c1_total === 'number' ? it.c1_total : undefined; // Charge 1

          return {
            listingId,
            orderNumber: undefined, // not available in the JSON
            title,
            itemUrl,
            priceYen,
          };
        });

        result.push({
          dateShipped,
          shipmentNo,
          trackingNumbers,
          items,
          charge2Total,
        });
      }

      return result;
    });

    // Expand multi-package:
    // - Split Charge 2 evenly per package
    // - DISTRIBUTE ITEMS across packages (no duplication, no price division)
    const packages: FJPackage[] = [];
    for (const s of shipments as any[]) {
      if (!s.shipmentNo) continue;

      const nPkgs = Math.max(1, s.trackingNumbers?.length || 1);
      const perPkgShip = s.charge2Total ? s.charge2Total / nPkgs : 0;

      // copy items and KEEP their full prices
      const allItems: FJItem[] = (s.items || []).map((it: any) => ({
        listingId: it.listingId,
        orderNumber: it.orderNumber,
        title: it.title,
        itemUrl: it.itemUrl,
        priceYen: typeof it.priceYen === 'number' ? it.priceYen : undefined,
      }));

      // Even block distribution: first packages get the extra items
      const m = allItems.length;
      const base = Math.floor(m / nPkgs);
      const extra = m % nPkgs;
      let cursor = 0;

      for (let i = 0; i < nPkgs; i++) {
        const pkgCount = base + (i < extra ? 1 : 0);
        const pkgItems = allItems.slice(cursor, cursor + pkgCount);
        cursor += pkgCount;

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

    if (DEBUG) console.log(`[FJ] scraped shipments=${shipments.length}, packages=${packages.length}`);
    return { proxyName: 'fromjapan', pageUrl: url, packages };
  } finally {
    await page.close();
    await context.close();
  }
}