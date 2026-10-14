# Realistic Content, Data Integrity, and Edge-Case Design

## Purpose
Ensure interfaces remain visually coherent, truthful, and resilient under realistic data conditions. Establish strict anti-fabrication rules to protect user trust and project credibility.

---

## 1. Absolute Prohibition on Fabricated Proof and Features

Interfaces must never present fictional claims, metrics, or capabilities as real:

1. **Zero fabricated metrics:** Never invent conversion rates, performance benchmarks, user counts, revenue figures, or uptime percentages (e.g. "Trusted by 10,000+ developers" or "99.99% uptime" without source evidence).
2. **Zero fake social proof:** Never generate fake customer testimonials, fabricated quotes, fictional company logos, or unverified star ratings.
3. **Zero fake functional elements:** Do not add fake terminal windows, simulated live telemetry, pretend latency gauges, or dummy transaction logs merely because an application or developer is technical.
4. **Honest architecture diagrams:** Depict only the project's actual verified architecture. Never generate decorative system topologies and present them as genuine engineering facts.
5. **Clear demonstration labeling:** If sample or synthetic data is required for a prototype demonstration, explicitly label it as "Demo Data" or "Simulated for Preview".

---

## 2. Content Length and Typographic Variability

Design components to withstand real content fluctuations without visual breakage:
- **Short vs extreme text lengths:** Test headings with 3 words and with 25 words; test buttons with short labels ("Save") and localized long phrases ("Save Preferences and Continue").
- **Container constraints:** Ensure text wraps gracefully without awkward word breaks, orphan words, or overlapping neighboring elements.
- **Dynamic chips and tags:** Ensure badge/tag collections wrap into multiple lines cleanly without overflowing parent containers.
- **Long URLs and identifiers:** Use `overflow-wrap: break-word` or truncation with tooltips on hashes, URLs, and file paths.

---

## 3. Data Volume and State Coverage

Every data-driven component must account for the full spectrum of data availability:
- **Empty state:** Provide helpful guidance and an actionable next step when zero records exist.
- **Loading state:** Use skeleton screens or subtle spinners that match component dimensions to prevent Cumulative Layout Shift (CLS). Never simulate fake loading percentages.
- **Error state:** Clearly explain what failed and provide a direct recovery path (e.g. "Retry" button). Preserve valid user input across recoverable failures.
- **Dense/Overflow volume:** Provide pagination, virtualization, or clean scroll boundaries for large datasets.

---

## 4. Forms and User Input Edge Cases

- **Validation feedback:** Display inline validation after user interaction, not before they finish typing. Communicate requirements clearly before submission.
- **State preservation:** Never wipe valid form fields after a server error or network failure.
- **Disabled vs actionable:** Explain why an action is disabled (e.g. tooltip or helper text) rather than disabling a button silently.
