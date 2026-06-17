# Signals — Current Content
Source: `app/data/forces.ts` (force detail page signals) · `app/data/generator.ts` (generated context signals) · `app/data/contexts.ts` / `additionalContexts.ts` (hand-crafted context signals)

---

## Overview

Signals appear in two different places in the app with different data structures:

### 1. Force Detail Page Signals (`forces.ts`)
Each force has a `signals` array of `ForceSignal` objects:
- `id` — unique string (e.g. `sig-ai-8`)
- `title` — signal headline
- `interpretation` — 2–3 sentence editorial commentary
- `source` — publication or organisation name
- `date` — e.g. "May 2026"
- `confidence` — High / Medium / Low
- `sourceLink` — `'#'` (placeholder)

These appear on `/forces/[id]` detail pages.

### 2. Context Page Signals (`contexts.ts`, `additionalContexts.ts`, `generator.ts`)
Each context has a `signals` array of `Signal` objects (slightly different type):
- `id` — unique string
- `title` — signal headline
- `potentialImpact` — brief impact note
- `relatedForce` — force name string (e.g. "AI Ascendance")
- `sourceName`, `publicationDate`, `sourceLink`, `confidence`

These appear on `/contexts/[id]` detail pages.

---

## Force Detail Page Signals — Complete List

### AI Ascendance (11 signals)

| # | Title | Source | Date | Confidence |
|---|---|---|---|---|
| sig-ai-1 | AI agents enter clinical and administrative workflows at scale | HIMSS | May 2026 | High |
| sig-ai-2 | Rapid growth in AI investment across all sectors | Rock Health / a16z | Jan 2026 | High |
| sig-ai-3 | AI diagnostic tools reach clinical parity in key specialties | NEJM AI | Mar 2026 | Medium |
| sig-ai-4 | AI coding assistants accelerating software development velocity by 30–50% | GitHub Research | Apr 2026 | High |
| sig-ai-5 | Frontier labs publish joint autonomous-agent safety pacts | Partnership on AI | May 2026 | Medium |
| sig-ai-6 | AI-native products displacing established technology categories | a16z Market Report | Feb 2026 | High |
| sig-ai-7 | Enterprise buyers adding AI governance requirements to procurement checklists | Gartner Enterprise IT | Mar 2026 | High |
| sig-ai-8 | Agentic AI systems entering production across research, analysis, and operations | Anthropic / OpenAI Research | May 2026 | High |
| sig-ai-9 | Synthetic media proliferating faster than detection and verification infrastructure | MIT Media Lab / Stanford Internet Observatory | Apr 2026 | High |
| sig-ai-10 | Data governance disputes emerging as AI training and deployment scale | IAPP / Future of Privacy Forum | Mar 2026 | Medium |
| sig-ai-11 | AI judgment and reasoning errors in high-stakes settings raising liability questions | Brookings / National Academy of Sciences | Feb 2026 | Medium |

### Trust Recalibration (8 signals)

| # | Title | Source | Date | Confidence |
|---|---|---|---|---|
| sig-trust-1 | Public trust in AI-assisted decisions diverges sharply by domain | Pew Research | Apr 2026 | High |
| sig-trust-2 | AI governance requirements expanding across sectors | HHS / CFPB | Apr 2026 | High |
| sig-trust-3 | Employee trust in AI tools tracks closely with involvement in deployment decisions | AMA Digital Medicine | Feb 2026 | Medium |
| sig-trust-4 | Brand backlash events accelerating when AI use is perceived as deceptive | Edelman Brand Trust 2026 | May 2026 | High |
| sig-trust-5 | Energy company transition commitments under third-party verification scrutiny | Bloomberg Green | Mar 2026 | Medium |
| sig-trust-6 | Misinformation at scale eroding the shared information environment | Reuters Institute Digital News Report | May 2026 | High |
| sig-trust-7 | Real-time reputation events compressing the window for organizational response | Edelman Trust Barometer 2026 | Apr 2026 | High |
| sig-trust-8 | Institutional trust at multi-decade lows across health, media, government, and business | Edelman Trust Barometer / Gallup | Jan 2026 | High |

### Institutional Rewiring (7 signals)

| # | Title | Source | Date | Confidence |
|---|---|---|---|---|
| sig-ir-1 | EU AI Act enforcement creating product design requirements globally | European Commission | Mar 2026 | High |
| sig-ir-2 | Mandatory climate disclosure requirements entering force in major markets | SEC / CSRD | Apr 2026 | High |
| sig-ir-3 | Government AI procurement standards raising the bar for public-sector technology | GAO / OECD AI Policy | Feb 2026 | Medium |
| sig-ir-4 | Labor union negotiations increasingly addressing AI and automation deployment terms | Bureau of Labor Statistics | Jan 2026 | Medium |
| sig-ir-5 | Governance vacuum in AI, social media, and frontier technology creating uncertainty | OECD AI Policy Observatory | May 2026 | High |
| sig-ir-6 | Political leadership volatility increasing policy uncertainty across major economies | Eurasia Group Global Risks | Apr 2026 | High |
| sig-ir-7 | Community and civic accountability expectations rising alongside formal regulatory requirements | Business Roundtable / BSR | Mar 2026 | Medium |

### Workforce Transformation (10 signals)

| # | Title | Source | Date | Confidence |
|---|---|---|---|---|
| sig-wf-1 | Persistent workforce shortages across clinical and skilled trades roles | AHA Workforce / NAM | Mar 2026 | High |
| sig-wf-2 | Growth of hybrid human-AI teams in pilot organizations | NEJM Catalyst | Apr 2026 | Medium |
| sig-wf-3 | Ambient AI documentation tools reduce documentation time by 20–35% | Nuance / Microsoft | Feb 2026 | High |
| sig-wf-4 | Major employers dropping degree requirements at scale | LinkedIn / Burning Glass | Mar 2026 | High |
| sig-wf-5 | Manufacturing skilled trades vacancy rates at multi-decade highs | National Association of Manufacturers | May 2026 | High |
| sig-wf-6 | Technology hiring shifting toward AI direction over implementation execution | Sequoia Talent Report | Jan 2026 | Medium |
| sig-wf-7 | Hybrid work now a baseline expectation, not a benefit, for knowledge workers | Microsoft Work Trend Index | Apr 2026 | High |
| sig-wf-8 | Burnout and chronic stress visible in workforce data across multiple sectors | APA Work and Well-Being Survey | Mar 2026 | High |
| sig-wf-9 | Workforce fluidity increasing as people move between employment models more frequently | MBO Partners State of Independence | Feb 2026 | Medium |
| sig-wf-10 | Corporate layoff cycles creating a cohort of experienced workers evaluating their options | Challenger Gray & Christmas | May 2026 | Medium |

### Human Augmentation (5 signals)

| # | Title | Source | Date | Confidence |
|---|---|---|---|---|
| sig-ha-1 | Human-AI collaboration outperforming solo approaches in complex judgment tasks | Harvard Business Review | Mar 2026 | Medium |
| sig-ha-2 | AR-assisted manufacturing reducing complex assembly training time by 40–60% | Deloitte Manufacturing | Feb 2026 | Medium |
| sig-ha-3 | Consumer preference for human involvement persisting in high-stakes service moments | PwC Consumer Intelligence | Apr 2026 | High |
| sig-ha-4 | Design for dignity emerging as a framework for AI deployment in human-facing contexts | Mozilla Foundation / AI Now Institute | Mar 2026 | Medium |
| sig-ha-5 | Workers expecting AI to take over routine tasks, not expand them | Workday Peakon Employee Voice | Feb 2026 | Medium |

### Economic Reconfiguration (9 signals)

| # | Title | Source | Date | Confidence |
|---|---|---|---|---|
| sig-er-1 | Industrial policy reshaping capital allocation across major economies | IMF / OECD | Apr 2026 | High |
| sig-er-2 | AI productivity gains concentrated in knowledge-intensive sectors | McKinsey Global Institute | Mar 2026 | High |
| sig-er-3 | Cost of capital remains structurally elevated relative to 2010–2020 norms | Federal Reserve / ECB | May 2026 | High |
| sig-er-4 | Supply chain regionalization accelerating across critical sectors | World Economic Forum | Feb 2026 | Medium |
| sig-er-5 | Labor market bifurcation deepening between high- and low-skill roles | Bureau of Labor Statistics / Brookings | Jan 2026 | Medium |
| sig-er-6 | Consumer confidence fragile and diverging sharply by income segment | University of Michigan Consumer Sentiment | May 2026 | High |
| sig-er-7 | Clients and customers demanding outcome-based pricing across professional and consumer services | Bain Client Demand Survey | Apr 2026 | High |
| sig-er-8 | Rising inequality becoming a political and regulatory constraint on corporate strategy | Oxfam / World Inequality Lab | Mar 2026 | Medium |
| sig-er-9 | Capital discipline tightening as investors reassert return expectations | Goldman Sachs Equity Research | Feb 2026 | High |

### Geopolitical Realignment (7 signals)

| # | Title | Source | Date | Confidence |
|---|---|---|---|---|
| sig-gr-1 | US-China technology decoupling accelerating across semiconductors, AI, and data | CSIS / Brookings | May 2026 | High |
| sig-gr-2 | European strategic autonomy ambitions reshaping procurement and infrastructure | European Commission | Apr 2026 | High |
| sig-gr-3 | Trade policy increasingly used as industrial and security instrument | WTO / Peterson Institute | Mar 2026 | High |
| sig-gr-4 | Defense and security spending increasing across NATO and Indo-Pacific | Stockholm International Peace Research Institute | Feb 2026 | High |
| sig-gr-5 | US-Iran tensions and Middle East instability creating energy and logistics risk | International Crisis Group | May 2026 | Medium |
| sig-gr-6 | Trade friction between major economies expanding beyond goods into services and data | WTO / Peterson Institute for International Economics | Apr 2026 | High |
| sig-gr-7 | Political leadership volatility increasing the half-life of strategic assumptions | Eurasia Group Political Risk | Mar 2026 | High |

### Climate & Resilience (7 signals)

| # | Title | Source | Date | Confidence |
|---|---|---|---|---|
| sig-cr-1 | Mandatory climate disclosure requirements entering force in major markets | SEC / CSRD | Apr 2026 | High |
| sig-cr-2 | Physical climate events causing measurable supply chain disruptions | Swiss Re / Munich Re | Mar 2026 | High |
| sig-cr-3 | Investor climate expectations hardening beyond voluntary commitments | BlackRock / Net Zero Asset Managers | Feb 2026 | High |
| sig-cr-4 | Greenwashing legal exposure increasing across jurisdictions | ClientEarth / GFANZ | Jan 2026 | Medium |
| sig-cr-5 | Extreme weather events causing direct operational disruption at increasing frequency | Munich Re Natural Catastrophe Statistics | Apr 2026 | High |
| sig-cr-6 | Critical infrastructure fragility exposed by compound climate and cyber events | CISA / World Economic Forum Global Risks | Mar 2026 | Medium |
| sig-cr-7 | Biodiversity and ecosystem stress entering corporate risk frameworks | TNFD / WWF | Feb 2026 | Medium |

### Resource & Energy Transition (6 signals)

| # | Title | Source | Date | Confidence |
|---|---|---|---|---|
| sig-ret-1 | Renewable energy now cheapest source of new power generation in most markets | IEA / BloombergNEF | Apr 2026 | High |
| sig-ret-2 | Critical minerals supply chains becoming a major geopolitical flashpoint | IEA Critical Minerals | Mar 2026 | High |
| sig-ret-3 | Grid infrastructure investment lagging electrification demand | NERC / European Network of Transmission System Operators | Feb 2026 | High |
| sig-ret-4 | Industrial decarbonization proving harder and more expensive than anticipated | Energy Transitions Commission | Jan 2026 | Medium |
| sig-ret-5 | Fossil fuel reserve depletion and stranded asset risk repricing in institutional portfolios | Carbon Tracker Initiative | May 2026 | High |
| sig-ret-6 | Oil reserve depletion scenarios shortening productive horizon for fossil fuel dependent strategies | IEA World Energy Outlook | Apr 2026 | Medium |

### Identity & Belonging (7 signals)

| # | Title | Source | Date | Confidence |
|---|---|---|---|---|
| sig-ib-1 | Employee expectations around meaning and belonging at work remain elevated post-pandemic | Gallup State of the Global Workplace | Mar 2026 | High |
| sig-ib-2 | Political pressure on corporate DEI programs intensifying in the US | Harvard Business Review / SHRM | Apr 2026 | High |
| sig-ib-3 | Gen Z entering the workforce with distinctively different expectations around work and belonging | Deloitte Global Millennial / Gen Z Survey | Feb 2026 | Medium |
| sig-ib-4 | Community-building becoming a primary brand growth strategy for consumer companies | Edelman Brand Trust / a16z Consumer | Jan 2026 | Medium |
| sig-ib-5 | Narrative fragmentation making shared organizational story harder to sustain | Reuters Institute / Knight Foundation | Apr 2026 | High |
| sig-ib-6 | Stakeholder expectations of value creation expanding beyond shareholders | Business Roundtable / B Team | Mar 2026 | Medium |
| sig-ib-7 | Brand and market overcrowding intensifying as AI lowers production barriers | Kantar Brand Z / Forrester | Feb 2026 | Medium |

---

## Signal Counts Summary

| Force | Signal Count |
|---|---|
| AI Ascendance | 11 |
| Trust Recalibration | 8 |
| Institutional Rewiring | 7 |
| Workforce Transformation | 10 |
| Human Augmentation | 5 |
| Economic Reconfiguration | 9 |
| Geopolitical Realignment | 7 |
| Climate & Resilience | 7 |
| Resource & Energy Transition | 6 |
| Identity & Belonging | 7 |
| **Total** | **77** |

---

## Industry Signal Pools (`generator.ts`)

Each of the 9 industries has a pool of 10 signals (one per force) used on generated context pages. They are reordered at render time so signals matching the top-ranked forces appear first.

**Industries with signal pools:** healthcare · financial-services · consumer · technology · energy · manufacturing · consumer-brand · government · consulting

For the full signal pool content per industry, see `app/data/generator.ts` → `signalPools` object.
