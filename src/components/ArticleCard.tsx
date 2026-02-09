import Link from 'next/link';
import { Article } from '@/lib/api';
import { getCategoryIcon } from '@/lib/categoryIcons';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link href={`/article/${article.slug}`}>
      <article className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <CategoryBadge categorySlug={article.categorySlug} />
          {article.isPremium && (
            <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded">
              Premium
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {article.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-grow">
          {article.summary}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 pt-4 border-t border-gray-100 dark:border-gray-800">
          <span>{article.authorName}</span>
          <span>{formattedDate}</span>
        </div>
      </article>
    </Link>
  );
}

function CategoryBadge({ categorySlug }: { categorySlug: string }) {
  const icon = getCategoryIcon(categorySlug);

  return (
    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded flex items-center gap-1">
      <span>{icon}</span>
      <span className="capitalize">{categorySlug}</span>
    </span>
  );
}
