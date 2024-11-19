// src/pages/404.tsx
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="text-center p-6">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
          Oops! The page you are looking for does not exist.
        </p>
        <Link href="/">
          <a className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
            Go Back Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
