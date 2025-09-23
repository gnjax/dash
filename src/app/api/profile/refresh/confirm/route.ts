// src/app/api/profile/refresh/confirm/route.ts
import { NextResponse } from 'next/server';
import { confirmRefresh, getRunning } from '@/lib/refresh-runner';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const source = String(body?.source || '').toLowerCase();
  if (!['buyee','zenmarket','fromjapan'].includes(source)) {
    return NextResponse.json({ ok: false, error: 'invalid_source' }, { status: 400 });
  }
  if (!getRunning(source)) {
    return NextResponse.json({ ok: false, error: 'no_process' }, { status: 409 });
  }
  const out = await confirmRefresh(source);
  return NextResponse.json(out);
}
