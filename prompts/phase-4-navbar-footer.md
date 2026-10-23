# PHASE 4 PROMPT: DESKTOP NAVBAR, HAMBURGER OVERLAY, CONTACT WIZARD & INTERACTIVE FOOTER
**Target Command**: `/5-navbar-and-footer`
**Required Prerequisites**: Read `prompts/phase-1-foundation-data.md`, `prompts/phase-2-components.md`, and `prompts/phase-3-cards-layout.md`. Import UI primitives from `src/components/ui/` and real data from `src/data/siteData.ts`.
**Visual Artifact Reference**: Hand-sketched wireframe showing Day Theme, Red border input, Submit button, 15% Circular Progress, and ZIP download

## BLOCK 1: DESKTOP NAVBAR COMPONENT (`src/components/layout/Navbar.tsx`)
Create a minimal, calm desktop navbar in `src/components/layout/Navbar.tsx` reflecting Google's uncluttered utility aesthetic:
- **Selected Navbar Archetype**: Clean Utility Header (`h-14 md:h-16`).
- **Exact DOM Structure & Styling**:
  - Height: `56px`, fixed top positioning (`fixed top-0 inset-x-0 z-50 bg-[#FFFFFF] border-b border-[#E5E7EB]`).
  - Container: `max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between`.
  - Left Brand Mark:
    - Logo Icon: Red accent badge (`w-7 h-7 rounded-lg bg-[#EA4335] text-white flex items-center justify-center font-bold text-xs shadow-sm`).
    - Tool Name: `SiteRip` in `--font-display`, font-size `15px`, font-weight `700`, color `#111827`, letter-spacing `-0.01em`.
    - Tag: Minimal gray chip `v1.0` in `--font-mono`, text `10px`, color `#6B7280`, background `#F3F4F6`, rounded `4px`, padding `2px 6px`.
  - Right Utility Group:
    - Engine Status: Mounts `StatusPill` with active state (`ENGINE IDLE` / `EXTRACTING`).
    - Viewport Pill: Minimal selector showing `1440px Desktop` with dropdown toggle for `768px Tablet` and `390px Mobile`.
    - Settings Button: Rounded icon button (`w-9 h-9 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors`).
- **Strict Anti-Slop Lock**:
  - Zero bloated marketing navigation links (`Pricing`, `Features`, `Enterprise`, `Solutions`).
  - Preserves clean 100vh workstation focus without visual distraction.

## BLOCK 2: HAMBURGER TRIGGER & SETTINGS OVERLAY (`src/components/layout/MenuOverlay.tsx`)
- **Selected Overlay Archetype**: Clean Slide-In Drawer (`w-80 md:w-96 right-0 inset-y-0 z-50`).
- **Interactive State Machine (`"use client"`)**:
  - Controlled by `isOpen` state in `Navbar.tsx`.
  - When open, applies body scroll lock (`document.body.style.overflow = 'hidden'`).
  - Closes automatically on `ESC` key press or backdrop overlay click.
- **Internal Drawer Layout**:
  - Drawer Header: Title `Extraction Settings` in `--font-display` font-size `16px`, bold `#111827`, and close button (`w-8 h-8 rounded-md hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900`).
  - Drawer Content Blocks:
    1. Viewport Selection: Radio group for `Desktop (1440 × 900)`, `Tablet (768 × 1024)`, and `Mobile (390 × 844)`.
    2. Sticky Navigation Isolation: Toggle switch for `Isolate Sticky Header (Recommended)` with helper hint text.
    3. Image Format Selection: Toggle between `PNG (Lossless Quality)` and `WebP (Compressed Fast)`.
    4. Rate Limiting Delay: Selector for crawl throttling (`0.5s`, `1.0s`, `2.0s`).
  - Drawer Footer: Reset to Defaults action and close button.

## BLOCK 3: CONTACT & FEEDBACK DIALOG (`src/components/layout/ContactSection.tsx`)
- **Selected Variant**: Minimal Feedback Modal (`src/components/layout/ContactSection.tsx`).
- **Purpose**: Provides quick bug reports or custom extraction requests without leaving the tool workstation.
- **DOM Structure & Styling**:
  - Modal Backdrop: `fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4`.
  - Dialog Card: `max-w-md w-full bg-white rounded-2xl border border-gray-200 p-6 shadow-xl`.
  - Form Fields:
    - Subject input: `TextInput` (`Report a bug`, `Request website extraction`).
    - Email input: `TextInput` (`your@email.com`).
    - Message textarea: `TextArea` (`Describe issue or website URL`).
    - Action Buttons: `Cancel` (ghost) and `Send Message` (SubmitButton).
  - Validation: Clean client-side validation with instant confirmation state upon send.

## BLOCK 4: GLOBAL FOOTER & INTERACTIVE BRAND WATERMARK (`src/components/layout/Footer.tsx`)
- **Selected Footer Archetype**: Minimalist Utility Footer with Calm Brand Watermark (`src/components/layout/Footer.tsx`).
- **Top Footer Row**:
  - Height: `48px`, border-top `1px solid var(--border-subtle)` (`#E5E7EB`).
  - Left: System summary `SiteRip • Automated Section Design Extractor • Pure Utility`.
  - Center: Keyboard shortcuts badge (`Press Enter to extract • Esc to cancel`).
  - Right: Clean links to GitHub repository and Documentation in `--font-sans` font-size `12px` color `#6B7280` hover color `#111827`.
- **Brand Watermark Masthead**:
  - Full-width container rendering `SITERIP` in giant uppercase display typography.
  - Scale: `--font-display`, font-size `clamp(2.5rem, 8vw, 6rem)`, font-weight `800`, letter-spacing `-0.03em`, text-center, user-select `none`.
  - Base Contrast: Calm subtle gray `text-black/[0.04]` against the pure white canvas `#FFFFFF`.
  - Hover Interaction: Smooth transition on pointer hover to `text-[#EA4335]` with soft red drop-shadow `drop-shadow(0 0 20px rgba(234, 67, 53, 0.2))`.
  - Transition timing: `transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]`.

## BLOCK 5: ROOT LAYOUT INTEGRATION (`src/app/layout.tsx`)
- **Integration Blueprint**:
  - Wrap application in a full-height flex column (`min-h-screen flex flex-col justify-between bg-white text-gray-900`).
  - Mount `<Navbar />` fixed at the top.
  - Main view `<main className="flex-1 flex flex-col items-center justify-center pt-14">` renders page children.
  - Mount `<Footer />` at the bottom of the page container.

## BLOCK 6: MANDATORY VISUAL SHELL PREVIEW UPDATE ON `/` (`localhost:3000`)
When `/5-navbar-and-footer` finishes building `Navbar.tsx`, `MenuOverlay.tsx`, `ContactSection.tsx`, and `Footer.tsx`, it MUST mount them in `src/app/layout.tsx` and `src/app/page.tsx` (`localhost:3000`) so the user can visually test:
1. Top `Navbar` showing tool brand, `StatusPill`, and Settings trigger button.
2. Clicking Settings trigger smoothly slides open the `MenuOverlay` drawer with isolation and viewport controls.
3. Bottom `Footer` rendering keyboard shortcuts and the giant `SITERIP` watermark.
4. Hovering the `SITERIP` watermark triggers the calm Google Red `#EA4335` illumination transition.
5. Stop for User Inspection: Implementation stops immediately after mounting these layout components on `localhost:3000`.

## 4. Phase 4 Validation Checklist (Before Moving to Phase 5)
Before writing `prompts/phase-5-pages.md`, verify:
- [x] Navbar and Footer adopt the Day Theme color palette (`#FFFFFF`, `#F8F9FA`, `#EA4335`, `#E5E7EB`).
- [x] MenuOverlay drawer provides functional extraction controls (viewport, sticky header isolation).
- [x] Footer watermark is clearly visible at rest against pure white canvas (`text-black/[0.04]`).
- [x] Watermark illuminates in Google Red `#EA4335` on hover.
- [x] Every component file path is an exact path (`src/components/layout/Navbar.tsx`).
- [x] All CSS variable references match tokens from `prompts/phase-1-foundation-data.md`.
- [x] Zero banned AI words appear anywhere in the file.
- [x] Zero typographic em-dashes exist.
- [x] Line count is strictly between 180 and 250 lines.
