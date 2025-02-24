import React from 'react';
import TagPopularityChart from './TagPopularityChart';
import TimeSeriesChart from './TimeSeriesChart';
import EngagementChart from './EngagementChart';

const AnalyticsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Analytics - 記事とタグの分析</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">タグの人気度</h2>
        <TagPopularityChart />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">時系列での投稿数の変化</h2>
        <TimeSeriesChart />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">記事エンゲージメント分析</h2>
        <EngagementChart />
      </section>
    </div>
  );
};

export default AnalyticsPage;
