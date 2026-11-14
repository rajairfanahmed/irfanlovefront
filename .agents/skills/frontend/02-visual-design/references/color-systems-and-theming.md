# Color Systems and Theming

## Define semantic roles

Start with roles such as page background, raised surface, primary text, muted text, border, brand action, selected state, focus, success, warning, danger, and informational status. Add roles only when a real interface need exists.

## Build color relationships

Choose brand and neutral colors as a system rather than a list of unrelated hex values. Define tonal steps and test actual text, icon, border, chart, disabled, hover, and focus combinations. Contrast must be measured for the combinations users will encounter.

## Status colors

Do not use green, red, amber, or blue as the only indicator. Pair status color with readable text, iconography, or another non-color cue. Keep success, warning, and error roles distinct in every theme.

## Light and dark themes

Dark mode is not a simple inversion. Re-evaluate surface elevation, contrast, image treatment, borders, shadows, and emphasis. Confirm whether the product needs a system preference, stored preference, or a single fixed theme. Avoid a visible flash during initial render.

## Token rules

Use semantic token names in the implementation. Keep primitive palettes separate from semantic roles when the system has enough complexity to justify the distinction. Document contrast exceptions and avoid inline overrides that break theme consistency.
