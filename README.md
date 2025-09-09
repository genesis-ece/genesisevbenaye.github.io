# Genesis Evbenaye — Portfolio (GitHub Pages)

This is a free, single‑page portfolio optimized for **GitHub Pages**. It uses **vanilla HTML/CSS/JS** + **AOS** (Animate On Scroll) via CDN for simple section animations. Colors: blue / black / white.

## Quick Start
1. **Download** the zip from ChatGPT and extract it.
2. Replace `assets/headshot.jpg` with your photo (same filename).
3. If needed, replace `assets/Genesis_Evbenaye_Resume.pdf` with your latest resume (same filename).
4. Edit content in `index.html` to adjust text/links.

## Deploy on GitHub Pages
1. Create a new repo named **`your-username.github.io`** (public).
2. Upload all files from this folder (index.html, styles.css, script.js, assets/).
3. Visit `https://your-username.github.io` after a minute of processing.  
   - Reference: Microsoft guide to hosting on GitHub Pages (Sep 25, 2024). See: https://techcommunity.microsoft.com/blog/educatordeveloperblog/how-to-host-your-personal-portfolio-using-github-pages/4246304

## Customize
- Colors are defined in `:root` at the top of `styles.css`.
- Add/remove sections by copying a `.section` block in `index.html`.
- Cards in **Projects** are normal HTML; add more `<article class="card">` items.
- The **nav** highlights the current section with an `IntersectionObserver`.
- Animations use AOS. Options are set in `script.js` (duration, offset, etc.).

## Credits / Inspiration
- Smooth scrolling & anchor basics: CSS `scroll-behavior: smooth` and link click handler. (General technique)
- Reveal-on-scroll effect: AOS library via CDN.
- Deployment: GitHub Pages official patterns, community tutorials.

