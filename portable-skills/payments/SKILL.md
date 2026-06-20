---
name: payments
description: Add or fix billing — subscriptions, plans, one-off charges, free trials, webhooks, and the customer portal (Stripe by default). Use when integrating payments, adding/changing plans, debugging webhooks or subscription state, or wiring billing to user access. Detects the stack and existing payment library.
---

# Payments

Billing is where "the customer paid but has no access" bugs live, almost always because
of mishandled **webhooks**. Treat the webhook as the source of truth for subscription
state, and make it idempotent.

## First: detect what's there

- `package.json` → `stripe`, `@stripe/stripe-js`, or another processor (Lemon Squeezy,
  Paddle). Extend the existing one.
- Find where webhooks are handled and where subscription state is stored in the DB.

## Architecture (the part that matters)

1. **Checkout**: create a Stripe Checkout Session (or Payment Element) for the chosen
   plan. Don't trust prices from the client — reference Stripe Price IDs server-side.
2. **Webhook = source of truth**: on `checkout.session.completed`,
   `customer.subscription.updated/deleted`, `invoice.paid/payment_failed`, update your DB.
3. **Access gating**: your app checks the DB subscription status, never calls Stripe on
   every request.
4. **Customer portal**: let users manage/cancel via Stripe's hosted portal.

## Checklist

- [ ] Plans/prices defined in Stripe, referenced by ID (not hardcoded amounts client-side)
- [ ] Webhook signature verified with the signing secret
- [ ] Webhook handler is **idempotent** (store processed event IDs; events can repeat)
- [ ] Subscription status persisted to DB and used for access control
- [ ] Free trial / grace period handled
- [ ] Failed payment → dunning / downgrade logic
- [ ] Customer portal link for self-service
- [ ] Webhook returns 2xx fast; do heavy work async if needed

## Testing

- Use the **Stripe CLI** to forward events locally: `stripe listen --forward-to <url>`
  and `stripe trigger checkout.session.completed`.
- Use test cards (`4242 4242 4242 4242`).
- Verify the full flow with `agent-browser`: signup → checkout → access granted.

## Pitfalls

- **Granting access from the client's success redirect** instead of the webhook → users
  who close the tab never get provisioned, and the redirect can be forged.
- Non-idempotent webhooks → double-provisioning or double-charging logic.
- Storing card data yourself — never; let Stripe handle PCI scope.
</content>
