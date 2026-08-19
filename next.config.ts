import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['framer-motion', 'motion'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
