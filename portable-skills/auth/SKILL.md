---
name: auth
description: Implement or review authentication and authorization for a web app — signup, login, sessions, password reset, roles, and protected routes. Use when adding auth, fixing a login/session bug, adding roles/permissions, or hardening an existing auth flow. Detects the stack and existing auth library.
---

# Auth

Authentication (who you are) and authorization (what you can do) are where SaaS leak
the most security bugs. Get these right and prefer a battle-tested provider over rolling
your own crypto.

## First: detect what's there

- `package.json` → existing auth lib (`@clerk/*`, `next-auth`/`@auth/*`, `@supabase/*`,
  `lucia`, `better-auth`, `passport`). If one exists, extend it — don't add a second.
- Framework → where middleware/route protection lives.
- Env → existing auth keys/URLs.

If no auth exists, recommend a provider based on the stack:
- Fast to ship / managed UI → **Clerk** or **Supabase Auth**
- Self-hosted, full control → **Auth.js / better-auth / Lucia**

## Checklist

**Core flows**
- [ ] Signup, login, logout
- [ ] Email verification
- [ ] Password reset (expiring, single-use tokens)
- [ ] Session management (refresh, revoke, "log out everywhere")

**Authorization**
- [ ] Roles (e.g. `admin`, `member`) and/or permissions
- [ ] Protected routes via middleware — fail closed (deny by default)
- [ ] Server-side checks on every protected action, not just hidden UI
- [ ] Multi-tenant: scope every query by `org_id`/`tenant_id`

**Hardening**
- [ ] Passwords hashed with bcrypt/argon2 (never plaintext, never MD5/SHA1)
- [ ] HttpOnly, Secure, SameSite cookies
- [ ] Rate-limit login & reset endpoints (block brute force)
- [ ] No user-enumeration in error messages ("invalid credentials", not "no such user")
- [ ] CSRF protection for cookie-based sessions

## Pitfalls

- **Authorization only in the UI** is not security — always check on the server.
- Don't store secrets/JWTs in `localStorage` if you can use HttpOnly cookies.
- Don't log tokens, passwords, or reset links.
- Test the *negative* path: a logged-out user and a wrong-role user must be blocked.
  Verify with `agent-browser` / `e2e-testing`.
</content>
