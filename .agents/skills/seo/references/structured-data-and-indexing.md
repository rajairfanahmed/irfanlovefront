# Structured Data and Indexing

Purpose: schema markup that helps search engines understand and potentially enhance how a page is represented in results, and the indexing controls that keep search engines from indexing the wrong thing. Structured data earns its place by accurately describing content that's genuinely there, never applied as a default template regardless of what the page actually contains.

## Choosing a schema type from the content, not the reverse

Pick a structured data type (Article, Product, Organization, FAQPage, BreadcrumbList, LocalBusiness, Event, Recipe, and the many others schema.org defines) because the page genuinely contains that kind of content, not because a type is commonly used or because adding more structured data seems generally beneficial. A page that isn't actually an FAQ shouldn't carry FAQPage markup just because the format is eligible for an enhanced search result, that's a mismatch between markup and content that search engines actively check for and penalize when caught.

## JSON-LD as the preferred format

Implement structured data as JSON-LD (a script tag containing the schema as JSON) rather than embedding it inline in the HTML's own attributes, this is the generally preferred modern format, easier to generate programmatically and to keep separate from the page's visual markup, and easier to validate as a self-contained block.

## Matching structured data to visible content

Every claim made in structured data needs to actually be visible, or at minimum genuinely true and verifiable, on the rendered page, a price, a rating, an availability status in structured data that doesn't match what a user actually sees on the page is a direct, checkable violation that erodes trust in the markup and can result in that structured data being ignored or the page being penalized. Treat structured data as a precise, machine-readable restatement of what's already on the page, never as a way to add claims that aren't actually there.

## Validating structured data

Check implemented structured data against the actual schema.org specification for the type in use and against a validation tool, a structured data block with a typo in a property name, a wrong data type, or a missing required field often fails silently, it won't break page rendering, it'll simply be ignored or misread by whatever's trying to parse it. Validate after any change to the page's content or layout that could have affected the data the structured data block was generated from.

## Rich result eligibility

Many structured data types are eligible for an enhanced search result presentation (star ratings, a FAQ dropdown, a recipe card) but eligibility has additional requirements beyond just valid markup, specific fields, content quality thresholds, or policy compliance that vary by type and can change over time. Implementing valid structured data is a necessary but not sufficient condition for an enhanced result, never promise the enhanced presentation itself as a guaranteed outcome.

## Common structured data types and when they fit

Organization or LocalBusiness for a site's own identity and contact information, genuinely useful on most sites. Article for genuine editorial or blog content. Product for an actual product detail page, paired with accurate price and availability. BreadcrumbList when the site has a real hierarchical structure (see `on-page-seo-and-metadata.md`). FAQPage only for content that's genuinely structured as question-and-answer. Event for an actual scheduled event with a real date and location. Use this as a short, illustrative set, not an exhaustive list, match the actual type to the actual content in every case.

## Indexing control beyond robots directives

Beyond the `robots.txt` and meta robots guidance in `technical-seo.md`, be deliberate about search console tools that let an indexed URL be requested for removal or reprocessing when content has changed significantly, these are direct tools for managing the relationship between a site and its indexed state, not something to rely on reflexively instead of getting the underlying signals right the first time.

## Faceted and parameterized URL indexing

A filterable listing page that generates many URL parameter combinations (sorting, filtering, pagination) can produce a large number of thin, near-duplicate pages if each is allowed to be indexed independently. Decide deliberately which parameter combinations represent genuinely distinct, valuable content worth indexing versus which are better consolidated to a canonical, unparameterized version or excluded from indexing entirely.

## Monitoring indexing status

Where available, use search console tools to check which pages are actually indexed versus submitted, and investigate discrepancies, a page that's crawlable, correctly marked up, and still not indexed usually indicates either a quality signal issue or a conflicting directive somewhere, not something to assume will resolve on its own. State plainly when indexing status was actually checked through such a tool versus assumed from the implementation alone.

## Schema's role in AI search overlap

The same accurate, well-structured schema markup that helps traditional search also tends to help AI-based search and citation tools extract and verify facts about a page's content, see `ai-search-and-agent-discovery.md` for the specific considerations there, this file's guidance on accuracy and matching visible content applies with at least as much force in that context, since an AI tool citing inaccurate structured data as fact is a more direct and visible failure than a traditional search snippet being slightly off.