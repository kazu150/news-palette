// src/app/archive/page.tsx
'use client';

import React, { useState } from 'react';
import { ArticleCard } from '@/components/ArticleCard';
import { TagFilter } from '@/components/TagFilter';
import { Article } from '@/components/ArticlesList';

const mockNewsData: Article[] = [
  {
    id: 1,
    post_type: 'Article',
    title: 'React 18の新機能について',
    emoji: '⚛️',
    path: '/articles/react18',
  },
  {
    id: 2,
    post_type: 'Article',
    title: 'Next.js 15でできること',
    emoji: '🚀',
    path: '/articles/nextjs15',
  },
];

const ArchivePage = () => {
  const [articles, setArticles] = useState<Article[]>(mockNewsData);

  const handleFilterChange = (selectedTag: string) => {
    if (selectedTag === 'all') {
      setArticles(mockNewsData);
    } else {
      setArticles(mockNewsData.filter((article) => article.title.includes(selectedTag)));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">過去のニュース</h1>
      <TagFilter onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArchivePage;
