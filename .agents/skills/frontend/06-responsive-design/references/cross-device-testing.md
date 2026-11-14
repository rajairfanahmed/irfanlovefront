# Cross-Device Testing

## Test matrix

Choose representative widths across narrow phones, large phones, small tablets, large tablets, laptops, and wide desktop screens as relevant to the product. Include intermediate widths where the layout changes. Test portrait and landscape where orientation matters.

## Input modes

Test touch, mouse, keyboard, and assistive-technology interaction. Hover must not be the only way to reveal information or actions. Confirm visible focus at all breakpoints.

## Layout and content

Check horizontal overflow, clipped content, sticky collisions, dialog sizing, table access, long text, empty states, validation messages, images, and chart labels. Test browser zoom and text scaling.

## Evidence

Record viewport width and height, browser, device or emulation mode, affected route, reproduction steps, screenshot when helpful, and result. Fix the underlying layout rule rather than adding one-off overrides for each device.

## Completion

A responsive review is complete when primary tasks are possible at every supported viewport and any intentionally different behavior is documented.
