# BYOB Interactive Landing Page

Next.js + Tailwind CSS implementation of the BYOB interactive ad landing-page flow.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Replace before production

1. Replace the placeholder alumni/video blocks with real vertical videos.
2. Set the real WhatsApp number in `components/InteractiveExperience.tsx`.
3. Connect the Apply CTA to the real application URL/form.
4. Replace `console.info` analytics in `lib/analytics.ts` with GA4/Meta Pixel/PostHog/etc.
5. Add real alumni names, roles and Instagram links.

## Recommendation

The recommendation currently uses:
- current stage
- weekly time
- main challenge

as specified in the supplied BYOB brief.
