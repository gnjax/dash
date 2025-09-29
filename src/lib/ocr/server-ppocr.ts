// src/lib/ocr/server-ppocr.ts
export async function serverPpocr(dataUrl: string, preferHorizontal = true): Promise<{ tokens: string[]; raw: string[] }> {
  const r = await fetch('/api/ocr', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image_b64: dataUrl, prefer_horizontal: preferHorizontal }),
  });
  if (!r.ok) {
    const text = await r.text().catch(() => '');
    throw new Error(`ocr_proxy_${r.status} ${text}`);
  }
  const j = await r.json();
  const tokens: string[] = (j.tokens || []) as string[];
  const raw: string[] = (j.lines || []).map((l: any) => l.text);
  return { tokens, raw };
}
