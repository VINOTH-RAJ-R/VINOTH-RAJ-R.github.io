# Vinoth Raj R — Portfolio

Premium, animated, SEO-optimized portfolio built with **Next.js 14** (static export). No UI templates, no animation libraries — everything hand-built for speed.

**Live target:** https://vinoth-raj-r.github.io

---

## Quick start (local)

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site output in ./out
```

## Deploy — GitHub Pages (chosen setup, free)

1. Create a repo named exactly **`VINOTH-RAJ-R.github.io`** on your GitHub account.
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Portfolio v1"
   git branch -M main
   git remote add origin https://github.com/VINOTH-RAJ-R/VINOTH-RAJ-R.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source → GitHub Actions**.
4. Done. The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`. Site goes live at **https://vinoth-raj-r.github.io** in ~2 minutes.

## Deploy — Vercel (alternative, also free)

Import the repo at [vercel.com/new](https://vercel.com/new) — zero config needed. If you switch to Vercel or a custom domain, update the URL in:

- `content/profile.ts` → `site.url`
- `public/robots.txt` and `public/sitemap.xml`

---

## Project structure

```
app/
  layout.tsx        # SEO metadata, Open Graph, JSON-LD structured data, fonts
  page.tsx          # assembles all sections
  globals.css       # design system (tokens, animations, responsive rules)
components/
  Nav.tsx           # glass nav, scroll progress, active-section highlight
  Hero.tsx          # headline animation + live pipeline visual
  About.tsx         # story + engineering principles
  Experience.tsx    # career entries with animated accents
  Work.tsx          # the 3 case studies
  diagrams.tsx      # animated SVG architecture diagrams
  Expertise.tsx     # capability cards
  Achievements.tsx  # animated metric counters
  ResumeBand.tsx    # resume download
  Contact.tsx       # contact cards
  Reveal.tsx        # scroll-reveal (IntersectionObserver)
  Counter.tsx       # count-up numbers
  CursorGlow.tsx    # desktop cursor glow
content/
  profile.ts        # ★ ALL site copy lives here — edit this file to change content
public/
  Vinoth-Raj-R-Resume.pdf, og-image.png, favicons, robots.txt, sitemap.xml
```

## Editing content

Everything you'd want to change — headline, case studies, metrics, contact info — lives in **`content/profile.ts`**. Components only render that data.

To update the resume, replace `public/Vinoth-Raj-R.pdf` (keep the filename).

To change the accent color, edit `--accent` / `--accent-2` in `app/globals.css`.

## SEO checklist (already implemented)

- Semantic HTML + accessible landmarks, skip link, `prefers-reduced-motion` support
- Meta title/description/keywords, canonical URL
- Open Graph + Twitter card with generated `og-image.png` (1200×630)
- JSON-LD structured data: `Person` + `WebSite` (helps Google and AI search engines)
- `robots.txt` + `sitemap.xml`
- Static export → instant load, no server needed

After deploying, submit `https://vinoth-raj-r.github.io/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) to get indexed fast.
