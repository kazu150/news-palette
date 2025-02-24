'use client';

import { useState, useTransition } from 'react';
import { Article } from '@prisma/client';
import { format, addDays, subDays } from 'date-fns';
import { ArticleCard } from '@/components/ArticleCard';
import { fetchArticlesByDate } from '@/actions/fetchArticlesByDate';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ArchivePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(
    format(new Date(), 'yyyy-MM-dd')
  );
  const [isPending, startTransition] = useTransition();

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    startTransition(async () => {
      const data = await fetchArticlesByDate(date);
      setArticles(data);
    });
  };

  const handlePreviousDay = () => {
    const newDate = format(subDays(new Date(selectedDate), 1), 'yyyy-MM-dd');
    handleDateChange(newDate);
  };

  const handleNextDay = () => {
    const newDate = format(addDays(new Date(selectedDate), 1), 'yyyy-MM-dd');
    handleDateChange(newDate);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">過去のニュース</h1>
      <div className="mb-4 flex items-center gap-4">
        <button
          onClick={handlePreviousDay}
          className="p-2 bg-blue-500 text-white rounded-full flex items-center justify-center w-10 h-10 shadow-md hover:bg-blue-600 transition-colors"
          aria-label="前日へ"
        >
          <ChevronLeft size={20} />
        </button>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
          className="border p-2 rounded shadow-md"
        />
        <button
          onClick={handleNextDay}
          className="p-2 bg-blue-500 text-white rounded-full flex items-center justify-center w-10 h-10 shadow-md hover:bg-blue-600 transition-colors"
          aria-label="翌日へ"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {isPending ? (
        <p>読み込み中...</p>
      ) : articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p>選択した日付には記事が存在しません。</p>
      )}
    </div>
  );
}
