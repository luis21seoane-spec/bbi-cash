---
name: saas-scaffold
description: Bootstrap or extend a SaaS project with a sane, production-ready structure. Use when starting a new SaaS, adding a missing foundational layer (config, env, folder structure, app shell), or standardizing an existing project. Detects the stack automatically and adapts.
---

# SaaS Scaffold

Set up the skeleton every SaaS needs so the productive work can start immediately,
instead of re-deciding the same structure each time.

## First: detect the stack (don't assume)

Read these before generating anything:

- `package.json` → framework + scripts (look for `astro`, `next`, `vite`, `remix`, `nuxt`)
- lockfile → package manager (`pnpm-lock.yaml`→pnpm, `yarn.lock`→yarn, else npm)
- `*.config.*`, `tsconfig.json` → TS vs JS, aliases
- existing `src/` layout → match its conventions, don't fight them

If it's an empty/new repo, ask the user only what can't be inferred (framework + DB +
hosting), then proceed with sensible defaults.

## What a SaaS skeleton needs

1. **Folder structure** consistent with the framework (routes/pages, components, lib,
   server, db, styles). Mirror existing conventions when extending.
2. **Environment config**: `.env.example` with every key documented, never commit real
   `.env`. Separate dev / staging / prod values.
3. **App shell**: layout, navigation, auth-aware header, error/404 pages, loading states.
4. **Config files**: linting/formatting, TS config, path aliases.
5. **Wiring points** for the sibling skills: `auth`, `database`, `payments`,
   `ui-components`, `deploy-ci`.
6. **A README** describing how to run, test, and deploy.

## Workflow

1. Detect stack and package manager.
2. Propose the structure (short bullet list) and confirm with the user before writing
   many files.
3. Generate incrementally; after each layer, run the dev server / build to confirm it
   still works (pair with `run` / `agent-browser`).
4. Add a `.env.example` and ensure real secrets are gitignored.

## Pitfalls

- Don't introduce a second framework or rewrite working structure — extend it.
- Never commit `.env`, keys, or `*.json` auth/session files. Add them to `.gitignore`.
- Keep multi-tenant in mind from day one if the SaaS serves multiple customers
  (a `tenant_id`/`org_id` column is far cheaper to add now than later).
</content>
