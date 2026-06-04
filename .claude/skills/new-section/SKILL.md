---
name: new-section
description: Scaffold a brand-new section on the portfolio landing page (a new full-width block like Projects, Stack, Contact) following the project's existing conventions. Use when the user wants a NEW section that doesn't exist yet (e.g. "add a testimonials section", "add a blog/articles section"), not when editing content of an existing one.
---

# Adding a new page section

Sections follow one consistent pattern across `src/app/page.tsx` + `src/app/styles/Home.scss`. Replicate it exactly.

## Steps

1. **Define the data** as a typed `const ... = [...] as const;` near the other content arrays at the top of `page.tsx`. Mirror the structure of an existing array (e.g. `strengths` or `caseStudies`).

2. **Add the `<section>`** in the `Home()` JSX, placed where it should appear in the page flow (between existing sections). Use this skeleton:

   ```tsx
   <section className="section" id="your-id">
     <SectionHeading
       eyebrow="EYEBROW EM CAIXA ALTA"
       title="Título da seção em pt-BR"
       description="Descrição curta da seção."
     />

     <div className="your-grid">
       {yourData.map((item) => (
         <article className="panel-card your-card" key={item.title}>
           {/* ... */}
         </article>
       ))}
     </div>
   </section>
   ```

   - Reuse the shared `SectionHeading` component (already defined in the file).
   - Reuse existing building-block classes where possible: `panel-card`, `pill-row`, `pill`, `eyebrow`, `mini-label`, `compact-list`.

3. **Add nav link (optional):** if the section deserves top-nav presence, add an `<a href="#your-id">` inside `.topbar-nav` and keep label order sensible.

4. **Style it** in `Home.scss`. Add a `.your-grid` / `.your-card` block. Match conventions already in the file:
   - Spacing/typography use the CSS variables from `globals.scss` (`--text-secondary`, `--border-soft`, `--surface-primary`, etc.) — never hardcode raw colors that duplicate a token.
   - Grids are responsive with `repeat(auto-fit, minmax(...))` or explicit `@media` breakpoints; check the bottom of `Home.scss` for the existing mobile breakpoints (~720px / ~980px) and add matching overrides.

## After scaffolding

- `npx tsc --noEmit` to confirm types.
- Preview with the **preview-portfolio** skill and check the new section at desktop + mobile widths.
