// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH are only needed for GitHub Pages (served from /repo-name/).
const site = process.env.SITE_URL || 'https://geoexcel-redesign.vercel.app';
const base = process.env.BASE_PATH || '/';
const withBase = (path) => `${base.replace(/\/$/, '')}${path}`;

// old Wix URLs -> new pages
const legacy = {
  '/about': '/#about',
  '/about-1': '/#sustainability',
  '/projects': '/products/',
  '/general-9': '/products/?category=rice',
  '/copy-of-rice': '/products/?category=spices',
  '/copy-of-whole-spices': '/products/?category=frozen-foods',
  '/copy-of-whole-spices-1': '/products/?category=edible-oils-ghee',
  '/fashion-lifestyle': '/products/',
  '/certificates': '/#certifications',
};

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  redirects: Object.fromEntries(
    Object.entries(legacy).map(([from, to]) => [from, withBase(to)]),
  ),
  image: {
    responsiveStyles: false,
  },
  devToolbar: { enabled: false },
});
