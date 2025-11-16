import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';

const OrderChart = () => {
  const chartRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const options = {
    chart: {
      height: '100%',
      maxWidth: '100%',
      type: 'area',
      fontFamily: 'Inter, sans-serif',
      dropShadow: { enabled: false },
      toolbar: { show: false },
    },
    tooltip: {
      enabled: true,
      x: { show: false },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2'],
      },
    },
    dataLabels: { enabled: false },
    stroke: { width: 6 },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: { left: 2, right: 2, top: 0 },
    },
    series: [
      {
        name: 'New users',
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: '#1A56DB',
      },
    ],
    xaxis: {
      categories: [
        '01 February', '02 February', '03 February',
        '04 February', '05 February', '06 February', '07 February',
      ],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
  };

  useEffect(() => {
    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
      return () => chart.destroy();
    }
  }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between">
        <div>
          <h5 className="text-3xl font-bold text-gray-900 dark:text-white leading-none pb-2">Order statistics</h5>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500">
          12%
          <svg className="w-3 h-3 ms-1" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13V1m0 0L1 5m4-4 4 4" />
          </svg>
        </div>
      </div>

      <div ref={chartRef} className="w-full mt-4" />

      <div className="grid grid-cols-1 border-t border-gray-200 dark:border-gray-700 pt-5">
        <div className="flex justify-between items-center">
          {/* Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(prev => !prev)}
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white inline-flex items-center"
            >
              Last 7 days
              <svg className="w-2.5 ml-2" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M1 1l4 4 4-4" />
              </svg>
            </button>

            {showDropdown && (
              <div className="absolute mt-2 w-44 z-10 bg-white dark:bg-gray-700 shadow rounded-lg">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {['Yesterday', 'Today', 'Last 7 days', 'Last 30 days', 'Last 90 days'].map(label => (
                    <li key={label}>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Report Link */}
          <a
            href="#"
            className="uppercase text-sm font-semibold text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Users Report
            <svg className="w-2.5 h-2.5 ml-1 rtl:rotate-180" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M1 9l4-4-4-4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderChart;
