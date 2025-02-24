// NOTE: actionsがあればふようなのか？

import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

// ダミーデータ生成用
const dummyArticles = Array.from({ length: 10 }, (_, i) => ({
  title: `ダミー記事タイトル ${i + 1}`,
  summary: `これはダミー記事 ${i + 1} の要約です。`,
  originalUrl: `https://example.com/article${i + 1}`,
  source: 'TestSource',
  author: `著者 ${i + 1}`,
  publishedAt: new Date(),
}));

export async function GET() {
  try {
    const savedArticles = await prisma.article.createMany({
      data: dummyArticles,
      skipDuplicates: true, // 同一データがある場合はスキップ
    });
    return NextResponse.json({
      message: 'ダミーデータを保存しました',
      count: savedArticles.count,
    });
  } catch (error) {
    console.error('ダミーデータ保存エラー:', error);
    return NextResponse.json(
      { error: 'ダミーデータの保存に失敗しました' },
      { status: 500 }
    );
  }
}
