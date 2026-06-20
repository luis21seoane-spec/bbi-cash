# studies-toolkit

A team of Claude Code skills for **studies and reports** — analysis and deliverables, in
your language (default Spanish).

## Skills included

| Skill | What it does |
| :--- | :--- |
| `financieros` | Financial analysis: SaaS metrics (MRR/ARR/churn/CAC/LTV/runway), valuation (DCF/multiples), projections, market/company analysis |
| `salud-negocio` | Business-health monitoring: efficiency ratios, trend charts, and an early-warning semáforo that detects deterioration (rising costs, margin compression, shrinking runway) |
| `censos-estadisticas` | Source, clean, and analyze public/statistical data; descriptive stats and visualizations; region-aware |
| `legal-comercial` | Draft/review ToS, Privacy Policy, GDPR/compliance, basic contracts (not legal advice) |
| `report-builder` | Turn analysis into a polished report/study (Markdown, HTML, PDF) with sources |

Pairs with Claude Code's built-in `deep-research` skill for multi-source, fact-checked
research.

## Install (via the marketplace)

```text
/plugin install studies-toolkit@seoane-tools
```

If you already added the marketplace, refresh it first:

```text
/plugin marketplace update seoane-tools
```

## Notes

- `financieros` uses a financial-data MCP server (e.g. FMP) if one is available; otherwise
  it works from data you provide. It never fabricates numbers.
- `legal-comercial` produces drafts/guidance, **not legal advice** — have a lawyer review
  before publishing.
</content>
