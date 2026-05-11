# Country Public Adjusters — Website Setup Guide

## Quick Start

```bash
# Install dependencies
npm install

# Copy env template and fill in your values
cp .env.local.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Copy `.env.local.example` → `.env.local` and fill in:

| Variable | Where to get it | Purpose |
|---|---|---|
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager | Analytics container |
| `NEXT_PUBLIC_CHATBASE_BOT_ID` | app.chatbase.co → your bot → Settings → Embed | AI chat widget |
| `NEXT_PUBLIC_RETELL_AGENT_ID` | Your Retell dashboard | AI voice intake |
| `NEXT_PUBLIC_CRM_WEBHOOK_URL` | Zapier / Make / GoHighLevel / HubSpot | Lead delivery |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Business Manager | Facebook/Instagram ads |

---

## Chatbase Setup

1. Create a chatbot at [app.chatbase.co](https://app.chatbase.co)
2. Train it on CPA's FAQ, service area, and process content
3. Copy the bot ID from Settings → Embed
4. Set `NEXT_PUBLIC_CHATBASE_BOT_ID` in `.env.local`
5. The widget auto-loads site-wide from `ChatWidget.tsx`

---

## Retell AI Voice Setup

You're building the Retell agent separately. When it's ready:

1. Set `NEXT_PUBLIC_RETELL_AGENT_ID` in `.env.local`
2. Open `src/components/layout/ChatWidget.tsx`
3. Uncomment the Retell integration block and install `retell-client-js-sdk`
4. Wire the `startVoiceCall()` function into the voice CTA button's `onClick`

---

## CRM Webhook / Lead Routing

The intake form POSTs a structured JSON payload to `NEXT_PUBLIC_CRM_WEBHOOK_URL`.

**Payload fields:**
- Identity: `firstName`, `lastName`, `phone`, `email`, `preferredContact`, `bestTime`
- Property: `propertyType`, `address`, `city`, `state`, `zip`, `region`
- Claim: `damageTypes`, `insuranceStage`, `insurerName`, `claimNumber`, `claimDescription`, `damageDate`, `isUrgent`
- Routing: `urgencyScore` (`emergency` | `urgent` | `standard`), `region` (`nashville` | `south-florida`)
- Attribution: `source`, `utmSource`, `utmMedium`, `utmCampaign`, `isAfterHours`, `submittedAt`

Connect this webhook to:
- GoHighLevel / HubSpot for CRM storage
- Zapier for email/SMS notifications
- Slack for real-time team alerts

---

## Analytics Events

All events fire through `src/lib/analytics.ts` → GTM dataLayer.

| Event | Trigger |
|---|---|
| `cta_click` | Any CTA button click |
| `phone_click` | Phone number tap/click |
| `chat_open` | Chatbase widget opened |
| `voice_intake_click` | Voice intake CTA clicked |
| `form_start` | Intake flow begun |
| `form_step_complete` | Each intake step completed |
| `form_submit` | Intake submitted |
| `form_abandon` | User exits mid-intake |
| `scroll_depth_25/50/75/100` | Page scroll milestones |

In GTM, create triggers for each event name and connect to GA4, Meta Pixel, etc.

---

## Deploying

The site is deployed on **Vercel** under `ainanus-projects/country-public-adjusters-website`.
The GitHub repo (`AINANU7/Country-Public-Adjuster-Website`) is connected to Vercel — every
push to `main` triggers an automatic production deployment.

Contributors who push must be members of the `AINANU's projects` Vercel team; Vercel
verifies the commit author / GitHub user against team membership before building.

### Local build sanity check

```bash
npm run build
npm run start
```

### Manual deploy via Vercel CLI (optional)

```bash
npm i -g vercel
vercel login
vercel link --project country-public-adjusters-website
vercel --prod
```

### Required Vercel environment variables (Production)

These must be set in the Vercel dashboard → Project → Settings → Environment Variables:

- `ANTHROPIC_API_KEY` — Sarah chatbot (server-only)
- `GHL_WEBHOOK_URL` — GoHighLevel lead webhook (server-only)
- `NEXT_PUBLIC_SITE_URL` — `https://countrypublicadjusters.com`
- `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_META_PIXEL_ID` — analytics (optional)

Without `ANTHROPIC_API_KEY` and `GHL_WEBHOOK_URL` the chatbot will not respond
and leads will not reach the CRM.

---

## Adding Content

**New damage type page:** Add entry to `src/data/damagePages.ts`. Route auto-generates.

**New city page (Nashville):** Add entry to `src/data/localPages.ts` → `NASHVILLE_CITIES`. Route auto-generates.

**New city page (South Florida):** Add entry to `src/data/localPages.ts` → `FLORIDA_CITIES`. Route auto-generates.

**Case results:** Edit `src/components/home/CaseResults.tsx` → `CASES` array.

**Testimonials:** Edit `src/components/home/Testimonials.tsx` → `TESTIMONIALS` array.

**FAQ:** Edit `src/app/faq/page.tsx` → `ALL_FAQS` array.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion + GSAP |
| Smooth scroll | Lenis |
| Forms | React Hook Form + Zod |
| Font | Plus Jakarta Sans (next/font) |
| SEO | Native Next.js metadata + JSON-LD |
| Analytics | GTM-ready dataLayer |
| AI chat | Chatbase (drop-in widget) |
| AI voice | Retell (integration slot ready) |
