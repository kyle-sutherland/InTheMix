# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

No test suite is configured.

## Architecture

**InTheMix** is a Next.js 16 / React 19 site for a professional bartending and hospitality consulting service, using the **App Router**.

### Routing

```
app/
  layout.jsx              ← root layout: Navbar, Footer, reCAPTCHA, Analytics
  page.jsx                ← Homepage
  about/page.jsx
  event-bartending/page.jsx
  consulting/page.jsx
  contact/page.jsx
  blog/page.jsx
  api/contact/route.js    ← POST handler: sends email via Nodemailer/Gmail OAuth2
```

### Layout & Navigation

- `app/layout.jsx` — root layout, server component; wraps all pages
- `components/navbar.jsx` — dark sticky top nav, client component (uses `useState` for mobile menu)
- `components/footer.jsx` — 4-column dark footer
- `components/recaptcha-provider.jsx` — client wrapper for `GoogleReCaptchaProvider`

### Styling

- **Tailwind 4** — CSS-first config in `styles/globals.css` using `@theme {}` (no `tailwind.config.js`)
- Custom CSS variables: `--color-cream`, `--color-accent` (#C17F4A amber), `--color-hover` (#007194 teal), `--color-dark`
- Fonts: Inter (body) + Allura (script headings) loaded via `@import` in globals.css
- Path aliases: `@components/*` and `@styles/*` (via `jsconfig.json`)

### Shared Components

- `components/buttons.jsx` — `LandingButton` (white outlined, used on hero sections) and `ActionButton` (dark filled, used in forms)
- `components/section-heading.jsx` — Allura script heading flanked by `<hr>` dividers
- `components/contact-form.jsx` — legacy general contact form with date picker (React Hook Form + Axios)
- `components/forms/event-form.jsx` — event bartending inquiry form (React Hook Form + Axios)
- `components/forms/consulting-form.jsx` — consulting inquiry form

### API Route (`app/api/contact/route.js`)

- `export const runtime = "nodejs"` required (googleapis stack broken on Node 25)
- Obtains Gmail OAuth2 access token via **direct fetch** to `https://oauth2.googleapis.com/token` (no googleapis package — removed due to Node 25 incompatibility with `buffer-equal-constant-time`)
- Passes `formType: "event" | "consulting" | "general"` in request body to route different email formats
- Nodemailer sends via Gmail SMTP with OAuth2

### Environment Variables

Required in `.env.local`:
- `CLIENT_ID`, `CLIENT_SECRET`, `REFRESH_TOKEN` — Google OAuth2 for Gmail
- `WEBMASTER_EMAIL` — Gmail sender address
- `RECIPIENT_EMAIL` — where form submissions are delivered
- `NEXT_PUBLIC_RECAPTCHA_KEY` — reCAPTCHA v3 site key
