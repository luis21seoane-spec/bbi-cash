#!/usr/bin/env node
// Open a URL in a real browser, capture a full-page screenshot, and report
// title + HTTP status + console errors. Framework-agnostic.
//
// Usage:
//   node snap.mjs <url> [outPath] [viewportWidth]
//
// Env:
//   HEADED=1            show the browser window instead of headless
//   SLOWMO=ms           slow down actions by `ms` milliseconds
//   STORAGE=auth.json   load a saved auth session (see login.mjs)
//   VIEWPORT_H=900      override viewport height (default ~16:9 from width)

import { existsSync } from "node:fs";
import { chromium } from "playwright";

const url = process.argv[2];
const outPath = process.argv[3] ?? "/tmp/screenshot.png";
const width = Number(process.argv[4] ?? 1280);
const height = Number(process.env.VIEWPORT_H) || Math.round((width * 9) / 16) || 720;

if (!url) {
  console.error("usage: node snap.mjs <url> [outPath] [viewportWidth]");
  process.exit(1);
}

const browser = await chromium.launch({
  headless: process.env.HEADED !== "1",
  slowMo: Number(process.env.SLOWMO ?? 0),
});

const storage = process.env.STORAGE;
if (storage && !existsSync(storage)) {
  console.error(`STORAGE file not found: ${storage} (run login.mjs first)`);
}
const context = await browser.newContext({
  viewport: { width, height },
  ...(storage && existsSync(storage) ? { storageState: storage } : {}),
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

  console.log(`URL:         ${url}`);
  console.log(`HTTP status: ${status}`);
  console.log(`Title:       ${title}`);
  console.log(`Screenshot:  ${outPath} (viewport ${width}x${height})`);
  if (storage) console.log(`Auth:        ${storage}`);
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
