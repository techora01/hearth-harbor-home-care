import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const sitesDir = path.join(rootDir, 'sites');

if (!fs.existsSync(sitesDir)) {
  console.error('sites/ directory not found. Run build.mjs first.');
  process.exit(1);
}

// Collect all HTML files.
const htmlFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}
walk(sitesDir);

// Resolve a link target to a file on disk.
function resolveLink(fromFile, href) {
  // Strip query/hash.
  let target = href.split('#')[0].split('?')[0];
  if (!target) return null; // pure anchor
  if (/^(https?:|mailto:|tel:|data:|javascript:)/i.test(target)) return null;
  if (target.startsWith('//')) return null;

  if (target.startsWith('/')) {
    // Site-absolute — treat as relative to that site's root.
    const rel = path.relative(sitesDir, fromFile);
    const siteRoot = path.join(sitesDir, rel.split(path.sep)[0]);
    return path.join(siteRoot, target);
  }
  return path.resolve(path.dirname(fromFile), target);
}

const broken = [];
let linkCount = 0;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const relFile = path.relative(rootDir, file);

  // href and src attributes.
  for (const m of html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi)) {
    const href = m[1].trim();
    linkCount++;
    const resolved = resolveLink(file, href);
    if (!resolved) continue;

    let ok = fs.existsSync(resolved);
    // Allow directory index resolution.
    if (!ok && fs.existsSync(resolved) === false) {
      const asIndex = path.join(resolved, 'index.html');
      if (fs.existsSync(asIndex)) ok = true;
    }
    if (!ok && !path.extname(resolved)) {
      if (fs.existsSync(resolved + '.html')) ok = true;
    }
    if (!ok) broken.push({ file: relFile, href });
  }
}

if (broken.length) {
  console.error(`\nBROKEN LINKS (${broken.length}):`);
  for (const b of broken.slice(0, 50)) {
    console.error(`  ${b.file}  ->  ${b.href}`);
  }
  if (broken.length > 50) console.error(`  …and ${broken.length - 50} more`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files, ${linkCount} links. Broken: 0`);
