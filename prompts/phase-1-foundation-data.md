# PHASE 1 PROMPT: FOUNDATION, DESIGN TOKENS, TYPOGRAPHY & VERBATIM DATA
**Target Command**: `/2-setup-foundation`
**Source Specification**: `d:/uiux/TOOL_FRONTEND_SPEC.md`
**Visual Artifact Reference**: User hand-sketched wireframe showing Day Theme, Red border input, Submit button, 15% Circular Progress, and ZIP download

## BLOCK 1: PROJECT SCOPE, STACK & ROUTE SKELETON
- **Website & Tool Category**: Developer & Designer Tool / Automated Section Design Extractor Workstation
- **Project Mode**: Build new high-efficiency tool interface from scratch (zero marketing landing page bloat)
- **Core Philosophy**: Smooth, calm, minimal feel like Google. Three-state uncluttered experience:
  1. State 1 (Idle): Centered clean input box (`Enter url: e.g. https://robinsweb.net`) + `submit` button.
  2. State 2 (Active): Input fades out completely (`After submit only progress display`), revealing centered circular progress meter.
  3. State 3 (Completed): Automatic ZIP download trigger paired with clean, calm download action.
- **Preservation Rules**: Zero marketing fluff; preserve 100vh workstation layout; no hero marketing text, no feature cards, no testimonial fluff.
- **Framework & Packages to Install**:
  - Core Runtime: `next@latest`, `react@latest`, `react-dom@latest`, `typescript`, `tailwindcss@3.4.17`
  - Icon & Utility Packages: `lucide-react`, `clsx`, `tailwind-merge`
  - Motion & Telemetry Packages: `framer-motion`, `canvas-confetti`
  - Archiving & File Stream: `jszip`, `file-saver`
- **Route Skeleton & Directory Structure**:
  - `src/app/layout.tsx`: Root HTML5 layout with font injections and CSS theme variables
  - `src/app/page.tsx`: Single-page workstation cockpit UI (Foundation Preview Card in Step 1, Cockpit in Step 5)
  - `src/app/globals.css`: Full `:root` design token definitions, resets, and keyframe animations
  - `src/data/siteData.ts`: Complete data structure for target domains, folder trees, and progress state machine
  - `src/types/extractor.ts`: Strict TypeScript interfaces for Section, PageNode, PipelineState, and ZipManifest
  - `src/components/preview/FoundationPreviewCard.tsx`: Dedicated foundation verification card for `/2-setup-foundation`
  - `src/components/ui/CircularProgress.tsx`: Standalone reusable circular progress component
  - `src/components/ui/UrlInput.tsx`: Minimalist rounded input with red outline and submit trigger
  - `src/components/ui/SubmitButton.tsx`: Smooth calm submit button matching input height
  - `src/components/ui/StatusPill.tsx`: Calm status indicator pill component
  - `src/components/ui/FileTreeRow.tsx`: File tree item row with status indicators
  - `src/components/ui/DownloadCard.tsx`: Smooth completion card with zip download trigger
  - `src/components/ui/ToastNotification.tsx`: Minimalist toast notification for download readiness
- **Tailwind Config Extensions (`tailwind.config.ts`)**:
  - Colors mapped to CSS variables: `canvas`, `surface`, `elevated`, `input`, `accent-red`, `accent-black`, `border-subtle`
  - Fonts mapped to CSS variables: `display: ['var(--font-display)']`, `sans: ['var(--font-sans)']`, `mono: ['var(--font-mono)']`
  - Border radius mapped to variables: `panel: 'var(--radius-panel)'`, `input: 'var(--radius-input)'`
  - Box shadows mapped: `calm: 'var(--shadow-calm)'`, `hover: 'var(--shadow-hover)'`

## BLOCK 2: EXACT CSS COLOR, SURFACE & ATMOSPHERIC TOKENS (`:root`)
Define these exact CSS variables in `src/app/globals.css` and map them to Tailwind utilities in `tailwind.config.ts`:
- Canvas Background Tokens (Day Theme):
  - `--bg-canvas`: `#FFFFFF` (Pure white background)
  - `--bg-surface`: `#F8F9FA` (Soft calm off-white / Google grey-50)
  - `--bg-elevated`: `#FFFFFF` (Floating card elevation with soft 1px border)
  - `--bg-input`: `#FFFFFF` (Pure white input background)
  - `--bg-overlay`: `rgba(255, 255, 255, 0.95)` (Calm transition curtain)
- Typography Colors:
  - `--text-primary`: `#111827` (Crisp neutral black for titles and primary metrics)
  - `--text-secondary`: `#4B5563` (Muted calm slate for status and subtitles)
  - `--text-muted`: `#9CA3AF` (Subtle metadata, selectors, and secondary hints)
  - `--text-red`: `#EA4335` (Google Red for wireframe labels and highlights)
- Accent & Brand Indicators:
  - `--accent-red`: `#EA4335` (Google Red for input border, submit button border, and circle base)
  - `--accent-black`: `#111827` (Deep neutral black for progress fill arc and center numbers)
  - `--accent-white`: `#FFFFFF` (Pure white for card fills and contrasting text)
  - `--accent-success`: `#10B981` (Emerald Green for completed download state)
  - `--accent-idle`: `#E5E7EB` (Clean gray for pending elements)
- Borders & Dividers:
  - `--border-subtle`: `#E5E7EB` (Clean 1px neutral boundary)
  - `--border-red`: `#EA4335` (1.5px Red border as drawn in user wireframe)
  - `--border-focus`: `#EA4335` (Active focus border with soft red shadow)
  - `--border-elevated`: `#D1D5DB` (Hover card outline)
- Gradients & Atmospheric Lighting:
  - `--glow-red-soft`: `0 0 0 3px rgba(234, 67, 53, 0.15)`
  - `--shadow-calm`: `0 1px 3px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.03)`
  - `--shadow-hover`: `0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)`
- Mathematical Circular Progress Tokens:
  - `--meter-size`: `240px`
  - `--meter-stroke-width`: `10px`
  - `--meter-radius`: `96px`
  - `--meter-circumference`: `603.185px`
  - `--meter-offset-15`: `512.707px` (Circumference * (1 - 0.15), matching user wireframe)
  - `--meter-offset-50`: `301.592px`
  - `--meter-offset-85`: `90.478px`
  - `--meter-offset-100`: `0px`
- Surface Geometry:
  - `--radius-panel`: `16px` (Calm Google-like rounded corners)
  - `--radius-input`: `12px` (Clean rounded input container as in sketch)
  - `--radius-btn`: `12px` (Clean rounded button matching input height)
  - `--radius-pill`: `9999px`
- Global Resets & Animation Keyframes:
  - `@keyframes pulseGlow`: `0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(0.92); }`
  - `@keyframes spinSmooth`: `0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }`
  - `@keyframes fadeScaleIn`: `from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); }`
  - `@keyframes fadeOutUp`: `from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-12px); }`
- Surface Physics & Lighting Rules:
  - Google-style minimalism: flat white surfaces, soft hairline borders, subtle elevation.
  - Transitions use `cubic-bezier(0.4, 0.0, 0.2, 1)` (Material standard easing) with `300ms` duration.
  - High-contrast accessibility: `#111827` on `#FFFFFF` delivers a 15.3:1 contrast ratio (AAA compliant).

## BLOCK 3: TYPOGRAPHY LOADING & FLUID SCALE TOKENS
Load these Google Fonts via `next/font/google` in `src/app/layout.tsx`:
- `--font-display`: `Plus Jakarta Sans` (weights `500, 600, 700`)
  - App Brand Title: `15px`, line-height `1.2`, font-weight `600`, letter-spacing `-0.01em`
  - Center Percentage Metric: `clamp(3rem, 6vw, 4rem)`, line-height `1.0`, font-weight `700`, tabular numbers
  - Success Headline: `22px`, line-height `1.3`, font-weight `600`, letter-spacing `-0.01em`
- `--font-sans`: `Inter` (weights `400, 500, 600`)
  - Input Text: `15px`, line-height `1.5`, font-weight `400`, color `#111827`
  - Input Placeholder: `15px`, line-height `1.5`, font-weight `400`, color `#9CA3AF`
  - Submit Button Label: `14px`, line-height `1.0`, font-weight `600`, text-transform `none`
  - Status Indicators: `13px`, line-height `1.4`, font-weight `500`, color `#4B5563`
- `--font-mono`: `JetBrains Mono` (weights `400, 500`)
  - File Names & Selectors: `13px`, line-height `1.4`, font-weight `500`
  - Dimensions & Sizes (`1440 × 820`, `842 KB`): `11px`, line-height `1.2`, font-weight `400`
  - Progress Subtitle (`CRAWLING`, `SNAPPING`, `PACKAGING`): `11px`, letter-spacing `0.06em`, uppercase

## BLOCK 4: COMPLETE VERBATIM USER DATA & ASSET MANIFEST
All parameters below are locked into `src/data/siteData.ts`:
- Tool Metadata:
  - Name: `SiteRip` / `DesignRipper`
  - Theme: `Day Theme (White, Black, Red)`
  - Subtitle: `Minimalist Section Design Extractor & Downloader`
  - Input Placeholder: `Enter url: e.g. https://robinsweb.net`
  - Button Text: `submit`
  - Default Viewport: `Desktop (1440px)`
- Three-Stage Interactive Workflow Specification:
  1. **Stage 1 (Initial Idle)**:
     - Center-aligned input bar (`max-w-md w-full`) with red border (`#EA4335`), white fill, and placeholder.
     - Beside it, the `submit` button with red outline/fill and clean rounded corners (`12px`).
  2. **Stage 2 (After Submit - Progress Only)**:
     - Input and submit button transition out (`opacity: 0, scale: 0.95, display: none`).
     - Center stage displays ONLY the circular progress indicator:
       - Thin base circle in Red (`#EA4335`).
       - Thick active progress arc in Black (`#111827`) starting at 12 o'clock and moving clockwise.
       - Large centered `15%` metric in bold black text (`#111827`).
       - Calm status subtitle: `Crawling routes on robinsweb.net...`
  3. **Stage 3 (Completion & Auto-Download)**:
     - Circular progress smoothly scales to 100% with green checkmark or solid black ring.
     - Automatic download trigger runs `saveAs(blob, "robinsweb.net-design.zip")`.
     - Displays calm confirmation message and 1-click fallback button: `Download zip file`.
- Circular Progress Mathematical Specification:
  - Reference: User-provided wireframe showing circle with `15%` and black arc on red circle outline.
  - SVG Dimension: `240px × 240px`, `viewBox="0 0 240 240"`
  - Center Coordinates: `cx="120"`, `cy="120"`
  - Radius: `r="96"`
  - Base Track: `stroke="#EA4335"`, `stroke-width="3"`, `fill="none"`
  - Active Meter Arc: `stroke="#111827"`, `stroke-width="10"`, `stroke-linecap="round"`
  - Exact Circumference: `603.185px` (`2 * Math.PI * 96`)
  - Sweep Orientation: `-90deg` rotation so stroke starts precisely at top (12 o'clock)
  - Offset Formula: `strokeDashoffset = 603.185 * (1 - progress / 100)`
- Output Folder Blueprint (Verbatim Data):
  - Root Folder: `robinsweb.net/`
  - Page 1 Folder: `homepage/` (`01-navbar.png`, `02-hero.png`, `03-services.png`, `04-portfolio.png`, `05-footer.png`)
  - Page 2 Folder: `about/` (`01-navbar.png`, `02-about-hero.png`, `03-team.png`, `04-footer.png`)
- Strict TypeScript Schema (`src/types/extractor.ts`):
  - `interface SectionItem { id: string; name: string; selector: string; dimensions: string; size: string; status: 'pending' | 'capturing' | 'completed'; }`
  - `interface PageFolder { id: string; name: string; path: string; sections: SectionItem[]; }`
  - `interface ExtractorSiteData { domain: string; pages: PageFolder[]; totalSections: number; totalSize: string; }`
  - `type WorkflowStage = 'idle' | 'progress' | 'completed';`

## BLOCK 5: STRICT HUMAN COPYWRITING LOCK (BANNED AI WORDS)
- BANNED ROBOTIC CLICHES: Never use `Nexus`, `Zero-Slop`, `Telemetry`, `Direct Coordinates`, `Synergistic`, `Revolutionary AI`, `Paradigm Shift`, or fake marketing copy.
- REQUIRED WORKSTATION COPY:
  - Input Placeholder: `Enter url: e.g. https://robinsweb.net`
  - Submit Button: `submit`
  - Active Progress Label: `Extracting sections...`
  - Completion Message: `Website design extracted successfully.`
  - Download Button: `Download zip file`

## BLOCK 6: MANDATORY VISUAL FOUNDATION PREVIEW CARD ON `/` (`localhost:3000`)
When `/2-setup-foundation` executes, it will create a visual design-system preview card in `src/app/page.tsx` rendering:
1. Canvas Background: Renders `--bg-canvas` (`#FFFFFF`) with soft Google-style typography.
2. Centered Foundation Card (`max-w-2xl`, `bg-[#FFFFFF]`, `border border-[#E5E7EB]`, `rounded-[16px]`, `p-8`, `shadow-sm`):
   - Header with title `SiteRip Foundation (Day Theme)` and status pill `READY`.
   - Wireframe Component 1 Preview: Live rendered Input box with Red border (`#EA4335`), white fill, placeholder, and `submit` button.
   - Wireframe Component 2 Preview: Live rendered 240px SVG Circular Progress frozen at **15%** showing the red circle outline, black active arc, and bold `15%` text.
   - Color Swatches: Visual tiles for `#FFFFFF` (White), `#111827` (Black), `#EA4335` (Google Red), `#F8F9FA` (Surface Gray), and `#10B981` (Success Green).
   - Interactive Preview Toggle: Buttons to toggle between `State 1: Input`, `State 2: Progress Only`, and `State 3: Download`.
   - Typography Specimen: Displaying `Plus Jakarta Sans` for titles, `Inter` for inputs and labels, and `JetBrains Mono` for metadata.
   - Button Specimen: Live interactive `submit` button and `Download zip file` button with calm Google hover easing.
   - State Demonstration Logic: Interactive preview allows clicking `submit` to observe smooth transition from State 1 to State 2.
   - Visual Verification Checklist:
     - Confirms Google Fonts load correctly from Google CDN.
     - Confirms CSS tokens render high-contrast AAA accessible text.
     - Confirms SVG circle math maps accurately to 15% progress.
3. Quality Gate Validation Checklist:
   - [x] Every color token has an exact hex code (Day theme: `#FFFFFF`, `#111827`, `#EA4335`).
   - [x] Every font name is an exact Google Font (`Plus Jakarta Sans`, `Inter`, `JetBrains Mono`).
   - [x] All data is verbatim from user hand-drawn wireframe and instructions.
   - [x] Circular SVG math is mathematically verified (`2 * Math.PI * 96 = 603.185`).
   - [x] Output line count is strictly between 180 and 260 lines.
