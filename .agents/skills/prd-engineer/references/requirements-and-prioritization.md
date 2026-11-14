# Requirements and Prioritization

## Requirement categories

- **Product goals:** outcomes the product must achieve.
- **User roles:** people or systems that interact with the product.
- **User journeys:** complete paths through the product.
- **Functional requirements:** observable system capabilities.
- **Business rules:** constraints that must hold regardless of UI.
- **Non-functional requirements:** measurable quality attributes and operating constraints.
- **Integrations:** external capabilities or data exchanges.
- **Operational requirements:** support, monitoring, backups, administration, and maintenance.

## Write testable requirements

Avoid vague statements such as "fast", "secure", "modern", "easy", or "scalable" without a testable meaning. Ask what the user expects, propose an appropriate measure, and mark the target `TBD` if evidence or approval is missing.

Use concise requirement language:

- One requirement should express one behavior or constraint.
- Identify the actor or system boundary.
- State preconditions and outcomes where necessary.
- Avoid prescribing implementation unless it is a real constraint or an approved technical decision.
- Keep product intent separate from implementation design.

## Priority model

Use MoSCoW or P0/P1/P2 consistently within one project. Default meaning when using P-levels:

- `P0`: required for the core MVP or a launch blocker.
- `P1`: important but not a launch blocker.
- `P2`: optional, later phase, or quality enhancement.

Priority must reflect user value, risk, dependencies, and MVP goals, not implementation convenience alone.

## MVP boundary

For every proposed feature, record:
- User problem solved.
- MVP value and launch necessity.
- Dependencies and delivery risk.
- What is intentionally omitted.
- Whether a manual operational workaround is acceptable for the MVP.

Do not include future possibilities in MVP merely because they are technically interesting.

## Non-functional requirements

Select only relevant categories:
- Performance and latency.
- Availability and recovery.
- Reliability and consistency.
- Security and privacy.
- Accessibility and usability.
- SEO and crawlability for public content.
- Browser/device compatibility.
- Scalability and capacity.
- Observability and supportability.
- Maintainability and testability.
- Data retention, export, and deletion.

Set quantitative targets only with a defensible source or user approval. For example, do not invent uptime, p95 latency, data retention periods, or Lighthouse scores.

## Traceability IDs

Use stable IDs such as `OBJ-001`, `ROLE-001`, `FEAT-001`, `FR-001`, `NFR-001`, and `AC-001`. Do not renumber unrelated items when a requirement is removed. Mark obsolete IDs as retired and explain the replacement.

## Requirements baseline

At a scope checkpoint, show:
- In-scope MVP capabilities.
- Later-phase capabilities.
- Explicit exclusions.
- Open scope decisions.
- Dependencies and highest risks.

Obtain approval before calling the scope baseline finalized.
