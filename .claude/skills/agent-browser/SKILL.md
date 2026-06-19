---
name: agent-browser
description: Drive a real browser to open, inspect, screenshot, and verify the BBI Cash Astro site. Use when asked to view the site in a browser, take screenshots, check responsive/mobile layout, validate the EN/ES/PT landing pages, confirm a visual change works, or debug rendering/layout issues that tests can't catch.
---

# Agent Browser

Launch and drive a headless (or headed) browser with [Playwright](https://playwright.dev)
to look at the running site the way a user would: open pages, click, scroll, take
screenshots, and read the rendered DOM. Use this to *verify* visual/behavioral changes,
not just to assume they work.

## When to use

- "Open the site / show me the homepage / take a screenshot"
- "Check the mobile menu / hamburger / language dropdown works"
- "Does the Spanish (`/es`) or Portuguese (`/pt`) page render correctly?"
- "Verify my visual change before pushing"
- Debugging layout, console errors, broken images, or missing translations

## Prerequisites

Playwright is not a project dependency by default. Install it on demand (the cache is
ephemeral in remote sessions, so re-run if a fresh container reports it missing):

```sh
npm install -D playwright
npx playwright install chromium
```

## Workflow

1. **Start the dev server** in the background and wait until it is reachable:

   ```sh
   npm run dev &
   # Astro serves on http://localhost:4321 by default
   ```

   For a production-like check, prefer `npm run build && npm run preview`
   (preview serves on http://localhost:4321).

2. **Drive the browser** with the helper script. It accepts a URL and an output path
   for the screenshot, and prints the page title plus any console errors:

   ```sh
   node .claude/skills/agent-browser/scripts/snap.mjs http://localhost:4321/ /tmp/home.png
   node .claude/skills/agent-browser/scripts/snap.mjs http://localhost:4321/es/ /tmp/es.png
   node .claude/skills/agent-browser/scripts/snap.mjs http://localhost:4321/pt/ /tmp/pt.png
   ```

   Add a viewport width as a third arg to test responsive/mobile layout:

   ```sh
   node .claude/skills/agent-browser/scripts/snap.mjs http://localhost:4321/ /tmp/mobile.png 390
   ```

3. **Look at the result.** Read the screenshot with the Read tool and report what you
   actually see. If the screenshot is the deliverable for the user, send it with
   SendUserFile.

4. **Clean up.** Stop the dev server when finished.

## Routes in this project

| Route   | Language   |
| :------ | :--------- |
| `/`     | English    |
| `/es/`  | Spanish    |
| `/pt/`  | Portuguese |

## Notes

- The helper runs headless by default. For interactive debugging, set
  `HEADED=1` to watch the browser, and `SLOWMO=250` to slow actions down.
- Always report console errors surfaced by the script — they often explain a
  blank or half-rendered page.
- Don't claim a change works until you've opened the affected page and confirmed it.
</content>
</invoke>
