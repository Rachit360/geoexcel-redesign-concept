/**
 * Company facts.
 *
 * Every value here is taken from Geo Excel's own public material:
 *  - the current website (geoexcel.group), and
 *  - the registration certificates published on its /certificates page.
 * Nothing is inferred. Where a fact could not be confirmed it is left out.
 */

export const company = {
  brand: 'Geo Excel',
  groupName: 'GeoExcel Group',
  legalName: 'Geoexcel Production Trades Private Limited',
  nameMeaning: 'Geographic Excellence',
  incorporated: '2023-11-08', // "Date of Birth / Incorporation" on APEDA and CLE RCMCs
  address: {
    lines: ['3C-918, 3rd Floor, 3rd Cross, 1st Block', 'HRBR Layout, Kalyan Nagar'],
    city: 'Bengaluru',
    region: 'Karnataka',
    postcode: '560043',
    country: 'India',
  },
  phone: { display: '+91 80 3511 0602', href: 'tel:+918035110602' },
  email: 'info@geoexcel.group',
  officialSite: 'https://www.geoexcel.group/',
} as const;

export const fullAddress = [
  ...company.address.lines,
  `${company.address.city}, ${company.address.region} ${company.address.postcode}`,
  company.address.country,
];

export const mapsHref =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('HRBR Layout 1st Block, Kalyan Nagar, Bengaluru 560043');

/** Timeline as stated by the company on geoexcel.group/about. */
export const heritage = [
  {
    year: '1980s',
    title: 'Farming',
    text: 'The family began as farmers, growing and harvesting rice, sugarcane and sesame.',
  },
  {
    year: '1990s',
    title: 'Cement and steel',
    text: 'A cement and steel dealership gave the business its footing in trade and, later, in contracting.',
  },
  {
    year: '1993',
    title: 'Civil construction',
    text: 'Turn-key residential construction in Bengaluru. By 2014 the work extended to commercial, industrial and infrastructure projects, with some developments under the name Anuadi Constructions.',
  },
  {
    year: '2019',
    title: 'Sustainability focus',
    text: 'A stated commitment to the United Nations Sustainable Development Goals and to CSR activity.',
  },
  {
    year: '2023',
    title: 'Geo Excel',
    text: 'The name Geo Excel, short for Geographic Excellence, is adopted for the export business. The company was incorporated on 8 November 2023.',
  },
] as const;

/** Verticals named by the company. Only trading is described in detail on its site. */
export const verticals = ['Agriculture', 'Automotive', 'Construction', 'Trading'] as const;

/**
 * Sustainability, as published on geoexcel.group/about-1 and the 2019 entry
 * of the company timeline. Wording is lightly edited for grammar only.
 */
export const sdg = {
  since: '2019',
  statement:
    'Since 2019 the Group has focused on the United Nations’ 17 Sustainable Development Goals, with a passion-driven approach to CSR.',
  approach: [
    'Uplifting livelihoods and ensuring good working conditions',
    'Living wages for all stakeholders',
    'Action on climate change',
    'Building an environmentally sustainable business',
  ],
  principles: [
    'Sustainable agricultural methods for collecting natural raw materials.',
    'Proper harvesting methods — sourced at the right time, for the right price.',
    'Supporting the preservation of endangered plant species, and avoiding their use.',
    'Practising organic farming and avoiding pesticides and chemicals.',
    'Avoiding raw materials that may affect the climate.',
  ],
} as const;
