import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1', // メインカラー（インディゴ）
          light: '#A5B4FC',
          dark: '#4F46E5',
        },
        secondary: {
          DEFAULT: '#34D399', // アクションカラー（グリーン）
          light: '#6EE7B7',
          dark: '#059669',
        },
        neutral: {
          light: '#F3F4F6', // 背景色
          DEFAULT: '#E5E7EB',
          dark: '#374151', // テキスト用の暗めの色
        },
        danger: '#EF4444', // エラーや警告用
        success: '#10B981', // 成功メッセージ用
        warning: '#F59E0B', // 警告メッセージ用
      },
    },
  },
  plugins: [],
} satisfies Config;
