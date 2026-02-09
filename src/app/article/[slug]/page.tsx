import { getArticleBySlug } from '@/lib/api';
import { getCategoryIcon } from '@/lib/categoryIcons';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  let article;
  try {
    article = await getArticleBySlug(slug, 'en');
  } catch (error) {
    console.error('Error fetching article:', error);
    notFound();
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded flex items-center gap-1">
              <span>{getCategoryIcon(article.categorySlug)}</span>
              <span className="capitalize">{article.categorySlug}</span>
            </span>
            {article.isPremium && (
              <span className="text-sm px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded">
                Premium
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <span className="font-medium">{article.authorName}</span>
            <span>•</span>
            <time dateTime={article.publishedAt}>{formattedDate}</time>
          </div>
        </header>

        {/* Article Summary */}
        <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <p className="text-lg text-gray-700 dark:text-gray-300 italic">
            {article.summary}
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
          {article.content ? (
            <div
              className="text-gray-800 dark:text-gray-200"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              Article content not available.
            </p>
          )}
        </div>
      </article>
    </div>
  );
}
