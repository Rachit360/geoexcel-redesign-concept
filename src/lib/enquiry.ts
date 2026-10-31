import { company } from '../data/company';

// No backend for now - enquiries are sent from the visitor's own email, with
// a short template so Geo Excel gets the details it needs to quote.
export function enquiryMessage(product?: string) {
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
  return { to: company.email, subject, body };
}

// mailto: only works if the visitor has a mail app set up, so the enquiry
// dialog also offers Gmail and Outlook on the web.
export function composeLinks(product?: string) {
  const { to, subject, body } = enquiryMessage(product);
  const q = (params: Record<string, string>) => new URLSearchParams(params).toString().replace(/\+/g, '%20');
  return {
    mailApp: `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    gmail: `https://mail.google.com/mail/?${q({ view: 'cm', fs: '1', to, su: subject, body })}`,
    outlook: `https://outlook.office.com/mail/deeplink/compose?${q({ to, subject, body })}`,
  };
}

// The plain mailto link is the fallback if the page script doesn't load.
export function enquiryHref(product?: string) {
  return composeLinks(product).mailApp;
}
