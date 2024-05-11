import AnalysisComponent from '@/components/common/analysis';
import DataTable from '@/components/common/data-table';
import TreemapComponent from '@/components/common/treemap';

export default function NRBPage() {
  const data = [
    {
      id: 190,
      symbol: 'MKLB',
      sector: 'Microcredit',
      fullname: 'Manakamana Smart Laghubitta Bittiya Sanstha Limited',
      latesttransactionprice: 1021,
      latesttransactionvolume: 10,
      pointchange: -42.6,
      percentagechange: -4.01,
      open: 1059,
      high: 1070,
      low: 1015,
      volume: 4216,
      previousclosing: 1063.6,
      timestamp: '2024-05-09T06:59:58.000Z',
    },
    {
      id: 3,
      symbol: 'UHEWA',
      sector: 'Hydro Power',
      fullname: 'Upper Hewakhola Hydropower Company Limited',
      latesttransactionprice: 385,
      latesttransactionvolume: 40,
      pointchange: -2,
      percentagechange: -0.52,
      open: 379.3,
      high: 402,
      low: 372,
      volume: 14669,
      previousclosing: 387,
      timestamp: '2024-05-09T06:59:57.000Z',
    },
    {
      id: 204,
      symbol: 'FMDBL',
      sector: 'Microcredit',
      fullname: 'First Micro Finance Development Bank',
      latesttransactionprice: 672.1,
      latesttransactionvolume: 40,
      pointchange: -5.9,
      percentagechange: -0.87,
      open: 691.5,
      high: 697,
      low: 671.3,
      volume: 140937,
      previousclosing: 678,
      timestamp: '2024-05-09T06:59:57.000Z',
    },
    {
      id: 240,
      symbol: 'GRDBL',
      sector: 'Development Bank',
      fullname: 'Green Development Bank Ltd.',
      latesttransactionprice: 436,
      latesttransactionvolume: 200,
      pointchange: 0,
      percentagechange: 0,
      open: 440.5,
      high: 444.9,
      low: 428,
      volume: 45509,
      previousclosing: 436,
      timestamp: '2024-05-09T06:59:54.000Z',
    },
    {
      id: 81,
      symbol: 'ULHC',
      sector: 'Hydro Power',
      fullname: 'Upper Lohore Khola Hydropower Company Limited',
      latesttransactionprice: 320.6,
      latesttransactionvolume: 110,
      pointchange: -0.4,
      percentagechange: -0.12,
      open: 320,
      high: 328,
      low: 320,
      volume: 11743,
      previousclosing: 321,
      timestamp: '2024-05-09T06:59:48.000Z',
    },
    {
      id: 169,
      symbol: 'UNHPL',
      sector: 'Hydro Power',
      fullname: 'Union Hydropower Limited',
      latesttransactionprice: 216,
      latesttransactionvolume: 10,
      pointchange: -0.5,
      percentagechange: -0.23,
      open: 220,
      high: 220,
      low: 214.2,
      volume: 21886,
      previousclosing: 216.5,
      timestamp: '2024-05-09T06:59:47.000Z',
    },
    {
      id: 173,
      symbol: 'SWBBL',
      sector: 'Microcredit',
      fullname: 'Swabalamban Bikas Bank',
      latesttransactionprice: 772.4,
      latesttransactionvolume: 15,
      pointchange: -7.6,
      percentagechange: -0.97,
      open: 792,
      high: 792,
      low: 770,
      volume: 14695,
      previousclosing: 780,
      timestamp: '2024-05-09T06:59:46.000Z',
    },
    {
      id: 316793,
      symbol: 'NMBD87/88',
      sector: 'Bond',
      fullname: 'NMB Debenture 8.50% - 2087/88',
      latesttransactionprice: 981,
      latesttransactionvolume: 110,
      pointchange: -19,
      percentagechange: -1.9,
      open: 980,
      high: 981,
      low: 975,
      volume: 0,
      previousclosing: 1000,
      timestamp: '2024-05-06T06:59:12.000Z',
    },
    {
      id: 47,
      symbol: 'NABIL',
      sector: 'Commercial Banks',
      fullname: 'Nabil Bank',
      latesttransactionprice: 422.7,
      latesttransactionvolume: 450,
      pointchange: -1.8,
      percentagechange: -0.42,
      open: 428,
      high: 428,
      low: 419,
      volume: 40801,
      previousclosing: 424.5,
      timestamp: '2024-05-09T06:59:44.000Z',
    },
    {
      id: 41010,
      symbol: 'LICN',
      sector: 'Life Insurance',
      fullname: 'Life Insurance Nepal',
      latesttransactionprice: 1250,
      latesttransactionvolume: 100,
      pointchange: -10,
      percentagechange: -0.79,
      open: 1275,
      high: 1284,
      low: 1250,
      volume: 3045,
      previousclosing: 1260,
      timestamp: '2024-05-09T06:59:29.000Z',
    },
  ];

  const columns = [
    {
      accessorKey: 'symbol',
    },
    {
      accessorKey: 'sector',
    },
    {
      accessorKey: 'latesttransactionprice',
    },
    {
      accessorKey: 'volume',
    },
    {
      accessorKey: 'percentagechange',
    },
    {
      accessorKey: 'pointchange',
    },
    {
      header: 'Open',
      accessorKey: 'open',
    },
    {
      header: 'High',
      accessorKey: 'high',
    },
    {
      header: 'Low',
      accessorKey: 'low',
    },
    {
      header: 'Prev. Closing',
      accessorKey: 'previousclosing',
    },
  ];

  return (
    <div className="grid gap-10 px-10 py-10">
      <div className="grid gap-5">
        <span className="text-lg font-bold">Table view of some data</span>
        <DataTable
          alignText="right"
          columns={columns as any}
          data={data ?? []}
          className="table-scrollbar -m-1.5 max-h-[450px] overflow-auto overflow-y-auto"
        />
        <AnalysisComponent text="The table shows some data." />
      </div>

      <div>
        <span className="text-lg font-bold">Treemap view of some data</span>
        <TreemapComponent
          series={[
            {
              data: [
                {
                  x: 'INTC',
                  y: 1.2,
                },
                {
                  x: 'GS',
                  y: 0.4,
                },
                {
                  x: 'CVX',
                  y: -1.4,
                },
                {
                  x: 'GE',
                  y: 2.7,
                },
                {
                  x: 'CAT',
                  y: -0.3,
                },
                {
                  x: 'RTX',
                  y: 5.1,
                },
                {
                  x: 'CSCO',
                  y: -2.3,
                },
                {
                  x: 'JNJ',
                  y: 2.1,
                },
                {
                  x: 'PG',
                  y: 0.3,
                },
                {
                  x: 'TRV',
                  y: 0.12,
                },
                {
                  x: 'MMM',
                  y: -2.31,
                },
                {
                  x: 'NKE',
                  y: 3.98,
                },
                {
                  x: 'IYT',
                  y: 1.67,
                },
              ],
            },
          ]}
        />
      </div>
      <AnalysisComponent text="The table shows some data." />
    </div>
  );
}
