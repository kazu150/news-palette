'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // 仮のユーザー登録処理（実際はAPI経由でサーバーに登録する）
    if (username && email && password) {
      alert('ユーザー登録が完了しました！');
      router.push('/login');
    } else {
      alert('すべての項目を入力してください');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">ユーザー登録</h1>
      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">ユーザー名</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ユーザー名を入力"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">メールアドレス</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="メールアドレスを入力"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワードを入力"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition"
        >
          登録する
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
