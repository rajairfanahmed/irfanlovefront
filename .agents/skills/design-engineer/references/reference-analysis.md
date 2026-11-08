# Reference Analysis

Purpose: turn each raw input (a screenshot, a design document, an existing page) into attributable notes before any synthesis happens. Good synthesis is only as good as the analysis under it — skipping straight to "here's the design" from a stack of unread references is how specs end up generic or internally contradictory.

## Analyze each input on its own first

Go through every supplied reference individually — every image, every document, every page of existing code — before comparing them to each other. Don't inspect only the first image and assume the rest match it; don't assume multiple screenshots belong to the same page or the same design direction unless the user said so or it's visually obvious.

When image-inspection tools are available, actually look at the image. A filename like `hero-dark.png` or a one-line description from the user is not a substitute for seeing what's actually in it.

For each reference, note whatever is present and relevant:

- Layout and composition (grid, columns, content width, whitespace)
- Visual hierarchy (what draws the eye first, second, third)
- Typography and color relationships — not just "what color," but how colors relate to each other (accent vs. neutral, contrast levels)
- Spacing and alignment patterns
- Component appearance (cards, buttons, forms, nav — their visual treatment)
- Interaction or motion evidence (hover states visible in a screenshot, transition cues in a video or GIF)
- Responsive behavior, if observable (a mobile screenshot alongside a desktop one)
- Distinctive characteristics that make this reference recognizable
- Potential usability or implementation issues worth flagging (low-contrast text, a layout that won't survive a narrow viewport)

Only record what you can reasonably support. If you're inferring rather than seeing, say so — don't write an inference as though it were observed.

## Tag every note by source

Every note carried forward into synthesis should be tagged with where it came from, so `reference-and-decision-map.md` can trace decisions honestly later:

- `[REQUIREMENT]` — the user said this explicitly, in text or in a document
- `[OBSERVED]` — you can point to a specific part of a specific reference that shows this
- `[INFERRED]` — a reasonable read between the lines, not stated or directly visible (for example, "likely wants a dark-mode-first product, based on every screenshot being dark")
- `[RECOMMENDED]` — your own professional suggestion, not derived from any input

Keep these distinct as you write. Collapsing them — writing an inference as though it were a requirement — is the main way a design brief ends up making promises the inputs never supported.

## Compare across references once each is analyzed

After each input has its own notes, look across them for:

- Where references agree (a strong signal for the direction)
- Where they conflict (hand this to `requirements-and-conflict-resolution.md`)
- What's present in some references but absent from others — is it missing, or deliberately not shown?

Carry the tagged, per-reference notes forward. They're the raw material `design-synthesis.md` works from, and the source material for `reference-and-decision-map.md` later.
