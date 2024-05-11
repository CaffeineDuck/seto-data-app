'use client';

import { useState } from 'react';
import { Select } from 'antd';

export default function HomeMainFilters() {
  const [value, setValue] = useState('');
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="grid grid-cols-4 gap-10 pt-10">
      <div className="grid w-full gap-2 rounded-xl bg-white py-5 pl-5 pr-20">
        <span className="text-black font-medium">Select Category</span>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </div>
      <div className="grid w-full gap-2 rounded-xl bg-white py-5 pl-5 pr-20">
        <span className="text-black font-medium">Infected Treatment</span>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </div>
      <div className="grid w-full gap-2 rounded-xl bg-white py-5 pl-5 pr-20">
        <span className="text-black font-medium">Province</span>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </div>

      <div className="grid w-full gap-2 rounded-xl bg-white py-5 pl-5 pr-20">
        <span className="text-black font-medium">District</span>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </div>
    </div>
  );
}
