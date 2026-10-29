# Geo Excel — concept redesign

A redesign of [geoexcel.group](https://www.geoexcel.group/), the website of a Bengaluru merchant exporter of rice, whole spices, IQF frozen foods, edible oils and ghee.

> This is a concept built as a design and development exercise. It is **not** the official Geo Excel website. Every page says so, and the site is marked `noindex`.

## The problem

**International buyers could not qualify Geo Excel, or ask for a precise quote.**

An audit of the current site found:

- The homepage headline (“Facilitating International & Domestic Trade — for your business”) did not say what the company sells, or to whom.
- About 44 products were documented on four long, duplicated template pages (the spice page lived at `/copy-of-rice`), with no way to compare grades.
- Specifications contradicted themselves. For example, 1121 Sella moisture was given as both 14% and 13.5% max. HS codes were labelled “HNS Code” and were inconsistent.
- The only enquiry route was a four-field form (name, email, message). It captured no product, quantity, packing, port or Incoterm, so every enquiry needed clarifying emails before anyone could quote.
- The legal entity, IEC and APEDA registration appeared only inside certificate images. Two of the documents shown were already past their validity dates.

## The response

The redesign makes the specification the starting point of every enquiry.

- **Specification-first catalogue:** 44 product sheets in the same order (origin → key parameters → pack sizes → HS code), with a searchable index and comparison tables for each category.
- **Quote list and structured enquiry:** buyers add products as they browse (stored in `localStorage`), then send quantity, unit and packing for each line, plus destination, Incoterm and timing, as one reviewed message.
- **Quality register:** registration numbers, issuers and dates, with status calculated from the validity date at build time.
- **Group story in proportion:** the history from farming to trading supports credibility without crowding out the products.
- **Legacy redirects:** every old Wix URL redirects to its new page.

The full reasoning is on the site at [`/about-this-redesign/`](src/pages/about-this-redesign.astro).

## Accuracy rules

No company material was supplied, so the only sources are Geo Excel's public website and the certificate images it publishes.

- No customers, volumes, facilities, markets or statistics are invented.
- If a parameter appears with two different values on the source site, it is **omitted**, not guessed. Obvious errors (for example a nutmeg shelf life of “14 Yr”) are omitted too.
- HS codes are shown only at the internationally harmonised 4- or 6-digit level.
- Registrations whose published copy has expired (FSSAI and CLE) are kept out of the public register. See `src/data/registrations.ts`.
- All photographs come from geoexcel.group. Captions describe only the product type and never suggest a Geo Excel facility.
- `npm run build` fails if placeholder wording (TBC, TODO, lorem ipsum…) reaches the output, if any internal link or asset is broken, or if an expired registration is listed (`scripts/check-build.mjs`).

## Design: “Origin & Record”

- **Palette:** warm paper (`#f5f1e8`), the existing Geo Excel navy (`#072136`) as ink, and fine rules. The logo's four colours are used only as category markers (01 Rice ■ green, 02 Spices ■ orange, 03 Frozen ■ teal, 04 Oils ■ red, 05 Footwear □).
- **Type:** Newsreader for headlines, Inter for text and interface, IBM Plex Mono for specification values and registration numbers. All are self-hosted.
- **Layout:** document-style sheets and registers alternate with asymmetric image sections, a full-width image band and a staggered image triptych.
- **Interaction:** quiet. One-time reveals (disabled under `prefers-reduced-motion`), hover states, no scroll-jacking, no autoplaying media.

## Stack

- [Astro 5](https://astro.build) static site with TypeScript and no UI framework.
- `astro:assets` serves responsive AVIF/WebP images.
- No tracking, cookies or third-party scripts.

```
src/
  data/        company.ts, catalogue.ts, registrations.ts  ← all content lives here
  components/  Header, Footer, SpecSheet, ProductTable, Register, CategoryIndex, …
  pages/       index, products/[category]/[product], enquiry, quality, group, …
  scripts/     site.ts (navigation, quote list, reveals), quote-store.ts
  styles/      global.css (design tokens)
scripts/
  check-build.mjs      post-build accuracy and link checks
  prepare-images.py    trims and resizes the source photographs
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/, followed by the build checks
npm run preview
```

## Deploy

The site is static, so any static host works.

- **Vercel:** import the repository. The framework is detected automatically, and `vercel.json` adds permanent redirects for the old URLs. No environment variables are needed.
- **GitHub Pages:** in *Settings → Pages*, set **Source** to **GitHub Actions**, then push to `main` (or run the workflow manually). `.github/workflows/deploy-pages.yml` sets `SITE_URL` and `BASE_PATH` so every link works under `/<repo>/`.

## Accessibility

Checked with axe-core (WCAG 2.2 AA plus best-practice rules) on every page type at 1440px and 390px, with no violations. The site has keyboard-operable menus (a disclosure panel on desktop and a modal drawer with focus containment on mobile), semantic tables restyled for small screens, a form error summary with linked field errors, visible focus, and 44px touch targets.

## Credits

Concept design and development: Rachit Trivedi. Product information, logo and photographs © their respective owners, reproduced from geoexcel.group for the purpose of this redesign proposal.
