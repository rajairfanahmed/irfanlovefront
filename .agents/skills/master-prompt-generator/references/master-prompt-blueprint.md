# Master Prompt Output Blueprint & Quality Gates

Read this file ONLY after completing discovery (or in Fast-Track Mode) when you are ready to write `MASTER_PROMPT.md`.

## 1. Anti-Skip Formatting Rules for `MASTER_PROMPT.md`
The downstream `.agents/skills/master-implementer` agent will read `MASTER_PROMPT.md` to build the entire frontend. To ensure the implementer reads 100% of your prompt without skipping a single requirement:
1. **Keep `MASTER_PROMPT.md` between 220 and 380 lines total.**
2. **No Essay Paragraphs**: Use dense bullet lists, exact CSS custom properties, layer z-index stacks, and concrete component recipes.
3. **Lock Every User Choice**: Never leave vague words like "modern navbar" or "nice animations". Write the exact chosen variant (e.g., `Navbar Archetype A: Minimal Split Bar with Brand left + Menu [=] pill right`).
4. **Include All Verbatim User Data**: Embed 100% of the user's actual name, bio, stats, services, projects, testimonials, and asset paths directly in Block 3 so the implementer never invents fake copy.

## 2. Exact 6-Block Structure for `MASTER_PROMPT.md`

Write `MASTER_PROMPT.md` in the root of the workspace using these exact 6 blocks:

```markdown
# MASTER IMPLEMENTATION PROMPT: [PROJECT / BRAND NAME]

## BLOCK 1: PROJECT OVERVIEW, MODE & ROUTE ARCHITECTURE
- **Website Category**: [Exact selected category]
- **Project Mode**: [New build / Improve existing / Redesign / etc.]
- **Preservation Rules** (if existing site): [Routes/components to keep untouched vs modify]
- **Tech & Motion Stack**: [e.g., Next.js App Router / React / Vite, Tailwind CSS, Lenis Smooth Scroll, GSAP + ScrollTrigger / Framer Motion, Lucide Icons]
- **Pages & Sitemap**:
  - [Route 1, e.g., `/` Single-page scroll with `#hero`, `#marquee`, `#about`, `#services`, `#work`, `#testimonials`, `#contact`]
  - [Additional routes if multi-page]

## BLOCK 2: ART DIRECTION, COLOR TOKENS & TYPOGRAPHY SYSTEM
- **Reference DNA & Art Direction**: [Selected references + exact extracted traits + general art direction]
- **CSS Color & Atmospheric Tokens (`:root`)**:
  - `--bg-canvas`: [Hex, e.g., `#000000`]
  - `--bg-surface`: [Hex, e.g., `#0D0D0F`]
  - `--bg-elevated`: [Hex, e.g., `#141418`]
  - `--text-primary`: [Hex, e.g., `#FFFFFF`]
  - `--text-secondary`: [Hex, e.g., `#A1A1AA`]
  - `--accent-primary`: [Hex, e.g., `#ED7A36`]
  - `--border-subtle`: [Value, e.g., `rgba(255, 255, 255, 0.1)`]
  - `--glow-atmosphere`: [Exact radial-gradient or spotlight CSS value]
- **Surface & Border Rules**: [Radius values, hairline rules, radial glow borders, glass blur, grain overlay]
- **Typography Scale & Font Loading**:
  - `--font-display`: [Font family, weights, uppercase/tracking rules, fluid `clamp()` sizes for Hero & H2]
  - `--font-sans`: [Font family, weights, body line-height and measure]
  - `--font-mono`: [Font family for indices `01-04`, badges, and tags]

## BLOCK 3: VERBATIM USER CONTENT, DATA & ASSET MANIFEST
- **Supplied Visual Assets** (Verified paths): [List exact user files, e.g., `/hero-portrait.png`, project images]
- **Suggested / Placeholder Assets** (To scaffold cleanly): [Explicitly list any missing images/icons]
- **Identity & Hero Copy**: [Exact Name, Display Title, Role, Bio, Location, CTA labels & URLs]
- **Marquee / Metrics Data**: [Exact ticker items and stat numbers]
- **Services Data (`01` to `0N`)**: [Exact numbered service titles, descriptions, and deliverables]
- **Projects / Products Data**: [Exact titles, categories, descriptions, tech tags, links, image paths]
- **Testimonials Data**: [Exact client quotes, names, roles, ratings]
- **Contact & Social Data**: [Exact email, phone, social URLs, and multi-step form options]

## BLOCK 4: NAVIGATION, HAMBURGER OVERLAY & HERO BLUEPRINT
- **Desktop Navbar Specification**:
  - Selected Archetype, exact height, sticky/backdrop behavior, left/center/right elements, and CTA pill styling.
- **Hamburger Trigger & Menu Overlay Specification**:
  - Trigger button design (`Menu [=]` pill or icon), morph state (`Close [X]`), overlay reveal physics, and internal link layout (`01` to `05`).
- **Hero Section Layering & Layout Math**:
  - Exact Z-index layer stack (e.g., `z-0` radial glow -> `z-10` giant condensed display text -> `z-20` center overlapping cutout portrait -> `z-30` floating badges/CTAs), desktop grid vs mobile stacking order.

## BLOCK 5: SECTION-BY-SECTION LAYOUT, CARDS, CONTACT & FOOTER SPECS
- **Section 1 - Infinite Marquee Strip**: [Exact CSS `@keyframes marquee` loop rules, duplicated track for seamless loop, typography, borders]
- **Section 2 - About / Metrics**: [Exact layout grid and stat card specs]
- **Section 3 - Services**: [Exact row/card archetype, e.g., full-width `01-04` interactive rows with hover state]
- **Section 4 - Featured Work / Products**: [Exact grid columns, card aspect ratio, hover zoom, badges]
- **Section 5 - Testimonials**: [Exact card anatomy, e.g., dark card with warm orange radial border glow]
- **Section 6 - Contact Section**: [Exact form architecture, e.g., 3-step interactive wizard with progress bar]
- **Section 7 - Footer & Giant Watermark**:
  - Top bar links/socials + Giant viewport-spanning brand watermark (`clamp(4rem, 15vw, 16rem)`).
  - **MANDATORY CONTRAST & HOVER RULE**: Watermark must have visible base contrast against the footer background (never invisible black-on-black) AND smooth interactive hover transition (`hover:text-[var(--accent-primary)]` with glow).

## BLOCK 6: MANDATORY ANIMATION CHOREOGRAPHY & QA CHECKLIST
- **Batch 1 (Foundation)**: Fonts loaded, CSS variables defined, Lenis smooth scroll initialized.
- **Batch 2 (Nav & Hero)**: Navbar + working Hamburger overlay + Hero split-text & portrait reveal + True Infinite Marquee loop.
- **Batch 3 (Sections & Interactive States)**: Scroll-triggered reveals for Services, Projects, Testimonials, Multi-step Contact state machine, and Interactive Footer Watermark hover.
- **Batch 4 (Responsive & Anti-Bug Audit)**:
  - [ ] Mobile `375px`, Tablet `768px`, Desktop `1440px` verified with zero horizontal overflow.
  - [ ] Marquee moves continuously via CSS/GSAP animation (NOT a static flex bar).
  - [ ] Navbar matches the exact chosen archetype (NOT a generic SaaS header).
  - [ ] Footer giant watermark is visible at rest and glows/changes color on hover.
```

## 3. Pre-Completion Quality Gates
Before presenting `MASTER_PROMPT.md` to the user, verify:
1. Did you preserve every explicit user choice without substituting unchosen defaults (like glassmorphism, 60/40 hero, or CLI telemetry boxes)?
2. Did you distinguish actual supplied project assets from suggested placeholders?
3. Are there zero typographic em-dashes or en-dashes in the generated file?
