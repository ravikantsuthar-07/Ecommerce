import React from 'react';
import { Link } from 'react-router-dom';

const TopBuyersList = ({ buyers = [] }) => (
  <div className="rounded-xl shadow-md p-5 border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 space-y-4">
    {/* Header */}
    <div className="flex items-center justify-between mb-2">
      <h5 className="text-lg font-semibold text-gray-800 dark:text-white">Top Buyers</h5>
      <Link
        to="/customers/all"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        View all
      </Link>
    </div>

    {/* Buyers List */}
    <div className="space-y-3">
      {buyers.map((buyer) => (
        <div
          key={buyer.id}
          className="flex items-center justify-between gap-3 border border-gray-100 dark:border-gray-700 rounded-lg p-4 shadow-sm bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 transition"
        >
          <div className="flex items-center gap-1">
            <img
              src={buyer.avatar}
              alt={buyer.name}
              onError={(e) => (e.target.src = '/default-avatar.png')}
              className="w-10 h-10 rounded-full object-cover border"
            />
            <div className="flex flex-col text-sm text-gray-700 dark:text-gray-200">
              <span className="font-medium">{buyer.name}</span>
              <span className="text-gray-500 dark:text-gray-400">{buyer.number}</span>
            </div>
          </div>

          <div className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-medium whitespace-nowrap">
            {buyer.orders}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TopBuyersList;
