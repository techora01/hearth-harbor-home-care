/**
 * Zero-dependency static preview servers.
 *
 *   Dashboard ......... http://localhost:8100
 *   Site 01 ScrewFast . http://localhost:8101
 *   ...
 *   Site 09 HugoBricks  http://localhost:8109
 *
 * Usage: node serve.mjs
 * Stop with Ctrl+C.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

const sites = [
  { id: '01-screwfast', name: 'ScrewFast', port: 8101 },
  { id: '02-medic', name: 'Medic', port: 8102 },
  { id: '03-jekyll-serif', name: 'Jekyll Serif', port: 8103 },
  { id: '04-minimal-mistakes', name: 'Minimal Mistakes', port: 8104 },
  { id: '05-agency', name: 'Agency', port: 8105 },
  { id: '06-viva-medical', name: 'Viva Medical', port: 8106 },
  { id: '07-healnet', name: 'HealNet', port: 8107 },
  { id: '08-hugo-serif', name: 'Hugo Serif', port: 8108 },
  { id: '09-hugobricks', name: 'HugoBricks', port: 8109 },
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json; charset=utf-8',
};

function serveFrom(baseDir) {
  return (req, res) => {
    try {
      let urlPath = decodeURIComponent((req.url || '/').split('?')[0].split('#')[0]);
      if (urlPath.endsWith('/')) urlPath += 'index.html';

      // Resolve and confine to baseDir.
      let filePath = path.normalize(path.join(baseDir, urlPath));
      if (!filePath.startsWith(baseDir)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 Forbidden');
      }

      let stat = null;
      try { stat = fs.statSync(filePath); } catch { /* missing */ }

      if (stat && stat.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
        try { stat = fs.statSync(filePath); } catch { stat = null; }
      }

      // Friendly fallback: extensionless path -> .html, or directory index.
      if (!stat && !path.extname(filePath)) {
        const withHtml = filePath + '.html';
        const asIndex = path.join(filePath, 'index.html');
        if (fs.existsSync(withHtml)) { filePath = withHtml; stat = fs.statSync(filePath); }
        else if (fs.existsSync(asIndex)) { filePath = asIndex; stat = fs.statSync(filePath); }
      }

      if (!stat || !stat.isFile()) {
        const notFound = path.join(baseDir, '404.html');
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        if (fs.existsSync(notFound)) return res.end(fs.readFileSync(notFound));
        return res.end('<!doctype html><h1>404 — Not found</h1>');
      }

      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        'Content-Type': MIME[ext] || 'application/octet-stream',
        'Cache-Control': 'no-cache',
      });
      fs.createReadStream(filePath).pipe(res);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error\n' + err.message);
    }
  };
}

function start(port, baseDir, label) {
  const server = http.createServer(serveFrom(baseDir));
  server.listen(port, () => {
    console.log(`  ${String(port).padEnd(5)}  ${label.padEnd(18)} http://localhost:${port}`);
  });
  server.on('error', (err) => {
    console.error(`  ${port}  ${label}: ${err.code === 'EADDRINUSE' ? 'port already in use' : err.message}`);
  });
  return server;
}

console.log('\nHeart & Harbor Health & Medical Support — static preview servers\n');
start(8100, path.join(root, 'dashboard'), 'Dashboard');
for (const s of sites) {
  start(s.port, path.join(root, 'sites', s.id), `${s.id}`);
}
console.log('\nOpen http://localhost:8100 for the dashboard. Press Ctrl+C to stop.\n');
