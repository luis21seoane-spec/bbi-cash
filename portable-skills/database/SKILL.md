---
name: database
description: Design schemas and run safe migrations. Use when modeling data, adding/changing tables or columns, writing migrations, adding indexes, or reviewing a risky schema change. Detects the ORM/driver and existing migration setup. Prioritizes not losing data.
---

# Database

Schema mistakes are cheap in dev and catastrophic in production. The rule of this skill:
**migrations must be reversible and reviewed, and you never run a destructive change in
prod without a backup.**

## First: detect what's there

- `package.json` → ORM/driver (`drizzle-orm`, `@prisma/client`, `knex`, `kysely`,
  `pg`/`mysql2`, `@supabase/*`). Use the existing one.
- Find the migrations folder and schema definition; match its style.
- Identify the DB engine (Postgres, MySQL, SQLite).

## Schema design checklist

- [ ] Consistent naming (snake_case tables/columns, plural table names — or match repo)
- [ ] Primary keys (UUID or auto-increment, consistently)
- [ ] `created_at` / `updated_at` timestamps
- [ ] Foreign keys with explicit `on delete` behavior
- [ ] Indexes on columns used in WHERE / JOIN / ORDER BY
- [ ] **Multi-tenant**: `org_id`/`tenant_id` on tenant-scoped tables, indexed
- [ ] Soft-delete (`deleted_at`) where history matters
- [ ] NOT NULL + sensible defaults; constraints for invariants (unique, check)

## Safe migration workflow

1. Write the migration **and** its rollback/down.
2. Make column additions backward-compatible: add nullable → backfill → enforce NOT NULL
   in a later migration (so old and new code both work during deploy).
3. For renames/drops, use the expand→migrate→contract pattern, not a single destructive step.
4. Test the migration on a copy / local DB first.
5. **Back up production before destructive changes.**
6. Run in the right order with deploys (`deploy-ci`).

## Pitfalls

- Dropping or renaming a column in one step while old code is still running → errors.
- Long-locking migrations (e.g. adding an index without `CONCURRENTLY` on Postgres) →
  downtime on big tables.
- No `down` migration → can't roll back when something breaks.
- Forgetting tenant scoping → data leaks across customers.
</content>
