# Frontend Deployment & CI/CD Optimization Reference

This reference covers production build optimization, asset compression, and edge caching.

---

## 🚀 1. Production Build Optimization

- **Bundle Size Budget:** Keep main JavaScript bundle under `150kb` gzipped. Use dynamic imports (`next/dynamic` or `React.lazy`) for heavy libraries (charting, 3D canvases, syntax highlighters).
- **Image Optimization:** Use next/image or native WebP/AVIF formats with explicit `width` and `height` to prevent layout shifts.
- **Tree-Shaking:** Import icons individually (e.g. `import { Check } from 'lucide-react'`) rather than importing the entire library.

---

## 🌐 2. Hosting & Edge Caching (Vercel & Cloudflare)

- **Static Asset Caching:** Configure immutable cache headers for hashed JS/CSS assets:
  ```http
  Cache-Control: public, max-age=31536000, immutable
  ```
- **Incremental Static Regeneration (ISR):** For content/marketing pages, use ISR (`revalidate: 3600`) to serve lightning-fast static HTML from edge CDNs while updating in the background.
