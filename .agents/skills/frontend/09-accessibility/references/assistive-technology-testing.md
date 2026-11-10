# Assistive Technology Testing

Purpose: how to actually verify accessibility rather than reason about whether it should work. This is the difference between a claim and a verified result, and the honesty required in reporting which one was actually done.

## What automated tools can and can't catch

Automated accessibility scanners (axe, Lighthouse's accessibility audit, and similar tools) reliably catch a real but limited subset of issues, missing alternative text, missing form labels, insufficient color contrast, invalid ARIA attributes, and similar programmatically detectable problems. They cannot catch whether a custom widget's keyboard behavior actually matches its expected pattern, whether reading order makes sense, whether an ARIA live region actually announces at a useful moment, or whether content is genuinely understandable, these need human judgment or genuine assistive technology testing. Treat a clean automated scan as a useful first pass that rules out a category of common mistakes, never as confirmation of overall accessibility.

## Keyboard-only testing

Unplug the mouse, mentally or literally, and navigate the entire flow being tested using only Tab, Shift+Tab, Enter, Space, Escape, and arrow keys where relevant. Confirm every interactive element is reachable, every action can be performed, focus is always visible, nothing traps focus unexpectedly, and the order focus moves through makes logical sense. This is one of the most valuable tests available and needs no special tooling, do it as a standard pass on anything interactive before considering it complete.

## Screen reader testing

Test with at least one real screen reader (VoiceOver on macOS or iOS, NVDA or JAWS on Windows, TalkBack on Android are the common ones) actually running, not just reasoning about what it should announce based on the markup. Navigate using the screen reader's own navigation methods, not just Tab, headings navigation, landmarks navigation, forms mode, whichever the screen reader provides, since real users rely on these more than linear tabbing for anything beyond a short page. Listen to what's actually announced for interactive elements, state changes, and errors, not just whether something is visually present.

## Differences between screen readers

Screen readers don't all behave identically, even for correctly implemented, standard markup, there are real differences in how some patterns are announced across VoiceOver, NVDA, and JAWS. Don't generalize a finding from one screen reader as true of all of them without at least being aware this is a possibility for complex or custom widgets, and note which screen reader a specific finding was observed with rather than presenting it as universal.

## Testing forms and dialogs specifically

Submit a form with validation errors using a screen reader active and confirm the errors are actually announced, not just visually present, this is one of the most commonly broken patterns in practice despite looking correct in code. Open and close a dialog with a screen reader active and confirm focus is announced moving into it, confirm Escape and any close control work, and confirm focus is announced returning to a sensible location on close.

## Other assistive technology beyond screen readers

Where relevant to the product, consider screen magnification (confirm content reflows sensibly and nothing critical is only visible at a zoom level that crops it out of view), voice control software (confirm interactive elements have accessible names that match or closely resemble their visible labels, since voice control commands often reference visible text), and switch access or other alternative input devices (which depend heavily on correct focus order and full keyboard operability, the same foundation tested in the keyboard-only pass).

## Testing with real content

Test with the actual content the product will show, not placeholder text, a screen reader's behavior with a very long heading, an empty state, or a dynamically loaded list can differ meaningfully from its behavior with short, tidy placeholder content. This mirrors the same principle in the responsive-design skill's verification guidance, and the same gap (placeholder content hiding a real-content bug) applies here too.

## Documenting what was actually tested

For every finding or every confirmation that something works, state specifically what was used to verify it, an automated scan, a keyboard-only pass, a specific screen reader, which platform and browser combination, rather than a blanket "tested for accessibility." A report that doesn't distinguish these is not a credible accessibility verification, regardless of how thorough the underlying work actually was, specificity about method is itself part of an honest result.

## When testing tools or assistive technology aren't available

If a real device or a specific screen reader genuinely isn't available in the current environment, say so plainly rather than presenting a code-level review as equivalent to actual testing. A thorough code and markup review against the criteria in the other three reference files is still valuable and worth doing, but it's a different, lower level of confidence than verified assistive technology testing, and the difference should be stated, not blurred.