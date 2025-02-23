'use client';

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// モックデータ（タグごとの記事数）
const data = [
  { name: 'React', value: 30 },
  { name: 'Next.js', value: 25 },
  { name: 'JavaScript', value: 20 },
  { name: 'TypeScript', value: 15 },
  { name: 'CSS', value: 10 },
];

// カラーパレット
const COLORS = ['#6366F1', '#34D399', '#F59E0B', '#EF4444', '#10B981'];

const TagPopularityChart = () => {
  return (
    <div className="w-full h-80 bg-white shadow-md rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TagPopularityChart;
