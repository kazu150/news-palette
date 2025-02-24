'use client';

import React, { useState } from 'react';

const SettingsPage = () => {
  const [rssUrls, setRssUrls] = useState<string[]>([
    'https://zenn.dev/feed',
    'https://qiita.com/feed',
    'https://b.hatena.ne.jp/hotentry/it.rss',
  ]);
  const [newRssUrl, setNewRssUrl] = useState('');

  const handleAddRssUrl = () => {
    if (newRssUrl && !rssUrls.includes(newRssUrl)) {
      setRssUrls([...rssUrls, newRssUrl]);
      setNewRssUrl('');
    }
  };

  const handleRemoveRssUrl = (url: string) => {
    setRssUrls(rssUrls.filter((rss) => rss !== url));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">設定ページ</h1>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          ニュース収集元 (RSSフィード)
        </h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newRssUrl}
            onChange={(e) => setNewRssUrl(e.target.value)}
            placeholder="RSSフィードのURLを追加"
            className="border p-2 rounded flex-1"
          />
          <button
            onClick={handleAddRssUrl}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            追加
          </button>
        </div>
        <ul className="space-y-2">
          {rssUrls.map((url) => (
            <li
              key={url}
              className="flex items-center justify-between bg-gray-100 p-2 rounded"
            >
              <span className="text-sm break-all">{url}</span>
              <button
                onClick={() => handleRemoveRssUrl(url)}
                className="text-red-500 hover:underline"
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SettingsPage;
