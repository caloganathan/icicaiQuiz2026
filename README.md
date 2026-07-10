# Chartered Accountants' Day 2026 — Quiz
### ICAI Indonesia Chapter · Jakarta · 11 July 2026

A presenter-driven, projector-first quiz web app for a live event. One host
controls a shared/projected screen using the keyboard — American TV quiz-show
production values, not a self-serve online form.

Plain static HTML/CSS/JS. **No framework, no build step.**

---

## Run it

**Locally** — just open the file:

```
open index.html        # macOS
# or double-click index.html in any browser
```

Or, for a production-like preview:

```
npx serve .
```

**Deploy to Vercel** — zero configuration:

1. Push this folder to a GitHub repo (or run `vercel --prod` from here).
2. In Vercel, set **Framework Preset → Other** (static). No build command needed.

---

## Host controls (keyboard)

| Key | Action |
|-----|--------|
| `Space` / `Enter` | Reveal the answer (press again to advance) |
| `→` | Next question |
| `←` | Previous question (fix a mis-click) |
| `R` | Restart from the splash screen |
| Click anywhere | Same as `Space` (fallback) |

There is no visible admin panel — controls stay invisible to the audience.

---

## File structure

```
index.html
assets/css/style.css
assets/js/quiz-engine.js
assets/js/questions-data.js     <- the 30 questions
assets/img/icai-logo.png        <- PLACEHOLDER — swap in the real ICAI logo
vercel.json
scripts/make_placeholder_logo.py  <- regenerates the placeholder emblem
```

### Swapping in the real logo
Replace `assets/img/icai-logo.png` with the official ICAI logo file, keeping the
**same filename** — no code changes needed. If the file is missing, the app
falls back to a simple "ICAI" monogram automatically.

---

## ⚠️ Question bank — verify before the live event

The 30 questions live in `assets/js/questions-data.js`, weighted per the brief:

| Book | Topic | Questions |
|------|-------|-----------|
| Book 1 | Doing Business | 6 |
| Book 2 | Taxes | 9 |
| Book 3 | Hiring | 6 |
| Book 4 | M&A / Exit | 9 |

**Important:** the four source manuscripts were **not present in the build
environment**, so the questions could not be cross-checked line-by-line against
the source text. They were drafted from well-established, stable Indonesian
regulatory facts that these guides cover, and each question carries:

- a `source` field pointing to the book/chapter to confirm against, and
- a `verify` flag:
  - `"fact"` — a stable definitional/structural fact; just confirm the chapter reference.
  - `"figure"` — contains a **rate, threshold or amount that MUST be checked**
    against the manuscript *and* against the law in force on the event date
    (these change over time). Search the file for `// TODO: verify`.

Please fact-check each question against the manuscripts before 11 July, and edit
wording/figures freely — the data file is plain JS and requires no code changes.

---

## Design — "Big Four Gala" theme

Charcoal / burgundy / antique gold. Deliberately **no blue, orange or yellow**.
Playfair Display (headers) + Inter (body). Subtle gold hairlines, low-opacity
batik-inspired corner motifs, smooth fade/slide transitions.

Only ICAI Indonesia Chapter branding is used.
