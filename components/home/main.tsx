"use client";

import { useMemo } from 'react';
import dynamic from 'next/dynamic';

import HomeMainFilters from './filters';
import TopNav from './topnav';

export default function HomeMainComponent() {
  const Map = useMemo(
    () =>
      dynamic(() => import('./map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );
  return (
    <div className="h-full bg-[#F4F7FE] p-10">
      <div className="grid gap-5">
        <div className="text-xs font-medium text-[#707EAE]">
          Pages / Dashboard
        </div>
        <TopNav />
        <HomeMainFilters />
        <Map />
      </div>
    </div>
  );
}
