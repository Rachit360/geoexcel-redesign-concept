// Details read off the certificate images on geoexcel.group/certificates.
//
// Status is worked out from the expiry date at build time, so an expired
// certificate can't show as current. FSSAI and the leather council ones on
// their site have already expired, so they're hidden until we get new copies.

export type Registration = {
  id: string;
  document: string;
  issuer: string;
  issuerShort: string;
  number: string;
  scope: string;
  issued: string; // ISO date
  validUntil: string | null; // ISO date, or null when the document does not expire
  publish: boolean;
};

export const registrations: Registration[] = [
  {
    id: 'apeda-rcmc',
    document: 'Registration-cum-Membership Certificate (RCMC)',
    issuer: 'Agricultural and Processed Food Products Export Development Authority',
    issuerShort: 'APEDA',
    number: 'RCMC/APEDA/04107/2023-2024',
    scope: 'Merchant exporter — frozen potato products such as French fries, potato wedges, hash browns and burger patties',
    issued: '2023-12-22',
    validUntil: '2028-03-31',
    publish: true,
  },
  {
    id: 'iec',
    document: 'Importer-Exporter Code (IEC)',
    issuer: 'Directorate General of Foreign Trade, Bengaluru',
    issuerShort: 'DGFT',
    number: 'AAKCG8371P',
    scope: 'Import and export of goods',
    issued: '2023-12-19',
    validUntil: null,
    publish: true,
  },
  {
    id: 'udyam',
    document: 'Udyam Registration Certificate',
    issuer: 'Ministry of Micro, Small and Medium Enterprises',
    issuerShort: 'MSME',
    number: 'UDYAM-KR-03-0337742',
    scope: 'Micro enterprise — trading',
    issued: '2023-12-20',
    validUntil: null,
    publish: true,
  },
  {
    id: 'fssai',
    document: 'Central Licence under the FSS Act, 2006',
    issuer: 'Food Safety and Standards Authority of India',
    issuerShort: 'FSSAI',
    number: '11224999000123',
    scope: 'Trader / merchant — exporter',
    issued: '2024-02-21',
    validUntil: '2025-02-20',
    publish: false,
  },
  {
    id: 'cle-rcmc',
    document: 'Registration-cum-Membership Certificate (RCMC)',
    issuer: 'Council for Leather Exports',
    issuerShort: 'CLE',
    number: 'RCMC/CLE/00635/2023-2024',
    scope: 'Merchant exporter — leather footwear',
    issued: '2024-03-02',
    validUntil: '2024-03-31',
    publish: false,
  },
];

export function statusOf(r: Registration, today = new Date()) {
  if (!r.validUntil) return { label: 'Current', current: true } as const;
  return new Date(`${r.validUntil}T23:59:59`) >= today
    ? ({ label: 'Current', current: true } as const)
    : ({ label: 'Expired', current: false } as const);
}

export const publicRegister = registrations.filter((r) => r.publish && statusOf(r).current);

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
