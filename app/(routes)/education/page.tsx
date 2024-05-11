'use client';

import React, { useState } from 'react';
import { DatePicker, Empty } from 'antd';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { universityData2080 } from '@/data/education';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'University Enrollment by Gender for a Selected Year',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function EducationPage() {
  const [year, setYear] = useState<number | null>(null);

  // Extract year from date and update the chart
  const handleYearChange = (date: any, dateString: any) => {
    setYear(date ? date.year() : null);
  };

  const filteredData = universityData2080.filter(
    (data) => year && data.Year === year,
  );

  const data = {
    labels: filteredData.map((data) => data.University),
    datasets: [
      {
        label: 'Male',
        data: filteredData.map((data) => data.Male),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Female',
        data: filteredData.map((data) => data.Female),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className="flex w-full flex-col items-end justify-end mt-10">
      <DatePicker
        onChange={handleYearChange}
        picker="year"
        style={{ width: 200 }}
      />

      {year ? (
        <Bar options={options} data={data} />
      ) : (
        <div className="flex h-[70vh] w-full items-center justify-center">
          <Empty className="mt-30" />
        </div>
      )}
    </div>
  );
}
