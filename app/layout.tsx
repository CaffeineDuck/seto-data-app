import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/common/sidebar";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seto Data",
  description: "",
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
      <main className='w-full min-h-[100vh] bg-[#F4F7FE]'>
        {children}
      </main>
    </div>
      </body>
    </html>
  );
}
