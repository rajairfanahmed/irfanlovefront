# Database Engineering

Read whenever the task adds or changes persistent data, schema, queries, data access, migrations, or transaction behavior.

## 1. Model the domain first

Identify entities / aggregates, attributes, ownership, relationships, lifecycle, invariants, and access patterns. Model actual domain behavior instead of copying frontend form fields directly into database tables or documents.

## 2. SQL and document data models

For relational databases:
- Define primary keys, foreign keys, unique constraints, nullability, and check constraints where appropriate.
- Choose relationship cardinality deliberately.
- Normalize to avoid update anomalies; denormalize only for a measured or justified access pattern.
- Use transactions for multi-step atomic changes.

For document databases:
- Decide embed vs reference based on aggregate ownership, size, update frequency, and query patterns.
- Avoid unbounded arrays and uncontrolled document growth.
- Define validation and indexes deliberately.
- Understand transaction and consistency behavior for the selected deployment.

## 3. Integrity and ownership

- Enforce uniqueness and important invariants in the database as well as application logic where possible.
- Store ownership relationships explicitly.
- Scope reads and writes to the authenticated actor's permitted tenant / account / resource.
- Avoid trusting client-supplied owner IDs or role fields.
- Consider soft deletion, retention, and audit requirements only when the product needs them.

## 4. Querying and indexing

- Design indexes from real query patterns, filters, joins, sort order, and uniqueness needs.
- Check query plans for slow or high-volume queries.
- Avoid N+1 queries and unbounded collection scans.
- Paginate large result sets; prefer stable cursor pagination for large or frequently changing collections when appropriate.
- Select only necessary fields and avoid returning internal fields.
- Reassess index cost on writes and storage.

## 5. Transactions and concurrency

Use a transaction when a business operation requires multiple database changes to commit atomically. Define isolation and conflict behavior where relevant. For concurrent updates, consider optimistic concurrency, version columns, conditional writes, locks, or database-native mechanisms.

Do not assume a read followed by a write is safe from races. Enforce uniqueness and state transitions atomically when possible.

## 6. Migrations

A migration should be:
- Versioned and reproducible.
- Reviewable and tested against representative data.
- Safe for the expected table / collection size and deployment window.
- Backward-compatible where rolling deployments require old and new code to coexist.
- Paired with a rollback or recovery plan when rollback is feasible.

For destructive migrations, data deletion, renames, or backfills:
1. Explain impact.
2. Confirm backup and recovery plan.
3. Test on a copy or staging dataset.
4. Obtain explicit authorization before touching production data.

Never casually reset, drop, truncate, or reseed a database that may contain user data.

## 7. Seeds and fixtures

Keep development seeds and test fixtures separate from production data. Make seed scripts safe to rerun where practical. Never insert default production passwords or real personal data into fixtures.

## 8. Backups and recovery

Define backup frequency, retention, encryption, access, restore testing, and recovery objectives when the project requires production data resilience. A backup process is not proven until restore has been tested.

## 9. Data privacy

Collect only required fields. Define retention and deletion behavior. Avoid logging secrets, authentication tokens, payment data, or unnecessary personal data. Apply access control at the query / repository boundary as well as the API layer where appropriate.

## 10. Database change checklist

- Does the model reflect domain invariants?
- Are ownership and tenant boundaries enforced?
- Are constraints and indexes appropriate?
- Are queries bounded and paginated?
- Are concurrent updates safe?
- Are migrations tested and reversible or recoverable?
- Are fixtures separated from production data?
- Are backup and restore needs addressed?
