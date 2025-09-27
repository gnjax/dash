// src/components/AppShell.tsx
'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[16rem_1fr]">
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b0f16]/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-3">
            {/* mobile toggle only */}
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-800 bg-gray-900 text-gray-200 hover:bg-gray-800 lg:hidden"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle navigation"
            >
              ☰
            </button>
            <h1 className="text-lg font-semibold">
              {process.env.NEXT_PUBLIC_APP_NAME || 'Proxy Dashboard'}
            </h1>
          </div>
        </header>

        <main className="mx-auto max-w-7xl flex-1 px-4 py-6 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
