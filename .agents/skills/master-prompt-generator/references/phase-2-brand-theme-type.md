# Phase 2: Art Direction, Brand References, Colors, Surfaces & Typography

Read this file at the start of **Phase 2**. If the user named a specific reference in Phase 1 or their initial prompt (e.g., `robinsweb`, `linear.app`, `stripe`, `apple`, `vercel`, `framer`), read ONLY that matching `.md` file inside `.agents/skills/master-prompt-generator/design-refs/` before presenting Phase 2 questions.

## Q5. Art Direction & Inspiration References
Never treat awards platforms and individual brands as interchangeable templates, and never clone an entire brand site blindly. Ask the user to select their **Reference Inspiration** AND **General Art Direction**, plus which specific traits to extract:

### Part 5A: Named Design References (Select one or multiple)
- `A)` **Awwwards-inspired**: High-craft interactive storytelling, expressive typography, custom motion choreography
- `B)` **Linear-inspired**: Dark atmospheric precision, `1px` hairline borders, subtle top-edge illumination, keyboard-first SaaS clarity
- `C)` **Stripe-inspired**: Vibrant mesh gradients, polished interactive micro-UI cards, crisp editorial hierarchy
- `D)` **Apple-inspired**: Cinematic scroll reveals, hardware/product showcase framing, frosted glass islands, large breathing room
- `E)` **Vercel-inspired**: Stark monochrome geometry, exposed structural grid hairlines, technical monospace badges
- `F)` **Framer-inspired**: High-energy dark canvas, glowing bento cards, fluid spring physics, bold display headings
- `G)` **Notion-inspired**: Warm approachable neutrals, modular content blocks, clean workspace clarity
- `H)` **Robinsweb-inspired (`robinsweb.net`)**: Tall condensed display typography (`Anton`/`Bebas Neue`), warm orange-on-black radial atmospheric glow (`#ED7A36` on `#000000`), center cutout portrait overlapping giant hero title, minimal `Menu [=]` pill navbar, infinite marquee strip, numbered `01-04` service rows, glow testimonial cards, multi-step contact wizard, giant interactive footer watermark
- `I)` **Other Named Reference from `design-refs/`** (e.g., Raycast, Supabase, Runway, Wise, Airbnb, etc.)
- `J)` **User-Provided Reference URLs, PDFs or Screenshots** (inspect uploaded files directly)
- `K)` **Multiple-Reference Synthesis** (e.g., "Robinsweb hero + Linear bento project cards")
- `L)` `[Custom User Input]`: Describe your own custom reference mix or paste URLs/notes.
- `M)` `[AI Recommended]`: Recommend the best reference synthesis for this category.

**Trait Extraction Check**: Ask which aspects matter from the chosen reference (Composition, Typography, Density, Imagery, Color usage, Navigation, Transitions, Interaction patterns, or Overall art direction).

### Part 5B: General Art Direction (Combine as needed)
1. Premium minimal | 2. Editorial | 3. Swiss or grid-led | 4. Brutalist or neo-brutalist | 5. Experimental | 6. Cinematic | 7. Luxury | 8. Futuristic or neo-futuristic | 9. Organic or natural | 10. Industrial | 11. Playful | 12. Corporate and restrained | 13. Expressive and maximalist | 14. Retro-inspired | 15. Technical and data-dense | 16. Typography-led | 17. Photography-led | 18. Illustration-led | 19. Product-led | 20. `[Custom User Input]` (Custom hybrid direction) | 21. `[AI Recommended]`

## Q6. Theme & Color Palette
Do not assume a brand reference forces one fixed palette. Offer these options:
- `A)` **Dark Atmospheric Gradients**: Deep obsidian/black (`#000000` / `#0A0A0C`) with warm radial glow (e.g., Sunset Orange `#ED7A36` / Amber spotlight)
- `B)` **Pure Dark & Single High-Voltage Accent**: Deep carbon canvas with one sharp accent (Electric Indigo, Acid Lime, Cyan, Crimson, or Emerald)
- `C)` **High-Craft Light Mode (Warm Neutral / Editorial)**: Warm alabaster/ivory (`#FAF8F5` / `#F4F1EA`) with deep ink (`#111111`) and terracotta/forest accent
- `D)` **Crisp Cool Light Mode**: Pure white (`#FFFFFF`) and cool slate (`#F8FAFC`) with cobalt/violet accents
- `E)` **Dual Theme (Light + Dark Mode Toggle)**: Complete token pairs for both themes
- `F)` **Other Curated Palette Directions**:
  - Neutral monochrome | Warm neutral | Cool neutral | Multiple brand accents | High contrast | Muted and restrained | Pastel | Saturated | Earth tones | Warm gradients | Cool gradients
- `G)` `[Existing Project Palette]`: Keep the current codebase color tokens.
- `H)` `[Custom User Input]`: Provide your exact Hex/RGB/HSL color codes for Background, Cards, Primary Text, Muted Text, Accent, and Glows.
- `I)` `[AI Recommended]`: Let AI generate a complete semantic color token table for your category and art direction.

## Q7. Surfaces & Visual Effects
Never make glassmorphism, glow, or pill cards a universal default. Ask which surface treatments belong in this project:
1. Minimal flat surfaces
2. Borders and hairline dividers (`1px solid` structural lines)
3. Glow and atmospheric lighting (radial spotlight backgrounds & glowing card borders)
4. Glassmorphism / Frosted glass (`backdrop-filter: blur()`)
5. Subtle transparency & layered depth
6. Gradient surfaces
7. Soft elevation shadows vs Hard brutalist shadows
8. Grain and film noise texture overlay
9. Blur effects
10. Sharp geometric (`0px-4px` radius) vs Rounded surfaces (`16px-24px` radius) vs Mixed surface treatments
11. Neumorphism (only when explicitly justified)
12. `[Custom User Input]`: Describe your exact border, shadow, radius, and surface effect rules.
13. `[AI Recommended]`: Let AI choose the right surface physics for your art direction.

## Q8. Typography & Hierarchy System
Consider readability, language requirements, and technical constraints:
- `A)` **Tall Condensed Display + Clean Sans Body**: e.g., `Anton`, `Bebas Neue`, or `Oswald` for giant uppercase hero/section titles + `Plus Jakarta Sans` or `Inter` for body (ideal for bold portfolios like `robinsweb.net`, agencies, sports/media)
- `B)` **Geometric / Modern Sans-Serif System**: e.g., `Plus Jakarta Sans`, `Geist`, `Inter`, or `Satoshi` with tight display tracking (`-0.04em`) and `JetBrains Mono` for technical metadata (ideal for SaaS, AI, DevTools)
- `C)` **High-Contrast Editorial Serif + Humanist Sans**: e.g., `Instrument Serif`, `Playfair Display`, or `Newsreader` for headlines + clean sans body (ideal for luxury, editorial, e-commerce, studios)
- `D)` **Expressive Wide / Brutalist Display**: e.g., `Syne`, `Space Grotesk`, or `Cabinet Grotesk` + monospace labels
- `E)` **Additional Typography Directions**:
  - Humanist sans-serif | Modern serif | Monospaced-led | Variable typography | Oversized viewport-spanning display (`clamp()`) | Typography-led composition | Mixed font pairing
- `F)` `[Existing Brand Fonts]`: Preserve current project fonts.
- `G)` `[Custom User Input]`: Specify exact Google Font or local font names, weights, letter-spacing, and sizes.
- `H)` `[AI Recommended]`: Let AI select the optimal font pairing and fluid `clamp()` type scale.
