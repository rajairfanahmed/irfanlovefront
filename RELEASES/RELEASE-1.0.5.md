# Release 1.0.5: Dynamic CLI Versioning, Scoped Fixes & Clean Terminal Output

**Release Version:** `1.0.5`  
**Author:** Raja Irfan Ahmed  
**Status:** General Availability  
**License:** Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)  

---

## What Is New in Release 1.0.5

Release 1.0.5 delivers runtime version synchronization and resolves npm registry package resolution across terminal environments.

---

### 1. Dynamic CLI Banner and Program Versioning

The CLI banner and command processor now synchronize dynamically with the active release version:
- **Runtime Version Extraction:** The CLI reads the version string directly from `package.json` at startup via Node.js ES modules.
- **Accurate Banner Output:** The ASCII art header now displays the exact version in real time (e.g. `Anti-Slop UI/UX Agent Skills Suite (v1.0.5)`) rather than a hardcoded static string.
- **Commander Flag Alignment:** `irfanlovefront -V` and `irfanlovefront --version` dynamically return the active package version without manual maintenance.

---

### 2. Unscoped Package Registry Clarification

- **Canonical Package Name:** The official npm registry package name is `irfanlovefront` (unscoped).
- **Global & NPX Execution:** All installation commands run directly as `npx irfanlovefront` or `npm install -g irfanlovefront`.

---

### 3. Documentation and Suite Architecture Alignment

- **8-Agent Engineering Suite:** Aligned release documentation with the current 8-agent architecture across all files.
- **Strict Anti-Slop Enforcement:** Zero em-dash policy and zero image dependency guarantees maintained across all skill guides.

---

## Installation & Upgrade

To run Release 1.0.5 directly without installation:

```bash
npx irfanlovefront@latest
```

To install or upgrade globally via npm:

```bash
npm install -g irfanlovefront@latest
```
