---
name: seo-landing
description: Build landing pages that convert and are technically SEO-sound — metadata, Open Graph, structured data, sitemap, performance, and clear conversion copy/CTAs. Use when creating or improving a landing/marketing page, fixing SEO, or boosting conversion. Detects the stack.
---

# SEO & Landing Pages

A landing page has two jobs: **get found** (SEO) and **convert** (copy + CTA). This skill
covers both, technically and structurally.

## First: detect what's there

- Framework → how metadata/head is set (Astro `<head>`, Next `metadata`/`<Head>`, etc.).
- Existing pages, design tokens, i18n setup (e.g. EN/ES/PT) — match them.
- Sitemap/robots integration available for the framework.

## Technical SEO checklist

- [ ] Unique `<title>` (≤60 chars) and meta `description` (≤160) per page
- [ ] One `<h1>` per page; logical heading hierarchy
- [ ] **Open Graph** + Twitter card tags (title, description, image) for nice link previews
- [ ] **Structured data** (schema.org JSON-LD: Organization, Product, FAQ, etc.)
- [ ] `sitemap.xml` + `robots.txt`
- [ ] Canonical URLs; `hreflang` for multilingual sites
- [ ] Semantic HTML, descriptive `alt` on images
- [ ] Fast load (Core Web Vitals) — optimize/lazy-load images, minimal JS; verify with
      `a11y-perf` and `agent-browser`
- [ ] Mobile-responsive (most traffic is mobile)

## Conversion checklist

- [ ] Clear value proposition above the fold ("what + for whom + why now")
- [ ] One primary CTA, repeated; remove competing distractions
- [ ] Social proof (logos, testimonials, numbers)
- [ ] Benefits over features; scannable sections
- [ ] Friction-free forms (ask only what's needed)
- [ ] Trust signals (security, guarantees, contact)

## Workflow

1. Confirm the page's single goal (signup? demo? purchase?).
2. Draft structure: hero → proof → benefits → how it works → CTA → FAQ → footer.
3. Add metadata, OG, and JSON-LD.
4. Verify rendering, mobile layout, and link previews with `agent-browser`; check perf.

## Pitfalls

- Multiple `<h1>`s or missing meta description → weaker ranking.
- Heavy hero images / unoptimized media → slow LCP, lost ranking and visitors.
- Vague headline that doesn't say what the product does.
- Too many CTAs competing → none get clicked.
</content>
