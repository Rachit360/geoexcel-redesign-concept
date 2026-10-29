/**
 * Product catalogue.
 *
 * Source: the product pages of geoexcel.group (Rice, Whole Spices, IQF Products,
 * Edible Oil & Ghee, Fashion & Lifestyle). Values are reproduced as the company
 * publishes them, with three editorial rules:
 *
 *  1. Where the company's own page gives two different values for the same
 *     parameter (e.g. moisture 14% in one block, 13.5% max in another), the
 *     parameter is omitted rather than guessed.
 *  2. Values that are clearly copy-and-paste errors on the source page
 *     (e.g. a nutmeg shelf life of "14 Yr") are omitted.
 *  3. HS codes are shown at the internationally harmonised 4- or 6-digit level
 *     only. The 8-digit national tariff lines on the source site were
 *     inconsistent, so they are not reproduced; the exact line is confirmed on
 *     the commercial invoice.
 */

export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  /** Short qualifier shown under the name, e.g. "Basmati · Steam". */
  kind: string;
  summary: string;
  origin?: string;
  specs: Spec[];
  packing?: { sizes?: string; types?: string };
  hs?: string;
  image: string;
};

export type Category = {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  marker: 'green' | 'orange' | 'teal' | 'red' | 'ink';
  lede: string;
  intro: string;
  photo: string;
  photoAlt: string;
  /** Facts shared by every product in the category. */
  common?: Spec[];
  products: Product[];
};

const RICE_PACKING_A = {
  sizes: '5, 10, 20 and 25 kg',
  types: 'PP bags, jute bags, plastic sacks, plastic bags',
};
const RICE_PACKING_B = { sizes: '26 and 50 kg', types: 'PP bags, plastic bags' };
const RICE_PACKING_C = { sizes: '5, 26 and 50 kg', types: 'PP bags, plastic bags' };

export const categories: Category[] = [
  {
    slug: 'rice',
    number: '01',
    name: 'Rice',
    shortName: 'Rice',
    marker: 'green',
    lede: 'Basmati and non-basmati grades, steam, sella and parboiled.',
    intro:
      'Twelve grades, from extra-long 1121 and 1509 basmati to South Indian staples such as Sona Masuri, Ponni and Palakkadan Matta. Each sheet lists the grain and quality parameters Geo Excel publishes for that grade.',
    photo: 'rice-red-texture',
    photoAlt: 'Close-up of reddish-brown rice grains',
    common: [{ label: 'Country of origin', value: 'India' }],
    products: [
      {
        slug: '1121-basmati-steam',
        name: '1121 Basmati Steam',
        kind: 'Basmati · Steam · Extra-long grain',
        summary: 'Extra-long-grain 1121 basmati, steamed, fully polished and sortexed.',
        origin: 'Punjab, India',
        specs: [
          { label: 'Average grain length', value: '8.35 mm' },
          { label: 'Broken', value: 'Under 0.25%' },
          { label: 'Moisture', value: '12%' },
          { label: 'Colour', value: 'Creamy' },
          { label: 'Polish', value: 'Fully polished' },
          { label: 'Cleaning', value: 'Sortexed' },
        ],
        packing: RICE_PACKING_A,
        hs: '1006.30',
        image: 'rice-1121-basmati-steam',
      },
      {
        slug: '1121-basmati-sella',
        name: '1121 Basmati Sella',
        kind: 'Basmati · Sella (parboiled) · Extra-long grain',
        summary: 'Parboiled (sella) 1121 basmati with no added colouring, sortex-cleaned.',
        origin: 'Punjab, India',
        specs: [
          { label: 'Average grain length', value: 'Above 8.35 mm' },
          { label: 'Broken', value: 'Under 0.25%' },
          { label: 'Paddy grains', value: 'Nil' },
          { label: 'Colour', value: 'Creamy white, no added colouring' },
          { label: 'Polish', value: 'Fully polished' },
          { label: 'Cleaning', value: 'Sortex-cleaned, free from foreign matter' },
        ],
        packing: RICE_PACKING_A,
        hs: '1006.30',
        image: 'rice-1121-basmati-sella',
      },
      {
        slug: '1121-basmati-golden-sella',
        name: '1121 Basmati Golden Sella',
        kind: 'Basmati · Golden sella · Extra-long grain',
        summary: 'Golden sella 1121 basmati: long, slender grains with a deep golden colour.',
        origin: 'Punjab, India',
        specs: [
          { label: 'Average grain length', value: '8.35 mm' },
          { label: 'Foreign matter', value: '0.25% max' },
          { label: 'Goldenness', value: '38–40 KETT' },
          { label: 'Paddy grains', value: 'Nil' },
          { label: 'Red streak', value: 'Nil' },
          { label: 'Colour', value: 'Golden' },
        ],
        packing: RICE_PACKING_A,
        hs: '1006.30',
        image: 'rice-1121-basmati-golden-sella',
      },
      {
        slug: '1401-pusa-basmati-steam',
        name: '1401 Pusa Basmati Steam',
        kind: 'Basmati · Steam · Long grain',
        summary: 'Pusa 1401 basmati, steamed and sortexed. Also listed in parboiled (sella) form.',
        origin: 'Punjab, India',
        specs: [
          { label: 'Average length before cooking', value: '7.8 mm' },
          { label: 'Length to breadth ratio', value: '4.5 or above' },
          { label: 'Damaged and discoloured grains', value: 'Nil' },
          { label: 'Paddy and black grains', value: 'Nil' },
          { label: 'Colour', value: 'Creamy white' },
          { label: 'Cleaning', value: 'Sortexed' },
        ],
        packing: RICE_PACKING_A,
        hs: '1006.30',
        image: 'rice-1401-pusa-basmati-steam',
      },
      {
        slug: '1509-basmati-steam',
        name: '1509 Basmati Steam',
        kind: 'Basmati · Steam · Extra-long grain',
        summary: '1509 basmati from Punjab, steamed, with an extra-long grain.',
        origin: 'Punjab, India',
        specs: [
          { label: 'Average grain length', value: '8.4 mm' },
          { label: 'Broken', value: 'Under 0.5%' },
          { label: 'Moisture', value: '11%' },
          { label: 'Colour', value: 'Creamy white' },
          { label: 'Polish', value: 'Fully polished' },
        ],
        packing: RICE_PACKING_A,
        hs: '1006.30',
        image: 'rice-1509-basmati-steam',
      },
      {
        slug: '1509-basmati-sella',
        name: '1509 Basmati Sella',
        kind: 'Basmati · Sella (parboiled) · Extra-long grain',
        summary: '1509 basmati in sella (parboiled) form, with an extra-long grain.',
        origin: 'Punjab, India',
        specs: [
          { label: 'Average grain length', value: '8.4 mm' },
          { label: 'Broken', value: 'Under 0.5%' },
          { label: 'Colour', value: 'Creamy white' },
          { label: 'Polish', value: 'Fully polished' },
        ],
        packing: RICE_PACKING_A,
        hs: '1006.30',
        image: 'rice-1509-basmati-sella',
      },
      {
        slug: 'pr-11-steam',
        name: 'PR-11 Steam',
        kind: 'Non-basmati · Steam · Long grain',
        summary: 'PR-11 long-grain non-basmati rice, steamed and sortexed.',
        origin: 'Punjab, India',
        specs: [
          { label: 'Average grain length', value: '6.85 mm' },
          { label: 'Broken', value: 'Under 1%' },
          { label: 'Moisture', value: '12%' },
          { label: 'Colour', value: 'Creamy white' },
          { label: 'Cleaning', value: 'Sortexed' },
        ],
        packing: RICE_PACKING_A,
        hs: '1006.30',
        image: 'rice-pr-11-steam',
      },
      {
        slug: 'ir-64-parboiled',
        name: 'IR-64 Parboiled',
        kind: 'Non-basmati · Parboiled (sella) · Long grain',
        summary: 'IR-64 parboiled rice, fully polished and sortexed.',
        origin: 'Andhra Pradesh, Chhattisgarh and Gujarat, India',
        specs: [
          { label: 'Average grain length', value: '5.9 mm' },
          { label: 'Broken', value: 'Under 5%' },
          { label: 'Moisture', value: 'Under 14%' },
          { label: 'Colour', value: 'White' },
          { label: 'Cleaning', value: 'Sortexed' },
        ],
        packing: RICE_PACKING_B,
        hs: '1006.30',
        image: 'rice-ir-64-parboiled',
      },
      {
        slug: 'sona-masuri-steam',
        name: 'Sona Masuri Steam',
        kind: 'Non-basmati · Steam',
        summary: 'Sona Masuri steam rice from South India, fully polished and sortexed.',
        origin: 'Karnataka and Andhra Pradesh, India',
        specs: [
          { label: 'Broken', value: '5%' },
          { label: 'Moisture', value: '14%' },
          { label: 'Colour', value: 'Creamy white' },
          { label: 'Polish', value: 'Fully polished' },
          { label: 'Cleaning', value: 'Sortexed' },
        ],
        packing: RICE_PACKING_B,
        hs: '1006.30',
        image: 'rice-sona-masuri-steam',
      },
      {
        slug: 'ponni',
        name: 'Ponni',
        kind: 'Non-basmati',
        summary: 'Ponni rice from the Thanjavur region of Tamil Nadu, fully polished and sortexed.',
        origin: 'Thanjavur, Tamil Nadu, India',
        specs: [
          { label: 'Broken', value: '5%' },
          { label: 'Moisture', value: '14%' },
          { label: 'Colour', value: 'Creamy white' },
          { label: 'Polish', value: 'Fully polished' },
          { label: 'Cleaning', value: 'Sortexed' },
        ],
        packing: RICE_PACKING_C,
        hs: '1006.30',
        image: 'rice-ponni',
      },
      {
        slug: 'jeerakasala',
        name: 'Jeerakasala',
        kind: 'Non-basmati · Short grain',
        summary: 'Short-grain Jeerakasala rice, widely used for biryani and pulao.',
        origin: 'West Bengal and Odisha, India',
        specs: [
          { label: 'Grain', value: 'Short' },
          { label: 'Broken', value: '5%' },
          { label: 'Moisture', value: '11%' },
          { label: 'Colour', value: 'White' },
          { label: 'Cleaning', value: 'Sortexed' },
        ],
        packing: RICE_PACKING_C,
        hs: '1006.30',
        image: 'rice-jeerakasala',
      },
      {
        slug: 'palakkadan-matta',
        name: 'Palakkadan Matta (Unda)',
        kind: 'Non-basmati · Short grain',
        summary: 'Palakkadan Matta rice from Kerala, eaten widely across South India.',
        origin: 'Kerala, India',
        specs: [
          { label: 'Grain', value: 'Short' },
          { label: 'Broken', value: '5%' },
          { label: 'Moisture', value: '11%' },
          { label: 'Cleaning', value: 'Sortexed' },
        ],
        packing: RICE_PACKING_C,
        hs: '1006.30',
        image: 'rice-palakkadan-matta',
      },
    ],
  },
  {
    slug: 'spices',
    number: '02',
    name: 'Whole spices',
    shortName: 'Spices',
    marker: 'orange',
    lede: 'Whole spices and seeds from Kerala, Karnataka and other growing regions.',
    intro:
      'Cardamom, pepper, cloves, cinnamon, mace and nutmeg from South India, alongside seed spices and sesame. Sizes, grades and packing are listed per product.',
    photo: 'band-spice-bowls',
    photoAlt: 'Bowls of whole and ground spices seen from above',
    common: [{ label: 'Form', value: 'Whole, neither crushed nor ground' }],
    products: [
      {
        slug: 'green-cardamom',
        name: 'Green cardamom',
        kind: 'Whole pods',
        summary: 'Green cardamom from Kerala, available in five size grades.',
        origin: 'Kerala, India',
        specs: [{ label: 'Size grades', value: '5–6 mm · 6–7 mm · 7–8 mm · 7–8 mm split · 8 mm bold' }],
        packing: { sizes: '1 kg' },
        hs: '0908.31',
        image: 'spice-green-cardamom',
      },
      {
        slug: 'black-pepper',
        name: 'Black pepper',
        kind: 'Whole peppercorns',
        summary: 'Bold black peppercorns sourced from Kerala and Karnataka.',
        origin: 'Kerala and Karnataka, India',
        specs: [
          { label: 'Grade', value: 'Bold' },
          { label: 'Extraneous matter', value: '0.5%' },
          { label: 'Light berries', value: '2%' },
        ],
        packing: { sizes: '1, 5, 25 and 50 kg' },
        hs: '0904.11',
        image: 'spice-black-pepper',
      },
      {
        slug: 'cloves',
        name: 'Cloves',
        kind: 'Bold whole',
        summary: 'Brown, bold whole cloves from Kerala.',
        origin: 'Kerala, India',
        specs: [
          { label: 'Grade', value: 'Bold whole' },
          { label: 'Colour', value: 'Brown' },
          { label: 'Moisture', value: '12%' },
          { label: 'Baby cloves', value: '2% per 100 g' },
        ],
        packing: { sizes: '1 and 5 kg' },
        hs: '0907.10',
        image: 'spice-cloves',
      },
      {
        slug: 'cinnamon',
        name: 'Cinnamon',
        kind: 'Sticks',
        summary: 'Cinnamon sticks from Kerala.',
        origin: 'Kerala, India',
        specs: [
          { label: 'Moisture', value: '11%' },
          { label: 'Total ash', value: '5%' },
          { label: 'Acid-insoluble ash', value: '1%' },
        ],
        packing: { sizes: '1 and 5 kg' },
        hs: '0906',
        image: 'spice-cinnamon',
      },
      {
        slug: 'mace',
        name: 'Mace (javitri)',
        kind: 'Whole blades',
        summary: 'Red mace from Kerala.',
        origin: 'Kerala, India',
        specs: [
          { label: 'Colour', value: 'Red' },
          { label: 'Moisture', value: '12%' },
          { label: 'Shelf life', value: '1 year' },
        ],
        packing: { sizes: '1 and 5 kg' },
        hs: '0908.21',
        image: 'spice-mace',
      },
      {
        slug: 'nutmeg',
        name: 'Nutmeg',
        kind: 'Whole',
        summary: 'Whole nutmeg from Kerala.',
        origin: 'Kerala, India',
        specs: [
          { label: 'Colour', value: 'Brown' },
          { label: 'Storage', value: 'Cool, dry place' },
        ],
        packing: { sizes: '1 and 5 kg' },
        hs: '0908.11',
        image: 'spice-nutmeg',
      },
      {
        slug: 'coriander-seeds',
        name: 'Coriander seeds',
        kind: 'Whole seeds',
        summary: 'Bold coriander seeds in Eagle and Single Parrot grades.',
        origin: 'India',
        specs: [
          { label: 'Grades', value: 'Eagle, Single Parrot and others' },
          { label: 'Purity', value: '99%' },
          { label: 'Moisture', value: '8%' },
        ],
        packing: { sizes: '25 and 50 kg' },
        hs: '0909.21',
        image: 'spice-coriander-seeds',
      },
      {
        slug: 'cumin-seeds',
        name: 'Cumin seeds',
        kind: 'Whole seeds',
        summary: 'Cumin (jeera) seeds, packed in PP bags.',
        origin: 'India',
        specs: [
          { label: 'Moisture', value: '8%' },
          { label: 'Shelf life', value: '12 months' },
        ],
        packing: { sizes: '25 and 50 kg', types: 'PP bags' },
        hs: '0909.31',
        image: 'spice-cumin-seeds',
      },
      {
        slug: 'ajwain',
        name: 'Ajwain (carom seeds)',
        kind: 'Whole seeds',
        summary: 'Ajwain, also known as carom or bishop’s weed seeds.',
        origin: 'India',
        specs: [{ label: 'Shelf life', value: '12 months' }],
        packing: { sizes: '25 and 50 kg', types: 'PP bags' },
        hs: '0910.99',
        image: 'spice-ajwain',
      },
      {
        slug: 'fenugreek-seeds',
        name: 'Fenugreek seeds',
        kind: 'Whole seeds',
        summary: 'Yellow fenugreek (methi) seeds.',
        origin: 'India',
        specs: [
          { label: 'Colour', value: 'Yellow' },
          { label: 'Shelf life', value: '12 months' },
          { label: 'Storage', value: 'Dry place' },
        ],
        packing: { sizes: '25 and 50 kg', types: 'PP bags' },
        hs: '0910.99',
        image: 'spice-fenugreek-seeds',
      },
      {
        slug: 'mustard-seeds',
        name: 'Mustard seeds',
        kind: 'Whole seeds',
        summary: 'Black mustard seeds (rai).',
        origin: 'India',
        specs: [
          { label: 'Colour', value: 'Black' },
          { label: 'Purity', value: '99%' },
          { label: 'Shelf life', value: '12 months' },
        ],
        packing: { sizes: '25 and 50 kg', types: 'PP bags' },
        hs: '1207.50',
        image: 'spice-mustard-seeds',
      },
      {
        slug: 'star-anise',
        name: 'Star anise',
        kind: 'Whole',
        summary: 'Whole star anise, sun-dried to a deep brown.',
        specs: [
          { label: 'Colour', value: 'Brown' },
          { label: 'Purity', value: '99%' },
          { label: 'Shelf life', value: '1–2 years' },
        ],
        packing: { sizes: '5 kg', types: 'PP bags' },
        hs: '0909.61',
        image: 'spice-star-anise',
      },
      {
        slug: 'sesame-seeds-white',
        name: 'Sesame seeds, white',
        kind: 'Whole seeds',
        summary: 'White sesame seeds.',
        origin: 'India',
        specs: [
          { label: 'Purity', value: '99%' },
          { label: 'Shelf life', value: '12 months' },
        ],
        packing: { sizes: '50 kg', types: 'PP bags' },
        hs: '1207.40',
        image: 'spice-sesame-seeds-white',
      },
      {
        slug: 'sesame-seeds-black',
        name: 'Sesame seeds, black',
        kind: 'Whole seeds',
        summary: 'Black sesame seeds.',
        origin: 'India',
        specs: [
          { label: 'Purity', value: '99%' },
          { label: 'Shelf life', value: '12 months' },
        ],
        packing: { sizes: '50 kg', types: 'PP bags' },
        hs: '1207.40',
        image: 'spice-sesame-seeds-black',
      },
    ],
  },
  {
    slug: 'frozen-foods',
    number: '03',
    name: 'Frozen foods (IQF)',
    shortName: 'Frozen foods',
    marker: 'teal',
    lede: 'Individually quick-frozen vegetables and frozen potato products.',
    intro:
      'IQF vegetables and a range of frozen potato products. Frozen potato products are the scope of Geo Excel’s APEDA registration as a merchant exporter.',
    photo: 'fries-macro',
    photoAlt: 'Frozen straight-cut potato fries',
    common: [{ label: 'Storage', value: '−18 °C or below' }],
    products: [
      {
        slug: 'green-peas',
        name: 'Green peas',
        kind: 'IQF · Whole',
        summary: 'Whole IQF green peas (Pisum sativum).',
        specs: [
          { label: 'Botanical name', value: 'Pisum sativum' },
          { label: 'Shape', value: 'Whole' },
          { label: 'Shelf life', value: '2 years' },
        ],
        packing: { sizes: '1 and 30 kg' },
        hs: '0710.21',
        image: 'frozen-green-peas',
      },
      {
        slug: 'sweet-corn',
        name: 'Sweet corn',
        kind: 'IQF · Kernels',
        summary: 'IQF sweet corn kernels (Zea mays).',
        specs: [
          { label: 'Botanical name', value: 'Zea mays L.' },
          { label: 'Shape', value: 'Kernels' },
          { label: 'Shelf life', value: '2 years' },
        ],
        packing: { sizes: '1 and 30 kg' },
        hs: '0710.40',
        image: 'frozen-sweet-corn',
      },
      {
        slug: 'carrot',
        name: 'Carrot',
        kind: 'IQF · Diced, sliced or shredded',
        summary: 'IQF carrot in diced, sliced or shredded cuts.',
        specs: [
          { label: 'Botanical name', value: 'Daucus carota' },
          { label: 'Cuts', value: 'Diced, sliced, shredded' },
          { label: 'Shelf life', value: '2 years' },
        ],
        packing: { sizes: '1 and 30 kg' },
        hs: '0710.80',
        image: 'frozen-carrot',
      },
      {
        slug: 'cauliflower',
        name: 'Cauliflower',
        kind: 'IQF · Florets',
        summary: 'IQF cauliflower florets.',
        specs: [
          { label: 'Botanical name', value: 'Brassica oleracea var. botrytis' },
          { label: 'Cut', value: 'Florets' },
          { label: 'Shelf life', value: '2 years' },
        ],
        packing: { sizes: '1 and 30 kg' },
        hs: '0710.80',
        image: 'frozen-cauliflower',
      },
      {
        slug: 'broccoli',
        name: 'Broccoli',
        kind: 'IQF · Florets',
        summary: 'IQF broccoli florets.',
        specs: [
          { label: 'Botanical name', value: 'Brassica oleracea var. italica' },
          { label: 'Cut', value: 'Florets' },
          { label: 'Shelf life', value: '2 years' },
        ],
        packing: { sizes: '1 and 30 kg' },
        hs: '0710.80',
        image: 'frozen-broccoli',
      },
      {
        slug: 'mixed-vegetables',
        name: 'Mixed vegetables',
        kind: 'IQF · Mix',
        summary: 'Vegetables sorted, washed, peeled, drained and IQF frozen as a mix.',
        specs: [{ label: 'Shelf life', value: '2 years' }],
        packing: { sizes: '1 and 30 kg' },
        hs: '0710.90',
        image: 'frozen-mixed-vegetables',
      },
      {
        slug: 'french-fries',
        name: 'French fries',
        kind: 'Frozen potato · Skin-on cuts',
        summary: 'Frozen French fries made from potatoes and refined palmolein oil.',
        specs: [
          { label: 'Cuts', value: '6, 7, 9 and 11 mm, skin on' },
          { label: 'Ingredients', value: 'Potatoes (95%), refined palmolein oil' },
          { label: 'Allergen information', value: 'Made in a facility that processes wheat and milk' },
          { label: 'Shelf life', value: '18 months' },
        ],
        hs: '2004.10',
        image: 'frozen-french-fries',
      },
      {
        slug: 'hash-browns',
        name: 'Hash browns',
        kind: 'Frozen potato',
        summary: 'Frozen hash browns.',
        specs: [
          {
            label: 'Ingredients',
            value: 'Potatoes (93%), refined palmolein oil, corn flour, potato flakes, salt, dehydrated white onion powder',
          },
          { label: 'Allergen information', value: 'Made in a facility that processes wheat and milk' },
          { label: 'Shelf life', value: '18 months' },
        ],
        hs: '2004.10',
        image: 'frozen-hash-browns',
      },
      {
        slug: 'speciality-potato-products',
        name: 'Speciality potato products',
        kind: 'Frozen potato · Seasoned',
        summary: 'Seasoned frozen potato snacks.',
        specs: [
          {
            label: 'Range',
            value: 'Spicy wedges, potato cheese shots, veggie fingers, chilli garlic bites, herb chilli patty, aloo tikki, lemon and mint wedges',
          },
          { label: 'Allergen information', value: 'Made in a facility that processes wheat and milk' },
          { label: 'Shelf life', value: '18 months' },
        ],
        image: 'frozen-speciality-potato',
      },
    ],
  },
  {
    slug: 'edible-oils-ghee',
    number: '04',
    name: 'Edible oils and ghee',
    shortName: 'Oils and ghee',
    marker: 'red',
    lede: 'Cold-pressed Indian oils, Italian olive oils and ghee.',
    intro:
      'Cold-pressed coconut, groundnut, mustard and sesame oils from India, olive oils of Italian origin, and two types of ghee. Pack sizes run from 500 ml bottles to drums.',
    photo: 'coconut-oil',
    photoAlt: 'A bottle of coconut oil beside split coconuts',
    products: [
      {
        slug: 'coconut-oil',
        name: 'Coconut oil',
        kind: 'Cold pressed',
        summary: 'Cold-pressed coconut oil from Kerala.',
        origin: 'Kerala, India',
        specs: [
          { label: 'Extraction', value: 'Cold pressed' },
          { label: 'Shelf life', value: '12 months' },
        ],
        packing: { sizes: '1, 5, 25 and 50 litres', types: 'PET bottles, cans, drums' },
        hs: '1513',
        image: 'oil-coconut',
      },
      {
        slug: 'extra-virgin-coconut-oil',
        name: 'Extra virgin coconut oil',
        kind: 'Cold pressed · Fresh coconut',
        summary: 'Virgin coconut oil pressed from fresh coconut meat in Kerala.',
        origin: 'Kerala, India',
        specs: [
          { label: 'Extraction', value: 'Cold pressed' },
          { label: 'Shelf life', value: '12 months' },
        ],
        packing: { sizes: '1, 5, 25 and 50 litres', types: 'PET bottles, cans, drums' },
        hs: '1513',
        image: 'oil-extra-virgin-coconut',
      },
      {
        slug: 'groundnut-oil',
        name: 'Groundnut oil',
        kind: 'Cold pressed',
        summary: 'Cold-pressed groundnut (peanut) oil.',
        origin: 'Tamil Nadu and Karnataka, India',
        specs: [
          { label: 'Extraction', value: 'Cold pressed' },
          { label: 'Shelf life', value: '12 months' },
        ],
        packing: { sizes: '1, 5, 25 and 50 litres', types: 'PET bottles, cans, drums' },
        hs: '1508',
        image: 'oil-groundnut',
      },
      {
        slug: 'mustard-oil',
        name: 'Mustard oil',
        kind: 'Cold pressed',
        summary: 'Cold-pressed mustard oil with its characteristic pungency.',
        origin: 'India',
        specs: [
          { label: 'Extraction', value: 'Cold pressed' },
          { label: 'Shelf life', value: '12 months' },
        ],
        packing: { sizes: '1, 5 and 50 litres', types: 'PET bottles, cans, drums' },
        hs: '1514',
        image: 'oil-mustard',
      },
      {
        slug: 'sesame-oil',
        name: 'Sesame oil',
        kind: 'Cold pressed',
        summary: 'Cold-pressed sesame (til) oil.',
        origin: 'Tamil Nadu, India',
        specs: [
          { label: 'Extraction', value: 'Cold pressed' },
          { label: 'Shelf life', value: '12 months' },
        ],
        packing: { sizes: '1, 5 and 50 litres', types: 'PET bottles, cans, drums' },
        hs: '1515.50',
        image: 'oil-sesame',
      },
      {
        slug: 'olive-oil',
        name: 'Olive oil',
        kind: 'Italian origin',
        summary: 'Olive oil of Italian origin.',
        origin: 'Italy',
        specs: [{ label: 'Shelf life', value: '18–24 months' }],
        packing: { sizes: '1, 5 and 50 litres', types: 'PET bottles, glass bottles, drums' },
        hs: '1509',
        image: 'oil-olive',
      },
      {
        slug: 'extra-virgin-olive-oil',
        name: 'Extra virgin olive oil',
        kind: 'Italian origin · Unrefined',
        summary: 'Unrefined extra virgin olive oil of Italian origin.',
        origin: 'Italy',
        specs: [
          { label: 'Extraction', value: 'Cold pressed' },
          { label: 'Shelf life', value: '18–24 months' },
        ],
        packing: { sizes: '1, 5 and 50 litres', types: 'PET bottles, glass bottles, drums' },
        hs: '1509.20',
        image: 'oil-extra-virgin-olive',
      },
      {
        slug: 'pure-ghee',
        name: 'Pure ghee',
        kind: 'Bilona churned',
        summary: 'Ghee made by the bilona churning method.',
        origin: 'Gujarat and Karnataka, India',
        specs: [
          { label: 'Method', value: 'Bilona churning' },
          { label: 'Shelf life', value: '9–12 months' },
        ],
        packing: { sizes: '500 ml, 1 litre and 15 litres', types: 'PET bottles, glass bottles, drums' },
        hs: '0405.90',
        image: 'ghee-pure',
      },
      {
        slug: 'a2-ghee',
        name: 'A2 ghee',
        kind: 'Bilona churned · A2 milk',
        summary: 'Ghee from the milk of cows that naturally produce A2 beta-casein.',
        origin: 'Gujarat and Karnataka, India',
        specs: [
          { label: 'Method', value: 'Bilona churning' },
          { label: 'Shelf life', value: '9–12 months' },
        ],
        packing: { sizes: '500 ml, 1 litre and 15 litres', types: 'PET bottles, glass bottles, drums' },
        hs: '0405.90',
        image: 'ghee-a2',
      },
    ],
  },
];

/**
 * Fashion & Lifestyle appears on the current site as a page of photographs with
 * no product text. The company also published a Council for Leather Exports
 * membership for leather footwear. It is presented as an enquiry-only line.
 */
export const footwear = {
  slug: 'leather-footwear',
  number: '05',
  name: 'Leather footwear',
  marker: 'ink' as const,
  lede: 'Fashion and lifestyle goods, including leather footwear. Range on request.',
};

export const allProducts = categories.flatMap((c) =>
  c.products.map((p) => ({ ...p, category: c })),
);

export const productCount = allProducts.length;

export function findProduct(categorySlug: string, productSlug: string) {
  return allProducts.find((p) => p.category.slug === categorySlug && p.slug === productSlug);
}

export const productId = (categorySlug: string, productSlug: string) => `${categorySlug}/${productSlug}`;
