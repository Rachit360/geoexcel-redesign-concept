# Geo Excel — concept redesign

A focused redesign of [geoexcel.group](https://www.geoexcel.group/), built for a hiring assignment. It has two pages: a **homepage** and a **products page**.

> This is a concept, **not** the official Geo Excel website. It is marked `noindex` so it stays out of search results.

## The problem

**A first-time international buyer could not quickly understand who Geo Excel is, why to trust it, or how to start trading with it.**

The current site's headline ("Facilitating International & Domestic Trade") does not say what the company sells. Products sit on long duplicated pages. The registrations are hidden in image sliders. The only enquiry route is a four-field form with no guidance on what to send.

## The response

The homepage answers a first-time visitor's questions in order:

| Question | Section |
|---|---|
| What is this company? | Hero, the at-a-glance figures, and **About** (Geographic Excellence, farming roots since the 1980s, the Group's timeline and verticals) |
| What do they sell, and from where? | **Geographic Excellence**: products grouped by their Indian region of origin. **Categories**: rice, spices, frozen foods, oils and ghee. **Featured products** |
| Why choose them? | **Why Geo Excel**: six reasons, each backed by published information |
| How do I buy? | **How to trade**: four steps from first message to dispatch |
| Can I trust them? | **Registrations**: APEDA, IEC and Udyam, with certificate images, numbers and dates. **Sustainability**: their UN SDG commitment and four focus areas, shown with photography |
| How do I get in touch? | **Contact**: an email enquiry template, phone and address |

The **products page** shows all 44 products with an image, a short description and their origin. A category filter uses the four category tiles. Every product has an **Enquire** link that opens the visitor's email app with a pre-filled enquiry template.

## Content rules

- Only facts Geo Excel publishes on its website or in its certificates are used.
- The heritage is shown as **"since the 1980s"**, which is how the company states it. A specific number of years (e.g. "46 years") would assume a founding year of 1980, which the site does not state.
- Registrations whose published copies have expired (FSSAI, Council for Leather Exports) are not shown. Status is calculated from each document's validity date at build time (`src/data/registrations.ts`).
- Photographs come from the current geoexcel.group site and are captioned only with what they show.
- `npm run build` fails if placeholder wording, a broken internal link, or an expired registration reaches the output (`scripts/check-build.mjs`).

## Design

- **Reference:** colour and type direction from [careloop.framer.website](https://careloop.framer.website/).
- **Palette:** forest green `#112a20`, cream `#eaebdb`, orange `#ef562c` (with `#b23a18` for text and buttons, to meet AA contrast) and a yellow highlight `#fddb22`. The four stroke colours of the Geo Excel logo mark the four categories.
- **Type:** Bayon (condensed display, all caps) for headings and Manrope for text. Big Shoulders Stencil is used once, for the "shipping mark" export label in the hero.
- **Shape:** rounded panels and cards with pill-shaped buttons.
- **Motion:** a single fade-in on scroll, switched off when the visitor prefers reduced motion.

## Code structure

```
src/
  data/
    catalogue.ts       44 products, 4 categories, regions-of-origin helper
    company.ts         address, contact, history, SDG commitments
    registrations.ts   registrations + status-from-expiry-date
  components/
    Header.astro       nav + concept notice + mobile menu
    Footer.astro
    Logo.astro         Geo Excel mark redrawn as SVG
    ProductCard.astro  shared by homepage and products page
    ShippingMark.astro the stencilled export label
    home/              one file per homepage section, in page order
  lib/
    enquiry.ts         builds the mailto: enquiry link
    images.ts, paths.ts
  pages/
    index.astro        homepage: just the sections, in order
    products/index.astro  products grid + category filter (small inline script)
    404.astro
  scripts/site.ts      mobile menu and reveal-on-scroll
  styles/global.css    design tokens and shared styles
```

**Stack:** [Astro 5](https://astro.build), a static site with no UI framework. Images are generated as responsive AVIF/WebP with `astro:assets`, and fonts are self-hosted. There is no backend, database or tracking. Enquiries are `mailto:` links, so nothing is stored.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
```

```bash
npm run build      # static site in dist/, then the build checks
npm run preview    # serve the built site
```

## Deploy

- **Vercel:** import the repository. It needs no configuration, and `vercel.json` redirects the old Wix URLs (e.g. `/general-9` → `/products/?category=rice`).
- **GitHub Pages:** set *Settings → Pages → Source* to "GitHub Actions" and push to `main` (`.github/workflows/deploy-pages.yml`).
- **Any static host:** upload `dist/`.

## Design skills

`.claude/skills/ui-designer` and `.claude/skills/ux-designer` are the "Claude UX & UI Design Skills" (Yummy Design, v3). They were used to guide the design work.

## Credits

Concept design and development: Rachit Trivedi. Product information, logo, certificates and photographs © Geo Excel, reproduced from geoexcel.group for this proposal.
