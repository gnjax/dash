// src/app/inventory/page.tsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import { getJpyToEurRate, yenToEuro } from '@/lib/fx.client';

type Row = {
  id: string;
  name: string;
  condition: string; // Loose | Boxed | CIB | NIB
  tagChain: string;  // "Foo (Root > Branch > Leaf) • Bar (…)”
  fxDateISO: string | null;
  packageNumber: string | null;
  purchaseDateISO: string | null;
  jpy: {
    basePerUnit: number;
    shipPerUnit: number;
    customsPerUnit: number;
    totalPerUnit: number;
  };
  // NEW: optional image preview sourced from the current tag
  previewPhotoUrl?: string | null;
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

/** Floating image preview that follows the cursor on hover */
function HoverFloat(props: { url: string | null | undefined; size?: number; children: React.ReactNode }) {
  const { url, size = 220, children } = props;
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  return (
    <>
      <span
        className="inline-flex items-center"
        onMouseEnter={() => url && setShow(true)}
        onMouseLeave={() => setShow(false)}
        onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
        style={{ cursor: url ? 'zoom-in' : undefined }}
      >
        {children}
      </span>
      {url && show && (
        <div
          className="fixed z-[9999] pointer-events-none"
          style={{ left: pos.x + 12, top: pos.y + 12 }}
        >
          <div className="rounded-lg border border-white/10 bg-black/90 p-1 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={url}
              alt=""
              width={size}
              height={size}
              className="block object-contain max-w-none"
              loading="eager"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function InventoryPage() {
  // filters
  const [filters, setFilters] = useState<string[]>([]);
  const [draft, setDraft] = useState('');

  // data
  const [rows, setRows] = useState<Row[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // selection
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  // FX cache
  const [rates, setRates] = useState<Record<string, number>>({});
  const todayISO = useMemo(() => new Date().toISOString().slice(0, 10), []);

  // URL sync for filters
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
          return [d, NaN] as const;
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

      // if we reset, clear selection (only selected on current page)
      if (reset) setSelected({});
    } catch (e: any) {
      alert(e.message || 'Load failed');
    } finally {
      setBusy(false);
    }
  }

  // initial load + hydrate filters from URL
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const qs = sp.getAll('q').map(s => s.trim()).filter(Boolean);
    if (qs.length) setFilters(qs);
    load({ reset: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // reload when filters change
  useEffect(() => {
    load({ reset: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.join('\u0001')]);

  function addFilter() {
    const v = draft.trim();
    if (!v) return;
    if (!filters.includes(v)) setFilters(prev => [...prev, v]);
    setDraft('');
  }
  function removeFilter(f: string) { setFilters(prev => prev.filter(x => x !== f)); }

  function eurFor(jpy: number, d: string | null) {
    const key = d && d.length ? d : todayISO;
    const rate = rates[key];
    if (!Number.isFinite(rate)) return 0;
    return yenToEuro(jpy, rate);
  }

  // selection helpers
  const selectedIds = useMemo(() => Object.keys(selected).filter(id => selected[id]), [selected]);
  const allOnPageSelected = rows.length > 0 && rows.every(r => selected[r.id]);
  function toggleRow(id: string) {
    setSelected(prev => ({ ...prev, [id]: !prev[id] }));
  }
  function toggleAllOnPage() {
    if (allOnPageSelected) {
      const next = { ...selected };
      for (const r of rows) delete next[r.id];
      setSelected(next);
    } else {
      const next = { ...selected };
      for (const r of rows) next[r.id] = true;
      setSelected(next);
    }
  }
  function goScan() {
    const ids = selectedIds.join(',');
    if (!ids) return;
    // Serial uniqueness: no branch is required; scan page can operate without ancestorPlacementId
    window.location.href = `/inventory/scan?ids=${encodeURIComponent(ids)}`;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Inventory</h1>
      <p className="text-xs text-gray-400">
        Per-unit prices computed from session splits and FX on package date.
      </p>

      {/* Filters + actions */}
      <div className="rounded-lg border border-white/10 p-2">
        <div className="flex flex-wrap items-center gap-2">
          {filters.map(f => (
            <span
              key={f}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs"
            >
              {f}
              <button className="hover:text-red-300" onClick={() => removeFilter(f)} title="Remove filter">✕</button>
            </span>
          ))}

          <input
            className="field min-w-[14rem] flex-1"
            placeholder="Search by name, tag, or package # …"
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

          {/* Right-side actions */}
          <div className="ml-auto flex items-center gap-2">
            <button className="btn btn-outline" onClick={toggleAllOnPage} disabled={rows.length === 0}>
              {allOnPageSelected ? 'Unselect page' : 'Select page'}
            </button>
            <button
              className="btn btn-primary disabled:opacity-50"
              onClick={goScan}
              disabled={selectedIds.length === 0}
              title={selectedIds.length ? `${selectedIds.length} selected` : 'Select items first'}
            >
              📱 Scan selected
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-xs text-gray-400">
            <tr>
              <th className="px-3 py-2 text-left w-10">
                <input
                  type="checkbox"
                  aria-label="Select all on page"
                  checked={allOnPageSelected}
                  onChange={toggleAllOnPage}
                />
              </th>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Tags</th>
              <th className="px-3 py-2 text-left">Condition</th>
              <th className="px-3 py-2 text-left">Item price</th>
              <th className="px-3 py-2 text-left">Real price</th>
              <th className="px-3 py-2 text-left">Package #</th>
              <th className="px-3 py-2 text-left">Purchase date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const baseEUR = eurFor(r.jpy.basePerUnit, r.fxDateISO);
              const totalEUR = eurFor(r.jpy.totalPerUnit, r.fxDateISO);
              return (
                <tr key={r.id} className="border-t border-white/10">
                  <td className="px-3 py-2">
                    <input
                      type="checkbox"
                      checked={!!selected[r.id]}
                      onChange={() => toggleRow(r.id)}
                      aria-label={`Select ${r.name || r.id}`}
                    />
                  </td>
                  <td className="px-3 py-2">
                    <HoverFloat url={r.previewPhotoUrl} size={220}>
                      <span>{r.name || '—'}</span>
                    </HoverFloat>
                  </td>
                  <td className="px-3 py-2">{r.tagChain || '—'}</td>
                  <td className="px-3 py-2">{r.condition || '—'}</td>
                  <td className="px-3 py-2">
                    <div>{fmtEUR(baseEUR)}</div>
                    <div className="text-xs text-gray-500">{fmtJPY(r.jpy.basePerUnit)}</div>
                  </td>
                  <td className="px-3 py-2">
                    <div>{fmtEUR(totalEUR)}</div>
                    <div className="text-xs text-gray-500">{fmtJPY(r.jpy.totalPerUnit)}</div>
                  </td>
                  <td className="px-3 py-2">{r.packageNumber ?? '—'}</td>
                  <td className="px-3 py-2">{r.purchaseDateISO ?? '—'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {rows.length === 0 && !busy && (
          <div className="p-6 text-center text-sm text-gray-400">No items yet.</div>
        )}

        <div className="flex items-center justify-between px-3 py-2 text-xs text-gray-400">
          <div>{rows.length} items • {selectedIds.length} selected</div>
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
