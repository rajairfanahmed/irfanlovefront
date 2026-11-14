# Performance Testing and Budgets

## Set project budgets

Define route-aware limits for JavaScript, media, fonts, requests, and interaction performance. Budgets should reflect the product, target devices, network context, and deployment environment. A media-heavy editor and a text-led documentation site should not share the same asset budget.

## Baseline and comparison

Record the same routes, build mode, browser, device profile, network profile, and number of runs before and after a change. Separate cold-cache and warm-cache behavior. Avoid comparing measurements from unrelated environments.

## Test layers

- build analysis for dependency and route bundle weight;
- lab tests for reproducible load and interaction diagnosis;
- field telemetry for actual user experience;
- browser profiling for main-thread, rendering, and memory issues;
- regression checks for agreed budgets.

## Release gates

Block release for severe regressions in primary flows or agreed budgets. Track smaller exceptions with an owner and date. Do not remove product functionality solely to improve a score.

## Report

Include baseline, changes, post-change result, test conditions, remaining bottleneck, and confidence. Never claim a score or threshold was met without a recorded result.
