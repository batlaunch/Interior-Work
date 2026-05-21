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

## Deploying to AWS S3 + CloudFront (static export)

This repo is currently scaffolded on TanStack Start for Lovable's
preview. For a **pure static** deploy to S3/CloudFront, follow these
steps to convert it to a plain Vite SPA before building:

1. **Switch to a static SPA config.** Replace `vite.config.ts` with a
   minimal Vite config (no Cloudflare/TanStack Start plugins) and set
   `base: './'`:

   ```ts
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import path from "path";
   import tailwindcss from "@tailwindcss/vite";

   export default defineConfig({
     base: "./",
     plugins: [react(), tailwindcss()],
     resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
   });
   ```

2. **Add a SPA entry.** Create `index.html` at the project root and
   `src/main.tsx` that mounts the `HomePage` component directly (or
   wrap in `HashRouter` if you add more routes — **do not** use
   `BrowserRouter` for S3 hosting).

3. **Build:**

   ```bash
   npm install
   npm run build
   ```

   Output lands in `dist/`.

4. **S3:** upload the contents of `dist/` to your bucket. Enable
   "Static website hosting" — index document `index.html`, error
   document `index.html`.

5. **CloudFront:** create a distribution with the S3 bucket as the
   origin. Set the default root object to `index.html`. Add a custom
   error response: **404 → /index.html → 200** (and the same for 403)
   so client-side routing works on refresh.

6. Invalidate `/*` on CloudFront after each new upload.

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