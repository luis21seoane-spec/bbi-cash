#!/usr/bin/env node
// Open a URL in a real browser, capture a screenshot, and report title +
// console errors. Used by the `agent-browser` skill.
//
// Usage:
//   node snap.mjs <url> [outPath] [viewportWidth]
//
// Env:
//   HEADED=1   show the browser window instead of running headless
//   SLOWMO=ms  slow down actions by `ms` milliseconds (helps when HEADED)

import { chromium } from "playwright";

const url = process.argv[2];
const outPath = process.argv[3] ?? "/tmp/screenshot.png";
const width = Number(process.argv[4] ?? 1280);

if (!url) {
  console.error("usage: node snap.mjs <url> [outPath] [viewportWidth]");
  process.exit(1);
}

const browser = await chromium.launch({
  headless: process.env.HEADED !== "1",
  slowMo: Number(process.env.SLOWMO ?? 0),
});

const context = await browser.newContext({
  viewport: { width, height: Math.round((width * 9) / 16) || 720 },
});
const page = await context.newPage();

const consoleErrors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(msg.text());
});
page.on("pageerror", (err) => consoleErrors.push(String(err)));

try {
  const response = await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  const status = response ? response.status() : "n/a";
  const title = await page.title();
  await page.screenshot({ path: outPath, fullPage: true });

  console.log(`URL:        ${url}`);
  console.log(`HTTP status:${status}`);
  console.log(`Title:      ${title}`);
  console.log(`Screenshot: ${outPath} (viewport ${width}px wide)`);
  if (consoleErrors.length) {
    console.log(`Console errors (${consoleErrors.length}):`);
    for (const e of consoleErrors) console.log(`  - ${e}`);
  } else {
    console.log("Console errors: none");
  }
} catch (err) {
  console.error(`Failed to load ${url}: ${err.message}`);
  process.exitCode = 1;
} finally {
  await browser.close();
}
