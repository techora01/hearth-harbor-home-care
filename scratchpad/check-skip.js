const fs = require('fs');
const h = fs.readFileSync('sites/09-hugobricks/index.html', 'utf8');
console.log('skip-link in file:', h.includes('class="skip-link"'));
console.log('main id:', h.includes('id="main"'));
"