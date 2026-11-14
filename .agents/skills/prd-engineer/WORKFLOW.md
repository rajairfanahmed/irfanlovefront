# PRD Engineer Workflow

## Conversation loop

```text
Project idea or existing brief
          |
          v
Inspect context and identify unknowns
          |
          v
Discuss one high-impact decision
          |
          v
Recommend an option and explain trade-offs
          |
          v
User approves, changes, or defers
          |
          v
Update decision log and relevant PRD sections
          |
          v
Synchronize frontend + backend + integration impact
          |
          v
Move to the next unresolved decision
          |
          v
Cross-document review and final approval
          |
          v
Master PRD + Frontend PRD + Backend PRD
          |
          v
Engineering handoff contracts
```

## Required checkpoints

1. Product understanding and outcome.
2. Users, journeys, and MVP scope.
3. Feature contracts, each covering frontend and backend.
4. Full-stack technology stack.
5. Architecture, data ownership, API contracts, and integrations.
6. Non-functional requirements and delivery sequence.
7. Consistency review and final readiness approval.

A checkpoint can be revisited. Do not move a material decision to `FINALIZED` without explicit approval.

## Feature completion gate

A feature is not complete until its goal, user journey, frontend UI and states, backend rules, data needs, API contract, permissions, edge cases, and acceptance criteria have been reconciled. Not every field applies to every feature; mark irrelevant items `N/A` with a reason rather than leaving ambiguity.

## Output synchronization

The primary PRDs share IDs and cross-references. Update `MASTER_PRD.md`, `FRONTEND_PRD.md`, and `BACKEND_PRD.md` together when a change affects multiple layers. Update the decision log and any derived engineering contract files in the same change.
