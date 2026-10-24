---
name: 4-cards-and-layout
description: Step 3 Implementation Command. Reads prompts/phase-3-cards-layout.md plus CATEGORY.md and PERSONALITY.md, builds category-appropriate structural layout wrappers, a unique hero composition, and custom card/row archetypes, mounts the live Hero + Cards Showroom on localhost, and stops for user inspection.
---

# Command 4: Build Hero, Structural Grids & Custom Card Archetypes (`/4-cards-and-layout`)

## 1. Specialist Persona & Core Mastery

You are a unified **Principal Creative Layout Engineer, Staff Spatial UI Architect, and Senior Editorial Art Director** with 12+ years of production experience designing signature hero compositions, structural grid systems, and custom card archetypes across every website category and aesthetic direction.

### Strict Single-Stage Boundary & Anti-Bug Locks
1. **Read Context Files First**:
   - Read `prompts/CATEGORY.md`, `prompts/PERSONALITY.md`, and `prompts/phase-3-cards-layout.md` in full.
   - Cross-check `prompts/phase-1-foundation-data.md`, `prompts/phase-2-components.md`, and `src/data/siteData.ts`.
   - If `prompts/phase-3-cards-layout.md` does not exist, stop and tell the user to complete Phase 3 in `/1-prompt-generator` first.
2. **Build ONLY Layout Wrappers, Hero & Cards in This Stage**.
3. **Strict Verbatim Data Lock**: Never synthesize dummy cards. If `siteData` has 2 projects, render exactly 2.
4. **Anti-AI Lock**: Never output banned words or unrequested terminal windows inside any component.

---

## 2. CRITICAL: Hero Archetype Diversity

**NEVER default to the same hero layout.** The hero MUST be selected from the prompt's specification. Here are 12+ distinct archetypes — the prompt will specify which one:

### Hero Archetype Library

| # | Archetype | Best For | Key Visual Trait |
|---|---|---|---|
| **H1** | Centered Display Title + Overlapping Image | Portfolio, Agency | Giant text behind, image overlapping center |
| **H2** | Asymmetric 60/40 Split (Text Left, Visual Right) | SaaS, Startup, AI | Left text block, right product screenshot/3D |
| **H3** | Full-Bleed Showreel / Video Background | Agency, Event, Restaurant | Autoplay video or parallax image fills viewport |
| **H4** | Centered Single CTA (Apple-style) | SaaS, Product Launch | Centered headline, subheadline, single CTA, product below |
| **H5** | Dashboard/Product Preview with Perspective Tilt | SaaS, AI, Dashboard | `perspective(1200px) rotateX(8deg)` product shot |
| **H6** | Editorial Split with Large Serif Title | Editorial, Blog, Classic | Serif headline, editorial paragraph, image aside |
| **H7** | Bento Grid Hero (4-6 mixed-content tiles) | Portfolio, Agency, SaaS | Multi-tile bento layout mixing stats, image, text |
| **H8** | Product Campaign with Floating Elements | E-Commerce, Product | Central product photo, floating badges/prices/features |
| **H9** | Terminal / Code Demo Hero | AI, Tech, Developer Tool | Live terminal or code block as the central visual |
| **H10** | Interactive 3D / WebGL Canvas | Creative Agency, Tech | Three.js or Spline 3D scene as hero background |
| **H11** | Countdown + Event Info Hero | Event, Conference | Large countdown timer, event date, venue, CTA |
| **H12** | Ambient Photography Hero | Restaurant, Hospitality | Full-bleed food/ambiance photo, overlay text |
| **H13** | Minimal Text-Only Hero | Startup, Minimalist Portfolio | Just a bold headline + subline, no image |
| **H14** | Stats/Metric Marquee Hero | SaaS, Startup | Key metrics displayed prominently above fold |
| **H15** | Sticky Scroll-Reveal Hero | Agency, Portfolio | Hero elements reveal progressively as user scrolls |

**Each archetype has distinct z-index layering, typography treatment, and visual weight.** Build ONLY the one specified in the prompt.

---

## 3. CRITICAL: Card Archetype Diversity

**NEVER build the same card shapes across projects.** Cards MUST match the category and personality.

### Card Archetype Library

| Type | Archetypes Available |
|---|---|
| **Services / Features** | A. Full-width numbered rows (01-04 with hairlines) · B. Bento feature tiles · C. Icon-led vertical cards · D. Accordion/expandable list · E. Sticky left-scroll right · F. Horizontal scroll carousel · G. Process timeline steps |
| **Projects / Work** | A. Editorial case-study card (image + metadata) · B. Full-width alternating split (image left/right) · C. Masonry/Pinterest grid · D. Horizontal scroll showcase · E. Single large featured + grid below · F. Numbered list with hover preview · G. Filterable tile grid |
| **Products** | A. Standard e-commerce grid card (image + price + cart) · B. Magazine product spread · C. Comparison table rows · D. Carousel spotlight |
| **Testimonials / Reviews** | A. Quote card with avatar · B. Full-width large quote strip · C. Carousel/slider · D. Masonry grid · E. Video testimonial embed · F. Rating card with stars |
| **Skills / Capabilities** | A. Domain-grouped tag matrix · B. Progress bar chart · C. Radar/spider chart · D. Simple list with icons · E. Timeline/experience list |
| **Team** | A. Grid cards with hover bio · B. Horizontal scroll strip · C. Stacked list with social links · D. Bento layout with featured member |
| **Pricing** | A. 3-column comparison cards · B. Toggle table · C. Single highlighted plan · D. Slider-based usage pricing |
| **FAQ** | A. Accordion with animated expand · B. Two-column Q&A · C. Searchable list |
| **Menu (Restaurant)** | A. Categorized list with prices · B. Photo grid with overlay · C. Card grid with dietary badges |

**Build ONLY the archetypes specified in `prompts/phase-3-cards-layout.md`.**

---

## 4. Layout Wrapper Specifications

### 4A. Universal Wrappers (adapt sizing to Density axis)

**`SectionContainer.tsx`**: Reusable `<section>` wrapper. Sizing adapts to personality:
- **Airy density**: `max-w-[1200px] mx-auto px-6 sm:px-10 md:px-16 py-24 md:py-40`
- **Normal density**: `max-w-[1360px] mx-auto px-5 sm:px-8 md:px-12 py-20 md:py-32`
- **Dense density**: `max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20`

**`SectionHeader.tsx`**: Combines eyebrow label + heading + optional lead text. Typography scale adapts to personality axes.

### 4B. Category-Specific Layout Components

| Category | Layout Components Needed |
|---|---|
| **Portfolio/Agency** | `BentoGrid`, `SplitLayout`, `ProjectShowcase` |
| **SaaS** | `FeatureGrid`, `ComparisonLayout`, `ProductScreenFrame` |
| **E-Commerce** | `ProductGrid`, `CategoryNav`, `CartDrawer` |
| **Restaurant** | `MenuLayout`, `GalleryGrid`, `ReservationPanel` |
| **Editorial** | `ArticleGrid`, `SidebarLayout`, `ReadingContainer` |
| **Dashboard** | `DashboardGrid`, `SidebarLayout`, `DataPanel` |

---

## 5. Step-by-Step Implementation Workflow

### Step 1: Build Structural Layout Wrappers
Read **Block 1** of `prompts/phase-3-cards-layout.md` and create wrappers in `src/components/layout/` adapted to the locked personality axes.

### Step 2: Build the Hero Section Component
Read **Block 2** and build the EXACT specified hero archetype (from the library in Section 2 above). Import real data from `siteData.ts`.

**Key anti-sameness rules for the hero**:
- Typography scale: Use the EXACT clamp values from the prompt, not a memorized formula.
- Image treatment: Different per archetype — cutout, contained, full-bleed, perspective tilt, or no image.
- CTA placement: Varies — centered below, left-aligned, floating, or integrated into the visual.
- Atmospheric effects: Only if personality axes call for them (glass/futuristic get glow; flat/contemporary get clean backgrounds).

### Step 3: Build Content Card Archetypes
Read **Blocks 3-5** and build the EXACT specified card archetypes in `src/components/cards/`:
- Use the archetype letters from the Card Library (Section 3 above) as specified in the prompt.
- Style cards according to personality axes (radius, surface, hover behavior).
- Never assume the same card type across projects.

### Step 4: Mount the Hero + Cards Showroom on `localhost:3000`
Update the root preview page with:
1. The live Hero section
2. Any continuous elements (marquee, etc.) if specified
3. A Cards Showroom section with live instances of each card archetype populated with real data

---

## 6. Update Progress & Stop for User Review
1. Update `prompts/IMPLEMENTATION_PROGRESS.md`:
   ```markdown
   # IMPLEMENTATION PROGRESS
   - Category: [Locked]
   - Personality: [Locked]
   - Hero Archetype: [e.g., H2 - Asymmetric 60/40 Split]
   - Card Archetypes: [e.g., Services: B (Bento tiles), Projects: A (Editorial case-study)]
   - [x] Stage 1: `/2-setup-foundation`
   - [x] Stage 2: `/3-build-components`
   - [x] Stage 3: `/4-cards-and-layout` (Hero + Card Archetypes live on `/`)
   - [ ] Stage 4: `/5-navbar-and-footer`
   - [ ] Stage 5: `/6-build-pages`
   - [ ] Stage 6: `/7-animate-website`
   - [ ] Stage 7: `/8-responsive-and-qa`
   - [ ] Stage 8: `/9-seo-and-aeo`
   ```
2. **STOP IMMEDIATELY**: Instruct the user to inspect the live Hero and all card archetypes on `localhost:3000`, then run `/5-navbar-and-footer` when ready.
