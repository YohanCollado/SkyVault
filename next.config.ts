import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kindpng.com'
      }, {
        protocol: 'https',
        hostname: 'cloud.appwrite.io'
      }
    ]
  }
};

export default nextConfig;
