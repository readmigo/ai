'use client';

import { useState } from 'react';
import Link from 'next/link';
import { openclawArticles, openclawTags, CuratedArticle } from '@/data/openclaw-articles';

export default function OpenClawTopicPage() {
  const [activeTag, setActiveTag] = useState('all');

  const filtered =
    activeTag === 'all'
      ? openclawArticles
      : openclawArticles.filter((a) => a.tag === activeTag);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/explore"
            className="inline-flex items-center text-sm text-white/80 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Explore
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🦞</span>
            <h1 className="text-4xl md:text-5xl font-bold">OpenClaw / ClawBot</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            The open-source personal AI agent that runs locally, remembers context across
            conversations, and automates tasks on your machine. Formerly known as Clawdbot
            and Moltbot, created by Peter Steinberger.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <span>⭐</span> 145,000+ GitHub Stars
            </span>
            <span className="flex items-center gap-1">
              <span>🔧</span> 5,700+ Community Skills
            </span>
            <span className="flex items-center gap-1">
              <span>💻</span> Any OS / Any Platform
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {openclawTags.map((tag) => (
            <button
              key={tag.slug}
              onClick={() => setActiveTag(tag.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTag === tag.slug
                  ? 'bg-orange-600 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Article Count */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {filtered.length} article{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ArticleCard({ article }: { article: CuratedArticle }) {
  const tagColors: Record<string, string> = {
    overview: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    tutorial: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    security: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
    review: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
    'use-cases': 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200',
  };

  return (
    <a
      href={article.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs px-2 py-1 rounded ${tagColors[article.tag] || ''}`}>
            {article.tag === 'use-cases' ? 'Use Cases' : article.tag.charAt(0).toUpperCase() + article.tag.slice(1)}
          </span>
        </div>

        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors leading-snug">
          {article.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
          {article.summary}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 pt-4 border-t border-gray-100 dark:border-gray-800">
          <span className="font-medium">{article.source}</span>
          <span>
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>
    </a>
  );
}
