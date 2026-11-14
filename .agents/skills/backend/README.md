# Backend Engineering Skill

A production-oriented, stack-agnostic backend engineering skill for AI coding agents. It covers discovery, architecture, technology selection, data modeling, API contracts, authentication, authorization, security, integrations, implementation, testing, observability, and deployment readiness.

## Package structure

- `SKILL.md`: authoritative role, operating rules, task modes, and completion contract.
- `WORKFLOW.md`: end-to-end execution sequence and handoff rules.
- `references/`: detailed engineering standards. Load only the references relevant to the task.
- `checklists/`: actionable gates for discovery, implementation, API review, security, testing, and release readiness.
- `templates/`: optional project-document starting points. Copy and tailor only what the project needs.

## How to invoke

Ask the coding agent to use the `backend-engineering` skill for backend planning, implementation, integration, debugging, review, testing, or operations work. For a complete new product, provide the project brief or PRD and repository access. The agent must still inspect the actual repository and verify project facts.

## Standard handoff location

For a new project without an established documentation convention, use the repository's root `docs/` directory and these canonical filenames:

- `docs/architecture.md`
- `docs/database-design.md`
- `docs/api-contract.md`
- `docs/implementation-plan.md`
- `docs/testing-strategy.md`
- `docs/progress.md`

These filenames deliberately align with the frontend design-engineering workflow. If the repository already has a different, established documentation layout, preserve it and create a small index or compatibility links so frontend agents can locate the backend contract documents. Do not create duplicate competing copies.

## Core operating rule

Inspect first, preserve established decisions, make one defensible recommendation where a decision is needed, implement in small verifiable slices, and report only what was actually checked. No skill can guarantee perfect output; this package makes responsibilities, handoffs, and verification explicit so defects are less likely and easier to detect.
