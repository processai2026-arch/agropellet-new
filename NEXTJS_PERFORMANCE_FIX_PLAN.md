# Next.js Performance Fix Plan - Reach 85+

## Current Status
- Performance: 69/100
- Target: 85-90/100
- Gap: 16-21 points

## Critical Issues Identified

### 1. Render Blocking CSS (2,400 ms) - Priority 1
**Impact:** -15 to -20 points
**Solution:** Inline critical CSS, defer non-critical CSS

### 2. Image Dimensions Missing - Priority 2
**Impact:** -5 to -8 points (CLS: 0.091)
**Solution:** Add width/height to all images

### 3. Hero Image Still Too Large - Priority 3
**Impact:** -5 points
**Current:** 174 KiB
**Target:** 80-100 KiB

### 4. Unused JavaScript - Priority 4
**Impact:** -3 to -5 points
**Solution:** Better tree-shaking, remove unused imports

## Implementation Plan

### Phase 1: Fix Image Dimensions (30 minutes)
- Add width/height to hero image
- Add width/height to logo
- Add width/height to all product images
- Expected: +5-8 points

### Phase 2: Optimize Hero Image Further (15 minutes)
- Recompress at 60% quality (currently 75%)
- Target: 80-100 KiB (currently 174 KiB)
- Expected: +5 points

### Phase 3: Fix CSS Loading (1 hour)
- Configure CSS optimization
- Inline critical CSS
- Defer non-critical CSS
- Expected: +10-15 points

### Phase 4: Bundle Optimization (1 hour)
- Remove unused dependencies
- Optimize imports
- Better code splitting
- Expected: +3-5 points

## Expected Results

**After Phase 1+2:** 79-82/100 (+10-13 points)
**After Phase 3:** 89-97/100 (+20-28 points)
**After Phase 4:** 92-100/100 (+23-31 points)

## Let's Start!