# Hearth & Harbor Home Care — Launch Package

A complete, research-backed launch package for a fictional-but-realistic non-medical home care agency in **Prince William County, Virginia**: market research, positioning, a Virginia compliance plan, print marketing, and **nine independently designed static websites** built from one shared factual foundation.

> **This is a concept package, not an operating business.** Phone, address, email, license number, insurance status, staff, and pricing are clearly marked placeholders. Nothing here should be published as a real agency until licensure, insurance, staffing, and legal review are complete. See the disclaimer at the bottom.

**Live demos (GitHub Pages):** <https://techora01.github.io/hearth-harbor-home-care/>

---

## Quick start

```bash
# 1. Rebuild all nine static sites
node site-builder/build.mjs

# 2. Verify every internal link and run the structural audit
node site-builder/check-links.mjs
node site-builder/audit.mjs

# 3. Run the demo servers (dashboard on 8100, sites on 8101–8109)
node serve.mjs
```

Then open **http://localhost:8100** for the dashboard.

No dependencies. No build framework. Node 18+ only.

---

## The nine sites

Each site is a self-contained static build (37 pages each, 333 total) that adopts the visual language of a different open-source theme while sharing the same researched business content.

| # | Build | Visual direction | Lineage / reference repo | Port | Path |
|---|---|---|---|---|---|
| 01 | ScrewFast | Dark aurora glass, product-led, oversized type | ScrewFast (Astro + Tailwind) | 8101 | `sites/01-screwfast/` |
| 02 | Medic | Clinical trust, blue nav, icon grid, appointment panel | Medic (Bootstrap 4) | 8102 | `sites/02-medic/` |
| 03 | Jekyll Serif | Warm paper, editorial serif, hairline rules | Jekyll Serif | 8103 | `sites/03-jekyll-serif/` |
| 04 | Minimal Mistakes | Documentation clarity, narrow measure, sidebar logic | Minimal Mistakes (Jekyll) | 8104 | `sites/04-minimal-mistakes/` |
| 05 | Agency | Dark statement hero, gold rules, numbered process | Agency Jekyll | 8105 | `sites/05-agency/` |
| 06 | Viva Medical | Airy pastels, soft blobs, rounded cards | Viva Medical (Astro + Tailwind) | 8106 | `sites/06-viva-medical/` |
| 07 | HealNet | Friendly chunky components, badge pills, playful shadows | HealNet (Astro + DaisyUI) | 8107 | `sites/07-healnet/` |
| 08 | Hugo Serif | Magazine grid, oversized serif, pull quotes | Hugo Serif | 8108 | `sites/08-hugo-serif/` |
| 09 | HugoBricks | Bento blocks, thick borders, offset shadows | HugoBricks | 8109 | `sites/09-hugobricks/` |

**Production recommendation: 02 — Medic lineage.** It wins on healthcare trust, legibility for older adults, and conversion clarity. 01 is the strongest brand statement but too dark for the primary audience; 03 and 08 are excellent content-marketing directions; 04 is the best resource hub.

### What is shared vs. different

**Shared:** researched positioning, service scope, compliance language, disclaimers, ten community pages, four long-form guides, local SEO structure, JSON-LD, accessibility baseline.

**Different:** palette, typography, hero composition, navigation pattern, card and pricing treatment, CTA styling, logo lockup, illustration treatment.

All nine are hand-built static HTML/CSS/JS. The original themes could not be built natively because Ruby, Hugo, `gh`, and `pnpm` are unavailable in this environment; the builds interpret each theme's visual language instead of cloning its templates.

---

## Repository structure

```
.
├── dashboard/index.html          Demo dashboard linking all nine sites
├── sites/                        Nine generated static sites
│   └── 01-screwfast … 09-hugobricks
├── site-builder/
│   ├── content.mjs               Single source of truth for copy, services, locations, FAQs, articles, citations data
│   ├── themes.mjs                Nine theme identities (palette, fonts, layout, port)
│   ├── art.mjs                   Original SVG logos, icons, and scene illustrations
│   ├── base.css                  Shared structure, responsive rules, print, a11y
│   ├── theme-*.css               Nine theme stylesheets
│   ├── build.mjs                 Static site generator
│   ├── check-links.mjs           Internal link validator
│   └── audit.mjs                 Structural SEO / accessibility audit
├── business-strategy/            14 research and planning documents
├── marketing/print/              Print-ready brochure, referral sheet, recruitment sheet, flyer, cards
├── serve.mjs                     Zero-dependency demo servers
├── reference-themes/             Local design references (gitignored; not deployed)
├── index.html                    Redirect to dashboard
└── .nojekyll                     GitHub Pages: serve files as-is
```

### Editing content

Change copy in `site-builder/content.mjs`, then run `node site-builder/build.mjs`. Never hand-edit generated HTML in `sites/` — it will be overwritten.

### Adding a theme

1. Add a config to `site-builder/themes.mjs`.
2. Create `site-builder/theme-10-name.css`.
3. Add a port to `serve.mjs`.
4. Rebuild.

---

## Strategy library (`business-strategy/`):

| Document | What it covers |
|---|---|
| `market-research.md` | County demographics, aging profile, demand drivers, market sizing, segments, referral ecosystem |
| `competitor-analysis.md` | Franchise vs. independent vs. registry models, published rates, gaps, competitive matrix |
| `business-positioning.md` | Brand, target buyer, pillars, messaging, tone, objections, visual identity |
| `service-catalog.md` | 12 services across 3 phases, task lists, rates, exclusions, margin notes |
| `competitive-differentiators.md` | Scored differentiator evaluation, primary vs. supporting, deferred ideas, proof plan |
| `value-added-services.md` | Friday brief, named coordinator, backup, hospital bridge, coaching, costs, metrics |
| `virginia-compliance-checklist.md` | Entity, VDH licensure, administrator, RN, background checks, insurance, HIPAA, launch gate |
| `customer-acquisition-strategy.md` | Channel playbooks, intake script, objections, budget, 90-day sequence |
| `customer-workflow.md` | End-to-end journey, 10 stages, roles, documentation, failure points, SLAs |
| `marketing-content.md` | Homepage and service copy, emails, social calendar, print copy, ad copy, content briefs |
| `seo-keyword-strategy.md` | Keyword architecture, page map, local SEO, technical checklist, AI visibility, measurement |
| `website-content-master.md` | Page inventory, metadata, schema, content model, placeholder register, QA |
| `source-register.md` | Every source with URL and verification status, plus known research gaps |
| `business-launch-roadmap.md` | 18-month plan, phases, budget, staffing, financial model, risks, decision points |

### Key verified regulatory facts

- Virginia licenses **home care organizations** that provide home health, personal care, or pharmaceutical services in a residence ([Code § 32.1-162.1 et seq.](https://law.lis.virginia.gov/vacode/title32.1/chapter9/)).
- **Homemaker, chore, or companion services alone** may be exempt under [12VAC5-381-30](https://law.lis.virginia.gov/admincode/title12/agency5/chapter381/section30/); the exemption requires a written request and a $75 fee.
- License fee is **$1,500** for initial and renewal; late fee $50; reissuance $250 ([12VAC5-381-70](https://law.lis.virginia.gov/admincode/title12/agency5/chapter381/section70/)).
- The administrator needs **≥1 year of direct health care service delivery** experience and **≥1 year within the last 5 years** of supervisory/administrative experience in home health or a related program ([12VAC5-381-170](https://law.lis.virginia.gov/admincode/title12/agency5/chapter381/section170/)).
- Criminal record report must be obtained **within 30 days of employment**, cannot be older than **90 days** at hire, and no employee may have direct patient contact before clearance ([12VAC5-381-110](https://law.lis.virginia.gov/admincode/title12/agency5/chapter381/section110/)).
- Insurance: malpractice consistent with § 8.01-581.15, **≥$1M general liability per occurrence**, and **≥$50,000** crime insurance or fidelity bond ([12VAC5-381-210](https://law.lis.virginia.gov/admincode/title12/agency5/chapter381/section210/)).
- Medicare covers part-time skilled home health, not custodial or companion care ([Medicare.gov](https://www.medicare.gov/coverage/home-health-services)).

**Not legal advice.** Verify every item with current regulations and Virginia counsel before filing or delivering care.

---

## Print kit (`marketing/print/`):

Open `marketing/print/index.html`, then print or save as PDF from the browser.

| File | Format |
|---|---|
| `tri-fold-brochure.html` | Letter landscape, 2 pages, fold in thirds |
| `referral-sheet.html` | Letter portrait, 1 page |
| `caregiver-recruitment.html` | Letter portrait, 1 page |
| `flyer.html` | Letter portrait, 1 page |
| `referral-cards.html` | Letter portrait, 2 pages, 10 cards up |
| `print.css` | Shared print system, `@page` rules, exact color |

Print at 100% scale with background graphics enabled. Colors are RGB; a professional printer may request CMYK.

---

## Accessibility & SEO

- Semantic landmarks, skip link, visible focus, `aria-current`, 44px touch targets.
- Reduced-motion support; no autoplay.
- WCAG 2.2 AA contrast targets where the visual system allows (dark and pastel themes vary; audit before launch).
- Unique title/description/canonical per page.
- Open Graph and Twitter cards.
- JSON-LD: `HomeHealthCareService`, `BreadcrumbList`, `FAQPage`, `Service`, `Article`.
- `sitemap.xml` and `robots.txt` per site.
- Relative internal links (works from any subpath).

**Automated check:** `site-builder/audit.mjs` passes on all 333 pages — one `<h1>` per page, unique title per site, meta description, canonical, skip link, and footer disclosure on every page.

**Known limitation:** the builds have not had an independent accessibility audit. Several decorative SVGs are complex and marked `aria-hidden`; meaning is carried in adjacent text.

---

## Deployment (GitHub Pages)

**Live now:** <https://techora01.github.io/hearth-harbor-home-care/> → redirects to the demo dashboard.

- Repository: `techora01/hearth-harbor-home-care`
- Pages source: branch `main`, path `/ (root)`
- Built and published on 2026-11-24; all nine demos verified live (HTTP 200).

The repository deploys as a static site with no build step.

1. The root `index.html` redirects to `dashboard/`.
2. `.nojekyll` ensures all files are served as-is.
3. The dashboard detects `localhost` and switches between local ports and relative `/sites/...` paths automatically.
4. Canonical URLs, sitemaps, and robots files are built for the Pages origin.

### Redeploying

```bash
# Build with the GitHub Pages canonical origin, then push.
SITE_ORIGIN=https://techora01.github.io PAGES_BASE=/hearth-harbor-home-care node site-builder/build.mjs
node site-builder/check-links.mjs
git add -A && git commit -m "Rebuild sites" && git push
```

`SITE_ORIGIN` and `PAGES_BASE` are optional environment variables; without them the build uses the production domain `https://hearthandharborcare.com`.

`reference-themes/` is gitignored and never deployed. It exists only as local design reference; each upstream repository has its own license and must be reviewed before any code reuse.

---

## Third-party theme licensing

Nine reference repositories were cloned into `reference-themes/` for visual study only. They are **not** included in the deployed site and no upstream code was copied into `sites/`.

| Theme | Repository | License status |
|---|---|---|
| ScrewFast | `mearashadowfax/ScrewFast` | LICENSE file present — verify before reuse |
| Medic | `themefisher/medic` | README notes MIT; Themefisher commercial terms need review |
| Jekyll Serif | `zerostaticthemes/jekyll-serif-theme` | LICENSE file present — verify |
| Minimal Mistakes | `mmistakes/minimal-mistakes` | MIT — verify |
| Agency Jekyll | `raviriley/agency-jekyll-theme` | LICENSE file present — verify |
| healthcare-astro-theme | `zeon-studio/healthcare-astro-theme` | LICENSE file present — verify |
| HealNet | `themefisher/healnet` | LICENSE file present — verify |
| Hugo Serif | `zerostaticthemes/hugo-serif-theme` | LICENSE file present — verify |
| HugoBricks | `hugobricks/hugobricks` | LICENSE file present — verify |

All site code in `sites/` is original, generated from `site-builder/`. The illustrations and logos are original SVG authored for this project.

---

## Placeholder register

| Item | Current placeholder | Replace before launch |
|---|---|---|
| Phone | (703) 555-0100 | Real business line |
| Email | hello@hearthandharborcare.com | Real monitored inbox |
| Address | 12345 Placeholder Plaza, Suite 200, Woodbridge, VA 22192 | Real office or service-area address |
| License | "Pending — placeholder" | VDH HCO license number |
| Insurance | Not claimed as active | Bound coverage at required limits |
| Rates | Illustrative ($32–$42/hr) | Validated cost model |
| Staff | None published | Verified hires only |
| Testimonials | None (intentional) | Verified reviews with consent |
| Domain | hearthandharborcare.com | Verified and purchased |

The footer disclosure must remain on every page until all placeholders are replaced and verified.

---

## Disclaimer

Hearth & Harbor Home Care is a **concept** created for research, design, and business-planning purposes. It is not an operating agency. It holds no Virginia home care organization license, no insurance, and no clinical credentials. It does not provide skilled nursing, physical therapy, occupational therapy, wound care, medication administration, or any other clinical service.

All names, contact details, addresses, license numbers, prices, staff biographies, and testimonials are placeholders or omitted. Nothing on these sites is medical, legal, financial, or tax advice. Regulations and program rules change; verify with the Virginia Department of Health, DMAS, and qualified counsel.

No fabricated reviews, credentials, or client stories are published anywhere in this package.