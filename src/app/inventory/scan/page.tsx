// src/app/inventory/scan/page.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { serverPpocr } from '@/lib/ocr/server-ppocr';
 // NEW: PP-OCR via ONNX (client-side)

// ------------------------------- Types -------------------------------------
type Match = {
  tagId: string;
  placementIdUnderBranch: string | null;
  serial: string;
  title: string | null;
  photoUrl: string | null;
};

// ----------------------------- API helpers ---------------------------------
async function serialLookup(text: string): Promise<Match[]> {
  const sp = new URLSearchParams();
  sp.set('q', text);
  const r = await fetch(`/api/tags/serial-lookup?${sp.toString()}`, { cache: 'no-store' });
  const j = await r.json();
  return (j.matches || []) as Match[];
}

async function assignTag(itemId: string, tagId: string, placementId?: string | null) {
  const r = await fetch('/api/inventory/assign-tag', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      itemIds: [itemId],
      tagId,
      placementId: placementId ?? undefined,
    }),
  });
  if (!r.ok) {
    const j = await r.json().catch(() => ({}));
    throw new Error(j.error || 'assign_failed');
  }
}

// ---------------------- Candidate extraction (light) -----------------------
function extractSerialCandidates(text: string): string[] {
  const up = text.toUpperCase().replace(/[–—]/g, '-');
  // Only allow A–Z, 0–9, dash and spaces
  const cleaned = up.replace(/[^A-Z0-9\-\s]/g, ' ').replace(/\s+/g, ' ').trim();
  const tokens = Array.from(new Set((cleaned.match(/[A-Z0-9\-]{3,}/g) || []).map(t => t.trim())));
  // serial-like: must contain at least one dash, reasonable length
  return tokens.filter(s => s.includes('-') && s.length >= 5 && s.length <= 28);
}

function bestCandidate(cands: string[]): string | null {
  if (!cands.length) return null;
  const score = (s: string) => {
    const dashCount = (s.match(/-/g) || []).length;
    const dashInside = (s.indexOf('-') > 0 && s.lastIndexOf('-') < s.length - 1) ? 2 : 0;
    return s.length * 2 + dashCount + dashInside;
  };
  return cands.sort((a, b) => score(b) - score(a))[0] || null;
}

// --------------------------- Light preprocessing ---------------------------
// 1) crop a small center band from video/canvas, scale to target width
function cropBand(videoOrCanvas: HTMLVideoElement | HTMLCanvasElement, targetW = 640) : HTMLCanvasElement {
  const vw = (videoOrCanvas as any).videoWidth || (videoOrCanvas as HTMLCanvasElement).width || 1280;
  const vh = (videoOrCanvas as any).videoHeight || (videoOrCanvas as HTMLCanvasElement).height || 720;

  const bandH = Math.floor(vh * 0.24);
  const bandY = Math.floor((vh - bandH) / 2);
  const bandW = Math.floor(vw * 0.76);
  const bandX = Math.floor((vw - bandW) / 2);

  const outH = Math.round(targetW * (bandH / bandW));
  const c = document.createElement('canvas');
  c.width = targetW; c.height = outH;
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(videoOrCanvas as any, bandX, bandY, bandW, bandH, 0, 0, targetW, outH);
  return c;
}

// 2) very light grayscale + contrast stretch (clip 2%)
function toGrayscaleContrast(src: HTMLCanvasElement): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = src.width; c.height = src.height;
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.drawImage(src, 0, 0);
  const img = ctx.getImageData(0, 0, c.width, c.height);
  const d = img.data;

  const hist = new Uint32Array(256);
  for (let i = 0; i < d.length; i += 4) {
    const y = (d[i] * 0.299 + d[i+1] * 0.587 + d[i+2] * 0.114) | 0;
    d[i] = d[i+1] = d[i+2] = y;
    hist[y]++;
  }
  const total = d.length / 4;
  const clip = Math.floor(total * 0.02);
  let min = 0, max = 255, acc = 0;
  for (let i = 0; i < 256; i++) { acc += hist[i]; if (acc > clip) { min = i; break; } }
  acc = 0;
  for (let i = 255; i >= 0; i--) { acc += hist[i]; if (acc > clip) { max = i; break; } }
  const rng = Math.max(1, max - min);
  for (let i = 0; i < d.length; i += 4) {
    const y = Math.max(0, Math.min(255, Math.round((d[i] - min) * 255 / rng)));
    d[i] = d[i+1] = d[i+2] = y;
  }
  ctx.putImageData(img, 0, 0);
  return c;
}

// 3) mild binarization (global threshold based on mid gray)
function toMildBinary(src: HTMLCanvasElement): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = src.width; c.height = src.height;
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.drawImage(src, 0, 0);
  const img = ctx.getImageData(0, 0, c.width, c.height);
  const d = img.data;

  // compute mean gray
  let sum = 0, cnt = 0;
  for (let i = 0; i < d.length; i += 4) { sum += d[i]; cnt++; }
  const mean = sum / Math.max(1, cnt);
  const T = Math.min(220, Math.max(80, Math.round(mean * 0.95))); // gentle

  for (let i = 0; i < d.length; i += 4) {
    const v = d[i] > T ? 255 : 0;
    d[i] = d[i+1] = d[i+2] = v;
  }
  ctx.putImageData(img, 0, 0);
  return c;
}

// --------------------------------- Page ------------------------------------
export default function ScanInventoryPage() {
  const sp = useSearchParams();
  const idsParam = sp.get('ids') || '';
  const itemIds = useMemo(() => idsParam.split(',').map(s => s.trim()).filter(Boolean), [idsParam]);

  const [idx, setIdx] = useState(0);
  const currentItemId = itemIds[idx] || null;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [live, setLive] = useState(true);          // auto-scan loop
  const [scanning, setScanning] = useState(false); // throttle
  const [locked, setLocked] = useState<Match | null>(null);

  const [lastText, setLastText] = useState('');
  const [matches, setMatches] = useState<Match[]>([]);
  const [manualSerial, setManualSerial] = useState('');
  const [err, setErr] = useState<string | null>(null);
  const [errAt, setErrAt] = useState<number>(0);

  // start camera (small preview)
  useEffect(() => {
    let stream: MediaStream | null = null;
    (async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: 'environment' },
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current!.srcObject = stream;
          await videoRef.current!.play();
        }
      } catch (e: any) {
        setErr(e?.message || 'camera_error');
      }
    })();
    return () => { if (stream) stream.getTracks().forEach(t => t.stop()); };
  }, []);

  // live loop — every ~1s, try light passes until we get a candidate; lock if DB match
  useEffect(() => {
    if (!live || locked) return;
    const id = setInterval(async () => {
      if (scanning) return;
      try {
        setScanning(true);
        if (err) setErr(null);
        const v = videoRef.current;
        if (!v || v.readyState < 2) return;

        // 1) raw crop
        const band = cropBand(v, 640);

        // Try variants in order: raw → gray/contrast → mild binary
        const variants: string[] = [];
        variants.push(band.toDataURL('image/png'));

        const gray = toGrayscaleContrast(band);
        variants.push(gray.toDataURL('image/png'));

        const bin = toMildBinary(gray);
        variants.push(bin.toDataURL('image/png'));

        let bestTextLocal = '';
        let topCandidate: string | null = null;

        for (const durl of variants) {
          // NEW: PP-OCR — returns multiple tokens/lines; join and feed your existing pipeline
          const { tokens, raw } = await serverPpocr(durl, true);
          const joined = (tokens.length ? tokens : raw).join(' ');
          if (joined && joined.length > bestTextLocal.length) bestTextLocal = joined;

          const cands = extractSerialCandidates(joined);
          const top = bestCandidate(cands);
          if (top) { topCandidate = top; break; }
        }

        setLastText(bestTextLocal);
        if (bestTextLocal || topCandidate) setErr(null);
        if (!topCandidate) return;

        const ms = await serialLookup(topCandidate);
        setErr(null);
        setMatches(ms);

        if (ms.length) {
          setLive(false);
          setLocked(ms[0]);
          // @ts-ignore
          if (navigator.vibrate) navigator.vibrate(25);
        }
      } catch (e: any) {
        setErr(e?.message || 'scan_failed');
        setErrAt(Date.now());
      } finally {
        setScanning(false);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [live, locked, scanning, err]);

  // manual override live lookup when paused
  useEffect(() => {
    if (!manualSerial.trim() || live) return;
    const t = setTimeout(async () => {
      try {
        const ms = await serialLookup(manualSerial.trim().toUpperCase());
        setMatches(ms);
      } catch {}
    }, 200);
    return () => clearTimeout(t);
  }, [manualSerial, live]);

  async function confirm(m: Match) {
    if (!currentItemId) return;
    try {
      await assignTag(currentItemId, m.tagId, m.placementIdUnderBranch);
      // move to next and resume scanning
      setLocked(null);
      setMatches([]);
      setManualSerial('');
      if (idx < itemIds.length - 1) {
        setIdx(idx + 1);
        setLive(true);
      } else {
        alert('All selected items processed.');
      }
    } catch (e: any) {
      alert(e?.message || 'Failed to assign tag.');
    }
  }

  function resume() {
    setLocked(null);
    setMatches([]);
    setManualSerial('');
    setLive(true);
  }

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Scan & Match Game Serials</h1>
      <div className="text-sm text-gray-400">
        Items: {itemIds.length} • Current: {idx + 1}/{itemIds.length}
      </div>

      {!currentItemId ? (
        <div className="text-gray-400">No items left. Pass <code>?ids=ID1,ID2</code> in the URL.</div>
      ) : (
        <>
          {/* Compact camera header */}
          <div className="rounded-xl border border-white/10 p-3">
            <div className="flex items-center gap-3">
              <div className="relative w-56 h-32 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black">
                <video ref={videoRef} playsInline muted className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="w-[78%] h-[34%] border border-white/60 rounded-md" />
                </div>
              </div>
              <div className="flex-1">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={live && !locked} onChange={(e) => setLive(e.target.checked)} disabled={!!locked} />
                  Live scan
                </label>
                {scanning && <span className="ml-3 text-xs text-gray-400">scanning…</span>}
                {(() => {
    const fresh = err && (Date.now() - errAt < 3000); // show error only for 3s
    return fresh ? <span className="ml-3 text-xs text-red-400">{err}</span> : null;
  })()}
                <div className="mt-2 text-xs text-gray-400">Keep the serial inside the box. It will lock when detected.</div>
              </div>
            </div>
          </div>

          {/* Results & manual override */}
          <div className="rounded-xl border border-white/10 p-3 space-y-3">
            <div className="text-xs text-gray-400">Manual override (optional):</div>
            <input
              className="field w-full"
              placeholder="Type serial (e.g., DMG-XXXX-JPN)…"
              value={manualSerial}
              onChange={(e) => setManualSerial(e.target.value)}
              autoCapitalize="characters"
              autoCorrect="off"
              spellCheck={false}
              disabled={!!locked}
            />

            <div className="text-xs text-gray-400">Matches:</div>
            {matches.length === 0 && <div className="text-gray-400 text-sm">No matches yet.</div>}

            <div className="space-y-3">
              {matches.map((m, i) => (
                <div key={m.tagId + i} className={`flex items-center gap-3 rounded border p-2 ${locked?.tagId === m.tagId ? 'border-green-500/60' : 'border-white/10'}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {m.photoUrl ? <img src={m.photoUrl} alt="" className="w-16 h-16 object-contain rounded" /> : <div className="w-16 h-16 grid place-items-center text-xs text-gray-500">No img</div>}
                  <div className="flex-1">
                    <div className="font-mono text-sm">{m.serial}</div>
                    <div className="text-xs text-gray-400">{m.title || '—'}</div>
                  </div>
                  <button className="btn btn-outline" onClick={() => confirm(m)}>✅ Confirm</button>
                </div>
              ))}
            </div>

            {!!locked && (
              <div className="pt-2 flex items-center gap-2">
                <button className="btn btn-outline" onClick={resume}>↻ Resume</button>
              </div>
            )}
          </div>

          <div className="text-xs text-gray-400">
            Current itemId: <code className="text-gray-300">{currentItemId}</code>
          </div>
        </>
      )}
    </div>
  );
}
