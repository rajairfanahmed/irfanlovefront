# Technical SEO, Metadata, and Agentic Discovery Audit

Search engines, social preview cards, and autonomous AI agents require structured metadata to index, summarize, and navigate web applications effectively.

---

## 1. Public Pages Metadata Checklist

Inspect `frontend/src/app/layout.tsx` and individual route `page.tsx` metadata exports against these standards:

| Metadata Field | Target Criteria | Potential Failure Mode |
|---|---|---|
| **Page Title** | 50 to 60 characters, unique per route, formatted: `Title | Brand` | Generic titles like "Home" or "Next.js App", duplicate titles across routes |
| **Meta Description** | 140 to 160 characters, compelling summary of value proposition | Empty description, truncated text (>160 chars), duplicate copy across routes |
| **Canonical URL** | Absolute canonical tag (`alternates: { canonical: '/' }`) | Missing canonical tag causing duplicate content penalties in search indexes |
| **OpenGraph Cards** | Valid `og:title`, `og:description`, `og:url`, and `og:image` | Missing preview card image, broken 404 image link, wrong aspect ratio |
| **OG Image Spec** | Exactly 1200x630px aspect ratio in PNG or WebP format | Blurry low-res image, stretched square graphic, unoptimized 10MB photo |
| **Twitter Cards** | `twitter:card` set to `summary_large_image`, with matching titles | Incomplete tags resulting in tiny square thumbnail on social platforms |
| **Robots Directives** | `index: true, follow: true` on public pages; `noindex` on private portals | Accidentally indexing staging routes or blocking public flagship pages |

---

## 2. Structured Data (JSON-LD) Validation

Search engines utilize Schema.org structured data to generate rich snippets in search results:
1. **Schema Selection:**
   - Commercial Platforms: `SoftwareApplication` or `Organization`.
   - Portfolios and Personal Sites: `Person` and `WebSite`.
   - Documentation and Articles: `TechArticle` or `BlogPosting`.
2. **Schema Syntax Validation:**
   - Validate JSON-LD script tags in the page head. Ensure valid JSON without dangling commas or syntax errors.
   - Verify required properties: `@context: "https://schema.org"`, `@type`, `name`, `url`, and `description`.
3. **Internal Link Semantics:**
   - All internal links must use descriptive anchor text (e.g. `<Link href="/case-studies">Explore Enterprise Case Studies</Link>`).
   - Banned anchor patterns: "click here", "read more", "learn more", or raw URL strings.

---

## 3. Autonomous AI Engine Optimization (AIO) and Agent Discovery

Modern web systems must provide machine-readable documentation for AI crawlers (Perplexity, ChatGPT Search, Claude, Gemini, and WebMCP):

### A. Compliant `public/llms.txt` and `public/llms-full.txt`
Verify `public/llms.txt` exists and follows the standard markdown format:
- Must begin with a single H1: `# [Project Name]`.
- Followed by a concise blockquote summary of the system architecture.
- Followed by an index of markdown links with descriptions pointing to canonical sections (`/docs`, `/api`, `/case-studies`).
- Provide `public/llms-full.txt` containing in-depth markdown documentation for deep context ingestion.

### B. Agent Resource Discovery (`public/ai-catalog.json`)
Verify `public/ai-catalog.json` complies with the Agent Resource Discovery specification:
- Lists project name, version, and capabilities (`web-application`, `design-system`, `api`).
- Explicitly points to `llms-txt`, `llms-full-txt`, and `sitemap` resources.

### C. WebMCP Tool Annotations
On forms and data search interfaces, verify optional WebMCP annotations for autonomous agents:
- Form elements: `data-webmcp-tool="contact_inquiry" data-webmcp-description="..."`.
- Input fields: `data-webmcp-param="user_email"`.
