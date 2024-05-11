'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

import AnalysisComponent from '../common/analysis';

export default function ImportsComponent() {
  const canvas = useRef();

  useEffect(() => {
    const ctx: CanvasRenderingContext2D | string | undefined = canvas.current;

    let chartStatus = Chart.getChart(ctx!);
    if (chartStatus) {
      chartStatus.destroy();
    }

    const chart = new Chart(ctx!, {
      type: 'bar',
      data: {
        labels: [
          'Butter',
          'Processed cheese',
          'Processed natural honey',
          'Bones and horn-cores',
          'White and red cabbages',
          'Peas',
          'Other fresh vegetables',
          'Other dried mushrooms and truffles',
          'Others (Bangladesh)',
          'Others (Brunei Darussalam)',
        ],
        datasets: [
          {
            label: 'Quantity in Kg',
            data: [
              2000, 170, 45, 105000, 493750, 4000, 3000, 5000, 226000, 16000,
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Value in Rs',
            data: [
              2389700, 230023.08, 365486.41, 4893361.12, 4821827, 1310877.38,
              30000, 3050000, 33842715, 2655011.25,
            ],
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Quantity (Kg) and Value (Rs)',
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="py-10">
      <div className="grid gap-5">
        <span className="text-lg font-bold">
          Import Quantities and Values by Product
        </span>
        <div className="container">
          <canvas
            className="max-h-[50vh] w-full"
            // @ts-ignore
            ref={canvas}
          ></canvas>
        </div>
        <AnalysisComponent text="The chart shows the import quantities and values by product. We can see (Other) categories were imported the most from Bangladesh." />
      </div>
    </div>
  );
}
