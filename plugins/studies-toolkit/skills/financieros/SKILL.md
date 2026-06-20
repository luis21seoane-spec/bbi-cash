---
name: financieros
description: Financial analysis for SaaS and studies — SaaS metrics (MRR, ARR, churn, CAC, LTV, runway), valuation (DCF, multiples), unit economics, and company/market analysis. Use when modeling a business's financial health, building projections, valuing a company, or analyzing markets. Produces deliverables in the user's language (default Spanish).
---

# Financieros (Financial Analysis)

Two uses: understand the health of **your own** SaaS/business, and build **financial
features or studies** inside your products. Be rigorous: state assumptions, show the math,
and never invent numbers — if data is missing, ask or mark it clearly as an estimate.

## Output language

Default to **Spanish** for explanations and reports unless the user writes in another
language. Keep metric names recognizable (MRR, churn, CAC…).

## Data sources

- If a financial-data MCP server is available (e.g. FMP — market data, statements, prices,
  DCF), use it for real figures. Confirm the ticker/company first.
- Otherwise use numbers the user provides, or clearly labeled estimates. Never fabricate.

## SaaS metrics (the core health check)

| Metric | Formula | Why it matters |
| :--- | :--- | :--- |
| MRR / ARR | sum of monthly recurring revenue (×12 for ARR) | Top-line recurring revenue |
| Churn (rev/logo) | lost MRR ÷ starting MRR; lost customers ÷ starting | Retention; the silent killer |
| NRR | (start + expansion − contraction − churn) ÷ start | >100% = grows without new sales |
| CAC | sales+marketing spend ÷ new customers | Cost to acquire |
| LTV | ARPA × gross margin ÷ churn rate | Value of a customer |
| LTV:CAC | LTV ÷ CAC | ≥3 healthy; <1 unsustainable |
| CAC payback | CAC ÷ (ARPA × gross margin) | Months to recover CAC; <12 good |
| Burn / Runway | net cash burn/mo; cash ÷ burn | Months of life left |
| Gross margin | (rev − COGS) ÷ rev | SaaS target ~70–85% |

## Valuation & projections

- **DCF**: project free cash flows, discount at WACC, add terminal value. State every
  assumption (growth, margins, discount rate) and run a sensitivity (best/base/worst).
- **Multiples**: EV/Revenue, EV/EBITDA, P/E vs comparable companies.
- **Projections**: build from drivers (customers, ARPA, churn), not arbitrary growth %.

## Workflow

1. Clarify the goal: health check, projection, valuation, or market analysis?
2. Gather/confirm the inputs (data source, period, currency).
3. Compute with explicit formulas; show assumptions in a table.
4. Run best/base/worst scenarios for anything forward-looking.
5. Summarize findings + risks; if it's a study, hand off to `report-builder`.

## Pitfalls

- Mixing MRR with one-off revenue, or bookings with recognized revenue.
- LTV with no margin applied (overstates value).
- Single-point forecasts with no sensitivity — always show a range.
- Presenting estimates as facts. Label assumptions.
</content>
