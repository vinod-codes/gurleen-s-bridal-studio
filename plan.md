# GKP ARTISTRY & MAKEOVERS — AUTONOMOUS DEVELOPMENT PLAN

**Client:** GKP Artistry & Makeovers (Gurleen Kaur Pannu)
**Business:** Luxury Bridal Makeup + Professional Makeup Academy, Mumbai
**Tagline:** Elevating Beauty. Empowering Artists.
**Updated:** 2026-07-08 | **Version:** 2.0 (Autonomous Workflow)

---

## AUTONOMOUS DEVELOPMENT WORKFLOW

Roles: Lead Engineer · Technical Architect · QA Engineer · SEO Specialist · Project Manager

Rules:
1. Review blueprint, design system, and architecture before every task
2. Work phase by phase without stopping for confirmation
3. Run full audit before and after every phase
4. Fix all issues immediately
5. Commit after every meaningful milestone with semantic messages
6. Push to remote after every commit
7. Update plan.md after every task
8. Update Graphify after every phase

---

## PROJECT STATUS

| Field | Value |
|---|---|
| Current Phase | Phase 3 - One-on-One Training + SEO |
| Overall Progress | 75% |
| Build Status | Passing |
| Routes Complete | 22/23 |
| Next | /academy/one-on-one + SEO schemas |

---

## PHASE HISTORY

### Phase 1 - Foundation (COMPLETE)
- TanStack Start v1 SSR routing shell
- Design tokens: Ivory, Ink, Wine, Gold, Taupe, Sand
- Global components: Nav, Footer, FloatingWhatsApp, Reveal
- Typography: Playfair Display + Inter

### Phase 2 - All Routes Built (COMPLETE)
All 22 routes built and deployed:
/ /portfolio /bridal /destination-weddings /engagement-reception
/editorial-fashion /academy /academy/masterclass /academy/two-month-professional
/academy/look-and-learn /about /pricing /testimonials /faq /contact
/privacy /terms /refund /thank-you

### Phase 2B - Brand Rebranding (COMPLETE)
- Updated all 22 route files to GKP Artistry & Makeovers
- Tagline added to Footer
- New services: HD/Airbrush, Saree Draping, Lash Application, Party/Cocktail
- Zero old brand name references (grep verified)

---

## PENDING PHASES

### Phase 3 - One-on-One Training + Services (NEXT)
- [ ] /academy/one-on-one route
- [ ] Add 4th course card to academy hub
- [ ] Footer service link
- [ ] Sitemap entry
- [ ] Airbrush/HD as homepage service card

### Phase 4 - SEO & Schema Enrichment (PENDING)
- [ ] Course schema on all academy pages
- [ ] FAQPage schema on /faq
- [ ] Review schema on /testimonials
- [ ] robots.txt
- [ ] llms.txt
- [ ] Expand FAQ with academy questions
- [ ] Improve pricing page copy

### Phase 5 - Accessibility & Performance (PENDING)
- [ ] aria-labels on all icon-only elements
- [ ] fetchpriority=high on hero LCP image
- [ ] prefers-reduced-motion audit
- [ ] Remove unused Process() component in index.tsx
- [ ] Color contrast verification

### Phase 6 - Launch QA (PENDING)
- [ ] Lighthouse >= 95 all scores
- [ ] Internal links audit
- [ ] Cross-browser testing guide
- [ ] DNS/Cloudflare deploy config

---

## KNOWN ISSUES

| Issue | Severity | Phase |
|---|---|---|
| /academy/one-on-one not built | High | 3 |
| Footer missing One-on-One link | Medium | 3 |
| No robots.txt or llms.txt | Medium | 4 |
| No Course schema on academy pages | Medium | 4 |
| LCP hero missing fetchpriority | Low | 5 |
| Unused Process() component | Low | 5 |

---

## TECHNICAL DEBT

| Item | Priority |
|---|---|
| Unused Process() in index.tsx | Low |
| TRADITIONAL[2] placeholder for Party/Cocktail | Low |
| sitemap needs /academy/one-on-one | Medium |

---

## DESIGN SYSTEM

| Token | Value |
|---|---|
| --ivory | #F7F2EA |
| --ink | #1A1614 |
| --wine | #7A1F2B |
| --gold | #B8945F |
| --taupe | #8A7B6C |
| --sand | #F0EAE0 |

Typography: Playfair Display (display) + Inter (ui)
Radius: 0px luxury sharp (2px inputs only)

---

## INFORMATION ARCHITECTURE

/ Home
/portfolio Gallery
/bridal Bridal Service
/destination-weddings Destination
/engagement-reception Events
/editorial-fashion Editorial
/academy Hub
  /academy/masterclass 5-Day
  /academy/two-month-professional 2-Month
  /academy/look-and-learn 1-Day
  /academy/one-on-one PENDING Phase 3
/about Founder
/pricing Pricing
/testimonials Reviews
/faq FAQ
/contact Contact
/privacy /terms /refund Legal
/thank-you Post-enquiry

---

## DEVELOPMENT LOG

| Date | Phase | Task | Files | Status |
|---|---|---|---|---|
| 2026-07-08 | 1 | Foundation routing + tokens | Multiple | Done |
| 2026-07-08 | 2 | All 22 route pages | src/routes/* | Done |
| 2026-07-08 | 2B | Brand rename to GKP Artistry | All routes | Done |
| 2026-07-08 | 2B | New services HD/Airbrush/Draping/Cocktail | bridal/engagement/destination | Done |

---

## AUDIT REPORT - Phase 2B

| Category | Score |
|---|---|
| Brand Consistency | 10/10 |
| Build | 10/10 |
| TypeScript | 10/10 |
| SEO Metadata | 7/10 |
| Accessibility | 7/10 |
| One-on-One Training | PENDING |

**Overall: 8.2/10**

---

## SUCCESS METRICS

- Primary KPI: Qualified WhatsApp enquiries/month
- Portfolio scroll-depth >= 70%
- Course-page CTR >= 55%
- Contact attempt rate >= 20%
- LCP < 2.0s | CLS < 0.05 | JS < 180kB | Lighthouse >= 95

---

## GIT CONVENTION

feat: new feature
fix: bug fix
refactor: code improvement
style: design/token change
docs: documentation
perf: performance
chore: maintenance

---

*Living document. Updated after every completed task.*
