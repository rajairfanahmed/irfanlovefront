# 07 · Step-by-Step Execution & Progress Tracking Standard
**Status:** Mandatory Workflow Architecture  
**Purpose:** Ensure every UI/UX frontend project is executed methodically step-by-step, with automated progress tracking so the AI never loses state, forgets past decisions, or introduces regressions during user change requests.

---

## 1. The `frontend/uiux-progress.json` State Tracker

Whenever `/irfanlovefront` is initiated on any project, the agent creates (or updates) a state tracking file in the dedicated frontend workspace: `frontend/uiux-progress.json`.

This file records exact milestone completion, design decisions, token values, page inventories, and user feedback history.

### Schema Blueprint (`frontend/uiux-progress.json`):

```json
{
  "project": {
    "name": "Developer Tooling Platform",
    "type": "High-Performance Distributed Systems & Cloud Infrastructure",
    "updatedAt": "2026-10-18T12:00:00Z"
  },
  "currentPhase": "PHASE_2_BUILD",
  "dials": {
    "DESIGN_VARIANCE": "0.85",
    "MOTION_INTENSITY": "0.60",
    "VISUAL_DENSITY": "0.75"
  },
  "milestones": {
    "01_requirements_discovery": {
      "status": "COMPLETED",
      "brandTone": "Architectural Precision & High-Concurrency Systems",
      "primaryAudience": "Staff software engineers, infrastructure leads, research teams"
    },
    "02_brand_inspiration": {
      "status": "COMPLETED",
      "studiedBrandReferences": [
        "design-refs/linear.app-DESIGN.md",
        "design-refs/stripe-DESIGN.md"
      ],
      "extractedDNA": "Asymmetric 5fr/7fr hero statement, tabular project index with hairlines, zero card-in-card nesting"
    },
    "03_design_thesis": {
      "status": "COMPLETED",
      "thesisPath": "frontend/DESIGN_ENGINEERING_BRIEF.md",
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
      }
    },
    "04_user_confirmation": {
      "status": "APPROVED",
      "feedbackHistory": [
        "Initial concept approved. User requested tabular index over card grids."
      ]
    },
    "05_stack_and_foundation": {
      "status": "COMPLETED",
      "framework": "Next.js 15 (App Router inside frontend/)",
      "tokenFile": "frontend/src/app/globals.css",
      "customLogo": "frontend/src/components/ui/BrandLogo.tsx (4-Pillar Standalone Logo)",
      "customFavicon": "frontend/public/icon.svg",
      "appIcon": "frontend/src/app/icon.tsx"
    },
    "06_pages_and_components": {
      "status": "IN_PROGRESS",
      "routes": {
        "/": { "status": "COMPLETED", "inspectedViewports": ["320px", "375px", "768px", "1440px"] },
        "/about": { "status": "IN_PROGRESS" },
        "/projects": { "status": "PENDING" },
        "/404": { "status": "COMPLETED", "component": "frontend/src/app/not-found.tsx" },
        "/error": { "status": "COMPLETED", "component": "frontend/src/app/error.tsx" }
      }
    },
    "07_mobile_first_zero_overflow": {
      "status": "VERIFIED_320PX_PASS",
      "hasHorizontalScroll": false
    },
    "08_seo_and_accessibility": {
      "status": "COMPLETED",
      "wcagContrast": "PASSED_AA",
      "jsonLdSchema": "SoftwareApplication",
      "openGraphMeta": true,
      "agenticBrowsing": "3/3_VERIFIED"
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
[2. Ingest Brand References from design-refs/] ──> Records 1-3 brand specs in tracker
              ↓
[3. Design Thesis Specification] ──> Generates frontend/DESIGN_ENGINEERING_BRIEF.md
              ↓
[4. User Confirmation Gate] ──> User approves or requests direction tweaks
              ↓
[5. Foundation Setup inside frontend/] ──> CSS Tokens, 4-Pillar SVG Logo, Dynamic Favicon
              ↓
[6. 1-Page-at-a-Time Construction] ──> Mobile-First (320px to Desktop), Custom 404, Error UX
              ↓
[7. Production Audit & Code Verification] ──> Verify 320px to 1440px, zero overflow, tap-highlight fix
              ↓
[8. SEO, A11y & Agentic Verification] ──> JSON-LD, WCAG AA, 100/100 Lighthouse & 3/3 AIO
```

---

## 3. The "AI Never Forgets" Change-Management Protocol

When a user requests modifications during or after implementation (e.g. *"change the hero section"* or *"make the cards feel lighter"*):

1. **Read `frontend/uiux-progress.json` First:**  
   The agent inspects the progress tracker to identify what was previously decided, locked tokens, existing routes, and prior feedback.
2. **Log the New Change Request:**  
   Add the user's request to `feedbackHistory` inside `frontend/uiux-progress.json`.
3. **Execute Targeted Changes Without Regressions:**  
   Apply modifications to specific components or tokens while preserving all verified foundations (responsive layout, 404 pages, SEO metadata, accessible contrast).
4. **Update Milestone Status & Re-Verify:**  
   Mark the affected milestone for re-inspection and update `frontend/uiux-progress.json`.
