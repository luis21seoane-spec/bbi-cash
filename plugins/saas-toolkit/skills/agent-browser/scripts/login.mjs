#!/usr/bin/env node
// Open a login page in a real (headed) browser, let a human log in by hand,
// then save the authenticated session (cookies + localStorage) to a file so
// snap.mjs can reuse it via STORAGE=...
//
// Usage:
//   HEADED=1 node login.mjs <loginUrl> [outPath]
//
// After the browser opens and you finish logging in, return to the terminal
// and press Enter to save the session.

import { chromium } from "playwright";

const url = process.argv[2];
const outPath = process.argv[3] ?? "/tmp/auth.json";

if (!url) {
  console.error("usage: HEADED=1 node login.mjs <loginUrl> [outPath]");
  process.exit(1);
}

// Login is interactive, so force a visible window unless explicitly headless.
const headless = process.env.HEADED === "0";
const browser = await chromium.launch({ headless, slowMo: Number(process.env.SLOWMO ?? 0) });
const context = await browser.newContext();
const page = await context.newPage();

await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
console.log(`\nA browser window is open at: ${url}`);
console.log("Log in there, then come back here and press Enter to save the session...");

await new Promise((resolve) => {
  process.stdin.resume();
  process.stdin.once("data", resolve);
});

await context.storageState({ path: outPath });
console.log(`Saved authenticated session to: ${outPath}`);
console.log(`Reuse it with:  STORAGE=${outPath} node snap.mjs <url> <out.png>`);

await browser.close();
process.exit(0);
