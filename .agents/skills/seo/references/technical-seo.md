# Technical SEO

Purpose: the structural prerequisites everything else in this skill depends on. A page with perfect metadata and structured data still won't be found if it can't actually be crawled and indexed reliably, this file covers that foundation.

## Rendering strategy and crawlability

A crawler needs to actually see a page's content, which rendering strategy (server-rendered, statically generated, or client-rendered with JavaScript building the page after load) is in use has direct consequences here. Server-rendered and statically generated pages deliver complete content on the initial request, which is the most reliable path to correct indexing. A client-rendered page that builds its content via JavaScript after load can still be indexed by major search engines, but less reliably and often with a delay, and is far less reliable for AI crawlers and other automated content consumers, many of which don't execute JavaScript at all. This is a genuine technical SEO requirement, not a style preference, raise it with Frontend Architecture as a real constraint rather than assuming a client-rendered approach is automatically fine.

## Canonical URLs

When the same content is reachable at more than one URL (with and without a trailing slash, with different query parameters, via multiple navigation paths), specify a canonical URL so search engines consolidate signals to one preferred version rather than treating duplicates as separate, competing pages. Verify canonical tags are self-referential on the actual canonical page and correctly point to it from every duplicate, a canonical tag that points to the wrong URL, or that conflicts with other indexing signals on the page, actively causes problems rather than solving them.

## URL structure

Keep URLs readable, stable, and descriptive of the content they point to, a clear path structure reflecting the site's actual information architecture rather than an opaque identifier. Once a URL is published and indexed, changing it has a real cost, old links and indexed results point to the old URL, so get the structure right early and treat a later change as a migration requiring redirects, not a casual rename.

## Redirects

Use a permanent redirect for content that's moved permanently, so search engines transfer indexing signals to the new location, and a temporary redirect only for content that's genuinely temporarily at a different location. Avoid redirect chains (a URL redirecting to another redirect, rather than directly to the final destination), each hop adds latency and dilutes the signal passed through, and avoid redirect loops entirely, which block indexing outright.

## Robots directives

Use `robots.txt` to prevent crawling of content that genuinely shouldn't be crawled (admin areas, duplicate parameter variations, non-public resources), not as a default applied broadly out of caution. A page excluded from crawling entirely can't be evaluated for indexing at all, which is a stronger action than a meta robots noindex tag that still allows crawling. Use a meta robots noindex, nofollow, or equivalent directive deliberately and specifically, and verify directives across robots.txt, meta tags, and any HTTP header equivalents don't conflict with each other, a page blocked in robots.txt but also carrying a noindex meta tag sends a confusing, self-defeating signal.

## Sitemaps

Provide an XML sitemap listing the pages intended to be indexed, kept current as pages are added or removed, and submitted to the relevant search console tools where available. A sitemap doesn't force indexing, but it helps a crawler discover and prioritize content efficiently, especially for a large site or one with content that isn't otherwise well linked internally.

## Internal linking and crawl efficiency

A page that's genuinely important should be reachable through a reasonable number of internal links from the site's main navigation or other well-linked pages, a page buried many clicks deep with no other inbound links is harder for a crawler to discover and signals lower importance. Internal linking also distributes topical relevance and ranking signal between related pages, link related content to each other deliberately, not as an afterthought.

## Duplicate content

Distinct URLs serving substantially the same content (a common result of faceted navigation, printer-friendly versions, or tracking parameters) dilute ranking signal across copies instead of consolidating it on one authoritative version. Resolve this with canonical tags, parameter handling, or consolidating the content outright, depending on which fits the actual cause.

## Mobile-first indexing

Search engines primarily evaluate the mobile version of a page for indexing and ranking purposes, confirm the mobile rendering includes the same content, structured data, and metadata as the desktop version, a mobile version that strips content or metadata to simplify the page actively harms indexing of that content, this is a case where close coordination with Responsive Design's content-priority decisions actually matters for SEO, not just usability.

## HTTPS and basic security signals

Serve the entire site over HTTPS, this is both a baseline ranking factor and a basic trust signal, mixed content (HTTP resources loaded on an HTTPS page) can cause both security warnings and inconsistent treatment by search engines.

## International and multilingual sites

When a site serves multiple languages or regions, use the appropriate signals (hreflang annotations or the equivalent for the project's setup) so search engines serve the correct language or regional version to the correct audience rather than treating translated versions as duplicate content competing with each other.

## Pagination and faceted navigation

For content split across multiple pages (search results, a long article, a paginated list), decide deliberately how indexing should treat the sequence, consolidating to a main page, allowing each page to be indexed independently, or a hybrid, based on whether each individual page has genuinely distinct, valuable content on its own. Faceted navigation (filterable listing pages generating many URL parameter combinations) needs explicit handling to avoid generating a large number of thin, near-duplicate indexable pages.

## Core Web Vitals as a ranking factor

Page experience metrics are a real, if not dominant, ranking factor, the specific metrics and targets belong to Performance Optimization, this file's role is simply to flag that a performance problem is also a technical SEO problem, not a separate, unrelated concern.

## Site migrations

When a site changes domains, restructures its URLs, or switches rendering approach, treat it as a deliberate migration: map every old URL to its new equivalent with a redirect, update the sitemap, and expect a temporary period where search engines reprocess the change, don't treat a large-scale URL change as a routine deploy with no SEO-specific planning.