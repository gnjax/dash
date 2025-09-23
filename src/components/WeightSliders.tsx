// src/components/WeightSliders.tsx
'use client';

import { useMemo, useState } from 'react';
import { equalizeUnlockedPPM, normalizeWithLocksPPM, percentToPpm, ppmToPercent, setWeightAtIndexWithLocksPPM } from '@/lib/weights';

export type WeightRow = {
  id: string;
  label: string;
  ppm: number;
  locked?: boolean;
  rightHint?: React.ReactNode; // optional preview (e.g., ¥ value)
};

export default function WeightSliders(props: {
  title: string;
  rows: WeightRow[];
  onChange: (rows: WeightRow[]) => void;
  help?: string;
}) {
  const { title, help } = props;

  // Keep lock states locally (simple & ergonomic). You can lift this up if you want to persist locks.
  const [locks, setLocks] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(props.rows.map(r => [r.id, !!r.locked]))
  );

  const sumPercent = useMemo(() => {
    const totalPpm = props.rows.reduce((a, r) => a + r.ppm, 0);
    return (totalPpm / 10_000).toFixed(1);
  }, [props.rows]);

  const toggleLock = (id: string) => {
    setLocks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const apply = (nextPpm: number[]) => {
    const next = props.rows.map((r, i) => ({ ...r, ppm: nextPpm[i] }));
    props.onChange(next);
  };

  const onChangeIdx = (idx: number, newPercent: number) => {
    const ppm = props.rows.map(r => r.ppm);
    const locked = props.rows.map(r => !!locks[r.id]);
    const next = setWeightAtIndexWithLocksPPM(ppm, idx, percentToPpm(newPercent), locked);
    apply(next);
  };

  const onNormalize = () => {
    const ppm = props.rows.map(r => r.ppm);
    const locked = props.rows.map(r => !!locks[r.id]);
    apply(normalizeWithLocksPPM(ppm, locked));
  };

  const onEqualize = () => {
    const ppm = props.rows.map(r => r.ppm);
    const locked = props.rows.map(r => !!locks[r.id]);
    apply(equalizeUnlockedPPM(ppm, locked));
  };

  return (
    <div className="rounded-xl border border-white/10 p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold">{title}</div>
        <div className="flex items-center gap-2">
          <span className={`text-xs ${sumPercent === '100.0' ? 'text-emerald-400' : 'text-amber-400'}`}>
            Total: {sumPercent}%
          </span>
          <button className="btn btn-outline text-xs" onClick={onEqualize}>Equalize</button>
          <button className="btn btn-outline text-xs" onClick={onNormalize}>Normalize</button>
        </div>
      </div>
      {help && <div className="text-xs text-gray-400 mb-3">{help}</div>}

      <div className="space-y-3">
        {props.rows.map((r, i) => {
          const percent = ppmToPercent(r.ppm);
          const isLocked = !!locks[r.id];
          return (
            <div key={r.id} className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleLock(r.id)}
                    className={`h-6 w-6 grid place-items-center rounded-md border ${isLocked ? 'bg-white/10' : ''}`}
                    title={isLocked ? 'Unlock' : 'Lock'}
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    {isLocked ? '🔒' : '🔓'}
                  </button>
                  <div className="font-medium truncate" title={r.label}>{r.label}</div>
                </div>
              </div>

              <div className="col-span-6">
                <input
                  type="range"
                  min={0}
                  max={1000} // 0.1% steps
                  step={1}
                  value={Math.round(percent * 10)}
                  onChange={(e) => onChangeIdx(i, Number(e.target.value) / 10)}
                  disabled={isLocked}
                  className="w-full"
                />
              </div>

              <div className="col-span-2">
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    step={0.1}
                    className="field w-20"
                    value={percent.toFixed(1)}
                    onChange={(e) => onChangeIdx(i, parseFloat(e.target.value || '0'))}
                    disabled={isLocked}
                  />
                  <span className="text-xs">% </span>
                </div>
              </div>

              {r.rightHint && <div className="col-span-12 text-right text-xs text-gray-400">{r.rightHint}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
