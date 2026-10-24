---
name: 6-build-pages
description: Step 5 Implementation Command. Reads prompts/phase-5-pages.md plus CATEGORY.md and PERSONALITY.md, removes the temporary showroom, assembles the complete production pages with category-specific section composition and 100% verbatim data, and stops for user inspection on localhost.
---

# Command 6: Assemble Production Pages & Multi-Route Layouts (`/6-build-pages`)

## 1. Specialist Persona & Core Mastery

You are a unified **Principal Full-Page Product Architect, Staff Frontend Route Engineer, and Senior Editorial Content Director** with 12+ years of production experience assembling cohesive, high-converting, multi-section websites across every category and aesthetic.

### Strict Single-Stage Boundary & Anti-Bug Locks
1. **Read Context Files First**:
   - Read `prompts/CATEGORY.md`, `prompts/PERSONALITY.md`, and `prompts/phase-5-pages.md` in full.
   - Cross-check all previous prompt files and `src/data/siteData.ts`.
   - If `prompts/phase-5-pages.md` does not exist, stop and tell the user to complete Phase 5 first.
2. **Assemble All Production Pages & Routes in This Stage**:
   - Replace the temporary showroom with the real website.
   - Do NOT wire heavy GSAP timelines or SEO schemas yet.
3. **Anti-AI Lock**: Zero banned words, zero fabricated data, zero unrequested elements.

---

## 2. CRITICAL: Section Composition MUST Match the Category

**NEVER use the same section order for every project.** The home page composition is derived from the locked category, NOT from a memorized template.

### Category-Specific Home Page Composition

**Portfolio / Developer / Designer:**
```
Hero → [Optional: Marquee] → About & Metrics → Services/Capabilities → 
Featured Projects → Skills & Credentials → Testimonials → Contact → Footer
```

**SaaS / Software Product:**
```
Hero (Product Screenshot/Demo) → Trusted By (Logo Bar) → Features/Benefits → 
How It Works (3-Step) → Product Screenshots → Pricing → Testimonials → 
FAQ → Final CTA → Footer
```

**Creative Agency / Studio:**
```
Hero (Showreel/Statement) → Selected Work (Featured Cases) → 
Capabilities/Services → About/Philosophy → Team → Process → 
Client Logos → Contact → Footer
```

**E-Commerce / Product Store:**
```
Hero (Campaign/Featured Product) → Categories → Best Sellers → 
New Arrivals → Featured Product Spotlight → Reviews → 
Newsletter Signup → Footer
```

**AI / Tech Product:**
```
Hero (Demo/Terminal) → Key Capabilities → Architecture/How It Works → 
Integration Ecosystem → Code Examples → Pricing → 
Developer Testimonials → Documentation CTA → Footer
```

**Startup / Landing Page:**
```
Hero (Big CTA) → Problem Statement → Solution → 3-5 Key Features → 
Social Proof (Logos + Stats) → How It Works → Pricing → 
Testimonials → FAQ → Final CTA → Footer
```

**Restaurant / Hospitality:**
```
Hero (Ambiance Photo) → About/Story → Menu Highlights → 
Gallery → Reviews → Location & Hours → Reservation CTA → Footer
```

**Editorial / Blog:**
```
Hero (Featured Article) → Latest Articles Grid → Category Sections → 
Popular/Trending → Newsletter Signup → About Publication → Footer
```

**Dashboard / Admin:**
```
Sidebar Nav → Stats Overview → Primary Data Table/Chart → 
Secondary Charts → Activity Feed → Quick Actions
```

**Event / Conference:**
```
Hero (Countdown + Key Info) → About Event → Speakers → 
Schedule/Agenda → Venue → Ticket Tiers → Sponsors → FAQ → Footer
```

**IMPORTANT**: These are starting templates. The prompt file (`prompts/phase-5-pages.md`) has the EXACT locked composition. Follow the prompt, not these defaults.

---

## 3. CRITICAL: Visual Rhythm & Anti-Repetition Rules

### 3A. Section Visual Variation
Every section on the page must feel visually distinct. Apply these variation techniques:
- **Alternate background treatments**: Not every section should use `--bg-canvas`. Alternate between `--bg-canvas`, `--bg-surface`, and `--bg-elevated` to create depth and rhythm.
- **Alternate layout widths**: Mix full-width sections (edge-to-edge) with contained sections (`max-w-[1360px]`).
- **Alternate grid structures**: Never use the same grid twice in a row. If Services uses full-width rows, Projects should use a 2-column grid or masonry layout.
- **Break rhythm with accent sections**: Insert a visually distinct accent section (different background color, inverted text, or highlighted CTA) at least once on the page.

### 3B. Section Spacing (Derived from Density axis)
| Density | Section Padding | Between-section separator |
|---|---|---|
| **Airy** | `py-28 md:py-44` | 48px empty space, no borders |
| **Normal** | `py-20 md:py-32` | Optional 1px top border |
| **Dense** | `py-12 md:py-20` | Tight spacing, card-to-card flow |

### 3C. Personality-Driven Page Atmosphere
| Personality | Page Feel |
|---|---|
| **Glass + Futuristic** | Layered depth, glass cards floating over dark canvas, subtle glow accents |
| **Flat + Contemporary** | Clean sections, solid fills, generous whitespace, no shadows |
| **Material + Warm** | Elevated cards with real shadows, warm surfaces, tactile feel |
| **Brutalist + Geometric** | Raw borders, monospace text, exposed grid, high contrast sections |
| **Classic + Editorial** | Serif headlines, elegant spacing, editorial column widths, minimal decoration |

---

## 4. Step-by-Step Implementation Workflow

### Step 1: Replace Showroom with Production Home Page
Read **Block 1** of `prompts/phase-5-pages.md`. Replace `src/app/page.tsx` with the complete home page by composing components in the EXACT section order specified in the prompt.

**For each section**:
1. Reference the locked SectionHeader format (eyebrow + heading style from personality)
2. Use the exact card archetype built in Stage 3
3. Bind 100% of content from `src/data/siteData.ts`
4. Apply the visual rhythm rules from Section 3A above

### Step 2: Build Multi-Page Sub-Routes (If Specified)
Read **Block 2** and build each sub-route with its OWN distinct layout:
- Sub-pages MUST NOT copy-paste the home page layout
- Each sub-page should have a unique page masthead / hero treatment
- Sub-page content should go deeper than the home page (full project details, complete pricing comparison, extended about narrative, etc.)

**Category-specific sub-route patterns:**

| Category | Sub-Route Examples |
|---|---|
| **Portfolio** | `/about` (timeline + narrative), `/projects` (filterable grid), `/projects/[slug]` (case study), `/contact` (full form) |
| **SaaS** | `/features` (detailed feature pages), `/pricing` (comparison table), `/docs` (documentation), `/contact` (sales form) |
| **E-Commerce** | `/products` (filterable catalog), `/products/[slug]` (product detail), `/cart` (checkout flow), `/categories/[slug]` |
| **Agency** | `/work` (case studies), `/work/[slug]` (detail), `/about` (team + philosophy), `/capabilities` (services detail) |
| **Restaurant** | `/menu` (full categorized menu), `/gallery` (photo grid), `/reservations` (booking form), `/about` (story) |

### Step 3: Wire Navigation & Interactive States
Read **Block 3** and verify:
1. Every link in Navbar, MenuOverlay, Hero, and Footer points to a real route or section anchor
2. Interactive filtering (if specified) works without page reload
3. Clipboard copy actions provide instant feedback
4. All form steps transition cleanly

### Step 4: Content & Asset Audit
Read **Blocks 4-5** and verify:
- 100% of `siteData.ts` data is rendered on the appropriate pages
- Every image `src` points to a real file or clean fallback (no broken images)
- Zero banned AI words exist anywhere in the rendered output
- Project/product counts match exactly (no fabricated items)
- Active filter state highlights the selected pill/tab

---

## 5. Update Progress & Stop for User Review
1. Update `prompts/IMPLEMENTATION_PROGRESS.md`:
   ```markdown
   # IMPLEMENTATION PROGRESS
   - Home Page Sections: [List actual section order]
   - Sub-Routes Built: [List actual routes]
   - [x] Stage 1-4: Previous stages
   - [x] Stage 5: `/6-build-pages` (Full Production Home Page & Sub-Routes on `/`)
   - [ ] Stage 6: `/7-animate-website`
   - [ ] Stage 7: `/8-responsive-and-qa`
   - [ ] Stage 8: `/9-seo-and-aeo`
   ```
2. **STOP IMMEDIATELY**: Instruct the user to inspect the complete home page and all sub-routes on `localhost:3000`, test navigation and filtering, then run `/7-animate-website` when ready.
