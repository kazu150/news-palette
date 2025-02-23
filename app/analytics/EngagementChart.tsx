'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// モックデータ（記事ごとのエンゲージメント数）
const data = [
  { title: 'React 18の新機能', views: 150, clicks: 80 },
  { title: 'Next.js 15の使い方', views: 200, clicks: 120 },
  { title: 'TypeScriptのベストプラクティス', views: 100, clicks: 50 },
  { title: 'CSSグリッドレイアウト完全ガイド', views: 180, clicks: 90 },
  { title: 'JavaScriptの新機能まとめ', views: 160, clicks: 100 },
];

const EngagementChart = () => {
  return (
    <div className="w-full h-80 bg-white shadow-md rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" tick={{ fontSize: 12 }} interval={0} angle={-45} textAnchor="end" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="views" fill="#6366F1" name="閲覧数" />
          <Bar dataKey="clicks" fill="#34D399" name="クリック数" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EngagementChart;
