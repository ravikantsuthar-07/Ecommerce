import React from 'react';
import Chart from 'react-apexcharts';

const OrderStatusStatistics = () => {
    const chartOptions = {
        series: [1250, 2600, 2500,  4000],
        options: {
            chart: {
                type: 'pie',
                height: 420,
                width: '100%',
            },
            colors: ['rgba(14,13,239,1)', '#rgb(65, 65, 151)', 'rgb(236, 139, 139)', 'rgb(138, 92, 92)'],
            stroke: {
                colors: ['white'],
                lineCap: '',
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        offset: -25,
                    },
                },
            },
            labels: ['Pending', 'Confirmed', 'Packaged', 'Delivered'],
            dataLabels: {
                enabled: true,
                style: {
                    fontFamily: 'Inter, sans-serif',
                },
            },
            legend: {
                position: 'bottom',
                fontFamily: 'Inter, sans-serif',
            },
            yaxis: {
                labels: {
                    formatter: (val) => `${val}%`,
                },
            },
            xaxis: {
                labels: {
                    formatter: (val) => `${val}%`,
                },
                axisTicks: { show: false },
                axisBorder: { show: false },
            },
        },
    };

    return (
        <div className="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div className="flex-col">
                    <div className="flex items-center mb-1">
                        <h5 className="text-xl font-bold text-gray-900 dark:text-white me-1">
                            Order Status statistics
                        </h5>
                        <svg className="w-3.5 h-3.5 text-gray-500 ms-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
                        </svg>
                    </div>
                </div>

            </div>

            {/* Pie Chart */}
            <div className="py-6">
                <Chart options={chartOptions.options} series={chartOptions.series} type="pie" height={420} />
            </div>

        </div>
    );
};

export default OrderStatusStatistics;
