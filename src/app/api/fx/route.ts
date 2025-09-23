// src/app/api/fx/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Normalize "YYYY-MM-DD" -> Date at 00:00:00 UTC
function toUtcDate(d: string) {
  const [y, m, day] = d.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, day, 0, 0, 0, 0));
}

// Fetch from Frankfurter and return numeric rate JPY->EUR for a given date
async function fetchFrankfurter(dateStr: string): Promise<{ date: string; rate: number } | null> {
  // Frankfurter: https://api.frankfurter.dev/2020-01-01?from=JPY&to=EUR
  const url = `https://api.frankfurter.app/${dateStr}?from=JPY&to=EUR`;
  try {
    const r = await fetch(url, { next: { revalidate: 60 * 60 * 24 } }); // cache at edge for a day
    if (!r.ok) return null;
    const j = await r.json();
    const rate = j?.rates?.EUR;
    const date = j?.date || dateStr;
    if (typeof rate !== 'number' || !Number.isFinite(rate)) return null;
    return { date, rate };
  } catch {
    return null;
  }
}

function toNum(d: any) {
  if (d == null) return 0;
  if (typeof d === 'number') return d;
  if (typeof d === 'string') return Number(d);
  if (typeof d.toNumber === 'function') return d.toNumber();
  return Number(d);
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const dateParam = (searchParams.get('date') || '').slice(0, 10); // "YYYY-MM-DD"
    const base = (searchParams.get('base') || '').toUpperCase();
    const quote = (searchParams.get('quote') || '').toUpperCase();

    if (!dateParam || !/^\d{4}-\d{2}-\d{2}$/.test(dateParam)) {
      return NextResponse.json({ error: 'Invalid date' }, { status: 400 });
    }
    if (base !== 'JPY' || quote !== 'EUR') {
      // You can lift this restriction later; for now we only support JPY->EUR
      return NextResponse.json({ error: 'Only JPY->EUR supported' }, { status: 400 });
    }

    const dateUTC = toUtcDate(dateParam);

    // 1) Try DB cache for exact day
    const cached = await prisma.fxRate.findUnique({
      where: { date_base_quote: { date: dateUTC, base, quote } },
    });
    if (cached) {
      return NextResponse.json({
        base,
        quote,
        date: dateParam,
        rate: toNum(cached.rate),
        source: cached.source || 'cache',
        cached: true,
      });
    }

    // 2) Try Frankfurter (will auto-shift to nearest business day)
    const remote = await fetchFrankfurter(dateParam);
    if (remote) {
      await prisma.fxRate.upsert({
        where: { date_base_quote: { date: toUtcDate(remote.date), base, quote } },
        update: { rate: remote.rate, source: 'frankfurter' },
        create: {
          date: toUtcDate(remote.date),
          base,
          quote,
          rate: remote.rate,
          source: 'frankfurter',
        },
      });
      return NextResponse.json({
        base,
        quote,
        date: dateParam,
        rate: remote.rate,
        source: 'frankfurter',
        cached: false,
        note: remote.date !== dateParam ? `using nearest business day ${remote.date}` : undefined,
      });
    }

    // 3) Fallback: use most recent cached rate for base/quote (if any)
    const latest = await prisma.fxRate.findFirst({
      where: { base, quote },
      orderBy: { date: 'desc' },
    });
    if (latest) {
      return NextResponse.json({
        base,
        quote,
        date: dateParam,
        rate: toNum(latest.rate),
        source: latest.source || 'cache',
        cached: true,
        note: `fallback to latest cached rate from ${latest.date.toISOString().slice(0,10)}`,
      });
    }

    // 4) Emergency fallback for fully-offline dev environments
    const emergency = 0.0062; // conservative placeholder; replace if you prefer
    return NextResponse.json({
      base,
      quote,
      date: dateParam,
      rate: emergency,
      source: 'emergency-fallback',
      cached: false,
      note: 'remote FX fetch failed and no cache exists; using placeholder',
    });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
