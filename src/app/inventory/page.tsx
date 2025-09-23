// src/app/inventory/page.tsx
'use client';

import { useEffect, useState } from 'react';

type Row = {
  id: string;
  name: string;
  tagChain: string;
  fxDateISO: string | null;
  packageNumber: string | null;
  purchaseDateISO: string | null;
  jpy: {
    basePerUnit: number;
    shipPerUnit: number;
    customsPerUnit: number;
    totalPerUnit: number;
  };
};

type ApiResp = {
  items: Row[];
  nextCursor: string | null;
};

function fmtEUR(v: number | null | undefined) {
  if (v == null || !isFinite(v)) return '€0.00';
  return v.toLocaleString(undefined, { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function fmtJPY(v: number | null | undefined) {
  if (v == null || !isFinite(v)) return '¥0';
  return `¥${Math.round(v).toLocaleString()}`;
}

export default function InventoryPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // date -> JPY->EUR rate
  const [rates, setRates] = useState<Record<string, number>>({});
  const [q, setQ] = useState('');

  const load = async (opts: { cursor?: string | null; reset?: boolean } = {}) => {
    const { cursor: cur = null, reset = false } = opts;
    setBusy(true);
    try {
      const url = new URL('/api/inventory', window.location.origin);
      url.searchParams.set('limit', '50');
      if (cur) url.searchParams.set('cursor', cur);
      if (q.trim().length) url.searchParams.set('q', q.trim());
      const r = await fetch(url.toString(), { cache: 'no-store' });
      const j: ApiResp = await r.json();
      if (!r.ok) throw new Error((j as any)?.error || 'load_failed');

      setRows(prev => (reset ? j.items : [...prev, ...j.items]));
      setCursor(j.nextCursor ?? null);

      const needed = new Set(
        j.items.map(x => x.fxDateISO || '').filter(Boolean) as string[]
      );
      const toFetch = Array.from(needed).filter(d => rates[d] == null);
      if (toFetch.length) {
        const entries = await Promise.all(
          toFetch.map(async (date) => {
            const rr = await fetch(`/api/fx?date=${encodeURIComponent(date)}&base=JPY&quote=EUR`, { cache: 'no-store' });
            const jj = await rr.json();
            if (!rr.ok) throw new Error(jj.error || 'fx_failed');
            const rate = typeof jj.rate === 'string' ? parseFloat(jj.rate) : jj.rate;
            return [date, rate] as const;
          })
        );
        setRates(prev => {
          const next = { ...prev };
          for (const [d, rrate] of entries) next[d] = rrate;
          return next;
        });
      }
    } catch (e: any) {
      alert(e.message || 'Load failed');
    } finally {
      setBusy(false);
    }
  };

  // initial load
  useEffect(() => { load({ reset: true }); /* eslint-disable-next-line */ }, []);

  const onSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setRows([]);
    setCursor(null);
    await load({ reset: true });
  };

  return (
    <div className="space-y-4">
      <div className="card p-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">Inventory</div>
            <div className="text-xs text-gray-400">Per-unit prices computed from session splits and FX on package date.</div>
          </div>

          <form onSubmit={onSearch} className="flex items-center gap-2">
            <input
              className="field"
              placeholder="Search by name, tag, or package #"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
            <button className="btn btn-outline" type="submit" disabled={busy}>Search</button>
          </form>
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="text-xs uppercase tracking-wide text-gray-400 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <tr className="text-left">
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Tags</th>
              <th className="px-3 py-2">Item price</th>
              <th className="px-3 py-2">Real price</th>
              <th className="px-3 py-2">Package #</th>
              <th className="px-3 py-2">Purchase date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const rate = r.fxDateISO ? rates[r.fxDateISO] : undefined;
              const eurBase = rate ? (r.jpy.basePerUnit * rate) : null;
              const eurTotal = rate ? (r.jpy.totalPerUnit * rate) : null;

              return (
                <tr key={r.id} className="border-b last:border-b-0" style={{ borderColor: 'var(--color-border)' }}>
                  <td className="px-3 py-2">{r.name || '—'}</td>
                  <td className="px-3 py-2 text-gray-300">{r.tagChain || '—'}</td>
                  <td className="px-3 py-2">
                    <div className="font-medium">{fmtEUR(eurBase)}</div>
                    <div className="text-xs text-gray-500">{fmtJPY(r.jpy.basePerUnit)}</div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="font-medium">{fmtEUR(eurTotal)}</div>
                    <div className="text-xs text-gray-500">{fmtJPY(r.jpy.totalPerUnit)}</div>
                  </td>
                  <td className="px-3 py-2">{r.packageNumber ?? '—'}</td>
                  <td className="px-3 py-2">{r.purchaseDateISO ?? '—'}</td>
                </tr>
              );
            })}
            {rows.length === 0 && !busy && (
              <tr>
                <td colSpan={6} className="px-3 py-6 text-center text-gray-400">No items yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <button
          className="btn btn-outline"
          onClick={() => load({ cursor })}
          disabled={!cursor || busy}
        >
          {busy ? 'Loading…' : (cursor ? 'Load more' : 'No more')}
        </button>
      </div>
    </div>
  );
}
