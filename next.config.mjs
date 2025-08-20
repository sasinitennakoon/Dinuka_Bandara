/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better error detection
  reactStrictMode: true,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Configure trailing slashes (helps with routing)
  trailingSlash: false,
  
  // Add asset prefix if needed for custom domains
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://yourdomain.com' : '',
  
  // Optimize images if you're using next/image
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [], // add any external image domains here
  },
  
  // Webpack configuration to handle chunk loading issues
  webpack: (config, { isServer, dev }) => {
    // Only add this in production
    if (!dev && !isServer) {
      // Set chunk filename pattern
      config.output.chunkFilename = '[name].[contenthash].js';
      
      // Optimize chunk splitting
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              priority: 20,
            },
            // Common chunks
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }
    
    return config;
  },
};

export default nextConfig;