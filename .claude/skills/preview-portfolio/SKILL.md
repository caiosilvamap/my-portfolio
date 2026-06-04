---
name: preview-portfolio
description: Run, build, or verify the portfolio locally. Use when the user wants to start the dev server, see a change in the browser, check that the site still builds, or before deploying (e.g. "run it", "start the dev server", "does it build?", "preview my change").
---

# Running & verifying the portfolio

Next.js 13 (App Router) project. Node **24.x** is required (`engines` in package.json). Commands run from the project root.

## Dev server (live preview)

```bash
npm run dev
```

Serves on http://localhost:3000 with hot reload. Run it in the **background** so the session stays interactive, then tell the user the URL. To confirm it's up without a browser:

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

`200` means the page rendered.

## Production build (CI / pre-deploy check)

```bash
npm run build
```

This is the source of truth for "is it broken?" — it runs the full type check and Next.js compilation, the same as the Vercel deploy. A green build is what the Vercel pipeline needs.

## Lint / types only (fast)

```bash
npx tsc --noEmit   # type check only
npm run lint       # next lint (eslint)
```

## Notes

- The site is a single static landing page; there's no API or DB to start.
- If `npm run dev`/`build` fails on Node version, confirm Node 24 is active (`node -v`).
- Deploy is handled by **Vercel** (push to `master`); a passing local `npm run build` is the gate before pushing.
