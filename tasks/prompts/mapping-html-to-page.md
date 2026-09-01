# Task: Sync Missing Content + Create New Page

## Context
This is a Next.js website. There is an existing HTML file containing text content that needs to be reconciled with the current site — some sections/text from that HTML are missing from the live pages. Additionally, a new page needs to be created following the site's existing patterns.

## Step 1 — Discovery (do this first, report back before writing any code)
1. Read the source HTML file (ask me for the path if it's not in the repo).
2. Read through the existing Next.js page/component files relevant to this task, to understand current structure, section naming, and content organization.
3. Extract all text content blocks from the HTML file, organized by section.
4. Compare each extracted section/text block against what currently exists on the live page(s):
   - Mark sections that exist in the HTML but are **completely missing** from the site.
   - Mark individual text snippets that are missing even within sections that *do* exist (partial gaps).
5. Produce a short report (in chat, not code) listing:
   - Sections missing entirely → proposed new component/section name
   - Sections that exist but have missing text → exact text to be added and where
   - Any content you're unsure how to map — flag it, don't guess silently

**Do not write or edit any code until this report is reviewed and confirmed.**

## Step 2 — Implementation (only after Step 1 is approved)
1. For missing text in existing sections: insert it into the correct existing components, matching current copy style/tone.
2. For entirely missing sections: create new components mirroring the structure, naming conventions, and file organization of existing sections in this codebase (don't invent a new pattern).
3. Ensure **every** piece of text extracted from the HTML file ends up somewhere on the page — do a final pass to confirm nothing was dropped.

## Step 3 — Create the New Page
1. Find an existing, similar page in the codebase to use as the structural template.
2. Create the new page reusing the same layout, component structure, and file/routing conventions as that template.
3. **Design and colors must exactly match the current Next.js site** — reuse existing design tokens, Tailwind classes, and shared components. Do not introduce new colors, spacing scales, or styles.
4. Populate it with the relevant content (from the HTML file per Step 1's extraction).

## Rules
- Use your own editor tools (file edit/insert operations) for all changes — do **not** use shell scripts, `sed`, or find-and-replace scripts for any edit.
- Mirror existing code patterns exactly; don't refactor unrelated code.
- Before implementing, report your findings and proposed section/file mapping and wait for confirmation.
- After implementation, list every file you created or modified.