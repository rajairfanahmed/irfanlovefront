# Database Engineering

Read whenever persistent data, schema, queries, data access, migrations, transactions, or concurrency change.

## 1. Model domain behavior first

Identify entities/aggregates, attributes, ownership, relationships, lifecycle, invariants, access patterns, and expected volume. Do not copy frontend form fields directly into tables or documents without domain analysis.

## 2. Relational and document modeling

For relational systems:
- Define primary/foreign keys, uniqueness, nullability, check constraints, and referential behavior.
- Choose relationship cardinality explicitly.
- Normalize to prevent update anomalies; denormalize only for a justified access pattern.
- Use transactions for multi-step atomic operations.

For document systems:
- Decide embed vs reference based on aggregate ownership, update frequency, document size, and query patterns.
- Avoid unbounded arrays and uncontrolled document growth.
- Define validators and indexes deliberately.
- Understand transaction and consistency behavior of the actual deployment tier.

## 3. Integrity and ownership

Enforce important invariants in the database as well as application logic where possible. Store ownership explicitly. Scope reads and writes to the authenticated actor's permitted resource/tenant. Never trust client-supplied owner or role fields. Use soft delete, audit history, and retention only when the product requires them.

## 4. Indexes and queries

Design indexes from real filters, joins, sort order, uniqueness needs, and query plans. Avoid N+1 queries and unbounded scans. Paginate large results; use stable cursor pagination when suitable. Select only necessary fields. Evaluate the write/storage cost of every index.

## 5. Transactions and concurrency

Use transactions when several database changes must commit atomically. A read followed by a write is not automatically safe from races. Use uniqueness constraints, conditional updates, optimistic concurrency/version fields, locks, or database-native atomic operators as appropriate. Define conflict behavior and retry rules.

## 6. Migrations

A migration must be versioned, reproducible, reviewable, and tested against representative data. Consider table/collection size, locks, deployment window, and backward compatibility during rolling deploys. For destructive changes or backfills:
1. Explain impact and affected records.
2. Confirm backup/recovery plan.
3. Test on a copy or staging dataset.
4. Obtain explicit authorization before production execution.

Never casually reset, drop, truncate, or reseed a database that may contain user data.

## 7. Seeds and test fixtures

Keep development seeds and test fixtures separate from production data. Make seed scripts safely repeatable where practical. Never include real credentials or personal data in fixtures.

## 8. Backups and recovery

When production resilience requires it, define backup frequency, retention, encryption, access control, restore procedure, and recovery objectives. A backup process is not proven until a restore is tested.

## 9. Privacy

Collect only required fields. Define retention and deletion. Avoid logging secrets, auth tokens, payment data, or unnecessary personal data. Protect sensitive records at both API and data-access boundaries.

## 10. Review questions

Does the model reflect domain invariants? Are ownership and tenant limits enforced? Are constraints and indexes justified? Are queries bounded? Are concurrent updates safe? Are migrations tested and recoverable? Are fixtures isolated from production?
