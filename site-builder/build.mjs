import fs from "node:fs";
import path from "node:path";
import { themes } from "./themes.mjs";
import {
  business as B,
  county,
  stats,
  differentiators,
  services,
  processSteps,
  commitments,
  locations,
  faqs,
  articles,
  resourceLinks,
  navLinks,
} from "./content.mjs";
import { logoSVG, icon, scene } from "./art.mjs";

const ROOT = process.cwd();
// Canonical origin for SEO tags. Override when deploying somewhere else, e.g.
//   SITE_ORIGIN=https://user.github.io PAGES_BASE=/repo-name node site-builder/build.mjs
const SITE_ORIGIN = process.env.SITE_ORIGIN || "https://heartandharborhomecare.com";
const PAGES_BASE = (process.env.PAGES_BASE || "").replace(/\/$/, "");
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const rel = (p, depth) => (depth ? "../".repeat(depth) + p : p);
const siteUrl = (t) =>
  PAGES_BASE
    ? `${SITE_ORIGIN}${PAGES_BASE}/sites/${t.id}/`
    : (t.id === "01-screwfast" ? SITE_ORIGIN : `${SITE_ORIGIN}/variants/${t.id}/`);
const urlFor = (t, p) => `${siteUrl(t)}${p}`;
const tel = B.phoneHref;
const coreServices = services.filter((s) => s.category === "core");

/* ------------------------------- shell ---------------------------------- */

function head(t, { title, description, page, depth = 0, schema = [] }) {
  const canonical = urlFor(t, page);
  const font = `https://fonts.googleapis.com/css2?family=${t.fonts.google}&display=swap`;
  const vars = `:root{--bg:${t.palette.bg};--bg2:${t.palette.bg2};--surface:${t.palette.surface};--ink:${t.palette.ink};--muted:${t.palette.muted};--primary:${t.palette.primary};--primary-dark:${t.palette.primaryDark};--accent:${t.palette.accent};--accent2:${t.palette.accent2};--line:${t.palette.line};--cream:${t.palette.cream};--font-display:${t.fonts.display};--font-body:${t.fonts.body};--radius:${t.radius};--shadow:0 22px 60px rgba(18,30,45,.12);}`;
  const ld = schema.length
    ? schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n")
    : "";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="theme-color" content="${t.palette.primaryDark}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(B.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${urlFor(t, "assets/img/og.svg")}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<link rel="icon" href="${rel("assets/img/favicon.svg", depth)}" type="image/svg+xml">
<link rel="apple-touch-icon" href="${rel("assets/img/favicon.svg", depth)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${font}">
<link rel="stylesheet" href="${rel("assets/css/base.css", depth)}">
<link rel="stylesheet" href="${rel("assets/css/theme.css", depth)}">
<style>${vars}</style>
${ld}
</head><body class="theme-${t.id} layout-${t.hero}" data-theme="${t.id}">
<a class="skip-link" href="#main">Skip to main content</a>`;
}

function brand(t, depth = 0, opts = {}) {
  return `<a class="brand" href="${rel("index.html", depth)}" aria-label="${esc(B.fullName)} home">
    ${logoSVG(t, { mark: t.logoMark, size: opts.size || 30 })}
    <span class="brand-text"><span class="brand-name">${esc(B.name)}</span><span class="brand-county">${esc(B.countyLabel)}</span></span>
  </a>`;
}

function header(t, active = "", depth = 0) {
  const links = navLinks
    .map(
      (l) =>
        `<li><a href="${rel(l.href, depth)}"${active === l.href ? ' aria-current="page"' : ""}>${esc(l.label)}</a></li>`
    )
    .join("");
  const topbar =
    t.nav === "topbar"
      ? `<div class="topbar"><div class="container topbar-inner">
          <div class="topbar-list">
            <span>${icon("phone", 14)} <a href="${tel}">${esc(B.phone)}</a></span>
            <span>${icon("mail", 14)} <a href="${B.emailHref}">${esc(B.email)}</a></span>
            <span>${icon("clock", 14)} Mon–Fri, 8 a.m.–6 p.m.</span>
          </div>
          <div class="topbar-list"><span>${icon("pin", 14)} Serving Prince William County</span></div>
        </div></div>`
      : "";
  return `${topbar}<header class="site-header"><div class="container header-inner">
    ${brand(t, depth)}
    <nav class="nav" id="primary-nav" aria-label="Primary">
      <ul class="nav-links">${links}</ul>
      <div class="nav-cta">
        <a class="nav-phone" href="${tel}">${esc(B.phone)}</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">${icon("menu", 22)}</button>
      </div>
    </nav>
  </div></header>`;
}

function footer(t, depth = 0) {
  const sLinks = coreServices
    .slice(0, 5)
    .map((s) => `<li><a href="${rel(`services/${s.slug}.html`, depth)}">${esc(s.name)}</a></li>`)
    .join("");
  const lLinks = locations
    .slice(0, 5)
    .map((l) => `<li><a href="${rel(`locations/${l.slug}.html`, depth)}">${esc(l.name)}</a></li>`)
    .join("");
  return `</main>
<footer class="site-footer"><div class="container">
  <div class="footer-grid">
    <div class="footer-brand">
      ${brand(t, depth)}
      <p>${esc(B.tagline)} Professional home care for families across Prince William County.</p>
      <p class="footer-contact"><a href="${tel}">${esc(B.phone)}</a><br><a href="${B.emailHref}">${esc(B.email)}</a></p>
    </div>
    <div><h4>Services</h4><ul>${sLinks}<li><a href="${rel("services.html", depth)}">All services</a></li></ul></div>
    <div><h4>Service area</h4><ul>${lLinks}<li><a href="${rel("locations.html", depth)}">All communities</a></li></ul></div>
    <div><h4>Company</h4><ul>
      <li><a href="${rel("about.html", depth)}">Why Heart &amp; Harbor Medical Support</a></li>
      <li><a href="${rel("cost.html", depth)}">Cost &amp; payment</a></li>
      <li><a href="${rel("resources.html", depth)}">Family resources</a></li>
      <li><a href="${rel("contact.html", depth)}">Contact &amp; consultation</a></li>
      <li><a href="${rel("privacy.html", depth)}">Privacy</a></li>
      <li><a href="${rel("accessibility.html", depth)}">Accessibility</a></li>
      <li><a href="${rel("sitemap.html", depth)}">Sitemap</a></li>
    </ul></div>
  </div>
  <p class="footer-disclosure">${esc(B.disclaimer)} ${esc(B.licenseNote)}</p>
  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} ${esc(B.legalName)}. All rights reserved.</span>
    <span>${esc(B.addressLine)} · ${esc(B.city)}, ${B.state} ${B.zip}</span>
  </div>
</div></footer>
<script src="${rel("assets/js/site.js", depth)}" defer></script>
</body></html>`;
}

function breadcrumbs(t, items, depth = 0) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">${items
    .map((i, idx) =>
      i.href
        ? `<a href="${rel(i.href, depth)}">${esc(i.label)}</a>${idx < items.length - 1 ? "<span>/</span>" : ""}`
        : `<span>${esc(i.label)}</span>`
    )
    .join("")}</nav>`;
}

function pageHero(t, { title, lede, crumbs = [], depth = 0, kicker = "" }) {
  return `<section class="page-hero"><div class="container">
    ${crumbs.length ? breadcrumbs(t, crumbs, depth) : ""}
    ${kicker ? `<p class="eyebrow">${esc(kicker)}</p>` : ""}
    <h1>${title}</h1>
    ${lede ? `<p class="lede">${esc(lede)}</p>` : ""}
  </div></section>`;
}

/* ------------------------------- schema --------------------------------- */

function baseSchema(t, page) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeHealthCareService",
    "@id": `${siteUrl(t)}#organization`,
    name: B.fullName,
    url: urlFor(t, page),
    telephone: B.phone,
    email: B.email,
    description:
      "Professional home care in Prince William County, Virginia: companion care, personal care assistance, respite, homemaker services, transportation, medication reminders, and wellness check-ins.",
    priceRange: B.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: "12345 Placeholder Plaza, Suite 200",
      addressLocality: "Woodbridge",
      addressRegion: "VA",
      postalCode: "22192",
      addressCountry: "US",
    },
    areaServed: locations.map((l) => ({ "@type": "City", name: l.name })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    knowsAbout: services.map((s) => s.name),
    disclaimer: B.disclaimer,
  };
}
function breadcrumbSchema(t, page, items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: i.label,
      item: i.href ? urlFor(t, i.href) : urlFor(t, page),
    })),
  };
}

/* ----------------------------- home pieces ------------------------------ */

function hero(t) {
  const variant = t.hero;
  const badge = `<div class="hero-badge">${icon("shield", 22)}<div><strong>Professional medical care support</strong><span>Prince William County</span></div></div>`;
  const copy = `
    <div class="hero-copy reveal">
      <p class="eyebrow">Prince William County home care</p>
      <h1>${variant === "statement" ? "Care that<br><em>moves with you.</em>" : "Care that moves<br><em>with you.</em>"}</h1>
      <p class="lede">${esc(B.promise)} One coordinator. One caregiver team. Prince William County and beyond.</p>
      <div class="btn-row hero-actions">
        <a class="btn" href="contact.html">Book a 15-minute call ${icon("arrow", 18)}</a>
        <a class="btn ghost" href="cost.html">How we quote care</a>
      </div>
      <div class="hero-proof">
        <div><strong>4-hour</strong>minimum visit</div>
        <div><strong>1 hour</strong>inquiry response target</div>
        <div><strong>Weekly</strong>written family brief</div>
      </div>
    </div>`;
  const art = `<div class="hero-art reveal">${scene(t.scene)}${badge}</div>`;
  return `<section class="hero hero-${variant}">
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="container hero-inner">${copy}${art}</div>
  </section>`;
}

function statsBand(t) {
  return `<section class="section tight"><div class="container">
    <div class="stats">${stats
      .map(
        (s) =>
          `<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span><small>Source: ${esc(s.source)}</small></div>`
      )
      .join("")}</div>
  </div></section>`;
}

function introSection(t) {
  return `<section class="section"><div class="container split">
    <div class="reveal">
      <p class="eyebrow">Why we exist</p>
      <h2>Most families do not need more options. They need one reliable answer.</h2>
      <p>Home care in Northern Virginia is crowded, and much of it sounds identical. The difference shows up after the contract: whether the same caregiver arrives, whether the coordinator answers, and whether anyone tells you the truth when a plan stops working.</p>
      <p>Heart &amp; Harbor Medical Support is built around a narrower promise: a named coordinator, a trained backup, a written quote before care begins, and a written update every week. No clinical overreach. No long-term contract. No surprises on the invoice.</p>
      <div class="btn-row mt-2"><a class="btn secondary" href="about.html">How we operate ${icon("arrow", 16)}</a><a class="text-link" href="resources.html">Read the family guides</a></div>
    </div>
    <div class="reveal">${scene(t.sceneAlt, "art art-panel")}</div>
  </div></section>`;
}

function servicesSection(t) {
  return `<section class="section alt" id="services"><div class="container">
    <div class="section-head center reveal">
      <p class="eyebrow">Services</p>
      <h2>Help with the parts of the day that have become hard.</h2>
      <p>Start with four hours a week or build a full daily routine. Every service is professional and documented in a written care plan.</p>
    </div>
    <div class="grid cols-3">
      ${coreServices
        .slice(0, 6)
        .map(
          (s) => `<article class="card service-card reveal">
            <div class="card-icon">${icon(s.icon, 24)}</div>
            <h3><a href="services/${s.slug}.html">${esc(s.name)}</a></h3>
            <p>${esc(s.short)}</p>
            <a class="card-link" href="services/${s.slug}.html">Explore ${esc(s.name.toLowerCase())} ${icon("arrow", 15)}</a>
          </article>`
        )
        .join("")}
    </div>
    <div class="center mt-3"><a class="btn secondary" href="services.html">All services &amp; phased additions ${icon("arrow", 16)}</a></div>
  </div></section>`;
}

function diffSection(t) {
  return `<section class="section"><div class="container">
    <div class="section-head reveal"><p class="eyebrow">The difference</p><h2>Six commitments we can actually measure.</h2><p>Positioning is easy. These are the operating choices behind it — each one has a cost, an owner, and a way to audit it.</p></div>
    <div class="grid cols-3">
      ${differentiators
        .slice(0, 6)
        .map(
          (d) => `<div class="card diff-card reveal"><div class="card-icon">${icon(d.icon, 22)}</div><h3>${esc(d.title)}</h3><p>${esc(d.short)}</p><p class="diff-proof">${esc(d.proof)}</p></div>`
        )
        .join("")}
    </div>
  </div></section>`;
}

function processSection(t) {
  return `<section class="section alt"><div class="container">
    <div class="section-head reveal"><p class="eyebrow">Getting started</p><h2>From first call to first visit, without the pressure.</h2></div>
    <div class="steps">
      ${processSteps
        .slice(0, 3)
        .map((p) => `<div class="step reveal"><span class="step-num">${p.n}</span><h3>${esc(p.title)}</h3><p>${esc(p.body)}</p></div>`)
        .join("")}
    </div>
    <p class="mt-3"><a class="text-link" href="about.html#process">See the full six-step process ${icon("arrow", 15)}</a></p>
  </div></section>`;
}

function quoteSection(t) {
  return `<section class="section tight"><div class="container narrow center">
    <p class="pullquote">“You will always know who is coming, what they will do, and how your family is doing.”</p>
    <p class="muted">Our operating promise — not a testimonial. This concept site does not publish invented client reviews.</p>
  </div></section>`;
}

function locationsSection(t) {
  return `<section class="section"><div class="container split reverse">
    <div class="reveal">${scene("map", "art art-panel")}</div>
    <div class="reveal">
      <p class="eyebrow">Local, on purpose</p>
      <h2>One county. Ten communities. No endless service map.</h2>
      <p>We are built for Prince William County, Manassas, Manassas Park, and the towns around them. A tight radius means shorter travel between clients, more reliable start times, and caregivers who know the roads, the hospitals, and the senior centers.</p>
      <ul class="dotlist">
        ${locations.slice(0, 6).map((l) => `<li><a href="locations/${l.slug}.html">${esc(l.name)}</a> <span class="muted">${esc(l.zips)}</span></li>`).join("")}
      </ul>
      <a class="text-link mt-1" href="locations.html">See every community ${icon("arrow", 15)}</a>
    </div>
  </div></section>`;
}

function costSection(t) {
  return `<section class="section alt"><div class="container">
    <div class="split">
      <div class="reveal">
        <p class="eyebrow">Cost &amp; payment</p>
        <h2>A clear, written quote — before the first visit.</h2>
        <p>We do not publish a single hourly figure, because the honest number depends on the schedule, the level of support, and travel. After a no-cost conversation we send an itemized written quote. The rate you sign is the rate we bill.</p>
        <div class="callout"><h3>${icon("receipt", 16)} What is always included</h3><p>${esc(B.minimum)}. Weekend, overnight, and mileage terms are disclosed in writing before the first visit. Seven days' written notice to pause or end care.</p></div>
        <div class="btn-row mt-2"><a class="btn" href="cost.html">How we quote care ${icon("arrow", 16)}</a><a class="btn ghost" href="contact.html">Ask for a quote</a></div>
      </div>
      <div class="reveal">
        <div class="card">
          <h3>What shapes your quote</h3>
          <ul class="dotlist">
            <li>The number of hours and the weekly schedule</li>
            <li>Companion versus hands-on personal care</li>
            <li>Weekend, overnight, or holiday coverage</li>
            <li>Travel time for transportation and errands</li>
          </ul>
          <p class="muted small mt-2">No assessment fee. No long-term contract. No surprise line items.</p>
        </div>
      </div>
    </div>
  </div></section>`;
}

function resourcesSection(t) {
  return `<section class="section"><div class="container">
    <div class="section-head reveal"><p class="eyebrow">Family resources</p><h2>Plain answers, written for the person doing the worrying.</h2></div>
    <div class="grid cols-4">
      ${articles
        .map(
          (a) => `<article class="card article-card reveal">
            <span class="pill neutral">${esc(a.category)}</span>
            <h3><a href="resources/${a.slug}.html">${esc(a.title)}</a></h3>
            <p>${esc(a.description)}</p>
            <span class="muted small">${esc(a.read)}</span>
          </article>`
        )
        .join("")}
    </div>
  </div></section>`;
}

function faqSection(t) {
  return `<section class="section alt"><div class="container narrow">
    <div class="section-head center reveal"><p class="eyebrow">Questions</p><h2>What families ask first.</h2></div>
    <div class="faq">
      ${faqs
        .slice(0, 6)
        .map((f) => `<details class="faq-item"><summary>${esc(f.q)}</summary><div class="faq-body"><p>${esc(f.a)}</p></div></details>`)
        .join("")}
    </div>
    <p class="center mt-2"><a class="text-link" href="contact.html">Ask a question directly ${icon("arrow", 15)}</a></p>
  </div></section>`;
}

function ctaSection(t, depth = 0) {
  return `<section class="cta-band"><div class="container cta-inner">
    <div><p class="eyebrow" style="color:rgba(255,255,255,.7)">Start here</p><h2>Tell us what is happening. We will tell you what we can — and cannot — do.</h2><p>A 15-minute call, no assessment fee, no obligation. If home care is not the right answer yet, we will say so and point you toward the right local resource.</p></div>
    <div class="btn-row"><a class="btn" href="${rel("contact.html", depth)}">Book a call ${icon("arrow", 18)}</a><a class="btn ghost" href="${tel}">${esc(B.phone)}</a></div>
  </div></section>`;
}

function commitmentsSection(t) {
  return `<section class="section"><div class="container">
    <div class="section-head reveal"><p class="eyebrow">In writing</p><h2>What we put in the service agreement.</h2></div>
    <div class="grid cols-3">
      ${commitments.map((c) => `<div class="card reveal"><h3>${esc(c.title)}</h3><p>${esc(c.body)}</p></div>`).join("")}
    </div>
  </div></section>`;
}

/* ------------------------------- pages ---------------------------------- */

function homePage(t) {
  const title = t.title;
  const description =
    "Professional home care in Prince William County, Virginia. Companion care, personal care assistance, respite, transportation, and weekly family updates. A written quote before care begins, 4-hour minimum, no long-term contract.";
  const body = `${header(t, "", 0)}
  <main id="main">
    ${hero(t)}
    <div class="trust-strip"><div class="container trust-inner">
      <div>${icon("shield", 16)} Clear scope — we say what we can and cannot do</div>
      <div>${icon("clock", 16)} Inquiry response within 1 business hour</div>
      <div>${icon("users", 16)} Named coordinator + trained backup</div>
      <div>${icon("pin", 16)} Prince William County only</div>
    </div></div>
    ${statsBand(t)}
    ${introSection(t)}
    ${servicesSection(t)}
    ${diffSection(t)}
    ${processSection(t)}
    ${quoteSection(t)}
    ${locationsSection(t)}
    ${costSection(t)}
    ${resourcesSection(t)}
    ${faqSection(t)}
    ${ctaSection(t)}
  `;
  return (
    head(t, {
      title,
      description,
      page: "index.html",
      schema: [
        baseSchema(t, "index.html"),
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    }) +
    body +
    footer(t, 0)
  );
}

function servicesPage(t) {
  const body = `${header(t, "services.html", 0)}
  <main id="main">
    ${pageHero(t, {
      title: "Services built around a real week at home.",
      lede: "Professional care, delivered by trained caregivers under a written plan. Launch services first; specialized support added only when the training and supervision exist.",
      crumbs: [{ label: "Home", href: "index.html" }, { label: "Services" }],
      kicker: "Service catalog",
    })}
    <section class="section"><div class="container">
      <div class="callout warn"><h3>${icon("alert", 16)} Scope matters</h3><p>Heart &amp; Harbor Medical Support provides professional home care. We do not provide skilled nursing, physical therapy, occupational therapy, wound care, or medication administration. Personal care requires a Virginia home care organization license; this concept site does not claim an active license.</p></div>
      <h2 class="mt-3">Core services</h2>
      <div class="grid cols-3 mt-2">
        ${coreServices
          .map(
            (s) => `<article class="card service-card reveal"><div class="card-icon">${icon(s.icon, 24)}</div><h3><a href="services/${s.slug}.html">${esc(s.name)}</a></h3><p>${esc(s.short)}</p><a class="card-link" href="services/${s.slug}.html">Details ${icon("arrow", 14)}</a></article>`
          )
          .join("")}
      </div>
      <h2 class="mt-3">Specialized support</h2>
      <p class="lede">Introduced only after the core operation is stable, staffed, and insured.</p>
      <div class="grid cols-3 mt-2">
        ${services
          .filter((s) => s.category === "growth")
          .map(
            (s) => `<article class="card service-card reveal"><div class="card-icon">${icon(s.icon, 24)}</div><h3><a href="services/${s.slug}.html">${esc(s.name)}</a></h3><p>${esc(s.short)}</p><a class="card-link" href="services/${s.slug}.html">Details ${icon("arrow", 14)}</a></article>`
          )
          .join("")}
      </div>
      <div class="callout mt-3"><h3>Not sure what you need?</h3><p>Start with a 15-minute call. We will tell you whether companion care, personal care, or a clinical referral is the right next step — even if that means we are not the answer.</p><a class="btn mt-2" href="contact.html">Book a call ${icon("arrow", 16)}</a></div>
    </div></section>
    ${ctaSection(t)}
  `;
  return head(t, { title: `Home Care Services in Prince William County | ${B.shortName}`, description: "Companion care, personal care assistance, respite, homemaker services, transportation, medication reminders, wellness checks, dementia support, and post-discharge help in Prince William County, VA.", page: "services.html", schema: [baseSchema(t, "services.html"), breadcrumbSchema(t, "services.html", [{ label: "Home", href: "index.html" }, { label: "Services", href: "services.html" }])] }) + body + footer(t, 0);
}

function servicePage(t, s) {
  const page = `services/${s.slug}.html`;
  const others = coreServices.filter((x) => x.slug !== s.slug).slice(0, 3);
  const body = `${header(t, "services.html", 1)}
  <main id="main">
    ${pageHero(t, {
      title: s.name,
      lede: s.short,
      crumbs: [{ label: "Home", href: "index.html" }, { label: "Services", href: "services.html" }, { label: s.name }],
      kicker: s.category === "core" ? "Core service" : "Specialized support",
      depth: 1,
    })}
    <section class="section"><div class="container split">
      <div class="article-body">
        <p class="lede">${esc(s.intro)}</p>
        <h2>Who it is for</h2><p>${esc(s.who)}</p>
        <h2>The problem it solves</h2><p>${esc(s.problem)}</p>
        <h2>What a visit includes</h2>
        <ul class="checklist">${s.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        <h2>How we quote this service</h2><p>Every service is quoted in writing after a no-cost conversation. The quote itemizes hours, any weekend, overnight, or holiday premium, and travel, and it does not change without your written agreement. There is no assessment fee and no long-term contract.</p>
        <h2>Scope and supervision</h2>
        <div class="callout warn"><h3>${icon("shield", 16)} Professional care only</h3><p>Heart &amp; Harbor Medical Support provides professional home care. We do not provide skilled nursing, physical therapy, occupational therapy, wound care, or medication administration. Personal care requires a Virginia home care organization license; this concept site does not claim an active license.</p></div>
        <div class="btn-row mt-3"><a class="btn" href="../contact.html">Ask about ${esc(s.name.toLowerCase())} ${icon("arrow", 16)}</a><a class="btn ghost" href="../services.html">All services</a></div>
      </div>
      <aside class="toc">
        <h4>On this page</h4>
        <ul><li><a href="#top">Overview</a></li><li><a href="../cost.html">Cost &amp; payment</a></li><li><a href="../locations.html">Service area</a></li><li><a href="../resources.html">Family guides</a></li></ul>
        <hr>
        <h4>Related services</h4>
        <ul>${others.map((o) => `<li><a href="${o.slug}.html">${esc(o.name)}</a></li>`).join("")}</ul>
        <hr>
        <div class="toc-contact"><strong>Talk to a coordinator</strong><p class="small muted">No assessment fee. No obligation.</p><a class="btn small" href="${tel}">${esc(B.phone)}</a></div>
      </aside>
    </div></section>
    ${ctaSection(t, 1)}
  `;
  return head(t, {
    title: `${s.name} in Prince William County, VA | ${B.shortName}`,
    description: `${s.short} Professional ${s.name.toLowerCase()} for families in Prince William County, Virginia.`,
    page,
    depth: 1,
    schema: [
      baseSchema(t, page),
      breadcrumbSchema(t, page, [{ label: "Home", href: "index.html" }, { label: "Services", href: "services.html" }, { label: s.name, href: page }]),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: s.name,
        serviceType: s.name,
        description: s.short,
        provider: { "@type": "HomeHealthCareService", name: B.name },
        areaServed: { "@type": "AdministrativeArea", name: "Prince William County, Virginia" },
        offers: { "@type": "Offer", priceCurrency: "USD", description: "Quoted in writing after a no-cost consultation." },
      },
    ],
  }) + body + footer(t, 1);
}

function locationsPage(t) {
  const body = `${header(t, "locations.html", 0)}
  <main id="main">
    ${pageHero(t, {
      title: "Home care across Prince William County.",
      lede: "A deliberately local service area: ten communities, one county, and a travel model that protects start times.",
      crumbs: [{ label: "Home", href: "index.html" }, { label: "Service area" }],
      kicker: "Where we work",
    })}
    <section class="section"><div class="container">
      <div class="split">
        <div>${scene("map", "art art-panel")}</div>
        <div><h2>Tight geography is an operational choice.</h2><p>Long drive times are the quiet cause of late visits and burned-out caregivers. We concentrate on communities within a practical radius of Woodbridge and Manassas, and we quote travel honestly when a home is farther out.</p><p>Every location page includes local context, ZIP codes, and the services most often requested there.</p></div>
      </div>
      <div class="grid cols-3 mt-3">
        ${locations
          .map(
            (l) => `<article class="card location-card reveal"><span class="pill neutral">${esc(l.zips)}</span><h3><a href="locations/${l.slug}.html">${esc(l.name)}</a></h3><p>${esc(l.blurb)}</p><a class="card-link" href="locations/${l.slug}.html">Local care details ${icon("arrow", 14)}</a></article>`
          )
          .join("")}
      </div>
    </div></section>
    ${ctaSection(t)}
  `;
  return head(t, { title: `Home Care Service Area | Prince William County, VA | ${B.shortName}`, description: "Home care in Woodbridge, Manassas, Manassas Park, Gainesville, Haymarket, Dumfries, Occoquan, Lake Ridge, Dale City, and Bristow, Virginia.", page: "locations.html", schema: [baseSchema(t, "locations.html"), breadcrumbSchema(t, "locations.html", [{ label: "Home", href: "index.html" }, { label: "Service area", href: "locations.html" }])] }) + body + footer(t, 0);
}

function locationPage(t, l) {
  const page = `locations/${l.slug}.html`;
  const nearby = locations.filter((x) => x.slug !== l.slug).slice(0, 4);
  const body = `${header(t, "locations.html", 1)}
  <main id="main">
    ${pageHero(t, {
      title: `Home care in ${l.name}, Virginia`,
      lede: l.blurb,
      crumbs: [{ label: "Home", href: "index.html" }, { label: "Service area", href: "locations.html" }, { label: l.name }],
      kicker: `Serving ${l.zips}`,
      depth: 1,
    })}
    <section class="section"><div class="container split">
      <div class="article-body">
        <p class="lede">${esc(l.blurb)}</p>
        <h2>What families here usually ask for</h2>
        <p>${esc(l.note)} The most common starting points are companion care, transportation, and a home safety walkthrough. Personal care is added when bathing, dressing, or transfers become unsafe to handle alone.</p>
        <h2>Local context</h2>
        <ul class="dotlist">${l.landmarks.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        <h2>Services available in ${esc(l.name)}</h2>
        <div class="grid cols-2 mt-1">
          ${coreServices.slice(0, 4).map((s) => `<a class="mini-link" href="../services/${s.slug}.html">${icon(s.icon, 18)} ${esc(s.name)} ${icon("arrow", 14)}</a>`).join("")}
        </div>
        <h2>How coverage works</h2>
        <p>We schedule within the community and neighboring ZIP codes to reduce windshield time. Visits start at four hours. If a home is outside our practical radius, we will say so on the first call rather than promise coverage we cannot staff.</p>
        <div class="callout"><h3>${icon("pin", 16)} ZIP codes served</h3><p>${esc(l.zips)} · Prince William County, Virginia</p></div>
        <div class="btn-row mt-3"><a class="btn" href="../contact.html">Check availability in ${esc(l.name)} ${icon("arrow", 16)}</a><a class="btn ghost" href="../cost.html">How we quote care</a></div>
      </div>
      <aside class="toc">
        <h4>Nearby communities</h4>
        <ul>${nearby.map((n) => `<li><a href="${n.slug}.html">Home care in ${esc(n.name)}</a></li>`).join("")}</ul>
        <hr><h4>Local resources</h4>
        <ul><li><a href="https://www.pwcva.gov/department/area-agency-aging" rel="noopener">Prince William Area Agency on Aging</a></li><li><a href="https://eldercare.acl.gov/" rel="noopener">Eldercare Locator</a></li><li><a href="../resources.html">All family guides</a></li></ul>
        <hr><div class="toc-contact"><strong>Local question?</strong><p class="small muted">Ask about schedules and coverage.</p><a class="btn small" href="${tel}">${esc(B.phone)}</a></div>
      </aside>
    </div></section>
    ${ctaSection(t, 1)}
  `;
  return head(t, {
    title: `Home Care in ${l.name}, VA | ${B.shortName}`,
    description: `Professional home care in ${l.name}, Virginia (${l.zips}). Companion care, personal care, respite, transportation, and wellness check-ins from a Prince William County agency.`,
    page,
    depth: 1,
    schema: [baseSchema(t, page), breadcrumbSchema(t, page, [{ label: "Home", href: "index.html" }, { label: "Service area", href: "locations.html" }, { label: l.name, href: page }])],
  }) + body + footer(t, 1);
}

function aboutPage(t) {
  const body = `${header(t, "about.html", 0)}
  <main id="main">
    ${pageHero(t, {
      title: "A smaller agency, built for the parts of care that get skipped.",
      lede: "Heart & Harbor Medical Support is a concept for a licensed, locally owned home care organization in Prince William County. The operating model is deliberately narrow: fewer clients, named coordinators, and written communication.",
      crumbs: [{ label: "Home", href: "index.html" }, { label: "Why us" }],
      kicker: "Our approach",
    })}
    <section class="section"><div class="container split">
      <div class="article-body">
        <h2>The problem with “care” as a category</h2>
        <p>Home care is sold with the same vocabulary everywhere: compassionate, trusted, family-first. Those words are not wrong. They are just not operational. A family cannot tell from a brochure whether the caregiver will arrive at 8:05 or 8:40, whether the coordinator knows the medication list, or whether anyone will call when something changes.</p>
        <p>We are designing around the operational questions instead.</p>
        <h2 id="process">The six-step process</h2>
        <div class="stack mt-2">
          ${processSteps.map((p) => `<div class="process-row"><span class="step-num">${p.n}</span><div><h3>${esc(p.title)}</h3><p>${esc(p.body)}</p></div></div>`).join("")}
        </div>
        <h2>What we will not do</h2>
        <ul class="dotlist">
          <li>We will not provide skilled nursing, physical therapy, occupational therapy, wound care, or medication administration.</li>
          <li>We will not advertise a license, insurance panel, or credential we do not hold.</li>
          <li>We will not use invented testimonials or stock “caregiver of the month” stories.</li>
          <li>We will not require a long-term contract to start care.</li>
          <li>We will not promise 24-hour coverage before the staffing model can support it.</li>
        </ul>
        <h2>Who is behind it</h2>
        <p>This is a launch concept, not an operating agency. The site intentionally avoids naming staff, credentials, or clinical leadership until those people are hired and verified. A real launch requires a qualified administrator, a supervising nurse for personal care, documented training, background checks, insurance, and a VDH license.</p>
        <div class="callout warn"><h3>${icon("alert", 16)} Placeholder disclosure</h3><p>${esc(B.license)} ${esc(B.disclaimer)}</p></div>
      </div>
      <aside class="toc">
        <h4>At a glance</h4>
        <ul><li><strong>Focus:</strong> professional home care</li><li><strong>Area:</strong> Prince William County, VA</li><li><strong>Minimum:</strong> 4-hour visit</li><li><strong>Contract:</strong> none; 7-day notice</li><li><strong>Model:</strong> licensed HCO in progress</li></ul>
        <hr><h4>Read next</h4><ul><li><a href="cost.html">Cost &amp; payment</a></li><li><a href="resources/questions-before-hiring-agency.html">12 questions to ask</a></li><li><a href="privacy.html">Privacy practices</a></li></ul>
      </aside>
    </div></section>
    ${commitmentsSection(t)}
    ${ctaSection(t)}
  `;
  return head(t, { title: `Why ${B.shortName} | Locally Focused Home Care`, description: "A transparent, locally focused home care model for Prince William County: named coordinators, trained backups, a written quote before care begins, and no clinical overreach.", page: "about.html", schema: [baseSchema(t, "about.html"), breadcrumbSchema(t, "about.html", [{ label: "Home", href: "index.html" }, { label: "Why us", href: "about.html" }])] }) + body + footer(t, 0);
}

function costPage(t) {
  const body = `${header(t, "cost.html", 0)}
  <main id="main">
    ${pageHero(t, {
      title: "A written quote, not a rate card.",
      lede: "We do not publish a single hourly figure, because the honest number depends on the schedule, the level of support, and travel. After a no-cost conversation we send an itemized written quote.",
      crumbs: [{ label: "Home", href: "index.html" }, { label: "Cost & payment" }],
      kicker: "Cost & payment",
    })}
    <section class="section"><div class="container">
      <div class="callout warn"><h3>${icon("alert", 16)} Demo cost notice</h3><p>Any cost information on this concept site is illustrative and for design and business planning. It is not an offer, a quote, or a guarantee of availability. Final rates must be built from real wage, tax, insurance, supervision, and travel costs.</p></div>
      <div class="grid cols-3 mt-3">
        <div class="card"><h3>What is included</h3><p>Caregiver wages and payroll taxes, supervision, the written care plan, scheduling, background checks, routine family updates, and ordinary supplies used during the visit.</p></div>
        <div class="card"><h3>What costs extra</h3><p>Weekend, overnight, and holiday visits, awake overnight shifts, mileage for transportation, event tickets, and specialized supplies. Every premium is disclosed before the visit is scheduled.</p></div>
        <div class="card"><h3>How to cancel</h3><p>Seven days' written notice to end service. Twenty-four hours' notice to cancel an individual visit without charge, except in an emergency.</p></div>
      </div>
      <h2 class="mt-3">Ways families pay</h2>
      <div class="split mt-2">
        <div>
          <h3>Private pay and long-term care insurance</h3>
          <p>Most professional care is paid privately. If a long-term care policy covers home care, we can provide the documentation the insurer requires — care notes, invoices, and a plan of care — but reimbursement is never guaranteed.</p>
          <h3>Veterans' benefits</h3>
          <p>Some wartime veterans and surviving spouses qualify for VA aid and attendance or housebound benefits. Eligibility is determined by the VA, not by us. We can help assemble the service documentation.</p>
          <h3>Medicaid and Medicare</h3>
          <p>Medicare generally covers short-term skilled home health ordered by a physician, not custodial or companion care. Virginia's CCC Plus waiver can cover personal care and respite for eligible adults through enrolled providers. This concept business is not enrolled and makes no coverage claim.</p>
        </div>
        <div class="card">
          <h3>${icon("receipt", 18)} How we quote</h3>
          <p class="muted">After a no-cost conversation we send an itemized written quote covering hours, premiums, and mileage. The rate you sign is the rate we bill.</p>
          <a class="btn mt-1" href="contact.html">Talk through a realistic budget</a>
        </div>
      </div>
    </div></section>
    ${faqSection(t)}
    ${ctaSection(t)}
  `;
  return head(t, { title: `Home Care Cost & Payment in Prince William County | ${B.shortName}`, description: "How home care is quoted and paid for in Prince William County, VA: written quotes, a four-hour minimum, no long-term contract, and plain-language payment options.", page: "cost.html", schema: [baseSchema(t, "cost.html"), breadcrumbSchema(t, "cost.html", [{ label: "Home", href: "index.html" }, { label: "Cost & payment", href: "cost.html" }])] }) + body + footer(t, 0);
}

function contactPage(t) {
  const body = `${header(t, "contact.html", 0)}
  <main id="main">
    ${pageHero(t, {
      title: "Tell us what is happening.",
      lede: "A coordinator will call within one business hour during office hours. No assessment fee. No obligation. If we are not the right fit, we will say so.",
      crumbs: [{ label: "Home", href: "index.html" }, { label: "Contact" }],
      kicker: "Start a conversation",
    })}
    <section class="section"><div class="container split">
      <div>
        <h2>Request a call back</h2>
        <p class="muted">This demo form validates in the browser and does not send data. Before launch, connect it to a HIPAA-aware form service or your CRM — not a plain email inbox.</p>
        <form class="form" data-demo-form novalidate>
          <div class="form-row">
            <div class="field"><label for="name">Your name</label><input id="name" name="name" autocomplete="name" required></div>
            <div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" required></div>
          </div>
          <div class="form-row">
            <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div>
            <div class="field"><label for="city">Community</label><select id="city" name="city"><option value="">Select one</option>${locations.map((l) => `<option>${esc(l.name)}</option>`).join("")}<option>Other / nearby</option></select></div>
          </div>
          <div class="field"><label for="need">What kind of help are you looking for?</label><select id="need" name="need"><option value="">Select one</option>${services.map((s) => `<option>${esc(s.name)}</option>`).join("")}<option>Not sure yet</option></select></div>
          <div class="field"><label for="message">What is happening?</label><textarea id="message" name="message" placeholder="A sentence or two is enough. Please do not include medical record numbers or sensitive health details in this demo form."></textarea><span class="hint">Do not include Social Security numbers, insurance IDs, or detailed medical information.</span></div>
          <div class="field"><label for="consent" class="consent"><input type="checkbox" id="consent" name="consent" required> I agree to be contacted about this inquiry. I understand this demo form does not transmit data.</label></div>
          <button class="btn" type="submit">Request a call ${icon("arrow", 16)}</button>
          <p class="form-status" role="status" aria-live="polite"></p>
        </form>
      </div>
      <aside class="contact-panel">
        <h2>Reach us directly</h2>
        <p><strong>Phone</strong><br><a href="${tel}">${esc(B.phone)}</a> <span class="muted">(placeholder)</span></p>
        <p><strong>Email</strong><br><a href="${B.emailHref}">${esc(B.email)}</a></p>
        <p><strong>Office</strong><br>${esc(B.addressLine)}<br>${esc(B.city)}, ${B.state} ${B.zip}<br><span class="muted">By appointment only — placeholder address</span></p>
        <p><strong>Hours</strong><br>${esc(B.hours)}</p>
        <div class="callout warn"><h3>${icon("alert", 16)} If this is an emergency</h3><p>Call 911. For suspected elder abuse or neglect in Virginia, contact Adult Protective Services through the local department of social services. This website is not monitored for emergencies.</p></div>
        <hr>
        <p class="small muted">${esc(B.license)}</p>
      </aside>
    </div></section>
    <section class="section alt"><div class="container">
      <div class="section-head"><p class="eyebrow">What happens next</p><h2>Three steps, no pressure.</h2></div>
      <div class="steps">${processSteps.slice(0, 3).map((p) => `<div class="step"><span class="step-num">${p.n}</span><h3>${esc(p.title)}</h3><p>${esc(p.body)}</p></div>`).join("")}</div>
    </div></section>
  `;
  return head(t, { title: `Contact & Consultation | ${B.shortName}`, description: "Request a no-obligation home care consultation in Prince William County, Virginia. Call, email, or request a call back from a care coordinator.", page: "contact.html", schema: [baseSchema(t, "contact.html"), breadcrumbSchema(t, "contact.html", [{ label: "Home", href: "index.html" }, { label: "Contact", href: "contact.html" }])] }) + body + footer(t, 0);
}

function resourcesPage(t) {
  const body = `${header(t, "resources.html", 0)}
  <main id="main">
    ${pageHero(t, {
      title: "Family resources, without the sales pitch.",
      lede: "Practical guides for the decisions families actually face: when to start, what it costs, what to ask, and what to do in the first 72 hours home.",
      crumbs: [{ label: "Home", href: "index.html" }, { label: "Resources" }],
      kicker: "Knowledge base",
    })}
    <section class="section"><div class="container">
      <div class="grid cols-2">
        ${articles
          .map(
            (a) => `<article class="card article-card reveal"><span class="pill neutral">${esc(a.category)}</span><h3><a href="resources/${a.slug}.html">${esc(a.title)}</a></h3><p>${esc(a.description)}</p><span class="muted small">${esc(a.read)} · Updated ${esc(a.date)}</span></article>`
          )
          .join("")}
      </div>
      <h2 class="mt-3">Trusted local and national resources</h2>
      <div class="grid cols-3 mt-2">
        ${resourceLinks
          .map(
            (r) => `<div class="card"><h3>${esc(r.name)}</h3><p>${esc(r.desc)}</p><a class="card-link" href="${r.url}" rel="noopener">Visit resource ${icon("external", 14)}</a></div>`
          )
          .join("")}
      </div>
      <div class="callout mt-3"><h3>Editorial note</h3><p>Guides are written for general education. They are not medical, legal, or financial advice. Regulations and program rules change; verify current requirements with the Virginia Department of Health, DMAS, or qualified counsel.</p></div>
    </div></section>
    ${ctaSection(t)}
  `;
  return head(t, { title: `Family Care Resources | Prince William County | ${B.shortName}`, description: "Free guides on when a parent needs help, home care costs in Prince William County, the first 72 hours after a hospital stay, and questions to ask a home care agency.", page: "resources.html", schema: [baseSchema(t, "resources.html"), breadcrumbSchema(t, "resources.html", [{ label: "Home", href: "index.html" }, { label: "Resources", href: "resources.html" }])] }) + body + footer(t, 0);
}

function articlePage(t, a) {
  const page = `resources/${a.slug}.html`;
  const body = `${header(t, "resources.html", 1)}
  <main id="main">
    <article>
      <header class="article-header"><div class="container narrow">
        ${breadcrumbs(t, [{ label: "Home", href: "index.html" }, { label: "Resources", href: "resources.html" }, { label: a.title }], 1)}
        <span class="pill neutral">${esc(a.category)}</span>
        <h1 class="mt-1">${esc(a.title)}</h1>
        <p class="lede">${esc(a.description)}</p>
        <div class="article-meta"><span>${icon("calendar", 14)} ${esc(a.date)}</span><span>${icon("clock", 14)} ${esc(a.read)}</span><span>By the Heart &amp; Harbor Medical Support editorial team</span></div>
      </div></header>
      <div class="container article-layout section tight">
        <div class="article-body">
          <p class="lede">${esc(a.intro)}</p>
          ${a.sections
            .map(
              (sec, i) => `<h2 id="s${i + 1}">${esc(sec.h)}</h2>${sec.p.map((p) => `<p>${esc(p)}</p>`).join("")}`
            )
            .join("")}
          <div class="takeaway"><strong>Bottom line</strong><p>${esc(a.takeaway)}</p></div>
          <hr>
          <div class="callout"><h3>Need to talk it through?</h3><p>A 15-minute call with a coordinator, no assessment fee. We will tell you what we can and cannot do.</p><a class="btn mt-2" href="../contact.html">Book a call ${icon("arrow", 16)}</a></div>
          <p class="small muted mt-2">This guide is general education, not medical, legal, or financial advice. Verify regulations and program rules with the relevant Virginia agency or qualified counsel.</p>
        </div>
        <aside class="toc">
          <h4>On this page</h4>
          <ul>${a.sections.map((s, i) => `<li><a href="#s${i + 1}">${esc(s.h)}</a></li>`).join("")}</ul>
          <hr><h4>More guides</h4>
          <ul>${articles.filter((x) => x.slug !== a.slug).map((x) => `<li><a href="${x.slug}.html">${esc(x.title)}</a></li>`).join("")}</ul>
          <hr><a class="btn small" href="../contact.html">Ask a question</a>
        </aside>
      </div>
    </article>
    ${ctaSection(t, 1)}
  `;
  return head(t, {
    title: `${a.title} | ${B.shortName}`,
    description: a.description,
    page,
    depth: 1,
    schema: [
      baseSchema(t, page),
      breadcrumbSchema(t, page, [{ label: "Home", href: "index.html" }, { label: "Resources", href: "resources.html" }, { label: a.title, href: page }]),
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: a.title,
        description: a.description,
        datePublished: a.date,
        dateModified: a.date,
        author: { "@type": "Organization", name: B.name },
        publisher: { "@type": "Organization", name: B.name },
        mainEntityOfPage: urlFor(t, page),
      },
    ],
  }) + body + footer(t, 1);
}

function privacyPage(t) {
  const body = `${header(t, "privacy.html", 0)}
  <main id="main">
    ${pageHero(t, { title: "Privacy practices", lede: "A plain-language starting point for the privacy policy a licensed agency needs before collecting any health information.", crumbs: [{ label: "Home", href: "index.html" }, { label: "Privacy" }], kicker: "Legal & privacy" })}
    <section class="section"><div class="container narrow article-body">
      <div class="callout warn"><h3>${icon("alert", 16)} Template, not legal advice</h3><p>This is a demonstration privacy page. A launched agency must have counsel review its HIPAA analysis, business associate agreements, retention schedule, breach response plan, and state-law obligations.</p></div>
      <h2>What this demo site collects</h2>
      <p>No analytics, advertising pixels, or third-party trackers are installed. The contact form validates in the browser and does not transmit or store data. Fonts are loaded from Google Fonts, which receives the visitor's IP address as part of the request.</p>
      <h2>What a live agency would collect</h2>
      <ul class="dotlist"><li>Contact details and the reason for the inquiry</li><li>Care preferences, scheduling needs, and non-clinical assessment notes</li><li>Authorized family contacts and communication preferences</li><li>Billing information and service documentation</li></ul>
      <h2>How information would be protected</h2>
      <p>Access limited to staff with a need to know; encrypted storage and transmission; unique user accounts; audit logging; written confidentiality policies; background-checked staff; and a documented breach response process. Protected health information would not be sent through ordinary text message or unencrypted email without authorization.</p>
      <h2>HIPAA status</h2>
      <p>Whether a home care agency is a HIPAA covered entity depends on its operations, including whether it conducts covered electronic transactions. Many private-pay companion agencies are not covered entities, but they may still be business associates of covered entities or subject to state privacy and consumer-protection law. This determination must be made with counsel — do not assume that “professional” means “outside HIPAA.”</p>
      <h2>Your choices</h2>
      <p>You can ask what information is held about you, request a correction, withdraw consent for non-essential communication, or ask for a copy of the agency's notice of privacy practices. Use the contact page to make a request.</p>
      <h2>Contact</h2>
      <p>${esc(B.name)} · ${esc(B.email)} · ${esc(B.phone)} (placeholders)</p>
      <p class="small muted">Last updated: November 2026.</p>
    </div></section>
  `;
  return head(t, { title: `Privacy Practices | ${B.shortName}`, description: "Plain-language privacy practices for a Prince William County home care agency, including HIPAA considerations and data handling.", page: "privacy.html" }) + body + footer(t, 0);
}

function accessibilityPage(t) {
  const body = `${header(t, "accessibility.html", 0)}
  <main id="main">
    ${pageHero(t, { title: "Accessibility", lede: "The site is designed to be usable by older adults, family caregivers, and people using assistive technology.", crumbs: [{ label: "Home", href: "index.html" }, { label: "Accessibility" }], kicker: "Commitment" })}
    <section class="section"><div class="container narrow article-body">
      <h2>What we have built in</h2>
      <ul class="checklist">
        <li>Semantic landmarks, a skip link, and a visible keyboard focus style</li>
        <li>Text contrast targets aligned with WCAG 2.2 AA where the visual system allows</li>
        <li>Responsive typography and touch targets of at least 44 pixels for primary controls</li>
        <li>Reduced-motion support and no autoplaying video or audio</li>
        <li>Form labels, error messaging, and a status region for screen readers</li>
        <li>Alternative text for meaningful imagery and decorative SVGs hidden from assistive tech</li>
      </ul>
      <h2>Known limitations</h2>
      <p>This is a demonstration build. It has not yet had an independent accessibility audit or usability testing with older adults. Some decorative illustrations are complex; they are marked decorative, with the meaning carried in adjacent text. The Google Fonts dependency can be removed for a fully self-hosted deployment.</p>
      <h2>Feedback</h2>
      <p>If something is hard to use, call ${esc(B.phone)} or email ${esc(B.email)} (placeholders). A live agency should commit to a response time and a remediation process.</p>
    </div></section>
  `;
  return head(t, { title: `Accessibility | ${B.shortName}`, description: "Accessibility commitments and known limitations for the Heart & Harbor Medical Support home care website.", page: "accessibility.html" }) + body + footer(t, 0);
}

function notFoundPage(t) {
  const body = `${header(t, "", 0)}
  <main id="main"><section class="section"><div class="container narrow center">
    <p class="eyebrow">404</p><h1>That page has moved on.</h1>
    <p class="lede">The link may be old, or the page may not exist yet. Start with services, the service area, or a direct conversation.</p>
    <div class="btn-row center" style="justify-content:center"><a class="btn" href="index.html">Back home</a><a class="btn ghost" href="contact.html">Contact us</a></div>
  </div></section>`;
  return head(t, { title: `Page Not Found | ${B.shortName}`, description: "Page not found.", page: "404.html" }) + body + footer(t, 0);
}

function sitemapPage(t) {
  const pages = [
    { href: "index.html", label: "Home" },
    { href: "services.html", label: "Services" },
    ...services.map((s) => ({ href: `services/${s.slug}.html`, label: s.name })),
    { href: "locations.html", label: "Service area" },
    ...locations.map((l) => ({ href: `locations/${l.slug}.html`, label: `Home care in ${l.name}` })),
    { href: "cost.html", label: "Cost & payment" },
    { href: "about.html", label: "Why us" },
    { href: "resources.html", label: "Resources" },
    ...articles.map((a) => ({ href: `resources/${a.slug}.html`, label: a.title })),
    { href: "contact.html", label: "Contact" },
    { href: "privacy.html", label: "Privacy" },
    { href: "accessibility.html", label: "Accessibility" },
  ];
  const body = `${header(t, "", 0)}
  <main id="main">
    ${pageHero(t, { title: "Sitemap", lede: "Every page in this site.", crumbs: [{ label: "Home", href: "index.html" }, { label: "Sitemap" }] })}
    <section class="section"><div class="container"><ul class="sitemap-list">${pages.map((p) => `<li><a href="${p.href}">${esc(p.label)}</a></li>`).join("")}</ul></div></section>`;
  return head(t, { title: `Sitemap | ${B.shortName}`, description: "Sitemap for the Heart & Harbor Medical Support home care website.", page: "sitemap.html" }) + body + footer(t, 0);
}

/* ------------------------------ assets ---------------------------------- */

function favicon(t) {
  const p = t.palette;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${p.primaryDark}"/><path d="M12 42V28c0-11 9-20 20-20s20 9 20 20v14" fill="none" stroke="${p.primary}" stroke-width="4" stroke-linecap="round"/><path d="M32 44c-7-4.4-11-8.6-11-13a6.5 6.5 0 0 1 11-4.2 6.5 6.5 0 0 1 11 4.2c0 4.4-4 8.6-11 13Z" fill="${p.primary}"/></svg>`;
}

function ogImage(t) {
  const p = t.palette;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${p.bg}"/>
  <circle cx="1030" cy="110" r="260" fill="${p.primary}" opacity=".16"/>
  <circle cx="1110" cy="520" r="190" fill="${p.accent}" opacity=".14"/>
  <g transform="translate(80 90)">
    <rect width="72" height="72" rx="18" fill="${p.primaryDark}"/>
    <path d="M16 48V32c0-11 9-20 20-20s20 9 20 20v16" fill="none" stroke="${p.primary}" stroke-width="4" stroke-linecap="round"/>
    <path d="M36 50c-7-4.4-11-8.6-11-13a6.5 6.5 0 0 1 11-4.2 6.5 6.5 0 0 1 11 4.2c0 4.4-4 8.6-11 13Z" fill="${p.primary}"/>
  </g>
  <text x="80" y="250" font-family="Georgia, serif" font-size="66" font-weight="700" fill="${p.ink}">Care that moves</text>
  <text x="80" y="326" font-family="Georgia, serif" font-size="66" font-weight="700" fill="${p.ink}">with you.</text>
  <text x="80" y="400" font-family="Arial, sans-serif" font-size="28" fill="${p.muted}">Professional home care · Prince William County, Virginia</text>
  <rect x="80" y="452" width="320" height="4" fill="${p.primary}"/>
  <text x="80" y="530" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="${p.primary}">Heart &amp; Harbor Medical Support</text>
  <text x="80" y="570" font-family="Arial, sans-serif" font-size="22" fill="${p.muted}">HeartandHarborMedical Support.com · (703) 555-0100 · concept site</text>
</svg>`;
}

function siteJS() {
  return `(function(){
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }});
  }
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }});
    }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    reveals.forEach(function(el){ io.observe(el); });
  } else { reveals.forEach(function(el){ el.classList.add('in'); }); }
  document.querySelectorAll('[data-demo-form]').forEach(function(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var status = form.querySelector('.form-status');
      if (!form.checkValidity()) {
        form.reportValidity();
        if (status) { status.className='form-status show'; status.textContent='Please complete the required fields so we can route your request.'; }
        return;
      }
      if (status) {
        status.className = 'form-status show';
        status.innerHTML = '<strong>Demo form — nothing was sent.</strong><br>This concept site has no backend. Before launch, connect the form to a HIPAA-aware intake service or CRM, then test delivery and consent language.';
      }
      form.reset();
    });
  });
})();\n`;
}

function robots(t) {
  return `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl(t)}sitemap.xml\n`;
}

function sitemapXML(t) {
  const pages = [
    "index.html",
    "services.html",
    ...services.map((s) => `services/${s.slug}.html`),
    "locations.html",
    ...locations.map((l) => `locations/${l.slug}.html`),
    "cost.html",
    "about.html",
    "resources.html",
    ...articles.map((a) => `resources/${a.slug}.html`),
    "contact.html",
    "privacy.html",
    "accessibility.html",
    "sitemap.html",
  ];
  const urls = pages
    .map(
      (p) =>
        `  <url><loc>${urlFor(t, p)}</loc><changefreq>${p === "index.html" ? "weekly" : "monthly"}</changefreq><priority>${p === "index.html" ? "1.0" : p.endsWith("html") && !p.includes("/") ? "0.8" : "0.6"}</priority></url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

/* ------------------------------- build ---------------------------------- */

let total = 0;
for (const t of themes) {
  const dir = path.join(ROOT, t.dir);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(path.join(dir, "assets/css"), { recursive: true });
  fs.mkdirSync(path.join(dir, "assets/js"), { recursive: true });
  fs.mkdirSync(path.join(dir, "assets/img"), { recursive: true });
  fs.mkdirSync(path.join(dir, "services"), { recursive: true });
  fs.mkdirSync(path.join(dir, "locations"), { recursive: true });
  fs.mkdirSync(path.join(dir, "resources"), { recursive: true });

  fs.copyFileSync(path.join(ROOT, "site-builder/base.css"), path.join(dir, "assets/css/base.css"));
  fs.copyFileSync(path.join(ROOT, `site-builder/theme-${t.id}.css`), path.join(dir, "assets/css/theme.css"));
  fs.writeFileSync(path.join(dir, "assets/js/site.js"), siteJS());
  fs.writeFileSync(path.join(dir, "assets/img/favicon.svg"), favicon(t));
  fs.writeFileSync(path.join(dir, "assets/img/og.svg"), ogImage(t));
  fs.writeFileSync(path.join(dir, "robots.txt"), robots(t));
  fs.writeFileSync(path.join(dir, "sitemap.xml"), sitemapXML(t));

  const files = {
    "index.html": homePage(t),
    "services.html": servicesPage(t),
    "locations.html": locationsPage(t),
    "about.html": aboutPage(t),
    "cost.html": costPage(t),
    "contact.html": contactPage(t),
    "resources.html": resourcesPage(t),
    "privacy.html": privacyPage(t),
    "accessibility.html": accessibilityPage(t),
    "404.html": notFoundPage(t),
    "sitemap.html": sitemapPage(t),
  };
  for (const s of services) files[`services/${s.slug}.html`] = servicePage(t, s);
  for (const l of locations) files[`locations/${l.slug}.html`] = locationPage(t, l);
  for (const a of articles) files[`resources/${a.slug}.html`] = articlePage(t, a);

  for (const [p, html] of Object.entries(files)) {
    const out = path.join(dir, p);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    total++;
  }
  console.log(`built ${t.id.padEnd(18)} ${Object.keys(files).length} pages`);
}
console.log(`\nTotal pages: ${total}`);
