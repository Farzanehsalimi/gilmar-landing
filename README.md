# گیلمار | Gilmar Ecological Resort

🔗 **Live demo:** [gilmar.farzanehsalimi.ir](https://gilmar.farzanehsalimi.ir/)

Landing page built with **Next.js 15 (App Router)**, **TypeScript** and **MUI v7** (RTL).

![Preview](docs/preview.jpg)

## Run

npm install
npm run dev # http://localhost:3000
npm run build && npm start

## Structure

- `src/components/ui` shared building blocks (ArrowButton, IconBox, Icon, SectionHeader, ImageCard…)
- `src/components/sections` one folder per landing section
- `src/constants` static content (no hard-coded copy in JSX)
- `src/theme` MUI theme: palette, typography, button variants
- `scripts` image optimization helpers (png → webp)

## Decisions

- RTL via stylis-plugin-rtl + logical CSS properties (`insetInline*`)
- Photos as WebP, masked shapes baked or applied with CSS `mask-image`
- Sliders built with scroll-snap / opacity transitions, no extra dependency
- `prefers-reduced-motion` respected for autoplay and animations

## Deployment

Deployed on Vercel. Every push to `main` triggers a new production deployment.
