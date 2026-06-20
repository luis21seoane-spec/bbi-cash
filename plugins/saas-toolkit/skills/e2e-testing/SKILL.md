---
name: e2e-testing
description: Write and run end-to-end tests for critical user flows (signup, login, checkout, core feature) with Playwright. Use when adding test coverage, protecting a flow from regressions, or reproducing a bug as a test. Pairs with agent-browser. Detects the test setup if one exists.
---

# E2E Testing

Unit tests check pieces; e2e tests check that the *flows your revenue depends on* still
work end to end. Cover the few flows that would hurt most if they broke.

## First: detect what's there

- `package.json` → existing test runner (`@playwright/test`, `cypress`, `vitest`,
  `jest`). If Playwright is present, use it; otherwise set it up:
  ```sh
  npm init playwright@latest
  ```
- Find `playwright.config.*` and existing `*.spec.ts`/`tests/` — match conventions.

## What to cover (priority order)

1. **Signup → login → logout** (auth)
2. **Checkout → access granted** (payments — the money path)
3. **The core feature** that defines the product
4. **Critical forms** (validation, error states, success)
5. Regression tests: every fixed bug gets a test so it can't return.

Don't aim for 100% e2e coverage — it's slow and brittle. Cover the critical few; use unit
tests for the rest.

## Good practices

- Select by **role/label/test-id**, not brittle CSS/text that designers change.
- Each test sets up and tears down its own data; tests must be independent and idempotent.
- Use Playwright's web-first assertions (auto-wait) instead of `sleep`.
- Reuse auth via `storageState` (log in once, reuse the session) — see `agent-browser`'s
  `login.mjs` pattern.
- Run headless in CI; use `--headed`/`--debug` locally to diagnose.

## Workflow

```sh
npx playwright test                 # run all
npx playwright test --ui            # interactive runner
npx playwright test path/to.spec.ts # one file
npx playwright show-report          # last results + traces
```

Wire it into `deploy-ci` so tests gate every deploy.

## Pitfalls

- `sleep`/fixed timeouts → flaky tests. Use auto-waiting assertions.
- Tests that depend on each other or on leftover data → random failures.
- Testing implementation details instead of user-visible behavior.
</content>
