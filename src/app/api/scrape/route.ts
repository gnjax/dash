import { NextResponse } from 'next/server';
import { scrapeBuyeeShippedList } from '@/scrapers/buyee';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const { url } = await request.json();
  if (!url || typeof url !== 'string') {
    return NextResponse.json({ error: 'Missing url' }, { status: 400 });
  }

  try {
    const data = await scrapeBuyeeShippedList(url);
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Scrape failed' }, { status: 500 });
  }
}