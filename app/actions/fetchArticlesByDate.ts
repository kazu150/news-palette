'use server';

import prisma from '@/lib/db';
import { Article } from '@prisma/client';
import { startOfDay, endOfDay, parseISO } from 'date-fns';

// 指定された日付の記事を取得する Server Action
export async function fetchArticlesByDate(date: string): Promise<Article[]> {
  try {
    const parsedDate = parseISO(date);
    const start = startOfDay(parsedDate);
    const end = endOfDay(parsedDate);

    const articles = await prisma.article.findMany({
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

    console.log(`取得した記事数: ${articles.length} 件 (${date})`);
    return articles;
  } catch (error) {
    console.error('記事取得中にエラーが発生しました:', error);
    return [];
  }
}
