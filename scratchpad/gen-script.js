const fs = require('fs');
const s = fs.readFileSync('site-builder/build.mjs', 'utf8');
const start = s.indexOf('function pricingPage');
const end = s.indexOf('function contactPage');
if (start === -1 || end === -1) { console.error('not found'); process.exit(1); }
const newFn = `function costPage(t) {
  const body = \`\${header(t, "cost.html", 0)}
  <main id="main">
    \${pageHero(t, {
      title: "A written quote, not a rate card.",
      lede: "We do not publish a single hourly figure, because the honest number depends on the schedule, the level of support, and travel. After a no-cost conversation we send an itemized written quote.",
      crumbs: [{ label: "Home", href: "index.html" }, { label: "Cost & payment" }],
      kicker: "Cost & payment",
    })}
    <section class="section"><div class="container">
      <div class="callout warn"><h3>\${icon("alert", 16)} Demo cost notice</h3><p>Any cost information on this concept site is illustrative and for design and business planning. It is not an offer, a quote, or a guarantee of availability. Final rates must be built from real wage, tax, insurance, supervision, and travel costs.</p></div>
      <div class="grid cols-3 mt-3">
        <div class="card"><h3>What is included</h3><p>Caregiver wages and payroll taxes, supervision, the written care plan, scheduling, background checks, routine family updates, and ordinary supplies used during the visit.</p></div>
        <div class="card"><h3>What costs extra</h3><p>Weekend, overnight, and holiday visits, awake overnight shifts, mileage for transportation, event tickets, and specialized supplies. Every premium is disclosed before the visit is scheduled.</p></div>
        <div class="card"><h3>How to cancel</h3><p>Seven days' written notice to end service. Twenty-four hours' notice to cancel an individual visit without charge, except in an emergency.</p></div>
      </div>
      <h2 class="mt-3">Ways families pay</h2>
      <div class="split mt-2">
        <div>
          <h3>Private pay and long-term care insurance</h3>
          <p>Most non-medical care is paid privately. If a long-term care policy covers home care, we can provide the documentation the insurer requires — care notes, invoices, and a plan of care — but reimbursement is never guaranteed.</p>
          <h3>Veterans' benefits</h3>
          <p>Some wartime veterans and surviving spouses qualify for VA aid and attendance or housebound benefits. Eligibility is determined by the VA, not by us. We can help assemble the service documentation.</p>
          <h3>Medicaid and Medicare</h3>
          <p>Medicare generally covers short-term skilled home health ordered by a physician, not custodial or companion care. Virginia's CCC Plus waiver can cover personal care and respite for eligible adults through enrolled providers. This concept business is not enrolled and makes no coverage claim.</p>
        </div>
        <div class="card">
          <h3>\${icon("receipt", 18)} How we quote</h3>
          <p class="muted">After a no-cost conversation we send an itemized written quote covering hours, premiums, and mileage. The rate you sign is the rate we bill.</p>
          <a class="btn mt-1" href="contact.html">Talk through a realistic budget</a>
        </div>
      </div>
    </div></section>
    \${faqSection(t)}
    \${ctaSection(t)}
  \`;
  return head(t, { title: \`Home Care Cost & Payment in Prince William County | \${B.shortName}\`, description: "How home care is quoted and paid for in Prince William County, VA: written quotes, a four-hour minimum, no long-term contract, and plain-language payment options.", page: "cost.html", schema: [baseSchema(t, "cost.html"), breadcrumbSchema(t, "cost.html", [{ label: "Home", href: "index.html" }, { label: "Cost & payment", href: "cost.html" }])] }) + body + footer(t, 0);
}

`;
const out = s.slice(0, start) + newFn + s.slice(end);
fs.writeFileSync('site-builder/build.mjs', out);
console.log('done');
`;
fs.writeFileSync('scratchpad/replace-pricing.js', newFn.replace(/`/g, '`')); // no-op placeholder
// Instead write the actual node script
const script = `const fs=require('fs');\nconst s=fs.readFileSync('site-builder/build.mjs','utf8');\nconst start=s.indexOf('function pricingPage');\nconst end=s.indexOf('function contactPage');\nif(start===-1||end===-1){console.error('not found');process.exit(1);}\nconst newFn=${JSON.stringify(newFn)};\nconst out=s.slice(0,start)+newFn+s.slice(end);\nfs.writeFileSync('site-builder/build.mjs',out);\nconsole.log('done');\n`;
fs.writeFileSync('scratchpad/replace-pricing.js', script);
console.log('script written');
