---
name: edit-content
description: Edit the portfolio's textual content — projects, experience timeline, skills/stack, highlight stats, profile facts, or contact info. Use whenever the user wants to add, remove, reword, or reorder anything that shows up on the page (e.g. "add a new project", "update my CSN role", "change the WhatsApp number", "add Go to the stack").
---

# Editing portfolio content

This site is **data-driven**: almost everything visible comes from typed `const` arrays at the top of `src/app/page.tsx`. To change content, edit the array — do **not** touch the JSX rendering below it unless the layout itself must change.

## Where each part lives (all in `src/app/page.tsx`)

| User says… | Edit this array |
| --- | --- |
| Hero stat cards (3 small cards) | `highlightStats` |
| "Áreas de atuação" / strengths cards | `strengths` |
| A project / work / case study | `caseStudies` |
| Experience/education timeline | `timeline` |
| Profile facts (base, formação, idiomas…) | `profileFacts` |
| Stack / technologies | `stackGroups` |
| Contact channels (email, LinkedIn…) | `contactCards` |

Page-level text not in an array (hero headline, hero summary, section headings) is inline in the JSX — search for the visible Portuguese string and edit it in place.

## Rules

1. **Keep the exact object shape.** Every array uses `as const` and is mapped with a fixed set of keys. A new item must have **all** the same keys as its siblings, or TypeScript build fails. Copy an existing sibling as the template.
2. **Language is Portuguese (pt-BR).** Match tone and casing of neighbors (e.g. eyebrows are UPPERCASE).
3. **`key` stability:** items are keyed by a field value (`item.title`, `item.value`, etc.). Keep that field unique within the array.
4. **Links:** external `href`s use `target="_blank"` automatically when they `startsWith("http")` (see `contactCards`). Use full `https://` URLs.
5. **Icons** (`contactCards.icon`) point to files in `public/`. Reuse an existing SVG there or add a new one before referencing it.

## After editing

- Run a quick typecheck: `npx tsc --noEmit` (catches a broken object shape).
- If the user wants to see it, use the **preview-portfolio** skill.
