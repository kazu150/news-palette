'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// モックデータ（時系列の投稿数）
const data = [
  { date: '2024-11-01', articles: 5 },
  { date: '2024-11-02', articles: 8 },
  { date: '2024-11-03', articles: 6 },
  { date: '2024-11-04', articles: 12 },
  { date: '2024-11-05', articles: 9 },
  { date: '2024-11-06', articles: 7 },
  { date: '2024-11-07', articles: 10 },
];

const TimeSeriesChart = () => {
  return (
    <div className="w-full h-80 bg-white shadow-md rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="articles" stroke="#6366F1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeSeriesChart;
