'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';

import HomeMainFilters from './filters';

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
    <div className="h-full bg-[#F4F7FE]">
      <div className="grid gap-5">
        <HomeMainFilters />
        <Map />
      </div>
    </div>
  );
}
