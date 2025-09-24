// src/app/inventory/page.tsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import { getJpyToEurRate, yenToEuro } from '@/lib/fx.client';

type Row = {
  id: string;
  name: string;
  tagChain: string;                 // e.g. "Foo (Root > Branch > Leaf) • Bar (...)"
  fxDateISO: string | null;         // date used for JPY->EUR conversion (YYYY-MM-DD)
  packageNumber: string | null;
  purchaseDateISO: string | null;
  jpy: {
    basePerUnit: number;
    shipPerUnit: number;
    customsPerUnit: number;
    totalPerUnit: number;
  };
};

type ApiResp = { items: Row[]; nextCursor: string | null };

function fmtEUR(v: number | null | undefined) {
  if (v == null || !isFinite(v)) return '€0.00';
  return v.toLocaleString(undefined, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
function fmtJPY(v: number | null | undefined) {
  if (v == null || !isFinite(v)) return '¥0';
  return `¥${Math.round(v).toLocaleString()}`;
}

export default function InventoryPage() {
  // stacked filters (chips)
  const [filters, setFilters] = useState<string[]>([]);
  const [draft, setDraft] = useState('');

  const [rows, setRows] = useState<Row[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // cache of JPY->EUR rates by date
  const [rates, setRates] = useState<Record<string, number>>({});
  const todayISO = useMemo(() => new Date().toISOString().slice(0, 10), []);

  // URL sync (optional but nice; keeps filters in the address bar)
  useEffect(() => {
    const params = new URLSearchParams();
    for (const f of filters) params.append('q', f);
    const qs = params.toString();
    const url = qs ? `/inventory?${qs}` : '/inventory';
    window.history.replaceState(null, '', url);
  }, [filters]);

  async function ensureRates(dates: (string | null)[]) {
    const unique = Array.from(
      new Set(
        dates.map(d => (d && d.length ? d : todayISO)).filter(Boolean) as string[],
      ),
    ).filter(d => rates[d] == null);

    if (!unique.length) return;

    const fetched = await Promise.all(
      unique.map(async (d) => {
        try {
          const r = await getJpyToEurRate(d);
          return [d, r] as const;
        } catch {
          return [d, NaN] as const; // avoid re-fetch loops; UI will show €0.00
        }
      }),
    );

    setRates(prev => {
      const next = { ...prev };
      for (const [d, r] of fetched) next[d] = r;
      return next;
    });
  }

  async function load(opts: { reset?: boolean; cursor?: string | null } = {}) {
    const { reset = false, cursor: cur = null } = opts;
    setBusy(true);
    try {
      const url = new URL('/api/inventory', window.location.origin);
      url.searchParams.set('limit', '50');
      if (cur) url.searchParams.set('cursor', cur);
      for (const f of filters) url.searchParams.append('q', f);

      const r = await fetch(url.toString(), { cache: 'no-store' });
      const j: ApiResp = await r.json();
      if (!r.ok) throw new Error((j as any)?.error || 'load_failed');

      const page = j.items || [];
      setRows(prev => (reset ? page : [...prev, ...page]));
      setCursor(j.nextCursor ?? null);

      await ensureRates(page.map(x => x.fxDateISO));
    } catch (e: any) {
      alert(e.message || 'Load failed');
    } finally {
      setBusy(false);
    }
  }

  // initial load
  useEffect(() => {
    // hydrate filters from URL (?q=...&q=...)
    const sp = new URLSearchParams(window.location.search);
    const qs = sp.getAll('q').map(s => s.trim()).filter(Boolean);
    if (qs.length) setFilters(qs);
    // then load
    load({ reset: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // reload when filters change
  useEffect(() => {
    // skip first run where rows just loaded; if you prefer immediate reload, keep as is:
    load({ reset: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.join('\u0001')]);

  function addFilter() {
    const v = draft.trim();
    if (!v) return;
    if (!filters.includes(v)) setFilters(prev => [...prev, v]);
    setDraft('');
  }
  function removeFilter(f: string) {
    setFilters(prev => prev.filter(x => x !== f));
  }

  function eurFor(jpy: number, d: string | null) {
    const key = d && d.length ? d : todayISO;
    const rate = rates[key];
    if (!Number.isFinite(rate)) return 0;
    return yenToEuro(jpy, rate);
  }

  return (
    <div className="space-y-4">
      <div className="card p-3">
        <div className="text-sm font-medium">Inventory</div>
        <div className="mt-1 text-xs text-gray-400">
          Per-unit prices computed from session splits and FX on package date.
        </div>

        {/* Stacked - filters */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {filters.map(f => (
            <span
              key={f}
              className="inline-flex items-center gap-2 rounded-lg border px-2 py-1 text-xs"
              style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
            >
              <span className="font-mono">{f}</span>
              <button className="hover:text-red-400" onClick={() => removeFilter(f)} title="Remove filter">✕</button>
            </span>
          ))}
          <input
            className="field min-w-[220px] flex-1"
            placeholder={filters.length ? 'Add another filter…' : 'Search by name, tag, package…'}
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addFilter(); }
              if (e.key === 'Escape') setDraft('');
            }}
          />
          <button className="btn btn-outline" onClick={addFilter}>Add</button>
          {filters.length > 0 && (
            <button className="btn btn-outline" onClick={() => setFilters([])}>Clear</button>
          )}
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-white/5">
            <tr className="text-left text-gray-400">
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Tags</th>
              <th className="px-3 py-2 text-right">Item price</th>
              <th className="px-3 py-2 text-right">Real price</th>
              <th className="px-3 py-2">Package #</th>
              <th className="px-3 py-2">Purchase date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10"> 
            {rows.map((r) => {
              const baseEUR = eurFor(r.jpy.basePerUnit, r.fxDateISO);
              const totalEUR = eurFor(r.jpy.totalPerUnit, r.fxDateISO);
              return (
                <tr key={r.id}>
                  <td className="px-3 py-2">{r.name || '—'}</td>
                  <td className="px-3 py-2 text-gray-300">{r.tagChain || '—'}</td>

                  <td className="px-3 py-2 text-right">
                    <div>{fmtEUR(baseEUR)}</div>
                    <div className="text-xs text-gray-500">{fmtJPY(r.jpy.basePerUnit)}</div>
                  </td>

                  <td className="px-3 py-2 text-right">
                    <div>{fmtEUR(totalEUR)}</div>
                    <div className="text-xs text-gray-500">{fmtJPY(r.jpy.totalPerUnit)}</div>
                  </td>

                  <td className="px-3 py-2 font-mono">{r.packageNumber ?? '—'}</td>
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

        <div className="p-3 flex justify-between items-center">
          <div className="text-xs text-gray-400">{rows.length} items</div>
          <button
            className="btn btn-outline"
            onClick={() => load({ cursor })}
            disabled={!cursor || busy}
          >
            {busy ? 'Loading…' : (cursor ? 'Load more' : 'No more')}
          </button>
        </div>
      </div>
    </div>
  );
}
