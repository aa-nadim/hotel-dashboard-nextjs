// src/pages/404.tsx
import Link from 'next/link';

export default function Custom404() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      data-testid="404-container"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-2">The page you're looking for doesn't exist.</p>
        <Link 
          href="/" 
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
