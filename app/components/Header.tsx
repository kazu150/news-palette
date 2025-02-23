'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '今日のニュース' },
    { href: '/archive', label: '過去のニュース' },
    { href: '/settings', label: '設定' },
    { href: '/analytics', label: 'タグ分析' },
    { href: '/signup', label: 'ユーザー登録' },
  ];

  return (
    <header className="bg-white shadow-md p-4 mb-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">NewsPalette</Link>
        </h1>
        <ul className="flex gap-4">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-3 py-2 rounded hover:bg-gray-100 transition ${
                  pathname === href ? 'bg-gray-200 font-semibold' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;