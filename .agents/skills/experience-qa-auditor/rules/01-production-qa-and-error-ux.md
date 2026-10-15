# 01 · Production QA, 404 & Resilient Error UX
**Domain:** Experience QA & Auditing · Stage 4 Production Hardening  
**Philosophy:** Zero Broken Windows. The mark of an elite frontend is how gracefully it handles edge cases, 404 dead ends, and unexpected runtime errors.

---

## 1. The Crafted 404 Experience (`frontend/src/app/not-found.tsx`)

Every application must feature a bespoke 404 page that matches the project's art direction, typography, and color palette.

### Production 404 Component:
```tsx
// frontend/src/app/not-found.tsx
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-between p-6 md:p-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Header Anchor */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <BrandLogo />
        <span className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase">
          ERROR_CODE // 404_NOT_FOUND
        </span>
      </header>

      {/* Central Composition */}
      <section className="w-full max-w-2xl mx-auto text-center space-y-8 py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-hairline)] text-[var(--accent-primary)] mb-4">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-4">
          <h1 className="font-display text-6xl md:text-8xl font-black tracking-tight text-[var(--text-primary)]">
            404
          </h1>
          <h2 className="font-display text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
            Coordinates Unreachable
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
            The resource you requested has been archived, relocated, or never existed in this architecture.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Flagship</span>
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[var(--border-hairline)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-sm hover:bg-[var(--bg-surface)] transition-all"
          >
            Report Invariant
          </Link>
        </div>
      </section>

      {/* Footer Metadata */}
      <footer className="w-full max-w-7xl mx-auto text-center font-mono text-xs text-[var(--text-muted)]">
        SYSTEM INTEGRITY NOMINAL · ARCHITECTURE RECOVERY READY
      </footer>
    </main>
  );
}
```

---

## 2. Resilient Error Boundary (`frontend/src/app/error.tsx`)

Next.js 15 requires an error boundary to handle client-side rendering crashes without terminating the application.

```tsx
// frontend/src/app/error.tsx
'use client';
import { useEffect } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception to telemetry service
    console.error('Frontend Runtime Exception caught:', error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col justify-between p-6 md:p-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <BrandLogo />
        <span className="font-mono text-xs text-rose-400 tracking-widest uppercase">
          FAULT // UNCAUGHT_EXCEPTION
        </span>
      </header>

      <section className="w-full max-w-xl mx-auto text-center space-y-6 py-16">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-3">
          <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Rendering Interruption
          </h1>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto">
            An unexpected state exception occurred while mounting this component tree. The boundary has isolated the fault.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Attempt Component Reset</span>
          </button>
        </div>
      </section>

      <footer className="w-full max-w-7xl mx-auto text-center font-mono text-xs text-[var(--text-muted)]">
        FAULT RECOVERY PROTOCOL ACTIVE
      </footer>
    </main>
  );
}
```

---

## 3. Production QA Checklist:
- [ ] `frontend/src/app/not-found.tsx` is implemented and verified.
- [ ] `frontend/src/app/error.tsx` is implemented with client directive and `reset()` handler.
- [ ] Console has zero unhandled errors or React key warnings.
- [ ] All anchor links (`#work`, `#contact`) scroll to legitimate elements without 404 or jank.
