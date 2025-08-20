/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [],
  },
  
  // ✅ ADD THIS - Force new build ID to bust cache
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // Webpack configuration
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      config.output.chunkLoading = false;
      config.output.workerChunkLoading = false;
      
      // ✅ ADD THIS - Force chunk names to change
      config.output.chunkFilename = dev ?
        'static/chunks/[name].js' :
        'static/chunks/[name].[contenthash].js';
    }
    return config;
  },
};

export default nextConfig;