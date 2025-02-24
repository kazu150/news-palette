// src/app/page.tsx (Server Component)
import { ArticlesList } from '@/components/ArticlesList';
import { fetchNews } from './actions/fetchNews';

export default async function HomePage() {
  const articles = await fetchNews();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">今日のニュース</h1>
      <ArticlesList articles={articles} />
    </div>
  );
}
