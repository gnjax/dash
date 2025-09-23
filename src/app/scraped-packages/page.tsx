// src/app/scraped-packages/page.tsx
import ScrapedPackagesClient from './scraped-packages.client';

export const dynamic = 'force-dynamic';

export default async function ScrapedPackagesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams; // <-- important

  const initialQuery = Object.fromEntries(
    Object.entries(sp || {}).map(([k, v]) => [k, String(v ?? '')])
  );

  return <ScrapedPackagesClient initialQuery={initialQuery} />;
}
