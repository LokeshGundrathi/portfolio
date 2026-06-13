<<<<<<< HEAD
# Gundrathi Lokesh Portfolio
=======
## Hi Lokesh 👋
>>>>>>> 8775bc5afc887b30fd94e3faa7ea58690e437437

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

**Do this first (one-time setup):**

1. Open [Settings → Pages](https://github.com/LokeshGundrathi/lokeshgundrathi/settings/pages).
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Save. If you skip this step, the workflow fails with `Failed to create deployment (status: 404)`.

**Then deploy:**

1. Push to `main`.
2. GitHub Actions builds and publishes automatically.
3. Re-run a failed workflow from the **Actions** tab after enabling Pages.

### Troubleshooting

| Error | Fix |
|-------|-----|
| `Failed to create deployment (status: 404)` | Enable Pages and set source to **GitHub Actions** in repo settings |
| Site loads but no CSS/images | Confirm `base: '/lokeshgundrathi/'` is set in `vite.config.js` |
| Workflow not running | Check the **Actions** tab is enabled for the repo |

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
