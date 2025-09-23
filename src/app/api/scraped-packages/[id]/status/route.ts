// src/app/api/scraped-packages/[id]/status/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Status = 'Todo' | 'Processed' | 'Blacklist';

export async function POST(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const { status } = await req.json().catch(() => ({})) as { status?: Status };

  if (!id || !status || !['Todo','Processed','Blacklist'].includes(status)) {
    return NextResponse.json({ ok: false, error: 'invalid_input' }, { status: 400 });
  }

  try {
    const row = await prisma.scrapedPackage.update({
      where: { id },
      data: { status },
      select: { id: true, status: true },
    });
    return NextResponse.json({ ok: true, id: row.id, status: row.status });
  } catch (e:any) {
    return NextResponse.json({ ok: false, error: e?.message || 'update_failed' }, { status: 500 });
  }
}
