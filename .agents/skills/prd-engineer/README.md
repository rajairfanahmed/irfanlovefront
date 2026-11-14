# PRD Engineer

A single interactive skill for discussing, defining, reviewing, and finalizing software projects before implementation.

## What it does

- Starts from a project idea, rough brief, existing PRD, or change request.
- Leads an iterative discussion instead of generating a large PRD immediately.
- Gets approval for important product, feature, architecture, and stack decisions.
- Defines every feature from both frontend and backend perspectives in the same workflow.
- Selects one compatible full-stack technology stack based on project constraints.
- Maintains decision status and change impact across all documents.
- Produces separate master, frontend, and backend PRDs, plus synchronized engineering handoff contracts when appropriate.

## No outer prompt required

The skill contains its own workflow. After installing it, start with a short project idea or invoke `/prd-engineer`. Do not copy a long prompt into Claude or ask another model to expand a scaffold.

Example:

> I want to build a platform where independent tutors can publish courses and students can subscribe. Help me define the product and finalize the complete frontend and backend requirements.

The skill should begin discovery, ask focused questions, make recommendations, and seek approval at decision checkpoints.

## Install

### Claude Code

Copy this folder to the project-level skills directory:

```text
.claude/skills/prd-engineer/SKILL.md
.claude/skills/prd-engineer/references/...
.claude/skills/prd-engineer/templates/...
```

The resulting command is `/prd-engineer`.

For personal availability across projects, place the folder under the user's Claude Code skills directory instead of the project-level directory.

### Claude.ai

Upload the ZIP as a custom Skill from Claude's Skills settings when that feature is available on the account. Keep the `prd-engineer/` folder as the archive root. Follow the current interface labels shown in the account.

## Package layout

- `SKILL.md`: main instructions and workflow.
- `references/`: detailed discovery, requirements, feature, frontend, backend, architecture, integration, decision, and quality guidance.
- `templates/`: document templates used to produce consistent project outputs.

## Default project outputs

```text
docs/
├── MASTER_PRD.md
├── FRONTEND_PRD.md
├── BACKEND_PRD.md
├── DECISION_LOG.md
├── architecture.md
├── api-contract.md
├── database-design.md
└── implementation-plan.md
```

The first four are the primary PRD documents. The last four are focused engineering handoff contracts derived from the PRDs and kept synchronized. Existing repository documentation conventions take precedence over these defaults.

## Important boundaries

This skill defines and documents product requirements. It does not implement application code, provision infrastructure, run deployments, or decide unapproved requirements on the user's behalf. It works alongside dedicated frontend design/engineering and backend engineering skills.
