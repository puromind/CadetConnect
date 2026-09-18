# CadetConnect security boundary

CadetConnect is currently a static front-end MVP. It contains fictional sample content and a demo sign-in form only; it does not transmit, validate, hash, or persist credentials.

Before production use:

- Use a trusted identity provider or a server-side auth service with MFA and verified academy membership.
- Hash passwords with Argon2id or bcrypt; never store plaintext passwords.
- Use HTTPS, secure and HttpOnly session cookies, CSRF protection, short session expiry, and server-side authorization checks.
- Validate and sanitize all post, message, profile, and marketplace input on the server.
- Add rate limiting, abuse detection, audit logs, moderation queues, and account lockout/recovery controls.
- Encrypt sensitive data at rest, minimize retention, and provide account deletion/export controls.
- Keep confidential operational information out of the product; add content scanning and an escalation process for reports.
- Store secrets only in environment-managed secret storage, never in static files or client-side JavaScript.

The UI's report, block, and verified-badge controls are presentation-only until connected to these backend controls.
