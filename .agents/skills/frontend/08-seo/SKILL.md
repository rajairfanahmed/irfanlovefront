---
name: seo
description: Improves public-page crawlability, rendering, metadata, canonical behavior, structured data, sitemaps, robots rules, and social sharing previews using verified project information.
---

# Search Engine Optimization

## Objective

Make intended public content discoverable and accurately represented in search and sharing surfaces without exposing private or misleading content.

## Before implementation

Read `seo.md`, `DESIGN_BRIEF.md`, `frontend-architecture.md`, public route inventory, content models, deployment hostname, and current rendering framework documentation.

Also inspect repository instructions, the actual implementation, installed library versions, and relevant tests. Do not rely on a specification when the code or framework version shows that it is outdated. Record material gaps rather than silently inventing missing requirements.

## Reference library

Read the references that apply to the task before making domain decisions. The complete set is listed here so the specialist can load the right guidance without guessing file names.

- [`technical-seo.md`](references/technical-seo.md)
- [`on-page-seo-and-metadata.md`](references/on-page-seo-and-metadata.md)
- [`structured-data-and-indexing.md`](references/structured-data-and-indexing.md)
- [`indexing-social-sharing.md`](references/indexing-social-sharing.md)

## Work sequence

1. Classify each route as indexable, noindex, or intentionally unavailable to crawlers. Keep account, private, internal, staging, and sensitive pages out of public indexes.
2. Confirm the production origin, route patterns, locale behavior, trailing-slash rules, canonical URL policy, and redirect behavior.
3. Implement unique, accurate titles and descriptions for public routes. Avoid repeated boilerplate and unsupported product claims.
4. Configure Open Graph and equivalent social metadata with correct titles, descriptions, image dimensions, alt text where supported, and absolute URLs.
5. Implement canonical links, robots directives, sitemap generation, and robots.txt according to the real route inventory and deployment environment.
6. Add structured data only when page content satisfies the relevant schema. Use accurate business identity, price, availability, author, dates, and ratings only when verified.
7. Choose an appropriate server-rendered or static rendering strategy for important public content. Follow the installed framework version documentation.
8. Check heading hierarchy, descriptive links, image alternatives, internal linking, locale metadata, and pagination or faceted navigation behavior where relevant.
9. Validate rendered HTML, metadata, robots behavior, sitemap URLs, structured data, canonical targets, and social previews.

## Required outputs

Correct public/private indexation rules, page metadata, canonical and sitemap configuration, accurate structured data where relevant, and verification notes.

## Ownership boundaries

Do not expose private routes or user data, add hidden keyword content, fabricate review data or business facts, or promise search rankings. SEO does not own general page layout.

## Review before handoff

- Every public route has accurate metadata, private routes are excluded, canonicals resolve, sitemap entries are valid, structured data matches visible content, and crawler output contains the intended content.
- Review the diff for unrelated changes, unused code, debug output, or accidental dependency additions.
- Run the relevant available checks and report their actual outcome.
- Record open issues with impact and owner.

## Handoff

Identify the files changed, decisions made, routes or components affected, tests run, and any dependency on another specialist. Do not claim completion for work that was not verified.
