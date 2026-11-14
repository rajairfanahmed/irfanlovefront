# Indexing and Social Sharing

## Public and private route policy

Maintain a route inventory that classifies each page as public and indexable, public but noindex, authenticated, or private. Ensure authentication gates and robots directives agree. `robots.txt` is not an access-control mechanism.

## Social metadata

Provide accurate Open Graph and platform-compatible preview data for public pages. Use absolute image URLs, appropriate aspect ratios, stable assets, concise summaries, and metadata that matches visible content. Verify preview behavior with the current platform tools where practical.

## Localization

For multilingual products, define canonical and alternate-language behavior based on the actual route and content model. Do not emit alternate links to incomplete or nonexistent translations.

## Sharing behavior

Test copy-link, share actions, title, image, and description on representative public routes. Avoid exposing user-specific data through metadata or cache behavior.

## Release validation

Check redirects, production origin, sitemap, robots rules, canonical tags, and preview images in the deployed environment. Development localhost output is not sufficient verification.
