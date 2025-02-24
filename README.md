# NewsPalette - カスタマイズ可能な情報収集App

## 📝 概要

NewsPalette は、Zenn、Qiita、Hatena などのウェブサイトからフロントエンドに関する最新情報を収集し、LLM (大規模言語モデル) を用いて要約・整理するアプリケーションです。

- 📰 **情報収集:** カスタムサイトやRSSフィードも対応可能
- 🔍 **タグフィルター:** 関心のある話題を絞り込んで表示
- 📈 **分析機能:** タグ人気度や記事投稿の時系列変化を可視化
- 🧭 **カスタマイズ:** 自分専用のニュースフィードを作成可能

---

## 📂 **ディレクトリ構造**

```
news-aggregator-app/
├── public/                  # 静的ファイル
├── src/
│   ├── app/                 # Next.js 15 の App Router 構成
│   │   ├── page.tsx         # ホームページ (今日のニュース)
│   │   ├── archive/         # 過去のニュース表示ページ
│   │   ├── analytics/       # 分析ページ (タグ分析・時系列変化)
│   │   ├── signup/          # ユーザー登録ページ
│   │   ├── settings/        # 設定ページ
│   │   ├── login/           # ログインページ (予定)
│   │   ├── layout.tsx       # 共通レイアウト (ヘッダー含む)
│   │   └── api/             # API ルート
│   │
│   ├── components/          # UIコンポーネント群
│   ├── hooks/               # カスタムフック
│   ├── lib/                 # ユーティリティ関数・APIクライアント
│   └── styles/              # グローバルスタイル (Tailwind CSS)
│
├── .env.local               # 環境変数ファイル
├── next.config.mjs          # Next.js 設定ファイル
├── tailwind.config.js       # Tailwind CSS 設定
└── tsconfig.json            # TypeScript 設定
```

---

## 🚀 **主な機能**

### 📅 **ページ一覧**

- **今日のニュース (Home):** トレンド記事やおすすめ記事を表示
- **過去のニュース (Archive):** 日付やタグでニュースをフィルター可能
- **分析 (Analytics):** タグ人気度や投稿数の時系列分析
- **設定 (Settings):** ニュース収集元や表示設定を管理
- **ユーザー登録 (Signup):** 新規ユーザーの登録機能

### 📈 **分析機能**

- **TagPopularityChart:** タグごとの記事数を円グラフで表示
- **TimeSeriesChart:** 投稿数の時系列変化を折れ線グラフで表示
- **EngagementChart:** 記事ごとのエンゲージメント（閲覧数、クリック数）を棒グラフで表示

---

## 🛠️ **使用技術**

- **フレームワーク:** Next.js 15, React
- **スタイリング:** Tailwind CSS
- **データ可視化:** Recharts
- **認証:** (予定) NextAuth.js
- **データ取得:** TanStack Query
- **バックエンド:** API Routes, Server Actions (Next.js)
- **LLM 要約:** OpenAI API (予定)
- **デザイン管理:** Figma, Storybook + Chromatic

---

## ⚙️ **セットアップ手順**

```bash
# リポジトリをクローン
git clone https://github.com/your-username/news-palette.git
cd news-palette

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# http://localhost:3000 でアプリを確認
```

---

## 📦 **今後の予定**

- [ ] **認証機能:** ログイン、ログアウト機能の実装
- [ ] **通知機能:** 特定のタグやキーワードに関するニュース通知
- [ ] **エクスポート機能:** ニュースや分析結果をPDFなどで保存

---

## 📧 **お問い合わせ**

何か質問や提案があれば、開発者までご連絡ください！
