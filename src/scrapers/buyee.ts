import fs from 'fs';
import path from 'path';
import { chromium, type Page } from 'playwright';
import { BuyeeShippedResult, BuyeePackage, yenToNumber } from '@/lib/scrape';

const PROFILE_DIR = process.env.BUYEY_PROFILE_DIR || '.secrets/buyee-profile';
const DEBUG = process.env.DEBUG_SCRAPER === '1';

export async function scrapeBuyeeShippedList(url: string): Promise<BuyeeShippedResult> {
      const absProfile = path.resolve(PROFILE_DIR);
if (!fs.existsSync(absProfile)) {
    throw new Error(`Buyee profile not found at ${absProfile}. Run the profile initializer first.`);
  }
 const context = await chromium.launchPersistentContext(absProfile, {
    channel: 'chrome',        // IMPORTANT: use real Chrome
    headless: false,          // start visible first; switch to true later if it still works
    viewport: { width: 1366, height: 900 },
    locale: 'en-US',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9,ja;q=0.8' },
  });
  const page = await context.newPage();
  try {
    // Prime a buyee tab so cookies attach to the correct domain
    await page.goto('https://buyee.jp/', { waitUntil: 'domcontentloaded' });
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Detect not-logged-in redirect
    const currentUrl = page.url();
    if (/\/login\b/i.test(currentUrl)) {
      await page.screenshot({ path: '/tmp/buyee-login.png', fullPage: true }).catch(()=>{});
      throw new Error('Not logged in (redirected to /login). Check cookies file. Screenshot: /tmp/buyee-login.png');
    }

    // Try to locate shipped entries
    const entries = await page.locator('li.luggageInfo.shipped').count();
    if (DEBUG) console.log(`[scraper] found ${entries} shipped entries on ${currentUrl}`);

    if (entries === 0) {
      await page.screenshot({ path: '/tmp/buyee-empty.png', fullPage: true }).catch(()=>{});
      throw new Error('No shipped entries found. Selectors may need adjustment or cookies invalid. Screenshot: /tmp/buyee-empty.png');
    }

    // ... (leave the rest of the extraction code as we wrote before)
    const packages: BuyeePackage[] = await page.locator('li.luggageInfo.shipped').evaluateAll((nodes) => {
      const parseYen = (s?: string) => {
        if (!s) return undefined;
        const cleaned = s.replace(/[^\d.,-]/g, '').replace(/,(?=\d{3}(\D|$))/g, '').replace(/(\d),(?=\d{1,2}$)/, '$1.');
        const n = Number(cleaned);
        return Number.isFinite(n) ? n : undefined;
      };

      return nodes.map((li) => {
        const pick = (sel: string) => (li.querySelector(sel)?.textContent || '').trim();

        const dateRaw = pick('.luggageInfo_header .date_shipped');
        const dateShipped = (dateRaw.match(/\d{4}-\d{2}-\d{2}/) || [])[0];

        const intlA = li.querySelector('.luggageInfo_header .i18n_shipping_number a') as HTMLAnchorElement | null;
        const intlTrackingNumber = intlA?.textContent?.trim();
        const intlTrackingUrl = intlA?.href || undefined;

        const pkgRaw = pick('.luggageInfo_header .package_number');
        const packageNumber = pkgRaw.replace(/^Package number/i, '').trim() || undefined;

        const items: any[] = [];
        li.querySelectorAll('.luggageInfo_order tr').forEach((tr, idx) => {
          if (idx === 0) return;
          const tds = tr.querySelectorAll('td');
          if (tds.length < 3) return;
          const orderNumber = (tds[1]?.textContent || '').trim();
          const a = tds[2]?.querySelector('a') as HTMLAnchorElement | null;
          const title = (a?.textContent || '').trim();
          const itemUrl = a?.href || '';
          const listingId = itemUrl ? itemUrl.split('/').filter(Boolean).pop() : undefined;
          if (orderNumber || title) items.push({ orderNumber, title, itemUrl, listingId });
        });

        let internationalShippingFeeYen: number | undefined;
        let domesticShippingFeeYen: number | undefined;
        const fee = li.querySelector('.amount_info_container');
        if (fee) {
          const dts = Array.from(fee.querySelectorAll('dt'));
          const dds = Array.from(fee.querySelectorAll('dd'));
          for (let i = 0; i < dts.length; i++) {
            const label = (dts[i].textContent || '').replace(/\s+/g, ' ').trim();
            const value = (dds[i]?.textContent || '').trim();
            if (/^International Shipping Fee/i.test(label)) internationalShippingFeeYen = parseYen(value);
            if (/^Domestic Shipping Fee/i.test(label)) domesticShippingFeeYen = parseYen(value);
          }
        }

        const invoice = li.querySelector('.delivery_info_container .invoice_info table')
                      || li.querySelector('.invoice_info table');
        if (invoice) {
          const subtotals: number[] = [];
          invoice.querySelectorAll('tr').forEach((tr, idx) => {
            if (idx === 0) return;
            const tds = tr.querySelectorAll('td');
            if (tds.length >= 3) {
              const subTxt = (tds[2]?.textContent || '').trim();
              const n = parseYen(subTxt);
              if (typeof n === 'number') subtotals.push(n);
            }
          });
          for (let i = 0; i < items.length && i < subtotals.length; i++) {
            items[i].priceYen = subtotals[i];
          }
        }

        return {
          dateShipped,
          intlTrackingNumber,
          intlTrackingUrl,
          packageNumber,
          items,
          internationalShippingFeeYen,
          domesticShippingFeeYen,
        };
      });
    });

    const result: BuyeeShippedResult = { proxyName: 'buyee', pageUrl: url, packages };
    if (DEBUG) console.log('[scraper] result sample:', JSON.stringify(result.packages[0], null, 2));
    return result;
  } finally {
    await page.close();
    await context.close();
  }
}