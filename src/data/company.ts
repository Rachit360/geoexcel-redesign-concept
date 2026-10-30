// Company details, taken from geoexcel.group and the registration certificates
// they publish there.

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

// timeline from their About page
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

export const verticals = ['Agriculture', 'Automotive', 'Construction', 'Trading'] as const;

// Sustainability, from the About and Sustainability pages on geoexcel.group.
export const sdg = {
  since: '2019',
  statement: 'Since 2019 the Group has worked towards the UN’s 17 Sustainable Development Goals.',
  approach: [
    'Good working conditions and livelihoods',
    'Living wages for all stakeholders',
    'Action on climate change',
    'An environmentally sustainable business',
  ],
} as const;
