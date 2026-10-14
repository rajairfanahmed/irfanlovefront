# Industry-Specific UX Pattern Library

A product's industry influences its tasks and constraints, but it does not dictate one universal layout or visual style. Use industry knowledge to identify relevant considerations, not to invent requirements or force standard modules into every product.

## Pattern Record Structure
For every domain or workflow, document: domain and product type, typical user groups, primary jobs and tasks, core information objects, common interaction patterns, important states and exceptions, trust/privacy/safety concerns, accessibility considerations, useful metrics, evidence and references, contextual limitations.

---

## SaaS and Business Applications
**Common tasks:** Account setup, workspace configuration, creating/managing records, team collaboration, searching data, reporting, integrations, permissions, billing.
**Common patterns:** App shell, global navigation, contextual sidebars, searchable tables, filters, saved views, bulk actions, detail panels, activity history, onboarding, settings, role-aware navigation.
**Design considerations:** Information density, persistent navigation, clear object relationships, predictable editing, safe bulk actions, empty states that help users start, useful loading feedback.
**Risks:** Dashboards with too many metrics, over-nested navigation, unclear permissions, destructive bulk operations, misleading success states, inconsistent behaviour across modules.

## E-commerce and Retail
**Common tasks:** Discover products, compare options, inspect details, select variants, add to cart, check out, pay, track orders, request returns, manage preferences.
**Common patterns:** Search and filter, category browsing, product galleries, variant selectors, price/availability, cart summaries, checkout steps, order tracking, return flows, payment feedback.
**Design considerations:** Accurate product information, clear total costs, transparent delivery terms, variant availability, comparison support, mobile usability, payment recovery, accessible imagery.
**Risks:** Hidden costs, confusing variants, unclear stock status, misleading discounts, lost cart information, unhelpful payment errors, obstructed cancellation/returns.

## Finance, Banking, and Insurance
**Common tasks:** Review balances, understand transactions, transfer money, manage cards, pay bills, apply for products, review coverage, resolve suspicious activity.
**Design considerations:** Precision, legibility, clear units/currencies, explicit consequences, transaction status, strong recovery paths, privacy, careful confirmation of consequential actions.
**Risks:** Ambiguous amounts, unclear fees, accidental transfers, misleading status, exposing sensitive information, confusing available versus pending balances.

## Healthcare and Wellbeing
**Common tasks:** Find care, schedule appointments, access records, manage prescriptions, communicate with providers, review health information.
**Design considerations:** Plain language, privacy, careful presentation of uncertainty, accessible forms, appropriate consent, clear date/time information, safe escalation to qualified support.
**Risks:** Ambiguous medical instructions, inappropriate urgency, unclear record status, inaccessible forms, privacy exposure, misleading data interpretation.

## Education and Learning
**Common tasks:** Enrol, discover lessons, consume content, submit work, receive feedback, track progress, communicate, manage learning plans.
**Design considerations:** Clear progression, accessible media, save-and-resume, helpful feedback, age-appropriate presentation, reliable handling of deadlines and submissions.
**Risks:** Progress loss, unclear grading, inaccessible content, confusing completion rules, gamification that distracts from learning.

## Media, Publishing, and Creator Platforms
**Common tasks:** Discover, read/watch, publish, edit, organize media, subscribe, follow creators, manage access, understand performance.
**Design considerations:** Readability, media controls, playback/upload status, content organization, responsive presentation, permissions for gated content, transparent monetization.
**Risks:** Confusing access rules, weak content hierarchy, intrusive overlays, autoplay issues, fabricated metrics, ambiguous publishing state.

## Social and Community Products
**Common tasks:** Create profiles, connect, publish, discuss, moderate, report abuse, manage privacy, receive notifications.
**Design considerations:** Clear audience and visibility, accessible interactions, user control over notifications, understandable moderation outcomes, reporting and recovery mechanisms.
**Risks:** Confusing public/private states, harassment exposure, dark patterns pressuring engagement, unclear consequences of blocking/reporting.

## Travel, Hospitality, Booking, and Mobility
**Common tasks:** Search, compare availability, choose dates/options, book, pay, receive confirmation, change plans, manage cancellations.
**Design considerations:** Timezones, locale formatting, availability freshness, total price, cancellation conditions, passenger/guest details, accessibility needs, reservation changes.
**Risks:** Unclear dates, hidden fees, stale availability, confusing timezones, accidental duplicate bookings, inadequate cancellation/recovery flows.

## Government, Legal, and Public-Service Products
**Common tasks:** Check eligibility, understand requirements, submit information, provide evidence, track a case, receive a decision, appeal, request assistance.
**Design considerations:** Clear eligibility, plain language, accessibility, inclusive research, accurate decision explanations, privacy, explicit expectations about time and next steps.
**Risks:** Unclear eligibility, lost information, inaccessible forms, unexplained decisions, assuming users understand internal structures.

## Developer Tools, Cloud Consoles, and Technical Platforms
**Common tasks:** Create projects, configure environments, manage resources, inspect logs, deploy changes, use APIs, control permissions, debug failures, monitor systems.
**Design considerations:** Precision, dense but scannable information, copyable identifiers, code readability, clear system states, safe destructive operations, recoverable configuration, keyboard efficiency.
**Risks:** Ambiguous units, irreversible operations without warnings, stale status, hidden configuration dependencies, inaccessible terminal-like controls, errors without actionable diagnostics.

## AI-Powered Products and Agent Interfaces
**Common tasks:** Compose requests, provide context, attach files, inspect outputs, revise results, compare alternatives, approve actions, monitor progress, correct errors.
**Design considerations:** Clear distinction between suggestions and completed actions, visible uncertainty, user control, provenance, privacy, understandable failures, meaningful review before consequential actions.
**Risks:** Presenting generated text as verified fact, hiding performed actions, fake progress, unclear tool failures, loss of user input, claiming success without confirmation.

## Analytics and Data-Intensive Products
**Common tasks:** Monitor metrics, compare periods, filter dimensions, investigate anomalies, explore detail, export information, share findings.
**Design considerations:** Metric definitions, unit/scale clarity, data freshness, missing values, consistent comparisons, accessible chart alternatives, sensible summary-to-detail relationships.
**Risks:** Misleading scales, unexplained metrics, ambiguous periods, inaccessible visualizations, stale data, excessive dashboard widgets.

## HR, Recruitment, and Workplace Products
**Common tasks:** Find roles, apply, review candidates, coordinate interviews, onboard employees, manage leave, track performance, access employee information.
**Design considerations:** Sensitive data protection, clear status/responsibility, consistent evaluation criteria, understandable permissions, accessible application workflows.
**Risks:** Unclear application states, accidental exposure of personal information, inaccessible screening flows, presenting automated decisions as more authoritative than evidence supports.

## Industrial, Logistics, and Real-Time Operations
**Common tasks:** Monitor equipment, track assets, coordinate work, inspect alerts, manage inventory, dispatch resources, recover from operational issues.
**Design considerations:** Clear status hierarchy, freshness, alert priority, fault recovery, context for measurements, usable layouts under operational pressure, explicit distinctions between current and historical data.
**Risks:** Alarm fatigue, unclear units, outdated status, confusing severity, accidental consequential actions, visual effects that reduce visibility.

---

## Cross-Domain Safeguards
- Treat the domain catalogue as a source of considerations, not a list of mandatory features.
- Confirm actual roles, workflows, and requirements when they materially affect the design.
- Do not invent compliance obligations or technical capabilities.
- Keep core interaction conventions familiar unless a clear benefit supports a departure.
- Respect privacy, accessibility, localization, and user autonomy.
- Adapt patterns to the actual product and audience.
- Use authoritative sources for high-stakes or regulated contexts.

**Foundational principle:** Domain knowledge should make design more context-aware without turning industry stereotypes into templates.
