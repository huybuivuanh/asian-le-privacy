# Asian Le Privacy

Privacy policy pages for the Asian Le apps, linked from the App Store / Google Play
listings. A small static Next.js site, deployed on Vercel
(asian-le-privacy.vercel.app).

| Route | Page |
|---|---|
| `/` | List of the apps, linking to each policy |
| `/rewards` | Asian Le Rewards |
| `/pos` | Asian Le POS |
| `/orders` | Asian Le Orders |

Each policy page uses the shared layout in `app/_components/policy.tsx`. To add an app,
add a folder under `app/` with a `page.tsx` and link it from `app/page.tsx`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

Next.js 16 (App Router) + Tailwind CSS v4. No environment variables or backend.
