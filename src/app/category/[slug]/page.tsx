import { getArticles, getCategories } from '@/lib/api';
import LoadMoreButton from '@/components/LoadMoreButton';
import { getCategoryIcon } from '@/lib/categoryIcons';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const [articlesResponse, categories] = await Promise.all([
    getArticles(1, 20, 'en', slug),
    getCategories('en'),
  ]);

  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Header */}
        <div className="mb-12">
          <div
            className="w-20 h-20 rounded-lg flex items-center justify-center text-4xl mb-4"
            style={{
              backgroundColor: category.color + '20',
            }}
          >
            {getCategoryIcon(category.slug)}
          </div>

          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            {category.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {category.description}
          </p>
        </div>

        {/* Articles */}
        {articlesResponse.data.length > 0 ? (
          <LoadMoreButton
            initialArticles={articlesResponse.data}
            initialPage={articlesResponse.page}
            totalArticles={articlesResponse.total}
            category={slug}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No articles found in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
