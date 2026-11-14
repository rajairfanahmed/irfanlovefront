# Delivery Planning

## Purpose

Turn approved requirements into an implementation sequence without pretending that uncertain effort is precise.

## Planning layers

1. Discovery and technical validation spikes.
2. Foundation work: repository setup, environments, shared contracts, data and auth foundations.
3. Vertical feature slices: each slice includes backend, frontend, integration, and tests.
4. Cross-cutting work: security, accessibility, SEO, performance, observability, deployment, and documentation.
5. Release preparation: migration, operational readiness, acceptance, rollback, and support.

## Vertical-slice planning

Prefer planning a usable end-to-end capability over completing all backend work in isolation and leaving all frontend work until later, unless there is a technical dependency that justifies sequencing differently.

For each milestone, record:
- Included feature/requirement IDs.
- Backend work and dependencies.
- Frontend work and dependencies.
- Integration/contract work.
- Test and review requirements.
- Risks, external dependencies, and exit criteria.

## Estimation

Use relative sizing or a range when uncertainty is high. Precise dates require known team composition, availability, parallelism, review time, integration risk, and external dependencies. Separate engineering effort from calendar duration.

## Release planning

Define the release's required capabilities, migration needs, feature flags, data backfill, monitoring, rollback, support ownership, user communication, and acceptance sign-off as appropriate. Do not assume every product needs a formal staging environment or complex release train.
