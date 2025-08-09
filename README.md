# AutoStackz Course Site

Gumroad-style landing page with Stripe Checkout, built on Next.js + Tailwind.

## Quick Start (No coding needed)

1. Create a free account at https://vercel.com (GitHub login works).
2. Download this ZIP and upload the folder to a new GitHub repo.
3. In Vercel, click **New Project** → import the repo → **Deploy**.
4. Done! You’ll get a public URL like `yourcourse.vercel.app`.

## Local Dev (Optional)

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Customize

- Edit `pages/index.tsx` to change the name, price, features, FAQs.
- Replace `STRIPE_CHECKOUT_URL` with your real Stripe Payment Link.
- Components live in `components/ui` (Button, Card).
