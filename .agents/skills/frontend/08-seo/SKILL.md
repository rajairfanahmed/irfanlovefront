---
name: seo
description: "Step 8 of 10 (Enhancement Phase). Adds metadata, structured data, semantic HTML improvements, sitemaps, robots.txt, Open Graph tags, and AI search discoverability to the existing implementation from Steps 1-7. Use whenever the user wants SEO added, meta tags configured, structured data implemented, or says things like \"add SEO\", \"set up meta tags\", \"add schema markup\", \"make it crawlable\", or \"implement the seo spec\". Runs AFTER animations-motion-design (Step 7) and BEFORE accessibility (Step 9)."
---

# SEO (Step 8 of 10 - Enhancement Phase)

**You are Step 8. You run AFTER animations-motion-design (Step 7) and BEFORE accessibility (Step 9).** Steps 1-7 built a functionally complete, responsive, animated application. Your job is to add everything needed for search engine and AI search discoverability.

You own technical SEO, on-page metadata, structured data, and discoverability by both traditional search engines and AI search tools. You state what's required and verifiable; you never promise a ranking or result.

## Before doing anything: read your spec

1. **Read `docs/seo.md`** - this is your implementation spec. It defines the metadata strategy, structured data requirements, semantic HTML improvements, and AI search discoverability approach. Follow it.
2. **Read `docs/DESIGN_BRIEF.md`** for overall project context.
3. **Inspect the existing codebase.** Steps 1-7 built everything. Add SEO to what exists without breaking functionality, responsive behavior, or animations.

## What you build

Work through these in order:

1. **Semantic HTML audit.** Review the existing markup and improve semantic structure: proper heading hierarchy (h1-h6), landmark elements (header, main, nav, footer, section, article), and meaningful element choices. Read `references/technical-seo.md`.
2. **Page metadata.** Add title tags, meta descriptions, canonical URLs, and viewport meta to every page. Read `references/on-page-seo-and-metadata.md`.
3. **Open Graph and social metadata.** Add og:title, og:description, og:image, og:url, and Twitter card tags for every page that should be shareable.
4. **Structured data.** Add Schema.org JSON-LD markup as specified (Organization, WebSite, Product, Article, FAQ, BreadcrumbList, etc.). Read `references/structured-data-and-indexing.md`.
5. **Sitemap and robots.txt.** Generate or configure a sitemap.xml and robots.txt appropriate to the project's pages and crawl requirements.
6. **AI search discoverability.** If the spec calls for it, add `llms.txt` and/or `llms-full.txt` for AI search agent discovery. Read `references/ai-search-and-agent-discovery.md`.

## What you hand off

After you finish:
- Every page has proper title, meta description, and canonical URL
- Semantic HTML is correct (heading hierarchy, landmarks)
- Structured data validates without errors
- Open Graph tags are set for shareable pages
- Sitemap and robots.txt exist

## Working with other skills

- Structural Layout (Step 3) defined the page structure you add semantic HTML to
- UI Components (Step 4) built the elements you add aria and semantic attributes to
- Accessibility (Step 9) will further improve semantic HTML and ARIA for assistive tech
- Performance (Step 10) will verify that SEO additions don't impact Core Web Vitals

## Review before finishing

Verify: validate structured data with a schema validator, check heading hierarchy has no skipped levels, every page has unique title and meta description, canonical URLs are correct, and sitemap includes all public pages.

## Boundaries

Don't rebuild components (Step 4). Don't change user flows (Step 5). Don't change responsive behavior (Step 6). Don't change animations (Step 7). You add SEO metadata and structured data to the existing implementation.
