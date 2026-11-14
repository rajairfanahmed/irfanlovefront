# Technical SEO

## Crawlable rendering

Important public content must be present in a form that search crawlers can access reliably. Choose server rendering, static generation, or another supported rendering strategy based on content freshness, personalization, framework capability, and hosting. Follow the installed framework version's official guidance.

## Route and origin integrity

Define the canonical production origin, redirect policy, locale rules, trailing-slash behavior, and canonical URL generation. Avoid duplicate indexable URLs for the same content.

## Robots and sitemap

Generate sitemap entries from real public routes and canonical URLs. Exclude authenticated, private, preview, staging, and noindex routes. Ensure `robots.txt` does not accidentally block assets or pages required for rendering.

## Technical checks

Verify HTTP status codes, redirects, canonical tags, indexability, server-rendered content, mobile viewport metadata, internal links, and sitemap accessibility. Check that errors and unauthorized routes do not return misleading success pages.

## Framework specifics

Use the current official documentation for the installed framework version. Do not copy configuration from a different major version without confirming compatibility.
