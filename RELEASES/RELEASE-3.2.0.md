# Release 3.2.0: Project Triage Engine, Recursive Design References & Full-Site Layout Coverage

**Release Version:** `3.2.0`  
**Author:** Raja Irfan Ahmed  
**Status:** General Availability  
**License:** Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)  

---

## What Is New in Release 3.2.0

Release 3.2.0 delivers two major algorithmic breakthroughs to eliminate the two biggest points of failure in AI-driven frontend engineering:
1. **The Hero-Only Trap:** AI layout engineers historically created a hero section, got stuck, and declared the site complete, leaving secondary routes, footers, and inner sections blank.
2. **Superficial Design References:** Design agents read filenames or copied whole brand identities (such as Apple's store navigation) blindly onto inappropriate website categories without extracting concrete design decisions.

Release 3.2.0 permanently resolves both bottlenecks with a deterministic Project Triage Engine, a 4-Role Recursive Reference Selector, a strict Adopt/Adapt/Avoid Decision Matrix, a Full-Site Route & Section Coverage Matrix, and an automated GitHub Actions CI/CD pipeline.

---

### 1. Stage 0: Project Triage & 4-Role Reference Selector (`taste-design-engineer`)

The creative intake workflow now runs through a strict 3-stage protocol:

- **Stage 1: Project Mode & Category Triage:**
  - **Mode A (New Website):** Scaffolds concept, structure, visual language, and route hierarchy from scratch.
  - **Mode B (Improve Existing Website):** Audits active codebase, inspects existing components and routes, and formulates targeted upgrade strategy before design decisions.
  - **Category Taxonomy:** Classifies target into developer portfolio, SaaS platform, ecommerce, agency, fintech, healthcare, education, AI product, dashboard, or custom category. Never re-interrogates the user if the category was already stated.

- **Stage 2: Recursive `design-refs/` Deep Scan:**
  - Recursively scans the actual 85+ brand markdown files inside `.agents/skills/taste-design-engineer/design-refs/` instead of guessing from file names.
  - Selects 3 to 4 complementary reference files covering four distinct architectural roles:
    1. **Category Reference:** Industry-specific UX, information hierarchy, and user expectations.
    2. **Layout Reference:** Page composition, macro-section sequence, and density.
    3. **Visual Reference:** Color substrate, typography scale, visual mood, and art direction.
    4. **Interaction Reference:** Navigation state models, micro-interactions, and responsive behavior.
  - **Appropriateness Safeguards:** Forbids blind brand copying (e.g., copying Apple hardware store tiles onto a developer portfolio). If fewer than 3 genuinely relevant references exist, never forces fake or unrelated files.

- **Stage 3: Adopt, Adapt & Avoid Decision Matrix:**
  - Extracts exact file paths and line ranges from each chosen reference.
  - Generates a concrete decision matrix:
    - **Adopt:** Specific principles and token relationships to preserve verbatim.
    - **Adapt:** Patterns modified to match project context (e.g., adapting physical product cards to software project showcases).
    - **Avoid:** Brand-specific anti-patterns and navigation models explicitly forbidden for this project.
  - Encodes all findings directly into `DESIGN_ENGINEERING_BRIEF.md`.

---

### 2. Stage 2: Full-Site Multi-Route Layout Engine (`creative-layout-engineer`)

Release 3.2.0 re-engineers layout generation to build complete, multi-route applications rather than isolated hero sections:

- **Purged the Premature Stop Gate:** Removed the legacy rule that halted execution after a single page. The layout engineer now maintains continuous multi-route velocity across all required routes.
- **Full Page Inventory:**
  - For new sites, defines top-to-bottom section sequence across all primary and secondary routes (`/`, `/about`, `/projects`, `/contact`, `/pricing`).
  - For existing sites, audits every existing route to explicitly decide whether to preserve, improve, replace, or add sections.
- **Measurable Route & Section Coverage Matrix:**
  Enforces a completion gate inside `frontend/PLAN.md` before handoff to Stage 3:
  ```markdown
  | Route | Required Sections (Top-to-Bottom) | Layout Complete | Responsive Check | Status |
  | :--- | :--- | :--- | :--- | :--- |
  | / | Header Shell, Hero, Feature Grid, Social Proof, Footer | Yes | Pass (320px-1440px) | Done |
  | /projects | Header Shell, Filter Bar, Project Showcase, Case Study, Footer | Yes | Pass (320px-1440px) | Done |
  | /about | Header Shell, Founder Journey, Timeline, Values, Footer | Yes | Pass (320px-1440px) | Done |
  ```
- **Correction of Rigid Anti-Patterns:**
  - Centered H1 is treated as a potential template trap, not a universal ban. Contextually appropriate centered headers are permitted.
  - Asymmetric 60/40 splits and telemetry rails are treated as category-driven options, not mandatory defaults.
  - Defensive `overflow-x-hidden` hacks are replaced with true layout root-cause fixes.
  - Multi-page baseline consistency preserves brand unity while allowing structural variation across distinct page types.

---

### 3. Automated CI/CD Publishing Pipeline

Release 3.2.0 updates `.github/workflows/publish.yml`:
- **Trigger on Push to Main:** Automatically runs on every push to `main` when `package.json` changes.
- **GitHub Packages Automation:** Seamlessly scopes and publishes `@rajairfanahmed/irfanlovefront@3.2.0` to GitHub Packages using native repository tokens.
- **Graceful Public npm Registry Handling:** Automatically detects repository `NPM_TOKEN` secret to publish to public npm (`npmjs.com`) without failing builds when tokens are pending.

---

### 4. Zero-Dash Anti-Slop Invariant

Release 3.2.0 enforces strictly zero em-dash characters (U+2014) and zero en-dash characters (U+2013) across all skills, references, scripts, and documentation.

---

## Installation & Upgrade

To run Release 3.2.0 directly via npx:

```bash
npx irfanlovefront@latest
```

To install or upgrade globally via npm:

```bash
npm install -g irfanlovefront@latest
```

To install directly for specific AI coding tools:

```bash
# Claude Code (.claude/skills/ + CLAUDE.md)
npx irfanlovefront --claude

# Cursor (.cursor/rules/*.mdc)
npx irfanlovefront --cursor

# Google Antigravity / Gemini (.agents/skills/)
npx irfanlovefront --antigravity

# Install for all supported AI agents simultaneously
npx irfanlovefront --all
```
