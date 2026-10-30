# Geo Excel — website redesign

A redesign of [geoexcel.group](https://www.geoexcel.group/) for Geo Excel, a Bengaluru exporter of rice, spices, frozen foods, edible oils and ghee. It has two pages: a homepage that introduces the company to a first-time international buyer, and a products page listing all 44 products.

> This is a concept, not the official Geo Excel website. It's marked `noindex` so it stays out of search results.

## Deliverables

| Deliverable | Where |
|---|---|
| Live website | [geoexcel-redesign-concept.vercel.app](https://geoexcel-redesign-concept.vercel.app/) |
| Source code | [github.com/Rachit360/geoexcel-redesign-concept](https://github.com/Rachit360/geoexcel-redesign-concept) |
| Problem and solution note | [`docs/problem-and-solution.md`](docs/problem-and-solution.md) (Word version: [`docs/problem-and-solution.docx`](docs/problem-and-solution.docx)) |
| README | This file |

## In short

**Problem:** a new buyer visiting the current site can't quickly tell what Geo Excel sells, why to trust it, or how to start trading. The headline is generic, the registrations are hidden in image sliders, and the only way to get in touch is a four-field contact form.

**Solution:** the homepage walks through a buyer's questions in order: who Geo Excel is, what it sells and where it comes from, why choose it, how to trade, proof of registration, sustainability, and contact. Every product has an Enquire button that opens the buyer's email app with a short template, so the first message already has what's needed for a quote.

The full reasoning is in the [problem and solution note](docs/problem-and-solution.md).

## Tech stack

- [Astro 5](https://astro.build): static site, no UI framework
- Plain CSS with custom properties for the design tokens (`src/styles/global.css`)
- TypeScript for data and the small client-side scripts (mobile menu, product filter, fade-in)
- `astro:assets` for responsive AVIF/WebP images
- Self-hosted fonts via Fontsource: Bayon, Manrope, Big Shoulders Stencil
- No backend, database, tracking or cookies. Enquiries are `mailto:` links.

## Setup

You need Node.js 20 or newer (built with Node 22).

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321.

To build and preview the production version:

```bash
npm run build
```

```bash
npm run preview
```

`npm run build` also runs `scripts/check-build.mjs`. The build fails if any page has leftover placeholder text or a broken internal link, or if the homepage lists an expired certificate.

## Deployment

The output is a static `dist/` folder, so any static host works.

- **Vercel (recommended):** import the repo. Vercel detects Astro and needs no settings. `vercel.json` also redirects the old Wix URLs, e.g. `/general-9` → `/products/?category=rice`.
- **Netlify:** build command `npm run build`, publish directory `dist`. Or drag the built `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop) for a quick preview.
- **GitHub Pages:** in *Settings → Pages*, set *Source* to *GitHub Actions*, then push to `main`. The workflow in `.github/workflows/deploy-pages.yml` builds the site with the right base path.

## Project structure

```
src/
  pages/
    index.astro              homepage - just the sections in order
    products/index.astro     product grid + category filter
    404.astro
  components/
    home/                    one file per homepage section
    Header.astro, Footer.astro, Logo.astro
    ProductCard.astro        used on both pages
    ShippingMark.astro       stencil label in the hero
  data/
    catalogue.ts             the 44 products and 4 categories
    company.ts               contact details, history, sustainability
    registrations.ts         certificates and their expiry dates
  lib/                       enquiry link, image and path helpers
  scripts/site.ts            mobile menu, fade-in on scroll
  styles/global.css          colours, type, spacing, shared styles
docs/                        problem and solution note
scripts/                     build check, image prep
```

## Known limitations

- **Enquiries use email links.** There's no form backend, so the Enquire buttons open the visitor's own mail app. Anyone without a mail app set up has to use the email address or phone number shown on the page. A real launch would want a proper form, e.g. a serverless function plus transactional email.
- **Content is taken from the current site.** Product details, photos, the logo and the certificates all come from geoexcel.group. Photos should be swapped for Geo Excel's own originals, and their permission to reuse the certificate images hasn't been checked.
- **Some product specs are deliberately missing.** Where the current site gives two different values for the same spec, I left it out rather than guess. HS codes are shown at the 4/6-digit international level only.
- **Two certificates aren't shown.** The FSSAI licence and Council for Leather Exports copies on the current site have expired, so they're hidden until current copies are available.
- **"Since the 1980s", not a number of years.** The company only says its roots go back to the 1980s, so the site doesn't claim a specific figure.
- **No product detail pages.** Each product has a card with a description and an Enquire button; separate pages were left out to keep the scope focused.
- **Testing:** checked in Chromium at desktop (1440px) and mobile (390px) widths with automated accessibility checks (axe, WCAG 2.2 AA). Not yet tested in Safari, on real devices, or with a screen reader.
- **Old URLs without a trailing slash** (e.g. `/general-9`) only redirect on Vercel, through `vercel.json`. On other hosts use `/general-9/`.

## Credits

Design and development by Rachit Trivedi. Colour and type direction referenced from [careloop.framer.website](https://careloop.framer.website/). Product information, logo, certificates and photographs belong to Geo Excel and are reproduced from geoexcel.group for this proposal.
