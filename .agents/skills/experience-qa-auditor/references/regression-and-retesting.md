# Regression Testing and Fix Retesting

Fixing one defect frequently creates unintended side effects in adjacent components, sibling routes, or responsive breakpoints. Regression testing ensures that code changes resolve the targeted bug without breaking previously verified behavior.

---

## 1. The Retest Protocol for Reported Defects

When an implementation engineer reports that a defect has been remediated, execute this verification sequence:
1. **Recreate the Original Environment:** Match the exact viewport width, theme, route, and input conditions documented in the initial defect report.
2. **Execute Reproduction Steps:** Follow the documented steps verbatim.
3. **Confirm Negative Outcome Is Eliminated:** Verify that the original error, visual glitch, or crash no longer occurs.
4. **Boundary and Stress Retest:** Test boundary inputs immediately adjacent to the defect (e.g. if an empty field caused a crash, test with 1 character, whitespace only, and special characters).
5. **Update Defect Status:** Mark the defect as **VERIFIED CLOSED** only after physical verification succeeds. If the defect persists or only partially resolves, mark as **REOPENED** with fresh diagnostic evidence.

---

## 2. Regression Impact Assessment

Before declaring a fix complete, assess the blast radius of modified files:

| Scope of Edit | Potential Regression Vectors to Audit |
|---|---|
| **Global Stylesheet (`globals.css`)** | Affects ALL routes. Recheck typography, canvas contrast, and container margins site-wide. |
| **Shared UI Primitive (`Button.tsx`)** | Affects all pages using buttons. Verify CTA buttons, header links, and modal triggers maintain sizing and focus. |
| **Header / Navigation Component** | Affects desktop navigation, mobile drawer transitions, and scroll padding across every sub-route. |
| **Layout Wrapper (`layout.tsx`)** | Affects metadata tags, font loading, body scroll boundaries, and persistent footer alignment. |
| **Single Page Route (`page.tsx`)** | Localized risk, but verify anchor links and transitions to adjacent routes remain functional. |

---

## 3. Mandatory 5-Point Regression Sanity Gate

Run this quick regression sanity pass after every targeted bug fix:
1. **Zero New Console Errors:** Inspect the developer console during navigation to ensure the fix did not introduce React key warnings, hydration bugs, or unhandled exceptions.
2. **Build Integrity Check:** Confirm `npm run build` or `npx tsc --noEmit` still succeeds with zero errors.
3. **Mobile Layout Check (375px):** Verify the mobile viewport remains free of horizontal scroll bars and truncated controls.
4. **Keyboard Focus Check:** Tab through the modified interface to confirm focus rings and tab order remain fully intact.
5. **Adjacent Component Integrity:** Verify that sibling elements on the same page have not shifted, wrapped awkwardly, or lost visual alignment.
