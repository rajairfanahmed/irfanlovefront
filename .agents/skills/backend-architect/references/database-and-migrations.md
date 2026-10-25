# Database Modeling & Migrations Reference

This reference covers relational schema design, indexing, and migration workflows across TypeScript (Drizzle, Prisma) and Python (SQLAlchemy, Alembic).

---

## 🗄️ 1. Schema Conventions & Types

1. **Primary Keys:** Use prefixed CUID2, ULID, or UUIDv7 strings (e.g. `usr_...`, `org_...`, `inv_...`) rather than auto-incrementing sequential integers to prevent enumeration attacks.
2. **Timestamps:** Every table must include `created_at` and `updated_at` timestamps with UTC timezone (`timestamptz`).
3. **Soft Deletes:** Where audit retention is required, use `deleted_at: timestamp | null` with indexes on `(tenant_id, deleted_at)`.
4. **Vector Storage:** When integrating with AI vector search, enable the `pgvector` extension and define vector columns with cosine distance index:
   ```sql
   CREATE EXTENSION IF NOT EXISTS vector;
   ALTER TABLE document_embeddings ADD COLUMN embedding vector(1536);
   CREATE INDEX ON document_embeddings USING ivfflat (embedding vector_cosine_ops);
   ```

---

## ⚡ 2. Indexing Strategy & Performance

- Index all foreign key columns (`user_id`, `organization_id`).
- Index fields used in query filters and sorting (`status`, `created_at`).
- Use unique compound indexes to enforce data integrity:
  `UNIQUE(organization_id, slug)`.
