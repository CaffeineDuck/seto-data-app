'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import AiChatIcon from '../icons/aiChatIcon';
import CensusIcon from '../icons/censusIcon';
import DashboardIcon from '../icons/dashboardIcon';
import FinanceIcon from '../icons/financeIcon';
import HomeIcon from '../icons/homeIcon';
import HorizontalLogo from '../icons/logos/horizontalLogo';
import PollutionIcon from '../icons/pollutionIcon';
import TablesIcon from '../icons/tablesIcon';
import UserIcon from '../icons/userIcon';

export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);

  const activeItem = pathname;
  return (
    <div>
      <div className="flex flex-col gap-20 p-10">
        <Link href={'/'}>
          <HorizontalLogo />
          <hr className="mt-5" />
        </Link>
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
    label: 'Home',
    href: '/',
  },
  {
    icon: <DashboardIcon />,
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: <AiChatIcon />,
    label: 'AI Chat',
    href: '/chat',
  },
  {
    icon: <FinanceIcon />,
    label: 'NRB',
    href: '/nrb',
  },
  {
    icon: <TablesIcon />,
    label: 'Trade',
    href: '/trade',
  },
  {
    icon: <PollutionIcon />,
    label: 'Pollution',
    href: '/pollution',
  },
  {
    icon: <CensusIcon />,
    label: 'Census',
    href: '/census',
  },
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
