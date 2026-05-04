/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'export', // Enable static export for Hostinger
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better for static hosting
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true, // Enable strict mode for better performance
  
  // Turbopack configuration (Next.js 16+)
  turbopack: {},
  
  // Optimize package imports to reduce bundle size
  experimental: {
    optimizeCss: true, // Optimize CSS
    optimizePackageImports: [
      'framer-motion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-toast',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      'lucide-react',
      '@radix-ui/react-icons',
    ],
    // Critical: Inline critical CSS to prevent render blocking
    inlineCss: true,
  },
  
  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize production build
  productionBrowserSourceMaps: false, // Disable source maps in production
  
  // Optimize fonts
  optimizeFonts: true,
}

export default withBundleAnalyzer(nextConfig);
