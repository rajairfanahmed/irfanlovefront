<div align="center">

<p>
  <a href="#readme"><strong>README</strong></a> •
  <a href="https://rajairfanahmed.github.io/irfanlovefront"><strong>GitHub Pages Docs</strong></a> •
  <a href="CONTRIBUTING.md"><strong>Contributing</strong></a> •
  <a href="CODE_OF_CONDUCT.md"><strong>Code of Conduct</strong></a> •
  <a href="LICENSE"><strong>License</strong></a> •
  <a href="SECURITY.md"><strong>Security</strong></a> •
  <a href="https://github.com/rajairfanahmed/irfanlovefront/releases"><strong>Latest Release v3.3.0</strong></a>
</p>

<a href="https://github.com/rajairfanahmed/irfanlovefront">
  <img src="logo/icon.svg" alt="irfanlovefront logo" width="180" height="180" />
</a>

# irfanlovefront

### Full-Stack, Anti-Slop UI/UX & AI Agent Skills Suite (v3.3.0)

**Eliminate template repetition, brittle backends, and AI slop forever.**

[![npm version](https://img.shields.io/npm/v/irfanlovefront.svg?style=flat-square&color=cb3837&logo=npm)](https://www.npmjs.com/package/irfanlovefront)
[![GitHub Packages](https://img.shields.io/badge/GitHub_Packages-@rajairfanahmed/irfanlovefront-24292e.svg?style=flat-square&logo=github)](https://github.com/rajairfanahmed/irfanlovefront/packages)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Documentation-22c55e.svg?style=flat-square&logo=github)](https://rajairfanahmed.github.io/irfanlovefront)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/badge/release-v3.3.0-blue.svg?style=flat-square)](https://github.com/rajairfanahmed/irfanlovefront/releases)
[![Stars](https://img.shields.io/github/stars/rajairfanahmed/irfanlovefront?style=flat-square&color=yellow)](https://github.com/rajairfanahmed/irfanlovefront/stargazers)
[![Forks](https://img.shields.io/github/forks/rajairfanahmed/irfanlovefront?style=flat-square&color=blue)](https://github.com/rajairfanahmed/irfanlovefront/network/members)
[![Issues](https://img.shields.io/github/issues/rajairfanahmed/irfanlovefront?style=flat-square&color=red)](https://github.com/rajairfanahmed/irfanlovefront/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/rajairfanahmed/irfanlovefront/pulls)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP 3](https://img.shields.io/badge/GSAP-3.x-0ae448?style=flat-square&logo=greensock)](https://greensock.com/)

[Report Bug](https://github.com/rajairfanahmed/irfanlovefront/issues) • [Request Feature](https://github.com/rajairfanahmed/irfanlovefront/issues) • [GitHub Pages Docs](https://rajairfanahmed.github.io/irfanlovefront) • [Live Demo](https://irfanlovefrontend.vercel.app/) • [Star Repository](https://github.com/rajairfanahmed/irfanlovefront)

</div>

---

## The 1-Command Quickstart (v3.3.0)

Install the entire skill suite instantly across **Claude Code**, **Google Antigravity**, **Cursor**, **Windsurf**, or **GitHub Copilot** with a single command:

```bash
# Public npm (selects your agent and workspace or global scope)
npx irfanlovefront@latest
```

Or run via GitHub Packages:

```bash
# GitHub Packages registry
npx @rajairfanahmed/irfanlovefront@latest
```

Or install with direct target flags:

```bash
# Install specifically for Claude Code (.claude/skills/ + CLAUDE.md)
npx irfanlovefront --claude

# Install specifically for Cursor (.cursor/rules/*.mdc)
npx irfanlovefront --cursor

# Install specifically for Google Antigravity / Gemini (.agents/skills/)
npx irfanlovefront --antigravity

# Install specifically for Windsurf (.windsurf/rules/ + .windsurfrules)
npx irfanlovefront --windsurf

# Install specifically for GitHub Copilot (.github/copilot-instructions.md)
npx irfanlovefront --copilot

# Install for all supported AI agents simultaneously
npx irfanlovefront --all
```

---

## The Why?

Standard AI coding assistants suffer from severe structural blindspots:
- **Frontend Slop:** Every generated site defaults to identical dark obsidian slate `#0B0F17`, floating pill buttons with purple gradients, and generic double-bezel cards.
- **Backend Fragility:** Missing input validation schemas, hardcoded credentials, unindexed database queries, and broken error envelopes.
- **Toy AI Integrations:** Raw unparsed text prompts, missing streaming cancellation, zero token/cost tracking, and hallucinations during database mutations.

**Release 3.3.0 introduces the 3 Flagship Specialist Agents:**
1. **`/frontend-craftsman`**: Master UI/UX & Frontend Craft Specialist. Builds bespoke, anti-slop web applications with mathematical color harmony (60-30-10 rule), 15 distinct hero archetypes (H1-H15), 60fps composited micro-interactions, responsive touch ergonomics, and complete Agentic SEO (AEO/GEO full 5/5 score with Schema.org JSON-LD and `llms.txt`).
2. **`/backend-architect`**: Master Backend Systems & API Architect. Implements Clean Architecture across TypeScript and Python, type-safe database schemas with migrations (Drizzle/Prisma/SQLAlchemy), pgvector storage, RBAC authentication, async queues (BullMQ/Inngest/Celery), and multi-stage Dockerfiles. Produces explicit `CONTRACTS.md` artifacts.
3. **`/ai-engineer`**: Master AI/ML & LLM Systems Engineer. Implements production-grade application AI: multi-provider routing (OpenAI, Anthropic Claude, Google Gemini, Ollama), real-time Server-Sent Events (SSE) streaming, structured tool calling (function calling), hybrid RAG retrieval, agent state machines, and cost/latency telemetry.

---

## Architecture Overview

```text
  +-------------------------------------------------------------------------------+
  |                      IRFANLOVEFRONT v3.3.0 ARCHITECTURE                       |
  +-------------------------------------------------------------------------------+
  |                                                                               |
  |  [Flagship Specialist Agents]                                                 |
  |                                                                               |
  |  1. /frontend-craftsman                                                       |
  |     - Bespoke Anti-Slop Foundation (Mathematical 60-30-10 Color Science)      |
  |     - 15 Hero Archetypes (H1-H15), Asymmetrical Bento Grids                   |
  |     - 60fps Hardware-Accelerated Micro-Interactions (Composited GPU Only)     |
  |     - 8 Category Blueprints (SaaS, Portfolio, E-Commerce, AI, DevTools, etc.)|
  |     - 5 Brand Benchmarks (Linear, Vercel, Stripe, Apple, Awwwards)            |
  |     - Agentic SEO 5/5 (Schema.org Graph, OpenGraph, public/llms.txt)          |
  |                                                                               |
  |  2. /backend-architect                                                        |
  |     - Clean Architecture (Routes, Services, Repositories, Schemas)            |
  |     - Type-Safe Relational & Vector Persistence (Drizzle, Prisma, SQLAlchemy) |
  |     - Unified API Envelopes, Error Standards & CONTRACTS.md Generation       |
  |     - Defense-in-Depth Security (RBAC, Rate Limiting, CORS, Helmet)          |
  |     - Async Queues (BullMQ, Inngest, Celery) & Multi-Stage Dockerfile        |
  |                                                                               |
  |  3. /ai-engineer                                                              |
  |     - Multi-Provider Routing & Automatic Fallback Chains (Claude, OpenAI, etc)|
  |     - Real-Time Server-Sent Events (SSE) Streaming to UI                     |
  |     - Deterministic Structured Output Validation (Zod, Pydantic)              |
  |     - Hybrid RAG Vector Search (pgvector, Pinecone, Reciprocal Rank Fusion)   |
  |     - Multi-Step ReAct Agent Tool Loops & Token/Cost Telemetry               |
  |                                                                               |
  |  [Supporting Engineering Skills (Matt Pocock Suite)]                         |
  |  - /tdd, /code-review, /domain-modeling, /codebase-design, /diagnosing-bugs    |
  |  - /github-readme-writer (Daytona Open-Source Framework, Zero Em-Dashes)       |
  |                                                                               |
  +-------------------------------------------------------------------------------+
```

---

## Detailed Specialist Specifications

### 1. `/frontend-craftsman`
- **Role:** Master UI/UX and Frontend Craft Specialist.
- **Execution Protocol:** Strategy Check -> High-Craft Implementation -> Responsive & Type Audit.
- **Reference Suite:**
  - `anti-slop-rules.md`: Banned clichés, color harmony math, tactile state rules.
  - `hero-and-layout-archetypes.md`: 15 distinct hero formulas (H1 Split, H2 Glow, H3 Device Mockup, H4 Typography Watermark, H5 Video Backdrop, H6 Bento Showcase, H7 Magazine Cover, H8 Card Stack, H9 3D Canvas, H10 Metric Dashboard, H11 Asymmetrical Diagonal, H12 Filmstrip, H13 Minimalist White Cube, H14 Brutalist Wire, H15 Code Sandbox).
  - `component-craft-patterns.md`: Navbars, curtain mobile menus, bento cards, tactile buttons, data tables, empty states.
  - `motion-recipes.md`: 4 motion profiles (Cinematic, Snappy, Calm, None), 60fps spring physics, scroll reveals.
  - `responsive-and-touch.md`: 375px/768px/1440px audits, >=44px touch targets, zero horizontal overflow.
  - `agentic-seo-aeo.md`: Perfect 5/5 score: Schema.org JSON-LD Knowledge Graph, dynamic OpenGraph, dual `public/llms.txt` + `llms-full.txt`.
  - `design-engineering-standards.md`: Composited GPU-only properties, pure CSS `clamp()` fluid type, zero-CLS font metric overrides, memory cleanup hygiene.
  - `testing-and-e2e.md`: Playwright user journey tests, Vitest component tests, axe-core accessibility checks.
  - `deployment-and-ci.md`: Vercel/Cloudflare build optimization, bundle budgets, edge caching.
- **Category Deep Guides:** `saas.md`, `portfolio.md`, `ecommerce.md`, `ai-product.md`, `developer-tool.md`, `agency-studio.md`, `blog-publication.md`, `dashboard-admin.md`.
- **Brand Benchmarks:** `linear.md`, `vercel.md`, `stripe.md`, `apple.md`, `awwwards.md`.

### 2. `/backend-architect`
- **Role:** Master Backend Systems & API Architect.
- **Execution Protocol:** Contract Review -> Clean Architecture Implementation -> Automated Test & Migration Verification.
- **Reference Suite:**
  - `api-design-and-contracts.md`: Unified `{ data, error, meta }` response envelopes, error standards, `CONTRACTS.md` synchronization.
  - `database-and-migrations.md`: Drizzle/Prisma/SQLAlchemy relational schemas, foreign key indexes, pgvector storage.
  - `auth-and-security.md`: Session vs JWT auth, OAuth2 PKCE flows, RBAC middleware, rate limiting, security headers.
  - `async-jobs-and-queues.md`: BullMQ/Inngest/Celery workers, idempotency keys, exponential backoff retries, dead-letter queues.
  - `caching-and-performance.md`: Cache-aside pattern via Redis, connection pooling.
  - `observability-and-health.md`: Structured JSON logging (Pino/Loguru), `/health` and `/health/ready` endpoints, graceful shutdown.
  - `testing-and-integration.md`: API endpoint integration tests, transaction rollback fixtures.
  - `deployment-and-docker.md`: Multi-stage Dockerfile, local `docker-compose.yml` (Postgres, Redis), runtime Zod environment validation.

### 3. `/ai-engineer`
- **Role:** Master AI/ML & LLM Systems Engineer.
- **Execution Protocol:** Prompt/Model Scoping -> Multi-Provider Implementation -> Streaming & Eval Verification.
- **Reference Suite:**
  - `provider-routing-and-fallback.md`: Model tiering (Groq/Flash for fast extraction, Sonnet/GPT-4o for reasoning, Ollama for local), automatic failover.
  - `streaming-and-ui-protocol.md`: Server-Sent Events (SSE) streaming protocol, client hooks, cancellation support.
  - `structured-outputs-and-tools.md`: Zod/Pydantic schema validation, function calling, ReAct multi-step agent loops.
  - `rag-and-vector-search.md`: Semantic document chunking, embeddings, hybrid search (dense vector + sparse keyword), Reciprocal Rank Fusion.
  - `evals-and-telemetry.md`: Token usage and dollar cost tracking, latency metrics, prompt injection delimiters.
  - `ai-evals-and-guardrails.md`: Automated eval suites, golden test datasets, adversarial fuzzing.

### 4. Supporting Engineering Skills (Matt Pocock Suite)
- **`/tdd`**: Test-driven development workflows (red, green, refactor).
- **`/code-review`**: Automated review for standards and spec compliance.
- **`/domain-modeling`**: Domain-driven design and glossary alignment.
- **`/diagnosing-bugs`**: Deep root-cause debugging loop.
- **`/github-readme-writer`**: Daytona 4,000-star launch framework documentation specialist with zero em-dashes.

---

## Inter-Specialist Workflow

Whenever building multi-tier applications:

```text
[Step 1: Backend or AI defines contract]
/backend-architect  ->  Produces API endpoints, DB schema & updates CONTRACTS.md
/ai-engineer        ->  Produces streaming endpoints, tools & updates CONTRACTS.md

[Step 2: Frontend consumes contract]
/frontend-craftsman ->  Reads CONTRACTS.md, implements bespoke UI, 60fps micro-interactions,
                        and wires typed client hooks with zero guessing or mismatch
```

---

## GitHub Pages Documentation

The repository documentation is automatically hosted on GitHub Pages:
- **Documentation URL:** [https://rajairfanahmed.github.io/irfanlovefront](https://rajairfanahmed.github.io/irfanlovefront)

---

## Project Hygiene

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Contributing Guide](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)
- [License](LICENSE)

---

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** license. See [LICENSE](LICENSE) for complete details.

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=rajairfanahmed/irfanlovefront&type=Date)](https://star-history.com/#rajairfanahmed/irfanlovefront&Date)

</div>
