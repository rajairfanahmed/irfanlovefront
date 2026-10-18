# Technical SEO, Metadata Conventions & Rendering Strategies

**Scope:** Search Engine Architecture, Semantic HTML5, Metadata Configuration & Indexing  
**Owner:** `frontend-architect`  
**Load Condition:** Loaded during Step 2 of Stage 1 to establish metadata and rendering standards  

---

## 1. Purpose & Problem Solved
Search engines and automated agents penalize web applications with missing titles, non-semantic DOM trees, or client-rendered pages that fail to index. This reference establishes technical SEO hygiene, Next.js 15 metadata architecture, and semantic HTML conventions from line 1 of code.

---

## 2. When to Load This Reference
- Loaded when setting up root `layout.tsx` metadata and viewport exports.
- Loaded when establishing canonical routing skeletons and sitemaps.

---

## 3. Inputs & Prerequisites
- Product name, description, and canonical domain from `frontend/DESIGN_ENGINEERING_BRIEF.md`.
- Canonical routes from `references/architecture-and-routing.md`.

---

## 4. Next.js 15 Metadata & Viewport Architecture

In Next.js 15, viewport configuration is decoupled from the `Metadata` object:

```typescript
// frontend/src/app/layout.tsx
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08090a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: {
    default: "BrandName | Clear Concise Tagline",
    template: "%s | BrandName",
  },
  description: "Accurate, high-converting product description under 160 characters.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BrandName",
  },
  twitter: {
    card: "summary_large_image",
  },
};
```

---

## 5. Semantic HTML5 Architecture

Every route layout must adhere to strict semantic HTML conventions:
1. **Root Landmark:** The application root must contain exactly one `<header>`, one `<main id="main-content">`, and one `<footer>`.
2. **Heading Discipline:** Exactly one `<h1>` per page. Sub-sections use logical descending hierarchy (`<h2>`, `<h3>`).
3. **Navigation Landmarking:** Navigation links reside inside `<nav aria-label="Main Navigation">`.
4. **Accessible Skip Link:** Place a hidden skip link as the very first element inside `<body>`:
   ```tsx
   <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black">
     Skip to main content
   </a>
   ```

---

## 6. Search Indexing: `robots.ts` & `sitemap.ts`

Scaffold automated indexing endpoints inside `frontend/src/app/`:

### 1. `frontend/src/app/robots.ts`
```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

### 2. `frontend/src/app/sitemap.ts`
```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const routes = ["", "/about", "/features", "/pricing", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
```

---

## 7. Output Artifact
- Configures `metadata` and `viewport` in `frontend/src/app/layout.tsx`.
- Creates `frontend/src/app/robots.ts` and `frontend/src/app/sitemap.ts`.

---

## 8. Validation Criteria
- Valid metadata base URL configured.
- Single `<h1>` per route skeleton.
- Valid `sitemap.xml` and `robots.txt` endpoints generated.
