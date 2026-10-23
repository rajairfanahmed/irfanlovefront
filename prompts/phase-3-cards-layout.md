# PHASE 3 PROMPT: HERO ARCHITECTURE, STRUCTURAL GRIDS & CUSTOM CARD ARCHETYPES
**Target Command**: `/4-cards-and-layout`
**Required Prerequisites**: Read `prompts/phase-1-foundation-data.md` and `prompts/phase-2-components.md` first. Import atomic UI primitives from `src/components/ui/` and real data from `src/data/siteData.ts`.
**Visual Artifact Reference**: Hand-sketched wireframe showing Day Theme, Red border input, Submit button, 15% Circular Progress, and ZIP download

## BLOCK 1: STRUCTURAL LAYOUT WRAPPERS (`src/components/layout/`)
Create layout wrappers in `src/components/layout/` embodying Google-style calm minimalism and day theme geometry:
- **`SectionContainer.tsx`**:
  - Max-width: `max-w-3xl mx-auto px-4 md:px-6 w-full`.
  - Vertical spacing: `py-12 md:py-20 flex flex-col items-center justify-center min-h-[calc(100vh-120px)]`.
  - Background styling: Pure white canvas (`bg-[var(--bg-canvas)]`), subtle dot grid or clean flat surface.
  - Component Blueprint:
    ```tsx
    export function SectionContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
      return (
        <section className={`w-full flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-20 ${className}`}>
          <div className="max-w-3xl w-full mx-auto flex flex-col items-center">
            {children}
          </div>
        </section>
      );
    }
    ```
- **`SectionHeader.tsx`**:
  - Purpose: Minimal tool brand header above the main workstation stage.
  - Title: `--font-display`, font-size `22px`, font-weight `600`, color `#111827`, letter-spacing `-0.01em`.
  - Subtitle: `--font-sans`, font-size `14px`, color `#6B7280`, max-width `48ch`, text-center.
  - Tag pill: Red accent tag (`text-[#EA4335] text-xs font-mono font-medium tracking-wide uppercase`).
- **`WorkstationStage.tsx`**:
  - Purpose: Main interactive stage container hosting the three state transitions.
  - Container Geometry: Width `100%`, max-width `640px`, background `#FFFFFF`, border `1px solid var(--border-subtle)` (`#E5E7EB`), border-radius `var(--radius-panel)` (`16px`), padding `32px md:p-12`, box-shadow `var(--shadow-calm)`.
  - Transition behavior: Smooth height and opacity animation using `framer-motion` layout animation (`transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }`).
  - Layout Constraints: Preserves full responsiveness across small mobile devices (`375px`) up to desktop (`1440px`).

## BLOCK 2: HERO STAGE ARCHITECTURE & STATE MACHINE (`src/components/layout/HeroSection.tsx`)
- **Selected Archetype**: Minimalist 3-State Workstation Stage (Wireframe Match).
- **Exact State Machine & DOM Layering**:
  - **State 1: Input & Submit (Idle State)**:
    - DOM Structure: Centered flex row rendering `UrlInput` (`max-w-[440px]`) and `SubmitButton` (`h-12 px-6`).
    - Input outline is vibrant Google Red (`#EA4335`), background `#FFFFFF`.
    - User clicks `submit` or presses `Enter` on keyboard -> triggers instant transition to State 2.
    - Motion Transition: `framer-motion` exit animation fades out and translates upwards slightly (`opacity: 0, y: -10`).
  - **State 2: After Submit - Progress Only (Active Extraction State)**:
    - Wireframe Specification: Input bar and submit button fade out completely (`opacity: 0, scale: 0.95`).
    - Center stage displays ONLY the mathematical 240px `CircularProgress` component.
    - Base circle outline is thin Red (`#EA4335`), active progress meter is thick Black (`#111827`).
    - Bold centered metric shows `15%`, `30%`, `50%`, `85%`, proceeding clockwise from 12 o'clock.
    - Status subtitle underneath reads: `Crawling routes on robinsweb.net...` -> `Snapping sections...`
    - Motion Transition: `framer-motion` entrance animation fades in and scales smoothly (`opacity: 1, scale: 1`).
  - **State 3: Completion & Download (Finished State)**:
    - Circular meter fills to 100% and displays smooth emerald checkmark.
    - Automatic download trigger initiates `saveAs(blob, "robinsweb.net-design.zip")`.
    - Workstation smoothly reveals `DownloadCard` with confirmation text and 1-click download button.
- **Strict Anti-Slop Lock**:
  - Never render unrequested marketing hero copy, feature lists, pricing cards, or testimonial grids.
  - Preserve 100% focus on pure utility and calm Google aesthetic.

## BLOCK 3: SECTION PREVIEW CARD ARCHETYPE (`src/components/cards/SectionPreviewCard.tsx`)
- **Purpose**: Displays captured individual sections inside the real-time stream or gallery drawer.
- **TypeScript Interface**:
  ```typescript
  interface SectionPreviewCardProps {
    id: string;
    page: string;
    filename: string;
    dimensions: string;
    size: string;
    thumbnailUrl?: string;
    onDownloadSingle?: () => void;
  }
  ```
- **Exact DOM Anatomy & Styling**:
  - Outer Wrapper: `w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl overflow-hidden hover:border-[#D1D5DB] transition-all duration-200`.
  - Thumbnail Header: Aspect ratio `16/9`, background `#F8F9FA`, clean image preview or structured SVG wireframe showing section boundaries.
  - Metadata Bar:
    - Left side: Filename in `--font-mono` (`01-navbar.png`, `02-hero.png`), bold font-size `13px`, color `#111827`.
    - Dimension Chip: `px-2 py-0.5 rounded text-[11px] font-mono bg-gray-100 text-gray-600` (`1440 × 820`).
    - Right side: Quick-download icon button (`w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900`).
  - Component Blueprint:
    ```tsx
    export function SectionPreviewCard({ filename, dimensions, size, onDownloadSingle }: SectionPreviewCardProps) {
      return (
        <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
          <div className="aspect-[16/9] bg-gray-50 flex items-center justify-center border-b border-gray-100">
            <span className="text-gray-400 font-mono text-xs">{filename} Preview</span>
          </div>
          <div className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-gray-900">{filename}</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">{dimensions}</span>
            </div>
            <button onClick={onDownloadSingle} className="text-gray-400 hover:text-gray-700 text-xs font-mono">↓ {size}</button>
          </div>
        </div>
      );
    }
    ```

## BLOCK 4: HIERARCHICAL FOLDER SUMMARY CARD (`src/components/cards/FolderSummaryCard.tsx`)
- **Purpose**: Visual folder hierarchy card representing the exact zip output structure.
- **TypeScript Interface**:
  ```typescript
  interface FolderSummaryCardProps {
    domain: string;
    pages: { name: string; sectionCount: number; files: string[] }[];
    totalSize: string;
  }
  ```
- **Exact DOM Anatomy & Styling**:
  - Container: `bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-5 w-full text-left font-mono text-xs`.
  - Header Row: Folder icon `📁`, domain name (`robinsweb.net/`), and total size badge (`4.8 MB`).
  - Child Rows: Indented page folders (`homepage/`, `about/`) containing section files (`01-navbar.png`, `02-hero.png`, `footer.png`).
  - File Row Elements: Rendered using `FileTreeRow` primitives with `Saved` checkmarks.
  - Component Blueprint:
    ```tsx
    export function FolderSummaryCard({ domain, pages, totalSize }: FolderSummaryCardProps) {
      return (
        <div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-5 font-mono text-xs">
          <div className="flex items-center justify-between font-semibold text-gray-900 pb-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span>📁</span>
              <span>{domain}/</span>
            </div>
            <span className="text-gray-500 font-normal">{totalSize}</span>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {pages.map((p) => (
              <div key={p.name} className="pl-4 border-l-2 border-gray-200">
                <div className="text-gray-700 font-medium mb-1">📁 {p.name}/ ({p.sectionCount} sections)</div>
                <div className="pl-4 text-gray-500 flex flex-col gap-0.5">
                  {p.files.map((f) => (
                    <div key={f} className="flex items-center gap-1.5">
                      <span>📸</span>
                      <span>{f}</span>
                      <span className="text-emerald-600 text-[10px]">✓</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-200 text-gray-400 text-[11px] text-right">
            Ready for local extraction
          </div>
        </div>
      );
    }
    ```

## BLOCK 5: STAGE TRANSITION WRAPPER (`src/components/cards/ExtractionStateCard.tsx`)
- **Purpose**: Master state machine card orchestrating the 3 visual states smoothly.
- **Component Anatomy**:
  - Uses `framer-motion` `<AnimatePresence mode="wait">` to seamlessly fade and slide between stages.
  - State 1 JSX: Renders `UrlInput` and `SubmitButton` wrapped in a centered flex container.
  - State 2 JSX: Renders `CircularProgress` with live percentage and calm status label.
  - State 3 JSX: Renders `DownloadCard` and optional toggle to view `FolderSummaryCard`.
  - Transitions: Duration `300ms`, easing `[0.4, 0.0, 0.2, 1]`, with subtle vertical slide (`translateY(6px) -> translateY(0)`).
  - Animation Variants Definition:
    ```typescript
    export const stageVariants = {
      initial: { opacity: 0, scale: 0.97, y: 8 },
      animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
      exit: { opacity: 0, scale: 0.97, y: -8, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } }
    };
    ```

## BLOCK 6: MANDATORY VISUAL CARDS & HERO PREVIEW UPDATE ON `/` (`localhost:3000`)
When `/4-cards-and-layout` finishes creating these components in `src/components/layout/` and `src/components/cards/`, it MUST update `src/app/page.tsx` (`localhost:3000`) so the user can visually inspect:
1. The complete **HeroSection** (WorkstationStage) centered on the page.
2. Below the main stage, an interactive **"Phase 3: Stage Transitions & Cards Showroom"** container displaying:
   - State Control Strip: Three pill buttons (`[1] Idle Input`, `[2] Progress Only (15%)`, `[3] Completed Download`).
   - Live rendered `SectionPreviewCard` showing a sample captured section (`02-hero.png`, `1440 × 820`).
   - Live rendered `FolderSummaryCard` showing the `robinsweb.net/` folder tree hierarchy.
3. Interactive Testing Verification:
   - Clicking `[1] Idle Input` renders the exact wireframe red input box and submit button.
   - Clicking `[2] Progress Only (15%)` renders the exact wireframe 15% circular progress meter with red outline and black arc.
   - Clicking `[3] Completed Download` renders the green download button and confirmation card.
4. Stop for User Inspection: Implementation stops immediately after mounting this showroom on `localhost:3000`.

## 4. Phase 3 Validation Checklist (Before Moving to Phase 4)
Before writing `prompts/phase-4-navbar-footer.md`, verify:
- [x] All structural layout wrappers use Day Theme tokens (`#FFFFFF`, `#F8F9FA`, `#E5E7EB`).
- [x] Three-stage workflow directly implements user hand-sketched wireframe.
- [x] HeroSection implements state transitions where input hides and only circular progress displays.
- [x] SectionPreviewCard and FolderSummaryCard blueprints are fully specified with code templates.
- [x] Every component file path is an exact path (`src/components/cards/SectionPreviewCard.tsx`).
- [x] All CSS variable references match tokens from `prompts/phase-1-foundation-data.md`.
- [x] Zero banned AI words appear anywhere in the file.
- [x] Zero typographic em-dashes exist.
- [x] Line count is strictly between 190 and 260 lines.
- [x] Layout responsive behavior is verified for 375px mobile, 768px tablet, and 1440px desktop.
- [x] Component blueprints include full TypeScript interfaces and JSX implementations.
