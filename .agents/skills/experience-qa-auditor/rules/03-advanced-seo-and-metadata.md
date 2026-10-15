# 03 · Advanced Technical SEO & Structured Metadata
**Domain:** Experience QA & Auditing · Stage 4 Production Hardening  
**Philosophy:** Maximum Discoverability & Social Presence. An elite frontend presents rich preview cards on social channels and rich snippets in search engine result pages.

---

## 1. Next.js 15 Comprehensive Metadata Configuration

Configure static and dynamic metadata in `frontend/src/app/layout.tsx`:

```tsx
// frontend/src/app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Nexus · Precision Frontend Engineering & Digital Systems',
    template: '%s | Nexus Engineering',
  },
  description:
    'Bespoke digital architecture, high-performance web systems, and fluid interaction design engineered with Next.js 15, TypeScript, and modern motion choreography.',
  keywords: [
    'Frontend Engineering',
    'Next.js 15',
    'TypeScript',
    'Design Systems',
    'Creative Development',
    'GSAP Animation',
  ],
  authors: [{ name: 'Engineering Team', url: 'https://example.com' }],
  creator: 'Nexus Studio',
  publisher: 'Nexus Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nexus · Precision Frontend Engineering',
    description:
      'Bespoke digital architecture, high-performance web systems, and fluid interaction design.',
    url: 'https://example.com',
    siteName: 'Nexus Engineering',
    images: [
      {
        url: '/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Nexus Engineering Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus · Precision Frontend Engineering',
    description:
      'Bespoke digital architecture, high-performance web systems, and fluid interaction design.',
    images: ['/og-preview.png'],
    creator: '@nexus_eng',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

---

## 2. Structured Data (JSON-LD Schema)

Inject valid JSON-LD schemas into `frontend/src/app/page.tsx` for rich Google search snippets:

```tsx
// Inside frontend/src/app/page.tsx
export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nexus Engineering',
    url: 'https://example.com',
    description:
      'Bespoke digital architecture, high-performance web systems, and fluid interaction design.',
    author: {
      '@type': 'Person',
      name: 'Lead Engineer',
      jobTitle: 'Principal Frontend Architect',
      url: 'https://example.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page Content */}
    </>
  );
}
```

---

## 3. SEO Quality Checklist:
- [ ] Unique, descriptive `<title>` (under 60 characters).
- [ ] Compelling `<meta name="description">` (between 140 and 160 characters).
- [ ] Valid OpenGraph preview image (1200x630px) in `frontend/public/og-preview.png`.
- [ ] Valid JSON-LD schema validated via schema.org.
- [ ] Single `<h1>` tag with proper semantic document outline (`h2` for sections, `h3` for cards).
