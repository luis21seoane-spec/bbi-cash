# saas-toolkit

A team of **stack-detecting** Claude Code skills for building professional SaaS. Every
skill inspects the project (Astro, Next.js, Vite, Rails, Django, etc.) and adapts — you
don't configure a stack.

## Skills included

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
`run` skills.

## Install (via the marketplace)

```text
/plugin marketplace add luis21seoane-spec/bbi-cash
/plugin install saas-toolkit@seoane-tools
```

Once installed, the skills are invoked namespaced, e.g. `/saas-toolkit:agent-browser`, or
Claude picks the right one automatically from what you ask ("add login", "set up billing",
"check the mobile layout").

> If these files live on a feature branch rather than the repo's default branch, add the
> marketplace with the branch ref instead:
> `/plugin marketplace add https://github.com/luis21seoane-spec/bbi-cash.git#<branch>`

## Updating

```text
/plugin marketplace update seoane-tools
```

Pulls the latest skills via git. No manual file copying.

## First run (browser/testing skills)

```sh
npm install -D playwright
npx playwright install chromium
```

## Notes

- `agent-browser`'s `login.mjs` saves an authenticated session (cookies + localStorage) to
  a file like `/tmp/auth.json`. Never commit or share it. The bundled `.gitignore` excludes
  common auth/session and screenshot artifacts.
</content>
