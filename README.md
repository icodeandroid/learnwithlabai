# LearnWithLabAI — Single-Page Website

A production-ready, animated one-page Next.js site for an AI education brand teaching
n8n / Make / Zapier automation, agentic AI, RAG, LLM fundamentals, prompt engineering,
AI tools and integrations — in live weekend online classes.

**No black anywhere.** The palette is violet → indigo → cyan → pink → amber → mint on a
soft lavender-white paper background. Body text uses a deep indigo (`#2A1A5E`) instead of black.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

---

## Deploy

**Vercel (recommended)**

1. Push this folder to a Git repo.
2. Import it at vercel.com — the framework is auto-detected, no settings to change.
3. (Optional) add the env vars below under Project → Settings → Environment Variables.

Any Node host works too: `npm run build && npm start`.

---

## The contact form

The "Connect With Us" form posts to `POST /api/contact`. The route validates input,
blocks bots with a hidden honeypot field, and then delivers the lead.

Copy `.env.example` to `.env.local`:

| Variable | What it does |
| --- | --- |
| `LEAD_WEBHOOK_URL` | Every submission is POSTed here as JSON — point it at an n8n, Make or Zapier webhook. |
| `LEAD_WEBHOOK_TOKEN` | Optional. Sent as `Authorization: Bearer <token>`. |

If `LEAD_WEBHOOK_URL` is unset, leads are logged to the server console, so nothing
breaks on a fresh deploy.

The JSON payload:

```json
{
  "name": "...", "email": "...", "phone": "...",
  "track": "...", "batch": "...", "experience": "...",
  "message": "...", "submittedAt": "ISO-8601", "source": "learnwithlabai-landing"
}
```

---

## Page sections

| # | Section | File |
| --- | --- | --- |
| 1 | Sticky glass navbar + mobile sheet + scroll progress bar | `Navbar.js`, `ScrollProgress.js` |
| 2 | Hero — animated mesh blobs, rotating headline, floating chips, stat band | `Hero.js` |
| 3 | Tools marquee (n8n, Make, Zapier, LangChain, Pinecone…) | `LogoMarquee.js` |
| 4 | 8 course cards with level + duration | `Courses.js` |
| 5 | Why LearnWithLabAI — 6 benefits, sticky side CTA | `Features.js` |
| 6 | 16-week learning path timeline | `LearningPath.js` |
| 7 | Who it's for + 3 weekend batches | `Schedule.js` |
| 8 | Student testimonials | `Testimonials.js` |
| 9 | Gradient CTA band | `CtaBand.js` |
| 10 | FAQ accordion | `FAQ.js` |
| 11 | Connect With Us form | `Connect.js` |
| 12 | Footer | `Footer.js` |

---

## Editing content

All copy lives in plain arrays at the top of each component — no CMS needed.

- **Courses** → `COURSES` in `components/Courses.js`
- **Curriculum weeks** → `STEPS` in `components/LearningPath.js`
- **Batch times** → `BATCHES` in `components/Schedule.js`
- **FAQ** → `ITEMS` in `components/FAQ.js`
- **Form dropdowns** → `TRACKS`, `BATCH`, `EXPERIENCE` in `components/Connect.js`
- **Email / WhatsApp** → the contact array in `components/Connect.js`
- **Colors & animations** → `tailwind.config.js` and `app/globals.css`

---

## Stack

Next.js (App Router) · React · Tailwind CSS. Animations are pure CSS keyframes plus an
`IntersectionObserver` scroll-reveal wrapper — no animation library, so the bundle stays small.
Fonts (Outfit + Plus Jakarta Sans) load from Google Fonts via CSS import, so builds work offline.

`prefers-reduced-motion` is respected throughout.
