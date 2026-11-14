---
name: frontend-architecture
description: Establishes or improves the frontend application architecture, route model, rendering boundaries, data access, design-token infrastructure, quality tooling, and integration points while preserving the existing stack where it is sound.
---

# Frontend Architecture

## Objective

Create a frontend foundation that fits the verified product requirements and existing repository, with clear boundaries and dependable data flow.

## Before implementation

Read `frontend-architecture.md`, `DESIGN_BRIEF.md`, the backend `architecture.md` and `api-contract.md` when present, package manifests, framework instructions, and current source conventions.

Also inspect repository instructions, the actual implementation, installed library versions, and relevant tests. Do not rely on a specification when the code or framework version shows that it is outdated. Record material gaps rather than silently inventing missing requirements.

## Reference library

Read the references that apply to the task before making domain decisions. The complete set is listed here so the specialist can load the right guidance without guessing file names.

- [`project-structure-and-code-quality.md`](references/project-structure-and-code-quality.md)
- [`design-system-implementation.md`](references/design-system-implementation.md)
- [`component-architecture.md`](references/component-architecture.md)
- [`state-routing-and-data-flow.md`](references/state-routing-and-data-flow.md)

## Work sequence

1. Inspect the actual framework and dependency versions, build scripts, route tree, rendering strategy, server/client boundaries, and current deployment target.
2. Map product routes, shared layouts, feature modules, data ownership, and cross-cutting services before changing folder structure.
3. Choose the smallest maintainable architecture. Preserve established conventions unless a verified problem justifies a migration.
4. Establish typed API access using the real backend contract. Centralize base URL handling, request serialization, response parsing, auth integration, cancellation, and normalized errors without hiding important HTTP semantics.
5. Define client/server boundaries, environment variable policy, state ownership, caching and invalidation, route protection presentation, and loading boundaries.
6. Implement only the design-token infrastructure. Token values and visual decisions belong to Visual Design.
7. Configure or preserve type checking, linting, formatting, unit tests, browser tests, and build verification using the repository toolchain.
8. Update the architecture record and hand off route, API, token, state, and testing decisions to downstream specialists.

## Required outputs

A coherent route and module structure, documented architectural decisions, working typed API integration where contracted, token infrastructure, environment validation, and relevant quality tooling.

## Ownership boundaries

Do not redesign the visual language, define final token values, compose page layouts, own form workflows, duplicate backend business rules, or introduce a new framework or state library without a demonstrated need.

## Review before handoff

- The app starts and builds, route behavior is deliberate, client/server boundaries are valid, API calls match the contract, secrets are not exposed, types and tests are meaningful, and no unrelated architecture was rewritten.
- Review the diff for unrelated changes, unused code, debug output, or accidental dependency additions.
- Run the relevant available checks and report their actual outcome.
- Record open issues with impact and owner.

## Handoff

Identify the files changed, decisions made, routes or components affected, tests run, and any dependency on another specialist. Do not claim completion for work that was not verified.
