'use client';

import { useState, useEffect } from 'react';
import { ArticleCard } from './ArticleCard';
import { TagFilter } from './TagFilter';

export type Article = {
    id: number;
    post_type: "Article";
    title: string;
    emoji: string;
    path: string;
  };


type Props = {
  articles: Article[];
};

export const ArticlesList = ({ articles }: Props) => {
  const [filteredArticles, setFilteredArticles] = useState<ReadonlyArray<Article>>([]);

  useEffect(() => {
    setFilteredArticles(articles)
  }, [articles])

  const handleFilterChange = (selectedTag: string) => {
    if (selectedTag === 'all') {
      setFilteredArticles(articles);
    } else {
      // setFilteredArticles(articles.filter((article) => article.tags.includes(selectedTag)));
    }
  };

  return (
    <div>
      <TagFilter onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredArticles?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
