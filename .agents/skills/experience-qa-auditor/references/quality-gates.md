# Production Quality Gates and Readiness Criteria

Never mark a release as passed by default. A quality gate is an impassable barrier that protects end users from broken software. Status categories must accurately reflect verified evidence.

---

## 1. Readiness Status Taxonomy

Every audit assessment must conclude with one of these explicit status determinations:

| Verdict Category | Formal Definition | Operational Condition |
|---|---|---|
| **PASS** | Complete verification succeeded across all required criteria with concrete evidence. | Zero P0/P1 defects, clean build, verified responsive layout, contrast compliance. |
| **FAIL** | One or more confirmed blocking or critical defects remain active in the codebase. | Build error, broken conversion button, unhandled runtime exception, mobile overflow. |
| **PARTIAL** | Core flagship flows pass, but non-blocking defects or secondary routes need remediation. | Minor visual misalignment, missing tooltip state, pending copy revisions. |
| **NOT VERIFIED** | Available tooling, offline environment, or sandbox permissions precluded verification. | Automated browser runner missing, external API keys absent, device lab unavailable. |
| **BLOCKED** | Upstream dependencies, missing assets, or fundamental build faults halt the audit. | Missing layout specifications, uninstalled dependencies, broken build pipeline. |

---

## 2. Absolute Hard-Blocking Conditions (Immediate FAIL)

The presence of any single condition below mandates an immediate **FAIL** verdict. No exceptions:
1. **Compilation or Build Failure:** `npx tsc --noEmit` or `npm run build` exits with non-zero status.
2. **Unhandled Console Exceptions:** Hydration mismatch crashes, unhandled promise rejections, or React component tree failures.
3. **Dead Primary Conversion CTAs:** Clicking primary buttons ("Contact", "Get Started", "Submit") produces zero response or fails to fire designated handlers.
4. **Mobile Horizontal Overflow:** Any page displays horizontal scroll bars or sideways page drifting on screen widths between 320px and 480px.
5. **Severe Contrast Failures:** Text contrast below 3.0:1 on body copy or primary button labels.
6. **Broken 404 or Missing Error Boundary:** Navigating to an invalid URL crashes the app or displays generic framework hosting defaults instead of `not-found.tsx`.
7. **AI Slop Clichés in Code or Copy:** Presence of unauthorized em-dash or en-dash characters, startup buzzword soup, or repetitive unbranded UI cards.

---

## 3. Comprehensive Production Quality Audit Checklist

Audit these mechanical checkpoints before issuing a final sign-off:

### A. Architectural and Static Integrity
- [ ] TypeScript compiles cleanly with zero type errors (`npx tsc --noEmit`).
- [ ] Production build succeeds without warnings (`npm run build`).
- [ ] ZERO em-dash characters (U+2014) or en-dash characters (U+2013) anywhere in user-facing copy or code comments.
- [ ] Single cohesive theme maintained across the entire route flow.

### B. Visual and Spatial Composition
- [ ] Typography scale follows approved hierarchy from `DESIGN_ENGINEERING_BRIEF.md`.
- [ ] Container geometry (double-bezels, hairline cards, or wells) strictly matches locked brief.
- [ ] Desktop navigation fits on a single line with height <= 80px.
- [ ] Sub-page headers share identical vertical Y-axis starting positions.

### C. Responsive and Touch Ergonomics
- [ ] 320px compact mobile layout verified with zero horizontal overflow.
- [ ] Touch targets measure at least 44x44px within natural thumb sweep zones.
- [ ] All inputs have font size >= 16px to prevent iOS Safari auto-zoom.
- [ ] Sticky hover states suppressed on touchscreens via `@media (hover: hover)`.

### D. Accessibility and Interaction
- [ ] Visible focus rings on all interactive elements via `:focus-visible`.
- [ ] Tab navigation follows logical DOM reading order.
- [ ] All interactive buttons and icon-only triggers feature explicit accessible labels.
- [ ] Form error messages display inline beneath invalid inputs.

### E. SEO, AIO, and Edge Resilience
- [ ] Bespoke `not-found.tsx` renders on invalid route traversal.
- [ ] Client `error.tsx` provides functional `reset()` retry button.
- [ ] Valid metadata exported in `layout.tsx` (title, description, canonical, OpenGraph).
- [ ] Compliant `public/llms.txt` and `public/ai-catalog.json` deployed for AI search engines.
