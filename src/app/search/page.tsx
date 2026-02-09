'use client';

import { useState, useEffect } from 'react';
import { Article } from '@/lib/api';
import ArticleCard from '@/components/ArticleCard';
import { useLocale } from '@/contexts/LocaleContext';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { locale } = useLocale();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (query.trim().length > 0) {
        performSearch(query);
      } else {
        setResults([]);
        setHasSearched(false);
      }
    }, 300);

    return () => clearTimeout(debounce);
  }, [query, locale]);

  const performSearch = async (searchQuery: string) => {
    setLoading(true);
    setHasSearched(true);

    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
      const response = await fetch(
        `${API_BASE_URL}/api/v1/articles/search?q=${encodeURIComponent(searchQuery)}&locale=${locale}`
      );
      const data = await response.json();
      setResults(data.data || []);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Search Articles
        </h1>

        {/* Search Input */}
        <div className="mb-12">
          <div className="relative max-w-2xl">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for AI articles..."
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
            {loading && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full"></div>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {!hasSearched && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-24 w-24 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Search for AI articles...
            </p>
          </div>
        )}

        {hasSearched && !loading && results.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-24 w-24 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No articles found for &quot;{query}&quot;
            </p>
          </div>
        )}

        {results.length > 0 && (
          <>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Found {results.length} article{results.length !== 1 ? 's' : ''}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
