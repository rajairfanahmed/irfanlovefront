# On-Page SEO and Metadata

Purpose: the per-page content and metadata search engines and link previews actually read. This assumes the technical foundation in `technical-seo.md` is already in place, a perfectly written title tag on a page that can't be crawled accomplishes nothing.

## Title tags

Write a unique, accurate title for every page that describes what the page actually offers, front-loaded with the most important terms a user would search for, without stuffing in every plausible keyword variation. Keep it at a length that displays fully in search results without being cut off, and never duplicate the same title across multiple pages, a duplicated title is one of the more common and easily avoidable technical SEO mistakes on a multi-page site.

## Meta descriptions

Write a unique, accurate summary of each page's content that would make a human searching for it want to click, this doesn't directly affect ranking in most cases but directly affects whether someone chooses this result over a competing one. Avoid a generic, templated description repeated with only the page title swapped out, that reads as low-effort to both the searcher and anything evaluating content quality.

## Heading structure for SEO

The same correct, logically nested heading hierarchy that Accessibility requires also helps search engines understand the page's content structure and topical relevance. Don't introduce a separate, SEO-driven heading structure that conflicts with the accessible one, they should be the same structure, serving both purposes at once, headings chosen for genuine content structure rather than keyword placement.

## URL slugs

Keep the URL slug short, readable, and descriptive of the specific page's content, derived from the actual title or topic rather than an arbitrary identifier. Avoid changing an established slug casually, see `technical-seo.md` on the cost of URL changes.

## Image alt text

Write alt text that accurately describes an image's content and function, this serves accessibility first, a screen reader user needs the same accurate description a search engine benefits from indexing. Don't stuff an image's alt text with unrelated keywords it doesn't actually describe, that both misleads assistive technology and reads as manipulative to anything evaluating content quality. A genuinely decorative image with no informational content gets empty alt text, not a forced description, per the same accessibility principle.

## Internal link anchor text

Use descriptive anchor text for internal links that indicates what the linked page is actually about, rather than generic text like "click here" repeated throughout the site, this serves both the accessibility concern already covered in `ux-interaction-design` and the SEO value of signaling what the linked page's content relates to.

## Content structure and topical relevance

Write content that thoroughly and genuinely addresses the topic a page is about, in language a real reader would use, rather than a thin page engineered primarily to contain a target keyword a certain number of times. Modern search ranking and AI-based evaluation both increasingly favor content that's actually useful and complete over content that's technically optimized but thin, write for the reader first.

## Social metadata

Provide Open Graph and Twitter Card metadata (title, description, image, and type) so the page displays correctly and attractively when shared on social platforms or messaging apps, rather than falling back to whatever generic preview the platform constructs without it. Keep this metadata accurate and consistent with the page's actual title and description rather than a separate, divergent version.

## Favicon and basic brand signals

Provide a favicon and the basic site metadata (site name, theme color where relevant) that search results and browser tabs use to represent the site, small details, but their absence reads as an incomplete or unpolished site in ways that can affect trust signals.

## Language and locale metadata

Declare the page's language correctly (an HTML lang attribute at minimum), this affects both accessibility (screen readers use it to select the correct pronunciation) and search engines' ability to serve the page to the right audience, coordinate with `technical-seo.md`'s hreflang guidance for a multilingual site.

## Content freshness

Where genuinely relevant (news, documentation, time-sensitive information), keep content updated and, where the platform supports it, reflect an accurate last-updated signal. Don't artificially update a timestamp without actually updating the content, that's a manipulative signal that undermines trust once noticed, and increasingly, automated evaluation can detect the mismatch between a freshness claim and actual content changes.

## Breadcrumbs

Where a site has a genuine hierarchical structure, breadcrumb navigation helps both users and search engines understand a page's position within that structure, and pairs with the structured data markup covered in `structured-data-and-indexing.md` to potentially display directly in search results. Don't add breadcrumbs to a site with a genuinely flat structure where they wouldn't reflect anything real.

## Avoiding duplicate or templated metadata at scale

For a site generating many similar pages (product listings, a large content library), build metadata generation from each page's actual, specific data rather than a single template string, a pattern that silently produces thousands of near-identical titles or descriptions across a large site is a common, easy-to-miss failure that undermines on-page SEO at scale even when each individual page's template looks reasonable in isolation.