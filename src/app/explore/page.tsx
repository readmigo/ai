import { getCategories } from '@/lib/api';
import Link from 'next/link';
import { getCategoryIcon } from '@/lib/categoryIcons';

export default async function ExplorePage() {
  const categories = await getCategories('en');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Explore Topics
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Discover articles by category
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group"
            >
              <div
                className="border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-xl transition-all bg-white dark:bg-gray-900 h-full"
                style={{
                  borderColor: category.color + '40',
                }}
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl mb-4"
                  style={{
                    backgroundColor: category.color + '20',
                  }}
                >
                  {getCategoryIcon(category.slug)}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
