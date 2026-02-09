'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLocale } from '@/contexts/LocaleContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale } = useLocale();

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">AI Weekly</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/explore" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Explore
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Search
            </Link>

            {/* Locale Switcher */}
            <div className="flex items-center space-x-2 border-l border-gray-300 dark:border-gray-700 pl-6">
              <button
                onClick={() => setLocale('en')}
                className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLocale('ja')}
                className={`px-2 py-1 rounded ${locale === 'ja' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                JA
              </button>
              <button
                onClick={() => setLocale('zh')}
                className={`px-2 py-1 rounded ${locale === 'zh' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                中文
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Home
              </Link>
              <Link href="/explore" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Explore
              </Link>
              <Link href="/search" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Search
              </Link>

              {/* Mobile Locale Switcher */}
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                <span className="text-sm text-gray-600 dark:text-gray-400">Language:</span>
                <button
                  onClick={() => setLocale('en')}
                  className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLocale('ja')}
                  className={`px-3 py-1 rounded ${locale === 'ja' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                  JA
                </button>
                <button
                  onClick={() => setLocale('zh')}
                  className={`px-3 py-1 rounded ${locale === 'zh' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                  中文
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
