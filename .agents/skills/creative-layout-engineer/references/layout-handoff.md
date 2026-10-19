# Layout Implementation Handoff & Full-Site Coverage Matrix

**Scope:** Downstream Engineering Contracts, Route Coverage Matrix & Multi-Route Completion  
**Owner:** `creative-layout-engineer`  
**Load Condition:** Loaded during Phase 5 & 6 of Stage 2 when validating coverage and handing off to Stage 3  

---

## 1. Purpose & Problem Solved
Previously, layout agents would halt after generating only the home page hero, falsely declaring the project finished. This reference establishes the multi-route execution standard: requiring full-site section coverage, maintaining a Route & Section Coverage Matrix, and handing off complete layout contracts to `interactive-component-engineer`.

---

## 2. When to Load This Reference
- Loaded during Phase 5 (Coverage Audit) and Phase 6 (Handoff & Verification).
- Loaded to prepare downstream component requirements and state handoffs.

---

## 3. Multi-Route Continuous Execution Protocol

1. **Continuous Multi-Route Construction:**
   The agent constructs the structural layout across all required routes in the inventory without halting after each individual page by default.
2. **When to Pause:**
   The agent pauses only when:
   - A genuine technical blocker occurs that requires user decision.
   - The user explicitly requested in their prompt to pause after a specific page for review.
3. **Skeleton & Section Implementation:**
   Where code implementation is requested, the agent generates actual structural files for all required routes (e.g. `app/page.tsx`, `app/features/page.tsx`, `app/contact/page.tsx`), wiring shared navigation and persistent footer.

---

## 4. The Route and Section Coverage Matrix

Before declaring completion, `creative-layout-engineer` must populate and verify this coverage matrix in `frontend/PLAN.md`:

| Route | Required Sections | Layout Complete | Responsive Check | Status |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Nav, 4-Element Hero, Value Showcase, Interactive Demo, Proof, Footer | Yes | Pass (320px-1440px) | Complete |
| `/features` | Nav, Sub-Header, Feature Deep-Dive Grid, Architecture Diagram, Footer | Yes | Pass (320px-1440px) | Complete |
| `/about` | Nav, Sub-Header, Team Narrative, Milestones, Contact CTA, Footer | Yes | Pass (320px-1440px) | Complete |
| `/contact` | Nav, Sub-Header, Interactive Form Well, Support Channels, Footer | Yes | Pass (320px-1440px) | Complete |

### Coverage Integrity Rules:
- **No Partial Claims:** If a route requires 5 sections and only the hero is implemented, the route status MUST be marked `Incomplete`.
- **Explicit Omissions:** If any section or route could not be built due to missing information, record it explicitly as an assumption or pending item in the completion report. Never silently omit required pages.

---

## 5. Downstream Component Contract Specification

For every completed route, document the interactive component requirements for `interactive-component-engineer`:

```markdown
### Component Contract for [Page Name] ([Route])
- **Page File:** `frontend/src/app/[route]/page.tsx`
- **Required Interactive Components:**
  1. `<HeroSection />`:
     - Container: `min-h-[100svh] w-full max-w-7xl mx-auto px-6`
     - Expected Behavior: Mobile drawer toggle, tactile CTA button press (`scale(0.97)`).
  2. `<InteractiveContactForm />`:
     - Container: `w-full max-w-2xl mx-auto @container`
     - Expected Behavior: Inline validation on blur, disabled state during submission.
```

---

## 6. State Tracking Update (`frontend/uiux-progress.json`)

Update `frontend/uiux-progress.json` reflecting all completed routes:

```json
{
  "currentStage": 2,
  "stageName": "Macro-Layout & Responsive Page Craft",
  "status": "COMPLETED",
  "completedRoutes": ["/", "/features", "/about", "/contact"],
  "pendingRoutes": []
}
```

---

## 7. Downstream Handoff Notice
Deliver a structured completion report to the user and instruct them to run `/interactive-component-engineer` to implement interactions, forms, and motion choreography.
