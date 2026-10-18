# Component Architecture, Boundaries & Composition Standards

**Scope:** Component Boundaries, Reusable Abstractions & File Organization  
**Owner:** `interactive-component-engineer`  
**Load Condition:** Loaded during Step 2 of Stage 3 when defining component boundaries  

---

## 1. Purpose & Problem Solved
AI generators often create either giant 800-line monolithic files with nested inline handlers, or splinter code into dozens of useless 5-line micro-components. This reference establishes rules for intentional component boundaries, separation of concerns, and clean composition patterns.

---

## 2. When to Load This Reference
- Loaded when analyzing layout blueprints from `creative-layout-engineer`.
- Loaded before deciding which UI elements should become standalone components.

---

## 3. Principles of Component Extraction

Never extract a component simply because a JSX block is long. A component should be created only when it satisfies at least one of these criteria:
1. **Behavioral Complexity:** The element manages local state, event listeners, keyboard traps, or animation lifecycles (e.g. `<MobileDrawer />`, `<Tabs />`, `<CommandMenu />`).
2. **True Reusability:** The element appears across multiple routes or sections with variable content (e.g. `<Button />`, `<Badge />`, `<FormField />`, `<MetricCard />`).
3. **Cognitive Clarity:** Extracting the section isolates domain rendering from page orchestration (e.g. `<HeroSection />`, `<CaseStudyTrack />`).

---

## 4. Shared Primitives vs Page-Specific Components

Maintain a clear distinction in directory organization:
- **`frontend/src/components/ui/` (Shared Primitives):**
  - Highly reusable, domain-agnostic UI elements.
  - Examples: `Button.tsx`, `Card.tsx`, `Input.tsx`, `Badge.tsx`, `Dialog.tsx`, `BrandLogo.tsx`.
  - Must accept standard HTML attributes and a `className` prop for contextual extension.
- **`frontend/src/components/layout/` (App Shell):**
  - Persistent infrastructure: `Navbar.tsx`, `Footer.tsx`, `MobileDrawer.tsx`, `SkipLink.tsx`.
- **`frontend/src/components/sections/` (Page-Specific Blocks):**
  - Composite sections tailored to specific route narratives (e.g. `HeroSection.tsx`, `ArchitectureTelemetry.tsx`, `PricingMatrix.tsx`).

---

## 5. Composition Over Configuration (The Anti-Prop-Bloat Rule)

Avoid creating universal components with 30 boolean configuration props (`isHero`, `hasIcon`, `isDark`, `isDoubleBezel`, `showBadge`). Instead, utilize React composition and children slots:

```tsx
// Good: Flexible composition pattern
<Card>
  <CardHeader>
    <CardBadge>Telemetry</CardBadge>
    <CardTitle>Cluster Latency</CardTitle>
  </CardHeader>
  <CardContent>
    <MetricGraph data={latencyData} />
  </CardContent>
</Card>
```

---

## 6. Component Naming & Export Conventions
- Use PascalCase for component files and functions: `Button.tsx`, `MobileDrawer.tsx`.
- Use named exports: `export function Button(...)`. Avoid default exports for components to ensure consistent refactoring and discoverability.
- Locate component-specific sub-components in the same file if under 150 lines, or in a dedicated sub-folder if complex.
