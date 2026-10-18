# Responsive Composition, Mobile-First Transformations & Zero-Overflow Defenses

**Scope:** Viewport Adaptation, Container Queries, Mobile Reflow & Defensive CSS  
**Owner:** `creative-layout-engineer`  
**Load Condition:** Loaded during Step 7 of Stage 2 when engineering responsive behaviors  

---

## 1. Purpose & Problem Solved
Most responsive designs simply squish desktop multi-column grids until text wraps into 1-word columns or overflows the screen horizontally at 320px. This reference mandates intentional responsive transformation: treating mobile as a first-class spatial design, reordering elements for thumb reach, and defending against layout breakage.

---

## 2. Redesigning for Mobile vs Merely Collapsing Columns

Do not merely apply `flex-col` to a desktop row and assume mobile is done. Evaluate whether the mobile layout demands an intentional redesign:
- **Asymmetric Desktop Splits:** On desktop, the sticky left rail holds the headline while the right rail scrolls. On mobile, this must transform into an intentional top narrative stack with sticky bottom action controls.
- **Data Tables & Telemetry:** Wide desktop tables cannot be squished onto 375px screens. Transform wide tables into vertical swipeable cards or a horizontally scrollable container with visual fade cues.
- **Navigation Transformation:** Desktop single-line header transforms into a fluid drawer sheet triggered by an accessible touch toggle, trapping focus and disabling background body scroll.

---

## 3. Container Queries Over Viewport Breakpoints

Responsive components must adapt to the size of their parent container, not just the global browser window:
- Wrap cards, widgets, and modular sections in `@container`:
  ```tsx
  <div className="@container w-full">
    <div className="flex flex-col @md:flex-row @xl:grid @xl:grid-cols-3 gap-6">
      {/* Adapts fluidly whether in a sidebar or full-width page */}
    </div>
  </div>
  ```
- Use container query units (`cqi` for inline width, `cqw` for container width) when sizing typography inside self-contained widgets.

---

## 4. Mobile Ergonomics & Thumb Reach Zones

- **44x44px Minimum Touch Footprint:** Every interactive button, pill, link, and tab must maintain a minimum tappable target of 44x44px on mobile viewports.
- **The Natural Thumb Sweep Zone:** On mobile screens, place primary action triggers in the lower 60% of the viewport (easily reachable with one hand). Avoid forcing users to reach to the top corners for frequent actions.
- **Input Zoom Defense:** Form inputs must have an explicit font size of at least `16px` on mobile screens to prevent iOS Safari from automatically zooming in and breaking the layout.

---

## 5. Defensive CSS: Zero Horizontal Overflow at 320px

Horizontal scrolling on mobile is an instant layout failure. Enforce defensive CSS across all sections:

1. **Outer Boundary Protection:**
   ```tsx
   <main className="w-full max-w-full overflow-x-hidden min-h-[100dvh]">
   ```
2. **Flex Child Defenses:** Apply `min-w-0` to all flex children to prevent long text or unbreakable URLs from forcing parent containers off-screen.
3. **Word Break & Hyphenation:** Apply `break-words` and `hyphens-auto` to large display headlines so oversized words wrap naturally on 320px screens.
4. **Fluid Gutters:** Never use fixed pixel margins. Use fluid clamp padding: `px-4 sm:px-6 lg:px-8`.

---

## 6. Viewport Height Units: Dynamic Viewport Discipline

- **Hero Sections:** Use `min-h-[100svh]` (Small Viewport Height). Never use raw `100vh`, which causes jarring layout jumps on mobile browsers when the dynamic URL bar collapses on scroll.
- **Full-Screen Overlays & Sheets:** Use `min-h-[100dvh]` (Dynamic Viewport Height) to dynamically account for browser chrome.

---

## 7. Verification Checklist
- [ ] Tested layout mentally or locally at 320px, 375px, 768px, 1024px, and 1440px.
- [ ] Zero horizontal scrollbars at 320px viewport width.
- [ ] All touch targets meet 44x44px minimum bounding box.
- [ ] No unreadable line wraps (e.g. 1-word columns).
