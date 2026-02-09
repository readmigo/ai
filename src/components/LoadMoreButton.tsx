'use client';

import { useState } from 'react';
import { Article } from '@/lib/api';
import ArticleCard from './ArticleCard';
import { useLocale } from '@/contexts/LocaleContext';

interface LoadMoreButtonProps {
  initialArticles: Article[];
  initialPage: number;
  totalArticles: number;
  category?: string;
}

export default function LoadMoreButton({
  initialArticles,
  initialPage,
  totalArticles,
  category
}: LoadMoreButtonProps) {
  const [articles, setArticles] = useState(initialArticles);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const { locale } = useLocale();

  const hasMore = articles.length < totalArticles;

  const loadMore = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      let url = `/api/v1/articles?page=${nextPage}&limit=20&locale=${locale}`;
      if (category) {
        url += `&category=${category}`;
      }

      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
      const response = await fetch(`${API_BASE_URL}${url}`);
      const data = await response.json();

      setArticles([...articles, ...data.data]);
      setPage(nextPage);
    } catch (error) {
      console.error('Failed to load more articles:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="text-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </>
  );
}
