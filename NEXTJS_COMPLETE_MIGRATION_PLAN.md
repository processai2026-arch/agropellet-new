# Complete Next.js Migration & SEO Implementation Plan
## Agro Power Pellet - Perfect SEO for Top 5-10 Ranking

**Goal:** Migrate to Next.js, optimize SEO, build static site, deploy to Hostinger  
**Timeline:** 4-6 hours  
**Expected Result:** Top 5-10 ranking for "biomass pellets Tamil Nadu"

---

## 🎯 COMPLETE WORKFLOW

```
1. Fix Next.js Setup → 2. Convert All Components → 3. Add SEO Tags → 
4. Build Static Site → 5. Test SEO Score → 6. Optimize → 7. Deploy to Hostinger
```

---

## 📋 PHASE 1: FIX NEXT.JS FOUNDATION (30 mins)

### Task 1.1: Fix React Version
```bash
npm install react@18.2.0 react-dom@18.2.0 --force
```
**Why:** React 18.3.1 has compatibility issues with Next.js 16

### Task 1.2: Update Next.js Configuration
File: `next.config.js`
- ✅ Already configured for static export
- ✅ Images set to unoptimized
- ✅ Trailing slash enabled

### Task 1.3: Fix TypeScript Configuration
File: `tsconfig.json`
- ✅ Already updated for Next.js
- ✅ Excluded old files
- Need to verify paths work

**Checkpoint 1:** Run `npm run dev` - should start without errors

---

## 📋 PHASE 2: CONVERT ALL COMPONENTS (2 hours)

### Strategy: Mark Client Components
Every component using:
- `useState`, `useEffect`, `useRef` → needs `'use client'`
- Framer Motion → needs `'use client'`
- Event handlers (onClick, onChange) → needs `'use client'`
- Browser APIs (window, document) → needs `'use client'`

### Components to Convert (Priority Order)

#### 2.1: Core Layout Components
1. **`src/old_pages/Index.tsx`** → Convert to `'use client'`
2. **`src/old_pages/NotFound.tsx`** → Convert to `'use client'`

#### 2.2: Interactive Components (HIGH PRIORITY)
3. **`src/components/Navbar.tsx`** → Add `'use client'` (uses useState)
4. **`src/components/ContactSection.tsx`** → Add `'use client'` (uses useState, form)
5. **`src/components/CountUp.tsx`** → Add `'use client'` (uses useState, useEffect)

#### 2.3: Animation Components (MEDIUM PRIORITY)
6. **`src/components/HeroSection.tsx`** → Add `'use client'` (Framer Motion)
7. **`src/components/AboutSection.tsx`** → Add `'use client'` (Framer Motion)
8. **`src/components/ProductsSection.tsx`** → Add `'use client'` (Framer Motion)
9. **`src/components/SolutionsSection.tsx`** → Add `'use client'` (Framer Motion)
10. **`src/components/IndustriesSection.tsx`** → Add `'use client'` (Framer Motion)
11. **`src/components/WhyChooseUsSection.tsx`** → Add `'use client'` (Framer Motion)
12. **`src/components/ImpactSection.tsx`** → Add `'use client'` (Framer Motion)
13. **`src/components/TestimonialsSection.tsx`** → Add `'use client'` (Framer Motion)
14. **`src/components/FrameAnimationSection.tsx`** → Add `'use client'` (Framer Motion)

#### 2.4: Utility Components (LOW PRIORITY)
15. **`src/components/Footer.tsx`** → Check if needs `'use client'`
16. **`src/components/FloatingPellets.tsx`** → Add `'use client'` (animation)
17. **`src/components/SplittingPellet.tsx`** → Add `'use client'` (animation)
18. **`src/components/NavLink.tsx`** → Check if needs `'use client'`

**Checkpoint 2:** Run `npm run build` - should compile without useState errors

---

## 📋 PHASE 3: ADD SEO TAGS TO ALL PAGES (1 hour)

### 3.1: Root Layout SEO (DONE ✅)
File: `app/layout.tsx`
- ✅ Meta tags added
- ✅ Structured data (JSON-LD) added
- ✅ Open Graph tags added
- ✅ Twitter Card tags added

### 3.2: Home Page SEO
File: `app/page.tsx`
Add page-specific metadata:
```typescript
export const metadata = {
  title: 'Agro Power Pellet | Biomass Fuel & Supply Chain Solutions',
  description: 'India\'s trusted biomass supply chain partner...',
  keywords: 'biomass pellets Tamil Nadu, agro pellets India...',
}
```

### 3.3: Component-Level SEO
Add semantic HTML and proper heading structure:
- H1: Main page title (only one per page)
- H2: Section headings
- H3: Subsection headings
- Alt tags: All images
- Aria labels: Interactive elements

### 3.4: Additional SEO Files
1. **`public/sitemap.xml`** ✅ Already created
2. **`public/robots.txt`** ✅ Already updated
3. **`app/manifest.json`** - Create for PWA
4. **`app/favicon.ico`** - Verify exists

**Checkpoint 3:** Validate structured data at https://validator.schema.org

---

## 📋 PHASE 4: BUILD STATIC SITE (30 mins)

### 4.1: Clean Previous Builds
```bash
rm -rf .next out dist
```

### 4.2: Run Production Build
```bash
npm run build
```

Expected output:
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (3/3)
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    5.2 kB         120 kB
└ ○ /_not-found                          871 B          116 kB

○  (Static)  prerendered as static content
```

### 4.3: Verify Output
Check `out/` folder contains:
- ✅ `index.html` (with full content, not empty div)
- ✅ `_next/` folder (JavaScript bundles)
- ✅ `sitemap.xml`
- ✅ `robots.txt`
- ✅ `favicon.ico`
- ✅ All images in proper folders

### 4.4: Test Locally
```bash
npx serve out
```
Open http://localhost:3000 and verify:
- Page loads correctly
- All content visible
- Images display
- Links work
- Forms work

**Checkpoint 4:** View page source - should see full HTML content, not empty div

---

## 📋 PHASE 5: TEST SEO SCORE (30 mins)

### 5.1: Online SEO Testing Tools

#### Tool 1: Google PageSpeed Insights ⭐ PRIMARY
**URL:** https://pagespeed.web.dev/
**Test:** http://localhost:3000 (after deploying)

**Target Scores:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

**What to Check:**
- ✅ First Contentful Paint < 1.8s
- ✅ Largest Contentful Paint < 2.5s
- ✅ Cumulative Layout Shift < 0.1
- ✅ Time to Interactive < 3.8s

#### Tool 2: SEO Site Checkup
**URL:** https://seositecheckup.com/
**What to Check:**
- ✅ Meta tags present
- ✅ Heading tags proper
- ✅ Image alt tags
- ✅ Sitemap accessible
- ✅ Robots.txt valid
- ✅ Mobile-friendly
- ✅ Page speed

#### Tool 3: Schema Markup Validator
**URL:** https://validator.schema.org/
**Test:** Paste your structured data JSON-LD
**What to Check:**
- ✅ No errors
- ✅ Organization schema valid
- ✅ Contact info correct

#### Tool 4: Mobile-Friendly Test
**URL:** https://search.google.com/test/mobile-friendly
**What to Check:**
- ✅ Page is mobile-friendly
- ✅ Text readable without zooming
- ✅ Tap targets sized appropriately

#### Tool 5: Rich Results Test
**URL:** https://search.google.com/test/rich-results
**What to Check:**
- ✅ Organization rich result detected
- ✅ No errors or warnings

### 5.2: SEO Checklist

#### Technical SEO ✅
- [ ] Title tag present (50-60 characters)
- [ ] Meta description present (150-160 characters)
- [ ] Meta keywords present
- [ ] Canonical URL set
- [ ] Robots meta tag set
- [ ] Sitemap.xml accessible
- [ ] Robots.txt accessible
- [ ] Structured data (JSON-LD) present
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Favicon present
- [ ] SSL certificate (HTTPS)

#### On-Page SEO ✅
- [ ] H1 tag present (only one)
- [ ] H2-H6 tags properly structured
- [ ] Image alt tags present
- [ ] Internal links present
- [ ] External links open in new tab
- [ ] URL structure clean
- [ ] Content keyword-rich
- [ ] Content > 500 words
- [ ] Mobile responsive
- [ ] Fast loading speed

#### Content SEO ✅
- [ ] Focus keyword in title
- [ ] Focus keyword in H1
- [ ] Focus keyword in first paragraph
- [ ] Focus keyword in meta description
- [ ] LSI keywords present
- [ ] Content valuable and unique
- [ ] Call-to-action present
- [ ] Contact information visible

**Checkpoint 5:** All SEO scores > 90

---

## 📋 PHASE 6: OPTIMIZE BASED ON SCORES (1 hour)

### Common Issues & Fixes

#### Issue 1: Low Performance Score
**Causes:**
- Large images
- Too much JavaScript
- No lazy loading

**Fixes:**
```typescript
// Add lazy loading to images
<img loading="lazy" src="..." alt="..." />

// Optimize images (compress before upload)
// Use WebP format where possible
```

#### Issue 2: Missing Alt Tags
**Fix:** Add descriptive alt tags to all images
```typescript
<img src="product.jpg" alt="Biomass pellets for industrial use in Tamil Nadu" />
```

#### Issue 3: Heading Structure Issues
**Fix:** Ensure proper hierarchy
```html
<h1>Main Title</h1>
  <h2>Section 1</h2>
    <h3>Subsection 1.1</h3>
  <h2>Section 2</h2>
```

#### Issue 4: Slow Loading
**Fixes:**
- Compress images
- Minify CSS/JS (Next.js does this automatically)
- Enable caching headers
- Use CDN for assets

#### Issue 5: Mobile Issues
**Fixes:**
- Increase tap target sizes (min 48x48px)
- Ensure text is readable (min 16px)
- Test on real devices

**Checkpoint 6:** Re-test and achieve > 90 scores

---

## 📋 PHASE 7: DEPLOY TO HOSTINGER (30 mins)

### 7.1: Prepare Files
```bash
# Build is already done in Phase 4
# Files are in 'out/' folder
```

### 7.2: Upload to Hostinger

#### Method 1: FTP Upload (Recommended)
1. Open FileZilla or Hostinger File Manager
2. Connect to your hosting account
3. Navigate to `public_html/` folder
4. Upload entire `out/` folder contents
5. Ensure folder structure:
```
public_html/
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── sitemap.xml
├── robots.txt
├── favicon.ico
└── ... (other files)
```

#### Method 2: Hostinger File Manager
1. Login to Hostinger control panel
2. Go to File Manager
3. Navigate to `public_html/`
4. Upload `out/` folder as ZIP
5. Extract in `public_html/`

### 7.3: Configure Domain
1. Point domain to Hostinger
2. Set up SSL certificate (free with Hostinger)
3. Force HTTPS redirect

### 7.4: Test Live Site
Visit: https://agropowerpellet.com

**Verify:**
- ✅ Site loads correctly
- ✅ All pages accessible
- ✅ Images display
- ✅ Forms work
- ✅ HTTPS enabled
- ✅ Mobile responsive

**Checkpoint 7:** Live site working perfectly

---

## 📋 PHASE 8: POST-DEPLOYMENT SEO (1 hour)

### 8.1: Submit to Search Engines

#### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: https://agropowerpellet.com
3. Verify ownership (HTML file or DNS)
4. Submit sitemap: https://agropowerpellet.com/sitemap.xml
5. Request indexing for homepage

#### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add site
3. Verify ownership
4. Submit sitemap

### 8.2: Set Up Analytics

#### Google Analytics 4
1. Create GA4 property
2. Add tracking code to `app/layout.tsx`
3. Verify tracking works

#### Google Tag Manager (Optional)
1. Create GTM account
2. Add container code
3. Set up tags for events

### 8.3: Test SEO Scores on Live Site

Re-run all tools from Phase 5 with live URL:
- PageSpeed Insights
- SEO Site Checkup
- Mobile-Friendly Test
- Rich Results Test

**Target Final Scores:**
- ✅ Performance: > 90
- ✅ Accessibility: > 95
- ✅ Best Practices: > 95
- ✅ SEO: > 95

### 8.4: Monitor Rankings

#### Tools to Track Rankings:
1. **Google Search Console** (Free)
   - Track impressions, clicks, position
   - Monitor for "biomass pellets Tamil Nadu"

2. **Ubersuggest** (Free tier available)
   - Track keyword rankings
   - Monitor competitors

3. **SEMrush** (Paid, but has free trial)
   - Comprehensive SEO tracking
   - Backlink monitoring

**Checkpoint 8:** Site indexed and tracking set up

---

## 📊 SUCCESS METRICS & TIMELINE

### Week 1: Technical Setup
- ✅ Site deployed
- ✅ SEO scores > 90
- ✅ Indexed by Google
- ✅ Analytics tracking

### Week 2-4: Initial Rankings
- 🎯 Appear in search results
- 🎯 Position 50-100 for target keywords
- 🎯 10-50 impressions/day

### Month 2-3: Climbing Rankings
- 🎯 Position 20-50 for target keywords
- 🎯 100-500 impressions/day
- 🎯 10-50 clicks/day

### Month 4-6: Top Rankings
- 🎯 Position 5-15 for "biomass pellets Tamil Nadu"
- 🎯 Position 10-20 for "biomass fuel suppliers Tamil Nadu"
- 🎯 500-1000 impressions/day
- 🎯 50-100 clicks/day
- 🎯 5-10 leads/week

---

## 🔧 TROUBLESHOOTING GUIDE

### Problem 1: Build Fails
**Error:** `TypeError: l.useState is not a function`
**Solution:**
1. Check React version: `npm list react`
2. Reinstall: `npm install react@18.2.0 react-dom@18.2.0 --force`
3. Clear cache: `rm -rf .next node_modules package-lock.json`
4. Reinstall: `npm install`

### Problem 2: Empty HTML in Output
**Error:** `out/index.html` contains empty `<div id="root"></div>`
**Solution:**
1. Ensure all components have `'use client'` directive
2. Check `app/page.tsx` exports properly
3. Verify `next.config.js` has `output: 'export'`

### Problem 3: Images Not Loading
**Error:** 404 for images
**Solution:**
1. Check image paths are correct
2. Ensure images are in `public/` folder
3. Use `getImageSrc()` helper for imports
4. Verify `next.config.js` has `images: { unoptimized: true }`

### Problem 4: Low SEO Score
**Error:** SEO score < 90
**Solution:**
1. Add missing meta tags
2. Fix heading structure
3. Add alt tags to images
4. Improve page speed
5. Fix mobile responsiveness

### Problem 5: Site Not Indexed
**Error:** Not appearing in Google after 1 week
**Solution:**
1. Submit sitemap in Search Console
2. Request indexing manually
3. Check robots.txt allows crawling
4. Ensure no noindex tags
5. Build backlinks

---

## 📝 FINAL CHECKLIST

### Before Deployment
- [ ] All components converted to Next.js
- [ ] All client components marked with 'use client'
- [ ] Build completes successfully
- [ ] Output folder contains full HTML
- [ ] Local testing passed
- [ ] SEO scores > 90 locally

### After Deployment
- [ ] Site accessible via domain
- [ ] HTTPS enabled
- [ ] All pages load correctly
- [ ] Forms work
- [ ] Mobile responsive
- [ ] SEO scores > 90 on live site
- [ ] Sitemap submitted to Google
- [ ] Analytics tracking works

### Ongoing (Weekly)
- [ ] Monitor rankings in Search Console
- [ ] Check for crawl errors
- [ ] Review analytics data
- [ ] Update content regularly
- [ ] Build backlinks
- [ ] Monitor competitors

---

## 🎯 EXPECTED TIMELINE

| Phase | Task | Duration | Status |
|-------|------|----------|--------|
| 1 | Fix Next.js Foundation | 30 mins | ⏳ Pending |
| 2 | Convert All Components | 2 hours | ⏳ Pending |
| 3 | Add SEO Tags | 1 hour | ⏳ Pending |
| 4 | Build Static Site | 30 mins | ⏳ Pending |
| 5 | Test SEO Score | 30 mins | ⏳ Pending |
| 6 | Optimize | 1 hour | ⏳ Pending |
| 7 | Deploy to Hostinger | 30 mins | ⏳ Pending |
| 8 | Post-Deployment SEO | 1 hour | ⏳ Pending |
| **TOTAL** | | **6-7 hours** | |

---

## 🚀 LET'S START!

**Next Step:** Begin Phase 1 - Fix Next.js Foundation

Ready to proceed? Let me know and I'll start implementing!

---

**Document Version:** 1.0  
**Created:** May 4, 2026, 8:16 AM IST  
**Status:** Ready to implement  
**Estimated Completion:** Same day (6-7 hours)