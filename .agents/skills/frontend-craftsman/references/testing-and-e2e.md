# Frontend Testing & E2E Verification Reference

This reference establishes the automated testing guidelines for the Frontend Craftsman.

---

## 🧪 1. Testing Hierarchy & Strategy

1. **End-to-End User Journeys (Playwright):**
   - Test critical path conversion flows: page navigation, user sign-in, multi-step contact wizard, checkout, and search filters.
   - Run in headless mode: `npx playwright test`.
2. **Component & Logic Unit Tests (Vitest + React Testing Library):**
   - Test complex stateful components: pricing monthly/annual toggle, accessible modal focus trapping, form validation state machines.
   - Run tests: `npm run test` or `npx vitest run`.
3. **Accessibility Audits (axe-core):**
   - Automated WCAG AA check inside Playwright:
     ```ts
     import { injectAxe, checkA11y } from 'axe-playwright';
     await injectAxe(page);
     await checkA11y(page);
     ```

---

## 📋 2. Frontend Pre-Commit Verification Checklist

Before reporting completion on a frontend task, verify:
- [ ] `npx tsc --noEmit` runs with zero type errors.
- [ ] No browser console errors or unhandled hydration mismatches.
- [ ] All interactive buttons respond to keyboard `Enter` and `Space`.
- [ ] Focus outlines are clearly visible when navigating with the `Tab` key.
