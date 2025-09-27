// src/components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { useCallback } from 'react';

type Props = {
  open?: boolean;
  onClose?: () => void;
};

export default function Sidebar({ open = false, onClose }: Props) {
  const close = useCallback(() => onClose?.(), [onClose]);

  const Nav = (
    <nav className="space-y-1">
      <Link href="/dashboard" className="block px-2" onClick={close}>
        <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
          <span>🏠</span><span>Dashboard</span>
        </div>
      </Link>
      <Link href="/scraped-packages" className="block px-2" onClick={close}>
        <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
          <span>📦</span><span>Scraped Packages</span>
        </div>
      </Link>
      <Link href="/tags" className="block px-2" onClick={close}>
        <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
          <span>🏷️</span><span>Tags</span>
        </div>
      </Link>
      <Link href="/inventory-filler" className="block px-2" onClick={close}>
        <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
          <span>🧮</span><span>Inventory filler</span>
        </div>
      </Link>
      <Link href="/inventory" className="block px-2" onClick={close}>
        <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
          <span>📋</span><span>Inventory</span>
        </div>
      </Link>
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 border-r border-white/5 bg-[#0b0f16] p-3">
        <div className="mb-3 px-2">
          <div className="text-xs uppercase tracking-wide text-gray-500">Navigation</div>
        </div>
        {Nav}
      </aside>

      {/* Mobile drawer + backdrop */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/50" onClick={close} />
          <aside
            className="absolute inset-y-0 left-0 w-72 max-w-[85vw] border-r border-white/5 bg-[#0b0f16] p-3 shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="mb-3 px-2 flex items-center justify-between">
              <div className="text-xs uppercase tracking-wide text-gray-500">Navigation</div>
              <button
                className="btn btn-outline text-xs"
                onClick={close}
                aria-label="Close navigation"
              >
                ✕
              </button>
            </div>
            {Nav}
          </aside>
        </div>
      )}
    </>
  );
}
