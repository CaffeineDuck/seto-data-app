'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';

import HomeMainFilters from './filters';
import TopNav from './topnav';

export default function HomeMainComponent() {
  const Map = useMemo(
    () =>
      dynamic(() => import('./provincial-map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );

  return (
    <div className="h-full bg-[#F4F7FE] p-10">
      <div className="grid gap-5">
        <TopNav />
        <HomeMainFilters />
        <Map />
      </div>
    </div>
  );
}
