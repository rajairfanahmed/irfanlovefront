# Form Engineering, Validation & Authentic Feedback

**Scope:** Form States, Accessible Validation, Error Recovery & Submission Handlers  
**Owner:** `interactive-component-engineer`  
**Load Condition:** Loaded during Step 5 of Stage 3 when implementing forms, inputs, or contact sections  

---

## 1. Purpose & Problem Solved
AI interfaces notoriously generate beautiful contact forms that do absolutely nothing when submitted, or fake a green checkmark animation that lies to the user without sending any data. This reference establishes real form engineering: input validation, accessible error announcements, disabled states, and authentic submission handling.

---

## 2. When to Load This Reference
- Loaded when implementing contact forms, newsletter inputs, authentication screens, or search bars.
- Loaded when wiring form submission states and error recovery.

---

## 3. The Authentic Submission Law (No Fake Delivery)

**Strict Integrity Mandate:**
A form must NEVER show a successful delivery message if data was not actually submitted to a real backend endpoint:
- **Configured Backend:** If an API endpoint or Server Action exists, handle actual promise resolution:
  - `idle` -> `submitting` (disable inputs & show spinner) -> `success` (show confirmation) OR `error` (show actionable error message and preserve user input).
- **Pending Backend Integration:** If the frontend is built before backend integration is ready:
  - Do NOT play a fake "Message Sent!" celebration.
  - Display an honest inline alert: *"Frontend Demo: Form validation passed. Connect this component to your email API or server action in `src/app/api/contact/route.ts`."*

---

## 4. Accessible Form Labeling & Hierarchy

Every input control must be accessible to screen readers and keyboard users:
1. **Explicit Associated Labels:** Every `<input>`, `<select>`, and `<textarea>` must have a matching `<label htmlFor="[id]">`:
   ```tsx
   <div className="flex flex-col gap-1.5">
     <label htmlFor="email" className="text-sm font-medium text-[var(--text-secondary)]">
       Work Email <span className="text-red-500" aria-hidden="true">*</span>
     </label>
     <input
       id="email"
       name="email"
       type="email"
       required
       aria-required="true"
       aria-invalid={hasError ? "true" : "false"}
       aria-describedby={hasError ? "email-error" : undefined}
       className="px-3.5 py-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-recessed)] text-[var(--text-primary)] text-base focus-visible:outline-2"
     />
     {hasError && (
       <p id="email-error" role="alert" className="text-sm text-red-500 flex items-center gap-1.5 mt-1">
         <AlertCircle className="w-4 h-4 shrink-0" /> Please enter a valid corporate email.
       </p>
     )}
   </div>
   ```
2. **Never Use Placeholder as Label:** A placeholder text vanishes when the user starts typing, destroying user orientation. Always use persistent visible `<label>` text.

---

## 5. Input Zoom Defense on Mobile
- Mobile browsers (especially iOS Safari) automatically zoom into the page if an input font size is smaller than `16px`.
- All form input fields must declare `text-base` (16px) on mobile viewports to prevent layout shifts during typing.

---

## 6. Form State Machine Checklist
- [ ] Submit button is disabled (`aria-disabled="true"`) while submission is in progress.
- [ ] User input is NEVER wiped if an error occurs.
- [ ] Inline errors link to fields via `aria-describedby`.
- [ ] Keyboard `Enter` inside single-line inputs triggers submission.
