# Realistic Content, Data, and Edge-Case Design

## Purpose
Ensure interfaces remain understandable and visually coherent when exposed to realistic content, varied datasets, incomplete information, slow systems, permissions, and failures.

---

## Content Variability
Consider where relevant: very short/long titles, long names, multiple-line descriptions, missing optional fields, empty descriptions, unusual punctuation, different capitalization, user-generated text, long URLs/identifiers, code snippets, multiple languages, translation expansion, RTL text, unavailable images, different aspect ratios, captions and alt text, long error messages, dense metadata.

## Data Volume and Distribution
Consider: no records, one record, small collection, typical volume, large datasets, very large datasets, duplicates, missing values, outliers, unexpected ranges, stale records, partially loaded records, unavailable records, new records arriving during use, concurrent updates, long-running operations.

## Empty States
Distinguish: no data exists yet, no results match filters, search returned nothing, access restricted, data not available yet, data failed to load, collection intentionally cleared. Each needs different messages and actions.

## Loading and Latency States
Consider: initial page loading, component loading, pagination loading, search-as-you-type, upload/download progress, background processing, long-running jobs, delayed integrations, partial content, cancellation. Use appropriate feedback — skeletons, spinners, progress indicators. No fabricated percentages.

## Error and Recovery States
Consider: invalid input, missing required info, network failure, server error, timeout, permission denial, expired session, conflicting changes, upload failure, payment failure, integration failure, rate limiting, unsupported file type, insufficient storage, deleted resources. Errors should explain what happened, identify next steps, preserve work, and avoid misleading statements.

## Permission and Access Variability
Consider: unauthenticated users, authenticated with no access, read-only, partial permissions, expired access, changed permissions during session, organization restrictions, role-specific content, disabled actions.

## Forms and User Input
Evaluate with: missing input, invalid format, boundary values, long input, copy-pasted text, autocomplete, keyboard navigation, server-side validation, changes to valid input, submission latency, duplicate submission, session interruption, recovery after return.

## Dates, Numbers, Currencies, and Localization
Consider: localized date formats, timezones, daylight saving, 12/24-hour time, currency symbols/codes, decimal/thousands separators, negative values, large/small numbers, units, pluralization, translation expansion, RTL, local address/phone formats, localized errors.

## Images, Files, and Media
Consider: missing images, failed requests, different aspect ratios, very large files, unsupported formats, upload cancellation/failure, duplicate filenames, file size limits, long filenames, no media available, captions/transcripts, permission-protected media, low bandwidth.

## Charts and Analytical Data
Test with: no observations, single observation, sparse data, negative/zero values, missing periods, extreme outliers, many series, long category names, different units, changing date ranges, incomplete/delayed data, uncertainty/estimates.

## Data Truth and Sample Data
Distinguish: verified production data, user-provided examples, synthetic sample data, placeholder content, calculated values, estimates/forecasts, unknown values. Never invent testimonials, usage statistics, ratings, revenue, or performance improvements and present them as real.

## Edge-Case Coverage Matrix
For important pages, identify relevant cases across: content length, data volume, data availability, network/system state, user permission, input validity, viewport size, locale, accessibility mode, action reversibility.

**Foundational principle:** Design for the range of real situations the product may encounter, not only for the ideal screenshot.
