import Link from 'next/link';
import { usePathname } from 'next/navigation'; // optional; if you want active highlight, make this a client comp

export default function Sidebar() {
  // for server component, skip active highlighting; keep it simple & clean
  return (
    <aside className="w-64 border-r border-white/5 bg-[#0b0f16] p-3">
      <div className="mb-3 px-2">
        <div className="text-xs uppercase tracking-wide text-gray-500">Navigation</div>
      </div>
      <nav className="space-y-1">
        <Link href="/dashboard" className="block px-2">
          <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
            <span>🏠</span><span>Dashboard</span>
          </div>
        </Link>

        <Link href="/scraped-packages" className="block px-2">
          <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
            <span>📦</span><span>Scraped Packages</span>
          </div>
        </Link>

        {/* New: Tags */}
        <Link href="/tags" className="block px-2">
          <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
            <span>🏷️</span><span>Tags</span>
          </div>
        </Link>

        <Link href="/inventory-filler" className="block px-2">
          <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
            <span>📦</span><span>Inventory filler</span>
          </div>
        </Link>
      </nav>
    </aside>
  );
}
