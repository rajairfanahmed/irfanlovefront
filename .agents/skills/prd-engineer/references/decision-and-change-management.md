# Decision and Change Management

## Status vocabulary

Use these statuses throughout the package:

- `OPEN`: unresolved.
- `PROPOSED`: recommended but not approved.
- `FINALIZED`: explicitly approved by the user.
- `ASSUMPTION`: temporary working assumption requiring validation.
- `DEFERRED`: intentionally postponed to a later phase.
- `OUT_OF_SCOPE`: explicitly excluded.
- `REVISED`: a formerly finalized decision was changed; preserve the history and record the new approval.

## What counts as material approval

Obtain explicit approval for product direction, MVP scope, user roles, important business rules, major feature behavior, data ownership, authentication/authorization model, primary technology choices, significant third-party providers, and material non-functional targets.

A direct approval such as "approve", "finalize this", or an unambiguous equivalent is sufficient. When the user says "looks okay" but important consequences remain unclear, summarize the decision and ask whether it should be finalized.

## Decision record fields

- Decision ID.
- Topic and concise decision statement.
- Context/problem.
- Options considered where meaningful.
- Chosen option and rationale.
- Status and approver.
- Affected features, requirements, stack items, contracts, and documents.
- Risks, assumptions, and follow-up actions.
- Previous decision/revision link if changed.

## Change-impact workflow

When a finalized requirement changes:
1. Restate the requested change.
2. Identify direct and downstream effects.
3. Check product scope, frontend pages/states, backend rules, data model, APIs, permissions/security, integrations, tests, estimates, and existing decisions.
4. Present material conflicts and recommend a coherent update.
5. Obtain approval for the revised decision.
6. Update all affected primary PRDs, the decision log, traceability matrix, acceptance criteria, and derived engineering contracts.
7. Mark superseded requirements as replaced or retired. Preserve history rather than silently deleting decisions.

## Unresolved decision handling

Keep unresolved items visible with owner (if known), impact, dependency, and the next question needed. Do not hide open issues in prose or mark them finalized to make a document appear complete.

## Conversation continuity

At the end of a planning session, update project files if writable. If files cannot be updated, provide a compact checkpoint containing current stage, approved decisions, open questions, and the next recommended discussion item so the next session can resume without redoing discovery.
