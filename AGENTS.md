<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Overview & Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** JavaScript
- **Styling:** Tailwind CSS

# Folder Structure & Routing (Feature-Colocated)
- `/app`: Use dynamic routing (`app/product/[slug]` and `app/industry/[slug]`) rather than static type-based routes (avoid `app/products/magnus`).
- `/app/(feature)/[slug]/_components/`: Colocate highly specific one-off components for a given route/slug here rather than in the global `components/` folder. Keep global `components/` strictly for generic UI.
- `/app/(feature)/[slug]/_data/`: Store data files directly inside the feature route (e.g. `magnus.js`) instead of using large "god objects" in a global `/data` folder.
- `/components/layout`: Global layout components like Navbar, Footer.
- `/components/sections`: ONLY truly reusable page sections used across 3+ distinct features. If a section is specific to one or two products/industries, colocate it.
- `/components/ui`: Small reusable primitives (SmartImage, Button, Card, Pill).
- `/lib`: Utility functions.
- `/public`: Static assets.

# File Size & Bloat Limits
- **Component Files:** Maximum 250-300 lines. Split any component exceeding ~250 lines into smaller pieces.
- **Data/Config Files:** Maximum 400 lines. Avoid "god objects". Split large data files by entity/slug (e.g., `magnus.js`, `altus.js`).
- Colocate feature-specific code and avoid dumping logic into shared/ or utils/ unless truly shared across 3+ features.

# Component Naming Conventions
- Always use PascalCase for component files (e.g. `HeroBanner.jsx`).
- Use descriptive names; avoid generic ones like `Component1.jsx`.
- One component per file. Avoid huge multi-component files.

# SmartImage Placeholder System
We use a `<SmartImage />` component for all images to support a placeholder mode.
- **Rule:** NEVER use raw `<img>` or `next/image` directly in section components. Always use `<SmartImage />`.
- How it works: Controlled by `NEXT_PUBLIC_SHOW_IMAGE_PLACEHOLDERS`. If true, renders a placeholder displaying dimensions, alt, and description. If false, renders Next.js `<Image>`.
- Always provide a highly descriptive `description` prop for the placeholder mode that does NOT look like "dummy text".

# Patterns to Follow
- Add clear JSDoc comments on every component explaining what it renders and its expected props.
- Keep components small and single-purpose.
- Ensure Prettier formatting and ESLint rules are followed.

# Patterns to Avoid
- Giant 300+ line components.
- Raw HTML tags where a reusable UI component exists.
