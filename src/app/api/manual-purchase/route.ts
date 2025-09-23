// src/app/api/manual-purchases/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST: { currency?, intlShippingTotalYen?, domesticShippingTotalYen?, customsTotalYen?, subtotalYen?, notes?, lines: [{ title, priceYen }] }
export async function POST(req: NextRequest) {
  const b = await req.json();
  if (!Array.isArray(b.lines) || b.lines.length === 0) {
    return NextResponse.json({ error: 'lines required' }, { status: 400 });
  }
  const mp = await prisma.manualPurchase.create({
    data: {
      currency: b.currency ?? 'JPY',
      intlShippingTotalYen: b.intlShippingTotalYen ?? 0,
      domesticShippingTotalYen: b.domesticShippingTotalYen ?? 0,
      customsTotalYen: b.customsTotalYen ?? 0,
      subtotalYen: b.subtotalYen ?? null,
      notes: b.notes ?? null,
      lines: {
        create: b.lines.map((l: any) => ({ title: l.title, priceYen: l.priceYen })),
      },
    },
  });

  return NextResponse.json({ manualPurchaseId: mp.id }, { status: 201 });
}
