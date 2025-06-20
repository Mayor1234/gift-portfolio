import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        // Optionally restrict paths:
        // pathname: '/images/your-project-id/production/**',
      },
    ],
  },
};

export default nextConfig;
