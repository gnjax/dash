// src/lib/weights.ts
export const PPM_DENOM = 1_000_000; // 100%

export function percentToPpm(percent: number): number {
  if (!isFinite(percent)) return 0;
  return Math.max(0, Math.min(PPM_DENOM, Math.round(percent * 10_000)));
}

export function ppmToPercent(ppm: number): number {
  return ppm / 10_000;
}

/** Linked sliders without locks: redistribute proportionally to keep total == DENOM */
export function setWeightAtIndexPPM(ppm: number[], idx: number, newValue: number): number[] {
  return setWeightAtIndexWithLocksPPM(ppm, idx, newValue, new Array(ppm.length).fill(false));
}

/** Lock-aware redistribution (true = locked). Keeps exact sum == DENOM. */
export function setWeightAtIndexWithLocksPPM(
  ppm: number[],
  idx: number,
  newValue: number,
  locked: boolean[]
): number[] {
  const n = ppm.length;
  const clamp = (x: number) => Math.max(0, Math.min(PPM_DENOM, x | 0));

  // Treat edited row as unlocked (editing implicitly unlocks it)
  const effLocked = locked.slice();
  effLocked[idx] = false;

  const current = ppm.slice();
  const sumLocked = current.reduce((a, v, j) => a + (effLocked[j] ? v : 0), 0);

  // Available budget for unlocked rows
  const budget = PPM_DENOM - sumLocked;
  const newI = clamp(Math.min(newValue, budget)); // cannot exceed the free budget

  const unlockedOthers = [];
  let oldUnlockedOthersSum = 0;
  for (let j = 0; j < n; j++) {
    if (!effLocked[j] && j !== idx) {
      unlockedOthers.push(j);
      oldUnlockedOthersSum += current[j];
    }
  }

  const next = current.slice();
  next[idx] = newI;

  const newRema = budget - newI;

  if (unlockedOthers.length === 0) {
    // No degrees of freedom; everything else locked. Force the edited value to consume all budget.
    next[idx] = budget;
    // Sum is exact by construction.
    return next;
  }

  // Proportional scale unlocked others to fill newRema
  if (oldUnlockedOthersSum === 0) {
    // Split equally among unlocked others
    const each = Math.floor(newRema / unlockedOthers.length);
    for (const j of unlockedOthers) next[j] = each;
    // fix residue
    let diff = newRema - each * unlockedOthers.length;
    for (let k = 0; diff > 0; k = (k + 1) % unlockedOthers.length) {
      next[unlockedOthers[k]]++;
      diff--;
    }
  } else {
    for (const j of unlockedOthers) {
      next[j] = Math.floor(current[j] * (newRema / oldUnlockedOthersSum));
    }
    // fix rounding residue across unlocked others
    const diff = budget - next.reduce((a, b, j) => a + (effLocked[j] ? 0 : b), 0);
    if (diff !== 0) {
      const order = unlockedOthers
        .slice()
        .sort((a, b) => current[b] - current[a]); // bias bigger buckets
      let k = 0, remain = Math.abs(diff);
      while (remain--) {
        next[order[k]] += Math.sign(diff);
        k = (k + 1) % order.length;
      }
    }
  }
  return next;
}

/** Normalize unlocked rows so total == DENOM (respect locks, keep proportions) */
export function normalizeWithLocksPPM(ppm: number[], locked: boolean[]): number[] {
  const n = ppm.length;
  const sumLocked = ppm.reduce((a, v, j) => a + (locked[j] ? v : 0), 0);
  const budget = PPM_DENOM - sumLocked;

  const unlockedIdxs = [];
  let sumUnlocked = 0;
  for (let j = 0; j < n; j++) if (!locked[j]) { unlockedIdxs.push(j); sumUnlocked += ppm[j]; }

  const next = ppm.slice();
  if (unlockedIdxs.length === 0) return next;
  if (sumUnlocked === 0) {
    const each = Math.floor(budget / unlockedIdxs.length);
    for (const j of unlockedIdxs) next[j] = each;
    let diff = budget - each * unlockedIdxs.length;
    for (let k = 0; diff > 0; k = (k + 1) % unlockedIdxs.length) { next[unlockedIdxs[k]]++; diff--; }
    return next;
  }

  for (const j of unlockedIdxs) next[j] = Math.floor(ppm[j] * (budget / sumUnlocked));
  const diff = budget - unlockedIdxs.reduce((a, j) => a + next[j], 0);
  let k = 0, remain = Math.abs(diff);
  while (remain--) {
    next[unlockedIdxs[k]] += Math.sign(diff);
    k = (k + 1) % unlockedIdxs.length;
  }
  return next;
}

/** Equal split across unlocked rows (respect locks) */
export function equalizeUnlockedPPM(ppm: number[], locked: boolean[]): number[] {
  const n = ppm.length;
  const sumLocked = ppm.reduce((a, v, j) => a + (locked[j] ? v : 0), 0);
  const budget = PPM_DENOM - sumLocked;

  const unlockedIdxs = [];
  for (let j = 0; j < n; j++) if (!locked[j]) unlockedIdxs.push(j);

  const next = ppm.slice();
  if (unlockedIdxs.length === 0) return next;

  const each = Math.floor(budget / unlockedIdxs.length);
  for (const j of unlockedIdxs) next[j] = each;
  let diff = budget - each * unlockedIdxs.length;
  for (let k = 0; diff > 0; k = (k + 1) % unlockedIdxs.length) { next[unlockedIdxs[k]]++; diff--; }
  return next;
}
