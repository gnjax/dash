// src/app/api/profile/refresh/start/route.ts
import { NextResponse } from 'next/server';
import { startRefresh, getRunning } from '@/lib/refresh-runner';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const source = String(body?.source || '').toLowerCase();
  if (!['buyee','zenmarket','fromjapan'].includes(source)) {
    return NextResponse.json({ ok: false, error: 'invalid_source' }, { status: 400 });
  }
  if (getRunning(source)) {
    return NextResponse.json({ ok: true, alreadyRunning: true });
  }
  const { pid } = startRefresh(source);
  // tiny delay so the singleton map is definitely populated before a fast Confirm
  await new Promise(r => setTimeout(r, 100));
  return NextResponse.json({ ok: true, pid });
}
