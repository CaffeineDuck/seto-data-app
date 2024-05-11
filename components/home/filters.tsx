'use client';

import { useState } from 'react';
import { getDistricts, getProvinces } from '@/data/nepalDistrictsAccProvince';
import { Select } from 'antd';

export default function HomeMainFilters() {
  const [selectedProvince, setSelectedProvince] = useState('');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
      <div className="grid w-full gap-2 rounded-xl bg-white py-5 pl-5 pr-20">
        <span className="font-medium text-black">Select Category</span>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={() => {}}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </div>
      <div className="grid w-full gap-2 rounded-xl bg-white py-5 pl-5 pr-20">
        <span className="font-medium text-black">Infected Treatment</span>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={() => {}}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </div>
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
          style={{ width: 120 }}
          onChange={() => {}}
          options={getDistricts(selectedProvince)}
        />
      </div>
    </div>
  );
}
