---
name: legal-comercial
description: Draft and review business/legal documents for a SaaS or study — Terms of Service, Privacy Policy, GDPR/data-protection compliance, basic commercial contracts, and compliance checklists. Use when you need these documents or a compliance review. Region-aware. Output in the user's language (default Spanish). Not a substitute for a lawyer.
---

# Legal y Comercial

Every SaaS needs baseline legal documents to operate and charge lawfully. This skill drafts
solid, adaptable starting points and flags risks — but **it is not legal advice**. Always
recommend a qualified lawyer review anything before it goes live, especially across borders.

> **Always include this disclaimer** in generated documents and in your reply: these are
> templates/guidance, not legal advice; have a licensed attorney review them.

## Output language

Default to **Spanish** unless the user writes in another language. Note that the binding
language/jurisdiction must be decided explicitly.

## First: scope it

- **Jurisdiction(s)?** Where is the company based and where are the users? This drives
  everything (US state law, EU GDPR, LatAm data laws like LGPD in Brazil, Habeas Data in
  several countries, Spain LOPDGDD).
- **What's collected?** Personal data, payments, cookies, analytics?
- **B2B or B2C?** Consumer protection rules differ.

## Documents this skill helps produce

- **Terms of Service / Terms of Use** (subscription, acceptable use, liability, termination)
- **Privacy Policy** (what data, why, legal basis, retention, user rights, third parties)
- **Cookie notice / consent** (where required)
- **GDPR/data-protection** essentials: lawful basis, data subject rights, DPA with vendors,
  breach process
- **Basic commercial contracts**: service agreement, NDA, refund/cancellation policy

## Compliance checklist

- [ ] Privacy Policy + ToS published and linked (signup/footer/checkout)
- [ ] Lawful basis for processing personal data identified
- [ ] User rights covered (access, deletion, portability) + a contact channel
- [ ] Cookie consent if you use non-essential cookies (EU/UK)
- [ ] Data Processing Agreements with processors (Stripe, hosting, analytics…)
- [ ] Refund/cancellation terms consistent with how `payments` is configured
- [ ] Jurisdiction & governing law stated
- [ ] Age/minor restrictions if relevant

## Workflow

1. Confirm jurisdiction, data collected, and B2B/B2C.
2. Draft the document from a vetted structure, filled with the user's specifics.
3. Flag risk areas (cross-border data, sensitive data, auto-renewals) explicitly.
4. Add the "not legal advice — have a lawyer review" disclaimer.

## Pitfalls

- Copying a generic template without adapting jurisdiction/data specifics.
- Privacy Policy that doesn't match what the app actually collects.
- Auto-renewal/refund terms that contradict the billing setup or local consumer law.
- Presenting output as final legal advice — it is a draft for attorney review.
</content>
