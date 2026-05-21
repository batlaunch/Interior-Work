# Interior Work LLC — Website

Clean, mobile-responsive marketing site for Interior Work LLC (Charlottesville, VA).

## Tech

- React 19 + Vite 7 + TypeScript
- Tailwind CSS v4
- Lucide icons
- Contact form posts to **Formspree** (no server required)

## Local development

```bash
npm install
npm run dev
```

## Before you deploy: required edits

1. **Formspree endpoint** — in `src/routes/index.tsx`, replace
   `[FORMSPREE_ENDPOINT]` with your real URL, e.g.
   `https://formspree.io/f/abcd1234`.
2. **Real photos** — drop images into `src/assets/` and swap the
   placeholder tiles in the Gallery and About sections.
3. **Hours / days** — confirm the operating days and update the trust
   bar, About, Contact, and Footer copy.

## Deploying as a static site (S3 + CloudFront)

The repo ships with a ready-to-use static SPA build alongside the
Lovable preview setup. The static entry lives in:

- `static-build/index.html` — SPA HTML shell
- `static-build/vite.config.ts` — pure Vite config (no SSR/Cloudflare)
- `src/main.tsx` — mounts `<HomePage />` directly

Build it:

```bash
npm install
npm run build:static
```

Output lands in `./dist`.

**S3:** upload the contents of `dist/` to your bucket. Enable
"Static website hosting" — index document `index.html`, error
document `index.html`.

**CloudFront:** create a distribution with the S3 bucket as the
origin, set the default root object to `index.html`, and add a custom
error response (**404 → /index.html → 200**, same for 403) so the SPA
handles unknown paths. Invalidate `/*` after each upload.

## What's intentionally NOT in this project

- No backend, no database, no auth
- No Lovable / Supabase / third-party platform dependencies
- No SSR — everything renders client-side from static files
- No tracking scripts

## Contact form

The form in `src/routes/index.tsx` uses a standard `fetch()` POST to
Formspree. Sign up at https://formspree.io, create a form, and paste
the endpoint URL into the `FORMSPREE` constant near the top of the
file. No other wiring is required.

## Brand

- Electric blue `#1A6FE8` (primary)
- Lime green `#5ECC1B` (accent / CTAs)
- Ink black `#0A0A0A` (hero, footer)
- Typeface: Inter (loaded from Google Fonts)

All tokens are defined in `src/styles.css` under `:root`.