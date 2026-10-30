import { company } from '../data/company';

// No backend for now - enquiries just open the visitor's mail app with a
// short template, so Geo Excel gets the details it needs to quote.
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
