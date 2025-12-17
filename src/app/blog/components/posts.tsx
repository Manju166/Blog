// app/blog/components/posts.tsx  ← This must be a SERVER component
import Link from 'next/link';
import { Blog } from '../../types/blog';

export default async function Posts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  const posts: Blog[] = await res.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
        >
          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
              {post.body}
            </p>
            <Link
              href={`/blog/${post.id}`}
              className="mt-auto text-blue-600 font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
