/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // ✅ NUCLEAR OPTION - Force completely unique build
  generateBuildId: async () => {
    return `build-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  },
  
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      config.output.chunkLoading = false;
      config.output.workerChunkLoading = false;
      
      // ✅ Force completely unique chunk names
      const timestamp = Date.now();
      const random = Math.random().toString(36).substr(2, 9);
      config.output.chunkFilename = `static/chunks/[name].[chunkhash]-${timestamp}-${random}.js`;
    }
    return config;
  },
};

export default nextConfig;