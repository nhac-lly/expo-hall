/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression for better loading times
  compress: true,
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Enable static optimization
  trailingSlash: false,
  
  // Webpack optimizations
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize for 3D assets
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/assets/',
          outputPath: 'static/assets/',
        },
      },
    });

    // Add support for .hdr files
    config.module.rules.push({
      test: /\.(hdr)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/assets/',
          outputPath: 'static/assets/',
        },
      },
    });

    // Optimize bundle splitting for better loading
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups.three = {
        name: 'three',
        test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
        chunks: 'all',
        priority: 20,
      };
    }

    return config;
  },
  
  // Headers for caching and performance
  async headers() {
    return [
      {
        source: '/VR/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig; 