# Package Publishing Guide for irfanlovefront

This guide explains how to publish **irfanlovefront** so it appears in both the **GitHub Packages** sidebar (as shown in your screenshot) and on the public **npm Registry** (so developers can run `npx irfanlovefront`).

---

## 1. Understanding What GitHub Shows in the Screenshot

On your GitHub repository sidebar:
- **"Packages"**: Refers to **GitHub Packages** (`npm.pkg.github.com`), GitHub's internal package hosting service. Packages published here link directly to your repository and display right in that sidebar box.
- **"npm Registry"**: Refers to **npmjs.com** (`registry.npmjs.org`), the global public registry that powers `npx` commands. This is where users download packages without needing a GitHub account or personal access token.

You can publish to **both** targets!

---

## 2. Option A: Publish to Public npm Registry (for `npx irfanlovefront`)

This is what allows anyone in the world to type:
```bash
npx irfanlovefront
```

### Step 1: Open Terminal in Project Directory
Open PowerShell or your command prompt in:
```bash
d:\uiux
```

### Step 2: Verify npm Login
Check that you are logged in as `rajairfanahmed`:
```bash
npm whoami
```
If not logged in, run:
```bash
npm login
```

### Step 3: Run Publish with Public Access
Because you are publishing a public package, execute:
```bash
npm publish --access public
```

### Step 4: Handle Two-Factor Authentication (OTP)
If your npm account has 2FA enabled:
1. npm will prompt: `Enter OTP:`
2. Open your authenticator app (Google Authenticator, Microsoft Authenticator, etc.) on your phone.
3. Type the 6-digit code and press Enter.

Alternatively, you can pass the OTP code directly in the command:
```bash
npm publish --access public --otp=123456
```
*(Replace `123456` with your current 6-digit authenticator code)*

### Step 5: Verification
Once complete, verify that the package is live:
```bash
npm view irfanlovefront
npx irfanlovefront --help
```

---

## 3. Option B: Publish to GitHub Packages (To Show in the GitHub Sidebar)

To make your package appear in the **"Packages"** section on GitHub (`https://github.com/rajairfanahmed/irfanlovefront`), the package must be published to GitHub's package registry (`npm.pkg.github.com`).

GitHub Packages requires package names to be scoped under your GitHub username: `@rajairfanahmed/irfanlovefront`.

### Step 1: Generate a GitHub Personal Access Token (PAT)
1. Go to GitHub: **Settings** -> **Developer Settings** -> **Personal access tokens** -> **Tokens (classic)**.
2. Click **Generate new token (classic)**.
3. Note: `irfanlovefront package publishing`.
4. Check the following scopes:
   - `write:packages` (Upload packages to GitHub Packages)
   - `read:packages` (Download packages from GitHub Packages)
   - `repo` (Full repository control)
5. Click **Generate token** and copy the token string (`ghp_...`).

### Step 2: Authenticate npm to GitHub Packages Registry
In your terminal, run:
```bash
npm login --scope=@rajairfanahmed --registry=https://npm.pkg.github.com
```
- **Username:** `rajairfanahmed`
- **Password:** Paste your GitHub Personal Access Token (`ghp_...`)
- **Email:** Your GitHub account email

### Step 3: Configure publishConfig for GitHub
Temporarily or in your GitHub Actions workflow, specify GitHub as the target registry in `package.json`:
```json
{
  "name": "@rajairfanahmed/irfanlovefront",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### Step 4: Publish to GitHub Packages
```bash
npm publish
```
Once this succeeds, refresh your GitHub repository page. The package `@rajairfanahmed/irfanlovefront` will appear directly inside the **"Packages"** sidebar section!

---

## 4. Option C: Automated Publishing via GitHub Actions (Recommended)

Instead of manually typing OTPs or tokens in your terminal, you can set up a GitHub Action that automatically publishes to **both** npm and GitHub Packages every time you create a Release on GitHub.

### Step 1: Get an npm Automation Token
1. Go to [npmjs.com](https://www.npmjs.com) and log in.
2. Click your profile avatar -> **Access Tokens**.
3. Click **Generate New Token** -> **Automation Token** (or Granular Token with publish permissions).
4. Copy the generated token (`npm_...`).

### Step 2: Add Secret to GitHub Repository
1. On GitHub, go to your repository: **Settings** -> **Secrets and variables** -> **Actions**.
2. Click **New repository secret**.
3. Name: `NPM_TOKEN`
4. Secret: Paste your npm token.
5. Click **Add secret**.

### Step 3: Create GitHub Actions Workflow File
Create `.github/workflows/publish.yml`:

```yaml
name: Publish Package

on:
  release:
    types: [published]
  workflow_dispatch:

jobs:
  publish-npm:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org/'

      - name: Install Dependencies
        run: npm ci

      - name: Publish to npm Registry
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

  publish-github:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://npm.pkg.github.com/'

      - name: Install Dependencies
        run: npm ci

      - name: Publish to GitHub Packages
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

With this workflow active:
- Whenever you draft and publish a Release (e.g., `v2.0.0`) on GitHub, GitHub automatically publishes the package to both npm and GitHub Packages with zero manual steps!

---

## 5. Summary of Quick Commands

| Goal | Target Registry | Command |
| :--- | :--- | :--- |
| **Enable `npx irfanlovefront` globally** | Public npm (`npmjs.com`) | `npm publish --access public` |
| **Show package in GitHub sidebar** | GitHub Packages (`npm.pkg.github.com`) | `npm publish` (with GitHub PAT login) |
| **Automate both on release** | Both registries | GitHub Actions workflow (`publish.yml`) |
