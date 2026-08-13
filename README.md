# Spectra site

A single-page site for Spectra (Responsible AI, Singapore), styled after the
Lorong AI template: dark hero, mission strip, a "what we run" card grid, a
live Luma events embed, and a community CTA. Plain HTML/CSS/JS — no build
step, no dependencies beyond Google Fonts.

## Files

- `index.html` — all page content and structure
- `styles.css` — design tokens (colors, type) + all styling
- `script.js` — scroll-reveal animation + footer year (progressive enhancement — the page works fine with JS off)
- `assets/` — drop your logo/social-preview image here when ready

## Before you publish — 3 things to swap in

1. **Telegram link** — search `data-placeholder="telegram"` in `index.html` (2 spots) and replace `href="#"` with your invite link.
2. **LinkedIn link** — search `data-placeholder="linkedin"` in `index.html` (2 spots) and replace `href="#"`.
3. **Logo** — the header currently uses a text wordmark + a small gradient dot. Once you have a logo file, drop it in `assets/` and swap the `.wordmark` markup in `index.html` for an `<img>` tag (styles.css has `.wordmark-dot` you can remove).

The Luma calendar embed already points at `lu.ma/embed/calendar/spectra-ai-sg/events`.
If it doesn't render once live, go to your calendar on Luma → **Share → Embed**
and copy the exact embed URL it gives you into the `<iframe src="...">` in
`index.html`.

### Connecting the Affiliates calendar (Airtable)

The "Affiliates" section (`#affiliates` in `index.html`) currently shows a
labeled placeholder box instead of a live embed. To connect a real Airtable
base:

1. Build a Grid or Calendar view in Airtable listing affiliate/partner events.
2. Open that view → **Share view → Embed this view** → copy the generated URL.
3. In `index.html`, delete the `<div class="embed-placeholder">…</div>` and
   uncomment the `<iframe class="airtable-frame" ...>` just above it, pasting
   your URL into `src=""`.

### Icons

`index.html` includes a small inline SVG sprite (`#icon-luma`, `#icon-linkedin`,
`#icon-telegram`) used next to Luma/LinkedIn/Telegram links in the header,
hero, CTA, and footer. `#icon-luma` is a generic calendar mark, not Luma's
official logo — if you'd rather use Luma's actual brand badge, swap the
`<use href="#icon-luma"/>` references for an `<img>` pointing at an asset
from Luma's brand/press page.

### Meet the Team

The `#team` section (`index.html`) ships with three placeholder profile
cards — search for `TODO: replace names, roles, bios` to find them. Each
card has a circular initials avatar (`.team-avatar`); once you have real
photos, swap that `<div>` for an `<img class="team-avatar">` (the CSS
already handles a 56px circle either way).

## Publishing on GitHub Pages (free, zero overhead)

1. Create a new **public** GitHub repo (e.g. `spectra-site`).
2. Push these files to the repo root (or to a `docs/` folder — see step 4):

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-org-or-user>/spectra-site.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
   Branch: `main`, folder: `/ (root)` — click **Save**.
5. GitHub gives you a URL like `https://<your-org-or-user>.github.io/spectra-site/`
   within a minute or two.

### Optional: custom domain

If you later want `spectra.sg` (or similar) instead of the `github.io` URL:
add a `CNAME` file to the repo root containing just your domain, then point
your domain's DNS `A`/`ALIAS` records at GitHub Pages' IPs (GitHub's docs:
Settings → Pages → Custom domain will show you the exact records to add).
No hosting cost either way — this stays free.

## Local preview

No build step needed — just open `index.html` in a browser. If you want a
local server (some browsers restrict `fetch`/embeds from `file://`):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```