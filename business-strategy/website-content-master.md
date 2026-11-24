# Website Content Master — Page Inventory & Copy Specification

**Prepared:** 23 November 2026
**Applies to:** All nine demo builds in `sites/`
**Content source of truth:** `site-builder/content.mjs`
**Build engine:** `site-builder/build.mjs`

---

## 1. Purpose

This document specifies every page in the site, its purpose, its required content blocks, its metadata, its schema, and its internal links. It is the reference for editing copy, adding pages, or porting the build to another framework.

**Page count per site:** 37
**Total across nine builds:** 333

---

## 2. Site map

```
/
├── index.html                      Home
├── services.html                   Service catalog
│   ├── services/companion-care.html
│   ├── services/personal-care.html
│   ├── services/respite-care.html
│   ├── services/homemaker-services.html
│   ├── services/transportation-errands.html
│   ├── services/medication-reminders.html
│   ├── services/wellness-check-ins.html
│   ├── services/dementia-support.html
│   ├── services/hospital-to-home.html
│   ├── services/family-caregiver-coaching.html
│   ├── services/home-safety-assessment.html
│   └── services/overnight-care.html
├── locations.html                  Service area
│   ├── locations/woodbridge.html
│   ├── locations/manassas.html
│   ├── locations/manassas-park.html
│   ├── locations/gainesville.html
│   ├── locations/haymarket.html
│   ├── locations/dumfries.html
│   ├── locations/occoquan.html
│   ├── locations/lake-ridge.html
│   ├── locations/dale-city.html
│   └── locations/bristow.html
├── pricing.html                    Pricing & payment
├── about.html                      Why us + process
├── resources.html                  Resource hub
│   ├── resources/when-a-parent-needs-help.html
│   ├── resources/home-care-cost-prince-william.html
│   ├── resources/first-72-hours-after-hospital.html
│   └── resources/questions-before-hiring-agency.html
├── contact.html                    Contact & consultation
├── privacy.html                    Privacy practices
├── accessibility.html              Accessibility statement
├── sitemap.html                    Human sitemap
├── 404.html                        Not found
├── robots.txt
└── sitemap.xml
```

---

## 3. Global elements

### 3.1 Head

Every page includes:

| Element | Value |
|---|---|
| `charset` | utf-8 |
| `viewport` | width=device-width, initial-scale=1 |
| `title` | Page-specific, ≤60 chars where possible |
| `description` | 140–160 chars, page-specific |
| `canonical` | Absolute URL |
| `robots` | `index,follow,max-image-preview:large` |
| `theme-color` | Theme primary-dark |
| Open Graph | type, site_name, title, description, url, image |
| Twitter | summary_large_image, title, description |
| favicon | SVG |
| fonts | Google Fonts with preconnect |
| CSS | `base.css` + `theme.css`, relative paths |
| JSON-LD | Per page |

### 3.2 Header

- Brand lockup: logo mark + name + "Home Care · Prince William"
- Primary nav: Services, Service area, Pricing, Why us, Resources, Contact
- Phone number (placeholder)
- "Book a call" button
- Mobile toggle with `aria-expanded` and Escape handling
- Optional top bar (Medic theme only) with phone, email, hours, county

### 3.3 Footer

- Brand + tagline + contact
- Services column (5 links + all)
- Service area column (5 links + all)
- Company column (about, pricing, resources, contact, privacy, accessibility, sitemap)
- **Placeholder disclosure** (required on every page)
- License note
- Copyright and address

### 3.4 Accessibility

- Skip link to `#main`
- Visible focus ring
- `aria-current="page"` on active nav
- Landmark elements (`header`, `nav`, `main`, `footer`)
- Decorative SVGs `aria-hidden="true"`
- Reduced-motion support
- 44px minimum touch targets
- Form labels and a live status region

---

## 4. Page specifications

### 4.1 Home (`index.html`)

| Field | Value |
|---|---|
| **Purpose** | Convert urgent local searchers; establish trust in 10 seconds |
| **H1** | "The clearest way to care for a parent at home." (or theme variant) |
| **Title** | Home Care in Prince William County \| Heart & Harbor Health & Medical Support |
| **Schema** | `HomeHealthCareService`, `FAQPage` |
| **Sections** | Hero → trust strip → stats → why we exist → services (6) → differentiators (6) → process (3) → pull quote → locations → pricing teaser → resources (4) → FAQ (6) → CTA |
| **Primary CTA** | Book a 15-minute call |
| **Secondary CTA** | See published rates |

**Hero copy requirements:** county name, professional scope, named coordinator/backup, weekly update, two CTAs, three proof points (4-hour minimum, 1-hour response, weekly brief).

**Stats band:** four verified local/national data points with source labels. Must not present estimates as facts.

**Pricing teaser:** five rows, illustrative label, fine-print callout.

---

### 4.2 Services (`services.html`)

| Field | Value |
|---|---|
| **Purpose** | Explain scope; route to the right service; filter out clinical needs |
| **H1** | "Services built around a real week at home." |
| **Title** | Home Care Services in Prince William County |
| **Schema** | `HomeHealthCareService`, `BreadcrumbList` |
| **Sections** | Hero → scope warning → launch services (7) → phase 2–3 (5) → not-sure callout → CTA |

**Required warning:** explicit statement that the agency does not provide skilled nursing, PT, OT, wound care, or medication administration, and that personal care requires a Virginia HCO license.

---

### 4.3 Service detail (12 pages)

| Field | Value |
|---|---|
| **Purpose** | Rank for service intent; answer "what is included" and "what does it cost" |
| **H1** | Service name |
| **Title** | `{Service} in Prince William County, VA \| Heart & Harbor Health & Medical Support` |
| **Schema** | `HomeHealthCareService`, `BreadcrumbList`, `Service` |
| **Sections** | Hero (kicker: launch or phase) → intro → who it is for → problem → what a visit includes (checklist) → cost → regulatory notes → business case → CTA → sidebar (on this page, related services, contact) |

**Content rules:**
- Task list must be concrete and non-clinical.
- Regulatory note must state scope limits.
- Cost must link to pricing and label rates illustrative.
- No page may imply a service the agency is not licensed to deliver.

---

### 4.4 Service area (`locations.html`)

| Field | Value |
|---|---|
| **Purpose** | Establish genuine local coverage; route to community pages |
| **H1** | "Home care across Prince William County." |
| **Title** | Home Care Service Area \| Prince William County, VA |
| **Schema** | `HomeHealthCareService`, `BreadcrumbList` |
| **Sections** | Hero → map illustration → tight-geography rationale → 10 location cards → CTA |

---

### 4.5 Location detail (10 pages)

| Field | Value |
|---|---|
| **Purpose** | Rank for "[service] [city]"; provide real local context |
| **H1** | "Home care in {Community}, Virginia" |
| **Title** | `Home Care in {Community}, VA \| Heart & Harbor Health & Medical Support` |
| **Schema** | `HomeHealthCareService`, `BreadcrumbList` |
| **Sections** | Hero (ZIPs) → local intro → what families ask for → local context/landmarks → services (4) → coverage → ZIP callout → CTA → sidebar (nearby communities, local resources, contact) |

**Quality rule:** each page must contain at least three community-specific facts (landmarks, housing stock, hospitals, senior centers). Do not publish a page that only swaps the city name.

---

### 4.6 Pricing (`pricing.html`)

| Field | Value |
|---|---|
| **Purpose** | Remove price anxiety; qualify leads; explain payment |
| **H1** | "Published rates. A four-hour minimum. No long-term contract." |
| **Title** | Home Care Pricing in Prince William County |
| **Schema** | `HomeHealthCareService`, `BreadcrumbList`, `FAQPage` |
| **Sections** | Hero → demo pricing notice → rate table (8 rows) → included/extra/cancellation → payment options (private pay, LTC insurance, VA, Medicaid/Medicare) → sample weekly budget → FAQ → CTA |

**Required disclosures:**
- Rates are illustrative.
- Assessment fee is $0.
- No long-term contract.
- 7-day notice to end service; 24-hour visit cancellation.
- Medicare generally does not cover custodial care.
- The agency is not a Medicaid provider at launch.

---

### 4.7 About (`about.html`)

| Field | Value |
|---|---|
| **Purpose** | Differentiate on operating model; state limits honestly |
| **H1** | "A smaller agency, built for the parts of care that get skipped." |
| **Title** | Why Heart & Harbor Health & Medical Support \| Locally Focused Home Care |
| **Schema** | `HomeHealthCareService`, `BreadcrumbList` |
| **Sections** | Hero → the problem with "care" as a category → six-step process → what we will not do → who is behind it → placeholder disclosure → commitments → CTA → sidebar (at a glance) |

**Required:** no invented staff bios, credentials, or clinical leadership. State that the concept is pre-launch.

---

### 4.8 Contact (`contact.html`)

| Field | Value |
|---|---|
| **Purpose** | Capture inquiries; set expectations; protect privacy |
| **H1** | "Tell us what is happening." |
| **Title** | Contact & Consultation \| Heart & Harbor Health & Medical Support |
| **Schema** | `HomeHealthCareService`, `BreadcrumbList` |
| **Sections** | Hero → demo form → contact panel → emergency callout → what happens next (3 steps) |

**Form fields:** name, phone, email, community, need, message, consent.
**Form behavior:** client-side validation; no transmission; success message states nothing was sent.
**Privacy warning:** do not include SSN, insurance IDs, or detailed medical information.
**Emergency notice:** call 911; Adult Protective Services for suspected abuse.

---

### 4.9 Resources (`resources.html`)

| Field | Value |
|---|---|
| **Purpose** | Top-of-funnel education; internal linking; authority |
| **H1** | "Family resources, without the sales pitch." |
| **Title** | Family Care Resources \| Prince William County |
| **Schema** | `HomeHealthCareService`, `BreadcrumbList` |
| **Sections** | Hero → 4 article cards → trusted resources (6) → editorial note → CTA |

---

### 4.10 Article template (4 pages)

| Field | Value |
|---|---|
| **Purpose** | Rank for informational queries; build trust; feed AI answers |
| **H1** | Article title |
| **Title** | `{Title} \| Heart & Harbor Health & Medical Support` |
| **Schema** | `HomeHealthCareService`, `BreadcrumbList`, `Article` |
| **Sections** | Breadcrumbs → category pill → H1 → lede → meta (date, read time, author) → body with H2 sections → bottom-line takeaway → CTA → disclaimer → sidebar (TOC, more guides, ask) |

**Article standards:**
- 900–1,600 words.
- Answer the core question in the first 60 words.
- Use specific local references.
- Cite primary sources where factual.
- Include a "Bottom line" box.
- Visible last-updated date.
- No clinical advice.

**Four articles:**
1. How to tell when a parent needs help at home
2. What home care costs in Prince William County
3. The first 72 hours home after a hospital stay
4. 12 questions to ask before hiring a home care agency

---

### 4.11 Privacy (`privacy.html`)

| Field | Value |
|---|---|
| **Purpose** | Explain data practices; flag HIPAA analysis |
| **H1** | "Privacy practices" |
| **Sections** | Template warning → what the demo collects → what a live agency would collect → protections → HIPAA status → choices → contact |
| **Required:** no claim of HIPAA compliance; state that counsel must determine status. |

---

### 4.12 Accessibility (`accessibility.html`)

| Field | Value |
|---|---|
| **Purpose** | State commitments and known limitations |
| **H1** | "Accessibility" |
| **Sections** | What is built in → known limitations → feedback |
| **Required:** honest statement that the demo has not had an independent audit. |

---

### 4.13 Sitemap (`sitemap.html`)

Human-readable list of all 37 pages. Mirrors `sitemap.xml`.

### 4.14 404 (`404.html`)

Friendly recovery with links to home, services, and contact.

### 4.15 `robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://heartandharborhomecare.com/sitemap.xml
```

### 4.16 `sitemap.xml`

37 URLs with `changefreq` and `priority`. Home = 1.0; top-level = 0.8; detail = 0.6.

---

## 5. Content data model (`content.mjs`)

| Export | Contents |
|---|---|
| `business` | Name, legal name, short name, tagline, promise, phone, email, address, hours, license note, disclaimer, minimum, price range |
| `stats` | Four data points with value, label, source |
| `differentiators` | Six items: title, short, proof, icon |
| `services` | Twelve items: slug, name, category, phase, icon, short, intro, who, problem, bullets, revenue, reg, value |
| `pricing` | Eight rows: service, rate, unit, notes |
| `processSteps` | Six steps: number, title, body |
| `commitments` | Six service-agreement promises |
| `locations` | Ten items: slug, name, zips, blurb, note, landmarks |
| `faqs` | Eight Q&A pairs |
| `articles` | Four long-form guides with sections, takeaway, date, read time |
| `resourceLinks` | Six trusted external resources |
| `navLinks` | Primary navigation |

**Editing rule:** change copy in `content.mjs`, then run `node site-builder/build.mjs`. Never hand-edit generated HTML in `sites/` — it will be overwritten.

---

## 6. Theme system (`themes.mjs`)

Each theme defines:

- `id`, `dir`, `port`, `title`
- Palette: `bg`, `bg2`, `surface`, `ink`, `muted`, `primary`, `primaryDark`, `accent`, `accent2`, `line`, `cream`
- Fonts: Google font string, display family, body family
- `radius`, `hero` variant, `nav` variant, `card` variant, `logoMark`, `scene`, `sceneAlt`

The build injects palette and fonts as CSS variables, then loads a theme-specific stylesheet (`theme-XX.css`) that restyles the shared structure.

**Adding a theme:** create `site-builder/theme-10-name.css`, add a config to `themes.mjs`, add a port to `serve.mjs`, rebuild.

---

## 7. Placeholder inventory

Every one of these must be replaced before launch:

| Placeholder | Current value | Owner |
|---|---|---|
| Phone | (703) 555-0100 | Administrator |
| Email | hello@heartandharborhomecare.com | Administrator |
| Address | 12345 Placeholder Plaza, Suite 200, Woodbridge, VA 22192 | Administrator |
| Domain | heartandharborhomecare.com | Marketing |
| License number | Pending — placeholder | Administrator |
| Insurance | Not stated as active | Administrator |
| Rates | Illustrative | Administrator / finance |
| Staff names | None published | HR |
| Testimonials | None (intentional) | Marketing |
| Photos | Original SVG illustrations | Design |

**Rule:** the footer disclosure must remain until every placeholder is replaced and verified.

---

## 8. Pre-launch content QA

- [ ] Every page has a unique title and description.
- [ ] No page claims a license, certification, insurance panel, or credential.
- [ ] No page offers clinical services.
- [ ] No invented testimonials or staff.
- [ ] Rates labeled illustrative or verified.
- [ ] Phone, address, and email marked placeholder.
- [ ] All internal links resolve (run `node site-builder/check-links.mjs`).
- [ ] All external links open with `rel="noopener"`.
- [ ] Schema validates.
- [ ] Sitemap includes every page.
- [ ] 404 works.
- [ ] Forms do not transmit data.
- [ ] Spanish content only if staffed.
- [ ] Accessibility spot-check: keyboard, contrast, zoom 200%.

---

*This specification describes the generated sites exactly as built. For strategic rationale, see `business-positioning.md`, `marketing-content.md`, and `seo-keyword-strategy.md`.*
