// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Get the current path
    const path = router.asPath;
    
    // Define allowed paths using regex
    const allowedPaths = [
      /^\/$/,  // Home page
      /^\/hotel-details\/[\w-]+\/[\w-]+$/, // Hotel details pages
      /^\/404$/, // Allow access to 404 page itself
    ];

    // Check if the current path matches any allowed paths
    const isAllowedPath = allowedPaths.some(regex => regex.test(path));

    // If path is not allowed and not already on 404, redirect to 404
    if (!isAllowedPath && path !== '/404') {
      router.push('/404');
    }
  }, [router.asPath]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;