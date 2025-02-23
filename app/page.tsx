// src/app/page.tsx (Server Component)
import { ArticlesList } from '@/components/ArticlesList';

// サーバーサイドでニュースデータを取得
async function fetchNews() {
  const res = await fetch('https://zenn.dev/api/articles', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch news');
  return res.json();
}

export default async function HomePage() {
  const { articles } = await fetchNews();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">今日のニュース</h1>
      <ArticlesList articles={articles} />
    </div>
  );
}
