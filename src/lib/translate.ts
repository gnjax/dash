type Provider = 'deepl' | 'libre' | undefined;

export async function translateJaToEn(texts: string[]): Promise<string[]> {
  const cleaned = texts.map(t => (t || '').trim());
  if (!cleaned.length) return [];

  const provider: Provider = (process.env.TRANSLATE_PROVIDER as Provider) || undefined;
  if (!provider) return cleaned; // no-op if not configured

  if (provider === 'deepl') return deeplTranslate(cleaned);
  if (provider === 'libre') return libreTranslate(cleaned);

  return cleaned;
}

async function deeplTranslate(texts: string[]): Promise<string[]> {
  const key = process.env.DEEPL_API_KEY;
  if (!key) return texts;

  const body = new URLSearchParams();
  texts.forEach(t => body.append('text', t));
  body.append('source_lang', 'JA');
  body.append('target_lang', 'EN');

  const resp = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${key}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body.toString(),
  });
  if (!resp.ok) return texts;

  const data: any = await resp.json();
  return (data.translations || []).map((r: any) => r.text ?? '');
}

async function libreTranslate(texts: string[]): Promise<string[]> {
  const base = process.env.LIBRE_TRANSLATE_URL || 'http://localhost:5000';
  const out: string[] = [];
  for (const t of texts) {
    const resp = await fetch(`${base}/translate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q: t, source: 'ja', target: 'en', format: 'text' }),
    });
    if (!resp.ok) { out.push(t); continue; }
    const data: any = await resp.json();
    out.push(data.translatedText || t);
  }
  return out;
}