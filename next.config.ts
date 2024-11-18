import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Add your local server domain
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000', // Specify the port
        pathname: '/uploads/**', // Adjust this to match the path to your images
      },
    ],
  },
};

export default nextConfig;

