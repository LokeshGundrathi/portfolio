# Gundrathi Lokesh Portfolio

Recruiter-ready single-page portfolio for Gundrathi Lokesh, built with React, TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

## Component Structure

- `App`: page shell, navigation, and section composition
- `Section`: reusable animated section wrapper
- `Card`: shared premium slate card surface
- `TechBadge`: JetBrains Mono technology tags
- `ArchitectureFlow`: compact architecture diagram renderer

## Folder Structure

```text
public/
  images/profile.png
  resume/Lokesh_Gundrathi_Resume.pdf
src/
  App.tsx
  index.css
  main.tsx
  vite-env.d.ts
```

## Design System

- Background: `#0f1117`
- Card: `#1a1d27`
- Border: `#2a2d3a`
- Text: `#f0f0f0`
- Muted text: `#94a3b8`
- Accent: `#06b6d4`
- Accent hover: `#0891b2`
- Tag background: `#164e63`
- Tag text: `#67e8f9`
- Body font: Inter
- Tech tags: JetBrains Mono

## Run Locally

```bash
npm install
npm start
```

The app runs at the local URL printed by Vite, usually `http://localhost:5173`.

## Verify

```bash
npm run typecheck
npm run build
```

## Deploy to GitHub Pages

Live site: `https://lokeshgundrathi.github.io/lokeshgundrathi/`

### Option A — GitHub Actions (recommended)

1. Push to `main`.
2. In the repo go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Each push to `main` builds and deploys automatically.

### Option B — Manual deploy

`package.json` includes:

```json
{
  "homepage": "https://lokeshgundrathi.github.io/lokeshgundrathi",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Deploy with:

```bash
npm run deploy
```

Then set **Settings → Pages → Source** to the `gh-pages` branch.

`vite.config.js` uses `base: '/lokeshgundrathi/'` so assets load correctly on GitHub Pages.

## Recruiter UX Notes

- Hero leads with backend/distributed-systems positioning and resume download.
- Experience uses quantified production bullets.
- Projects are presented as case studies with impact, stack, and architecture flows.
- Resume preview is embedded and downloadable.
- Contact section keeps recruiter actions direct: email, LinkedIn, GitHub, resume.
