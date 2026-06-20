---
name: deploy-ci
description: Set up or fix CI/CD — automated checks on every push, preview deploys, environment/secret management, and production deploys. Use when adding a pipeline, configuring GitHub Actions, wiring deploys to a host, or debugging a failing build/deploy. Detects the stack and host.
---

# Deploy & CI/CD

Ship changes safely and automatically: every push is checked, every PR gets a preview,
and production deploys are repeatable — not manual and scary.

## First: detect what's there

- `.github/workflows/` → existing CI. Extend it; don't duplicate.
- `package.json` scripts → build/test/lint commands the pipeline should run.
- Host hints: `vercel.json`, `netlify.toml`, `Dockerfile`, `fly.toml`,
  `render.yaml`, `wrangler.toml`. Match the existing target.

If no host is set, recommend by stack: Astro/Next/Vite static or edge → **Vercel /
Netlify / Cloudflare Pages**; containerized backend → **Fly.io / Render / Railway**.

## Pipeline stages

1. **CI on every push/PR**: install → lint → typecheck → unit tests → build →
   e2e (`e2e-testing`). Fail fast.
2. **Preview deploy on PRs**: a live URL per PR to review changes (verify with
   `agent-browser`).
3. **Production deploy** on merge to the main branch.
4. **Migrations** (`database`) run in the right order, before/with the deploy.

## Environments & secrets

- Separate **dev / staging / prod** config.
- Secrets live in the host/CI secret store and GitHub Actions secrets — **never** in the
  repo. Keep `.env.example` (no values) in git.
- Different API keys per environment (e.g. Stripe test vs live).

## Checklist

- [ ] CI runs lint + typecheck + tests + build on every PR
- [ ] Build failure blocks merge
- [ ] Preview deploy per PR
- [ ] Secrets in CI/host store, not committed
- [ ] Migrations automated and ordered
- [ ] Rollback path documented (redeploy previous build)
- [ ] Caching deps to keep CI fast

## Pitfalls

- Committed secrets — rotate immediately if it happens; they're in git history forever.
- Running prod migrations by hand → drift between environments.
- No preview deploys → reviewing blind.
- Slow CI with no caching → people skip it.
</content>
