// src/app/api/fill-sessions/by-package/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pkgId = searchParams.get('packageId') ?? searchParams.get('scrapedPackageId');
  if (!pkgId) {
    return NextResponse.json({ error: 'packageId is required' }, { status: 400 });
  }

  const sess = await prisma.inventoryFillSession.findFirst({
    where: { sourceType: 'ScrapedPackage', scrapedPackageId: pkgId },
    orderBy: { createdAt: 'desc' }, // latest one
    select: { id: true, finalizedAt: true },
  });

  if (!sess) {
    return NextResponse.json({ error: 'not_found' }, { status: 404 });
  }

  return NextResponse.json({ sessionId: sess.id, finalized: !!sess.finalizedAt });
}
