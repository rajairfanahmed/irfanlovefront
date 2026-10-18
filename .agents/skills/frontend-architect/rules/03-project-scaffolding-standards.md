# 03: Project Scaffolding Standards & State Tracking
**Domain:** Frontend Architecture (Stage 1 Foundation)  
**Philosophy:** Rigorous folder isolation, state synchronization, and zero self-testing. Zero em-dashes.

---

## 1. Dedicated Workspace Directory (`frontend/`)

All web application code files, configs, and assets MUST live strictly inside `frontend/`. 
- **CRITICAL BAN:** NEVER create web application files or folders in the root directory or inside `.agents/`.
- `.agents/` is strictly quarantined for agent skills, rules, and customization metadata.
- Workspace root is reserved for repository-level metadata (`README.md`, `LICENSE`, etc.).

```
frontend/
  PLAN.md                 # Live plan with real-time checkboxes
  uiux-progress.json      # Machine-readable state & dials tracker
  package.json
  tsconfig.json
  src/
    app/
      layout.tsx
      page.tsx
      globals.css
      icon.tsx
    components/
      ui/
        BrandLogo.tsx
      layout/
        SmoothScroll.tsx
```

---

## 2. State & Dials Tracker (`frontend/uiux-progress.json`)

Stage 1 initializes `frontend/uiux-progress.json` recording the inferred design read, aesthetic, and Three Dials:

```json
{
  "project": {
    "name": "frontend-platform",
    "designRead": "Reading this as: B2B SaaS landing for technical buyers, with a Linear-style minimalist language, leaning toward Tailwind utilities + Geist + restrained motion.",
    "aesthetic": "Linear-minimalist",
    "dials": {
      "DESIGN_VARIANCE": 7,
      "MOTION_INTENSITY": 6,
      "VISUAL_DENSITY": 4
    }
  },
  "currentStage": 1,
  "tailwindLoaded": true,
  "stages": {
    "1_foundation": {
      "status": "completed",
      "fontPairing": {
        "display": "Geist Display",
        "sans": "Geist Sans",
        "mono": "Geist Mono"
      },
      "iconsPackage": "@phosphor-icons/react",
      "palette": "Cold Luxury",
      "completedAt": "2026-10-15T18:00:00Z"
    },
    "2_creative_layout": { "status": "pending" },
    "3_interactive_components": { "status": "pending" },
    "4_qa_and_seo": { "status": "pending" }
  }
}
```

---

## 3. Mandatory Tailwind Verification Checklist

Before marking Stage 1 complete:
1. Verify `@import "tailwindcss";` (or `@tailwind base; @tailwind components; @tailwind utilities;`) is on line 1 of `frontend/src/app/globals.css`.
2. Verify `content` paths in `tailwind.config.ts` match `./src/**/*.{js,ts,jsx,tsx,mdx}`.
3. Verify CSS variables compile and are available in the root `:root`.
4. Verify sticky tap-highlight fix is present in `globals.css`.
