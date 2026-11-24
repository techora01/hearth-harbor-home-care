const fs = require('fs');
const s = fs.readFileSync('site-builder/themes.mjs', 'utf8');
const m = s.match(/title: "[^"]+"/g) || [];
console.log(m.join('\n'));