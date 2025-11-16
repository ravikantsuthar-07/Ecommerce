// components/StatCard.jsx
import React from 'react';

const StatCard = ({ title, value, bgColor, icon }) => {
  return (
    <div className={`flex items-center gap-4 rounded-2xl p-5 shadow-md border border-white text-white ${bgColor}`}>
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-sm font-medium uppercase opacity-90">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
