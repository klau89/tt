# Tennis Terminal — Design System

The brand and UI system for **Tennis Terminal**, a self-serve indoor tennis and pickleball practice center on the Brooklyn waterfront. Members book a bay on their phone, unlock the door with their phone, and the app-controlled ball machine starts on its own. No staff, no membership, no coach required — *"your court, your schedule, no membership."*

This design system lets any agent or designer produce on-brand Tennis Terminal interfaces, marketing, decks, and documents.

---

## Sources

Built from the brand materials created previously and re-attached to this project:

- **Brand Guidelines** — `uploads/TT brand guidelines.pdf` (v1.0, Brooklyn NY, 12pp) is the authoritative source, matched by the earlier `uploads/Tennis Terminal branding/Tennis Terminal Brand Guidelines.dc.html`. Primary source for color, type, voice, photography, and applications.
- **Logo & icon assets** — `uploads/Tennis Terminal branding/assets/logo/` (SVG + PNG), copied into `assets/logo/`.
- **Business plan** — `uploads/Tennis Terminal branding/uploads/Tennis-Pickleball-Bay-Business-Plan.docx` (product context; not required to consume this system).

No external Figma or codebase was provided — the component inventory below is authored from scratch, sized to the brand's one real product (the mobile booking web app).

---

## Products represented

1. **Booking web app (mobile)** — the core product. Log in by phone, pick sport (Tennis / Pickleball), pick a day + bay slot, review add-ons (ball machine), reserve, and unlock at the door. Recreated in `ui_kits/booking-app/`.

On-site signage, social tiles, and door decals are documented in the brand guidelines as brand applications but are not separate software products.

---

## Content fundamentals

**Voice: warm, plain-spoken, quietly confident.** We talk like a friend who happens to run a great little spot — clear, encouraging, never salesy or snobby. We make tennis and pickleball feel *doable*, not intimidating. Three pillars: **Friendly** (speak human — contractions, short sentences), **Clear** (lead with the useful thing; no jargon), **Encouraging** (everyone's welcome — beginners, families, rusty former players; cheer people on, never talk down).

- **Person:** Address the reader as **you**; the brand is **we**. ("*We'll* text *you* a code.")
- **Casing:** Sentence case everywhere in UI and copy. Reserve UPPERCASE for small Space Mono eyebrows/labels only.
- **Sentences:** Short. If a sentence can be shorter, make it shorter. Contractions always ("you're", "that's", "we'll").
- **Punctuation:** The em-dash and the mid-dot (·) are signature — used for rhythm ("Book · Unlock · Play") and metadata ("Off-peak · 60 min").
- **Emoji:** Not part of the brand voice. Do **not** use emoji in product copy or marketing. (The ✓ / ✕ marks in do/don't lists are typographic marks, not emoji.)
- **Numbers:** Lead with concrete, friendly specifics — "Book a bay in 30 seconds", "30 seconds from phone to first serve", prices as plain "$22".

**Say this:** "Your court, your schedule. No membership." · "Book, unlock, play. That's it." · "New to pickleball? Perfect. Grab a bay." · "Practice whenever it works for you."

**Not this:** "Become a member of our exclusive club." · "Elite training for the serious athlete." · "Premier racquet sports destination." · "Reserve your court experience today."

We **are:** approachable · modern · a little fun · convenient · tech-forward · affordable · welcoming to families and beginners.
We are **not:** elite · intimidating · stuffy · country-club · coach-dependent · high-pressure · a place you need to "belong" to. *The anti-country-club.*

---

## Visual foundations

**Colors.** Bright, warm, unmistakable — but deployed with hierarchy so the product reads as reliable. **Play Green `#10B26A`** is the single action color (primary buttons, active states, links). **Court Ink `#163B2A`** carries text, prices, and dark panels. **Honey Cream `#FDF6E6`** is the default background — not white. **Ball Yellow `#ECF23F`** is a small spark accent only (never CTAs or prices). **Marigold `#FB9E1B`** signals *peak* pricing/energy; **Pool Blue `#17A2C4`** is a supporting accent. Prices render in ink on a neutral surface (`--color-price`), not on a loud yellow pill. Suggested balance: **Cream 55% · Green 28% · Ink 10% · Pop 7%.** Max 1–2 background colors per surface. Confirm Pantone matches against a physical swatch book before printing.

**Type.** A three-role system plus a reserved brand face, tuned for a **trustworthy, modern, tech-forward** feel. **Space Grotesk** (geometric, modern, lightly technical) carries all display, headlines, buttons, UI labels, and big numbers — 400–700, headings with a subtly tight `-0.02em`. **DM Sans** (neutral, legible) handles body copy and long text — 400/500/700. **Space Mono** for eyebrows, captions, spec labels, and wayfinding meta — uppercase, tracked ~0.16em, small only. **Fredoka** is now **reserved for the brand wordmark / logo mark ONLY** — never headlines, buttons, UI, or body, where it read as too casual. All four are free on Google Fonts. Semantic roles: `--font-display` / `--font-heading` / `--font-ui` (Space Grotesk) for interface, `--font-body` (DM Sans) for prose, `--font-logo` (Fredoka) for the mark.

**Backgrounds.** Flat honey-cream fields, occasionally a dark Court-Ink panel or a full Play-Green block for emphasis. **No gradients on the brand** (gradients are an explicit logo *don't*). The one recurring motif is the **ball + bounce**: a solid green circle with an offset Ball-Yellow dot (with a cream ring), echoed as decorative oversized circles bleeding off signage and social tiles.

**Imagery.** Candid and warm — the opposite of a stock country-club shoot. Natural light, warm tones, slight film grain, genuine mid-motion moments, diverse ages/body types/skill levels, tech shown naturally (phone, unlock, machine). Avoid: stiff posed portraits, cold blue-white "premium gym" light, all-pro athletes in matching whites, heavy filters/HDR/vignettes, sterile luxury framing. Placeholders in this system use warm striped fills with a Space-Mono caption describing the intended shot. **The guidelines' shot list:** HERO — candid mid-rally, one person laughing, warm afternoon light through the bay netting; DETAIL — a phone unlocking the bay door, close crop; two friends playing pickleball, high-five; a parent + kid with the ball machine feeding; an empty bay, architectural, golden hour.

**Corner radii.** Rounded but **precise** — tightened on functional controls so the app feels engineered, not toylike. Buttons/inputs 10px, list rows 12px, cards 14px, feature/social tiles 18px, small chips 8px. **Pills (999px) are reserved for status badges only** — not prices or buttons. The logo mark and avatars are perfect circles. The phone frame is 40px.

**Cards.** Flat white (`#fff`) on cream, with a **1px hairline border** (`#EFE6CE` on cream, `#EBE0C6` for dividers) and generous padding (~26px default, 14px for dense rows). Shadows are used *sparingly* — the system leans on flat fills + hairlines. When present, shadows are soft, low-spread, and green/ink-tinted (`rgba(22,59,42,…)`), never grey or harsh.

**Borders & dividers.** 1px hairlines in the warm cream-shade family. Section rhythm in long documents uses a top hairline with ~56px vertical padding.

**Shadows.** `sm` 0 1px 2px, `md` 0 6px 18px, `lg` 0 16px 40px, all `rgba(22,59,42,α)`. The phone frame uses a deep `0 30px 60px rgba(22,59,42,0.28)`.

**Motion.** Quick and gentle — no bounce or overshoot despite the playful brand. Standard ease `cubic-bezier(0.4,0,0.2,1)`, 120–280ms. Fades and simple color/background transitions. Hover: subtle — primary actions darken toward `--tt-green-700`; secondary surfaces gain a soft shadow. Press: color shift, no aggressive scale.

**Transparency & blur.** Reserved for one place: the sticky nav / app header uses a translucent cream (`rgba(253,246,230,0.9)`) with `backdrop-filter: blur(8px)` and a hairline bottom border. Otherwise surfaces are solid.

**Layout.** Marketing/brand-doc content maxes at 1120px centered. The app is a single mobile column (390px reference frame) with a fixed bottom tab bar and occasional bottom-pinned primary action bars.

---

## Iconography

- **No custom icon library ships with the brand.** The source materials use almost no icons — the visual system carries itself on the logo mark, color, type, and the ball/bounce motif.
- Where small glyphs appear in this system's UI kit (nav, back/close/menu), they are lightweight placeholders. **When building real screens, substitute a proper open-source icon set** — recommended: **[Lucide](https://lucide.dev)** (2px rounded stroke, which matches Fredoka's friendly geometry). Load from CDN; keep stroke ~2px and color from `--text-heading` / `--text-muted` / `--color-primary`. This is a flagged substitution — no branded icon set was provided.
- **Emoji:** not used in the brand. Do not introduce emoji as icons.
- **Unicode marks:** ✓ and ✕ appear as do/don't markers in guidelines and can be reused for success/error affordances; · (mid-dot) and → (arrow) are used as typographic devices in copy and CTAs.
- **The mark itself** (`assets/logo/`) is the only true brand iconography — use the `Logo` component, never redraw it. Delivered as scalable SVG (signage/print) and PNG (digital): monogram, wordmark, horizontal + vertical lockups, and app icons (512 / 180 / 32 px).
- **Minimum sizes & clear space** (per the guidelines): wordmark **120px wide minimum** in digital; icon/favicon usable down to **24px**. Keep clear space of at least the height of the ball-mark on all sides; the ball is a **flat yellow circle — no ring/outline** (an earlier cream ring was removed). Never recolor, stretch, add gradients, or place the mark on a low-contrast field.

---

## Fonts note (flag)

Space Grotesk, DM Sans, Fredoka, and Space Mono are all free Google Fonts and are loaded from the **Google Fonts CDN** via `@import` in `tokens/fonts.css` — no self-hosted binaries are bundled. If you need fully offline/self-hosted webfont files, ask and they can be added to `assets/fonts/` with local `@font-face` rules.

---

## Index / manifest

**Root**
- `styles.css` — global entry point; `@import`s only. Consumers link **this** file.
- `readme.md` — this document.
- `SKILL.md` — Agent-Skills-compatible entry for downloading this system into Claude Code.
- `thumbnail.html` — homepage tile.

**`tokens/`** (all `@import`ed by `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css`

**`components/`** (React primitives — `window.TennisTerminalDesignSystem_dcc579.<Name>`)
- `forms/` — **Button**, **IconButton**, **Input**, **SegmentedControl**, **Switch**
- `display/` — **Card**, **Badge**, **PriceTag**
- `brand/` — **Logo**

**`ui_kits/`**
- `booking-app/` — mobile booking web app: login → book → confirm → unlock (`index.html` is the interactive click-through; screens in `screens.jsx`).

**`guidelines/cards/`** — foundation specimen cards for the Design System tab (Colors, Type, Spacing, Brand).

**`assets/logo/`** — official logo & icon files (SVG + PNG).

### Component list
Button · IconButton · Input · SegmentedControl · Switch · Card · Badge · PriceTag · Logo

### Intentional additions
The brand provided no component inventory, so this is a from-scratch set sized to the booking app:
- **SegmentedControl** — the Tennis/Pickleball toggle is central to the product flow.
- **PriceTag** — encodes the peak (marigold) vs off-peak (ball-yellow) pricing signal used throughout the app.
- **Logo** — wraps the real SVG assets so the mark is never hand-redrawn.
