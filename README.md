# CadetConnect

CadetConnect is a responsive front-end MVP for a private social-commerce and community platform for Nigeria Police Academy cadets.

It is designed around everyday academy community life: keeping up with peers, finding useful items, joining interest groups, and having respectful conversations. The sample content is fictional and intentionally avoids confidential operational information.

## What's included

- Feed with announcements, entertainment/community posts, verified profile badges, likes, comments, and sharing affordances
- Chats area with sample conversations and a message composer
- Marketplace with Nigerian naira pricing, images, categories, seller badges, filters, and search
- Communities area with Study Circle, Fitness & Wellness, Creative Corner, and Alumni Connect
- Responsive desktop and mobile layouts with a mobile navigation drawer
- Demo sign-in modal with email/password, show-password control, and Google, Instagram, and Apple OAuth placeholders
- Report and moderation affordances for community safety
- `SECURITY.md` with the requirements for a production authentication and security implementation

## Run locally

This MVP is a dependency-light static site. No build step is required.

1. Clone the repository:

   ```bash
   git clone https://github.com/puromind/CadetConnect.git
   cd CadetConnect
   ```

2. Open `index.html` in a browser.

On Windows, you can double-click `index.html` or run:

```powershell
Start-Process .\index.html
```

The app also works with any static file server if you prefer:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Important security boundary

This repository is a front-end prototype. The sign-in form and social provider buttons are demo UI only:

- No credentials are sent to a server.
- No users, sessions, messages, listings, or reports are persisted.
- Google, Instagram, and Apple buttons are placeholders until real OAuth integrations are configured.
- Verified badges and moderation controls are visual affordances, not security controls.
- Do not enter real passwords or confidential academy information.

Before production use, add server-side authentication, verified academy membership, MFA, secure session cookies, authorization checks, input validation, rate limiting, moderation workflows, audit logs, encryption, and privacy controls. See [`SECURITY.md`](SECURITY.md).

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | App structure and sample content |
| `styles.css` | Responsive visual system and layouts |
| `app.js` | Navigation and demo interactions |
| `PRODUCT.md` | Product context and durable constraints |
| `SECURITY.md` | Production security boundary and implementation checklist |

## Content and privacy

Use CadetConnect for safe, generic community examples. Do not publish operational schedules, restricted locations, personal records, security procedures, or other confidential information.
