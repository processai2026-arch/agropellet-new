# Performance Optimization Plan
## Agro Power Pellet - Improve from 66 to 85+ Performance Score

**Current Status:**
- ✅ SEO: 100/100 (Perfect!)
- ⚠️ Performance: 66/100 (Needs improvement)
- ✅ Accessibility: 100/100 (Perfect!)
- ✅ Best Practices: 100/100 (Perfect!)

**Goal:** Improve Performance to 85+ while maintaining 100 SEO score

---

## 📊 CURRENT PERFORMANCE ISSUES

### **Critical Issues (High Impact):**

1. **Hero Image Too Large**
   - File: `hero-bg.10rv3rlta.po0.jpg`
   - Current Size: 280.6 KB
   - Target Size: < 100 KB
   - **Impact:** -15 points
   - **Fix Time:** 10 minutes

2. **Logo Image Too Large**
   - File: `logo.0mqhhz-q7yk7n.png`
   - Current Size: 71.9 KB
   - Displayed Size: 56×56 pixels
   - Actual Size: 1254×1254 pixels
   - Target Size: < 10 KB (200×200 px)
   - **Impact:** -5 points
   - **Fix Time:** 5 minutes

3. **Animation Frames Loading (195 frames)**
   - Total Size: ~8 MB
   - Blocking main thread
   - **Impact:** -10 points
   - **Fix Time:** 30 minutes

4. **Large JavaScript Bundles**
   - Total: 229.4 KB
   - Unused code: 98.7 KB
   - **Impact:** -8 points
   - **Fix Time:** 1 hour

5. **Render Blocking CSS**
   - File: `0ptrpi_ppv~t0.css` (11.4 KB)
   - Blocking time: 160ms
   - **Impact:** -3 points
   - **Fix Time:** 20 minutes

---

## 🎯 OPTIMIZATION STRATEGY

### **Phase 1: Quick Wins (30 minutes) - Target: 80/100**

#### Task 1.1: Optimize Hero Image
**Priority:** HIGH
**Impact:** +15 points
**Time:** 10 minutes

**Steps:**
1. Locate source image: `src/assets/hero-bg.jpg`
2. Compress using Squoosh.app:
   - Format: WebP
   - Quality: 80%
   - Resize: 1920×1080 (if larger)
   - Target: < 100 KB
3. Replace in `src/assets/`
4. Rebuild: `npm run build`
5. Re-upload `out/` folder

**Expected Result:**
- Before: 280 KB
- After: ~80 KB
- Savings: 200 KB
- Performance: 66 → 81

---

#### Task 1.2: Optimize Logo
**Priority:** HIGH
**Impact:** +5 points
**Time:** 5 minutes

**Steps:**
1. Locate source: `src/assets/logo.png`
2. Resize to 200×200 pixels (max)
3. Compress using TinyPNG.com
4. Target: < 10 KB
5. Replace in `src/assets/`
6. Rebuild and re-upload

**Expected Result:**
- Before: 72 KB (1254×1254)
- After: ~8 KB (200×200)
- Savings: 64 KB
- Performance: 81 → 86

---

#### Task 1.3: Add Image Dimensions
**Priority:** MEDIUM
**Impact:** +2 points
**Time:** 5 minutes

**File to Edit:** `src/components/Navbar.tsx`

**Change:**
```tsx
// Before:
<img 
  src={getImageSrc(logo)} 
  alt="Agro Power Pellet Logo" 
  className="h-8 w-auto sm:h-10"
/>

// After:
<img 
  src={getImageSrc(logo)} 
  alt="Agro Power Pellet Logo" 
  width={200}
  height={200}
  className="h-8 w-auto sm:h-10"
/>
```

**Expected Result:**
- Reduces CLS (Cumulative Layout Shift)
- Performance: 86 → 88

---

### **Phase 2: Medium Optimizations (1 hour) - Target: 90/100**

#### Task 2.1: Lazy Load Animation Frames
**Priority:** HIGH
**Impact:** +5 points
**Time:** 30 minutes

**File to Edit:** `src/components/FrameAnimationSection.tsx`

**Strategy:**
1. Load frames only when section is in viewport
2. Use Intersection Observer
3. Preload first 10 frames only

**Code Changes:**
```tsx
'use client';

import { useEffect, useState, useRef } from 'react';

export default function FrameAnimationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef}>
      {isVisible && (
        // Load animation frames here
      )}
    </section>
  );
}
```

**Expected Result:**
- Frames load only when needed
- Reduces initial payload by ~8 MB
- Performance: 88 → 93

---

#### Task 2.2: Preconnect to Google Fonts
**Priority:** MEDIUM
**Impact:** +2 points
**Time:** 5 minutes

**File to Edit:** `app/layout.tsx`

**Add to `<head>`:**
```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

**Expected Result:**
- Faster font loading
- Reduces render blocking time
- Performance: 93 → 95

---

#### Task 2.3: Defer Non-Critical JavaScript
**Priority:** MEDIUM
**Impact:** +2 points
**Time:** 15 minutes

**File to Edit:** `next.config.js`

**Add:**
```js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Add this:
  experimental: {
    optimizePackageImports: ['framer-motion', '@radix-ui/react-dialog'],
  },
}
```

**Expected Result:**
- Smaller JavaScript bundles
- Faster initial load
- Performance: 95 → 97

---

### **Phase 3: Advanced Optimizations (2 hours) - Target: 95+/100**

#### Task 3.1: Code Splitting
**Priority:** LOW
**Impact:** +3 points
**Time:** 1 hour

**Strategy:**
- Split components into separate chunks
- Load sections on demand
- Use dynamic imports

**Example:**
```tsx
// Before:
import TestimonialsSection from '@/components/TestimonialsSection';

// After:
const TestimonialsSection = dynamic(
  () => import('@/components/TestimonialsSection'),
  { loading: () => <div>Loading...</div> }
);
```

---

#### Task 3.2: Optimize Fonts
**Priority:** LOW
**Impact:** +2 points
**Time:** 30 minutes

**Strategy:**
- Use font-display: swap
- Subset fonts (Latin only)
- Preload critical fonts

---

#### Task 3.3: Enable Compression
**Priority:** LOW
**Impact:** +2 points
**Time:** 30 minutes

**On Hostinger:**
1. Enable Gzip compression
2. Enable Brotli compression (if available)
3. Set cache headers

---

## 📋 IMPLEMENTATION CHECKLIST

### **Quick Wins (Do First - 30 min)**
- [ ] Compress hero image to WebP (< 100 KB)
- [ ] Resize and compress logo (< 10 KB)
- [ ] Add width/height to logo image
- [ ] Rebuild and re-upload

**Expected Score After Quick Wins: 85-88/100**

### **Medium Optimizations (Optional - 1 hour)**
- [ ] Lazy load animation frames
- [ ] Add preconnect to Google Fonts
- [ ] Optimize package imports
- [ ] Rebuild and re-upload

**Expected Score After Medium: 90-95/100**

### **Advanced Optimizations (Optional - 2 hours)**
- [ ] Implement code splitting
- [ ] Optimize font loading
- [ ] Enable server compression
- [ ] Rebuild and re-upload

**Expected Score After Advanced: 95+/100**

---

## 🛠️ TOOLS NEEDED

### **Image Optimization:**
1. **Squoosh.app** (https://squoosh.app/)
   - For hero image compression
   - WebP conversion
   - Free, browser-based

2. **TinyPNG.com** (https://tinypng.com/)
   - For logo compression
   - PNG optimization
   - Free, browser-based

3. **ImageOptim** (Mac) or **FileOptimizer** (Windows)
   - Batch image optimization
   - Optional

### **Testing:**
1. **PageSpeed Insights** (https://pagespeed.web.dev/)
   - Test after each change
   - Track improvements

2. **Lighthouse** (Chrome DevTools)
   - Local testing
   - Detailed metrics

---

## 📊 EXPECTED RESULTS

### **Before Optimization:**
```
Performance: 66/100
- FCP: 2.9s
- LCP: 4.8s
- TBT: 320ms
- CLS: 0.001
- SI: 5.7s
```

### **After Quick Wins (Phase 1):**
```
Performance: 85-88/100
- FCP: 1.8s (-1.1s)
- LCP: 2.5s (-2.3s)
- TBT: 200ms (-120ms)
- CLS: 0.001 (same)
- SI: 3.5s (-2.2s)
```

### **After Medium Optimizations (Phase 2):**
```
Performance: 90-95/100
- FCP: 1.5s
- LCP: 2.0s
- TBT: 150ms
- CLS: 0.001
- SI: 2.8s
```

### **After Advanced Optimizations (Phase 3):**
```
Performance: 95+/100
- FCP: 1.2s
- LCP: 1.8s
- TBT: 100ms
- CLS: 0.001
- SI: 2.2s
```

---

## 🎯 PRIORITY MATRIX

| Task | Impact | Effort | Priority | Score Gain |
|------|--------|--------|----------|------------|
| Compress hero image | HIGH | LOW | 🔴 CRITICAL | +15 |
| Optimize logo | HIGH | LOW | 🔴 CRITICAL | +5 |
| Add image dimensions | MEDIUM | LOW | 🟡 HIGH | +2 |
| Lazy load frames | HIGH | MEDIUM | 🟡 HIGH | +5 |
| Preconnect fonts | MEDIUM | LOW | 🟡 HIGH | +2 |
| Code splitting | MEDIUM | HIGH | 🟢 MEDIUM | +3 |
| Optimize fonts | LOW | MEDIUM | 🟢 MEDIUM | +2 |
| Server compression | LOW | MEDIUM | 🟢 LOW | +2 |

---

## 📝 NOTES

### **Important:**
1. **SEO is already perfect (100/100)** - Don't break it!
2. **Test after each change** - Use PageSpeed Insights
3. **Keep backups** - Save original images
4. **Rebuild required** - After each code change
5. **Re-upload required** - After each rebuild

### **Performance vs SEO:**
- SEO 100 = Will rank well ✅
- Performance 66 = Acceptable but can improve
- Performance 85+ = Excellent user experience
- Performance 95+ = Top tier (optional)

### **Realistic Expectations:**
- Quick wins (30 min) → 85/100 ✅ Recommended
- Medium optimizations (1 hour) → 90/100 ✅ Great
- Advanced optimizations (2 hours) → 95/100 ⭐ Excellent

---

## 🚀 GETTING STARTED

### **Step 1: Backup**
```bash
# Backup current build
cp -r out out_backup

# Backup images
cp -r src/assets src/assets_backup
```

### **Step 2: Start with Quick Wins**
1. Open this document
2. Follow Phase 1 tasks
3. Test after each task
4. Track improvements

### **Step 3: Decide on Further Optimization**
- If score reaches 85+: Consider done ✅
- If you want 90+: Continue to Phase 2
- If you want 95+: Continue to Phase 3

---

## 📞 READY TO START?

**Next Steps:**
1. Review this plan
2. Decide which phases to implement
3. Start with Phase 1 (Quick Wins)
4. Test and iterate

**Let me know when you're ready to begin optimization!**

---

**Document Version:** 1.0  
**Created:** May 4, 2026, 9:43 AM IST  
**Status:** Ready to implement  
**Estimated Time:** 30 min (Quick Wins) to 3.5 hours (All Phases)