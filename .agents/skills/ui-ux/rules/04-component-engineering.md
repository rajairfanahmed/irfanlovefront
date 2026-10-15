# 04 · Component Engineering Rules
**Status:** Mandatory Frontend Engineering Rule  
**Enforcement:** Follow these specifications for every UI component. Banned AI-template designs must never be generated.

Every component must exhibit tactile, intentional craftsmanship. Below are the engineering specifications for the core component categories.

---

## 1. Buttons & Interactive Controls

### ❌ Banned Button Slop:
- Generic rounded pill buttons (`border-radius: 9999px`) on everything.
- Gradient fills with intense glowing drop-shadows (`box-shadow: 0 0 25px cyan`).
- Competing primary buttons in the same section.
- Tiny click targets under 44px.

### ✅ Elite Frontend Button Archetypes:

#### Archetype 1: Architectural Sharp Button (Modernist / Agency)
- `border-radius: 2px` or `4px` (never pills!)
- Solid high-contrast background with sharp hover state
- Focus outline with 2px offset

```css
.btn-architectural {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 4px;
  background-color: var(--color-foreground);
  color: var(--color-background);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  min-height: 44px;
}

.btn-architectural:hover {
  background-color: transparent;
  color: var(--color-foreground);
  border-color: var(--color-foreground);
  transform: translateY(-1px);
}
```

#### Archetype 2: Hairline Ghost Button (Secondary / Technical)
- Subtle 1px border matching theme hairlines
- Inverts subtly on hover

```css
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  background: transparent;
  color: var(--color-foreground);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
}

.btn-ghost:hover {
  border-color: var(--color-foreground);
  background-color: var(--color-surface-subtle);
}
```

#### Archetype 3: Monospace Kinetic Action Link (Editorial / Minimalist)
- Clean inline link with kinetic arrow rotation or underline slide
- Zero bulky button container!

```css
.btn-kinetic-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-foreground);
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.btn-kinetic-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: currentColor;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-kinetic-link:hover::after {
  transform-origin: left;
  transform: scaleX(1);
}

.btn-kinetic-link svg {
  transition: transform 0.2s ease;
}

.btn-kinetic-link:hover svg {
  transform: translateX(4px);
}
```

---

## 2. Navigation Systems

### ❌ Banned Navbar Slop:
- The identical floating rounded pill navbar with `backdrop-filter: blur(12px)` centered at the top of every screen.
- 7+ cluttered links crammed together.
- Hamburger icon on 1440px desktop screens.

### ✅ Elite Frontend Navbar Archetypes:

#### Archetype 1: Full-Width Hairline Header (Swiss / Architectural)
- Full bleed width with bottom hairline rule (`border-bottom: 1px solid var(--color-border)`)
- Logo anchored left, clean 4–5 nav links centered or right-aligned
- High-contrast primary CTA button anchored far right

#### Archetype 2: Split Minimalist Navigation (Editorial)
- Sticky top header that remains transparent until scroll
- Left: Brand name + current status badge (e.g. `[Available for Q4 contracts]`)
- Right: Minimal text links with monospace indices (`01 / Work`, `02 / About`, `03 / Contact`)

#### Archetype 3: Side Anchor Navigation Rail (Portfolios / Dashboards)
- Slim left or right fixed sidebar on desktop viewports (e.g. `width: 72px` to `240px`)
- Provides exceptional layout distinctiveness and leaves the main canvas wide open for media!

---

## 3. Cards & Content Containers

### ❌ Banned Card Slop:
- Wrapping every single piece of text inside a rounded box.
- Cards with border AND drop shadow AND background gradient (over-styled).
- Nesting rounded cards inside another larger rounded card.
- 3 identical cards side-by-side on every section.

### ✅ Elite Frontend Card Alternatives:
1. **The Borderless Whitespace Container:** Give elements generous padding (`padding: 2.5rem`) and distinct typographic hierarchy. No borders or shadows needed!
2. **The Single Hairline Rule:** Separate items with a delicate `border-bottom: 1px solid var(--color-border-subtle)` instead of enclosing them in a box.
3. **The High-Contrast Tone Surface:** One elevation technique only:
   - Method A: Subtle surface background (`background: var(--color-surface)`), NO border, NO shadow.
   - Method B: Crisp 1px border (`border: 1px solid var(--color-border)`), transparent background, NO shadow.
   - Method C: Soft diffused shadow (`box-shadow: 0 4px 20px rgba(0,0,0,0.04)`), white background, NO border.
   **NEVER combine all three!**

---

## 4. Hero Sections

### ❌ Banned Hero Slop:
- Always centered.
- Always eyebrow pill badge + huge gradient title + paragraph + 2 pill buttons + stats row.

### ✅ Elite Frontend Hero Alternatives:
1. **Asymmetric Editorial Statement:** Left-aligned 60% text column with oversized typography, right-aligned 40% interactive showcase or media visual.
2. **Minimalist Typographic Banner:** Massive display headline spanning the full width of the screen (`font-size: clamp(3rem, 10vw, 8rem)`), followed by a 2-column split with paragraph and CTA.
3. **Media-Led Storyboard:** High-resolution project visual takes 70% of the viewport height, with title and meta anchored along the bottom edge in a clean HUD-style overlay.

---

## 5. Forms, Inputs & State Management

1. **Always-Visible Labels:** Never use placeholder text as the only label. Place labels above inputs with `font-size: 0.85rem` and `font-weight: 500`.
2. **Input Sizing:** Minimum height `44px` (ideal `48px`), padding `0.75rem 1rem`, border-radius `4px` or `6px`.
3. **Focus States:** High-visibility focus ring: `outline: 2px solid var(--color-accent); outline-offset: 2px;`.
4. **Actionable Error States:** Red text alone is insufficient. Provide an icon, clear explanatory copy, and exact recovery steps (e.g. *"Please enter a valid email address with an @ symbol"*).
