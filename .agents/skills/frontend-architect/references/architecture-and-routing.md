# Architecture, Component Boundaries & Routing Infrastructure

**Scope:** Directory Scaffolding, App Router Conventions, Server Components & Data Flow  
**Owner:** `frontend-architect`  
**Load Condition:** Loaded during Step 2 of Stage 1 to scaffold project directory and routes  

---

## 1. Purpose & Problem Solved
Unstructured web applications end up with scattered files, mixed client/server boundaries, and messy imports. This reference governs the folder organization, routing conventions, server component boundaries, and state flow for the entire application.

---

## 2. When to Load This Reference
- Loaded when scaffolding the directory structure and root layout.
- Loaded when creating canonical route skeletons based on the master brief.

---

## 3. Inputs & Prerequisites
- Confirmed canonical routes list from `frontend/DESIGN_ENGINEERING_BRIEF.md` (Section 4).
- Technology stack from `references/stack-and-compatibility.md`.

---

## 4. Directory Structure Standard

### Greenfield Quarantine Law (`frontend/`)
When building a new application, all source code, configurations, and public assets must reside strictly inside a dedicated `frontend/` folder:

```text
frontend/
├── public/                      <-- Static assets, icons, manifest
├── src/
│   ├── app/                     <-- Next.js 15 App Router
│   │   ├── layout.tsx           <-- Root layout with substrate token injection
│   │   ├── page.tsx             <-- Landing page entry
│   │   ├── globals.css          <-- Tailwind v4 & CSS variable substrate
│   │   ├── icon.tsx             <-- Dynamic SVG favicon
│   │   ├── not-found.tsx        <-- Branded 404 boundary
│   │   └── error.tsx            <-- Resilient error boundary
│   ├── components/
│   │   ├── ui/                  <-- Atomic primitives (BrandLogo, buttons, cards)
│   │   ├── layout/              <-- App shell (Navbar, Footer, Drawer)
│   │   └── sections/            <-- Page-specific macro-sections
│   ├── lib/                     <-- Shared utilities, math, cn helper
│   └── types/                   <-- Shared TypeScript interfaces
├── next.config.ts
├── package.json
├── tsconfig.json
└── PLAN.md                      <-- Architecture state tracker
```

For existing website refactoring: Respect the repository's active root structure without forcing nested sub-directories.

---

## 5. Server vs Client Component Architecture

Next.js 15 App Router uses React Server Components (RSC) by default:

### Server Components (Default)
- **Use For:** Root layouts, static marketing sections, data fetching, metadata generation, and non-interactive copy.
- **Benefits:** Zero client bundle weight, instant hydration, secure data fetching.

### Client Components (`'use client'`)
- **Use For:** Interactive primitives, GSAP timelines, Framer Motion springs, stateful form inputs, mobile drawer toggles, and command palettes.
- **Placement Law (Push to the Leaves):** Never mark an entire page or root layout with `'use client'`. Keep the page a Server Component and import small, isolated Client Components at the interactive leaves of the DOM tree.

---

## 6. Rendering Strategy Alignment

Match the rendering strategy to the route type specified in the brief:
1. **Static Site Generation (SSG):** Default for marketing landing pages, case studies, and documentation (prerendered at build time for sub-millisecond TTFB).
2. **Server-Side Rendering (SSR):** For authenticated user dashboards, real-time search, or dynamic telemetry.
3. **Incremental Static Regeneration (ISR):** For dynamic catalogs or blogs that update periodically (`revalidate = 3600`).
4. **Client-Side Hydration:** For stateful interactive widgets.

---

## 7. Canonical Route Skeleton Generation

Before Stage 2 begins, the architect must generate routing skeletons for all canonical routes defined in `DESIGN_ENGINEERING_BRIEF.md`:
- Create placeholder `page.tsx` files for each route (e.g. `/about/page.tsx`, `/features/page.tsx`, `/pricing/page.tsx`).
- Each skeleton exports a valid Server Component with complete Next.js `Metadata` and a structural container ready for `creative-layout-engineer`.

---

## 8. Output Artifact
- Scaffolds complete directory tree inside `frontend/src/`.
- Implements `frontend/src/app/layout.tsx` and route skeleton directories.
- Populates `frontend/src/lib/utils.ts` with standard `cn()` class merger.

---

## 9. Validation Criteria
- Zero `'use client'` directives placed on root `layout.tsx`.
- All canonical routes defined in the brief exist as valid `page.tsx` files.
- Folder structure strictly quarantined inside `frontend/`.

---

## 10. Downstream Dependencies
- Feeds `references/design-system-foundation.md` for `globals.css` styling injection.
- Feeds `creative-layout-engineer` with empty route skeletons ready for layout craft.
