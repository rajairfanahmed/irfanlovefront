# Technology Stack, Dependency Compatibility & Bundler Architecture

**Scope:** Technology Selection, Dependency Governance & Bundler Configuration  
**Owner:** `frontend-architect`  
**Load Condition:** Loaded during Step 2 of Stage 1 when choosing dependencies and bundlers  

---

## 1. Purpose & Problem Solved
AI generators frequently install unneeded, outdated, or conflicting packages (e.g. bundling Webpack configs into Next.js Turbopack, or installing GSAP and Lenis on simple high-density utility apps that never requested motion). This reference establishes strict technology selection discipline: using current stable versions and only installing dependencies explicitly required by the design brief.

---

## 2. When to Load This Reference
- Loaded when selecting packages, updating `package.json`, or configuring bundlers.
- Loaded when resolving dependency conflicts or peer dependency errors.

---

## 3. Inputs & Prerequisites
- Preflight audit from `references/project-audit.md`.
- Product requirements, performance constraints, and motion directives from `frontend/DESIGN_ENGINEERING_BRIEF.md`.

---

## 4. Current Stable Baseline Stack

When scaffolding a modern greenfield application:
1. **Core Framework:** Next.js 15 (App Router with async request APIs).
2. **Runtime & Language:** React 19, TypeScript 5 with `strict: true`.
3. **Styling Foundation:** Tailwind CSS v4 (using `@import "tailwindcss"` in `globals.css` without legacy `tailwind.config.js` bloat).
4. **Icons Engine:** `lucide-react` (clean, tree-shakeable SVG icons with native `strokeWidth` and `currentColor` support).
5. **Bundler & Build Tool:** Next.js Turbopack (`next dev --turbo` / `next build`).

---

## 5. Technology Selection Law: Zero Forced Dependencies

**Strict Anti-Bloat Mandate:**
The architect must NEVER blindly install heavy animation or utility libraries across all projects:
- **GSAP & ScrollTrigger:** Install ONLY if `DESIGN_ENGINEERING_BRIEF.md` explicitly calls for scroll-driven pinning, scrubbed timelines, or complex kinetic choreography.
- **Lenis Smooth Scroll:** Install ONLY if the brief prescribes continuous inertia smooth-scrolling for long-form narrative or portfolio experiences.
- **Three.js / React Three Fiber:** Install ONLY if the platform domain explicitly demands a 3D WebGL canvas or interactive spatial model.
- **Framer Motion:** Install ONLY if layout transition springs or exit animations are specified.

For high-density developer consoles, data dashboards, or minimalist utilities: pure CSS transitions and native browser APIs are superior, faster, and have zero bundle overhead.

---

## 6. Official Documentation & Version Compatibility Rules

Before adding any dependency, verify compatibility against Next.js 15 and React 19:
1. **React 19 Ref Changes:** Components receive `ref` directly as a prop in React 19. Do NOT use deprecated `forwardRef` wrappers on new components unless required by a third-party library interface.
2. **Next.js 15 Async Params:** Dynamic route parameters (`params` and `searchParams`) are asynchronous Promises in Next.js 15:
   ```typescript
   export default async function Page({
     params,
   }: {
     params: Promise<{ slug: string }>;
   }) {
     const { slug } = await params;
     return <div>{slug}</div>;
   }
   ```
3. **Peer Dependency Discipline:** Never run `npm install --force` or `--legacy-peer-deps` blindly. Resolve version conflicts cleanly by matching compatible semver ranges.

---

## 7. Bundler & Compiler Configuration

- **`next.config.ts`:**
  - Keep configuration clean and declarative.
  - Enable React strict mode: `reactStrictMode: true`.
  - Configure image optimization domains if remote images are used.
  - Prohibit deprecated Webpack plugins or loaders unless interfacing with legacy code.
- **`tsconfig.json`:**
  - Enforce modern path aliases: `"@/*": ["./src/*"]`.
  - Enable `"strict": true`, `"noUncheckedIndexedAccess": true`, and `"skipLibCheck": true`.

---

## 8. Output Artifact
- Configured `package.json` with lean, compatible dependencies.
- Configured `next.config.ts` and `tsconfig.json`.
- Documented stack rationale in `frontend/PLAN.md`.

---

## 9. Validation Criteria
- All installed packages are actively compatible with Next.js 15 and React 19.
- Zero unused heavy libraries installed.
- `package.json` scripts execute cleanly.

---

## 10. Downstream Dependencies
- Feeds `references/architecture-and-routing.md` to establish component boundaries.
- Feeds `references/design-system-foundation.md` for styling engine configuration.
