# Phase 3: Hero Architecture, Structural Layout Grids & Custom Card Archetypes

Read this file ONLY when executing **Phase 3** of `/1-prompt-generator` (after `prompts/phase-2-components.md` has been written and recorded in `prompts/PROGRESS.md`).

Your goal in Phase 3 is to:
1. Check if the user's reference design (PDF/screenshots/URL) or earlier answers already define the Hero layout, grid structure, or card designs. Confirm any known items as `Locked from Context`.
2. Ask the Phase 3 questions below with selectable options + `[Custom User Input]` + `[AI Recommended]`.
3. **Immediately after the user replies to Phase 3**, write the complete file `prompts/phase-3-cards-layout.md` using the exact blueprint in Section 3 below, update `prompts/PROGRESS.md` to `Last Completed Phase: Phase 3 | Next Phase: Phase 4`, and then load `references/phase-4-navbar-footer.md` to present Phase 4 questions.

## 1. Phase 3 Discovery Questions (Hero, Structural Grids & Cards)

### Q1. Hero Section Architecture & Z-Index Layering
Never default to a generic 60/40 split with a fake CLI/System box. Ask the user to select their exact Hero architecture:
- `A)` **Layered Giant Display Title + Center Overlapping Cutout Portrait (`robinsweb.net` Style)**:
  - `z-0`: Centered atmospheric radial glow (`var(--glow-atmosphere)`).
  - `z-10`: Full-width condensed uppercase display headline (`clamp(4.2rem, 15.5vw, 15rem)`) spanning the background.
  - `z-20`: High-resolution cutout portrait image (`object-contain`) centered and overlapping the lower half of the giant background text.
  - `z-30`: Foreground left/right floating intro copy, availability badge, and primary CTA button, followed by the Infinite Marquee strip at the bottom edge.
- `B)` **Asymmetric 60/40 Editorial Split**: Left 60% display headline, human lead copy, dual CTAs, and key metrics; Right 40% framed portrait photography, real product preview, or abstract visual artwork (strictly NO fake terminal/telemetry boxes unless explicitly requested).
- `C)` **Centered High-Impact SaaS Headline + 3D Tilted Interface Mockup**: Centered eyebrow badge, display headline, subheadline, dual CTAs, and a perspective-tilted (`perspective(1200px) rotateX(8deg)`) glassmorphic dashboard/product mockup.
- `D)` **Full-Bleed Cinematic Video / Showreel / Interactive Canvas Hero**: `100vh` visual backdrop with bottom-left anchored oversized display typography and scroll indicator.
- `E)` **E-Commerce Editorial Campaign Hero**: Full-height split lookbook photography + collection headline + featured product callout + `Shop Now` CTA.
- `F)` **Bento Showcase Hero**: Display headline paired directly with an asymmetric 4-to-5 cell Bento grid displaying real project highlights and metrics.
- `G)` **Swiss Poster / Typography-Led Hero**: Exposed `1px` structural grid lines, dramatic scale contrast, coordinate labels, and zero decorative clutter.
- `H) [Keep Existing Hero]`: Preserve current project hero layout.
- `I) [Custom User Input]`: Describe your exact hero layering, image placement, text alignment, and foreground elements.
- `J) [AI Recommended]`: Let AI select the optimal hero architecture for your category and reference.

### Q2. Structural Page Grid & Section Layout Wrappers
Ask which structural layout patterns should govern section containers (`src/components/layout/`):
1. Asymmetric composition | 2. Editorial grids | 3. Bento grids (`12-col` asymmetric spans) | 4. Split layouts (sticky left section title + scrolling right cards/rows) | 5. Full-bleed imagery | 6. Large whitespace (`clamp(5rem, 10vw, 9rem)` vertical rhythm) | 7. Dense data-rich layouts | 8. Overlapping elements (`z-index` depth) | 9. Sticky composition | 10. Horizontal storytelling | 11. Layered composition | 12. Full-screen immersive sections | 13. Modular systems | 14. Strong typographic composition | 15. Conventional structure with refined execution | 16. Unconventional original composition
- `17) [Custom User Input]`: Specify exact container max-width (e.g., `1360px` or `1440px`), column count, gap math, and section dividers.
- `18) [AI Recommended]`: Let AI define the structural grid wrappers for your sections.

### Q3. Services / Features / Disciplines Card or Row Archetype
Ask how Services or Core Features should be structured (`src/components/cards/ServiceCard.tsx`):
- `A)` **Full-Width Numbered Interactive Rows (`01` - `04`, `robinsweb.net` Style)**: Exposed top/bottom `1px` hairlines (`border-y border-[var(--border-subtle)]`), monospace/condensed index (`01`), bold display title (`--font-display`), human description, deliverable pills, and smooth hover row highlight + `-45deg` arrow button rotation.
- `B)` **Asymmetric Bento Feature Cards**: `12-column` grid (`md:col-span-7` + `md:col-span-5`) with elevated surface, subtle border illumination, and visual preview graphic inside each card.
- `C)` **3-Column Architectural Spec Cards**: Equal-height cards (`rounded-[var(--radius-card)]`) with top index/icon row, bold title, concise description, and bottom tag pills.
- `D)` **Sticky Stacking Cards**: Full-width cards (`sticky top-24`, `top-28`, `top-32`) that pin and stack cleanly as the user scrolls down.
- `E) [Custom User Input]`: Describe your exact Services/Features card or row layout and hover state.
- `F) [AI Recommended]`: Let AI select the best archetype for your category.

### Q4. Projects / Case Studies / Products Card Archetype
Ask how Portfolio Projects, Case Studies, or Store Products should be designed (`src/components/cards/ProjectCard.tsx`):
- `A)` **Editorial Case-Study Showcase Cards (2-Col or Featured Grid)**: Large aspect-ratio project image (`aspect-[16/10]`), smooth image zoom (`group-hover:scale-105 duration-700`), project index (`01`), category badge, bold title, concise human summary, tech pills, and live/GitHub links (strictly NO fake `$ npx` terminal windows inside project cards unless explicitly requested).
- `B)` **Alternating Full-Width Split Showcase Cards**: Large horizontal showcase cards where odd items place the project screenshot on the left and story/tags/CTAs on the right, and even items flip.
- `C)` **E-Commerce Product Cards**: `aspect-[3/4]` or `aspect-square` image container with secondary hover image crossfade, top badge (`NEW` / `SALE`), slide-up `Quick Add` button, title, color swatches, and price.
- `D)` **Interactive Hover-Reveal List + Floating Image Preview**: Minimal full-width project rows that reveal a floating project screenshot following the cursor on hover.
- `E) [Custom User Input]`: Describe your exact Project or Product card anatomy, aspect ratio, and hover behavior.
- `F) [AI Recommended]`: Let AI design the optimal showcase card for your content.

### Q5. Testimonials, Credentials / Skills & Supporting Card Archetypes
Ask how Testimonials, Education/Credentials, Skill Groups, or Pricing cards should be styled (`src/components/cards/`):
- `A)` **Atmospheric Radial Glow Cards (`robinsweb.net` Style)**: Dark/elevated surface cards (`bg-[var(--bg-surface)]`) featuring a warm radial spotlight gradient (`radial-gradient`) along the top or bottom border, star rating row in `--accent-primary`, client quote, and author footer.
- `B)` **Clean Domain-Grouped Bento / Matrix Cards**: Structured cards for Skills, Education, Certifications, or Metrics with `1px` subtle borders, verified dates/issuers, and hover border accent illumination.
- `C)` **Frosted Glass Floating Cards**: `backdrop-blur-xl` translucent cards over atmospheric background gradients.
- `D) [Custom User Input]`: Describe your exact Testimonial, Skill, Credential, or Pricing card style.
- `E) [AI Recommended]`: Let AI match supporting cards to your design system.

## 2. Immediate Action After User Answers Phase 3
As soon as the user answers Phase 3 (or asks you to auto-decide):
1. Write `prompts/phase-3-cards-layout.md` using the exact 6-Block template in Section 3 below (190 to 260 lines of complete specifications).
2. Update `prompts/PROGRESS.md` with:
   - `Last Completed Phase: Phase 3 (prompts/phase-3-cards-layout.md)`
   - `Last Written Line Count: [Exact line count]`
   - `Next Phase to Execute: Phase 4 (references/phase-4-navbar-footer.md)`
3. Read `references/phase-4-navbar-footer.md` and present Phase 4 questions to the user.

## 3. Exact Blueprint to Write Into `prompts/phase-3-cards-layout.md`

When writing `prompts/phase-3-cards-layout.md`, include all 6 blocks below with 100% concrete specifications (zero placeholders):

```markdown
# PHASE 3 PROMPT: HERO ARCHITECTURE, STRUCTURAL GRIDS & CUSTOM CARD ARCHETYPES
**Target Command**: `/4-cards-and-layout`
**Required Prerequisites**: Read `prompts/phase-1-foundation-data.md` and `prompts/phase-2-components.md` first. Import atomic UI primitives from `src/components/ui/` and real data from `src/data/siteData.ts`.

## BLOCK 1: STRUCTURAL LAYOUT WRAPPERS (`src/components/layout/`)
- **`SectionContainer.tsx`**:
  - Max-width: [e.g., `max-w-[1360px] mx-auto px-6 md:px-12`]
  - Vertical spacing: [e.g., `py-20 md:py-32` or `clamp(5rem, 10vw, 9rem)`]
  - Optional structural hairlines or background atmospheric glow props.
- **`SectionHeader.tsx`**:
  - Combines `SectionEyebrow` (`01 // LABEL`), `--font-display` H2 heading, and optional right-aligned human lead paragraph or action link.
- **`BentoGrid.tsx` / `SplitLayout.tsx`**:
  - [Exact 12-column grid math, sticky left column behavior, and mobile stacking rules]

## BLOCK 2: HERO SECTION COMPONENT (`src/components/layout/HeroSection.tsx`)
- **Selected Hero Archetype**: [Exact chosen archetype, e.g., Archetype A: Layered Giant Display Title + Center Overlapping Cutout Portrait]
- **Exact Z-Index & DOM Layering**:
  - Layer 1 (`z-0`): [Background canvas + exact radial glow positioning]
  - Layer 2 (`z-10`): [Giant display text or split headline specs, font family, clamp size, tracking]
  - Layer 3 (`z-20`): [Cutout portrait `/hero-portrait.png` or visual preview specs, exact width/margin overlap, aspect ratio]
  - Layer 4 (`z-30`): [Foreground bio copy, `StatusBadge`, primary/secondary `Button` components from `src/components/ui/`]
- **Strict Anti-Slop Lock**: Never render unrequested fake CLI boxes (`$ npx ...`) or `"System Architecture Overview"` telemetry cards in the Hero.

## BLOCK 3: SERVICES / FEATURES CARD OR ROW COMPONENT (`src/components/cards/ServiceCard.tsx`)
- **Selected Archetype**: [e.g., Full-Width Numbered Interactive Row `01-04` or Bento Card]
- **Exact DOM Anatomy & Styling**: [Index number styling, title font/scale, description measure, `TechPill` tags, border hairlines, and hover transition]

## BLOCK 4: PROJECTS / CASE STUDIES / PRODUCTS CARD COMPONENT (`src/components/cards/ProjectCard.tsx`)
- **Selected Archetype**: [e.g., Editorial Case-Study Showcase Card or Alternating Split Card]
- **Exact DOM Anatomy & Styling**:
  - Image container aspect ratio, border radius, real image path from `siteData.ts` (or clean visual mockup), and `group-hover:scale-105` zoom.
  - Metadata layout: Index badge, category pill, project title, natural human description, tech stack chips, and live/repo action buttons.
  - Never insert fake terminal session boxes inside project cards unless explicitly specified in `siteData.ts`.

## BLOCK 5: TESTIMONIALS, CREDENTIALS & SUPPORTING CARDS (`src/components/cards/`)
- **`TestimonialCard.tsx`**: [Exact surface styling, top/bottom radial spotlight glow gradient `var(--border-accent)`, star rating, quote typography, and author row]
- **`CredentialCard.tsx` / `SkillGroupCard.tsx`**: [Exact card layout for Education, Certifications, and categorized Skill groups from `siteData.ts`]

## BLOCK 6: MANDATORY VISUAL CARDS & HERO PREVIEW UPDATE ON `/` (`localhost:3000`)
When `/4-cards-and-layout` finishes creating these components in `src/components/layout/` and `src/components/cards/`, it MUST update `src/app/page.tsx` (`localhost:3000`) so the user can visually inspect:
1. The complete **HeroSection** + **InfiniteMarquee** at the top of the page.
2. Below the Hero, a **"Phase 3: Cards & Layout Showroom"** container displaying 1 live rendered `ServiceCard` row/card, 1 live `ProjectCard`, 1 live `TestimonialCard` (with radial glow), and 1 `SkillGroupCard` populated from `siteData.ts`, and then STOP.
```

## 4. Phase 3 Validation Checklist (Before Moving to Phase 4)
Before writing `prompts/phase-3-cards-layout.md`, verify:
- [ ] Hero archetype is fully specified with exact z-index layers, font sizes, image paths, and foreground elements
- [ ] Structural layout wrappers include exact max-width, padding, and vertical rhythm values
- [ ] ServiceCard archetype includes exact index styling, title font, description measure, and hover transition
- [ ] ProjectCard archetype includes exact image aspect ratio, zoom behavior, metadata layout, and anti-slop lock
- [ ] TestimonialCard includes exact surface styling, radial glow gradient, star rating, and quote typography
- [ ] Every component file path is an exact path (`src/components/cards/ServiceCard.tsx`, not `[card]`)
- [ ] All CSS variable references match tokens from `prompts/phase-1-foundation-data.md`
- [ ] The Visual Cards & Hero Preview Update spec for Block 6 is complete
- [ ] Zero banned AI words appear anywhere in the file
- [ ] Zero typographic em-dashes or en-dashes exist
- [ ] Line count is between 190 and 260 lines
- [ ] `prompts/PROGRESS.md` update instructions are correct
