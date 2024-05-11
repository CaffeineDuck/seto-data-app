'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import PM1Data from '@/data/pollution_data/PM1_I.json';
import PM2Data from '@/data/pollution_data/PM2.5_I.json';
import PM10Data from '@/data/pollution_data/PM10_I.json';
import RHData from '@/data/pollution_data/RH_I.json';
import AirTempData from '@/data/pollution_data/T.json';
import TSPData from '@/data/pollution_data/TSP_I.json';
import WDData from '@/data/pollution_data/WD_I.json';
import WSData from '@/data/pollution_data/WS_I.json';
import { Table } from 'antd';

export default function PollutionMainComponent() {
  const Map = useMemo(
    () =>
      dynamic(() => import('./pollution-map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );


  const data = [
    {key: "Stations", value: "PM1", data: PM1Data},
    {key: "Stations", value: "PM2.5", data: PM2Data},
    {key: "Stations", value: "PM10", data: PM10Data},
    {key: "Stations", value: "Air Temp", data: AirTempData},
    {key: "Stations", value: "RH_I", data: RHData},
    {key: "Stations", value: "TSP_I", data: TSPData},
    {key: "Stations", value: "WD_I", data: WDData},
    {key: "Stations", value: "WS_I", data: WSData},
  ]

  return (
    <div className="h-full bg-[#F4F7FE] p-10">
      <div className="grid gap-5">
        <div className="text-xs font-medium text-[#707EAE]">
          Pages / Pollution
        </div>
        <Map />

        <h1 className="text-lg font-bold p-2">Data from AQI Sensors around Nepal</h1>

        <div className="flex gap-x-2 flex-wrap">

        {
          data.map((item, key) => (
            <div className="p-2 w-[300px]" key={key}>
            <Table
              dataSource={item.data as any}
              columns={[
                {
                  title: item.key,
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: item.value,
                  key: 'data',
                  render: (_, record: any) => (
                    <>
                      {record.data?.value ?? '-'} {record.unit}
                    </>
                  ),
                },
              ]}
            />
          </div>
          ))
        }
        </div>
      </div>
    </div>
  );
}
