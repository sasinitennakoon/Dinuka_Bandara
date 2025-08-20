/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Remove the experimental.appDir line - it's no longer needed!
  // experimental: {
  //   appDir: true,  // ❌ Remove this
  // },
  
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      config.output.chunkLoading = false;
      config.output.workerChunkLoading = false;
    }
    return config;
  },
};

export default nextConfig;