'use server';

import prisma from '@/lib/db';
import { Article } from '@prisma/client';
import { startOfDay, endOfDay } from 'date-fns';

export async function fetchNews(): Promise<Article[]> {
  const today = new Date();
  const start = startOfDay(today);
  const end = endOfDay(today);

  // 本日の記事をデータベースから取得
  let articles = await prisma.article.findMany({
    where: {
      publishedAt: {
        gte: start,
        lte: end,
      },
    },
    orderBy: {
      publishedAt: 'desc',
    },
  });

  if (articles.length > 0) {
    console.log('本日の記事を取得しました:', articles.length);
    return articles;
  }

  // 記事がない場合、ダミーデータを直接生成して保存
  console.log('本日の記事がないため、ダミーデータを生成します。');

  await prisma.article.createMany({
    data: Array.from({ length: 10 }, (_, i) => ({
      title: `ダミー記事タイトル ${i + 1}`,
      summary: `これはダミー記事 ${i + 1} の要約です。`,
      originalUrl: `https://example.com/article${i + 1}`,
      source: 'TestSource',
      author: `著者 ${i + 1}`,
      publishedAt: new Date(),
    })),
    skipDuplicates: true,
  });

  // ダミーデータ生成後、再取得
  articles = await prisma.article.findMany({
    where: {
      publishedAt: {
        gte: start,
        lte: end,
      },
    },
    orderBy: {
      publishedAt: 'desc',
    },
  });

  console.log('ダミーデータを直接取得しました:', articles.length);
  return articles;
}
