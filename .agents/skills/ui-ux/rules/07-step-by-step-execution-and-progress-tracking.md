# 07 · Step-by-Step Execution & Progress Tracking Standard
**Status:** Mandatory Workflow Architecture  
**Purpose:** Ensure every UI/UX frontend project is executed methodically step-by-step, with automated progress tracking so the AI never loses state, forgets past decisions, or introduces regressions during user change requests.

---

## 1. The `uiux-progress.json` State Tracker

Whenever `/uiux` is initiated on any project, the agent creates (or updates) a state tracking file in the project root: `uiux-progress.json` (or `.agents/uiux-progress.json`).

This file records exact milestone completion, design decisions, token values, page inventories, and user feedback history.

### Schema Blueprint (`uiux-progress.json`):

```json
{
  "project": {
    "name": "Muhammad Zain-Ul-Abideen Portfolio",
    "type": "Software Engineer & Distributed Systems Portfolio",
    "updatedAt": "2026-10-15T10:45:00Z"
  },
  "currentPhase": "PHASE_2_BUILD",
  "milestones": {
    "01_requirements_discovery": {
      "status": "COMPLETED",
      "brandTone": "Architectural Precision & High-Concurrency Systems",
      "primaryAudience": "Tech recruiters, engineering leaders, research labs"
    },
    "02_portfolio_inspiration": {
      "status": "COMPLETED",
      "studiedDesigns": [
        "contemporary-figma-portfolio-website-tem.jpg",
        "black-website-design-desain-ux-sites-lay.jpg",
        "portfolio-template-sviluppo-software-web.jpg"
      ],
      "extractedDNA": "Asymmetric 5fr/7fr hero statement, tabular project index with hairlines, zero card-in-card nesting"
    },
    "03_design_thesis_mockup": {
      "status": "COMPLETED",
      "palette": {
        "background": "#0B0F17",
        "surface": "#151B26",
        "textPrimary": "#F8FAFC",
        "accent": "#F59E0B"
      },
      "typography": {
        "display": "Space Grotesk",
        "body": "Geist Sans",
        "mono": "JetBrains Mono"
      },
      "mockupImagePath": "artifacts/mockup_v1.png"
    },
    "04_user_confirmation": {
      "status": "APPROVED",
      "feedbackHistory": [
        "Initial concept approved. User requested tabular index over card grids."
      ]
    },
    "05_stack_and_foundation": {
      "status": "COMPLETED",
      "framework": "Next.js 15 (App Router)",
      "tokenFile": "src/app/globals.css",
      "customLogo": "src/components/BrandLogo.tsx (SVG Monogram)",
      "customFavicon": "public/icon.svg"
    },
    "06_pages_and_components": {
      "status": "IN_PROGRESS",
      "routes": {
        "/": { "status": "COMPLETED", "inspectedViewports": ["320px", "375px", "768px", "1440px"] },
        "/about": { "status": "IN_PROGRESS" },
        "/projects": { "status": "PENDING" },
        "/404": { "status": "COMPLETED", "component": "src/app/not-found.tsx" },
        "/error": { "status": "COMPLETED", "component": "src/app/error.tsx" }
      }
    },
    "07_mobile_first_zero_overflow": {
      "status": "VERIFIED_320PX_PASS",
      "hasHorizontalScroll": false
    },
    "08_seo_and_accessibility": {
      "status": "COMPLETED",
      "wcagContrast": "PASSED_AA",
      "jsonLdSchema": "Person",
      "openGraphMeta": true
    }
  }
}
```

---

## 2. Step-by-Step Execution Lifecycle

Every project strictly advances through these sequential gates:

```
[1. Requirements & Discovery]
              ↓
[2. Inspiration from designs/] ──> Records 3-5 images in tracker
              ↓
[3. Design Thesis & Mockup Image] ──> Generates visual concept
              ↓
[4. User Confirmation Gate] ──> User approves or requests tweaks
              ↓
[5. Foundation Setup] ──> CSS Tokens, Custom SVG Logo, Custom Favicon
              ↓
[6. Component & Route Build] ──> Mobile-First (320px ➔ Desktop), Custom 404, Error UX
              ↓
[7. Browser Subagent Preview] ──> Verify 320px to 1440px, zero overflow, zero sticky focus
              ↓
[8. SEO & A11y Verification] ──> JSON-LD, WCAG AA, Core Web Vitals
```

---

## 3. The "AI Never Forgets" Change-Management Protocol

When a user requests modifications during or after implementation (e.g. *"change the hero section"* or *"make the cards feel lighter"*):

1. **Read `uiux-progress.json` First:**  
   The agent inspects the progress tracker to identify what was previously decided, locked tokens, existing routes, and prior feedback.
2. **Log the New Change Request:**  
   Add the user's request to `feedbackHistory` inside `uiux-progress.json`.
3. **Execute Targeted Changes Without Regressions:**  
   Apply the modifications to the specific components or tokens while preserving all verified foundations (responsive layout, 404 pages, SEO metadata, accessible contrast).
4. **Update Milestone Status & Re-Verify:**  
   Mark the affected milestone for re-inspection, test the dev server preview, and update `uiux-progress.json`.
