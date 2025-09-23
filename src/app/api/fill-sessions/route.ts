export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { PPM_DENOM } from '@/lib/weights';

// POST /api/fill-sessions
// body: { sourceType: 'ScrapedPackage'|'Manual', scrapedPackageId?, manualPurchaseId?, customsTotalYen? }
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { sourceType, scrapedPackageId, manualPurchaseId, customsTotalYen } = body || {};

  if (sourceType === 'ScrapedPackage') {
    if (!scrapedPackageId) return NextResponse.json({ error: 'scrapedPackageId required' }, { status: 400 });

    // ✅ Reuse existing non-finalized session
    const existing = await prisma.inventoryFillSession.findFirst({
      where: { sourceType: 'ScrapedPackage', scrapedPackageId, finalizedAt: null },
      select: { id: true },
    });
    if (existing) return NextResponse.json({ sessionId: existing.id }, { status: 200 });

    const pkg = await prisma.scrapedPackage.findUnique({
      where: { id: scrapedPackageId },
      include: { items: true },
    });
    if (!pkg) return NextResponse.json({ error: 'ScrapedPackage not found' }, { status: 404 });

    const session = await prisma.inventoryFillSession.create({
      data: {
        sourceType: 'ScrapedPackage',
        scrapedPackageId,
        customsTotalYen: customsTotalYen ?? 0,
      },
    });

    // Default shipping split proportional to price (fallback equal)
    const total = pkg.items.reduce((a, s) => a + Number(s.priceYen ?? 0), 0);
    for (const s of pkg.items) {
      let ppm = 0;
      const v = Number(s.priceYen ?? 0);
      if (total > 0) ppm = Math.round((v / total) * PPM_DENOM);
      await prisma.inventoryFillSourceItem.create({
        data: { sessionId: session.id, scrapedItemId: s.id, shippingWeightPpm: ppm },
      });
    }

    return NextResponse.json({ sessionId: session.id }, { status: 201 });
  }

  if (sourceType === 'Manual') {
    if (!manualPurchaseId) return NextResponse.json({ error: 'manualPurchaseId required' }, { status: 400 });

    // ✅ Reuse existing non-finalized session
    const existing = await prisma.inventoryFillSession.findFirst({
      where: { sourceType: 'Manual', manualPurchaseId, finalizedAt: null },
      select: { id: true },
    });
    if (existing) return NextResponse.json({ sessionId: existing.id }, { status: 200 });

    const mp = await prisma.manualPurchase.findUnique({
      where: { id: manualPurchaseId },
      include: { lines: true },
    });
    if (!mp) return NextResponse.json({ error: 'ManualPurchase not found' }, { status: 404 });

    const session = await prisma.inventoryFillSession.create({
      data: {
        sourceType: 'Manual',
        manualPurchaseId,
        customsTotalYen: customsTotalYen ?? mp.customsTotalYen,
      },
    });

    const total = mp.lines.reduce((a, s) => a + Number(s.priceYen ?? 0), 0);
    for (const line of mp.lines) {
      let ppm = 0;
      const v = Number(line.priceYen ?? 0);
      if (total > 0) ppm = Math.round((v / total) * PPM_DENOM);
      await prisma.inventoryFillSourceItem.create({
        data: { sessionId: session.id, manualLineId: line.id, shippingWeightPpm: ppm },
      });
    }

    return NextResponse.json({ sessionId: session.id }, { status: 201 });
  }

  return NextResponse.json({ error: 'Invalid sourceType' }, { status: 400 });
}
