export async function getJpyToEurRate(dateISO: string): Promise<number | null> {
  try {
    const r = await fetch(`/api/fx?date=${encodeURIComponent(dateISO)}&base=JPY&quote=EUR`, { cache: 'no-store' });
    const j = await r.json();
    if (!r.ok) {
      console.error('FX API error', j);
      return null;
    }
    const rate = typeof j.rate === 'string' ? parseFloat(j.rate) : j.rate;
    if (!isFinite(rate)) {
      console.error('FX API returned invalid rate', j);
      return null;
    }
    return rate;
  } catch (e) {
    console.error('FX fetch failed', e);
    return null;
  }
}

// Safe multiply using integers to dodge FP noise where it matters in UI
// yen is Decimal(12,2) in backend; in UI we usually have a JS number
export function yenToEuro(yen: number, rate: number | null): number {
  if (!rate || !isFinite(rate)) return 0;
  const eur = yen * rate;
  // Round to 2 decimals for display
  return Math.round(eur * 100) / 100;
}
