# PhiFabric.com — Technical Launch Documentation

**Created:** March 13, 2026
**Author:** Debopam + Claude (Opus)
**Status:** LIVE at https://phifabric.com
**Purpose:** Complete technical reference for PhiFabric.com — architecture, infrastructure, design system, deployment pipeline, and future roadmap. Written to be machine-readable by Claude and human-readable by Debopam.

---

## 1. Platform Overview

**PhiFabric.com** is a New Scientist-style publication exploring theoretical physics, cosmology, IIT (Integrated Information Theory), the holographic principle, and the nature of reality. It is one half of the **Fabric** publishing family:

- **PhiFabric.com** — Physics/cosmology lens (this platform)
- **FiFabric.com** — M&A/corporate strategy lens (to be built)

The name **Φ (Phi)** carries a triple meaning: the golden ratio, the work function in solid-state physics, and IIT's measure of consciousness. **Fabric** is the substrate — the connective tissue of ideas.

---

## 2. Infrastructure Stack

### 2.1 Services & Accounts

| Service | Purpose | Account | Identifier |
|---------|---------|---------|------------|
| **Cloudflare** | DNS, domain registrar | Debopam.de@gmail.com | Account ID: `1f8e273deb40ec6143f35e068c315eda` |
| **GitHub** | Source code repository | debopamiitkgp | Repo: `debopamiitkgp/phifabric` (public) |
| **Vercel** | Hosting, CI/CD, SSL | debopamiitkgp | Team: `team_F1mTXLS9sCFRPzCv6ksGr66O` (debopamiitkgps-projects), Project ID: `prj_TWZyJp9hUg122GYZ33GACy3wnLvE` |

### 2.2 Domain Configuration

- **Domain:** `phifabric.com` (registered on Cloudflare)
- **DNS:** Cloudflare → CNAME record pointing to `cname.vercel-dns.com`
- **SSL:** Auto-provisioned by Vercel (Let's Encrypt)
- **CDN:** Vercel Edge Network

### 2.3 Deployment Pipeline

```
Local edit → git push origin main → GitHub (debopamiitkgp/phifabric)
                                        ↓
                                   Vercel webhook
                                        ↓
                              Vercel auto-build (Next.js)
                                        ↓
                              Static pages generated (SSG)
                                        ↓
                              Production deploy to Edge Network
                                        ↓
                              Live at phifabric.com (~30–40s total)
```

**Git remote URL:** `https://github.com/debopamiitkgp/phifabric.git`
**Branch:** `main`
**Auto-deploy:** Every push to `main` triggers production deployment.

---

## 3. Application Architecture

### 3.1 Framework & Dependencies

| Dependency | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2.35 | React framework (App Router) |
| React | 18.3.1 | UI library |
| React DOM | 18.3.1 | DOM rendering |

**No other dependencies.** The site is intentionally minimal — zero UI libraries, zero CSS frameworks, zero analytics (yet). All styling is hand-written CSS. All visuals are inline SVG components.

### 3.2 Build Configuration

```js
// next.config.js
const nextConfig = {
  output: 'standalone',
};
module.exports = nextConfig;
```

**Build output:** All pages are statically generated (SSG). No server-side rendering, no API routes, no dynamic pages. This means:
- Zero server cost on Vercel free tier
- Global CDN distribution
- Sub-100ms page loads

### 3.3 File Structure

```
phifabric/
├── .gitignore
├── next.config.js
├── package.json
├── package-lock.json
└── src/
    ├── app/
    │   ├── globals.css          (420 lines — full design system)
    │   ├── layout.js            (44 lines — root layout, nav, footer)
    │   ├── page.js              (42 lines — homepage)
    │   ├── article/
    │   │   └── page.js          (357 lines — debut article with inline visuals)
    │   ├── about/
    │   │   └── page.js          (35 lines — about page)
    │   └── subscribe/
    │       └── page.js          (22 lines — subscribe page)
    └── components/
        ├── LoopDepthSpectrum.js      (34 lines — Figure 1)
        ├── EntropicWorkFunction.js   (35 lines — Figure 2)
        ├── OrchestrationLatency.js   (33 lines — Figure 3)
        ├── PhaseBoundary.js          (29 lines — Figure 4)
        └── HistoricalTimeline.js     (29 lines — Figure 5)
```

**Total source:** ~1,080 lines across 11 files.

### 3.4 Page Routes

| Route | Page | Type | Content |
|-------|------|------|---------|
| `/` | Homepage | Static | Hero section, article card, subscribe CTA |
| `/article` | Debut article | Static | "The Entropy of Intelligence" with 5 inline SVG visuals |
| `/about` | About | Static | Platform description, author bio, Fabric family link |
| `/subscribe` | Subscribe | Static | Email capture form (frontend only — no backend yet) |

### 3.5 Visual Components

All 5 article visuals are React client components (`'use client'`) rendering inline SVGs. They use no external libraries — pure SVG markup with hardcoded cream-theme colors.

| Component | Figure # | Concept |
|-----------|----------|---------|
| `LoopDepthSpectrum` | 1 | Phase transition from Copilot → Six Sigma, energy cost spectrum |
| `EntropicWorkFunction` | 2 | Φ_E(t) crossover: algorithmic deflation vs. thermodynamic reality |
| `OrchestrationLatency` | 3 | Local GPU loops vs. submarine cable orchestration latency |
| `PhaseBoundary` | 4 | Sigmoidal Power User Paradox curve with economic viability threshold |
| `HistoricalTimeline` | 5 | Carnot (1824) → Shannon (1948) → Landauer (1961) → Φ_E (2026) |

---

## 4. Design System

### 4.1 Color Palette

```css
--cream:       #FAF7F2   /* Page background */
--cream-dark:  #F0EBE3   /* Card/callout backgrounds */
--dark:        #2D2A26   /* Primary text */
--dark-soft:   #3D3A36   /* Secondary text */
--warm-gray:   #8C8578   /* Tertiary text, captions */
--mid-tone:    #D4CCC0   /* Axis lines, dividers */
--light-line:  #E5DED4   /* Borders, subtle separators */
--accent-red:  #C4614E   /* Emphasis, warnings, phase boundaries */
--accent-blue: #4A7B8C   /* Links, cool-regime indicators */
--accent-gold: #B8943E   /* Highlights, crossover points, nav logo Φ */
```

### 4.2 Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Body text | Newsreader (Google Fonts) | 400 | 18px, line-height 1.75 |
| Headings | Newsreader | 600–700 | 28–48px |
| Navigation, meta, captions | Source Sans 3 (Google Fonts) | 400–700 | 12–14px |
| Equations, code | JetBrains Mono (Google Fonts) | 400 | 16px |

**Text alignment:** Body text is justified with hyphenation enabled.
**Selection color:** Translucent gold (`rgba(184, 148, 62, 0.2)`).

### 4.3 Layout

- **Content width:** 720px max (article body), 960px max (nav, wider sections)
- **Page margins:** 24px horizontal padding
- **Navigation:** Sticky top bar with blur backdrop, cream background at 92% opacity
- **Footer:** Centered "Part of the Fabric family" with links to both platforms

### 4.4 Key CSS Classes

| Class | Purpose |
|-------|---------|
| `.container` | 720px centered column (article content) |
| `.container-wide` | 960px centered column (nav, wider layouts) |
| `.article-body` | Article prose styling (justified, hyphenated, 24px paragraph spacing) |
| `.equation` | Centered mono-font equation block with cream-dark background |
| `.definition` | Left-bordered definition block (gold 3px border) |
| `.callout` | Highlighted insight box (cream-dark bg, rounded) |
| `.visual-container` | Full-bleed SVG container with border and shadow |
| `.subscribe-box` | Email capture card |
| `.article-card` | Homepage article preview card with hover shadow |

---

## 5. Deployment History

| # | Commit SHA | Message | Deployed | Status |
|---|-----------|---------|----------|--------|
| 1 | `e0f0fb2` | Initial PhiFabric site - debut article with visuals | 2026-03-13 | READY |
| 2 | `8bd02c6` | Remove inaugural tag from article, remove IB background from about | 2026-03-13 | READY (current production) |

**Vercel deployment IDs:**
- v1: `dpl_38U4G2jVDEfw9Z5kkLSxU9MPKEZG`
- v2: `dpl_GSWwFQLZooBz72ft97C2tGr6djmH` (current)

**Vercel URLs:**
- Production: `https://phifabric.vercel.app`
- Custom domain: `https://phifabric.com`
- Branch alias: `phifabric-git-main-debopamiitkgps-projects.vercel.app`

---

## 6. Content Architecture

### 6.1 Debut Article: "The Entropy of Intelligence"

**Thesis:** Autonomous AI reasoning is a thermodynamic process — a physical phase transition — not a software abstraction. The zero-marginal-cost doctrine of the SaaS era is physically impossible for autonomous agents.

**Key original concepts introduced:**

| Concept | Definition | Symbol |
|---------|-----------|--------|
| **Loop Depth** | Number of autonomous iterative cycles a reasoning model executes to verify/correct output | — |
| **Entropic Work Function** | First-order model of computation cost: minimum thermodynamic investment to extract a verified answer from a probabilistic system | Φ_E(t) = E(t) × L(t) |
| **Latency-Loop Drag** | Cumulative orchestration latency from submarine cable round-trips during distributed autonomous workflows | — |
| **AI Jevons Paradox** | As unit cost of reasoning drops, enterprises demand exponentially deeper loops, swallowing efficiency gains | δ |
| **Split-Brain Orchestration** | Architecture routing sensitive data locally, anonymized reasoning offshore | — |
| **Power User Paradox** | Sigmoidal cost curve where heaviest users trigger nonlinear energy costs exceeding economic return | — |
| **Agentic Efficiency Ratio (AER)** | Verifiable output per unit of thermodynamic input (analogue to coefficient of performance) | — |
| **Standardized Cognitive Work Unit (SCWU)** | Unit indexing autonomous agent output to irreducible physical energy cost | — |
| **Thinking Budgets** | Hard thermodynamic caps on Loop Depth | — |

### 6.2 Editorial Decisions Made During Development

| Decision | Reasoning |
|----------|-----------|
| Physics-first framing (not finance) | Article lives on PhiFabric; finance implications follow as "so what" |
| Landauer's Limit as philosophical anchor only | Current silicon is ~10⁶ above Landauer's floor; proximate constraints are rack density and cooling |
| Orchestration latency (not per-loop latency) | Monte Carlo searches execute locally on GPU clusters; cable latency applies to orchestration calls |
| Entropic Work Function (Φ_E) as equation name | Bridges information theory and statistical mechanics; Φ symbol connects to PhiFabric brand |
| Equation presented as first-order approximation | E(t) and L(t) are coupled via feedback; honest caveat builds credibility with physics audience |
| Added o1/reasoning model empirical validation | OpenAI o-series, Anthropic extended thinking, DeepSeek R1 validate Loop Depth thesis empirically |
| Prologue removed | Read as internal notes; main article is stronger without it |

---

## 7. What's NOT Built Yet

### 7.1 PhiFabric — Remaining Work

| Item | Priority | Notes |
|------|----------|-------|
| Email capture backend | High | Subscribe form is frontend-only; needs Mailchimp, ConvertKit, Resend, or similar integration |
| "The Journey" section | Medium | Personal intellectual timeline: Newton → Block Universe → IIT → Holographic Principle |
| Article tagging/categories | Medium | Tags like "Thermodynamics", "Computation", "Cosmology" |
| SEO metadata per page | Medium | Open Graph images, Twitter cards, structured data |
| Analytics | Low | Plausible or Umami (privacy-respecting) recommended over Google Analytics |
| RSS feed | Low | For subscribers who prefer RSS |
| Dark mode toggle | Low | Design system supports it; just needs CSS variable swap |

### 7.2 FiFabric — Full Build Required

| Item | Notes |
|------|-------|
| Site architecture | McKinsey Quarterly style: Insights, Models & Tools, About, Subscribe |
| Excel download infrastructure | Gated with email (soft gate: one free, then email required) |
| Drip email sequence | Email 1: model download, Email 2: usage guide, Email 3: next article preview |
| Debut article | Needs reframing from the original draft (finance-first lens for FiFabric audience) |
| Design system | Same typography/grid as PhiFabric, different color palette (warm/authoritative) |

---

## 8. How to Make Changes

### 8.1 Editing Content

The fastest path for content edits:

1. **Claude pushes directly:** Give Claude the GitHub PAT token. Claude edits files in the container, commits, and pushes. Vercel auto-deploys in ~30s.

2. **Manual edit:** Clone the repo locally, edit, push.

```bash
git clone https://github.com/debopamiitkgp/phifabric.git
cd phifabric
# Edit files
git add -A && git commit -m "description" && git push
# Vercel auto-deploys
```

### 8.2 Adding a New Article

1. Create `src/app/[slug]/page.js` (e.g., `src/app/holographic-principle/page.js`)
2. Add article content using the same CSS classes as the debut article
3. Create any SVG visual components in `src/components/`
4. Add an article card to `src/app/page.js` (homepage)
5. Push to main → auto-deploys

### 8.3 Key File Locations

| To change... | Edit this file |
|--------------|---------------|
| Navigation links | `src/app/layout.js` |
| Homepage content | `src/app/page.js` |
| Article text | `src/app/article/page.js` |
| About page | `src/app/about/page.js` |
| Colors, typography, spacing | `src/app/globals.css` (CSS variables at top) |
| Any inline SVG visual | `src/components/[ComponentName].js` |
| Build configuration | `next.config.js` |
| Dependencies | `package.json` |

---

## 9. Credentials & Access (Rotate After Use)

| Service | Credential Type | Notes |
|---------|----------------|-------|
| GitHub PAT | `ghp_...` (classic token, `repo` scope) | Used for CLI push; rotate after session |
| Cloudflare | Logged in via Debopam.de@gmail.com | MCP integration active |
| Vercel | Logged in via debopamiitkgp | GitHub integration installed, auto-deploy enabled |

**IMPORTANT:** The GitHub PAT used during this session should be revoked at https://github.com/settings/tokens and replaced if needed for future sessions.

---

## 10. Session Log — March 13, 2026

Summary of what was accomplished in this Claude Opus session:

1. **Brainstormed** site architecture for both PhiFabric and FiFabric (Claude + Gemini 3 Flash multi-model)
2. **Brainstormed** 5 debut article topics per platform
3. **Reviewed** existing draft of "The Entropy of Intelligence" (Claude + Gemini editorial review)
4. **Rewrote** article opening (Landauer-first, physics-leads framing)
5. **Added** o1/reasoning model empirical validation paragraph
6. **Fixed** Landauer's Limit misapplication (philosophical anchor, not mathematical floor)
7. **Fixed** Latency-Loop Drag (orchestration latency, not per-loop)
8. **Renamed** "Cognitive COGS" → **Entropic Work Function (Φ_E)** (Claude + Gemini consensus)
9. **Rewrote** final 3 paragraphs (Power User Paradox as phase boundary, AER as heat engine analogue)
10. **Built** complete Next.js 14 site with cream design system
11. **Created** 5 inline SVG visual components
12. **Pushed** to GitHub (`debopamiitkgp/phifabric`)
13. **Deployed** to Vercel (auto-detected Next.js, SSG)
14. **Connected** custom domain `phifabric.com`
15. **Pushed** post-launch edits (removed inaugural tag, removed IB background from about)
16. **Generated** Word document of finalized article (v2)

---

*This document should be stored in the phifabric repo as `TECHNICAL.md` and updated with each significant change.*
