// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;
    const allowedPaths = [
      /^\/$/,  
      /^\/hotel-details\/[\w-]+\/[\w-]+$/, 
      /^\/404$/, 
    ];

    const isAllowedPath = allowedPaths.some(regex => regex.test(path));

    if (!isAllowedPath && path !== '/404') {
      router.push('/404');
    }
  }, [router.asPath]);

  return (
    <Layout>
      <DefaultSeo
        titleTemplate="%s | Vacation Rentals"
        defaultTitle="Vacation Rentals"
        description="Find the best vacation rentals with amazing amenities, perfect for your next getaway."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://example.com',
          site_name: 'Vacation Rentals',
          images: [
            {
              url: 'https://example.com/og-image.jpg',
              width: 800,
              height: 600,
              alt: 'Vacation Rentals',
            },
          ],
        }}
        twitter={{
          handle: '@username',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;