const fs = require('fs');
const src = fs.readFileSync('site-builder/build.mjs', 'utf8');
const start = src.indexOf('function pricingPage');
const end = src.indexOf('function contactPage');
if (start === -1 || end === -1) { console.error('markers not found'); process.exit(1); }
const newFn = fs.readFileSync('scratchpad/cost-page.txt', 'utf8');
const out = src.slice(0, start) + newFn + src.slice(end);
fs.writeFileSync('site-builder/build.mjs', out);
console.log('replaced pricingPage with costPage');