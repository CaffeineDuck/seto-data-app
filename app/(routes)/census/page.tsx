import dynamic from 'next/dynamic';

import CensusMap from '@/components/census/census-map';

const CensusComponent = dynamic(
  () => import('@/components/census/census-map'),
  { ssr: false },
);

export default function CensusPage() {
  return (
    <div className="flex min-h-[100vh] flex-col gap-5 p-10">
      <span className="text-lg font-bold">Census Map of Nepal</span>
      <CensusComponent />
    </div>
  );
}
