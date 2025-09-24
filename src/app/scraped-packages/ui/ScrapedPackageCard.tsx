'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { ScrapedPackageRow } from '../scraped-packages.client';

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
  const router = useRouter();
  const itemNames = useMemo(() => pkg.items.map(i => i.title || '').filter(Boolean), [pkg.items]);

  const [status, setStatus] = useState(pkg.status);
  const [saving, setSaving] = useState(false);
  const [opening, setOpening] = useState(false);

  const isBlacklisted = status === 'Blacklist';
  const isProcessed = status === 'Processed';

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

  async function openSessionForPackage() {
    if (opening) return;
    setOpening(true);
    try {
      // 1) Try to find an existing session for this package
      const findRes = await fetch(`/api/fill-sessions/by-package?packageId=${encodeURIComponent(pkg.id)}`, { cache: 'no-store' });
      if (findRes.ok) {
        const j = await findRes.json();
        router.push(`/inventory-filler?sessionId=${j.sessionId}`);
        return;
      }

      // 2) If none found and package is not Processed, create one
      if (!isProcessed) {
        const createRes = await fetch('/api/fill-sessions', {
          method: 'POST',
          body: JSON.stringify({ sourceType: 'ScrapedPackage', scrapedPackageId: pkg.id }),
        });
        const cj = await createRes.json();
        if (!createRes.ok) throw new Error(cj.error || 'Failed to create session');
        router.push(`/inventory-filler?sessionId=${cj.sessionId}`);
        return;
      }

      // 3) If Processed and still no session, inform
      alert('No existing session found for this processed package.');
    } catch (e: any) {
      alert(e?.message || 'Failed to open session');
    } finally {
      setOpening(false);
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
            const href = it.listingId
              ? `https://buyee.jp/item/jdirectitems/auction/${it.listingId}`
              : undefined;
            const img = it.listingId ? `/api/thumb/${it.listingId}` : '/placeholder-item.png';
            const el = (
              // eslint-disable-next-line @next/next/no-img-element
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
            className={
              isBlacklisted
                ? 'btn bg-red-600 hover:bg-red-500 disabled:opacity-50'
                : 'btn disabled:opacity-50'
            }
            title={isBlacklisted ? 'Click to unblacklist (back to To-do)' : 'Blacklist this package'}
          >
            {isBlacklisted ? 'Blacklisted' : 'Blacklist'}
          </button>

          <button
            onClick={openSessionForPackage}
            disabled={opening}
            className="btn btn-success cursor-pointer disabled:opacity-50"
            title={isProcessed ? 'View existing fill session' : 'Start or resume fill session'}
          >
            {isProcessed ? 'View session' : 'Proceed'}
          </button>
        </div>
      </div>
    </div>
  );
}
