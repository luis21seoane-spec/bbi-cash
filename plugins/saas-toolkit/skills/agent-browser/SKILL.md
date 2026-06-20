---
name: agent-browser
description: Drive a real browser to open, inspect, screenshot, and verify the web app you are developing. Works with any stack (Astro, Next.js, Vite, Remix, Rails, Django, etc.). Use when asked to view the app in a browser, take screenshots, check responsive/mobile layout, verify a visual change works, test a flow behind login, or debug rendering/layout/console issues that unit tests can't catch.
---

# Agent Browser

Launch and drive a headless (or headed) browser with [Playwright](https://playwright.dev)
to look at the running app the way a user would: open pages, click, scroll, screenshot,
and read the rendered DOM. Use it to *verify* visual/behavioral changes — don't assume
they work, open the page and confirm.

This skill is **framework-agnostic**. The only thing that changes per project is the
command to start the dev server and the port it listens on.

## When to use

- "Open the app / show me the homepage / take a screenshot"
- "Check the mobile / responsive layout"
- "Verify my visual change before pushing"
- "Test the page behind login / the dashboard"
- Debugging layout, console errors, broken images, hydration/render problems

## Prerequisites

Install Playwright on demand (once per machine; re-run in fresh/ephemeral containers):

```sh
npm install -D playwright      # or: pnpm add -D playwright / yarn add -D playwright
npx playwright install chromium
```

## Workflow

### 1. Start the dev server (and learn its port)

Use whatever this project uses, in the background:

| Stack | Command | Default port |
| :--- | :--- | :--- |
| Astro | `npm run dev` | 4321 |
| Next.js | `npm run dev` | 3000 |
| Vite / React / Vue | `npm run dev` | 5173 |
| Remix | `npm run dev` | 3000 |
| Rails | `bin/rails server` | 3000 |
| Django | `python manage.py runserver` | 8000 |
| Other | check `package.json` scripts / framework docs | — |

```sh
npm run dev &
```

Don't hard-code the port — read it from the dev server's startup output, or detect a
listening local port:

```sh
# Linux/macOS: list local HTTP-ish ports that are listening
ss -ltnp 2>/dev/null | grep -E ':(3000|4321|5173|8000|8080)' || lsof -iTCP -sTCP:LISTEN -P -n | grep -E 'node|ruby|python'
```

### 2. Drive the browser

`snap.mjs` takes a URL, an output path, and an optional viewport width. It prints the
page title, HTTP status, and any console errors:

```sh
node ~/.claude/skills/agent-browser/scripts/snap.mjs http://localhost:3000/ /tmp/home.png
node ~/.claude/skills/agent-browser/scripts/snap.mjs http://localhost:3000/ /tmp/mobile.png 390
```

### 3. Pages behind login (auth)

Log in once interactively and reuse the saved session for all later snapshots:

```sh
# Opens a real browser window; log in by hand, then press Enter in the terminal.
# Saves cookies + localStorage to the given file.
HEADED=1 node ~/.claude/skills/agent-browser/scripts/login.mjs http://localhost:3000/login /tmp/auth.json

# Reuse that session (no login needed):
STORAGE=/tmp/auth.json node ~/.claude/skills/agent-browser/scripts/snap.mjs http://localhost:3000/dashboard /tmp/dash.png
```

### 4. Look at the result and report

Read the screenshot with the Read tool and report what you actually see. If the
screenshot is the deliverable for the user, send it with SendUserFile. Always surface
any console errors — they usually explain a blank or half-rendered page.

### 5. Clean up

Stop the dev server when finished.

## Env flags

- `HEADED=1` — show the browser window (needed for interactive login, useful to debug)
- `SLOWMO=250` — slow actions by N ms (pairs well with HEADED)
- `STORAGE=/path/auth.json` — load a saved auth session into the snapshot
- `VIEWPORT_H=900` — override viewport height (default derives 16:9 from width)

## Notes

- Headless by default. CI-friendly.
- For a production-like check, build first (`npm run build && npm run preview` or your
  framework's equivalent) instead of the dev server.
- Don't claim a change works until you've opened the affected page and confirmed it.
</content>
