# 03 · Project Scaffolding & State Tracking Standards
**Domain:** Frontend Architecture · Stage 1 Foundation  
**Philosophy:** Strict Clean Architecture. Frontend code lives strictly inside `frontend/`. State is tracked in `frontend/uiux-progress.json` so context is never lost across iterations.

---

## 1. Directory Structure Standards

All frontend code must be strictly isolated inside a dedicated `frontend/` directory.

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
│   │   │   ├── page.tsx          # Master homepage composition
│   │   │   ├── not-found.tsx     # Custom crafted 404 experience
│   │   │   ├── error.tsx         # Resilient error boundary
│   │   │   └── globals.css       # Design tokens, hairlines, utilities
│   │   ├── components/           # Focused, colocated component architecture
│   │   │   ├── ui/               # Primitives (Button, Input, Badge, BrandLogo)
│   │   │   ├── layout/           # Shell elements (Navbar, Footer, SideRail)
│   │   │   └── sections/         # Page sections (Hero, Showcase, ExperienceTimeline)
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

## 2. Stack Requirements (Always Latest)

- **Next.js:** 15.x App Router
- **TypeScript:** Strict mode enabled
- **Tailwind CSS:** Configured with CSS variable design tokens
- **Lenis Smooth Scroll:** `@studio-freight/lenis` or `lenis/react` initialized in root layout
- **GSAP:** `gsap` + `ScrollTrigger`
- **Framer Motion:** `framer-motion`
- **Icons:** `lucide-react`

### Lenis Provider Setup in Next.js 15:
Create `frontend/src/components/layout/SmoothScroll.tsx`:
```tsx
'use client';
import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

Wrap the root layout with `<SmoothScroll>` inside `frontend/src/app/layout.tsx`.

---

## 3. State Tracking File (`frontend/uiux-progress.json`)

When `frontend-architect` runs, it must initialize `frontend/uiux-progress.json`:

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
      "status": "in_progress",
      "completedItems": [
        "Directory structure initialized in frontend/",
        "Design tokens & fluid clamp typography in globals.css",
        "BrandLogo SVG and favicon configured"
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

---

## 4. Foundation Acceptance Checklist:
- [ ] Root folder for the app is strictly named `frontend/`.
- [ ] `frontend/src/app/globals.css` contains all design tokens with fluid `clamp()` variables.
- [ ] `frontend/src/components/ui/BrandLogo.tsx` is implemented with bespoke SVG.
- [ ] `frontend/src/app/icon.tsx` and `frontend/public/icon.svg` are configured.
- [ ] `frontend/src/components/layout/SmoothScroll.tsx` is wired into `layout.tsx`.
- [ ] `frontend/uiux-progress.json` is initialized with Stage 1 marked complete.
