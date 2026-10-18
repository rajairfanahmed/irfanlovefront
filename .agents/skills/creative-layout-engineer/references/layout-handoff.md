# Layout Implementation Handoff & Downstream Integration

**Scope:** Downstream Engineering Contracts, Component Requirements & State Handoff  
**Owner:** `creative-layout-engineer`  
**Load Condition:** Loaded during Step 8 & 10 of Stage 2 when handing off to component engineering  

---

## 1. Purpose & Problem Solved
When a layout engineer finishes page scaffolding, component engineers frequently have to guess component boundaries, responsive rules, or intended animation hooks. This reference establishes the implementation handoff protocol: documenting exact affected file paths, component requirements, and responsive contracts for Stage 3 (`interactive-component-engineer`).

---

## 2. When to Load This Reference
- Loaded upon completing the layout and responsive structure for the active target page.
- Loaded to prepare the handoff contract and update progress tracking.

---

## 3. The 1-Page-at-a-Time Incremental Construction Protocol

To ensure deep craft and prevent token exhaustion or superficial output:
1. **Build One Page Per Run:** Focus the entire execution on a single target route (e.g. `homepage`, then `/features`, then `/about`).
2. **Implement Complete Layout & Responsive Defenses:** Full mobile-first responsiveness (320px to 1440px), container queries, and fluid clamp typography are built directly into the page.
3. **Stop & Await User Confirmation:** Once the single target page is completed, display the milestone summary, update state, and halt execution. Do NOT rush ahead to the next page until the user confirms.

---

## 4. Downstream Component Contract Specification

For every page completed, document the component implementation requirements in `frontend/PLAN.md`:

```markdown
### Component Contract for [Page Name] ([Route])
- **Page File:** `frontend/src/app/[route]/page.tsx`
- **Required Components:**
  1. `<HeroAsymmetricSplit />`:
     - Container: `min-h-[100svh] w-full max-w-7xl mx-auto px-6`
     - Motion Hook: GSAP ScrollTrigger timeline for sticky left rail and right snap track.
     - State Requirements: Tactile button press (`scale(0.97)`), responsive drawer toggle.
  2. `<MetricTelemetryRow />`:
     - Container: `@container border-t border-[var(--border-subtle)]`
     - State Requirements: Number counter scrub or live status ping.
```

---

## 5. State Tracking Update (`frontend/uiux-progress.json`)

Update the active route status in `frontend/uiux-progress.json`:

```json
{
  "currentStage": 2,
  "stageName": "Macro-Layout & Responsive Page Craft",
  "status": "IN_PROGRESS",
  "activeRoute": "/",
  "completedRoutes": ["/"],
  "pendingRoutes": ["/about", "/features", "/pricing", "/contact"]
}
```

---

## 6. Terminal Milestone Display

Display a clear milestone message to the user and halt:
```text
Layout Completed: [Page Name] ([Route])
- Mobile-first responsiveness implemented (320px to 1440px)
- Container queries and fluid clamp typography active
- Zero horizontal overflow verified

Please inspect this page on localhost.
Confirm when you are ready, then run /creative-layout-engineer to build the next page: [Next Route].
```
