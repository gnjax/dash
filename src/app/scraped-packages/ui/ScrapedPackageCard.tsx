'use client';
import Link from 'next/link';
import type { ScrapedPackageRow } from '../scraped-packages.client';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

function ItemsHover({ names }: { names: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="cursor-default underline decoration-dotted underline-offset-4">
        Items: {names.length}
      </span>
      {open && (
        <div
          className="absolute right-0 top-full z-20 mt-2 w-72 max-w-[80vw] rounded-lg border p-2 text-xs shadow-xl"
          style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
        >
          <ul className="space-y-1">
            {names.map((n, i) => (
              <li key={i} className="text-gray-300 leading-snug">• {n}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ScrapedPackageCard({ pkg }: { pkg: ScrapedPackageRow }) {
  const itemNames = useMemo(() => pkg.items.map(i => i.title || '').filter(Boolean), [pkg.items]);

  const [status, setStatus] = useState(pkg.status);
  const [saving, setSaving] = useState(false);
  const isBlacklisted = status === 'Blacklist';
  const isProcessed = status === 'Processed';
  const router = useRouter();

  async function toggleBlacklist() {
    if (saving) return;
    setSaving(true);
    const prev = status;
    const next = isBlacklisted ? 'Todo' : 'Blacklist';
    setStatus(next); // optimistic UI

    try {
      const res = await fetch(`/api/scraped-packages/${pkg.id}/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: next }),
      });
      if (!res.ok) throw new Error('save_failed');
    } catch {
      setStatus(prev); // rollback on error
    } finally {
      setSaving(false);
    }
  }

  async function viewOrProceed() {
    if (!isProcessed) {
      // Not processed yet → create/reuse and proceed
      router.push(`/inventory-filler?packageId=${pkg.id}`);
      return;
    }

    // Processed → look up existing session id and open it (read-only after finalize)
    try {
      const res = await fetch(`/api/fill-sessions/by-package?scrapedPackageId=${encodeURIComponent(pkg.id)}`, { cache: 'no-store' });
      const j = await res.json();
      if (res.ok && j.sessionId) {
        router.push(`/inventory-filler?sessionId=${j.sessionId}`);
      } else {
        // fallback (shouldn't normally happen)
        router.push(`/inventory-filler?packageId=${pkg.id}`);
      }
    } catch {
      router.push(`/inventory-filler?packageId=${pkg.id}`);
    }
  }

  return (
    <div className="card flex h-full flex-col overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between border-b px-3 py-2" style={{ borderColor: 'var(--color-border)' }}>
        <div className="text-xs uppercase tracking-wide text-gray-400">{pkg.source}</div>
        <div className="text-xs text-gray-400">{pkg.dateShipped ?? '—'}</div>
      </div>

      {/* body now fills remaining height */}
      <div className="flex flex-1 flex-col space-y-3 p-3">
        <div className="flex items-center justify-between">
          <div className="font-mono text-sm tracking-tight">{pkg.packageNumber}</div>
          <div className="text-xs text-gray-400">
            <ItemsHover names={itemNames} />
          </div>
        </div>

        {pkg.intlTrackingNumber && (
          <div className="truncate text-xs">
            <span className="text-gray-400">Tracking:</span>{' '}
            {pkg.intlTrackingUrl ? (
              <a className="text-blue-400 hover:underline" href={pkg.intlTrackingUrl} target="_blank" rel="noreferrer">
                {pkg.intlTrackingNumber}
              </a>
            ) : (
              <span className="font-mono">{pkg.intlTrackingNumber}</span>
            )}
          </div>
        )}

        {/* thumbnails */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          {pkg.items.slice(0, 8).map((it, i) => {
            const href = it.listingId ? `https://buyee.jp/item/jdirectitems/auction/${it.listingId}` : undefined;
            const img = it.listingId ? `/api/thumb/${it.listingId}` : '/placeholder-item.png';
            const el = (
              <img
                src={img}
                alt={it.title || ''}
                className="h-full w-full object-cover"
                loading={i > 1 ? 'lazy' : undefined}
              />
            );
            return (
              <div
                key={it.id}
                className="relative aspect-square overflow-hidden rounded-md ring-1"
                style={{ background: '#0f1522', borderColor: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.04)' }}
              >
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer" title={it.title || ''}>
                    {el}
                  </a>
                ) : el}
              </div>
            );
          })}
        </div>

        {/* footer pinned to bottom */}
        <div className="mt-auto flex items-center justify-end gap-2 pt-1">
          <button
            onClick={toggleBlacklist}
            disabled={saving}
            className={isBlacklisted ? 'btn bg-red-600 hover:bg-red-500 disabled:opacity-50' : 'btn  disabled:opacity-50'}
            title={isBlacklisted ? 'Click to unblacklist (back to To-do)' : 'Blacklist this package'}
          >
            {isBlacklisted ? 'Blacklisted' : 'Blacklist'}
          </button>

          <button onClick={viewOrProceed} className="btn btn-success">
            {isProcessed ? 'View session' : 'Proceed'}
          </button>
        </div>
      </div>
    </div>
  );
}
