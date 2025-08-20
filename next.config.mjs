/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove swcMinify (it's enabled by default in Next.js 15+)
  trailingSlash: false,
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [],
  },
  
  // Simplified webpack configuration to fix chunk loading
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      // This is the key fix for Vercel chunk loading issues
      config.output.chunkLoading = false;
      config.output.workerChunkLoading = false;
    }
    return config;
  },
};

export default nextConfig;