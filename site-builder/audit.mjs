/**
 * Static QA audit for the nine generated sites.
 * Checks structural SEO/a11y basics and content-safety signals.
 *
 * Usage: node site-builder/audit.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sitesDir = path.join(root, 'sites');

const problems = [];
const counts = { pages: 0, titles: new Set(), h1Total: 0 };

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const sites = fs.readdirSync(sitesDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort();

for (const site of sites) {
  const siteDir = path.join(sitesDir, site);
  const files = walk(siteDir);
  const titles = new Set();

  for (const file of files) {
    counts.pages++;
    const rel = path.relative(root, file);
    const html = fs.readFileSync(file, 'utf8');
    const add = (msg) => problems.push(`${rel}: ${msg}`);

    if (!/<html[^>]*\blang="en"/i.test(html)) add('missing lang="en"');
    if (!/<meta[^>]+name="description"[^>]+content="[^"]+"/i.test(html)) add('missing meta description');

    const title = html.match(/<title>([\s\S]*?)<\/title>/i);
    if (!title || !title[1].trim()) add('missing title');
    else {
      const t = title[1].trim();
      if (titles.has(t)) add(`duplicate title "${t}"`);
      titles.add(t);
    }

    const canon = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i);
    if (!canon) add('missing canonical');
    else if (!/^https:\/\/techora01\.github\.io\/hearth-harbor-home-care\/sites\//.test(canon[1]))
      add(`canonical not on Pages origin: ${canon[1]}`);

    const h1s = html.match(/<h1\b/gi) || [];
    counts.h1Total += h1s.length;
    if (h1s.length !== 1) add(`expected 1 <h1>, found ${h1s.length}`);

    if (!/class="[^"]*skip/i.test(html)) add('missing skip link');

    // Placeholder / concept disclosure should be present in the footer region.
    const tail = html.slice(-8000).toLowerCase();
    if (!tail.includes('placeholder') && !tail.includes('concept'))
      add('footer disclaimer missing');

    if (/\u00E2\u20AC|\u00C2\u00A0|\u00C2\u00B7|\u00C2\u00A9/.test(html)) add('mojibake detected');

    const imgs = html.match(/<img\b[^>]*>/gi) || [];
    for (const img of imgs) {
      if (!/\balt=/.test(img) && !/aria-hidden="true"/.test(img))
        add(`<img> without alt: ${img.slice(0, 60)}`);
    }
  }

  // Homepage must carry structured data.
  const home = fs.readFileSync(path.join(siteDir, 'index.html'), 'utf8');
  if (!home.includes('application/ld+json')) problems.push(`${site}/index.html: no JSON-LD`);
  if (!/HomeHealthCareService|HomeAndConstructionBusiness/.test(home))
    problems.push(`${site}/index.html: no HomeHealthCareService schema`);

  console.log(`${site.padEnd(22)} ${files.length} pages, ${titles.size} unique titles`);
}

console.log(`\nPages audited: ${counts.pages}`);
console.log(`Total <h1> elements: ${counts.h1Total} (expected ${counts.pages})`);

if (problems.length) {
  console.log(`\nIssues (${problems.length}):`);
  for (const p of problems.slice(0, 80)) console.log('  - ' + p);
  if (problems.length > 80) console.log(`  …and ${problems.length - 80} more`);
  process.exit(1);
}
console.log('\nAudit clean: no structural issues found.');
