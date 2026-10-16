# Contributing to IrfanLoveFront

Thank you for your interest in contributing to IrfanLoveFront! We welcome community contributions that expand and elevate our autonomous agent skills suite.

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

---

## Code of Conduct

By participating in this project, you agree to abide by the terms of our [Code of Conduct](CODE_OF_CONDUCT.md). Please report unacceptable behavior to the project maintainer.

---

## How Can You Contribute?

You can contribute in several ways:
1. **Design Tokens & Palettes:** Suggest or add curated color palettes, substrate tokens, and fluid typography clamp scales to `/frontend-architect`.
2. **Layout Blueprints:** Submit bespoke layout patterns, asymmetric split archetypes, and bento grids to `/creative-layout-engineer`.
3. **Motion Primitives & Components:** Contribute kinetic interactions, GSAP ScrollTrigger timelines, and spring physics components to `/interactive-component-engineer`.
4. **Audit Rules:** Expand automated mobile, accessibility, and SEO audit checks in `/experience-qa-auditor`.
5. **Issue Reporting & Suggestions:** Open an issue if you encounter unexpected agent behavior or have reference websites for cutting-edge UI/UX.

---

## Contribution Workflow

To keep our repository clean, stable, and reproducible, follow this strict step-by-step workflow:

### 1. Fork and Clone
```bash
git clone https://github.com/YOUR-USERNAME/irfanlovefront.git
cd irfanlovefront
```

### 2. Create a Topic Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes
- Ensure each agent skill folder contains an authoritative `SKILL.md` with accurate frontmatter.
- Maintain exact 1-to-1 matching between skill folder names and slash command triggers.
- Strictly adhere to our anti-slop guidelines: ZERO em-dashes and ZERO en-dashes anywhere.

### 4. Stage Specific Files Only (Strict Project Hygiene)
Never use greedy commands like `git add .` or `git add -A`. Greedy commands risk committing unintended cache, scratch files, or sensitive credentials.

Always stage specific files individually:
```bash
# Correct: Stage only the specific files you modified
git add .agents/skills/frontend-architect/SKILL.md
git add README.md

# Strictly Forbidden:
# git add .
# git add -A
```

### 5. Commit with Conventional Messages
```bash
git commit -m "feat(architect): add tactical cyber typography scale"
```

### 6. Push and Open a Pull Request
```bash
git push origin feature/your-feature-name
```

Open a pull request against the `main` branch with a clear summary of your changes.

---

## Licensing Terms

By contributing to IrfanLoveFront, you agree that your contributions will be licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](LICENSE) license.
