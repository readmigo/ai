export interface Article {
  id: string;
  slug: string;
  authorName: string;
  coverImageUrl: string | null;
  publishedAt: string;
  isPremium: boolean;
  title: string;
  summary: string;
  categorySlug: string;
  content?: string;
}

export interface ArticleListResponse {
  data: Article[];
  total: number;
  page: number;
  limit: number;
}

export interface Category {
  id: string;
  slug: string;
  icon: string;
  color: string;
  sortOrder: number;
  name: string;
  description: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const API_PREFIX = '/api/v1/ai-tech-review';

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${API_PREFIX}${endpoint}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getFeaturedArticles(locale: string = 'en'): Promise<Article[]> {
  return fetchAPI<Article[]>(`/articles/featured?locale=${locale}`);
}

export async function getArticles(
  page: number = 1,
  limit: number = 20,
  locale: string = 'en',
  category?: string
): Promise<ArticleListResponse> {
  let endpoint = `/articles?page=${page}&limit=${limit}&locale=${locale}`;
  if (category) {
    endpoint += `&category=${category}`;
  }
  return fetchAPI<ArticleListResponse>(endpoint);
}

export async function getArticleBySlug(slug: string, locale: string = 'en'): Promise<Article> {
  return fetchAPI<Article>(`/articles/${slug}?locale=${locale}`);
}

export async function searchArticles(query: string, locale: string = 'en'): Promise<{ data: Article[] }> {
  return fetchAPI<{ data: Article[] }>(`/articles/search?q=${encodeURIComponent(query)}&locale=${locale}`);
}

export async function getCategories(locale: string = 'en'): Promise<Category[]> {
  return fetchAPI<Category[]>(`/categories?locale=${locale}`);
}
