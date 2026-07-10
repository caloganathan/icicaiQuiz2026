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

## How it plays

It's an interactive game show. For each question, enter the participant's
choice — **click the option card, or press its letter `A`–`D` (or `1`–`4`)**.
That locks the answer and scores it on the spot:

- ✅ **Correct** → the card glows gold, "**You are RIGHT! +N points**", points added.
- ❌ **Wrong** → the chosen card is marked burgundy with a ✗, the correct answer
  glows gold, "**Not quite — the answer is X**".

A running **score** and a **🔥 streak** show in the top corner, and the closing
screen gives a final **score, percentage, and a themed rank** (Articled Trainee
→ … → Grandmaster of the Ledger). Points are weighted by difficulty
(Easy = 1, Medium = 2, Hard = 3).

Prefer to just show the answer without scoring (e.g. nobody buzzed)? Press
`Space` — it reveals the answer neutrally, no points.

## Host controls (keyboard)

| Key | Action |
|-----|--------|
| `A` `B` `C` `D` or `1`–`4` | Lock in the participant's answer & score it |
| Click an option | Same as pressing its letter |
| `Space` / `Enter` | Reveal the answer **without** scoring (press again to advance) |
| `→` | Next question |
| `←` | Previous question (fix a mis-click) |
| `R` | Restart (resets the score) |
| `M` | Mute / unmute the sound effects |

Correct/wrong **sound effects** play via the browser (no files needed) — a chime
for right, a low buzz for wrong. Toggle with `M`. There is no visible admin
panel; controls stay invisible to the audience.

---

## File structure

```
index.html
assets/css/style.css
assets/js/quiz-engine.js
assets/js/questions-data.js     <- the 30 questions
assets/img/                     <- drop icai-logo.png here (see note in folder)
vercel.json
```

### Adding the ICAI logo
Save the official ICAI logo as **`assets/img/icai-logo.png`** — no code changes
needed. The splash and closing screens frame it inside a light "seal" medallion,
so a logo on a **white or transparent background looks premium on the dark
theme**. Until the file is added, a tidy "ICAI" text seal shows in its place
(nothing looks broken). See `assets/img/PLACE-LOGO-HERE.md` for details.

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
