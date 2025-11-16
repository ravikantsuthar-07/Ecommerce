import React from 'react';
import { Link } from 'react-router-dom';

const TopSellingProducts = ({ products = [] }) => (
  <div className="rounded-xl shadow-md p-5 border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 space-y-4">
    {/* Header */}
    <div className="flex items-center justify-between mb-2">
      <h5 className="text-lg font-semibold text-gray-800 dark:text-white">Top Products</h5>
      <Link
        to="/products/all"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        View all
      </Link>
    </div>

    {/* Products List */}
    <div className="space-y-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between gap-3 border border-gray-100 dark:border-gray-700 rounded-lg p-4 shadow-sm bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 transition"
        >
          <div className="flex items-center gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-12 h-12 rounded-md object-cover border border-gray-200 dark:border-gray-700"
              onError={(e) => (e.target.src = '/default-product.png')}
            />
            <div className="flex flex-col">
              <span className="text-sm text-gray-800 dark:text-gray-200">{product.name}</span>
            </div>
          </div>

          <span className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 font-semibold whitespace-nowrap">
            {product.quantity}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TopSellingProducts;
