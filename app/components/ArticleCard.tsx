'use client';

import React from 'react';
import { Article } from './ArticlesList';

type ArticleCardProps = {
  article: Article;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
      <p className="text-sm mb-2">{article.emoji}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {/* {article.tags.map((tag) => (
          <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
            {tag}
          </span>
        ))} */}
      </div>
      <a href={`https://zenn.dev/${article.path}`} target="_blank" className="text-blue-500 text-sm underline">
        記事を読む
      </a>
    </div>
  );
};
