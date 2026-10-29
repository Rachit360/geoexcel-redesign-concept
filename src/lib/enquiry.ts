import { company } from '../data/company';

/**
 * Builds a mailto: link that opens the visitor's email app with a
 * structured enquiry, so Geo Excel receives the details it needs to quote.
 * No server or form backend is involved.
 */
export function enquiryHref(product?: string) {
  const subject = product ? `Enquiry: ${product}` : 'Trade enquiry';
  const body = [
    'Hello Geo Excel,',
    '',
    `I would like a quotation${product ? ` for ${product}` : ''}.`,
    '',
    'Product / grade:',
    'Quantity:',
    'Packing:',
    'Destination port and country:',
    'Company name:',
    '',
    'Thank you,',
  ].join('\n');
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
