'use client';

import { useState } from 'react';

type Props = {
  onRunStart?: () => void;
  onRunDone?: () => void; // called exactly once after confirm+scrape finishes
};

async function post(url: string, body: any) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body ?? {}),
  });
  const json = await res.json().catch(() => ({}));
  return { ok: res.ok, json };
}

export default function ScrapersBar({ onRunStart, onRunDone }: Props) {
  const [maxPages, setMaxPages] = useState<number>(9999);
  const [zmUrl, setZmUrl] = useState<string>('https://zenmarket.jp/fr/profile/parcel.aspx?state=5');
  const [busy, setBusy] = useState<null | 'buyee' | 'fromjapan' | 'zenmarket'>(null);
  const [phase, setPhase] = useState<'idle'|'waiting'|'running'|'done'>('idle');
  const [current, setCurrent] = useState<null | 'buyee' | 'fromjapan' | 'zenmarket'>(null);
  const [msg, setMsg] = useState('');

  const endpoints = {
    buyee:     '/api/scrape/buyee-crawl',
    fromjapan: '/api/scrape/fromjapan-crawl',
    zenmarket: '/api/scrape/zenmarket-crawl',
  } as const;

  const payloadFor = (src: 'buyee'|'fromjapan'|'zenmarket') =>
    src === 'zenmarket' ? { pageUrl: zmUrl } : { startPage: 1, maxPages: Math.max(1, Number(maxPages) || 1) };

  const start = async (src: 'buyee'|'fromjapan'|'zenmarket') => {
    if (busy) return;
    onRunStart?.();                 // 🔹 mark running (prevents page refetch)
    setBusy(src); setCurrent(src); setMsg('Starting profile refresh…'); setPhase('waiting');

    const s = await post('/api/profile/refresh/start', { source: src });
    if (!s.ok) {
      setMsg(`Failed to start refresh: ${s.json?.error || 'error'}`);
      setBusy(null); setPhase('idle');
      onRunDone?.();                // unblock UI despite failure
      return;
    }
    setMsg('Profile refresh running. Complete login in the opened window, then click Confirm.');
  };

  const confirm = async () => {
    const src = current!;
    setMsg('Confirming refresh…');
    const c = await post('/api/profile/refresh/confirm', { source: src });
    if (!c.ok || !c.json?.ok) {
      setMsg(`Refresh confirm failed${c.json?.code !== undefined ? ` (code ${c.json.code})` : ''}.`);
      setBusy(null); setPhase('idle');
      onRunDone?.();
      return;
    }
    // 2) run scraper
    setPhase('running'); setMsg('Running scraper…');
    const run = await post(endpoints[src], payloadFor(src));

    if (run.ok && (run.json?.ok ?? true)) {
      setMsg('Done.'); setPhase('done');
    } else {
      setMsg(`Scraper failed${run.json?.error ? ` — ${run.json.error}` : ''}.`);
      setPhase('idle');
    }

    setBusy(null);
    onRunDone?.();                  // 🔹 fetch once now that we’re done
  };

  return (
    <div className="card p-3">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
        <div className="flex flex-1 items-center gap-2">
          <label className="text-xs text-gray-400 min-w-[6rem]">ZenMarket URL</label>
          <input className="field w-full" value={zmUrl} onChange={e => setZmUrl(e.target.value)} spellCheck={false}/>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs text-gray-400">Max pages</label>
          <input type="number" min={1} className="field w-24"
                 value={maxPages} onChange={e => setMaxPages(Number(e.target.value || 1))}/>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="btn btn-outline disabled:opacity-50" disabled={!!busy} onClick={() => start('buyee')}>
            {busy === 'buyee' && phase !== 'idle' ? 'Buyee…' : 'Refresh+Run Buyee'}
          </button>
          <button className="btn btn-outline disabled:opacity-50" disabled={!!busy} onClick={() => start('fromjapan')}>
            {busy === 'fromjapan' && phase !== 'idle' ? 'FromJapan…' : 'Refresh+Run FromJapan'}
          </button>
          <button className="btn btn-outline disabled:opacity-50" disabled={!!busy} onClick={() => start('zenmarket')}>
            {busy === 'zenmarket' && phase !== 'idle' ? 'ZenMarket…' : 'Refresh+Run ZenMarket'}
          </button>
          {phase === 'waiting' && (
            <button className="btn btn-primary" onClick={confirm}>I’ve logged in — Confirm</button>
          )}
        </div>
      </div>
      {msg && <div className="hr mt-3 pt-3 text-xs text-gray-400">{msg}</div>}
    </div>
  );
}
