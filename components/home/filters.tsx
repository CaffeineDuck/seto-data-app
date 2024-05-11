'use client';

import { useState } from 'react';
import { getDistricts, getProvinces } from '@/data/nepalDistrictsAccProvince';
import { Select } from 'antd';

export default function HomeMainFilters() {
  const [selectedProvince, setSelectedProvince] = useState('Koshi');

  return (
    <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-2 lg:grid-cols-4">
      <div className="grid w-full gap-2 rounded-xl bg-white py-5 pl-5 pr-20">
        <span className="font-medium text-black">Province</span>
        <Select
          value={selectedProvince}
          style={{ width: 120 }}
          onChange={(value) => {
            setSelectedProvince(value);
          }}
          options={getProvinces()}
        />
      </div>

      <div className="grid w-full gap-2 rounded-xl bg-white py-5 pl-5 pr-20">
        <span className="font-medium text-black">District</span>
        <Select
          defaultValue={getDistricts(selectedProvince)[0].value}
          style={{ width: 120 }}
          onChange={() => {}}
          options={getDistricts(selectedProvince)}
        />
      </div>
    </div>
  );
}
