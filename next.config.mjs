/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // ✅ Add this for cache busting
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      config.output.chunkLoading = false;
      config.output.workerChunkLoading = false;
      
      // ✅ Force unique chunk names
      config.output.chunkFilename = `static/chunks/[name].[contenthash]-${Date.now()}.js`;
    }
    return config;
  },
};

export default nextConfig;