# Content Map — Strategic Context Engine

This document explains where all content lives in the codebase and where to apply updates.

---

## Source Files

### 1. `app/data/forces.ts`

**What it contains:** The 10 canonical forces — their names, descriptions, implications, provocations, and signals.

**What it powers:** The `/forces` index page and all `/forces/[id]` detail pages.

**Structure per force:**
- `id`, `name`, `shortLine`, `accentHex`, `momentum`, `confidence`, `lastUpdated`
- `coreThesis` — single sharp sentence: "What do we believe is true?"
- `executiveSummary` — 2–3 sentence framing paragraph
- `whatLeadersAreMissing` — 1 paragraph naming the common misread
- `whyItMatters` — 1 paragraph on strategic significance
- `strategicStakes` — `{ifLeadersGetThisRight: string[], ifLeadersGetThisWrong: string[]}`, 3 bullets each
- `drivers` — array of `ForceDriver` objects: `id` (kebab-case), `name`, `shortDescription`, `whyItMatters` (NEW — 5–7 drivers per force)
- `implications` — 5 named dimensions: `leadership`, `talent`, `operatingModel`, `growth`, `governance`
- `provocations` — 5–6 asymmetric, assumption-challenging questions
- `signals` — array of `ForceSignal` objects: `id`, `title`, `interpretation`, `source`, `date`, `confidence`, `sourceLink`
- `relatedForces`, `relevantContexts`

**Render order on `/forces/[id]` detail page:**
header → coreThesis → executiveSummary → whatLeadersAreMissing → **drivers** → whyItMatters → strategicStakes → implications → provocations → signals → relatedForces → relevantContexts

**To update:** Edit this file directly. Force detail pages are fully static and read from this file only.

**Forces defined here (10):**
1. AI Ascendance (`ai-ascendance`)
2. Trust Recalibration (`trust-recalibration`)
3. Institutional Rewiring (`institutional-rewiring`)
4. Workforce Transformation (`workforce-transformation`)
5. Human Augmentation (`human-augmentation`)
6. Economic Reconfiguration (`economic-reconfiguration`)
7. Geopolitical Realignment (`geopolitical-realignment`)
8. Climate & Resilience (`climate-and-resilience`)
9. Resource & Energy Transition (`resource-and-energy-transition`)
10. Identity & Belonging (`identity-and-belonging`)

---

### 2. `app/data/contexts.ts`

**What it contains:** 3 hand-crafted "curated" context pages with full editorial content.

**What it powers:** `/contexts/[id]` pages for these specific IDs.

**Curated context IDs:**
- `healthcare-ceo-transition-growth`
- `financial-services-ceo-transition-trust`
- `consumer-transformation-innovation`

**Structure per context:**
- `coreInsight` — single sharp sentence or short paragraph: "What is the main thing leaders need to understand about this context?"
- `whatLeadersAreMissing` — concise paragraph naming the common misread and deeper issue
- `executiveBrief` — `pullQuote`, `pullQuoteAccent`, `body1`, `body2`
- `forces` — array of 5 ranked forces, each with: `rank`, `id`, `name`, `shortLine`, `description`, `whySurfaced`, `whereShows`, `topSignals`, `activeDrivers?` (optional, kebab-case driver IDs from forces.ts; rendered in ForceAccordion; populated for consulting contexts)
- `implications` — 5 dimensions with `implication` (short) + `detail` (long)
- `provocations` — 5 numbered questions
- `signals` — 5 signal objects with `title`, `potentialImpact`, `relatedForce`, `sourceName`, `publicationDate`, `confidence`
- `snapshotChanges` — 3 force momentum notes
- `alignmentCards` — static (same across all contexts)

**Render order on `/contexts/[id]` page:**
header → snapshotChanges → coreInsight → whatLeadersAreMissing → executiveBrief → forceAccordion → strategicImplications → provocations → signalsToWatch → alignmentExercise

**To update:** Edit `contexts.ts` directly. These are the highest-fidelity editorial contexts.

---

### 3. `app/data/additionalContexts.ts`

**What it contains:** 11 additional hand-crafted contexts, same structure as `contexts.ts`.

**What it powers:** `/contexts/[id]` pages for these IDs, plus the `/saved` page listing.

**Additional context IDs (14):**
1. `consumer-brand-growth`
2. `consumer-brand-relevance`
3. `technology-company-innovation`
4. `manufacturing-workforce-transformation`
5. `healthcare-talent`
6. `energy-trust`
7. `government-transformation`
8. `financial-services-innovation`
9. `energy-transformation-resilience`
10. `consumer-brand-culture-change-relevance`
11. `manufacturing-growth-resource-pressure`
12. `consulting-growth`
13. `consulting-trust`
14. `consulting-innovation`

**To update:** Edit `additionalContexts.ts` directly. Same structure as `contexts.ts`.

---

### 4. `app/data/generator.ts`

**What it contains:** Programmatically generated content for all 9 industries × 3 situations × 4 challenges = 108 generated context pages.

**What it powers:** All `/contexts/[id]` pages NOT covered by `contexts.ts` or `additionalContexts.ts`.

**Industries (9):** healthcare, financial-services, consumer, technology, energy, manufacturing, consumer-brand, government, consulting

**Situations (3):** ceo-transition, transformation, culture-change

**Challenges (4):** growth, trust, innovation, talent

**Content tables in this file (per industry, per force):**
- `industryScore` — relevance weight 1–9
- `forceShortLines` — one sentence
- `forceDescriptions` — full paragraph
- `whereShowsMap` — 3–4 area labels
- `topSignals` — 3 signal headline strings
- `signalPools` — 10 full signal objects per industry (one per force)
- `executiveBriefBody` — `body1` + `body2` per situation per industry
- `provocations` — by challenge slug (shared across industries)
- `situationProvocation` — situation-specific override per challenge

**To update:** Find the relevant industry key in each table and edit the entry. Adding a new industry requires entries in all tables plus updating `parseContextId` and `getAllContextIds`.

---

### 5. `app/data/composerData.ts`

**What it contains:** Scoring tables and rationale text for the Apply a Lens page live force ranking.

**What it powers:** The `/lens` page — force ranking, score bars, rationale lines, signals panel, implications panel.

**Content in this file:**
- `industryScores` — 1–9 weight per force per industry (9 industries)
- `situationScores` — 1–7 weight per force per situation (4 situations)
- `challengeScores` — 1–8 weight per force per challenge (5 challenges)
- `horizonScores` — 1–8 weight per force per time horizon (3 horizons)
- `forceRationales` — contextual one-liner per force, keyed by `Industry|Challenge`
- `composerSignals` — signals shown on the lens page, keyed by industry + challenge
- `composerImplications` — implications shown on the lens page, keyed by industry + challenge

**To update scoring:** Edit the relevant row in `industryScores`, `challengeScores`, etc.

**To update rationale lines:** Add or edit entries in `forceRationales` using the key format `'Industry|Challenge'`.

---

### 6. `app/data/mockContext.ts`

**What it contains:** TypeScript type definitions only (`ContextData`, `Signal`, etc.). No editorial content.

**Fields in `ContextData`:** `id`, `name`, `headline`, `lastUpdated`, `trackedForces`, `coreInsight` (NEW), `whatLeadersAreMissing` (NEW), `executiveBrief`, plus all `ContextResult` fields.

**To update:** Only if adding new fields to the data model. Requires updating all context objects in `contexts.ts`, `additionalContexts.ts`, and `generator.ts` to match.

---

## Content Routing Logic

```
/contexts/[id] request
  → Check contexts.ts (curatedContexts) first
  → Then check additionalContexts.ts
  → Then fall back to generator.ts (parseContextId + generateContext)
  → If no match → 404
```

Hand-crafted contexts always take priority over generated ones.

---

## Where to Apply Specific Updates

| If you want to… | Edit this file |
|---|---|
| Update a force's summary, implications, or provocations | `forces.ts` |
| Add or edit drivers for a force | `forces.ts` → `drivers` array |
| Add or edit signals on a force detail page | `forces.ts` → signals array |
| Edit a curated context (healthcare, financial services, consumer) | `contexts.ts` |
| Edit an additional hand-crafted context | `additionalContexts.ts` |
| Add a new hand-crafted context | `additionalContexts.ts` (add to array) + `composerData.ts` (add to `handCraftedIds`) |
| Update how forces are scored on Apply a Lens page | `composerData.ts` → scoring tables |
| Update rationale lines on Apply a Lens force ranking | `composerData.ts` → `forceRationales` |
| Update generated context content for an industry | `generator.ts` → find the industry key in relevant tables |
| Add content for a new industry | `generator.ts` (all tables) + `composerData.ts` (type + scores + rationales) + `ContextComposer.tsx` (industries array) |
