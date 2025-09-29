// src/app/api/ocr/route.ts
import { NextRequest, NextResponse } from 'next/server';

const OCR_URL = process.env.OCR_URL || 'http://localhost:8000';

function dataUrlToBuffer(dataUrl: string): { buf: Buffer; mime: string } {
  const i = dataUrl.indexOf(',');
  if (i === -1) throw new Error('bad_data_url');
  const header = dataUrl.slice(0, i);
  const b64 = dataUrl.slice(i + 1);
  const m = /data:(.*?);base64/.exec(header);
  const mime = m?.[1] || 'image/png';
  const buf = Buffer.from(b64, 'base64');
  return { buf, mime };
}

export async function POST(req: NextRequest) {
  try {
    const { image_b64, prefer_horizontal = true } = await req.json();
    const { buf, mime } = dataUrlToBuffer(image_b64);

    const fd = new FormData();
    const filename = `scan.${mime.split('/')[1] || 'png'}`;
    fd.append('file', new Blob([buf], { type: mime }), filename);

    const upstream = await fetch(
      `${OCR_URL}/ocr-multipart?prefer_horizontal=${prefer_horizontal ? '1' : '0'}`,
      { method: 'POST', body: fd, cache: 'no-store' }
    );

    const text = await upstream.text();

    if (!upstream.ok) {
      // 👇 Tolerant fallback: treat upstream errors as "no detections this frame"
      console.error('OCR upstream error:', upstream.status, text.slice(0, 200));
      return NextResponse.json({ lines: [], tokens: [] }, { status: 200 });
    }

    return new NextResponse(text, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    // Also tolerant on proxy exceptions: don't break the scan loop
    console.error('OCR proxy error:', e);
    return NextResponse.json({ lines: [], tokens: [] }, { status: 200 });
  }
}
