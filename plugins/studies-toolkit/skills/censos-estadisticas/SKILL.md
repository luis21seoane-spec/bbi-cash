---
name: censos-estadisticas
description: Source, clean, and analyze public/statistical data — censuses, demographics, surveys, official indicators — and produce descriptive statistics and visualizations. Use for market sizing, segmentation, demographic studies, or feeding a product with real data. Region-aware. Output in the user's language (default Spanish).
---

# Censos y Estadísticas (Census & Statistics)

Turn public and survey data into defensible insight: how big is the market, who is in it,
where they are, and how confident we can be. Always cite the source and date, and respect
the limits of the data.

## Output language

Default to **Spanish** unless the user writes in another language.

## First: scope it

- **Region/country?** Sources differ. Confirm before pulling data.
- **Question?** Market size, segmentation, trend, correlation, forecast?
- **Granularity?** Country / state / city / zip — and which year.

## Official sources by region (starting points)

- **US**: U.S. Census Bureau (data.census.gov, ACS), BLS, FRED (economics).
- **Latin America**: each national statistics institute (INEGI MX, DANE CO, INDEC AR,
  IBGE BR, INE in several countries), plus CEPAL/ECLAC and World Bank.
- **Spain**: INE.
- **Global**: World Bank, UN Data, OECD, Eurostat.

Prefer primary/official sources over blogs. If a data MCP/web tool is available, use it;
otherwise guide the user to the dataset and work with what they provide. Never invent
figures.

## Analysis workflow

1. **Acquire** the dataset (note source, year, methodology, sample size).
2. **Clean**: handle missing values, units, encodings, deduplicate; document every change.
3. **Describe**: counts, %, mean/median, distribution, dispersion; segment by relevant
   dimensions (age, income, geography…).
4. **Relate** (if asked): cross-tabs, correlation — and state that correlation ≠ causation.
5. **Quantify uncertainty**: sample size, margin of error / confidence interval for survey
   data; don't over-claim from small samples.
6. **Visualize**: the right chart for the question (bar for categories, line for time,
   map for geography, histogram for distribution).
7. **Hand off** to `report-builder` for the written study.

## Pitfalls

- Comparing years/regions with different methodologies as if equal.
- Confusing absolute counts with rates/percentages.
- Reading causation into correlation.
- Ignoring margin of error on survey data.
- Outdated data presented as current — always show the year.
</content>
