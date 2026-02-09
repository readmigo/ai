import { getFeaturedArticles, getArticles } from '@/lib/api';
import ArticleCard from '@/components/ArticleCard';
import LoadMoreButton from '@/components/LoadMoreButton';
import Link from 'next/link';
import { getCategoryIcon } from '@/lib/categoryIcons';

export default async function Home() {
  const [featuredArticles, articlesResponse] = await Promise.all([
    getFeaturedArticles('en'),
    getArticles(1, 20, 'en'),
  ]);

  const heroArticle = featuredArticles[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Hero Section */}
      {heroArticle && (
        <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full flex items-center gap-1">
                  <span>{getCategoryIcon(heroArticle.categorySlug)}</span>
                  <span className="capitalize">{heroArticle.categorySlug}</span>
                </span>
                {heroArticle.isPremium && (
                  <span className="text-sm px-3 py-1 bg-yellow-400/20 backdrop-blur-sm rounded-full">
                    Premium
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {heroArticle.title}
              </h1>

              <p className="text-xl mb-6 text-white/90 line-clamp-3">
                {heroArticle.summary}
              </p>

              <div className="flex items-center gap-4 text-sm">
                <span className="font-medium">{heroArticle.authorName}</span>
                <span className="text-white/70">
                  {new Date(heroArticle.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>

              <Link
                href={`/article/${heroArticle.slug}`}
                className="inline-block mt-8 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Article
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Latest Articles
        </h2>

        <LoadMoreButton
          initialArticles={articlesResponse.data}
          initialPage={articlesResponse.page}
          totalArticles={articlesResponse.total}
        />
      </section>
    </div>
  );
}
