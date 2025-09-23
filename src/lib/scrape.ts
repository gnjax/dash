export type BuyeeItem = {
  orderNumber: string;
  title: string;
  itemUrl: string;
  listingId?: string;
  priceYen?: number;            // from Invoice Information → Subtotal
};

export type BuyeePackage = {
  dateShipped?: string;         // YYYY-MM-DD
  intlTrackingNumber?: string;  // e.g., CL072455942JP
  intlTrackingUrl?: string;
  packageNumber?: string;       // e.g., G2505289472
  items: BuyeeItem[];
  internationalShippingFeeYen?: number;
  domesticShippingFeeYen?: number;
};

export type BuyeeShippedResult = {
  proxyName: 'buyee';
  pageUrl: string;
  packages: BuyeePackage[];
};

export function yenToNumber(txt?: string): number | undefined {
  if (!txt) return;
  const cleaned = txt
    .replace(/[^\d.,-]/g, '')
    .replace(/,(?=\d{3}(\D|$))/g, '')        // remove thousands commas
    .replace(/(\d),(?=\d{1,2}$)/, '$1.');    // 1,23 => 1.23 (safety)
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : undefined;
}