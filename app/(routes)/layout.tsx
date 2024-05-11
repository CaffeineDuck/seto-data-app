import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import '../globals.css';

import Sidebar from '@/components/common/sidebar';
import TopNav from '@/components/home/topnav';

const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Seto Data',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <div className="flex">
          <Sidebar />
          <main className="h-screen w-full overflow-scroll bg-[#F4F7FE] p-10">
            <TopNav />
            <div className='h-full overflow-scroll'>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
