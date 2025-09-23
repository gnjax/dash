'use client';

export default function ScrapedToolbar({
  q, onQ, source, onSource, status, onStatus, sort, onSort, loading,
}: {
  q: string; onQ: (v: string) => void;
  source: string; onSource: (v: string) => void;
  status: string; onStatus: (v: string) => void;
  sort: 'date_desc'|'date_asc'|'intl_desc'|'intl_asc'|'dom_desc'|'dom_asc'|'items_desc'|'items_asc';
  onSort: (v: any) => void;
  loading: boolean;
}) {
  return (
    <div className="card p-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          value={q}
          onChange={e => onQ(e.target.value)}
          placeholder="Search package #, tracking, title, listing id…"
          className="field flex-1"
        />
        <select value={source} onChange={e=>onSource(e.target.value)} className="field">
          <option value="">All proxies</option>
          <option value="zenmarket">zenmarket</option>
          <option value="buyee">buyee</option>
          <option value="fromjapan">fromjapan</option>
        </select>
        <select value={status} onChange={e=>onStatus(e.target.value)} className="field">
          <option value="">All</option>
          <option value="todo">To process</option>
          <option value="processed">Processed</option>
          <option value="blacklisted">Blacklisted</option>
        </select>
        <select value={sort} onChange={e=>onSort(e.target.value as any)} className="field">
          <option value="date_desc">Date ↓</option>
          <option value="date_asc">Date ↑</option>
          <option value="items_desc">Items ↓</option>
          <option value="items_asc">Items ↑</option>
        </select>
        <button disabled={loading} className="btn btn-outline disabled:opacity-50">
          {loading ? 'Loading…' : 'Refresh'}
        </button>
      </div>
    </div>
  );
}
