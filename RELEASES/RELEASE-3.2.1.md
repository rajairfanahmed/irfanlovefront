# Release 3.2.1: Unified 2-Skill Engine, Progressive 4-Batch Implementation & Automated Publishing

**Release Version:** `3.2.1`  
**Author:** Raja Irfan Ahmed  
**Status:** General Availability  
**License:** Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)  

---

## What Is New in Release 3.2.1

Release 3.2.1 completes the transition from fragmented multi-specialist pipelines to a streamlined, deterministic 2-Skill architecture paired with an authoritative documentation specialist:
1. **Skill 1 (`master-prompt-generator`)**: Progressive 4-phase product discovery, UX architecture, reference DNA synthesis, and locked `MASTER_PROMPT.md` compilation.
2. **Skill 2 (`master-implementer`)**: Progressive 4-batch frontend implementation engine that reads `MASTER_PROMPT.md` and builds the production codebase without ever substituting generic templates or skipping animations.
3. **Auxiliary Specialist (`github-readme-writer`)**: Daytona open-source framework documentation and launch copy specialist with zero em-dashes.
4. **Automated CI/CD Pipeline**: Instant synchronization with GitHub Packages (`@rajairfanahmed/irfanlovefront@3.2.1`) and Public npm (`irfanlovefront@3.2.1`) on every push to `main`.

---

### 1. Skill 1: Master Prompt Generator (`/master-prompt-generator`)

Operates as a unified discovery, research, and creative direction engine:
- **Phase 1 (Scope & Data)**: 29-category website taxonomy, project mode triage (Mode A New Build vs Mode B Existing Website), route architecture, and verbatim user copy/asset manifest.
- **Phase 2 (Brand, Theme & Type)**: 85 brand design systems in `design-refs/` (Awwwards, Linear, Stripe, Apple, Vercel, Framer, Robinsweb), custom color token tables, surface physics, and typography pairings.
- **Phase 3 (Nav, Hero & Layout)**: Specific navbar archetypes (Minimal Split Bar with `Menu [=]` pill, Floating Glass Island, Docked SaaS, Mega-Menu, E-Commerce), morphing hamburger curtain overlays, layered hero compositions, and structural grid math.
- **Phase 4 (Sections, Cards & Motion)**: Full-width numbered rows (`01-04`), radial glow cards, multi-step contact wizard, giant interactive footer watermark, and continuous infinite marquee loops.
- **Deliverable**: Compiles all requirements into a locked, zero-ambiguity `MASTER_PROMPT.md` blueprint.

---

### 2. Skill 2: Master Implementer (`/master-implementer`)

Translates `MASTER_PROMPT.md` into production-ready frontend code via a progressive 4-batch execution protocol:
- **Anti-Template Golden Rule**: `MASTER_PROMPT.md` is law. The implementer is strictly prohibited from substituting generic SaaS templates, flat 64px bars, or plain `scroll-behavior: smooth`.
- **Batch 1 (Foundation & Tokens)**: Tech stack inspection, Next.js / Vite scaffolding, font loading, `:root` CSS variables, `@keyframes marquee-left`, and Lenis smooth scroll initialization.
- **Batch 2 (Navigation & Hero)**: Desktop navbar variant, working animated hamburger overlay curtain with React state, layered hero section (`z-0` radial glow, `z-10` display text, `z-20` overlapping cutout portrait, `z-30` foreground CTA), and true infinite marquee strip.
- **Batch 3 (Sections, Cards & Footer)**: Middle sections in exact sequence, numbered service rows, radial glow cards, bento cells, multi-step contact progress wizard, and giant brand footer watermark with contrast at rest and hover illumination.
- **Batch 4 (Motion & QA Audit)**: Scroll-triggered reveals (`GSAP` / `Framer Motion`), responsive checks across `375px`, `768px`, and `1440px`, and terminal compilation check (`npm run build`).

---

### 3. Auxiliary Specialist: GitHub README Writer (`/github-readme-writer`)

Restored as an authoritative documentation specialist:
- Implements the Daytona 4,000-star open-source framework: Impactful Header, Visual Feast, Project Hygiene, and Contributor Covenant.
- Enforces strict zero-dash anti-slop rules with zero em-dashes (`U+2014`) and zero en-dashes (`U+2013`).

---

### 4. Automated CI/CD Publishing Pipeline

- **Automatic Trigger**: Any update to `package.json` pushed to `main` automatically fires `.github/workflows/publish.yml`.
- **Dual Registry Sync**:
  - Automatically scopes and publishes `@rajairfanahmed/irfanlovefront@3.2.1` to GitHub Packages using native repository tokens.
  - Automatically publishes `irfanlovefront@3.2.1` to Public npm (`npmjs.com`) using the configured `NPM_TOKEN` secret.

---

## Installation & Upgrade

To run Release 3.2.1 directly via npx:

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

# Windsurf (.windsurf/rules/ + .windsurfrules)
npx irfanlovefront --windsurf

# Install for all supported AI agents simultaneously
npx irfanlovefront --all
```
