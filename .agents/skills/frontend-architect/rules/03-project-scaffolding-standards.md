# 03 · Project Scaffolding, Scope Boundaries & Tailwind Verification
**Domain:** Frontend Architecture · Stage 1 Foundation  
**Philosophy:** Strict Clean Architecture & Disciplined Scope. Do not jump ahead. Verify foundations before marking complete.

---

## ⛔ CRITICAL SCOPE BOUNDARY (STAGE 1 ONLY)

`frontend-architect` is strictly responsible for **Stage 1: Foundation**.

### What Stage 1 DOES:
- Scaffolds or verifies the `frontend/` directory structure.
- Configures Tailwind CSS and ensures Tailwind directives are loaded in `frontend/src/app/globals.css`.
- Declares design tokens, fluid clamp typography, and the tap-highlight fix in `globals.css`.
- Implements `frontend/src/components/ui/BrandLogo.tsx`.
- Implements dynamic `frontend/src/app/icon.tsx` and `frontend/public/icon.svg`.
- Implements `frontend/src/components/layout/SmoothScroll.tsx` (Lenis) and connects it in `frontend/src/app/layout.tsx`.
- Sets up `frontend/src/app/page.tsx` as a minimal foundation placeholder showcasing the BrandLogo, tokens, and font typography.
- Initializes `frontend/uiux-progress.json`.

### ❌ What Stage 1 MUST NEVER DO:
- **DO NOT** build Hero sections, work showcases, timelines, or downstream sections! That is Stage 2 (`creative-layout-engineer`) and Stage 3 (`interactive-component-engineer`).
- **DO NOT** attempt to finish the whole website in one turn.
- **DO NOT** skip the intake questions.

---

## ⛔ LOCALHOST & TESTING POLICY (NO SELF-TESTING)

- **NEVER** run `npm run dev`, `next dev`, or launch background server processes.
- **NEVER** use browser subagents to test the site.
- **The USER will test the application on localhost themselves.**
- The agent's duty is to write clean, syntactically correct, properly configured code and hand over control to the user.

---

## 🔍 TAILWIND CSS VERIFICATION CHECKLIST

Before marking Stage 1 complete, you **MUST** verify:
1. `frontend/src/app/globals.css` starts with:
   - `@tailwind base;\n@tailwind components;\n@tailwind utilities;` (Tailwind v3) OR
   - `@import "tailwindcss";` (Tailwind v4)
2. `frontend/tailwind.config.ts` exists and includes `./src/**/*.{js,ts,jsx,tsx,mdx}` in its `content` array.
3. `frontend/postcss.config.mjs` (or `.js`) is present.
4. CSS variables are defined in `:root` inside `globals.css`.
5. If Tailwind directives are missing, Tailwind is NOT loaded and the entire page will render as broken, unstyled HTML!

---

## 📁 Standardized Directory Layout (`frontend/`)

All frontend code must be strictly isolated inside a dedicated `frontend/` directory:

```
my-project/
├── frontend/                     # Dedicated frontend application directory
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── icon.svg              # Vector brand mark / monogram
│   │   └── og-preview.png        # Social share card (1200x630)
│   ├── src/
│   │   ├── app/                  # Next.js 15 App Router
│   │   │   ├── layout.tsx        # Root layout with Lenis smooth scroll, fonts, metadata
│   │   │   ├── page.tsx          # Minimal Stage 1 foundation placeholder
│   │   │   ├── globals.css       # Tailwind directives + design tokens + tap fix
│   │   ├── components/           # Focused, colocated component architecture
│   │   │   ├── ui/               # Primitives (BrandLogo, Button)
│   │   │   ├── layout/           # Shell elements (SmoothScroll)
│   │   │   └── sections/         # Reserved for Stage 2 & Stage 3
│   │   ├── hooks/                # Custom React hooks (useLenis, useScrollProgress)
│   │   ├── lib/                  # Utilities (cn, animations, gsapHelper, schema)
│   │   └── types/                # Strict TypeScript interfaces
│   ├── uiux-progress.json        # Project state & milestone tracker
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── package.json
└── (backend / docs / root)       # Completely decoupled from frontend app code
```

---

## 📊 State Tracking (`frontend/uiux-progress.json`)

```json
{
  "project": {
    "name": "Project Name",
    "directory": "frontend",
    "stack": {
      "framework": "Next.js 15 App Router",
      "language": "TypeScript",
      "styling": "Tailwind CSS with CSS Variables",
      "motion": "GSAP + Framer Motion",
      "smoothScroll": "Lenis"
    },
    "createdAt": "2026-10-15T00:00:00Z",
    "updatedAt": "2026-10-15T00:00:00Z"
  },
  "currentStage": 1,
  "stages": {
    "1_foundation": {
      "agent": "frontend-architect",
      "status": "completed",
      "tailwindLoaded": true,
      "completedItems": [
        "Directory structure verified in frontend/",
        "Tailwind directives & design tokens verified in globals.css",
        "BrandLogo SVG and dynamic favicon configured",
        "Lenis smooth scroll wired in layout.tsx"
      ],
      "activeDecisions": {
        "colorPalette": "Deep Obsidian Slate & Electric Amber",
        "typography": "Syne (Display) + Plus Jakarta Sans (Sans) + JetBrains Mono (Mono)"
      }
    },
    "2_creative_layout": {
      "agent": "creative-layout-engineer",
      "status": "pending",
      "layoutArchetype": null,
      "navigationStyle": null,
      "heroFocalPoint": null
    },
    "3_interactive_components": {
      "agent": "interactive-component-engineer",
      "status": "pending",
      "sections": [],
      "motionLevel": null
    },
    "4_qa_and_seo": {
      "agent": "experience-qa-auditor",
      "status": "pending",
      "notFoundPage": false,
      "errorBoundary": false,
      "mobileAudit": false,
      "accessibilityAudit": false,
      "jsonLdSchema": false
    }
  }
}
```
