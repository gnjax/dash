import './globals.css';
import type { Metadata } from 'next';
import Sidebar from '../components/Sidebar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Proxy Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-[#0b0f16] text-gray-100 antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1">
            <header className="sticky top-0 z-10 border-b border-white/5 bg-[#0b0f16]/80 backdrop-blur">
              <div className="mx-auto max-w-7xl px-4 py-4">
                <h1 className="text-lg font-semibold tracking-tight">
                  {process.env.NEXT_PUBLIC_APP_NAME || 'Proxy Dashboard'}
                </h1>
              </div>
            </header>
            <div className="mx-auto max-w-7xl px-4 py-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
