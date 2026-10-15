# 02: Brand Identity, BrandLogo & Dynamic Favicons
**Domain:** Frontend Architecture (Stage 1 Foundation)  
**Philosophy:** Structural Integrity & Vector Precision. Zero floating unaligned brand marks. Zero hand-rolled icon paths. Zero em-dashes.

---

## 1. Structural BrandLogo Container Constraint (Anti-Floating Bug Rule)

### The Identified Bug:
In previous runs, an isolated black circle with the letter "N" appeared floating randomly on the left margin, completely unaligned with the grid or content container.
This was caused by styling `BrandLogo` as an unconstrained `absolute` or `fixed` pseudo-element without a parent container binding.

### Mandatory Structural Rule:
- `BrandLogo` MUST always be rendered as a structural child inside a bounded layout container (e.g. inside `Navbar` or inside a standard page container `max-w-7xl mx-auto px-6`).
- NEVER position `BrandLogo` with `absolute left-4 top-4` or `fixed` without container bounds.
- Provide a clean component API:
```tsx
// frontend/src/components/ui/BrandLogo.tsx
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function BrandLogo({ className = "", showWordmark = true }: BrandLogoProps) {
  return (
    <Link 
      href="/" 
      className={`inline-flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      aria-label="Home"
    >
      <div className="w-9 h-9 rounded-lg bg-surface border border-hairline flex items-center justify-center transition-transform group-hover:scale-105">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5 text-accent"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>
      {showWordmark && (
        <span className="font-display font-semibold tracking-tight text-foreground text-sm">
          PLATFORM
        </span>
      )}
    </Link>
  );
}
```

---

## 2. Dynamic Favicon (`frontend/src/app/icon.tsx`)

Use Next.js 15 App Router `ImageResponse` for dynamic retina favicons:

```tsx
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0F17",
          borderRadius: 8,
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#0EA5E9",
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        P
      </div>
    ),
    { ...size }
  );
}
```

Also provide a clean fallback `frontend/public/icon.svg`.
