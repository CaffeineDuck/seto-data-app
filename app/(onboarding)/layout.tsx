import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import '../globals.css';

const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Seto Data',
  description: '',
};

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
