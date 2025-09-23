export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const scrapedPackageId = searchParams.get('scrapedPackageId');
  const manualPurchaseId = searchParams.get('manualPurchaseId');

  if (!scrapedPackageId && !manualPurchaseId) {
    return NextResponse.json({ error: 'Provide scrapedPackageId or manualPurchaseId' }, { status: 400 });
  }

  const where = scrapedPackageId ? { scrapedPackageId } : { manualPurchaseId };

  // Prefer most recently finalized; otherwise most recent by id as a fallback.
  const session = await prisma.inventoryFillSession.findFirst({
    where,
    orderBy: [
      { finalizedAt: 'desc' },
      { id: 'desc' }, // fallback ordering if finalizedAt is null/identical
    ],
    select: { id: true, finalizedAt: true },
  });

  return NextResponse.json({
    sessionId: session?.id ?? null,
    finalizedAt: session?.finalizedAt ?? null,
  });
}
