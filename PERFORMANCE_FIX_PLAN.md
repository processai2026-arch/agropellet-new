# Performance Fix Plan - Next.js Optimization

## Current Issue
Performance dropped from **86 (React)** to **66 (Next.js)** despite Next.js being "better for SEO"

## Root Causes Identified

### 1. Bundle Size Issues (7.935 KiB - TOO LARGE!)
- Main chunk: 65.9 KiB
- Vendor chunks: 50.2 KiB, 45.2 KiB, 35.3 KiB
- Total JavaScript: 229.4 KiB

### 2. Missing Optimizations
- No proper code splitting
- No image optimization
- No compression enabled
- Development mode artifacts

### 3. Deployment Configuration
- Static export not optimized
- Missing build-time optimizations
- No bundle analysis

## Immediate Action Items

### Phase 1: Build Optimization (CRITICAL)

1. **Enable Bundle Analysis**
```bash
npm install --save-dev @next/bundle-analyzer
```

2. **Update next.config.js**
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  compress: true,
  poweredByHeader: false,
  
  // Critical: Enable SWC minification
  swcMinify: true,
  
  // Optimize production build
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Reduce bundle size
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
})
```

3. **Add Compression to package.json**
```json
{
  "scripts": {
    "build": "next build",
    "analyze": "ANALYZE=true next build",
    "compress": "gzip -9 -r out/"
  }
}
```

### Phase 2: Code Splitting

1. **Dynamic Imports for Heavy Components**
```typescript
// Instead of:
import TestimonialsSection from '@/components/TestimonialsSection'

// Use:
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div>Loading...</div>,
  ssr: false // For client-only components
})
```

2. **Lazy Load Below-the-Fold Content**
- Testimonials
- Industries section
- Contact form

### Phase 3: Dependency Optimization

1. **Audit Dependencies**
```bash
npm install --save-dev webpack-bundle-analyzer
npx next build --profile
```

2. **Replace Heavy Libraries**
- Check if all Radix UI components are needed
- Consider lighter alternatives for animations
- Remove unused dependencies

3. **Tree Shaking**
```javascript
// Import only what you need
import { Button } from '@/components/ui/button'
// NOT: import * as UI from '@/components/ui'
```

### Phase 4: Asset Optimization

1. **Image Optimization**
- Convert images to WebP
- Use proper sizing
- Implement lazy loading

2. **Font Optimization**
```typescript
// In app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
```

### Phase 5: Deployment Configuration

1. **Build for Production**
```bash
NODE_ENV=production npm run build
```

2. **Verify Static Export**
```bash
# Check out/ directory size
du -sh out/
# Should be < 2MB for landing page
```

3. **Hostinger Upload**
- Upload only `out/` directory
- Enable gzip compression in .htaccess
- Set proper cache headers

## Expected Results After Fixes

- **Bundle Size**: < 100 KiB (from 229.4 KiB)
- **Performance Score**: 90+ (from 66)
- **LCP**: < 2.5s (currently 3.0s)
- **TBT**: < 200ms (currently 160ms - good!)

## Why React Was Better Initially

1. **Vite's Superior Optimization**
   - Better tree-shaking
   - Smaller runtime overhead
   - Optimized chunk splitting

2. **Simpler Build Output**
   - No framework overhead
   - Direct static files
   - Minimal JavaScript

3. **Your React Build Was Optimized**
   - Production mode
   - Minification enabled
   - Code splitting working

## Why Next.js CAN Be Better

1. **Built-in Optimizations** (when configured correctly)
   - Automatic code splitting
   - Image optimization
   - Font optimization

2. **SEO Benefits** (for static export)
   - Pre-rendered HTML
   - Better meta tags
   - Structured data support

3. **Better Developer Experience**
   - File-based routing
   - API routes (if needed)
   - TypeScript support

## Next Steps

1. Run bundle analyzer to identify heavy dependencies
2. Implement dynamic imports for heavy components
3. Optimize images and fonts
4. Rebuild and test locally
5. Deploy optimized build to Hostinger
6. Re-run Lighthouse audit

## Commands to Run

```bash
# 1. Analyze current bundle
npm run analyze

# 2. Build optimized production version
NODE_ENV=production npm run build

# 3. Check bundle size
du -sh out/

# 4. Test locally
npx serve out/

# 5. Run Lighthouse
npx lighthouse http://localhost:3000 --view
```

## Target Metrics

- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100
- Bundle Size: < 100 KiB
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1