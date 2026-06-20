---
name: report-builder
description: Turn analysis, data, and research into a polished, presentable report or study — structured Markdown, HTML, or PDF with sections, tables, charts, and citations. Use when you need to package findings into a professional document or deliverable. Output in the user's language (default Spanish).
---

# Report Builder

Take raw analysis (from `financieros`, `censos-estadisticas`, `deep-research`, etc.) and
produce a clear, credible, well-structured document the reader can act on.

## Output language

Default to **Spanish** unless the user writes in another language.

## Structure (adapt to the goal)

1. **Title + date + author/scope**
2. **Executive summary** — the conclusion and key numbers up front (1–2 paragraphs)
3. **Context / objective** — what question this answers and why
4. **Methodology / sources** — data used, period, assumptions (builds trust)
5. **Findings** — the analysis, with tables and charts; one idea per section
6. **Risks / limitations** — be honest about uncertainty
7. **Recommendations / next steps** — actionable
8. **Appendix / references** — full citations and raw detail

## Principles

- **Conclusion first.** Busy readers should get the answer from the summary alone.
- **Show the evidence.** Every claim ties to data or a cited source.
- **Cite sources** with name + date; mark estimates as estimates.
- **Visuals earn their place** — a chart only if it's clearer than text.
- **Scannable**: headings, short paragraphs, tables over walls of text.

## Output formats

- **Markdown** — default, version-controllable, easy to share.
- **HTML** — for styled, self-contained reports (inline CSS, embedded charts).
- **PDF** — when a fixed deliverable is needed. Generate from Markdown/HTML, e.g.:
  ```sh
  # via pandoc (if installed)
  pandoc report.md -o report.pdf
  # or render an HTML file to PDF with a headless browser (see agent-browser)
  ```
- **Charts**: generate images (e.g. a small script with a plotting lib) and embed them,
  or use Markdown tables for simple data.

## Workflow

1. Confirm audience (exec, investor, internal, client) and format (MD/HTML/PDF).
2. Gather the analysis/data and the sources.
3. Draft with the structure above; lead with the executive summary.
4. Add tables/charts and citations; state limitations honestly.
5. Render to the requested format and deliver; for PDFs, verify the rendered file.

## Pitfalls

- Burying the conclusion at the end.
- Charts/tables with no source or unclear units.
- Overstating certainty; omitting limitations.
- A 20-page report when a 1-page summary would do — match length to the decision.
</content>
