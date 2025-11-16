import React from 'react';
import { Link, useParams } from 'react-router-dom';

const RecentOrdersTable = ({ orders }) => {
    const params = useParams();

    return (
        <div className="rounded-xl shadow-md p-3 border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 space-y-4">
            {/* Header */}
            {!params.status && (
                <div className="flex items-center justify-between mb-2">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        Recent Orders
                    </h5>
                    <Link
                        to="/orders/all"
                        className="text-sm font-medium text-blue-600 hover:underline"
                    >
                        View all
                    </Link>
                </div>
            )}

            {/* Orders List */}
            <div className="space-y-3">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 transition"
                    >
                        {/* Order ID and Time */}
                        <div className="flex flex-col text-sm text-gray-700 dark:text-gray-200">
                            <span>{order.id}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{order.time}</span>
                        </div>

                        {/* Customer Info (only if inside /orders/:status) */}
                        {params.status && (
                            <div className="flex flex-col text-sm text-gray-700 dark:text-gray-200">
                                <span className="text-sm">{order.customer_name}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{order.customer_mobile}</span>
                            </div>
                        )}

                        {/* Status Icon + Label */}
                        <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                            <span className="text-md text-gray-500 dark:text-gray-400">{order.icon}</span>
                            <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-800 dark:text-gray-100">
                                {order.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentOrdersTable;
