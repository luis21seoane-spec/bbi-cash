# Portable skills

Reusable, framework-agnostic Claude Code skills meant to be installed **globally**
(in your personal `~/.claude/skills/` directory) so they're available across all your
SaaS projects — not just this repo. Every skill **auto-detects the project's stack**
(Astro, Next.js, Vite, Rails, Django, etc.) and adapts, so you don't have to configure
anything.

## Team A — building SaaS (productivity + quality)

| Skill | What it does |
| :--- | :--- |
| `saas-scaffold` | Bootstrap/extend a SaaS with a production-ready structure, env, app shell |
| `auth` | Signup, login, sessions, password reset, roles, protected routes (+ hardening) |
| `payments` | Stripe subscriptions, plans, trials, idempotent webhooks, customer portal |
| `database` | Schema design + safe, reversible migrations (don't lose data) |
| `ui-components` | Consistent, accessible, professional UI and design-system patterns |
| `e2e-testing` | Playwright tests for critical flows (signup, checkout, core feature) |
| `agent-browser` | Drive a real browser to open, screenshot, and verify any web app |
| `deploy-ci` | CI/CD, preview deploys, secret management, production deploys |
| `seo-landing` | Landing pages that convert + technical SEO (metadata, OG, schema, perf) |

These pair with Claude Code's built-in `code-review`, `security-review`, `verify`, and
`run` skills for automated quality control.

## Install all of them globally (available in every project)

```sh
mkdir -p ~/.claude/skills
cp -r portable-skills/* ~/.claude/skills/
```

Then open Claude Code in any project and just describe what you want
(*"add login", "set up billing", "check the mobile layout"*) — the matching skill is
picked up automatically. You can also invoke one explicitly, e.g. `/agent-browser`.

## Or install per-project (shared with your team via git)

```sh
mkdir -p .claude/skills
cp -r portable-skills/auth .claude/skills/     # one skill
cp -r portable-skills/* .claude/skills/        # or all
```

## First run (for the browser/testing skills)

```sh
npm install -D playwright
npx playwright install chromium
```

## Security note

`agent-browser`'s `login.mjs` saves an authenticated session (cookies + localStorage) to
a file like `/tmp/auth.json`. **Never commit it or share it** — it grants access to your
logged-in account. The included `.gitignore` already excludes common auth/session files.
</content>
