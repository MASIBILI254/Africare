# Africare Foundation Website

Responsive React + Tailwind CSS implementation based on the Africare Foundation profile and roles/responsibilities documents.

## Features
- Responsive desktop/tablet/mobile layout
- Hero section with mission-focused CTA
- Impact areas and program cards
- About, mission, vision and philosophy sections
- Impact statistics
- Core values section
- Leadership section reflecting the supplied organizational structure
- Get Involved CTA
- Donation modal UI ready for payment-provider integration
- Contact/footer information from the supplied profile

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Notes

The site currently uses Unsplash-hosted photography in the hero/about sections. Replace those URLs with Africare Foundation's own approved photography before production launch. The donation button is a frontend UI flow only; connect it to the organization's selected payment provider/backend before accepting real payments.
