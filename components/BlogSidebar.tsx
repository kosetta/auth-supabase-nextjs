"use client";

import React, { useState } from 'react';

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface Post {
  id: string;
  title: string;
  date: string;
  thumbnailUrl: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface BlogSidebarProps {
  className?: string;
}

// Mock Data
const MOCK_CATEGORIES: Category[] = [
  { id: '1', name: 'Technology', count: 42 },
  { id: '2', name: 'Design', count: 18 },
  { id: '3', name: 'Development', count: 56 },
  { id: '4', name: 'Tutorials', count: 24 },
  { id: '5', name: 'News', count: 12 },
  { id: '6', name: 'Productivity', count: 9 },
  { id: '7', name: 'Open Source', count: 31 },
];

const MOCK_RECENT_POSTS: Post[] = [
  { id: '1', title: 'The Future of Server Components in React', date: 'Oct 24, 2023', thumbnailUrl: 'https://via.placeholder.com/64' },
  { id: '2', title: 'Mastering Utility-First CSS for Web Design', date: 'Oct 20, 2023', thumbnailUrl: 'https://via.placeholder.com/64' },
  { id: '3', title: 'Advanced TypeScript Patterns You Should Know', date: 'Oct 15, 2023', thumbnailUrl: 'https://via.placeholder.com/64' },
  { id: '4', title: 'Top 10 Tools for Increasing Developer Productivity', date: 'Oct 12, 2023', thumbnailUrl: 'https://via.placeholder.com/64' },
  { id: '5', title: 'Building Accessible Web Applications Today', date: 'Oct 08, 2023', thumbnailUrl: 'https://via.placeholder.com/64' },
];

const MOCK_TAGS: Tag[] = [
  { id: 't1', name: 'React' },
  { id: 't2', name: 'TypeScript' },
  { id: 't3', name: 'Tailwind' },
  { id: 't4', name: 'Next.js' },
  { id: 't5', name: 'Frontend' },
  { id: 't6', name: 'UI/UX' },
  { id: 't7', name: 'Web Dev' },
  { id: 't8', name: 'Performance' },
];

export default function BlogSidebar({ className = '' }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, perform search logic here
    console.log('Searching for:', searchQuery);
  };

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing with email:', email);
      alert(`Subscribed successfully with ${email}!`);
      setEmail('');
    }
  };

  return (
    <aside className={`flex flex-col gap-8 w-full ${className}`}>
      {/* Search Bar */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Search</h3>
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full py-3 pl-4 pr-10 text-sm border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search items"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Submit Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Categories</h3>
        <ul className="space-y-2">
          {MOCK_CATEGORIES.map((category) => {
            const isActive = activeCategoryId === category.id;
            return (
              <li key={category.id}>
                <button
                  onClick={() => setActiveCategoryId(isActive ? null : category.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{category.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-800/50 dark:text-blue-300'
                      : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                    {category.count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {MOCK_RECENT_POSTS.map((post) => (
            <article key={post.id} className="flex gap-4 group cursor-pointer">
              <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.thumbnailUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors title-font">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {MOCK_TAGS.map((tag) => (
            <button
              key={tag.id}
              className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-sm text-white">
        <h3 className="text-lg font-bold mb-2 text-white">Subscribe to Newsletter</h3>
        <p className="text-sm text-blue-100 mb-4 leading-relaxed">
          Get the latest posts delivered right to your inbox. No spam.
        </p>
        <form onSubmit={handleSubscribeSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2.5 px-3 text-sm rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="w-full py-2.5 px-4 text-sm font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm active:scale-[0.98]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}
