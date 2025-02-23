import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header'; // 共通ヘッダーをインポート

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NewsPalette - カスタマイズ可能な情報収集App',
  description: 'Zenn, Qiita, Hatenaなどからフロントエンド情報を収集し、LLMで要約して提供するアプリ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header /> {/* すべてのページで表示する共通ヘッダー */}
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}