# audit-toolkit

A team of Claude Code skills for **rigorous, standards-based, defensible audits** — built
so the work is traceable, evidence-backed, and reproducible (i.e. *not questionable*).
Output in Spanish by default.

## Skills included

| Skill | What it does | Standard |
| :--- | :--- | :--- |
| `auditoria-financiera` | Master audit methodology: planning, materiality, risk, sampling, substantive testing, evidence-backed findings | NIA/ISA (IAASB) |
| `control-interno` | Internal control evaluation & testing; deficiency classification | COSO 2013 |
| `conciliaciones` | Reconciliations & substantive checks (bank, AR/AP, cash, inventory…) and discrepancy classification | — |
| `deteccion-fraude` | Fraud risk & indicator testing (Benford, unusual journal entries, AML/cash red flags) | NIA/ISA 240 |
| `papeles-trabajo` | Working papers & audit trail — the documentation that makes the audit defensible | NIA/ISA 230 |

Pairs with `financieros`, `salud-negocio`, and `report-builder` (studies-toolkit).

## Install (via the marketplace)

```text
/plugin marketplace update seoane-tools
/plugin install audit-toolkit@seoane-tools
```

## ⚠️ Important limitation

These skills perform a **rigorous, evidence-based audit review** — useful as internal
audit, pre-audit, due diligence, or audit preparation. They **do not replace or issue the
legal/statutory audit opinion** that only a licensed auditor/CPA or authorized firm can
sign. They never fabricate figures; missing evidence is flagged as a scope limitation.
