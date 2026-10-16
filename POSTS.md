# Community Launch Posts: DEV.to & LinkedIn

This document contains two ready-to-publish launch posts for the UI/UX & Frontend Engineering Agent Skills Suite:
1. **DEV.to Article (Markdown Format)** with frontmatter, table of contents, and DEV writing best practices.
2. **LinkedIn Post** formatted for readability, high engagement, and social reach.

---

# PART 1: DEV.TO ARTICLE

```markdown
---
title: I Solved Our Biggest Frontend Problem: Why I Built a 7-Agent UI/UX Suite
published: true
description: Whenever I started a project, I always got stuck on frontend design and UI/UX. Here is how I solved it forever with a modular AI agent suite.
tags: webdev, javascript, frontend, uiux
cover_image: https://raw.githubusercontent.com/rajairfanahmed/ui-ux-skill/main/public/devto-cover-image.jpg
canonical_url: https://irfanlovefrontend.vercel.app/
---

Whenever I started a project, I always hit the exact same roadblock.

I was stuck on frontend engineering, colors, layout, and UI/UX (User Interface / User Experience).

Back-end logic made sense. APIs made sense. But turning an idea into a clean, modern, eye-catching web application was always a painful struggle.

Most AI tools made it worse. Every time I asked an AI assistant for a landing page or portfolio, it gave me the exact same design: dark gray cards, centered walls of text, broken button contrasts, and zero creative personality.

So I decided to solve our biggest frontend problem once and for all.

I built an open-source suite of seven specialized agent skills for Google Antigravity and Claude Code. You can check out the live portfolio build at [irfanlovefrontend.vercel.app](https://irfanlovefrontend.vercel.app/) and clone the full skill suite on [GitHub](https://github.com/rajairfanahmed/ui-ux-skill).

Here is the story of how it works, what it solves, and how you can use it to build better web apps.

---

## Contents

- [The Frustration: Why Most AI Frontend Code Fails](#the-frustration-why-most-ai-frontend-code-fails)
- [How I Fixed It: 7 Specialized Agent Skills](#how-i-fixed-it-7-specialized-agent-skills)
- [The Rules That Make It Look Human](#the-rules-that-make-it-look-human)
- [Live Demo: See It in Action](#live-demo-see-it-in-action)
- [How You Can Use It on Your Own Projects](#how-you-can-use-it-on-your-own-projects)
- [I Need Your Feedback to Make It Even Better](#i-need-your-feedback-to-make-it-even-better)
- [Want to Contribute? Let Us Build Together](#want-to-contribute-let-us-build-together)

---

## The Frustration: Why Most AI Frontend Code Fails

When you ask a standard AI model to code an interface, it falls into repetitive statistical habits:

1. **Repetitive Layouts:** It picks the first generic template in its training weights. Every project looks like a duplicate clone of the previous one.
2. **Text Walls:** Headlines wrap into 4 to 6 lines because containers are too narrow.
3. **Empty Gaps in Grids:** Multi-card bento grids end up with awkward, dead white spaces.
4. **Fragile Animations:** Complex scroll events crash mobile browsers by listening directly to scroll listeners.

I realized frontend engineering requires distinct cognitive modes. One model trying to do everything at once creates sloppy results.

To fix this, I separated frontend development into five dedicated engineering stages and two auxiliary tools.

---

## How I Fixed It: 7 Specialized Agent Skills

Each skill lives in its own folder and corresponds to an exact slash command:

### 1. `/ui-ux` (Master Orchestrator)
Coordinates the full four-stage lifecycle autonomously inside your `frontend/` folder. It updates `PLAN.md` with real-time checkboxes as each milestone finishes.

### 2. `/frontend-architect` (Stage 1 Foundation)
Scaffolds Next.js 15, selects one of six calibrated substrate palettes (like Swiss Industrial, Warm Utilitarian, or Cold Luxury), configures fluid clamp typography, sets up Lenis smooth scrolling, and creates an SVG BrandLogo with small-size favicon legibility.

### 3. `/creative-layout-engineer` (Stage 2 Macro-Layout)
Designs wide hero sections, four distinct hero archetypes, gapless bento grids using Tailwind `grid-flow-dense`, and canonical route shells (`/about`, `/projects`, `/skills`, `/contact`) with zero layout shift.

### 4. `/interactive-component-engineer` (Stage 3 Components & Motion)
Builds Double-Bezel hardware cards, button-in-button CTAs (Call to Action) with kinetic diagonal hover physics, and GSAP ScrollTrigger timelines.

### 5. `/experience-qa-auditor` (Stage 4 Production Hardening)
Verifies mobile responsiveness down to 320px viewport width, builds custom 404 pages and client error boundaries, and runs a strict 45+ item mechanical Pre-Flight Check.

### 6. `/build-error-resolver` (Auxiliary Build Recovery)
Applies surgical diffs (< 5% of affected code) to fix TypeScript errors and Next.js compilation issues without touching your architecture.

### 7. `/github-readme-writer` (Auxiliary Documentation)
Generates authoritative, human-written GitHub READMEs, case studies, and launch posts with zero generic AI clichés and zero em-dashes.

---

## The Rules That Make It Look Human

To make sure the output never feels like an AI template, the suite enforces strict design rules:

- **The Deterministic Seed Engine:** A math calculation (`len(prompt) % 6`) selects different colors, fonts, and hero layouts for every project.
- **The 2-Line Iron Rule:** Hero headlines must sit in wide containers (`max-w-5xl` or `max-w-6xl`) and never exceed 2 lines on desktop.
- **Gapless Bento Flow:** Grid columns mathematically interlock so there is zero empty space.
- **Double-Bezel Hardware Enclosures:** Cards feature an outer machined shell and concentric inner radius for real physical depth.
- **Single-Project Spatial Rhythm:** Sub-pages share the exact same header Y-axis height and breadcrumb alignment so the page never jumps when navigating.

---

## Live Demo: See It in Action

I used this exact agent skill suite to build a portfolio web application with Next.js 15, TypeScript, Tailwind CSS, Lenis, and GSAP:

- **Live URL:** [https://irfanlovefrontend.vercel.app/](https://irfanlovefrontend.vercel.app/)
- **GitHub Repository:** [https://github.com/rajairfanahmed/ui-ux-skill](https://github.com/rajairfanahmed/ui-ux-skill)

Take a look on both desktop and mobile to see the spatial consistency, font pairings, and smooth scroll in action.

---

## How You Can Use It on Your Own Projects

You can install these skills into your Antigravity or Claude Code setup:

```bash
git clone https://github.com/rajairfanahmed/ui-ux-skill.git
```

Copy the `.agents/skills` folder to your project root or your global agent configuration directory.

Then invoke the master skill inside your editor:

```text
/ui-ux Build a bespoke landing page for an engineering studio with dark mode, smooth scroll, and case study cards.
```

You can also specify your own custom preferences in your prompt:
- Custom color palettes (e.g. "Use deep navy `#0A1128` with gold `#D4AF37` accent")
- Custom typography (e.g. "Use Outfit for headlines and Plus Jakarta Sans for body")
- Specific pages (e.g. "Include `/services`, `/case-studies`, and `/pricing`")

The agent will adopt your constraints while preserving strict anti-slop rules.

---

## I Need Your Feedback to Make It Even Better

This is version 1.0.0, and I want to keep improving it for developers everywhere.

I need your honest advice:
- **Colors:** Are the substrate palettes hitting the right contrast and mood?
- **Typography:** Which font pairings look best on your screen?
- **Animations:** Are the GSAP spring physics smooth, or do you prefer subtler transitions?
- **Layouts:** What reference websites do you love? Share them with me so I can study their layout rhythm and add them as inspiration patterns.

Please do not hesitate to comment below. Every single suggestion helps me upgrade the suite.

---

## Want to Contribute? Let Us Build Together

The project is released under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)**.

This means:
- You are free to inspect, learn from, and run the suite for your non-commercial personal projects.
- You can fork the repository, improve the rules, and submit Pull Requests.
- You may NOT resell or package the skills for commercial monetization or personal financial gain.

If you want to contribute, please reach out or open a Pull Request on GitHub.

And if this project helps solve your frontend headaches, please consider starring the repository on GitHub:

👉 **GitHub Repository:** [https://github.com/rajairfanahmed/ui-ux-skill](https://github.com/rajairfanahmed/ui-ux-skill)  
👉 **Live Preview:** [https://irfanlovefrontend.vercel.app/](https://irfanlovefrontend.vercel.app/)

Thank you for reading, and let us build cleaner frontend interfaces together!
```

---

# PART 2: LINKEDIN POST

```text
I solved our biggest problem in web development.

Whenever I started a new project, I always got stuck in the same place: frontend engineering and UI/UX.

Building APIs and back-end logic was fine. But making a modern, clean, responsive frontend with great typography, fluid animations, and real aesthetic depth was always a huge challenge.

Most AI coding assistants made it worse. Every time you ask for a landing page, you get the exact same generic template: dark gray boxes, narrow 5-line headlines, bad button contrast, and zero creativity.

So I decided to solve this problem forever.

I built the UI/UX & Frontend Engineering Agent Skills Suite. It is an open-source ecosystem of 7 specialized agent skills for Google Antigravity and Claude Code that coordinates the entire frontend lifecycle:

1. /ui-ux: Master orchestrator coordinating all 4 stages with real-time PLAN.md tracking.
2. /frontend-architect: Next.js 15 foundation, deterministic color palettes, Double-Bezel radii math, and SVG logo standards.
3. /creative-layout-engineer: 2-Line Iron Rule for headlines, 4 hero archetypes, gapless bento grids, and multi-page route shells.
4. /interactive-component-engineer: Machined Double-Bezel cards, button-in-button CTAs with kinetic hover physics, and GSAP ScrollTrigger timelines.
5. /experience-qa-auditor: Mobile 320px verification, branded 404 and client error boundaries, and a 45+ item Pre-Flight Check.
6. /build-error-resolver: Surgical, zero-refactoring fixes for TypeScript and Next.js build errors.
7. /github-readme-writer: Operator-voice documentation and launch posts with zero AI clichés and zero em-dashes.

You can see a complete project built with this suite right here:
Live Demo: https://irfanlovefrontend.vercel.app/
GitHub Repo: https://github.com/rajairfanahmed/ui-ux-skill

Now I need your help to make it even better.

Please try it out and tell me what improvements are needed:
- What do you think of the colors, typography, and layout?
- How do the animations and smooth momentum scrolling feel?
- Do you have any favorite reference websites? Share their links with me so I can study their visual design and add them to our layout engine.

You can also customize your own colors, typography, animations, and pages directly in your prompt to tailor the web app to your exact brand.

Kindly do not hesitate to share your suggestions. If you want to contribute to the skills, contact me or open a Pull Request.

And if this helps you build better frontend interfaces, please star the repository on GitHub!

GitHub: https://github.com/rajairfanahmed/ui-ux-skill
Live Demo: https://irfanlovefrontend.vercel.app/

#WebDevelopment #Frontend #UIUX #Nextjs #TailwindCSS #TypeScript #GSAP #OpenSource #SoftwareEngineering
```
