import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI CHAT',
  description: 'Chat with AI bot.',
};

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
