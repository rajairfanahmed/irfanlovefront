# Phase 5: Page-by-Page Section Sequence, Route Assembly & Human Content Architecture

Read this file ONLY when executing **Phase 5** of `/1-prompt-generator` (after `prompts/phase-4-navbar-footer.md` has been written and recorded in `prompts/PROGRESS.md`).

Your goal in Phase 5 is to:
1. Check if the user's reference design (PDF/screenshots/URL) or Phase 1-4 answers already define the exact top-to-bottom section sequence for each page route. Confirm any known items as `Locked from Context`.
2. Ask the Phase 5 questions below with selectable options + `[Custom User Input]` + `[AI Recommended]`.
3. **Immediately after the user replies to Phase 5**, write the complete file `prompts/phase-5-pages.md` using the exact blueprint in Section 3 below, update `prompts/PROGRESS.md` to `Last Completed Phase: Phase 5 | Next Phase: Phase 6`, and then load `references/phase-6-animations.md` to present Phase 6 questions.

## 1. Phase 5 Discovery Questions (Page Composition & Section Sequence)

### Q1. Home Page (`/`) Top-to-Bottom Section Sequence
Never assemble a page with repetitive white boxes or unrequested filler sections. Ask the user to confirm the exact top-to-bottom section flow on the primary `/` route:
- `A)` **High-Impact Studio / Portfolio Flow (`robinsweb.net` Style)**:
  1. `HeroSection` (Layered Giant Display Title + Overlapping Cutout Portrait + Foreground CTA)
  2. `InfiniteMarquee` (Full-bleed seamless scrolling ticker strip)
  3. `AboutAndMetricsSection` (Editorial bio narrative + high-contrast key metrics `2+ Years`, `14+ Projects`, etc.)
  4. `ServicesSection` (Full-width numbered `01` - `04` interactive rows)
  5. `FeaturedProjectsSection` (Selected case-study showcase cards with category pills and live links)
  6. `SkillsAndCredentialsSection` (Domain-grouped skill matrix + verified education & certifications)
  7. `TestimonialsSection` (Atmospheric radial glow client review cards)
  8. `ContactSection` (Multi-step interactive inquiry wizard with progress bar)
- `B)` **SaaS / AI Product Marketing Flow**:
  1. `HeroSection` (Headline + 3D tilted product interface preview)
  2. `LogoMarquee` (Social proof ticker)
  3. `BentoFeaturesSection` (Asymmetric 12-col feature grid)
  4. `InteractiveWorkflowSection` (Step-by-step product walkthrough)
  5. `MetricsAndSecuritySection` (Performance benchmarks & compliance badges)
  6. `PricingSection` (Tiered cards with billing toggle)
  7. `FaqAccordionSection` + `CtaBannerSection`
- `C)` **E-Commerce Flagship Storefront Flow**:
  1. `CampaignHero` -> 2. `FeaturedCategoriesGrid` -> 3. `BestSellersProductGrid` -> 4. `EditorialLookbookSplit` -> 5. `ReviewsAndTrustStrip` -> 6. `NewsletterBanner`
- `D)` **Editorial / Agency Case-Study Flow**:
  1. `TypographicHero` -> 2. `SelectedWorksShowcase` -> 3. `CapabilitiesList` -> 4. `StudioPhilosophySplit` -> 5. `ContactCallout`
- `E) [Keep Existing Page Flow]`: Preserve current section sequence on `/`.
- `F) [Custom User Input]`: List the exact top-to-bottom section order you want on `/`.
- `G) [AI Recommended]`: Let AI design the optimal section sequence for your category and content.

### Q2. Multi-Page Route Differentiation (If Multi-Page Architecture Was Selected in Phase 1)
If the website has multiple routes (e.g., `/about`, `/projects`, `/skills`, `/contact`), never repeat the exact same box grid on every sub-page. Ask how inner pages should be structured:
- `A)` **Distinct Editorial Sub-Page Layouts**:
  - `/about`: Editorial story split + career/education timeline + full certification showcase + personal values grid.
  - `/projects` (or `/work`): Interactive category filter tabs (`All`, `Full-Stack`, `AI & Automation`, `Frontend`) + full project case-study grid with tech stack pills and live/GitHub links.
  - `/skills` (or `/services`): Deep technical capability breakdown + categorized toolset cards + numbered service rows (`01-04`) + engineering workflow steps.
  - `/contact`: Dedicated full-page interactive inquiry wizard + direct email/WhatsApp copy cards + location/availability status.
- `B)` **Single-Page Smooth Anchor Routing Only**: All nav links (`#about`, `#services`, `#projects`, `#skills`, `#contact`) scroll smoothly to sections on `/` with zero separate sub-routes.
- `C)` **Hybrid Landing Page + Dynamic Detail Pages (`/projects/[slug]`)**: Main scroll experience on `/` plus dedicated dynamic detail pages for each project/product.
- `D) [Custom User Input]`: Specify the exact sections and layout for each sub-page route.
- `E) [AI Recommended]`: Let AI structure each route with distinct visual rhythm so no two pages look like clones.

### Q3. Interactive Page State & Filtering Behavior
Ask which interactive page-level states should work out of the box when `/6-build-pages` assembles the pages:
1. **Live Category Filtering on Projects / Products**: Clicking filter tabs (`All`, `Web`, `AI`, etc.) dynamically filters the displayed cards with smooth layout transitions.
2. **Expandable Project / Service Details**: Clicking a project or service row reveals full deliverables, architecture highlights, or live demo links.
3. **Working Multi-Step Contact Wizard State**: Full client-side step progression (`Step 1 -> Step 2 -> Step 3 -> Success State`) with selectable service/budget pills.
4. **Interactive FAQ / Process Accordions**: Smooth open/close state on Q&A or workflow items.
5. **One-Click Copy Email / Phone Action**: Clicking the email address copies it to clipboard and displays a confirmation toast.
6. `[Custom User Input]`: Describe any custom page state, search bar, or interactive calculator.
7. `[AI Recommended]`: Let AI wire all relevant interactive page states for your content.

### Q4. Strict Human Copywriting & Zero-AI-Jargon Lock
Confirm how section headings, eyebrows, and body copy must be written across all pages:
- `A)` **100% Verbatim User Data + Natural Human Copy (`Recommended`)**:
  - Use the exact Name, Bio, Education, Certifications, Projects, Services, and Contact details from `src/data/siteData.ts`.
  - Write clean, confident, natural human headings (`Selected Work`, `What I Do`, `About Me`, `Skills & Stack`, `Client Reviews`, `Let's Work Together`).
  - **Strict Anti-AI Ban**: Never output robotic AI phrases (`ZERO-SLOP ARCHITECTURE`, `Eliminating Generic AI Slop`, `Direct Coordinates`, `Direct Dispatch`, `Verified Channels`, `Architecture Routes`, `System Telemetry`, `Nexus`, or fake `$ npx` terminal windows).
- `B) [Custom User Input]`: Provide exact custom section titles and eyebrow labels for every section.

## 2. Immediate Action After User Answers Phase 5
As soon as the user answers Phase 5 (or asks you to auto-decide):
1. Write `prompts/phase-5-pages.md` using the exact 6-Block template in Section 3 below (200 to 270 lines of complete page assembly specifications).
2. Update `prompts/PROGRESS.md` with:
   - `Last Completed Phase: Phase 5 (prompts/phase-5-pages.md)`
   - `Last Written Line Count: [Exact line count]`
   - `Next Phase to Execute: Phase 6 (references/phase-6-animations.md)`
3. Read `references/phase-6-animations.md` and present Phase 6 questions to the user.

## 3. Exact Blueprint to Write Into `prompts/phase-5-pages.md`

When writing `prompts/phase-5-pages.md`, include all 6 blocks below with 100% concrete specifications (zero placeholders):

```markdown
# PHASE 5 PROMPT: COMPLETE PAGE-BY-PAGE ASSEMBLY & HUMAN CONTENT LOCK
**Target Command**: `/6-build-pages`
**Required Prerequisites**: Read `prompts/phase-1-foundation-data.md` through `prompts/phase-4-navbar-footer.md`. Import all UI primitives (`src/components/ui/`), cards (`src/components/cards/`), layout wrappers (`src/components/layout/`), and real data (`src/data/siteData.ts`).

## BLOCK 1: REMOVE TEMPORARY SHOWROOM & ASSEMBLE FULL HOME PAGE (`src/app/page.tsx`)
Replace the temporary Phase 1-4 preview showroom on `src/app/page.tsx` with the complete production Home Page in this exact top-to-bottom order:
1. **Hero Section (`#hero`)**: Mount `<HeroSection />` with full data from `siteData.ts`.
2. **Infinite Marquee Strip (`#marquee`)**: Mount `<InfiniteMarquee />` immediately below the Hero with seamless continuous motion.
3. **About & Metrics Section (`#about`)**:
   - Eyebrow: `[Exact eyebrow, e.g., 01 // ABOUT]`
   - Heading: `[Exact natural human heading]`
   - Layout & Content: [Exact split/editorial grid displaying verbatim bio, location, and high-contrast metric counters from `siteData.ts`]
4. **Services / Capabilities Section (`#services`)**:
   - Eyebrow: `[Exact eyebrow, e.g., 02 // SERVICES]`
   - Heading: `[Exact natural human heading]`
   - Layout & Content: Render all numbered services (`01` to `04`) using `<ServiceCard />` rows/cards from `siteData.services`.
5. **Featured Projects / Work Section (`#projects` or `#work`)**:
   - Eyebrow: `[Exact eyebrow, e.g., 03 // SELECTED WORK]`
   - Heading: `[Exact natural human heading]`
   - Interactive Filter / Grid: Render `<ProjectCard />` items from `siteData.projects` with real image paths, tech pills, and live links.
6. **Skills, Education & Certifications Section (`#skills`)**:
   - Eyebrow: `[Exact eyebrow, e.g., 04 // SKILLS & CREDENTIALS]`
   - Heading: `[Exact natural human heading]`
   - Layout & Content: Render categorized `<SkillGroupCard />` and `<CredentialCard />` items (degrees, institutions, dates, certifications) from `siteData.ts`.
7. **Testimonials / Social Proof Section (`#reviews`)**:
   - Eyebrow: `[Exact eyebrow, e.g., 05 // CLIENT REVIEWS]`
   - Heading: `[Exact natural human heading]`
   - Layout & Content: Render `<TestimonialCard />` items with warm radial glow borders.
8. **Contact Section (`#contact`)**:
   - Mount `<ContactSection />` with the full interactive multi-step wizard (or split form) and direct contact links.

## BLOCK 2: MULTI-PAGE SUB-ROUTE ASSEMBLY (IF MULTI-PAGE IS SELECTED)
If additional routes exist in `src/app/`, build each route completely with distinct visual rhythm (never clone the exact same card box layout across every page):
- **`src/app/about/page.tsx`**: [Exact page header, bio narrative, education timeline, certifications showcase, and CTA banner]
- **`src/app/projects/page.tsx`**: [Exact page header, interactive category filter tabs, full project showcase grid, and GitHub callout]
- **`src/app/skills/page.tsx`**: [Exact page header, categorized technical stack matrix, numbered services breakdown, and process steps]
- **`src/app/contact/page.tsx`**: [Exact page header, full interactive `<ContactSection />`, copy-email/WhatsApp cards, and FAQ accordion]

## BLOCK 3: INTERACTIVE PAGE STATE & NAVIGATION WIRING
- Ensure every link in `Navbar.tsx`, `MenuOverlay.tsx`, `HeroSection.tsx`, and `Footer.tsx` points to the exact working route or smooth-scroll section ID (`#about`, `#services`, `#projects`, `#contact` or `/about`, `/projects`, `/skills`, `/contact`).
- Wire interactive category filtering on the Projects section/page (`useState` for selected category).
- Wire interactive copy-to-clipboard feedback on email/contact pills.

## BLOCK 4: STRICT ANTI-AI COPYWRITING VERIFICATION
Scan every JSX file before finishing `/6-build-pages`:
- **ZERO BANNED WORDS**: Confirm that none of these words appear anywhere in JSX headings, badges, or paragraphs: `Nexus`, `Zero-Slop`, `AI Slop`, `Eliminating Generic AI Slop`, `Telemetry`, `Direct Coordinates`, `Direct Dispatch`, `Verified Channels`, `Architecture Routes`, `Production Standard`, `Orchestrating`, `Synergy`.
- **ZERO FAKE CLI TERMINALS**: Confirm no unrequested `$ npx` or fake system console boxes exist in Hero or Project cards.

## BLOCK 5: VERIFIED IMAGE & ASSET BINDING
- Verify that every `<Image>` or `<img>` tag across all pages points to an existing file in `public/` (from `siteData.ts`) or a clean typographic/gradient artwork fallback so zero broken image icons appear in the browser.

## BLOCK 6: MANDATORY LIVE BROWSER PREVIEW ON `localhost:3000`
When `/6-build-pages` finishes assembling all pages:
1. Verify that `/` and all sub-routes compile cleanly with zero TypeScript or Next.js hydration errors.
2. Instruct the user to inspect the complete assembled pages on `localhost:3000` (and test clicking between sections/routes, filtering projects, and stepping through the contact wizard), and then STOP so the user can run `/7-animate-website` next.
```
