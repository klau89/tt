# Tennis Terminal — Marketing Website

Production build of the Tennis Terminal marketing + waitlist site, built with
[Astro](https://astro.build) as a fast static site. Recreated natively from the
design handoff in [`/site`](./site) (kept as a visual + copy reference).

## Run it locally

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the production build
```

## Deploy (Vercel)

This repo is a standard Astro project — Vercel auto-detects the framework, runs
`astro build`, and serves `./dist`. No config needed. Pushing a branch creates a
preview deployment; merging to `main` publishes to production.

## Before launch — a short checklist

- **Domain:** set the real domain in [`astro.config.mjs`](./astro.config.mjs)
  (`site`). It drives canonical URLs + the sitemap. Then point the GoDaddy domain
  at Vercel (Vercel → Project → Settings → Domains).
- **Waitlist backend:** the form is front-end only as delivered. To capture
  signups, set a `PUBLIC_WAITLIST_ENDPOINT` environment variable in Vercel (e.g. a
  [Formspree](https://formspree.io) endpoint). When set, submissions POST there;
  when empty, the form just shows the confirmation state. See
  [`src/components/WaitlistScript.astro`](./src/components/WaitlistScript.astro).
- **Photos:** the images in `public/assets/photos` are AI-generated placeholders
  (compressed for the web). Swap for real photography when available; keep the
  `alt` text.
- **Structured data:** finalize the street address in the LocalBusiness JSON-LD
  ([`src/layouts/Layout.astro`](./src/layouts/Layout.astro)) once it's public.

## Project structure

```
src/
  layouts/Layout.astro        # <head>, SEO/OG tags, JSON-LD, header + footer
  components/Header.astro      # sticky nav
  components/Footer.astro      # site footer
  components/WaitlistForm.astro    # progressive waitlist form
  components/WaitlistScript.astro  # client behaviour for the form
  pages/                       # index, how-it-works, pricing, location,
                               # events, faq, about, join
  styles/global.css            # design tokens + base styles
public/
  assets/                      # logos + photos
  map.html                     # Leaflet map embedded on the Location page
  robots.txt
site/                          # ORIGINAL design handoff (reference only)
```

---

# Handoff: Tennis Terminal — Marketing Website

## Overview
A multi-page marketing + waitlist website for **Tennis Terminal**, a self-serve indoor tennis & pickleball venue on the Brooklyn waterfront. Goal: build the brand and capture waitlist signups before opening. Pages: Home, How it works, Pricing, Location, Events, FAQ, Our story (About), and a dedicated Join-the-waitlist flow.

## About the Design Files
The files in `/site` are **design references built in HTML** — working prototypes that show the intended look, copy, and behavior. They are **not** meant to ship as-is. The task is to **recreate these designs in the target codebase's environment** (e.g. Next.js/React, Astro, plain static, etc.) using its established patterns, component library, and conventions. If there's no codebase yet, Astro or Next.js (static export) are good fits for a content site like this. `/site` is a flat, standalone HTML build (opens in any browser) you can run locally as a visual reference.

> Note: the reference HTML was authored as "Design Components" that render client-side via a small runtime (`support.js`) and a design-system bundle (`_ds/`). Do **not** port that runtime — reimplement the markup/styles natively. Treat the HTML purely as a visual + copy spec.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, and interactions. Recreate pixel-close using the codebase's libraries. All copy in the files is final brand voice — reuse it verbatim.

## Pages / Views

### Global chrome (all pages)
- **Header** (sticky, translucent cream `rgba(253,246,230,0.9)` + `backdrop-filter: blur(8px)`, 1px bottom border): horizontal logo (left) → nav links `How it works · Pricing · Location · Events · FAQ` (center) → green "Join the waitlist" button (right, links to Join page). Wraps on narrow widths. Max content width 1120px, 24px side padding.
- **Footer**: 4 columns (brand blurb, Explore links, Visit info, Follow) + bottom bar "© 2026 Tennis Terminal / Book · Unlock · Play".

### Home (`index.html`)
Hero (2-col: headline "Your court, / your schedule. / No membership." + subcopy + inline waitlist form | storefront photo with a floating ball motif) → dark trust strip (30s / 7am–11pm / $0 / 2 sports) → How it works (3 numbered cards) → Pricing (2 sport cards, see below) → The space (text + amenity grid + 3 photos) → Events (green section, 3 package cards) → About teaser → FAQ (accordion) → dark final CTA with waitlist form → footer.

### How it works (`how-it-works.html`)
Centered intro → 3 alternating full-width step rows (Book / Unlock / Play) each with copy + image (step 1 = app booking screenshot phone, step 2 = phone-unlock photo, step 3 = mid-rally photo) → dark "ball machine" feature (4 spec cards) → "Your first visit" (3 rows) → green CTA.

### Pricing (`pricing.html`)
Intro → **two sport cards**: **Tennis** (dark card) — Off-peak **$32/hr**, Peak **$50/hr**, "Ball machine included"; **Pickleball** (light card) — Off-peak **$24/hr**, Peak **$38/hr**, "Ball machine optional +$8/hr", up to 4 players. → "Play more, save more" row: Starter credit **$200→$220** (10%), Regular **$360→$410** (~14%), **Off-peak pass $218/mo** (sport-agnostic, off-peak only, no add-ons). → "Free with every booking" 6-item grid → green CTA. (Prices are placeholders pending validation but present as live.)

### Location (`location.html`)
Intro ("Four bays on the Brooklyn waterfront") → 2 gallery photos → amenity grid → "Getting here" (transit list: ferry/subway/bike/hours) + **interactive Leaflet map** (`map.html` in an iframe) showing a green circle over the general area with an "Opening here soon" pill (exact address withheld — announced to waitlist first) → green CTA. Copy intentionally avoids an exact street number; mentions "Furman St" + "Brooklyn waterfront" only.

### Events (`events.html`)
Intro → 3 package cards (Birthday bash from $180 / Team offsite from $360 / League night) → "How it works" 3 steps → CTA (email events@ + Join).

### FAQ (`faq.html`)
8 `<details>` accordion items (membership, beginners, sport choice, gear, door unlock, guests, cancellation = **12 hours**, parking) → green CTA. Also emits FAQPage JSON-LD.

### About (`about.html`)
"The anti-country-club" story (3 paragraphs) → values (3 cards) → dark CTA.

### Join the waitlist (`join.html`)
2-col: left pitch + perks; right card with a **progressive form** — email only at first; once an email is entered, a mobile field (optional, "for updates & promos") and a Tennis/Pickleball/Both sport toggle (no default, optional) reveal; clearing the email hides them. A TCPA SMS-consent paragraph appears only once a phone number is entered. On submit → confirmation state: "You're #1,247 in line", 3 next-steps, and a copy-able referral link. **Note:** submission is front-end only — wire to a real backend (Mailchimp/Formspree/etc.) on implementation.

## Interactions & Behavior
- **Waitlist form** (home hero, home final CTA, Join page): progressive field reveal keyed on email presence; TCPA fine print keyed on phone presence; submit swaps to a success/confirmation view; referral link + copy button on Join.
- **FAQ accordion**: native `<details>`; the "+" glyph rotates 45° to "×" when open (`details[open]`).
- **Sticky header** with blur.
- **Map**: Leaflet + CARTO Positron tiles, warmed via a CSS filter on the tile pane; a `L.circle` (radius ~420m, `#10B26A`) marks the general area; a `divIcon` pill labels it. Attribution required.
- **Floating ball motif**: `@keyframes ttfloat` gentle vertical bob (6s).
- Transitions are quick/gentle (120–280ms, `cubic-bezier(0.4,0,0.2,1)`), no bounce. Primary buttons darken toward `#0E9E5C` on hover.
- Fully responsive: multi-col grids collapse to single column via `repeat(auto-fit, minmax(...))` and `clamp()` type.

## State Management
- Waitlist: `email`, `phone`, `sport` ('' | tennis | pickleball | both), `submitted`, plus derived `emailEntered`/`phoneEntered`; Join page also tracks `position` and `copied`.
- FAQ: native open/close (no JS state needed).

## Design Tokens
**Colors:** Play Green `#10B26A` (single action color — buttons, links, active), hover `#0E9E5C`; Court Ink `#163B2A` (text, dark panels, prices); Honey Cream `#FDF6E6` (default background — not white); White `#FFFFFF` (cards); Ball Yellow `#ECF23F` (small spark accent only); Marigold `#FB9E1B` (peak pricing / energy); Pool Blue `#17A2C4` (supporting accent); cream-shade border `#EFE6CE`, divider `#EBE0C6`; muted inks ~`#5A6B60`/`#8A978C`. Balance ≈ Cream 55 / Green 28 / Ink 10 / Pop 7.
**Type:** Space Grotesk (display, headings, UI, buttons, big numbers; headings `letter-spacing:-0.02em`); DM Sans (body/prose); Space Mono (eyebrows/labels/captions — UPPERCASE, `letter-spacing:~0.16em`, small only); Fredoka (**logo wordmark only** — never UI). All from Google Fonts.
**Radii:** buttons/inputs 10 · list rows 12 · cards 14 · feature/tiles 18 · chips 8 · status pills 999 (badges only) · logo/avatars circle.
**Shadows:** sm `0 1px 2px`, md `0 6px 18px`, lg `0 16px 40px` — all `rgba(22,59,42,α)`. Cards lean on flat fills + 1px hairline borders, shadows used sparingly.
**Layout:** 1120px max content width, 24px gutters; section vertical padding `clamp(56px,8vw,100px)`.

## Assets
- **Logos:** `/site/assets/logo/` (SVG + PNG lockups, monogram, app icons). Use the horizontal lockup in header/footer; on dark backgrounds use the monogram + a cream Fredoka wordmark (the lockup wordmark is dark ink).
- **Photos:** `/site/assets/photos/` — `storefront.png` (home hero), `empty-bay.png`, `unlock.png`, `pickleball.png`, `family.png`, `hero.png` (mid-rally), `app-book.png` (booking-screen phone). AI-generated brand photography; swap for real photos when available. Keep the `alt` text.
- **SEO:** each page has title/description/canonical/OG/Twitter tags + LocalBusiness JSON-LD (FAQ also FAQPage); `sitemap.xml` + `robots.txt` included. Update the domain (`tennisterminal.com`) and finalize the address in the JSON-LD before launch.

## Files
- `/site/*.html` — the 8 pages (plain, standalone) + `map.html`
- `/site/SiteHeader.dc.html`, `/site/SiteFooter.dc.html` — shared chrome markup (reference for the header/footer)
- `/site/assets/` — logos + photos
- `/site/sitemap.xml`, `/site/robots.txt`
- `/site/_ds/` — the original design-system tokens/bundle (reference only; reimplement natively)
