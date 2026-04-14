# Country Public Adjusters — Website Sitemap & Structure

---

## Site Architecture

```
countrypublicadjusters.com
│
├── / (Homepage)
├── /about
├── /contact
├── /faq
├── /results
├── /intake (Smart Claim Intake Form)
│
├── /damage/ (Damage Type Pages)
│   ├── /damage/hail
│   ├── /damage/wind
│   ├── /damage/water
│   ├── /damage/roof
│   ├── /damage/storm
│   ├── /damage/hurricane
│   ├── /damage/commercial
│   └── /damage/residential
│
├── /nashville (Nashville Hub)
│   ├── /nashville/brentwood
│   ├── /nashville/franklin
│   ├── /nashville/murfreesboro
│   └── /nashville/hendersonville
│
└── /south-florida (South Florida Hub)
    ├── /south-florida/miami-dade
    ├── /south-florida/broward
    ├── /south-florida/palm-beach
    └── /south-florida/fort-lauderdale
```

**Total: 29 pages** (11 unique templates, 18 dynamically generated)

---

## Page-by-Page Breakdown

---

### `/` — Homepage

**Purpose:** Primary lead generation. Convert first-time visitors into inspection requests.

**Content Sections (top to bottom):**
1. Hero — headline, two CTAs (form + phone), trust chips, 3 stat cards
2. Metrics Band — 4 animated counters (35+ years, 10× increase, 20+ storms, $0 cost)
3. Reality Section — side-by-side comparison: without vs. with a public adjuster
4. How It Works — 3-step process with animated connector line
5. Intake Preview — teaser of the claim form with a CTA to start
6. Case Results — 4 real claim outcome cards (before/after dollar amounts)
7. Client Reviews — infinite auto-scrolling marquee of 12 reviews
8. Services Grid — 8 damage/service type tiles linking to sub-pages
9. Why Choose Country — 8 differentiator cards
10. Local Coverage — Nashville and South Florida region map/links
11. FAQ — 4 accordion questions with schema markup
12. Final CTA — full-width closing section with dual CTAs

**Functionalities:**
- Animated number counters on scroll
- Infinite review marquee (pauses on hover)
- Smooth scroll (Lenis)
- Scroll-linked hero parallax
- Mouse-tracking ambient gradient in hero
- JSON-LD structured data (LocalBusiness + FAQ schemas)

---

### `/intake` — Smart Claim Intake

**Purpose:** Qualify leads and capture full claim details. Replaces a traditional contact form.

**Content:**
- 8-step guided form flow
- Progress bar with step labels

**Steps:**
1. Property type (residential / commercial)
2. Damage type (multi-select)
3. Property location + region detection
4. Damage timing + urgency flag
5. Insurance stage (not filed / filed / denied / underpaid)
6. Claim details (description, insurer, claim number)
7. Contact info (name, phone, email, preferred contact method)
8. Confirmation + next steps

**Functionalities:**
- Form validation (Zod + React Hook Form)
- Direction-aware slide transitions between steps
- Urgency scoring (emergency / urgent / standard) based on answers
- After-hours detection
- UTM parameter capture for ad attribution
- CRM webhook submission (structured JSON payload)
- Analytics events on each step

---

### `/about` — About

**Purpose:** Build credibility and trust.

**Content:**
- Company story and mission
- Team credentials and licensing info
- Service regions
- Core values

---

### `/contact` — Contact

**Purpose:** Secondary lead capture for users who prefer direct contact.

**Content:**
- Phone number (click-to-call)
- Email
- Simple contact form
- Office hours / after-hours AI chat note
- Region coverage map

---

### `/results` — Case Results

**Purpose:** Social proof. Show real settlement outcomes.

**Content:**
- Full grid of case study cards
- Each card: damage type, location, insurer offer → final settlement, narrative
- Filter by damage type / region (if expanded)

---

### `/faq` — FAQ

**Purpose:** Answer objections. Supports SEO for question-based searches.

**Content:**
- Accordion FAQ (20+ questions)
- Categories: Process, Cost, Timeline, Legal, Storm-specific
- FAQ JSON-LD schema for Google rich results

---

### `/damage/[type]` — Damage Type Pages (×8)

**Pages:** hail, wind, water, roof, storm, hurricane, commercial, residential

**Purpose:** Capture search traffic for specific damage types. Each page is independently optimised.

**Content per page:**
- Damage-specific hero headline + subheadline
- What it looks like / common signs
- What insurers typically undervalue
- Local context (how this damage type affects Nashville or South Florida specifically)
- FAQ accordion (damage-specific questions)
- CTA to intake form

**Functionalities:**
- Statically generated at build time (no server needed)
- Unique meta title, description, and JSON-LD per page
- Breadcrumb schema

---

### `/nashville` + `/nashville/[city]` — Nashville Hub + City Pages (×5)

**Pages:** nashville, brentwood, franklin, murfreesboro, hendersonville

**Purpose:** Local SEO — rank for "[city] public adjuster" searches.

**Content:**
- City-specific hero and intro paragraph
- Local storm context
- Services available in that area
- Nearby city chips (internal linking)
- CTA to intake

**Functionalities:**
- LocalBusiness JSON-LD with city-specific areaServed
- Breadcrumb schema
- Statically generated

---

### `/south-florida` + `/south-florida/[city]` — South Florida Hub + City Pages (×5)

**Pages:** south-florida, miami-dade, broward, palm-beach, fort-lauderdale

Identical structure to Nashville pages, Florida-specific content.

---

## Sitewide Functionalities

| Feature | Detail |
|---|---|
| Navigation | Sticky header with dropdown menus, scrolls to compact pill on scroll |
| Mobile CTA bar | Fixed bottom bar on mobile: Call + Get Inspection buttons |
| AI Chat Widget | Chatbase chatbot, custom gold button, opens on click |
| Smooth scroll | Lenis (duration 1.35s, cinematic easing) |
| Custom cursor | Dot + spring-delayed ring, gold on hover (desktop only) |
| Analytics | GTM dataLayer events: CTA clicks, phone clicks, form steps, scroll depth |
| SEO | Sitemap.xml, robots.txt, Open Graph tags, canonical URLs, JSON-LD schemas |
| Performance | Static generation (29 pages pre-built), image optimisation via Next.js |
| Accessibility | Skip-to-content link, focus-visible styles, reduced-motion support |
| Security | X-Frame-Options, X-Content-Type-Options, Referrer-Policy headers |

---

## Tech Stack Summary

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion + GSAP |
| Smooth Scroll | Lenis |
| Forms | React Hook Form + Zod |
| AI Chat | Chatbase |
| Analytics | Google Tag Manager ready |
| Deployment | Vercel (recommended) |
