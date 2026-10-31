# Geo Excel Redesign — Problem and Solution

## Summary

Geo Excel's website doesn't help a first-time international buyer decide to get in touch. It doesn't say clearly what the company sells, it hides the things that build trust, and it gives no clear way to start a trade.

The redesign turns the homepage into a short onboarding journey. It answers a new buyer's questions in the order they ask them, and ends with a simple way to send an enquiry.

## Context

Geo Excel (short for Geographic Excellence) is a Bengaluru merchant exporter of rice, whole spices, frozen foods, edible oils and ghee. The company was incorporated in November 2023, but the family behind it has farmed and traded since the 1980s.

Its buyers are importers, distributors and food manufacturers abroad, and most of them have never heard of Geo Excel. For a young supplier like this, the website is usually the buyer's first check. If that check doesn't go well, the enquiry never arrives.

## The problem

**A new buyer visiting geoexcel.group can't quickly tell who the company is, why they should trust it, or how to start trading.** I reviewed every page of the current site, and five things stood out:

| What I saw | Why it matters to a buyer |
| --- | --- |
| The headline reads "Facilitating International & Domestic Trade — For Your Business" | It could describe any trading company. Nothing tells the visitor what Geo Excel actually sells. |
| The family's farming roots, the meaning of the name and the UN SDG commitment sit on secondary pages | The strongest reasons to trust a 2023 company are hidden. |
| Nothing explains why to choose Geo Excel over another supplier | The buyer has to work that out alone, and usually won't. |
| Registrations (APEDA, IEC, Udyam) appear only as images in sliders, and two of the certificates shown have expired | Proof of legitimacy is hard to find, and the expired copies hurt rather than help. |
| The only way in is a four-field form (name, email, message), with no guidance on what to send | Enquiries arrive vague and need several emails before a quote can go out. |

Products have the same issue: about 44 items are spread over long, duplicated pages (the spices page lives at `/copy-of-rice`), so they're hard to browse.

## The solution

**The homepage now follows a new buyer's questions in the order they ask them, and every answer leads towards an enquiry.**

| The buyer's question | How the redesign answers it |
| --- | --- |
| Who are you, and what do you sell? | The hero says it in one line: rice, spices, frozen foods and edible oils, from a Bengaluru exporter. Four quick facts follow: farming roots since the 1980s, 44 products, 4 categories, APEDA-registered since 2023. |
| Why trust a company founded in 2023? | The About section tells the family story, from farming through cement, steel and construction to Geo Excel. |
| What makes you different? | The Geographic Excellence section groups products by their Indian region of origin: basmati from Punjab, cardamom and pepper from Kerala, and so on. |
| What exactly can I buy? | Category cards and featured products lead to a products page with all 44 items and a category filter. |
| Why choose you? | Six reasons, each one backed by something Geo Excel publishes. |
| How do I buy? | Four steps, from first message to dispatch. |
| Are you legitimate? | Registrations are shown with their certificate images, numbers and validity dates. Sustainability shows their UN SDG commitment. |
| How do I start? | Every product has an Enquire button. The buyer picks Gmail, Outlook or their email app, and the message is pre-filled with the product, quantity, packing and destination port. |

The template matters as much as the layout: Geo Excel gets the details it needs to quote in the first message, not after three follow-up emails.

## Design decisions

- **Look and feel.** Forest green, cream and a warm orange, with condensed all-caps headings (Bayon) and a clean body font (Manrope). It reads as agricultural and international, not corporate-generic. The four colours of the Geo Excel logo tag the four product categories.
- **One signature detail.** A small stencil-style label in the hero, like the marks printed on export sacks, carrying the company's real export code.
- **Real content only.** Every fact comes from Geo Excel's own site or certificates. Where their pages contradict themselves (e.g. two moisture values for the same rice), I left the value out rather than guess. Expired certificates are hidden automatically.
- **Heritage wording.** I wrote "since the 1980s" rather than "46 years". The company only says the 1980s, and a specific number would claim a founding year they don't state.
- **Focused scope.** Two pages, a homepage and a products page, built properly, rather than a large site built thinly. No accounts, no quote system, no backend.

## Expected impact

A buyer should be able to go from "who is this?" to sending a usable enquiry in one visit. After launch, three numbers would show whether it works:

1. Enquiries per month, compared with the current contact form.
2. Share of enquiries that arrive with product, quantity and destination already filled in.
3. Emails exchanged before a quotation can be sent.

**Known limitations.** There's no form backend: enquiries go out from the buyer's own email, so Geo Excel only sees the ones that are actually sent. Photos and certificates are reused from the current site and should be replaced with Geo Excel's own originals before a real launch. Current copies of the expired FSSAI and leather-council certificates would also strengthen the trust section.
