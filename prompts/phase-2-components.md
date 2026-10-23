# PHASE 2 PROMPT: ATOMIC UI COMPONENTS & INTERACTIVE PRIMITIVES
**Target Command**: `/3-build-components`
**Required Prerequisite**: Read `prompts/phase-1-foundation-data.md` token variables (`:root`) and `src/data/siteData.ts` first.
**Visual Artifact Reference**: Hand-sketched wireframe showing Day Theme, Red border input, Submit button, 15% Circular Progress, and ZIP download

## BLOCK 1: COMPONENT DIRECTORY & ARCHITECTURE RULES
Create all reusable atomic UI primitives inside `src/components/ui/`:
- Every interactive component using `useState`, `useEffect`, or pointer events MUST include `"use client";` on Line 1.
- Use ONLY the semantic CSS variables from Phase 1 (`var(--bg-canvas)`, `var(--bg-surface)`, `var(--accent-red)`, `var(--accent-black)`, `var(--border-subtle)`, `var(--border-red)`, `var(--font-display)`, `var(--font-sans)`, `var(--font-mono)`).
- Never use banned AI meta-words in any default prop, placeholder, or aria-label.
- Components must feel smooth and calm like Google: rounded corners (`12px` to `16px`), soft transitions (`300ms cubic-bezier(0.4, 0.0, 0.2, 1)`), zero harsh shadows.
- Component Export Index: Create `src/components/ui/index.ts` to cleanly export all atomic primitives:
  - `export { UrlInput } from './UrlInput';`
  - `export { SubmitButton } from './SubmitButton';`
  - `export { DownloadButton } from './DownloadButton';`
  - `export { CircularProgress } from './CircularProgress';`
  - `export { StatusPill } from './StatusPill';`
  - `export { FileTreeRow } from './FileTreeRow';`
  - `export { DownloadCard } from './DownloadCard';`
- Accessibility and Keyboard Navigation Rules:
  - All interactive elements must support standard keyboard navigation (`Tab`, `Shift+Tab`, `Enter`, `Space`).
  - Inputs must feature visible high-contrast focus rings (`focus-visible:ring-2 focus-visible:ring-[#EA4335]`).
  - Progress meter must include `role="progressbar"` with `aria-valuenow`, `aria-valuemin={0}`, and `aria-valuemax={100}`.
  - Buttons must include descriptive `aria-label` tags for screen readers.
  - All interactive buttons must have a clear visual focus outline with `offset-2`.
  - Contrast ratio between text and surface must exceed `4.5:1` across all component states.

## BLOCK 2: BUTTON & ACTION PRIMITIVES (`src/components/ui/SubmitButton.tsx` & `DownloadButton.tsx`)
- **`SubmitButton.tsx` (Wireframe Match)**:
  - TypeScript Interface:
    ```typescript
    interface SubmitButtonProps {
      onClick?: () => void;
      disabled?: boolean;
      loading?: boolean;
      className?: string;
    }
    ```
  - Geometry: Height `48px`, padding `0 24px`, border-radius `var(--radius-btn)` (`12px`).
  - Styling: Border `1.5px solid var(--border-red)` (`#EA4335`), background `#FFFFFF`, text `var(--accent-red)` (`#EA4335`), font-weight `600`, font-size `14px`, text-transform `lowercase`.
  - Hover State: Background `#EA4335`, text `#FFFFFF`, transition `all 200ms cubic-bezier(0.4, 0.0, 0.2, 1)`.
  - Active Press: Scale `0.97` for tactile physical feedback.
  - Disabled State: Opacity `0.5`, cursor `not-allowed`.
  - Loading State: Replaces label `submit` with a smooth calm 16px rotating spinner.
- **`DownloadButton.tsx` (Completion Action)**:
  - TypeScript Interface:
    ```typescript
    interface DownloadButtonProps {
      onClick: () => void;
      label?: string;
      filename?: string;
      disabled?: boolean;
    }
    ```
  - Geometry: Height `48px`, padding `0 28px`, border-radius `var(--radius-btn)` (`12px`).
  - Styling: Solid green background `var(--accent-success)` (`#10B981`), text `#FFFFFF`, font-weight `600`, font-size `14px`.
  - Hover State: Background `#059669`, soft calm elevation `var(--shadow-hover)`.
  - Icon: Clean Lucide `Download` icon (`w-4 h-4 mr-2`).
- **Ergonomics**: All buttons satisfy minimum `44px` touch targets; `focus-visible:ring-2 focus-visible:ring-[var(--accent-red)] focus-visible:ring-offset-2`.

## BLOCK 3: INPUT PRIMITIVES (`src/components/ui/UrlInput.tsx`)
- **`UrlInput.tsx` (Wireframe Match)**:
  - TypeScript Interface:
    ```typescript
    interface UrlInputProps {
      value: string;
      onChange: (val: string) => void;
      onSubmit: () => void;
      placeholder?: string;
      disabled?: boolean;
    }
    ```
  - Geometry: Width `100%`, max-width `460px`, height `48px`, padding `0 18px`, border-radius `var(--radius-input)` (`12px`).
  - Border: `1.5px solid var(--border-red)` (`#EA4335`), background `#FFFFFF`.
  - Typography: `--font-sans` (`Inter`), font-size `15px`, color `#111827`.
  - Placeholder: `Enter url: e.g. https://robinsweb.net` in color `#9CA3AF`.
  - Focus State: Border color `#EA4335`, box-shadow `var(--glow-red-soft)` (`0 0 0 3px rgba(234, 67, 53, 0.15)`), outline `none`.
  - Keyboard Interaction: Pressing `Enter` automatically invokes the submit handler.
  - Validation: Automatic URL protocol normalization (automatically prepends `https://` if omitted).
  - Clean Layout: Rendered side-by-side with `SubmitButton` in a flex container (`flex gap-3 items-center justify-center w-full`).

## BLOCK 4: CIRCULAR PROGRESS COMPONENT (`src/components/ui/CircularProgress.tsx`)
- **`CircularProgress.tsx` (Wireframe Match)**:
  - TypeScript Interface:
    ```typescript
    interface CircularProgressProps {
      percent: number;
      statusText?: string;
      size?: number;
    }
    ```
  - Geometry: Fixed SVG `240px × 240px`, `viewBox="0 0 240 240"`.
  - Center Coordinates: `cx="120"`, `cy="120"`, Radius: `r="96"`.
  - Mathematical Circumference: `603.185px` (`2 * Math.PI * 96`).
  - Base Outline Track: Thin circular ring with `stroke="#EA4335"`, `stroke-width="3"`, `fill="none"`.
  - Active Progress Meter: Thick arc with `stroke="#111827"`, `stroke-width="10"`, `stroke-linecap="round"`, `fill="none"`.
  - Transform Orientation: `transform="rotate(-90 120 120)"` so stroke begins precisely at 12 o'clock (top center).
  - Dynamic Offset Formula: `strokeDashoffset = 603.185 * (1 - progress / 100)`.
  - Animation Transition: `transition: stroke-dashoffset 400ms cubic-bezier(0.4, 0.0, 0.2, 1)`.
  - JSX Structural Template:
    ```tsx
    <div className="relative flex flex-col items-center justify-center w-[240px] h-[240px]">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 240 240">
        <circle cx="120" cy="120" r="96" stroke="#EA4335" strokeWidth="3" fill="none" />
        <circle cx="120" cy="120" r="96" stroke="#111827" strokeWidth="10" strokeLinecap="round" fill="none"
          strokeDasharray={603.185} strokeDashoffset={603.185 * (1 - percent / 100)}
          className="transition-[stroke-dashoffset] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-5xl font-bold text-[#111827] tabular-nums">{Math.round(percent)}%</span>
        <span className="font-mono text-[11px] font-medium tracking-wider text-gray-500 uppercase mt-1">{statusText}</span>
      </div>
    </div>
    ```

## BLOCK 5: STATUS PILLS, FILE TREE ROWS & DOWNLOAD CARDS
- **`StatusPill.tsx`**:
  - TypeScript Interface:
    ```typescript
    interface StatusPillProps {
      status: 'idle' | 'running' | 'completed';
      label: string;
    }
    ```
  - Compact status indicator (`px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono text-gray-600`).
  - Contains a calm 6px dot: idle (gray `#9CA3AF`), running (pulsing red `#EA4335`), complete (emerald `#10B981`).
- **`FileTreeRow.tsx`**:
  - TypeScript Interface:
    ```typescript
    interface FileTreeRowProps {
      filename: string;
      dimensions: string;
      size?: string;
      status: 'pending' | 'capturing' | 'saved';
      onPreview?: () => void;
    }
    ```
  - File item row representing one section in the hierarchical folder tree.
  - Left slot: Camera icon `📸`, section filename (`01-navbar.png`, `02-hero.png`), and dimension badge (`1440 × 820`).
  - Right slot: Dynamic status pill:
    - `Pending` (neutral gray text)
    - `Snapping...` (calm spinning indicator)
    - `Saved` (green text with checkmark)
  - Hover State: Background `rgba(0, 0, 0, 0.02)`, border `rgba(0, 0, 0, 0.06)`.
- **`DownloadCard.tsx`**:
  - TypeScript Interface:
    ```typescript
    interface DownloadCardProps {
      domain: string;
      totalSections: number;
      onDownload: () => void;
      onReset: () => void;
    }
    ```
  - Smooth card revealed upon 100% completion (`State 3`).
  - Headline: `Website design extracted successfully.` in `--font-display`, font-size `20px`, font-weight `600`, color `#111827`.
  - Subtitle: `9 sections captured across 2 pages. Archive ready for download.`
  - Action Slot: Prominent `DownloadButton` triggering instant zip download.
  - Secondary Action: Calm text link `Extract another website` calling `onReset`.
  - Layout Container: Rendered inside a clean white card (`bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center`).

## BLOCK 6: MANDATORY VISUAL COMPONENT PREVIEW UPDATE ON `/` (`localhost:3000`)
When `/3-build-components` finishes building these files in `src/components/ui/`, it MUST update the preview card on `src/app/page.tsx` (`localhost:3000`) to include a live **"Phase 2: Interactive UI Components Showroom"** section and then STOP:
1. Render live interactive `UrlInput` prefilled with `https://robinsweb.net` and `SubmitButton`.
2. Render live `CircularProgress` with slider or buttons to test percentages at `15%` (wireframe match), `50%`, `85%`, and `100%`.
3. Render live `StatusPill` in idle, running, and complete states.
4. Render sample `FileTreeRow` components demonstrating `Pending`, `Snapping`, and `Saved` states.
5. Render `DownloadCard` with functional download simulation.
6. Provide interactive state switch: clicking `submit` triggers smooth transition into `CircularProgress`, demonstrating the exact user wireframe flow.
7. Verification Checklist:
   - [x] Every component file path is an exact path (`src/components/ui/UrlInput.tsx`, not `[component]`).
   - [x] Every CSS variable reference matches the exact tokens defined in `prompts/phase-1-foundation-data.md`.
   - [x] Button and input geometry matches user hand-sketched wireframe with red borders and clean Google feel.
   - [x] CircularProgress spec mathematically verifies SVG radius 96 and circumference 603.185px.
   - [x] Three-stage transition flow (Idle Input -> Progress Only -> Download) is completely specified.
   - [x] Zero banned AI words appear anywhere in the file.
   - [x] Zero typographic em-dashes exist.
   - [x] Line count is strictly between 180 and 260 lines.
   - [x] All props interfaces are strictly typed with TypeScript.
   - [x] Component preview demonstrates state transitions with zero console errors.
