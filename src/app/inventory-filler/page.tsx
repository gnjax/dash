// src/app/inventory-filler/page.tsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import WeightSliders, { type WeightRow } from '@/components/WeightSliders';
import { percentToPpm, ppmToPercent, PPM_DENOM } from '@/lib/weights';
import { getJpyToEurRate, yenToEuro } from '@/lib/fx.client';
import SingleTagPicker from '@/components/SingleTagPicker';

type SourceEntry = {
  id?: string;
  nameOverride: string | null;
  quantity: number;
  priceWeightPpm: number;
  shippingWeightPpm: number;
  tagId: string | null;
  tagPlacementId: string | null;
};

type SourceItem = {
  id: string;
  scrapedItemId?: string | null;
  manualLineId?: string | null;
  /** Optional listing id (needed for /api/thumb/[listingId]) */
  listingId?: string | null;
  title: string;
  priceYen: number;
  shippingWeightPpm: number;
  entries: SourceEntry[];
};

type SessionPayload = {
  session: {
    id: string;
    sourceType: 'ScrapedPackage' | 'Manual';
    customsTotalYen: number;
    finalizedAt?: string | null;
    dateShipped?: string | null;
  };
  fxDateISO?: string | null;
  packageTotals: { intlShip: number; domShip: number; packageShippingTotal: number };
  sourceItems: SourceItem[];
};

type TagFlat = { id: string; name: string; description: string | null };

// Build thumbnail URL if we have a listingId; otherwise null
function thumbUrlFor(item: SourceItem): string | null {
  const lid = (item as any)?.listingId;
  if (lid && typeof lid === 'string' && lid.length > 0) {
    return `/api/thumb/${encodeURIComponent(lid)}`;
  }
  return null;
}

/** Floating image preview that follows the cursor on hover */
function HoverFloat(props: { url: string | null; size?: number; children: React.ReactNode }) {
  const { url, size = 320, children } = props;
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

function fmtEUR(v: number | null | undefined) {
  if (v == null || !isFinite(v)) return '€0.00';
  return v.toLocaleString(undefined, { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function fmtJPY(v: number | null | undefined) {
  if (v == null || !isFinite(v)) return '¥0';
  return `¥${Math.round(v).toLocaleString()}`;
}

async function fetchTags(): Promise<TagFlat[]> {
  const r = await fetch('/api/tags?format=flat', { cache: 'no-store' });
  const j = await r.json();
  return (j.tags || []) as TagFlat[];
}

export default function InventoryFillerPage() {
  const sp = useSearchParams();
  const router = useRouter();

  const [data, setData] = useState<SessionPayload | null>(null);
  const [tags, setTags] = useState<TagFlat[]>([]);
  const [busy, setBusy] = useState(false);

  // FX state
  const [fxRate, setFxRate] = useState<number | null>(null);
  const [fxDateISO, setFxDateISO] = useState<string>('');

  // Customs input: user edits in EUR; we convert to JPY for preview/save
  const [customsEuro, setCustomsEuro] = useState<string>('');
  const [customsDirty, setCustomsDirty] = useState<boolean>(false); // ✅ prevents overwriting user input

  const sessionId = sp.get('sessionId');
  const packageId = sp.get('packageId');

  // Create/reuse session from packageId
  useEffect(() => {
    (async () => {
      if (!sessionId && packageId) {
        const res = await fetch('/api/fill-sessions', {
          method: 'POST',
          body: JSON.stringify({ sourceType: 'ScrapedPackage', scrapedPackageId: packageId }),
        });
        const j = await res.json();
        if (res.ok) {
          router.replace(`/inventory-filler?sessionId=${j.sessionId}`);
        } else {
          alert(j.error || 'Failed to start session');
        }
      }
    })();
  }, [sessionId, packageId, router]);

  // Load session + tags + FX by package shipping date
  useEffect(() => {
    (async () => {
      if (!sessionId) return;
      const res = await fetch(`/api/fill-sessions/${sessionId}`, { cache: 'no-store' });
      const j = await res.json();
      if (!res.ok) {
        alert(j.error || 'Failed to load');
        return;
      }
      setData(j);
      setTags(await fetchTags());

      // Prefer backend-provided date, else other fields, else today
      const shippedISO =
        (j?.fxDateISO && String(j.fxDateISO)) ||
        (j?.scrapedPackage?.dateShipped && new Date(j.scrapedPackage.dateShipped).toISOString().slice(0,10)) ||
        (j?.package?.dateShipped && new Date(j.package.dateShipped).toISOString().slice(0,10)) ||
        (j?.session?.dateShipped && new Date(j.session.dateShipped).toISOString().slice(0,10)) ||
        new Date().toISOString().slice(0, 10);

      setFxDateISO(shippedISO);
      const rate = await getJpyToEurRate(shippedISO);
      setFxRate(rate);
    })();
  }, [sessionId]);

  const packageSubtotal = useMemo(() => {
    if (!data) return 0;
    return data.sourceItems.reduce((a, s) => a + s.priceYen, 0);
  }, [data]);

  const shippingSumOK = useMemo(() => {
    if (!data) return true;
    const sum = data.sourceItems.reduce((a, s) => a + s.shippingWeightPpm, 0);
    return sum === PPM_DENOM;
  }, [data]);

  const finalized = !!data?.session.finalizedAt;

  // Seed customsEuro from DB **only when user hasn't edited yet**
  useEffect(() => {
    if (!data || !fxRate) return;
    if (customsDirty) return; // ✅ don't clobber user's input
    const jpy = Number(data.session.customsTotalYen || 0);
    const eur = yenToEuro(jpy, fxRate);
    setCustomsEuro(Number.isFinite(eur) ? eur.toFixed(2) : '');
  }, [data, fxRate, customsDirty]);

  // Computed JPY value used for previews (current input if available, else saved)
  const customsTotalJPYPreview = useMemo(() => {
    const savedJPY = Number(data?.session.customsTotalYen || 0);
    if (fxRate && isFinite(fxRate)) {
      const eur = Number(customsEuro || '0');
      if (Number.isFinite(eur)) {
        // round to 2 decimals to match storage style
        return Math.round((eur / fxRate) * 100) / 100;
      }
    }
    return savedJPY;
  }, [customsEuro, fxRate, data?.session.customsTotalYen]);

  const onSave = async () => {
    if (!data || finalized) return;
    setBusy(true);
    try {
      const eur = Number(customsEuro || '0');
      const customsJPY = fxRate ? Math.round((eur / (fxRate || 1)) * 100) / 100 : 0;

      const body = {
        customsTotalYen: customsJPY,
        sourceItems: data.sourceItems.map(s => ({ id: s.id, shippingWeightPpm: s.shippingWeightPpm })),
        entriesUpsert: data.sourceItems.flatMap(s =>
          s.entries.map(e => ({
            ...(e.id ? { id: e.id } : {}),
            sourceItemId: s.id,
            nameOverride: e.nameOverride,
            quantity: e.quantity,
            priceWeightPpm: e.priceWeightPpm,
            shippingWeightPpm: e.shippingWeightPpm,
            tagId: e.tagId,
            tagPlacementId: e.tagPlacementId,
          }))
        ),
      };

      const res = await fetch(`/api/fill-sessions/${data.session.id}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Save failed');

      // ✅ Keep local state in sync so it doesn't "snap back"
      setData(d => d ? { ...d, session: { ...d.session, customsTotalYen: customsJPY } } as SessionPayload : d);
      setCustomsDirty(false);
    } catch (e: any) {
      alert(e.message || 'Save failed');
    } finally {
      setBusy(false);
    }
  };

  const onFinalize = async () => {
    if (!data || finalized) return;
    const sourceOK = data.sourceItems.reduce((a, s) => a + s.shippingWeightPpm, 0) === PPM_DENOM;
    const entrySplitsOK = data.sourceItems.every(s => {
      const priceSum = s.entries.reduce((a, e) => a + e.priceWeightPpm, 0);
      const shipSum = s.entries.reduce((a, e) => a + e.shippingWeightPpm, 0);
      return priceSum === PPM_DENOM && shipSum === PPM_DENOM;
    });
    if (!sourceOK || !entrySplitsOK) {
      alert('Weights must sum to 100% at each level.');
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(`/api/fill-sessions/${data.session.id}/finalize`, { method: 'POST' });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Finalize failed');
      alert(j.alreadyFinalized ? 'Already finalized (no changes).' : `Created ${j.created} InventoryItems`);
      const res2 = await fetch(`/api/fill-sessions/${data.session.id}`, { cache: 'no-store' });
      setData(await res2.json());
    } catch (e: any) {
      alert(e.message || 'Finalize failed');
    } finally {
      setBusy(false);
    }
  };

  if (!sessionId) {
    return (
      <div className="card p-5">
        Open via a Scraped Package’s “Proceed” (it will take you here with <code>?packageId=…</code>),
        or pass <code>?sessionId=…</code> to continue an existing session.
      </div>
    );
  }
  if (!data) return <div className="card p-6">Loading…</div>;

  return (
    <div className="space-y-5">
      {finalized && (
        <div className="card p-3 bg-emerald-900/20 border border-emerald-700/30 text-emerald-200">
          This session was finalized on <span className="font-mono">{new Date(data.session.finalizedAt!).toLocaleString()}</span>. Editing is disabled.
        </div>
      )}

      {/* Header / package totals */}
      <div className="card p-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div>
            <div className="text-xs text-gray-400">Session</div>
            <div className="font-medium">{data.session.id}</div>
            <div className="text-xs text-gray-500">{data.session.sourceType}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Package subtotal</div>
            <div className="font-medium">
              {fmtEUR(yenToEuro(packageSubtotal, fxRate ?? 0))}{' '}
              <span className="text-gray-500">({fmtJPY(packageSubtotal)})</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Shipping total (intl+dom)</div>
            <div className="font-medium">
              {fmtEUR(yenToEuro(data.packageTotals.packageShippingTotal, fxRate ?? 0))}{' '}
              <span className="text-gray-500">({fmtJPY(data.packageTotals.packageShippingTotal)})</span>
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-400">Customs (EUR)</label>
            <div className="flex items-center gap-2 mt-1">
              <input
                className="field w-full"
                type="number"
                step="0.01"
                inputMode="decimal"
                placeholder="0.00"
                value={customsEuro}
                onChange={e => { setCustomsDirty(true); setCustomsEuro(e.target.value); }} // ✅ mark as dirty
                disabled={finalized}
              />
              <span className="text-xs text-gray-500">
                ({fmtJPY(customsTotalJPYPreview)})
              </span>
            </div>
          </div>

          {/* FX badge */}
          <div className="sm:col-span-2 lg:col-span-4 flex justify-end text-xs">
            <div className="rounded-lg border border-white/10 px-2 py-1">
              FX JPY→EUR {fxDateISO ? `@ ${fxDateISO}` : ''}: <span className="font-medium">{fxRate ? fxRate.toFixed(6) : '—'}</span>
            </div>
          </div>
        </div>

        <div className="mt-3 text-xs">
          Source shipping weights sum:{' '}
          <span className={shippingSumOK ? 'text-emerald-400' : 'text-amber-400'}>
            {ppmToPercent(data.sourceItems.reduce((a, s) => a + s.shippingWeightPpm, 0)).toFixed(1)}%
          </span>
        </div>
      </div>

      {/* Top-level shipping split across source items */}
      <div className="card p-4">
        <WeightSliders
          title="Package → source items shipping split"
          help="Distribute the total package shipping (intl + domestic) across items. Locks keep a row fixed while others redistribute."
          rows={data.sourceItems.map(s => ({
            id: s.id,
            // Wrap the label with a hover preview of the item image
            label: (
              <HoverFloat url={thumbUrlFor(s)} size={320}>
                <span className="cursor-zoom-in underline decoration-dotted decoration-white/30">
                  {s.title}
                </span>
              </HoverFloat>
            ) as any, // cast keeps TS happy if label is typed as string
            ppm: s.shippingWeightPpm,
            rightHint: (
              <span>
                {fmtEUR(yenToEuro(data.packageTotals.packageShippingTotal * (s.shippingWeightPpm / PPM_DENOM), fxRate ?? 0))}{' '}
                <span className="text-gray-500">
                  ({fmtJPY(data.packageTotals.packageShippingTotal * (s.shippingWeightPpm / PPM_DENOM))})
                </span>
              </span>
            ),
          }))}
          onChange={(rows) => {
            if (finalized) return;
            setData(d => !d ? d : ({
              ...d,
              sourceItems: d.sourceItems.map(s => {
                const r = rows.find(x => x.id === s.id)!;
                return { ...s, shippingWeightPpm: r.ppm };
              }),
            }));
          }}
        />
      </div>

      {/* Source items */}
      {data.sourceItems.map((s) => (
        <SourceItemCard
          key={s.id}
          item={s}
          onChange={(next) => {
            if (finalized) return;
            setData(d => !d ? d : ({ ...d, sourceItems: d.sourceItems.map(x => x.id === s.id ? next : x) }));
          }}
          packageShippingTotal={data.packageTotals.packageShippingTotal}
          customsTotalPreview={customsTotalJPYPreview}  // ✅ live preview value
          packageSubtotal={packageSubtotal}
          allTags={tags}
          disabled={finalized}
          fxRate={fxRate ?? 0}
        />
      ))}

      {/* actions */}
      <div className="flex gap-3">
        <button className="btn btn-outline" onClick={onSave} disabled={busy || finalized}>
          {busy ? 'Saving…' : 'Save'}
        </button>
        <button className="btn btn-outline" onClick={onFinalize} disabled={busy || finalized}>
          Finalize → Inventory
        </button>
      </div>
    </div>
  );
}

function SourceItemCard(props: {
  item: SourceItem;
  onChange: (next: SourceItem) => void;
  packageShippingTotal: number;
  customsTotalPreview: number; // ✅ use preview (EUR input converted to JPY)
  packageSubtotal: number;
  allTags: TagFlat[];
  disabled?: boolean;
  fxRate: number;
}) {
  const { item, onChange, packageShippingTotal, customsTotalPreview, packageSubtotal, allTags, disabled, fxRate } = props;

  const sourceShipAlloc = Math.round(packageShippingTotal * (item.shippingWeightPpm / PPM_DENOM));

  const priceRows: WeightRow[] =
    item.entries.length > 0
      ? item.entries.map((e, i) => ({
          id: e.id ?? `new-${i}`,
          label: e.nameOverride || `Entry ${i + 1}`,
          ppm: e.priceWeightPpm,
          rightHint: (
            <span>
              {fmtEUR(yenToEuro(item.priceYen * (e.priceWeightPpm / PPM_DENOM), fxRate))}{' '}
              <span className="text-gray-500">({fmtJPY(item.priceYen * (e.priceWeightPpm / PPM_DENOM))})</span>
            </span>
          ),
        }))
      : [];

  const shipRows: WeightRow[] =
    item.entries.length > 0
      ? item.entries.map((e, i) => ({
          id: e.id ?? `new-${i}`,
          label: e.nameOverride || `Entry ${i + 1}`,
          ppm: e.shippingWeightPpm,
          rightHint: (
            <span>
              {fmtEUR(yenToEuro(sourceShipAlloc * (e.shippingWeightPpm / PPM_DENOM), fxRate))}{' '}
              <span className="text-gray-500">({fmtJPY(sourceShipAlloc * (e.shippingWeightPpm / PPM_DENOM))})</span>
            </span>
          ),
        }))
      : [];

  const entryCustomsPreview = (e: SourceEntry) => {
    if (packageSubtotal <= 0 || customsTotalPreview <= 0) return 0;
    const sourceShare = item.priceYen / packageSubtotal;
    return Math.round(customsTotalPreview * sourceShare * (e.priceWeightPpm / PPM_DENOM));
  };

  return (
    <div className="card p-4 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {/* Thumbnail (uses /api/thumb/[listingId]) with hover preview */}
          {(() => {
            const url = thumbUrlFor(item);
            return url ? (
              <HoverFloat url={url} size={320}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt={item.title || 'thumbnail'}
                  className="w-16 h-16 rounded-md object-cover border border-white/10"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </HoverFloat>
            ) : (
              <div className="w-16 h-16 rounded-md border border-white/10 bg-white/5 grid place-items-center text-[10px] text-gray-500">
                no img
              </div>
            );
          })()}
          <div>
            <div className="font-semibold">{item.title}</div>
            <div className="text-xs text-gray-400">
              {fmtEUR(yenToEuro(item.priceYen, fxRate))}{' '}
              <span className="text-gray-500">({fmtJPY(item.priceYen)})</span>
            </div>
            <div className="text-xs text-gray-400">
              This item’s shipping pool:{' '}
              {fmtEUR(yenToEuro(sourceShipAlloc, fxRate))}{' '}
              <span className="text-gray-500">({fmtJPY(sourceShipAlloc)})</span>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-outline text-xs"
            onClick={() => {
              if (disabled) return;
              const newEntry: SourceEntry = {
                id: undefined,
                nameOverride: null,
                quantity: 1,
                priceWeightPpm: 0,
                shippingWeightPpm: 0,
                tagId: null,
                tagPlacementId: null,
              };
              onChange({ ...item, entries: [...item.entries, newEntry] });
            }}
            disabled={disabled}
          >
            + Add entry
          </button>
        </div>
      </div>

      {/* Price split within this source item */}
      {priceRows.length > 0 ? (
        <WeightSliders
          title="Entries → price split"
          help="Split this source item’s base price across its entries. Locks keep an entry fixed while the others redistribute."
          rows={priceRows}
          onChange={(rows) => {
            if (disabled) return;
            onChange({
              ...item,
              entries: item.entries.map(e => {
                const rid = e.id ?? rows.find(r => r.label === (e.nameOverride || ''))?.id;
                const r = rows.find(x => x.id === (e.id ?? rid));
                if (!r) return e;
                return { ...e, priceWeightPpm: r.ppm };
              }),
            });
          }}
        />
      ) : (
        <div className="rounded-xl border border-white/10 p-3 text-xs text-gray-400">Add entries to split price and shipping.</div>
      )}

      {/* Shipping split within this source item */}
      {shipRows.length > 0 && (
        <WeightSliders
          title="Entries → shipping split"
          help="Split this source item’s shipping share across its entries. Locks keep an entry fixed while the others redistribute."
          rows={shipRows}
          onChange={(rows) => {
            if (disabled) return;
            onChange({
              ...item,
              entries: item.entries.map(e => {
                const rid = e.id ?? rows.find(r => r.label === (e.nameOverride || ''))?.id;
                const r = rows.find(x => x.id === (e.id ?? rid));
                if (!r) return e;
                return { ...e, shippingWeightPpm: r.ppm };
              }),
            });
          }}
        />
      )}

      {/* Entries editor */}
      <div className="rounded-lg border border-white/10 divide-y divide-white/10">
        {item.entries.map((e, i) => (
          <div key={e.id || i} className="p-3 grid md:grid-cols-6 gap-3 items-center">
            <div className="md:col-span-2">
              <input
                className="field w-full"
                placeholder="Name (optional override)"
                value={e.nameOverride ?? ''}
                onChange={ev => onChange({ ...item, entries: item.entries.map(x => x === e ? { ...e, nameOverride: ev.target.value } : x) })}
                disabled={disabled}
              />
              <div className="mt-2 flex flex-wrap gap-1">
                <SingleTagPicker
                  value={e.tagId ?? null}
                  onChange={(sel) => {
                    const tagId = sel?.tagId ?? null;
                    const placementId = sel?.placementId ?? null;
                    // Auto-fill name only if blank: prefer tag description, then name
                    let nextName = e.nameOverride ?? '';
                    const isBlank = !nextName || nextName.trim().length === 0;
                    if (isBlank && tagId) {
                      const t = allTags.find(t => t.id === tagId);
                      const candidate = (t?.description?.trim() || t?.name || '').trim();
                      if (candidate) nextName = candidate;
                    }
                    onChange({
                      ...item,
                      entries: item.entries.map(x =>
                        x === e ? { ...e, tagId, tagPlacementId: placementId, nameOverride: nextName } : x
                      ),
                    });
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-400">Qty</label>
              <input
                type="number"
                className="field w-20"
                min={1}
                value={e.quantity}
                onChange={ev => onChange({
                  ...item,
                  entries: item.entries.map(x => x === e ? { ...e, quantity: Math.max(1, parseInt(ev.target.value || '1', 10)) } : x),
                })}
                disabled={disabled}
              />
            </div>

            <div>
              <div className="text-xs text-gray-400">Base preview</div>
              <div className="text-sm">
                {fmtEUR(yenToEuro(item.priceYen * (e.priceWeightPpm / PPM_DENOM), fxRate))}
                <div className="text-xs text-gray-500">
                  {fmtJPY(item.priceYen * (e.priceWeightPpm / PPM_DENOM))}
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs text-gray-400">Ship + customs preview</div>
              <div className="text-sm">
                {fmtEUR(yenToEuro(sourceShipAlloc * (e.shippingWeightPpm / PPM_DENOM), fxRate))}
                {' + '}
                {fmtEUR(yenToEuro(entryCustomsPreview(e), fxRate))}
                <div className="text-xs text-gray-500">
                  {fmtJPY(sourceShipAlloc * (e.shippingWeightPpm / PPM_DENOM))} + {fmtJPY(entryCustomsPreview(e))}
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs text-gray-400">Est. total / unit</div>
              <div className="text-sm">
                {(() => {
                  const basePartJPY = Math.round(item.priceYen * (e.priceWeightPpm / PPM_DENOM));
                  const shipPartJPY = Math.round(sourceShipAlloc * (e.shippingWeightPpm / PPM_DENOM));
                  const customsPartJPY = entryCustomsPreview(e); // already in JPY
                  const totalJPY = basePartJPY + shipPartJPY + customsPartJPY;
                  const perUnitJPY = Math.round(totalJPY / Math.max(1, e.quantity));
                  return (
                    <div>
                      {fmtEUR(yenToEuro(perUnitJPY, fxRate))}
                      <div className="text-xs text-gray-500">{fmtJPY(perUnitJPY)}</div>
                    </div>
                  );
                })()}
              </div>
            </div>

            <div className="md:col-span-6 flex justify-end">
              <button
                className="btn btn-outline text-xs"
                onClick={() => onChange({ ...item, entries: item.entries.filter(x => x !== e) })}
                disabled={disabled}
              >
                🗑️ Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
