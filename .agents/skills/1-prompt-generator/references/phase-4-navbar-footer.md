# Phase 4: Desktop Navbar, Hamburger Overlay, Contact Wizard & Interactive Footer

Read this file ONLY when executing **Phase 4** of `/1-prompt-generator` (after `prompts/phase-3-cards-layout.md` has been written and recorded in `prompts/PROGRESS.md`).

Your goal in Phase 4 is to:
1. Check if the user's reference design (PDF/screenshots/URL) or earlier answers already define the Desktop Navbar, Hamburger menu, Contact form, or Footer style. Confirm any known items as `Locked from Context`.
2. Ask the Phase 4 questions below with selectable options + `[Custom User Input]` + `[AI Recommended]`.
3. **Immediately after the user replies to Phase 4**, write the complete file `prompts/phase-4-navbar-footer.md` using the exact blueprint in Section 3 below, update `prompts/PROGRESS.md` to `Last Completed Phase: Phase 4 | Next Phase: Phase 5`, and then load `references/phase-5-pages.md` to present Phase 5 questions.

## 1. Phase 4 Discovery Questions (Global Navigation, Contact & Footer)

### Q1. Desktop Navbar Design Archetype
Never default to a generic 64px SaaS header. Ask the user to select their exact Desktop Navbar design:
- `A)` **Minimal Split Bar (Brand Left + Pill `Menu [=]` Button Right, `robinsweb.net` Style)**: Fixed/sticky top bar (`h-20`), bold uppercase brand wordmark on the left, interactive rounded pill trigger (`Menu [=]`) on the right, and **zero cluttered horizontal links** in the middle of the bar.
- `B)` **Floating Center Glass Island / Dynamic Pill**: Centered floating capsule (`top-5`, `rounded-full`, `backdrop-blur-xl`, `1px` border) containing brand mark, 4-5 links, and compact CTA pill.
- `C)` **Docked Full-Width Architectural Header**: `h-16 md:h-20` full-width bar with `1px` bottom hairline, Brand left, centered links with active indicator, and right CTA button.
- `D)` **Enterprise Mega-Menu Header (Stripe / Linear Style)**: Hovering top-level items reveals a multi-column dropdown card with icon links and a featured preview panel.
- `E)` **E-Commerce Split Utility Header**: Top announcement strip + main bar with Search input, Category links, Currency switcher, and slide-over Cart Drawer trigger with item counter badge.
- `F)` **Editorial Stacked Masthead**: Giant centered publication title on top row, date/edition/socials in middle rule, and horizontal category strip below.
- `G)` **Left Vertical Command Sidebar / Rail**: Fixed left navigation rail for Dashboards, AI apps, or Documentation portals.
- `H)` **Bottom Floating Dock**: macOS / Amie-style floating interactive dock anchored at `bottom-6`.
- `I) [Keep Existing Navbar]`: Preserve current project navbar.
- `J) [Custom User Input]`: Describe your exact desktop navbar layout, height, links, glass/border style, and CTA button.
- `K) [AI Recommended]`: Let AI choose the best navbar archetype for your category and reference.

### Q2. Hamburger Trigger & Mobile / Overlay Menu Design
Ask how the hamburger button and open menu experience should look and behave (on mobile, or on both desktop + mobile when Navbar `A` is selected):
- `A)` **Pill Button (`Menu [=]`) Morphing to `Close [X]` + Full-Screen Staggered Curtain Reveal (`robinsweb.net` Style)**:
  - Clicking the `Menu` pill morphs the label/icon to `Close [X]` and drops a full-screen (`inset-0 z-40`) backdrop-blur curtain with atmospheric radial glow.
  - Displays oversized numbered links (`01 HOME`, `02 SERVICES`, `03 WORK`, `04 REVIEWS`, `05 CONTACT`) in `--font-display` that shift right (`translate-x-4`) and highlight in `--accent-primary` on hover, plus bottom social links.
- `B)` **Split-Screen Image Preview Overlay**: Left 45% desktop column crossfades a preview image of the currently hovered link + contact info; Right 55% shows giant stacked navigation links.
- `C)` **Slide-In Right Frosted Glass Drawer**: `w-80` or `w-96` high-blur slide-over drawer from the right edge with backdrop dim, stacked links, and bottom CTA button.
- `D)` **Expanding Top Floating Island**: The floating navbar capsule smoothly expands downward in-place to reveal navigation cards inside the same pill.
- `E)` **Minimal 2-Line Architectural Burger + Clean Top-Down Sheet**: Crisp 2-line SVG icon (`w-6`) that rotates into an `X` and opens a clean top-down sheet.
- `F)` **Mobile Bottom Sheet Drawer**: Touch-friendly swipeable bottom sheet anchored to the thumb zone on mobile (`<768px`).
- `G) [Custom User Input]`: Describe your exact hamburger trigger, open/close animation, menu background, and link layout.
- `H) [AI Recommended]`: Let AI pair the ideal overlay menu with your chosen desktop navbar.
*(When inspecting a live reference in Chrome, click the menu trigger to observe the real open curtain transition, backdrop blur, staggered link reveal, and body scroll lock).*

### Q3. Contact Section & Inquiry Form Architecture
Ask how the Contact / Inquiry section (`src/components/layout/ContactSection.tsx`) should be structured:
- `A)` **Multi-Step Interactive Wizard Form with Progress Bar (`robinsweb.net` Style)**:
  - Step counter (`Step 1 of 3`) + full-width animated progress bar filling with `--accent-primary`.
  - Step 1: Selectable interactive pills for Service Type & Budget Range + `Next Step` button.
  - Step 2: Name, Email, and Timeline inputs + `Back` / `Next Step` buttons.
  - Step 3: Project message textarea + `Send Message` submit button with instant confirmation state.
- `B)` **Split Editorial Contact Section**: Left column with natural human headline (`Let's Build Something Together`), direct email/WhatsApp copy-buttons, location badge, and social links; Right column with a clean single-step message form.
- `C)` **Embedded Booking / Calendar Callout + Quick Message Card**
- `D) [Custom User Input]`: Specify your exact contact form fields, steps, and contact channels.
- `E) [AI Recommended]`: Let AI select the highest-converting contact architecture.

### Q4. Footer & Giant Interactive Brand Watermark Design
Ask how the global Footer (`src/components/layout/Footer.tsx`) should be designed:
- `A)` **Giant Interactive Brand Watermark Footer (`robinsweb.net` Style)**:
  - Top row: Quick navigation links, social media pill links, copyright text, and a smooth `Back to Top` button.
  - Bottom masthead: Full-viewport-width oversized uppercase brand/person name (`ROBINSWEB` or `RAJA IRFAN AHMED`) in `--font-display` (`clamp(3.5rem, 14.5vw, 15rem)`).
  - **Mandatory Contrast & Hover Glow Lock**: The giant watermark MUST be clearly visible at rest against `--bg-canvas` (e.g., `#262320` or `rgba(255,255,255,0.14)` - NEVER invisible black-on-black!) and MUST smoothly illuminate in `var(--accent-primary)` with a radial drop-shadow glow on pointer hover.
- `B)` **Multi-Column SaaS Sitemap Footer**: Brand summary column + 3-to-4 link columns + newsletter input + copyright bar.
- `C)` **Minimal Architectural Hairline Bar**: Single clean horizontal row with copyright, local time clock, and social links.
- `D) [Custom User Input]`: Describe your exact footer layout, columns, watermark text, and hover effect.
- `E) [AI Recommended]`: Let AI design the footer matching your art direction.

## 2. Immediate Action After User Answers Phase 4
As soon as the user answers Phase 4 (or asks you to auto-decide):
1. Write `prompts/phase-4-navbar-footer.md` using the exact 6-Block template in Section 3 below (180 to 250 lines of complete specifications).
2. Update `prompts/PROGRESS.md` with:
   - `Last Completed Phase: Phase 4 (prompts/phase-4-navbar-footer.md)`
   - `Last Written Line Count: [Exact line count]`
   - `Next Phase to Execute: Phase 5 (references/phase-5-pages.md)`
3. Read `references/phase-5-pages.md` and present Phase 5 questions to the user.

## 3. Exact Blueprint to Write Into `prompts/phase-4-navbar-footer.md`

When writing `prompts/phase-4-navbar-footer.md`, include all 6 blocks below with 100% concrete specifications (zero placeholders):

```markdown
# PHASE 4 PROMPT: DESKTOP NAVBAR, HAMBURGER OVERLAY, CONTACT WIZARD & INTERACTIVE FOOTER
**Target Command**: `/5-navbar-and-footer`
**Required Prerequisites**: Read `prompts/phase-1-foundation-data.md`, `prompts/phase-2-components.md`, and `prompts/phase-3-cards-layout.md`. Import UI primitives from `src/components/ui/` and real data from `src/data/siteData.ts`.

## BLOCK 1: DESKTOP NAVBAR COMPONENT (`src/components/layout/Navbar.tsx`)
- **Selected Navbar Archetype**: [Exact chosen archetype, e.g., Archetype A: Minimal Split Bar with Brand left + Menu [=] pill right]
- **Exact DOM Structure & Styling**:
  - Height, positioning (`fixed top-0 inset-x-0 z-50`), backdrop blur, and border rules.
  - Left brand wordmark typography (`--font-display`) and link target (`/`).
  - Center/Right elements: If Archetype A is chosen, strictly omit horizontal desktop nav links and render ONLY the interactive `Menu [=]` pill trigger on the right.
- **Natural Human Labels Lock**: Use clean human link labels (`Home`, `About`, `Projects`, `Services`, `Skills`, `Contact`) - never robotic labels like `Architecture Routes` or `Direct Dispatch`.

## BLOCK 2: HAMBURGER TRIGGER & OVERLAY MENU STATE MACHINE (`src/components/layout/MenuOverlay.tsx`)
- **Selected Overlay Archetype**: [Exact chosen overlay, e.g., Overlay A: Full-Screen Staggered Curtain]
- **Interactive State Machine (`"use client"`)**:
  - Controlled by `isOpen` state in `Navbar.tsx`.
  - Locks `document.body.style.overflow = 'hidden'` when open; closes on `ESC` key, backdrop click, or any route/anchor link click.
  - Trigger button morphs smoothly between `Menu [=]` and `Close [X]`.
- **Internal Overlay Layout**:
  - Numbered navigation items (`01` to `0N`) with `--font-display` scale, hover shift (`translate-x-4`), and `--accent-primary` color transition.
  - Bottom bar with verbatim email and social links from `siteData.ts`.

## BLOCK 3: CONTACT SECTION / MULTI-STEP WIZARD (`src/components/layout/ContactSection.tsx`)
- **Selected Contact Variant**: [e.g., Variant A: 3-Step Interactive Wizard Form with Progress Bar or Variant B: Split Editorial Form]
- **State Machine & Validation**:
  - Uses `StepProgressBar`, `SelectablePill`, `TextInput`, `TextArea`, and `Button` from `src/components/ui/`.
  - Real interactive state transitions between steps (or clean single-step submission) with instant human confirmation message.
  - Natural human headings (`Let's Work Together`, `Contact Info`, `Send a Message`) - strictly zero AI jargon (`Direct Coordinates`, `Direct Dispatch`).

## BLOCK 4: GLOBAL FOOTER & GIANT INTERACTIVE WATERMARK (`src/components/layout/Footer.tsx`)
- **Selected Footer Archetype**: [e.g., Archetype A: Giant Interactive Brand Watermark Footer]
- **Top Footer Row**: Navigation links, social pills (`GitHub`, `LinkedIn`, etc. from `siteData.ts`), human copyright notice, and working `Back to Top` smooth-scroll trigger.
- **Giant Brand Watermark Masthead**:
  - Full-container-width uppercase text (`[EXACT BRAND / PERSON NAME]`) in `--font-display` (`text-[clamp(3.5rem,14.5vw,15rem)] leading-[0.85] tracking-tight text-center select-none cursor-pointer transition-all duration-500`).
  - **MANDATORY BASE CONTRAST**: At rest, use `text-[#262320]` (on dark canvas) or `text-black/15` (on light canvas) so it is clearly visible and NEVER invisible black-on-black.
  - **MANDATORY HOVER HIGHLIGHT**: On hover, apply `hover:text-[var(--accent-primary)] hover:drop-shadow-[0_0_45px_rgba(237,122,54,0.55)]`.

## BLOCK 5: ROOT LAYOUT INTEGRATION (`src/app/layout.tsx`)
- Mount `<Navbar />` at the top and `<Footer />` at the bottom of `src/app/layout.tsx` so they persist cleanly across all routes.

## BLOCK 6: MANDATORY VISUAL SHELL PREVIEW UPDATE ON `/` (`localhost:3000`)
When `/5-navbar-and-footer` finishes building `Navbar.tsx`, `MenuOverlay.tsx`, `ContactSection.tsx`, and `Footer.tsx`, it MUST mount them in `src/app/layout.tsx` and `src/app/page.tsx` (`localhost:3000`) so the user can visually test:
1. Clicking the top `Menu` trigger to open/close the animated overlay menu.
2. Clicking through the `ContactSection` wizard steps (`Step 1 of 3` -> `Step 2 of 3` -> `Step 3 of 3`).
3. Hovering the giant `Footer` watermark at the bottom of the page to verify base contrast and the glowing `--accent-primary` hover transition, and then STOP.
```
