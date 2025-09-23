'use client';
import { useEffect, useMemo, useState, useCallback } from 'react';
import ScrapedPackageCard from './ui/ScrapedPackageCard';
import ScrapedToolbar from './ui/ScrapedToolbar';
import ScrapersBar from './ui/ScrapersBar';

type ScrapedItemPreview = {
  id: string;
  title: string | null;
  listingId: string | null;
  itemUrl: string | null;
  priceYen: number | null;
};

export type ScrapedPackageRow = {
  id: string;
  source: string;
  pageUrl: string;
  dateShipped: string | null;
  packageNumber: string;
  intlTrackingNumber: string | null;
  intlTrackingUrl: string | null;
  internationalShippingFeeYen: number;
  domesticShippingFeeYen: number;
  itemsCount: number;
  items: ScrapedItemPreview[];
  status: 'Todo' | 'Processed' | 'Blacklist';
};

export default function ScrapedPackagesClient({ initialQuery }: { initialQuery: Record<string,string> }) {
  const [q, setQ] = useState(initialQuery.q || '');
  const [source, setSource] = useState(initialQuery.source || '');
  const [sort, setSort] = useState((initialQuery.sort as any) || 'date_desc');
  const [status, setStatus] = useState(initialQuery.status || '');
  const [data, setData] = useState<ScrapedPackageRow[] | null>(null);
  const [loading, setLoading] = useState(false);

  // block refetches while a run is happening
  const [isRunning, setIsRunning] = useState(false);

  const params = useMemo(() => {
    const sp = new URLSearchParams();
    if (q) sp.set('q', q);
    if (source) sp.set('source', source);
    if (status) sp.set('status', status);
    if (sort) sp.set('sort', sort);
    return sp.toString();
  }, [q, source, status, sort]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await fetch(`/api/scraped-packages?${params}`);
      const j = await r.json();
      setData(j);
    } finally {
      setLoading(false);
    }
  }, [params]);

  // normal refetch on params change, but NOT while a run is happening
  useEffect(() => {
    if (!isRunning) load();
  }, [load, isRunning]);

  const handleRunStart = () => setIsRunning(true);
  const handleRunDone = async () => {
    setIsRunning(false);
    await load(); // single fetch after everything is done
  };

  return (
    <div className="space-y-4">
      <ScrapersBar onRunStart={handleRunStart} onRunDone={handleRunDone} />

      <ScrapedToolbar
        q={q} onQ={setQ}
        source={source} onSource={setSource}
        status={status} onStatus={setStatus}
        sort={sort as any} onSort={setSort as any}
        loading={loading}
      />

      {!data?.length && !loading && (
        <div className="card p-8 text-center text-gray-400">No scraped packages.</div>
      )}

      <div className="cards-grid">
        {data?.map(pkg => (
          <ScrapedPackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
