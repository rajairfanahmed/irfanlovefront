# PHASE 5 PROMPT: PRODUCTION SINGLE-PAGE HOMEPAGE & WORKSTATION ASSEMBLY
**Target Command**: `/6-build-pages`
**Required Prerequisites**: Read `prompts/phase-1-foundation-data.md` through `prompts/phase-4-navbar-footer.md`. Import UI primitives from `src/components/ui/` and layout components from `src/components/layout/`.
**Visual Artifact Reference**: Hand-sketched wireframe showing Day Theme, Red border input, Submit button, 15% Circular Progress, and ZIP download

## BLOCK 1: SINGLE-PAGE TOOL ARCHITECTURE (NO SUB-PAGES, NO MARKETING SECTIONS)
- **Tool Philosophy & User Directive**:
  - The application is an ultra-focused, single-page utility tool (SiteRip).
  - Strictly DO NOT generate any marketing routes or sub-pages (`/about`, `/projects`, `/contact`, `/pricing`, `/services`).
  - Delete or omit all external marketing sections, testimonial grids, feature cards, and multi-step contact wizards.
  - The entire user experience lives on a single, focused homepage (`src/app/page.tsx`).
  - Eliminate all temporary preview showrooms (`CardsShowroom`, `ComponentsShowroom`, `FoundationPreviewCard`).
- **Single-Screen Cockpit Layout Principles**:
  - Fixed Top Utility Navbar (`56px` height) with Brand Logo, Engine Status Pill, and Settings Drawer trigger.
  - Centered Workstation Stage: Hosts the exact 3-state wireframe workflow without unnecessary vertical scroll bloat.
  - Pinned Bottom Utility Footer (`48px` height) with status line, keyboard shortcuts, and giant interactive watermark.
  - Background: Pure White Canvas (`#FFFFFF`).
  - Accent Color: Google Red (`#EA4335`).
  - Foreground Text: Neutral Dark Charcoal (`#111827`).
- **Ergonomics & Layout Hierarchy**:
  - Viewport bounds: `max-w-4xl mx-auto w-full px-4 md:px-8`.
  - Clean separation: Space between stage and header ensures zero cramped feeling.
  - No vertical scrollbars when in Idle or Progress state.
  - Natural gentle scrolling to view the section hierarchy when completed.
  - Full mobile responsiveness from `375px` to `1440px` widescreen.
  - Consistent padding rhythm across all screen sizes.
  - Focus and tab order strictly follows natural visual hierarchy.

## BLOCK 2: THE 3-STAGE HOMEPAGE WORKSTATION STATE MACHINE
- **Master State Machine (`src/app/page.tsx` or `src/components/layout/HeroSection.tsx`)**:
  - Stage Type: `'idle' | 'progress' | 'completed'`.
  - Initial State: `'idle'`.
  - Default URL: `https://robinsweb.net`.
  - Active Percentage: `15%` initial on submit, mathematically progressing to `100%`.
- **State 1: Idle URL Input (Wireframe Match)**:
  - Input Container: Centered horizontal flex row rendering `UrlInput` and `SubmitButton`.
  - Geometry:
    - Input: Height `48px`, max-width `460px`, border `1.5px solid #EA4335`, background `#FFFFFF`, text `#111827`, border-radius `12px`.
    - Placeholder: `Enter url: e.g. https://robinsweb.net` in `#9CA3AF`.
    - Submit Button: Height `48px`, padding `0 24px`, border `1.5px solid #EA4335`, background `#FFFFFF`, text `#EA4335`, font-weight `600`, text-transform `lowercase` (`submit`).
  - Hover Action: Button fills with `#EA4335`, text switches to `#FFFFFF`.
  - Key Interaction: Pressing Enter or clicking `submit` triggers instant transition to State 2.
  - Input validation: Auto-prepends `https://` if protocol is omitted by user.
- **State 2: Progress Display Only (Wireframe Match: "After submit only progress display")**:
  - Wireframe Rule: Input bar and submit button disappear completely from the view.
  - Display: Centered 240px SVG Circular Progress Component (`viewBox="0 0 240 240"`).
  - SVG Math: Center `(120, 120)`, Radius `r=96`, Circumference `603.185px`.
  - Track Ring: Thin circular outline with `stroke="#EA4335"`, `strokeWidth="3"`, `fill="none"`.
  - Meter Arc: Thick circular arc with `stroke="#111827"`, `strokeWidth="10"`, `strokeLinecap="round"`, `fill="none"`.
  - Starting Angle: `transform="rotate(-90 120 120)"` starting precisely at 12 o'clock.
  - Center Metric: Tabular bold number displaying `15%` (advancing smoothly to `100%`).
  - Dynamic Offsets: `603.185 * (1 - percent / 100)`.
  - Subtitle: Calm status message beneath metric (`Crawling routes on robinsweb.net...` -> `Snapping section 01-navbar.png...`).
  - Interactive testing presets: Quick jump buttons allow evaluating `15%`, `35%`, `65%`, `85%`, and `100%`.
- **State 3: Completion & ZIP File Download (Wireframe Match: "Then zip file download")**:
  - Automatic Completion: Meter fills to 100%, celebrates with calm confetti animation.
  - Automatic Download: Assembles ZIP archive (`robinsweb.net-design.zip`) containing structured folders (`homepage/`, `about/`).
  - Download Presentation Card:
    - Headline: `Website design extracted successfully.` in `font-display`, font-size `20px`, font-weight `600`, color `#111827`.
    - Subtitle: `9 sections captured across 2 pages for robinsweb.net. Archive ready.`
    - Primary Action: Prominent `DownloadButton` in Emerald Green (`#10B981`) with download icon.
    - Secondary Action: `Extract another website` link that resets flow to State 1.

## BLOCK 3: REAL-TIME EXTRACTION EXPLORER & FOLDER HIERARCHY
- **Real-Time Section Tree (`FolderSummaryCard.tsx`)**:
  - Positioned gracefully below the progress meter during extraction or completion.
  - Demonstrates verbatim output folder structure for the target website:
    ```
    robinsweb.net/
    ├── homepage/
    │   ├── 01-navbar.png    (1440 × 80)   [124 KB]  ✓
    │   ├── 02-hero.png      (1440 × 820)  [842 KB]  ✓
    │   ├── 03-services.png  (1440 × 640)  [512 KB]  ✓
    │   └── 04-footer.png    (1440 × 380)  [290 KB]  ✓
    └── about/
        ├── 01-navbar.png    (1440 × 80)   [124 KB]  ✓
        ├── 02-team.png      (1440 × 780)  [720 KB]  ✓
        └── 03-footer.png    (1440 × 380)  [290 KB]  ✓
    ```
  - Section files render with camera icons, dimensions, file size badges, and green checkmarks.
  - Supports quick individual preview modal or single-file download.
  - Real-time status updates: `pending` -> `capturing` -> `saved`.
  - Clean visual separation with light borders and subtle background fills.
  - Collapsible pages to easily inspect dense multi-page folder structures.
  - Highlighting current section being captured with an active badge indicator.

## BLOCK 4: TOP UTILITY SHELL & DRAWER CONTROLS
- **`Navbar.tsx` Cleanup & Streamlining**:
  - Height: `56px`, fixed top, border-bottom `1px solid #E5E7EB`.
  - Brand Mark: Red accent square icon with layers symbol + `SiteRip` in bold `Plus Jakarta Sans` + `v1.0` chip.
  - Engine Status Pill: Live indicator displaying `ENGINE IDLE` (neutral gray dot) or `EXTRACTING` (pulsing red dot).
  - Viewport Chip: Clickable pill showing `1440px Desktop` (opens Settings drawer).
  - Settings Icon Button: Slides in `MenuOverlay` drawer.
  - Delete or hide all extraneous buttons (e.g. feedback modal triggers) to keep the utility interface 100% clean.
  - Zero bloated marketing navigation links (`Pricing`, `Features`, `Enterprise`, `Solutions`).
- **`MenuOverlay.tsx` Slide-In Drawer**:
  - Drawer width: `384px`, right-aligned slide-in panel with backdrop blur.
  - Viewport Options: Radio options for `Desktop (1440 x 900)`, `Tablet (768 x 1024)`, and `Mobile (390 x 844)`.
  - Sticky Isolation Switch: Toggle for `Isolate Sticky Header (Recommended)`.
  - Format Switch: Toggle for `PNG (Lossless)` versus `WebP (Compressed Fast)`.
  - Crawl Delay: Throttle presets (`0.5s`, `1.0s`, `2.0s`).
  - Close actions: Escape key, backdrop click, or Close button.
  - Interactive state sync: Changes immediately reflect in active tool parameters.

## BLOCK 5: BOTTOM UTILITY FOOTER & INTERACTIVE BRAND WATERMARK
- **`Footer.tsx` Anatomy**:
  - Pinned cleanly to the bottom of the page container.
  - System Status Line: `SiteRip · Automated Section Design Extractor · Pure Utility`.
  - Keyboard Shortcuts Hint: `Press Enter to extract · Esc to close drawers`.
  - External Links: GitHub repo link with clean inline SVG icon and Documentation link.
  - Giant Interactive Brand Watermark:
    - Text: `SITERIP` rendered in bold uppercase `font-display`.
    - Font size: `clamp(2.5rem, 8.5vw, 6.5rem)`.
    - Base Color: Subtle low-opacity black (`text-black/[0.08]`) against pure white background.
    - Hover Interaction: Smooth transition on hover to vibrant Google Red (`#EA4335`) with soft ambient drop-shadow.
    - Click Action: Smoothly scrolls page back to top.
  - Copyright line: `(C) 2026 SiteRip. All extracted assets belong to their respective copyright holders.`
  - Fluid responsive scaling prevents horizontal scrollbars across all screen widths.

## BLOCK 6: PRODUCTION HOMEPAGE ASSEMBLY & VERIFICATION GATES
- **`src/app/page.tsx` Assembly**:
  - Remove all temporary showroom cards (`CardsShowroom`, `ComponentsShowroom`, `FoundationPreviewCard`).
  - Render exclusively the production workstation tool:
    ```tsx
    import { HeroSection } from '../components/layout/HeroSection';

    export default function HomePage() {
      return (
        <div className="w-full flex flex-col items-center justify-center flex-1 py-8 px-4 md:px-8">
          <HeroSection />
        </div>
      );
    }
    ```
- **Real-Time Client ZIP Generation Simulation**:
  - When user submits URL, client runs the realistic extraction sequence from 15% through 100%.
  - When 100% is reached, JSZip dynamically packages mock PNG/text files into `robinsweb.net-design.zip` and triggers automatic browser download using FileSaver (`saveAs`).
- **Interactive Simulation Controls**:
  - Smooth animation timeline: 15% (crawling routes) -> 35% (isolating sticky navbar) -> 65% (snapping body sections) -> 85% (snapping footer) -> 100% (packaging zip archive).
  - Quick simulation presets provided on progress view for effortless instant testing.
  - Confetti burst on 100% completion using `canvas-confetti`.
- **Keyboard Navigation & Accessibility Standards**:
  - Pressing `Enter` in the URL input triggers form submission.
  - Pressing `Escape` closes any open drawer or dialog.
  - Full keyboard focus visibly outlines elements with `focus-visible:ring-2 focus-visible:ring-[#EA4335]`.
  - High color contrast ratio exceeds WCAG AA `4.5:1` requirements across all text elements.
  - All interactive icons and buttons carry descriptive aria-label attributes.
  - Screen readers receive real-time aria-live announcements for stage updates.

## BLOCK 7: FILE ARCHITECTURE & IMMUTABLE IMPLEMENTATION MAP
- **Production Directory Inventory**:
  - `src/app/page.tsx`: The single production homepage for the entire tool.
  - `src/app/layout.tsx`: Root shell mounting Navbar and Footer.
  - `src/components/layout/Navbar.tsx`: Minimal utility header without contact/feedback links.
  - `src/components/layout/HeroSection.tsx`: Master workstation stage orchestrating States 1, 2, and 3.
  - `src/components/layout/MenuOverlay.tsx`: Slide-in drawer for viewport and crawl parameters.
  - `src/components/layout/Footer.tsx`: Watermark footer with interactive hover illumination.
  - `src/components/cards/FolderSummaryCard.tsx`: Real-time section tree explorer.
  - `src/components/ui/UrlInput.tsx`: Red border URL input primitive.
  - `src/components/ui/SubmitButton.tsx`: Red border submit button primitive.
  - `src/components/ui/CircularProgress.tsx`: 240px SVG meter with 15% metric and black arc on red ring.
  - `src/components/ui/DownloadCard.tsx`: Completion action card with emerald download trigger.
- **Strict Quality Checklist**:
  - [x] Only a single homepage exists at `src/app/page.tsx`. Zero sub-routes (`/about`, `/contact`, etc.).
  - [x] All temporary preview showrooms are completely purged from the production home page.
  - [x] Three-stage wireframe workflow matches user hand-sketched wireframe verbatim.
  - [x] State 2 hides input and displays only circular progress meter (15% default, red outline, black arc).
  - [x] State 3 provides automatic and 1-click ZIP file download.
  - [x] All colors match Day Theme: White `#FFFFFF`, Neutral Black `#111827`, Google Red `#EA4335`.
  - [x] Zero typographic em-dashes exist across all codebase files.
  - [x] Zero banned AI meta-words exist across all files.
  - [x] TypeScript compilation passes with zero errors (`npx tsc --noEmit`).
  - [x] Localhost server runs smoothly at `http://localhost:3000`.
- **Final Verification Lock**:
  - Confirms zero dead links or hallucinated features exist.
  - Ensures production tool is ready for 60fps interaction and deployment.
  - Fully implements the user sketch with exact red borders and circular meter.
  - Performance guarantee: First Contentful Paint under 0.8s on standard broadband.
  - Hardware accelerated transforms for butter-smooth SVG dashoffset animations.
  - Seamless responsive scaling on mobile (375px), tablet (768px), and desktop (1440px).
