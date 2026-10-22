# irfanlovefront

Universal Frontend Design Extractor, Motion Forensics & Agentic Engineering Suite.

Extract any live website into production-ready W3C Design Tokens, Tailwind v4 themes, section layouts, and motion DNA with zero hardcoded assumptions. Built with mathematical CIELAB Delta-E color distance, true computed DOM walking, and an 8-phase implementation pipeline.

---

## What is `irfanlovefront`?

`irfanlovefront` is an all-in-one MCP server, CLI tool, and agent skill suite designed to reverse-engineer websites and generate production frontends.

Unlike naive scrapers or hardcoded template generators, `irfanlovefront` evaluates computed CSS from headless Chromium, ranks colors mathematically using Delta-E and relative luminance, measures modular typography scales, detects animation telemetry (GSAP, Lenis, Framer Motion), and emits an organized **multi-file directory** instead of a monolithic markdown string.

---

## Multi-File Directory Output (`designs/<brand-slug>/`)

When you run extraction on any URL, `irfanlovefront` creates a dedicated directory containing:

```
designs/<brand-slug>/
├── 00-manifest.json          # Extraction metadata, URL, stack, viewport, inspected DOM nodes
├── 01-tokens.json            # Official W3C Design Tokens (DTCG format) standard
├── 02-theme.css              # Clean Tailwind v4 @theme inline & CSS custom properties
├── 03-design-blueprint.md    # Google DESIGN.md compliant guide & architectural rationale
├── 04-layout-structure.json  # Horizontal section bands, dimensions & selectors
├── 04-layout-structure.md    # Layout archetypes breakdown
├── 05-motion-dna.json        # Measured transition durations, easing curves & telemetry
├── 05-motion-spec.md         # GSAP & Framer Motion choreography specification
├── 06-components-catalog.md  # Observed buttons, inputs, badges with real computed states
├── 07-accessibility-audit.md # WCAG 2.2 AA contrast grades calculated on real DOM pairs
└── assets/                   # SVG vectors, logos & screenshot crops
```

---

## Quickstart

### 1. Installation
Clone or copy this folder into your project:
```bash
cd irfanlovefront
npm install
npm run build
```

### 2. CLI Usage
Extract any website directly:
```bash
node dist/cli.js extract https://linear.app
```
*(Or specify a custom output directory: `node dist/cli.js extract https://stripe.com --output ./my-designs`)*

Search Awwwards for inspiration:
```bash
node dist/cli.js awwwards "portfolio"
```

---

## MCP Server Setup

Add `irfanlovefront` to your MCP configuration:

### Antigravity / `.agents/mcp_config.json`
```json
{
  "mcpServers": {
    "irfanlovefront": {
      "command": "node",
      "args": ["<path-to-folder>/dist/index.js"]
    }
  }
}
```

### Cursor (`~/.cursor/mcp.json`) / Claude Code (`claude mcp add`)
```json
{
  "mcpServers": {
    "irfanlovefront": {
      "command": "node",
      "args": ["<path-to-folder>/dist/index.js"]
    }
  }
}
```

---

## Integrated Agent Skills (`skills/`)

This package includes a complete 8-phase implementation pipeline inside `skills/`:

| Skill | Purpose |
| :--- | :--- |
| **`irfanlovefront`** | Master suite controller and workflow orchestrator. |
| **`irfanlove-extract`** | Extracts any live website into `designs/<slug>/`. |
| **`irfanlove-awwwards`** | Searches Awwwards winners, inspects motion DNA and 3D poses. |
| **`1-prompt-generator`** | Auto-ingests `designs/<slug>/` tokens and writes locked phase prompts. |
| **`2-setup-foundation`** | Sets up tokens, fonts, and renders Big Visual Specimen Card. |
| **`3-build-components`** | Builds 6-state buttons, badges, form controls, and interactive showroom. |
| **`4-cards-and-layout`** | Builds Hero section, responsive Bento grid modules, and card archetypes. |
| **`5-navbar-and-footer`** | Builds app-shell, sticky header, mobile overlay state machine, and footer. |
| **`6-build-pages`** | Assembles full home page and sub-routes with 100% human copy. |
| **`7-animate-website`** | Wires Lenis smooth scroll, GSAP ScrollTrigger, and motion DNA reveals. |
| **`8-seo-and-aeo`** | Technical SEO, JSON-LD Schema.org Knowledge Graph, and `llms.txt`. |
| **`9-responsive-and-qa`** | 375px mobile audit, WCAG 2.2 AA contrast, and build verification. |

---

## Repository Structure

```
irfanlovefront/
├── dist/                     # Compiled standalone JavaScript bundle
├── src/                      # TypeScript source code
│   ├── extractor/            # DOM walking, Delta-E math, multi-file emitter
│   ├── awwwards/             # Awwwards search & motion client
│   ├── types/                # TypeScript types & DTCG interfaces
│   ├── cli.ts                # Command-line interface
│   ├── mcp-server.ts         # MCP Server tool definitions
│   └── index.ts              # MCP entrypoint
├── skills/                   # Self-contained agent skills suite
├── package.json              # Package manifest
├── tsconfig.json             # TypeScript configuration
├── mcp-config.json           # Ready-to-use MCP configuration
└── README.md                 # Documentation
```

---

## License
MIT © Raja Irfan Ahmed
