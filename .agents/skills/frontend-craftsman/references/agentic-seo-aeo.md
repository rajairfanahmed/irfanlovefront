# Agentic SEO & AEO (AI Engine Optimization) 5/5 Score Reference

This reference enforces complete traditional Technical SEO plus modern Agentic SEO (AEO/GEO) to ensure websites achieve a perfect 5/5 score across search engines (Google, Bing) and AI search agents (Perplexity, ChatGPT Search, Claude, Gemini).

---

## 🔍 The 5 Pillars of the 5/5 Full Score

1. **Pillar 1: Per-Route Semantic Metadata API**
   - Title template: `<Page Title> | <Brand Name>` (between 50-60 characters).
   - Meta description: Compelling value statement (between 140-160 characters).
   - Canonical URL tag: Prevents duplicate content indexing.
   - OpenGraph and Twitter card tags with dynamically resolved absolute image URLs (`1200x630px`).

2. **Pillar 2: Linked Schema.org JSON-LD Knowledge Graph**
   - Embedded `<script type="application/ld+json">` linking:
     - `WebSite` entity with `SearchAction` target.
     - `Organization` or `Person` entity with logo, social links (`sameAs`), and contact point.
     - Domain-specific entity (`SoftwareApplication`, `Article`, `Product`, `LocalBusiness`, or `WebPage`).
     - `BreadcrumbList` for route hierarchy.

3. **Pillar 3: AI Engine Optimization (`llms.txt` & `llms-full.txt`)**
   - Place `public/llms.txt` at domain root: A concise Markdown index of the website for AI crawlers, detailing site purpose, key pages, and APIs.
   - Place `public/llms-full.txt` at domain root: A comprehensive, unabbreviated Markdown dump of key documentation and value propositions for deep AI context retrieval.

4. **Pillar 4: Semantic Landmarks & Accessibility Anchor**
   - Use proper HTML5 semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
   - Single `<h1>` per page, followed by logical `<h2>`, `<h3>` heading hierarchy.
   - All `<img>` tags must feature descriptive `alt` text.

5. **Pillar 5: Crawlability & Machine Discovery Files**
   - `sitemap.xml` (or `app/sitemap.ts` in Next.js): Dynamic XML sitemap listing all public routes with `lastModified` and `priority`.
   - `robots.txt` (or `app/robots.ts`): Clear rules declaring sitemap location and allowing AI user agents (`GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`).
   - `manifest.webmanifest` (or `app/manifest.ts`): PWA app manifest with icons and theme colors.

---

## 📝 Example `public/llms.txt` Template

```markdown
# [Project Name]

> [Short 1-2 sentence description of the product and primary value proposition.]

## Core Capabilities
- [Capability 1]: [Brief description]
- [Capability 2]: [Brief description]
- [Capability 3]: [Brief description]

## Key Documentation & Links
- [Getting Started](https://example.com/docs): Quickstart and installation guide.
- [Features](https://example.com/features): Detailed feature breakdown.
- [Pricing](https://example.com/pricing): Tier options and subscription plans.
- [API Reference](https://example.com/api): API endpoints and developer documentation.
- [Full Text Documentation](https://example.com/llms-full.txt): Complete LLM-readable reference.
```
