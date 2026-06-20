---
name: ui-components
description: Build consistent, accessible, professional-looking UI components and design-system patterns. Use when creating or refactoring UI (buttons, forms, modals, tables, layouts), establishing a design system, or making an app look polished. Detects the styling stack and reuses existing components.
---

# UI Components

A SaaS looks professional when its UI is consistent. Reuse before you create, and make
components accessible by default.

## First: detect what's there

- `package.json` → styling/UI stack: Tailwind, CSS modules, styled-components,
  shadcn/ui, Radix, Material UI, DaisyUI, etc.
- Existing `components/` folder and design tokens (colors, spacing, fonts) — **match
  them**. Don't introduce a competing UI library.
- Global stylesheet / theme config for tokens.

If starting fresh, a strong default is **Tailwind + shadcn/ui** (accessible Radix
primitives you own and can restyle).

## Principles

1. **Reuse first.** Search for an existing component before building a new one.
2. **Tokens, not magic values.** Colors, spacing, radius, typography come from the theme,
   not hardcoded hex/px scattered around.
3. **Accessible by default**: semantic HTML, labels tied to inputs, focus states, keyboard
   navigation, `aria-*` only where semantics aren't enough, sufficient color contrast.
4. **Responsive**: mobile-first; test breakpoints with `agent-browser`.
5. **States**: every component handles loading, empty, error, and disabled states.
6. **Composable**: small components combined, props for variants — not 12 near-duplicates.

## Component checklist

- [ ] Matches existing design tokens and patterns
- [ ] Keyboard accessible + visible focus ring
- [ ] Labels/`alt`/`aria` where needed; contrast ≥ 4.5:1 for text
- [ ] Loading / empty / error states
- [ ] Responsive across mobile/tablet/desktop
- [ ] No hardcoded colors/spacing outside the token system

## Pitfalls

- Mixing two UI libraries → inconsistent look and bloated bundle.
- `<div onClick>` instead of `<button>` → breaks keyboard & screen-reader users.
- Building a new variant when a prop on an existing component would do.
- Skipping the empty/error states (the app feels broken when data is missing).
</content>
