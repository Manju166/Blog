import { Suspense } from 'react';
import Posts from './components/posts';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Blog Posts
        </h1>

        <Suspense fallback={<div className="text-center py-8">Loading posts...</div>}>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
}
