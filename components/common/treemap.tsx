'use client';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type Props = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
};

export default function TreemapComponent({ series }: Props) {
  const option: ApexOptions = {
    chart: {
      id: 'apexchart-example',
      height: 600,
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            {
              from: -6,
              to: 0,
              color: '#CD363A',
            },
            {
              from: 0.001,
              to: 6,
              color: '#52B12C',
            },
          ],
        },
      },
    },
  };

  return (
    <div>
      <ApexChart
        type="treemap"
        options={option}
        series={series}
        height={600}
        width="100%"
      />
    </div>
  );
}
