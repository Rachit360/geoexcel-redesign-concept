// Runs after `astro build`. Fails the build if there's leftover placeholder
// text, a broken internal link, or an expired certificate on the homepage.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const base = (process.env.BASE_PATH || '/').replace(/\/$/, '');

const forbidden = [/\bTBC\b/, /\bTODO\b/i, /lorem ipsum/i, /placeholder text/i, /\[confirm/i];

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const pages = walk(dist).filter((f) => f.endsWith('.html'));
const problems = [];

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const text = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
  for (const re of forbidden) if (re.test(text)) problems.push(`${relative(dist, file)}: contains ${re}`);

  // skip Astro's redirect stubs
  if (/http-equiv="refresh"/.test(html)) continue;

  for (const [, attr] of html.matchAll(/\s(?:href|src|srcset)="([^"]+)"/g)) {
    for (const raw of attr.split(',').map((s) => s.trim().split(/\s+/)[0])) {
      if (!raw || /^(https?:|mailto:|tel:|#|data:)/.test(raw)) continue;
      let path = raw.split('#')[0].split('?')[0];
      if (!path.startsWith('/')) continue;
      if (base && path.startsWith(base)) path = path.slice(base.length) || '/';
      const target = join(dist, decodeURIComponent(path));
      const ok = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
      if (!ok) problems.push(`${relative(dist, file)}: broken link ${raw}`);
    }
  }
}

// no expired certificates on the homepage
const home = readFileSync(join(dist, 'index.html'), 'utf8');
for (const [, until] of home.matchAll(/Valid until<\/dt>\s*<dd[^>]*>(\d{2} \w{3} \d{4})/g)) {
  if (new Date(until) < new Date()) problems.push(`home: a registration valid until ${until} is listed`);
}

if (problems.length) {
  console.error(`\n✗ Build check failed (${problems.length}):\n  ${[...new Set(problems)].join('\n  ')}`);
  process.exit(1);
}
console.log(`✓ Build check passed: ${pages.length} pages, no placeholders, all internal links resolve.`);
