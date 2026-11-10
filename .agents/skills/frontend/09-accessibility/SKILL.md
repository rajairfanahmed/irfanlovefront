---
name: accessibility
description: "Step 9 of 10 (Enhancement Phase). Audits and fixes WCAG conformance, keyboard navigation, screen reader support, focus management, color contrast, and assistive technology compatibility across the entire implementation from Steps 1-8. Use whenever the user wants an accessibility audit, WCAG compliance check, keyboard navigation fix, or says things like \"check accessibility\", \"fix keyboard navigation\", \"is this WCAG compliant\", \"fix screen reader support\", or \"implement the accessibility spec\". Runs AFTER seo (Step 8) and BEFORE performance-optimization (Step 10)."
---

# Accessibility (Step 9 of 10 - Enhancement Phase)

**You are Step 9. You run AFTER seo (Step 8) and BEFORE performance-optimization (Step 10).** Steps 1-8 built a functionally complete, responsive, animated, SEO-ready application. Your job is to audit and fix accessibility across the entire implementation.

You own accessibility conformance criteria and verification: WCAG principles and levels, semantic HTML validation, keyboard navigation, focus management, color contrast, screen reader support, and assistive technology testing. Other skills implement accessible components and patterns; you verify whether they actually meet the criteria and fix what doesn't.

## Before doing anything: read your spec

1. **Read `docs/accessibility.md`** - this is your implementation spec. It defines the WCAG level target, specific accessibility requirements, and criteria for this project. Follow it.
2. **Read `docs/DESIGN_BRIEF.md`** for overall project context.
3. **Inspect the existing codebase.** Steps 1-8 built everything. Audit and fix what exists without breaking functionality, responsive behavior, animations, or SEO.

## What you audit and fix

Work through these in order:

1. **Semantic HTML and ARIA.** Verify heading hierarchy, landmark elements, form labels, image alt text, link text, and table markup. Fix missing or incorrect semantic elements. Read `references/semantic-html-and-keyboard-navigation.md`.
2. **Keyboard navigation.** Verify every interactive element is reachable via Tab, activatable via Enter/Space, and dismissible via Escape (for overlays). Fix tab order issues, missing focus styles, and keyboard traps. Read `references/wcag-and-accessibility-principles.md`.
3. **Focus management.** Verify focus moves correctly: into modals when opened, back to trigger when closed, to error messages on form submission failure, and to new content on route changes. Read `references/focus-forms-and-dialogs.md`.
4. **Color contrast.** Verify all text meets WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text). Check UI controls and meaningful graphics meet 3:1 contrast against adjacent colors.
5. **Screen reader support.** Verify aria-labels, aria-live regions for dynamic content, aria-expanded/aria-controls for toggles, and that decorative elements are hidden from screen readers.
6. **Motion and vestibular safety.** Verify all animations from Step 7 have `prefers-reduced-motion` alternatives and no content is only conveyed through motion.
7. **Assistive technology testing.** Read `references/assistive-technology-testing.md`. Test with actual screen reader if available, or verify ARIA attributes manually.

## What you hand off

After you finish:
- All WCAG AA criteria from the spec are met
- Every interactive element is keyboard accessible
- Focus management works correctly for all overlays and route changes
- Color contrast meets minimum ratios
- Screen readers can navigate and understand all content

## Working with other skills

- UI Components (Step 4) built the components you audit for keyboard and ARIA
- UX Interaction Design (Step 5) wired the flows you verify for focus management
- Responsive Design (Step 6) adapted the layout; verify touch targets on mobile
- Animations (Step 7) added motion; verify reduced-motion alternatives
- SEO (Step 8) added semantic HTML; verify it's also correct for assistive tech
- Performance (Step 10) will optimize; verify optimizations don't break accessibility

## Review before finishing

Verify: all interactive elements keyboard accessible, focus visible on all focusable elements, no keyboard traps, heading hierarchy correct, all images have alt text, all forms have labels, color contrast meets AA, aria-live regions work for dynamic content, and reduced-motion alternatives function.

## Boundaries

Don't rebuild components (Step 4). Don't change user flows (Step 5). Don't remove animations (Step 7) - fix their reduced-motion alternatives instead. Don't change SEO markup (Step 8) unless it conflicts with accessibility. You audit and fix accessibility across the existing implementation.
