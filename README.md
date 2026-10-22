# Bloom House — Website Starter

An independently developed full-stack café website concept featuring responsive UI, external food delivery links, pickup pre-order functionality, and a customer contact form.
A full website build for **Bloom House**, Satya Vihar, Rasulgarh, Bhubaneswar —
built as a client-ready demo. 

## What's inside

```
bloom-house-project/
├── frontend/     React + Tailwind site (the part visitors see)
└── backend/      Node/Express + MongoDB API (contact form + pickup pre-orders)
```

## Why this stack, and why NOT a full ordering system

Bloom House already has Zomato and Swiggy for delivery — rebuilding cart,
payments, delivery tracking, and rider logistics would take weeks and
compete with tools they already pay for and trust. So the site:

- **Links out to Zomato/Swiggy** for anyone who wants delivery (one click,
  zero extra work for you or them).
- Adds a **"Reserve a pickup order"** form that Zomato/Swiggy don't offer:
  a customer types what they want and when they'll arrive, and it lands in
  a database the café can check — no delivery fee, no commission, and no
  app to download. This is the actual differentiator to pitch.
- Adds a **contact form** for bookings, feedback, and questions.

This is a stronger pitch than "I'll rebuild what Zomato already does":
it's a feature Zomato and Swiggy structurally can't offer, live on a site
Bloom House fully owns.

## Design

Frontend uses a custom "garden café" identity — not a template:
- **Palette**: warm ivory base, bloom-pink and sage-green accents, gold highlights
- **Type**: Fraunces (display) + Karla (body) — warm, editorial, not corporate
- **Signature touches**: hand-drawn flower doodles (pure SVG, no stock art),
  scalloped section dividers instead of straight lines, a single drifting-petals
  moment in the hero (not motion on every element)
- Fully responsive, keyboard-focus visible, respects reduced-motion

Everywhere you see a photo placeholder (the Story section, the Gallery grid),
swap in real photos from the café before showing this to the client — that
single change will make the biggest visual difference.

## Running it locally

**Frontend**
```bash
cd frontend
npm install
cp .env.example .env      # points the app at your backend URL
npm run dev                # http://localhost:5173
```

**Backend** (needs a MongoDB connection — a free MongoDB Atlas cluster works)
```bash
cd backend
npm install
cp .env.example .env      # add your MongoDB Atlas connection string
npm run dev                 # http://localhost:4000
```

## Deploying it for real

| Piece | Where | Why |
|---|---|---|
| Frontend | **Vercel** | Free tier, auto-deploys from GitHub, perfect for Vite/React |
| Backend | **Render** (or Railway) | Free/cheap tier for small Node APIs |
| Database | **MongoDB Atlas** | Free 512MB tier is plenty for a café's forms |

**Steps:**
1. Push this project to a GitHub repo (frontend and backend as two folders, or two repos).
2. **MongoDB Atlas**: create a free cluster → get the connection string → this is your `MONGO_URI`.
3. **Backend on Render**: New Web Service → connect the repo/`backend` folder → set environment variables `MONGO_URI` and `CLIENT_ORIGIN` (your future Vercel URL) → deploy. Note the Render URL it gives you (e.g. `https://bloom-house-api.onrender.com`).
4. **Frontend on Vercel**: Import the repo/`frontend` folder → set environment variable `VITE_API_URL` to your Render URL → deploy.
5. Update `CLIENT_ORIGIN` on Render to match your final Vercel domain once it's live, so the browser's CORS check passes.

Total ongoing cost on free tiers: **₹0/month** until traffic outgrows them —
worth mentioning to the client.

## Before you pitch this

- Swap every placeholder (menu prices, hours, phone number, Zomato/Swiggy
  links in `frontend/src/components/OrderOnline.jsx`) for Bloom House's
  real details.
- Get 6–10 real photos (phone camera is fine) for the Story and Gallery
  sections — placeholders are clearly marked in the code.
- Show them the live demo link first. Don't hand over the code or deploy
  it to their domain until the project is agreed and (ideally) a deposit
  is paid.
