# Anti-Slop Design & Aesthetic Rules

This reference defines the non-negotiable visual and code heuristics that permanently eliminate generic AI templates.

---

## 🚫 The Banned AI Slop Matrix

### 1. Banned Visual Patterns
- **No Default Purple/Cyan Gradients:** Never use `from-purple-600 to-indigo-500` or glowing cyan borders unless explicitly requested by the user. Use curated, brand-specific color palettes.
- **No Floating Glowing Pills:** Avoid generic floating badges with diffuse colored shadows (`shadow-purple-500/30 blur-xl`). Use crisp 1px borders with intentional elevation.
- **No Repetitive Double-Bezel Bento Cards:** Do not wrap every single item in an outer glow container with an inner border. Vary container styles across sections.
- **No Cliché Stock AI Icons:** Never place sparkles, magic wands, or generic robot icons on standard features. Use clean, domain-specific Lucide/Heroicon symbols or bespoke SVGs.
- **No Uniform Dark Obsidian Everywhere:** Do not force every site into `#0B0F17`. Explore high-contrast light modes, warm editorial paper (`#FBF9F5`), sage titanium, or deep navy when appropriate.

### 2. Banned Copy & Content Patterns
- **No Filler Corporate Buzzwords:** Banned words include: "In today's fast-paced digital world", "game-changer", "revolutionary", "seamless", "dive in", "delve", "testament", "tapestry", "elevate".
- **No Vague Placeholders:** Never output `Lorem ipsum` or generic "Feature 1", "Feature 2". Write realistic, context-aware headlines and numbers.
- **Zero Em-Dashes & En-Dashes:** Strictly ban `—` (U+2014) and `–` (U+2013). Use hyphens `-`, colons `:`, or parentheses `()` instead.

---

## 🎨 Mathematical Color Harmony (60-30-10 Rule)

Every palette must follow an intentional distribution:
- **60% Dominant Base:** Background canvas and primary surfaces (`--canvas-bg`, `--surface-card`).
- **30% Structural Secondary:** Typography, borders, dividers, subtle hover backgrounds (`--text-primary`, `--border-subtle`).
- **10% High-Contrast Accent:** Primary call-to-action buttons, active pills, notification indicators (`--accent-brand`).

### Contrast Verification (WCAG AA & AAA)
- Body text to background: minimum `4.5:1` contrast ratio.
- Large titles (>= 24px) to background: minimum `3:1` contrast ratio.
- Primary CTA button text: minimum `4.5:1` contrast ratio against button background.
- Focus rings: minimum `3:1` contrast against surrounding pixels.

---

## 🔤 Typography Pairing Principles

Always pair fonts with deliberate tension:
1. **Expressive Display + Hyper-Clean Sans:**
   - Heading: *Instrument Serif* or *Ogg* (Classical Editorial)
   - Body: *Inter* or *Geist Sans* (Functional Precision)
2. **Technical Neo-Grotesque + Monospace Accent:**
   - Heading: *Plus Jakarta Sans* or *Satoshi* (Modern SaaS)
   - Body: *Inter*
   - Code & Metrics: *JetBrains Mono* (Tabular figures for numbers)
3. **Typography Discipline:**
   - Maximum 2 font families across the entire project.
   - Title tracking: tight negative letter spacing (`tracking-tight` or `-0.03em`) on headings above 32px.
   - Body line-height: generous line height (`1.6` to `1.75`) for comfortable reading.

---

## 🖐️ Tactile Interactive State Requirements

Every interactive element (buttons, cards, inputs, tabs) must implement 5 distinct states:
1. **Rest State:** Clear visual hierarchy and distinct boundary.
2. **Hover State:** Micro-elevation (`hover:-translate-y-0.5`), subtle border highlight, or background shift (`150ms ease-out`).
3. **Active/Depressed State:** Tactile physical depression on click (`active:scale-[0.98]`).
4. **Focus-Visible State:** Distinct high-contrast outline (`focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`). Never set `outline: none` without a custom replacement.
5. **Disabled State:** Opacity reduction (`opacity-50 cursor-not-allowed`) with pointer events disabled.
