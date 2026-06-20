# Portable skills

Reusable, framework-agnostic Claude Code skills meant to be installed **globally**
(in your personal `~/.claude/skills/` directory) so they're available across all your
SaaS projects — not just this repo.

## agent-browser

Drives a real browser (Playwright) to open, screenshot, and verify any web app you're
developing. Works with Astro, Next.js, Vite, Remix, Rails, Django, etc. Supports
responsive viewports and sessions behind login.

### Install globally (available in every project)

```sh
mkdir -p ~/.claude/skills
cp -r portable-skills/agent-browser ~/.claude/skills/
```

That's it. Open Claude Code in any project and ask things like *"open the dashboard and
check the mobile layout"* — it will pick up the skill automatically. You can also invoke
it explicitly with `/agent-browser`.

### Or install for a single project (shared with your team via git)

```sh
mkdir -p .claude/skills
cp -r portable-skills/agent-browser .claude/skills/
```

### First run

```sh
npm install -D playwright
npx playwright install chromium
```

See `agent-browser/SKILL.md` for the full workflow (port autodetection, screenshots,
and auth via `login.mjs` + `STORAGE=`).
</content>
