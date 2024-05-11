'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import HomeIcon from '../icons/homeIcon';
import HorizontalLogo from '../icons/logos/horizontalLogo';
import TablesIcon from '../icons/tablesIcon';
import UserIcon from '../icons/userIcon';
import AiChatIcon from '../icons/aiChatIcon';

export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);

  const activeItem = pathname;
  return (
    <div>
      <div className="flex flex-col gap-20 p-10">
        <div>
          <HorizontalLogo />
          <hr className="mt-5" />
        </div>
        <div className="flex flex-col gap-5">
          {sidebarMenu.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={activeItem === item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const sidebarMenu = [
  {
    icon: <HomeIcon />,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: <AiChatIcon />,
    label: 'AI Chat',
    href: '/chat'
  },
  {
    icon: <UserIcon />,
    label: 'Profile',
    href: '/profile',
  },
  {
    icon: <TablesIcon />,
    label: 'Tables',
    href: '/tables',
  }
];

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
};

function SidebarItem({ icon, label, href, active = false }: SidebarItemProps) {
  return (
    <Link href={href} className="flex justify-start">
      <div
        className={clsx(
          active ? 'font-bold text-black' : 'text-[#A3AED0]',
          'flex gap-5',
        )}
      >
        {icon}
        <span className="">{label}</span>
      </div>
    </Link>
  );
}
