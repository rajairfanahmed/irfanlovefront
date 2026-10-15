# Design Systems and Platform Conventions

A design system helps keep an interface coherent across pages, features, developers, and future releases.

## A. Foundations
Colour tokens, typography tokens, spacing scale, sizing scale, border radii, border widths, elevation and shadows, breakpoints, grid rules, motion tokens, icon rules, z-index layers, opacity values

## B. Component Library
Buttons, form controls, navigation, cards, dialogs, tables, notifications, data visualization, reusable page elements, composite components

## C. Component Specifications
Anatomy, variants, sizes, interaction states, responsive behaviour, accessibility requirements, content guidelines, usage rules, do and don't examples, component APIs

## D. Design System Governance
Naming conventions, versioning, documentation, design-to-code mapping, contribution process, deprecation policy, visual regression checks, design token implementation, cross-platform parity

## E. Theming
Light and dark themes, brand themes, semantic colours, tenant-specific branding, high-contrast options, user-configurable appearance

A design system is more than a component library. It includes foundations, rules, documentation, and a process for maintaining consistency.

---

## Platform-Specific Guidance

### Material Design
Foundations, components, colour, typography, layout, motion, and accessibility.
Reference: https://m3.material.io/

### Apple Human Interface Guidelines
Platform conventions for navigation, controls, interaction, accessibility, and native application behaviour.
Reference: https://developer.apple.com/design/human-interface-guidelines/

### GOV.UK Design System
Evidence-informed patterns, accessible controls, forms, content, and service workflows.
Reference: https://design-system.service.gov.uk/

Also include platform-specific knowledge for responsive websites, mobile applications, desktop applications, developer tools, and data-intensive enterprise systems.

These references must inform design decisions without becoming templates to copy wholesale. Their conventions are valuable in the contexts for which they were designed.

---

## Localization and International UX

Products serving multiple countries need more than translated text:
- Language selection, L10n, i18n, RTL support, bidirectional text, locale-aware dates, timezones, number formatting, decimal/thousands separators, currency formatting, units of measurement, address formats, telephone number formats, name conventions, region-specific payment methods, cultural considerations in imagery and colour, translation expansion and text wrapping, localized validation messages, locale-aware search and sorting, region-specific legal notices, input methods and fonts, local network and device constraints

RTL support should be designed into layout, spacing, icons, navigation, and reading order. It is not simply a matter of aligning text to the right.
