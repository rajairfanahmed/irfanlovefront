# Contributing to irfanlovefront

Thank you for your interest in contributing to irfanlovefront! We are an open-source engineering initiative dedicated to eliminating AI slop, generic template cloning, and frontend design paralysis across modern AI agents.

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

---

## Code of Conduct

By participating in this open-source project, you agree to abide by the terms of our [Code of Conduct](CODE_OF_CONDUCT.md). Please report unacceptable behavior to the project maintainers.

---

## Open-Source Architecture Overview

The repository is organized around a high-precision 2-Skill architecture plus documentation engineering:

1. **Skill 1 (`/master-prompt-generator`)**:
   - Location: `.agents/skills/master-prompt-generator/`
   - Purpose: Product discovery, 29-category taxonomy, 85 brand references in `design-refs/`, and zero-ambiguity `MASTER_PROMPT.md` compilation.
2. **Skill 2 (`/master-implementer`)**:
   - Location: `.agents/skills/master-implementer/`
   - Purpose: Progressive 4-batch frontend construction (Foundation, Nav & Hero, Sections & Cards & Footer, Motion & QA Audit) enforcing an anti-template lock.
3. **Auxiliary Specialist (`/github-readme-writer`)**:
   - Location: `.agents/skills/github-readme-writer/`
   - Purpose: Daytona 4,000-star open-source launch documentation, case studies, and project hygiene with zero em-dashes.

---

## How Can You Contribute?

We welcome community contributions across four core areas:

1. **Submit New Brand Design References (`design-refs/`)**:
   - Expand our library of 85+ world-class design systems.
   - Format: Add a structured `.md` analysis inside `.agents/skills/master-prompt-generator/design-refs/<brand>-DESIGN.md` documenting substrate tokens, typography scale, macro-layout patterns, and motion physics.
2. **Enhance Discovery Taxonomy (`master-prompt-generator`)**:
   - Add new niche categories, questionnaire options, or specialized component archetypes in `references/phase-*.md`.
3. **Expand Component & Motion Archetypes (`master-implementer`)**:
   - Contribute new card anatomy, navigation models, micro-interactions, or GSAP/Lenis integration patterns in `references/batch-*.md`.
4. **Tooling & CLI Integrations**:
   - Improve one-command installers in `src/agents/` for emerging AI coding environments.

---

## Contribution Workflow

To maintain clean project hygiene and avoid accidental commits, follow this battle-tested Git workflow:

### 1. Fork and Clone
```bash
git clone https://github.com/YOUR-USERNAME/irfanlovefront.git
cd irfanlovefront
```

### 2. Create a Dedicated Topic Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes
- Ensure every skill directory contains an authoritative `SKILL.md` with valid YAML frontmatter.
- Keep skill and reference files under their respective anti-skip line ceilings (95 to 195 lines).
- **STRICT ANTI-SLOP POLICY**: Zero typographic em-dashes (`U+2014`) and zero en-dashes (`U+2013`). Use only standard ASCII hyphens (`-`).

### 4. Stage Specific Files Individually (Strict Project Hygiene)
Never use greedy commands like `git add .` or `git add -A`. Greedy commands risk committing unintended cache, scratch files, or sensitive credentials.

Always stage specific files explicitly:
```bash
# Correct: Stage only the exact files you edited
git add .agents/skills/master-implementer/references/batch-2-navigation-and-hero.md
git add README.md

# Strictly Forbidden:
# git add .
# git add -A
```

### 5. Commit with Conventional Messages
```bash
git commit -m "feat(implementer): add magnetic cursor button archetype"
```

### 6. Push and Open a Pull Request
```bash
git push origin feature/your-feature-name
```

Open a pull request against the `main` branch with a concise summary of your changes, referencing any relevant issues.

---

## Licensing Terms

By contributing to irfanlovefront, you agree that your contributions will be licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](LICENSE) license.
