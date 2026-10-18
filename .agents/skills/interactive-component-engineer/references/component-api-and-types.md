# Component API Design & TypeScript Contracts

**Scope:** Prop Contracts, Type Safety, Polymorphism & Event Signatures  
**Owner:** `interactive-component-engineer`  
**Load Condition:** Loaded during Step 4 of Stage 3 when writing component interfaces  

---

## 1. Purpose & Problem Solved
AI components often suffer from brittle type definitions, missing event handlers, or conflicting prop signatures (e.g. accepting both `onClick` and custom `handleClick` with conflicting types). This reference defines strict, idiomatic TypeScript contracts that make components predictable and extensible.

---

## 2. When to Load This Reference
- Loaded when defining component interfaces (`interface ButtonProps`, `type CardVariant`).
- Loaded when handling component polymorphism (e.g. rendering a button as an anchor tag).

---

## 3. Strict TypeScript Prop Design Principles

1. **Extend Native HTML Attributes:**
   Every UI primitive must inherit the native HTML attributes of its underlying DOM element, allowing standard event handlers (`onClick`, `onKeyDown`, `aria-*`, `id`, `tabIndex`) to pass through cleanly:
   ```typescript
   export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
     variant?: "primary" | "secondary" | "outline" | "ghost";
     size?: "sm" | "md" | "lg";
     isLoading?: boolean;
   }
   ```
2. **Explicit Variant Enums Over Boolean Flags:**
   Never use conflicting boolean props like `<Button isPrimary isSecondary isOutline />`. Use a single discriminated `variant` union:
   ```typescript
   type ButtonVariant = "primary" | "secondary" | "subtle" | "danger";
   ```
3. **Explicit Callback Signatures:**
   Provide clear, typed callback signatures rather than generic `Function` or `any`:
   ```typescript
   interface TabListProps {
     activeTab: string;
     onTabChange: (tabId: string) => void;
   }
   ```

---

## 4. Controlled vs Uncontrolled Behavior

For interactive stateful components (inputs, modals, accordions, tabs):
- Support **Controlled Mode** when parent state controls value: provide `value` and `onChange`.
- Support **Uncontrolled Mode** when component manages its own state: provide `defaultValue`.
- Guard against switching between controlled and uncontrolled states during component lifecycle.

---

## 5. React 19 Ref Compatibility

In React 19, `ref` is a native prop on standard function components:
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
}

export function Input({ ref, className, ...props }: InputProps) {
  return <input ref={ref} className={cn("base-styles", className)} {...props} />;
}
```
*(If the project is running React 18, use `React.forwardRef<HTMLInputElement, InputProps>`.)*

---

## 6. Type-Safe Polymorphic Links & Buttons

When a button looks like a button but acts as a navigation link, do not attach an imperative `router.push()` to a native `<button>`:
- Use Next.js `<Link href="...">` with button styling, or implement a polymorphic `asChild` pattern.
- Ensure that links output valid `<a>` elements for search engine indexing and browser right-click menus.
