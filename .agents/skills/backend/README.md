# Backend Engineering Skill

A reusable, stack-agnostic skill for AI agents that need to understand, design, implement, integrate, test, secure, and maintain backend systems for websites and applications.

## Package contents

- `SKILL.md` — the main entry point and execution instructions. Read this first.
- `references/` — deeper technical guidance. Read only the references relevant to the current project or task.
- `checklists/` — actionable review lists for discovery, implementation, APIs, security, testing, and production readiness.
- `templates/` — optional starting points for project-specific backend documentation. Copy and adapt them into the target repository; do not leave placeholders in completed project documentation.

## How to use

1. Place this `backend/` folder in the location where your AI coding agent discovers skills, or provide the folder to the agent directly.
2. Give the agent the project information file (for example, `project-info.md`) and access to the repository.
3. Ask the agent to use the `backend-engineering` skill.
4. The agent should inspect the project, select only the necessary reference files, create or update project-specific documents when justified, and then implement and verify the work.

## Important behavior

This skill does not force one technology stack. It preserves the project's existing stack where practical and selects technologies based on requirements when the project has no established stack. It also avoids generating documentation for trivial changes.

## Suggested project information

A project information file is useful when it describes the product, users, features, constraints, existing frontend, preferred or existing technologies, integrations, and expected outcomes. The agent must still verify these details against the repository and must not treat assumptions as implemented facts.
