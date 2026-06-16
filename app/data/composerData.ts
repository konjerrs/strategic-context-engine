// Data powering the Context Composer's live force ranking and supporting modules.
// Covers all 10 forces across all 8 industries, 4 situations, and 5 challenges.

export type ComposerIndustry =
  | 'Healthcare'
  | 'Financial Services'
  | 'Consumer'
  | 'Consumer Brand'
  | 'Technology Company'
  | 'Manufacturing'
  | 'Energy'
  | 'Government'

export type ComposerSituation =
  | 'CEO Transition'
  | 'Transformation'
  | 'Culture Change'
  | 'Workforce Transformation'

export type ComposerChallenge =
  | 'Growth'
  | 'Trust'
  | 'Innovation'
  | 'Talent'
  | 'Relevance'

export type ComposerForceId =
  | 'ai-ascendance'
  | 'workforce-transformation'
  | 'trust-recalibration'
  | 'human-augmentation'
  | 'institutional-rewiring'
  | 'economic-reconfiguration'
  | 'geopolitical-realignment'
  | 'climate-and-resilience'
  | 'resource-and-energy-transition'
  | 'identity-and-belonging'

export type ComposerHorizon = '0–6 Months' | '6–12 Months' | '12–24 Months'

// ─── Force display metadata ───────────────────────────────────────────────────

export const forceDisplayMeta: Record<ComposerForceId, { name: string; accentHex: string }> = {
  'ai-ascendance':               { name: 'AI Ascendance',                accentHex: '#7c3aed' },
  'workforce-transformation':    { name: 'Workforce Transformation',     accentHex: '#ea580c' },
  'trust-recalibration':         { name: 'Trust Recalibration',          accentHex: '#059669' },
  'human-augmentation':          { name: 'Human Augmentation',           accentHex: '#a78bfa' },
  'institutional-rewiring':      { name: 'Institutional Rewiring',       accentHex: '#b45309' },
  'economic-reconfiguration':    { name: 'Economic Reconfiguration',     accentHex: '#0369a1' },
  'geopolitical-realignment':    { name: 'Geopolitical Realignment',     accentHex: '#be123c' },
  'climate-and-resilience':      { name: 'Climate & Resilience',         accentHex: '#047857' },
  'resource-and-energy-transition': { name: 'Resource & Energy Transition', accentHex: '#d97706' },
  'identity-and-belonging':      { name: 'Identity & Belonging',         accentHex: '#9333ea' },
}

// ─── Scoring tables ───────────────────────────────────────────────────────────
// Three dimensions summed to produce a raw relevance score.
// Scale: 1 (not relevant) → 8 (defining force for this dimension).
// Scores are calibrated so each force dominates where it is genuinely decisive,
// and falls appropriately in contexts where it is background rather than foreground.

type ChallengeRow = Record<ComposerChallenge, number>
type IndustryRow  = Record<ComposerIndustry,  number>
type SituationRow = Record<ComposerSituation, number>

const challengeScores: Record<ComposerForceId, ChallengeRow> = {
  // Original 5
  'ai-ascendance':            { Growth: 5, Innovation: 8, Talent: 2, Trust: 1, Relevance: 6 },
  'workforce-transformation': { Talent: 8, Growth: 3,    Innovation: 3, Trust: 2, Relevance: 2 },
  'trust-recalibration':      { Trust: 8, Talent: 2,    Growth: 2, Innovation: 2, Relevance: 4 },
  'human-augmentation':       { Innovation: 6, Talent: 5, Growth: 3, Trust: 2, Relevance: 5 },
  'institutional-rewiring':   { Trust: 5, Innovation: 3, Growth: 2, Talent: 2, Relevance: 2 },
  // New 5
  // Economic Reconfiguration: most relevant to growth and innovation; background for talent
  'economic-reconfiguration':    { Growth: 6, Innovation: 5, Trust: 3, Talent: 3, Relevance: 4 },
  // Geopolitical: acute for growth (market access) and innovation (tech stack), low for talent
  'geopolitical-realignment':    { Growth: 5, Innovation: 6, Trust: 4, Talent: 2, Relevance: 3 },
  // Climate: dominant for trust (credibility) and growth (transition opportunity), low for relevance
  'climate-and-resilience':      { Trust: 6, Growth: 5, Innovation: 4, Talent: 2, Relevance: 2 },
  // Resource & Energy: acute for growth and innovation; low for talent-only contexts
  'resource-and-energy-transition': { Growth: 6, Innovation: 5, Trust: 4, Talent: 2, Relevance: 2 },
  // Identity & Belonging: dominant for talent and relevance; lower for growth and innovation
  'identity-and-belonging':      { Talent: 7, Relevance: 6, Trust: 4, Growth: 2, Innovation: 2 },
}

const situationScores: Record<ComposerForceId, SituationRow> = {
  // Original 5
  'ai-ascendance':            { Transformation: 5, 'CEO Transition': 4, 'Culture Change': 1, 'Workforce Transformation': 2 },
  'workforce-transformation': { 'Workforce Transformation': 7, 'Culture Change': 5, Transformation: 4, 'CEO Transition': 3 },
  'trust-recalibration':      { 'CEO Transition': 5, 'Culture Change': 4, Transformation: 2, 'Workforce Transformation': 3 },
  'human-augmentation':       { Transformation: 5, 'CEO Transition': 3, 'Culture Change': 3, 'Workforce Transformation': 4 },
  'institutional-rewiring':   { 'CEO Transition': 4, 'Culture Change': 4, Transformation: 4, 'Workforce Transformation': 4 },
  // New 5
  // Economic Reconfiguration: most active during transformations and CEO transitions
  'economic-reconfiguration':    { Transformation: 6, 'CEO Transition': 5, 'Culture Change': 2, 'Workforce Transformation': 3 },
  // Geopolitical: relevant at transformation and CEO transition; lower for culture/workforce focus
  'geopolitical-realignment':    { Transformation: 6, 'CEO Transition': 5, 'Culture Change': 2, 'Workforce Transformation': 2 },
  // Climate: most active during transformation; relevant at CEO transition
  'climate-and-resilience':      { Transformation: 6, 'CEO Transition': 4, 'Culture Change': 3, 'Workforce Transformation': 2 },
  // Resource & Energy: transformation-led; CEO transition creates urgency
  'resource-and-energy-transition': { Transformation: 7, 'CEO Transition': 4, 'Culture Change': 2, 'Workforce Transformation': 2 },
  // Identity & Belonging: most acute in culture change and workforce transformation
  'identity-and-belonging':      { 'Culture Change': 7, 'Workforce Transformation': 6, 'CEO Transition': 4, Transformation: 3 },
}

const industryScores: Record<ComposerForceId, IndustryRow> = {
  // Original 5
  'ai-ascendance': {
    'Technology Company': 8, Healthcare: 5, Consumer: 4, 'Consumer Brand': 4,
    'Financial Services': 4, Manufacturing: 3, Energy: 2, Government: 2,
  },
  'workforce-transformation': {
    Healthcare: 6, Manufacturing: 7, 'Technology Company': 3, 'Financial Services': 3,
    Consumer: 3, 'Consumer Brand': 3, Energy: 5, Government: 5,
  },
  'trust-recalibration': {
    'Financial Services': 7, Healthcare: 5, Consumer: 4, 'Consumer Brand': 6,
    'Technology Company': 3, Manufacturing: 2, Energy: 6, Government: 6,
  },
  'human-augmentation': {
    'Technology Company': 6, Healthcare: 5, Consumer: 3, 'Consumer Brand': 6,
    'Financial Services': 3, Manufacturing: 5, Energy: 2, Government: 2,
  },
  'institutional-rewiring': {
    'Financial Services': 6, Healthcare: 4, 'Technology Company': 4, Consumer: 2,
    'Consumer Brand': 2, Manufacturing: 4, Energy: 7, Government: 8,
  },
  // New 5
  // Economic Reconfiguration: most acute in Financial Services and Manufacturing
  'economic-reconfiguration': {
    'Financial Services': 7, Manufacturing: 7, Energy: 6, Government: 5,
    Healthcare: 4, 'Technology Company': 5, Consumer: 4, 'Consumer Brand': 3,
  },
  // Geopolitical Realignment: most acute in Energy, Manufacturing, Government, Technology
  'geopolitical-realignment': {
    Energy: 7, Manufacturing: 7, Government: 7, 'Technology Company': 6,
    'Financial Services': 5, Healthcare: 3, Consumer: 3, 'Consumer Brand': 2,
  },
  // Climate & Resilience: most acute in Energy, Manufacturing, Government; lower in consumer-facing
  'climate-and-resilience': {
    Energy: 8, Manufacturing: 6, Government: 6, 'Financial Services': 5,
    Healthcare: 3, 'Technology Company': 3, Consumer: 4, 'Consumer Brand': 3,
  },
  // Resource & Energy Transition: dominant in Energy and Manufacturing; significant in Government
  'resource-and-energy-transition': {
    Energy: 9, Manufacturing: 7, Government: 6, 'Financial Services': 4,
    Healthcare: 3, 'Technology Company': 3, Consumer: 3, 'Consumer Brand': 2,
  },
  // Identity & Belonging: most acute in Consumer Brand, Healthcare, Consumer; lower in Energy
  'identity-and-belonging': {
    'Consumer Brand': 7, Healthcare: 6, Consumer: 6, Government: 5,
    'Financial Services': 4, 'Technology Company': 5, Manufacturing: 4, Energy: 2,
  },
}

// ─── Contextual rationale lines ────────────────────────────────────────────────

type RationaleKey = `${ComposerIndustry}|${ComposerChallenge}`

const forceRationales: Record<
  ComposerForceId,
  Partial<Record<RationaleKey, string>> & { default: string }
> = {
  'ai-ascendance': {
    'Healthcare|Growth':              'Rewrites the cost and capacity to serve patients.',
    'Healthcare|Innovation':          'Unlocks new care models and clinical decision support at scale.',
    'Healthcare|Talent':              'Augments overloaded clinical teams and shrinks documentation burden.',
    'Financial Services|Trust':       'Creates the accountability gap that now defines the CEO mandate.',
    'Financial Services|Innovation':  'Reshapes how financial decisions are made and explained.',
    'Consumer Brand|Growth':          'Commoditizes execution while raising the premium on creative strategy.',
    'Consumer Brand|Relevance':       'Enables hyper-personalized brand experiences at previously impossible scale.',
    'Technology Company|Innovation':  'Accelerates every product, workflow, and competitive position.',
    'Manufacturing|Growth':           'Unlocks capacity and quality gains without proportional headcount.',
    'Government|Innovation':          'Enables public-service delivery at new speed and scale.',
    default: 'Accelerates capability across every dimension of this context.',
  },
  'workforce-transformation': {
    'Healthcare|Growth':         'Persistent shortages reshape the operating model.',
    'Healthcare|Talent':         'Structural shortages demand fundamental role redesign.',
    'Manufacturing|Talent':      'Skilled trades shortages are at multi-decade highs.',
    'Manufacturing|Growth':      'Workforce constraints are the binding limit on production capacity.',
    'Financial Services|Trust':  'AI changes what financial expertise means and who holds it.',
    'Consumer|Talent':           'Frontline role redesign is the defining operational challenge.',
    'Government|Talent':         'Capability gaps and succession pressure require urgent action.',
    'Energy|Talent':             'Technical skills shortages compound as the transition accelerates.',
    default: 'Skills, contracts, and the meaning of work are under active redesign.',
  },
  'trust-recalibration': {
    'Healthcare|Growth':          "Becomes the new CEO's scarcest, most decisive asset.",
    'Financial Services|Trust':   'The defining constraint and most powerful competitive differentiator.',
    'Consumer Brand|Growth':      'Brand trust is the currency AI cannot generate.',
    'Consumer Brand|Relevance':   'Consumer skepticism toward AI-generated content is growing and measurable.',
    'Energy|Trust':               'Commitment credibility is under unprecedented scrutiny.',
    'Government|Trust':           'Public confidence in institutions requires visible, earned accountability.',
    default: 'Authority is migrating from assertion to demonstrated proof.',
  },
  'human-augmentation': {
    'Healthcare|Growth':              'Redraws the line between clinician and machine.',
    'Healthcare|Innovation':          'Unlocks outcomes neither human nor AI could achieve alone.',
    'Consumer Brand|Growth':          'Human creative judgment becomes the scarcest, most valuable input.',
    'Consumer Brand|Relevance':       'Authentic human voice is what AI-generated content cannot replicate.',
    'Technology Company|Innovation':  'Redefines the relationship between engineers, products, and AI systems.',
    'Manufacturing|Growth':           'AR-assisted workers unlock capacity without proportional training time.',
    default: 'The line between tool and self is thinning — with strategic implications.',
  },
  'institutional-rewiring': {
    'Healthcare|Growth':         'Governance and the regulatory floor are being reset.',
    'Financial Services|Trust':  'Compliance frameworks are being rewritten faster than expected.',
    'Energy|Trust':              'Regulatory frameworks are actively reshaping the energy transition.',
    'Government|Innovation':     'Legacy governance structures are the primary barrier to progress.',
    'Government|Trust':          'The accountability architecture of public institutions is under revision.',
    'Manufacturing|Growth':      'Labor and regulatory frameworks constrain automation pace.',
    default: 'The architecture of accountability is being actively rewritten.',
  },
  'economic-reconfiguration': {
    'Financial Services|Growth':     'Capital reallocation and industrial policy are redrawing competitive boundaries.',
    'Financial Services|Trust':      'Structural economic shifts change who has pricing power and why.',
    'Manufacturing|Growth':          'Input costs, capital access, and supply chain economics are all shifting.',
    'Manufacturing|Talent':          'AI productivity gains are concentrating returns in ways that reshape workforce economics.',
    'Energy|Growth':                 'Industrial policy and capital flows are reshaping the energy investment landscape.',
    'Government|Innovation':         'Fiscal constraints and economic restructuring limit the scope of public investment.',
    'Technology Company|Growth':     'Platform economics and capital efficiency assumptions are being stress-tested.',
    default: 'Value creation, capital, and productivity are being restructured simultaneously.',
  },
  'geopolitical-realignment': {
    'Energy|Trust':               'Energy security and transition commitments are now inseparable from geopolitics.',
    'Energy|Growth':              'Trade policy and industrial strategy are reshaping the energy investment landscape.',
    'Manufacturing|Growth':       'Supply chain regionalization is changing the cost and geography of production.',
    'Government|Innovation':      'Geopolitical pressure is accelerating sovereign capability-building.',
    'Government|Trust':           'Alliance dynamics are reshaping how institutions demonstrate reliability.',
    'Technology Company|Innovation': 'Technology decoupling is bifurcating markets, standards, and investment flows.',
    'Financial Services|Growth':  'Capital flows and market access are increasingly shaped by geopolitical alignment.',
    default: 'Power, alliances, and trade are being reordered with direct strategic consequences.',
  },
  'climate-and-resilience': {
    'Energy|Trust':               'The credibility of transition commitments is under third-party scrutiny.',
    'Energy|Growth':              'Climate transition is the defining investment and operating challenge.',
    'Manufacturing|Growth':       'Physical climate risk and regulatory requirements are reshaping production economics.',
    'Government|Trust':           'Climate accountability is becoming a core dimension of institutional credibility.',
    'Financial Services|Trust':   'Climate disclosure and investor expectations are hardening into compliance requirements.',
    'Consumer|Growth':            'Consumer preference for climate-credible brands is becoming measurable and material.',
    default: 'Climate pressure, risk, and adaptation are reshaping long-term strategic assumptions.',
  },
  'resource-and-energy-transition': {
    'Energy|Growth':              'The energy system is being rebuilt — at speed, at scale, under geopolitical pressure.',
    'Energy|Trust':               'Transition credibility depends on observable action, not stated ambition.',
    'Manufacturing|Growth':       'Energy cost exposure and electrification readiness are becoming competitive variables.',
    'Government|Innovation':      'Grid infrastructure and critical minerals are now strategic sovereign priorities.',
    'Financial Services|Growth':  'Energy transition financing is creating new market dynamics and risk categories.',
    default: 'Energy systems, critical resources, and infrastructure are shifting with strategic implications for every sector.',
  },
  'identity-and-belonging': {
    'Consumer Brand|Growth':      'Brand communities built on genuine belonging outperform paid media at every stage.',
    'Consumer Brand|Relevance':   'Authenticity and representation are now measurable drivers of brand relevance.',
    'Healthcare|Talent':          'Belonging determines whether clinical staff stay, perform, and advocate.',
    'Consumer|Relevance':         'Consumer loyalty increasingly tracks to whether people feel seen by the brands they choose.',
    'Government|Trust':           'Institutional credibility requires visible representation and genuine responsiveness.',
    'Technology Company|Talent':  'The most capable technical talent evaluates employers on values alignment and belonging.',
    default: "People's expectations around meaning, representation, and belonging are changing the talent and brand landscape.",
  },
}

function getRationale(forceId: ComposerForceId, industry: ComposerIndustry, challenge: ComposerChallenge): string {
  const key: RationaleKey = `${industry}|${challenge}`
  return forceRationales[forceId][key] ?? forceRationales[forceId].default
}

// ─── Horizon scores ───────────────────────────────────────────────────────────
// Weight forces by how soon they manifest operationally vs. strategically.
// 0–6 Months: immediate, acute pressures (trust, compliance, talent gaps).
// 6–12 Months: near-term planning window — AI deployment, workforce redesign.
// 12–24 Months: strategic horizon — structural forces, competitive repositioning.

type HorizonRow = Record<ComposerHorizon, number>

const horizonScores: Record<ComposerForceId, HorizonRow> = {
  'ai-ascendance':               { '0–6 Months': 3, '6–12 Months': 6, '12–24 Months': 8 },
  'workforce-transformation':    { '0–6 Months': 7, '6–12 Months': 6, '12–24 Months': 5 },
  'trust-recalibration':         { '0–6 Months': 8, '6–12 Months': 6, '12–24 Months': 5 },
  'human-augmentation':          { '0–6 Months': 3, '6–12 Months': 5, '12–24 Months': 7 },
  'institutional-rewiring':      { '0–6 Months': 6, '6–12 Months': 5, '12–24 Months': 5 },
  'economic-reconfiguration':    { '0–6 Months': 3, '6–12 Months': 5, '12–24 Months': 7 },
  'geopolitical-realignment':    { '0–6 Months': 3, '6–12 Months': 4, '12–24 Months': 6 },
  'climate-and-resilience':      { '0–6 Months': 2, '6–12 Months': 4, '12–24 Months': 6 },
  'resource-and-energy-transition': { '0–6 Months': 2, '6–12 Months': 4, '12–24 Months': 6 },
  'identity-and-belonging':      { '0–6 Months': 6, '6–12 Months': 5, '12–24 Months': 4 },
}

// ─── Scoring function ──────────────────────────────────────────────────────────

export type RankedForce = {
  id: ComposerForceId
  name: string
  accentHex: string
  rationale: string
  score: number    // 55–99 display score
  rawScore: number
}

const allForceIds: ComposerForceId[] = [
  'ai-ascendance',
  'workforce-transformation',
  'trust-recalibration',
  'human-augmentation',
  'institutional-rewiring',
  'economic-reconfiguration',
  'geopolitical-realignment',
  'climate-and-resilience',
  'resource-and-energy-transition',
  'identity-and-belonging',
]

export function rankForcesForContext(
  industry: ComposerIndustry,
  situation: ComposerSituation,
  challenge: ComposerChallenge,
  horizon: ComposerHorizon = '6–12 Months'
): RankedForce[] {
  const scored = allForceIds.map((id) => ({
    id,
    raw:
      challengeScores[id][challenge] +
      situationScores[id][situation] +
      industryScores[id][industry] +
      horizonScores[id][horizon],
  }))

  const maxRaw = Math.max(...scored.map((s) => s.raw))
  const minRaw = Math.min(...scored.map((s) => s.raw))
  const range  = maxRaw - minRaw || 1

  return scored
    .sort((a, b) => b.raw - a.raw)
    .map((s) => ({
      id: s.id,
      name: forceDisplayMeta[s.id].name,
      accentHex: forceDisplayMeta[s.id].accentHex,
      rationale: getRationale(s.id, industry, challenge),
      rawScore: s.raw,
      // Map to a 55–96 display range, preserving spread between forces
      score: Math.round(55 + ((s.raw - minRaw) / range) * 41),
    }))
}

// ─── Implications ─────────────────────────────────────────────────────────────

type ImplicationKey = `${ComposerIndustry}|${ComposerChallenge}`

type ComposerImplication = {
  leadership: string
  talent: string
  operatingModel: string
  governance: string
}

const defaultImplication: ComposerImplication = {
  leadership:     'Leaders may need to become the chief interpreter of how these forces interact.',
  talent:         'The workforce strategy may need to shift from filling roles to redesigning work.',
  operatingModel: 'The organization may need to redesign workflows rather than optimize existing processes.',
  governance:     'AI, workforce pressure, and trust dynamics may require clearer accountability structures.',
}

const implicationsByKey: Partial<Record<ImplicationKey, ComposerImplication>> = {
  'Healthcare|Growth': {
    leadership:     'A new CEO may need to become the chief interpreter of how these forces interact.',
    talent:         'The workforce strategy may need to shift from filling roles to redesigning work.',
    operatingModel: 'The organization may need to redesign workflows rather than optimize existing processes.',
    governance:     'AI, workforce pressure, and trust dynamics may require clearer accountability structures.',
  },
  'Financial Services|Trust': {
    leadership:     'A new CEO may need to make trust the organizing principle of every major decision.',
    talent:         'The workforce strategy may need to shift from AI literacy to AI judgment.',
    operatingModel: 'Operating models may need to embed trust accountability at every AI decision point.',
    governance:     'AI governance may need to become a board-level capability, not a compliance function.',
  },
  'Consumer Brand|Growth': {
    leadership:     'Leadership may need to define what kind of relationship the brand wants with its audience.',
    talent:         'The most valuable capability may be directing AI toward culturally resonant outputs.',
    operatingModel: 'The operating model may need to be rebuilt around human-AI creative collaboration.',
    governance:     'Governance may need to address transparency in AI-generated content proactively.',
  },
  'Consumer Brand|Relevance': {
    leadership:     'Leaders may need to make authentic belonging — not reach — the measure of brand health.',
    talent:         'Cultural intelligence and community-building are becoming scarce and strategically decisive capabilities.',
    operatingModel: 'Brand operations may need to shift from content production volume to human-directed creative quality.',
    governance:     'AI-generated content governance may need clear internal standards before external pressure forces them.',
  },
  'Energy|Trust': {
    leadership:     'Leaders may need to make commitment credibility the organizing principle of strategy.',
    talent:         'Technical and policy expertise at the intersection of transition and regulation is scarce.',
    operatingModel: 'Operating models may need to reflect transition commitments in observable, auditable ways.',
    governance:     'Third-party verification and board-level climate accountability are rising expectations.',
  },
  'Energy|Growth': {
    leadership:     'Leaders may need to develop fluency in how geopolitics and industrial policy shape the investment landscape.',
    talent:         'Engineering, grid, and project management talent is acutely scarce in the transition economy.',
    operatingModel: 'Capital allocation may need to prioritize resilience and optionality alongside returns.',
    governance:     'Board-level oversight of resource, transition, and geopolitical risk is becoming an expectation.',
  },
  'Manufacturing|Growth': {
    leadership:     'Leaders may need to redesign operating assumptions around constrained workforce and supply chains.',
    talent:         'Skilled trades shortages are structural — the solution is augmentation and redesign, not just recruiting.',
    operatingModel: 'The operating model may need to be rebuilt around human-AI collaboration on the shop floor.',
    governance:     'Labor relations and regulatory compliance are increasingly entangled with strategic decisions.',
  },
  'Government|Innovation': {
    leadership:     'Leaders may need to navigate legacy governance structures while enabling new capability.',
    talent:         'The workforce strategy may need to shift from headcount to capability and digital fluency.',
    operatingModel: 'The operating model may need to be redesigned around citizen-centric service delivery.',
    governance:     'AI and data governance frameworks need to be built before deployment, not after.',
  },
  'Government|Trust': {
    leadership:     'Leaders may need to make visible accountability — not just performance — the core of the institutional mandate.',
    talent:         'The capability to engage authentically across communities is as scarce as technical expertise.',
    operatingModel: 'Operating models may need to embed transparency mechanisms that citizens can observe directly.',
    governance:     'Governance reform may need to address structural accountability gaps, not just communications posture.',
  },
  'Technology Company|Innovation': {
    leadership:     'Leaders may need to develop clear positions on AI governance before regulators set them externally.',
    talent:         'The most valuable technical talent evaluates employers on values, governance, and AI strategy alignment.',
    operatingModel: 'The operating model may need to be rebuilt around human-AI collaboration at the product and engineering layer.',
    governance:     'Geopolitical and regulatory exposure may require governance infrastructure that anticipates bifurcated markets.',
  },
  'Healthcare|Talent': {
    leadership:     'Leaders may need to articulate a credible long-term vision for what work means in an augmented clinical environment.',
    talent:         'Belonging and meaning are becoming decisive in whether clinical staff stay — compensation alone is insufficient.',
    operatingModel: 'Role redesign around AI augmentation may be the most durable path to workforce sustainability.',
    governance:     'AI-assisted care governance requires clear accountability structures before incidents force them.',
  },
}

export function getComposerImplications(
  industry: ComposerIndustry,
  challenge: ComposerChallenge
): ComposerImplication {
  const key: ImplicationKey = `${industry}|${challenge}`
  return implicationsByKey[key] ?? defaultImplication
}

// ─── Signals ──────────────────────────────────────────────────────────────────

export type ComposerSignal = {
  date: string
  title: string
  relatedForce: string
  accentHex: string
}

const signalsByKey: Partial<Record<ImplicationKey, ComposerSignal[]>> = {
  'Healthcare|Growth': [
    { date: 'May 2026', title: 'AI agents enter clinical and administrative workflows', relatedForce: 'AI Ascendance', accentHex: '#7c3aed' },
    { date: 'Apr 2026', title: 'Expansion of AI governance requirements in healthcare', relatedForce: 'Institutional Rewiring', accentHex: '#b45309' },
    { date: 'Mar 2026', title: 'Persistent workforce shortages continue across clinical roles', relatedForce: 'Workforce Transformation', accentHex: '#ea580c' },
  ],
  'Healthcare|Talent': [
    { date: 'May 2026', title: 'Ambient AI documentation tools reduce administrative burden by 30%', relatedForce: 'Human Augmentation', accentHex: '#a78bfa' },
    { date: 'Apr 2026', title: 'Persistent vacancy rates across nursing and primary care roles', relatedForce: 'Workforce Transformation', accentHex: '#ea580c' },
    { date: 'Feb 2026', title: 'Employee trust in AI tools tracks with involvement in deployment decisions', relatedForce: 'Trust Recalibration', accentHex: '#059669' },
  ],
  'Financial Services|Trust': [
    { date: 'May 2026', title: 'Regulatory frameworks targeting algorithmic lending bias', relatedForce: 'Institutional Rewiring', accentHex: '#b45309' },
    { date: 'Apr 2026', title: 'Rapid growth of AI in consumer lending and credit decisioning', relatedForce: 'AI Ascendance', accentHex: '#7c3aed' },
    { date: 'Mar 2026', title: 'Customer demand for human explanation of AI decisions growing', relatedForce: 'Trust Recalibration', accentHex: '#059669' },
  ],
  'Financial Services|Growth': [
    { date: 'May 2026', title: 'Industrial policy reshaping capital allocation across major economies', relatedForce: 'Economic Reconfiguration', accentHex: '#0369a1' },
    { date: 'Apr 2026', title: 'Agentic AI entering wealth management advisory workflows', relatedForce: 'AI Ascendance', accentHex: '#7c3aed' },
    { date: 'Mar 2026', title: 'Cost of capital remains structurally elevated relative to 2010–2020 norms', relatedForce: 'Economic Reconfiguration', accentHex: '#0369a1' },
  ],
  'Consumer Brand|Growth': [
    { date: 'May 2026', title: 'Backlash events accelerating when AI use in campaigns is perceived as deceptive', relatedForce: 'Trust Recalibration', accentHex: '#059669' },
    { date: 'Apr 2026', title: 'Generative AI entering brand campaign production workflows at scale', relatedForce: 'AI Ascendance', accentHex: '#7c3aed' },
    { date: 'Mar 2026', title: 'Senior creative salaries rising as AI commoditizes junior execution', relatedForce: 'Human Augmentation', accentHex: '#a78bfa' },
  ],
  'Consumer Brand|Relevance': [
    { date: 'May 2026', title: 'Brand authenticity rankings emerging as a measurable competitive variable', relatedForce: 'Trust Recalibration', accentHex: '#059669' },
    { date: 'Apr 2026', title: 'Community-building becoming a primary brand growth strategy', relatedForce: 'Identity & Belonging', accentHex: '#9333ea' },
    { date: 'Feb 2026', title: 'Consumer preference for human interaction persisting in high-stakes service moments', relatedForce: 'Human Augmentation', accentHex: '#a78bfa' },
  ],
  'Energy|Trust': [
    { date: 'May 2026', title: 'Third-party auditing of ESG commitments expanding across energy sector', relatedForce: 'Trust Recalibration', accentHex: '#059669' },
    { date: 'Apr 2026', title: 'Mandatory climate disclosure requirements entering force in major markets', relatedForce: 'Climate & Resilience', accentHex: '#047857' },
    { date: 'Mar 2026', title: 'Energy security and geopolitical alignment increasingly intertwined', relatedForce: 'Geopolitical Realignment', accentHex: '#be123c' },
  ],
  'Energy|Growth': [
    { date: 'May 2026', title: 'Renewables now cheapest source of new power generation in most markets', relatedForce: 'Resource & Energy Transition', accentHex: '#d97706' },
    { date: 'Apr 2026', title: 'Critical minerals supply chains becoming a geopolitical flashpoint', relatedForce: 'Geopolitical Realignment', accentHex: '#be123c' },
    { date: 'Mar 2026', title: 'Grid infrastructure investment lagging electrification demand', relatedForce: 'Resource & Energy Transition', accentHex: '#d97706' },
  ],
  'Manufacturing|Growth': [
    { date: 'May 2026', title: 'Supply chain regionalization accelerating across critical sectors', relatedForce: 'Geopolitical Realignment', accentHex: '#be123c' },
    { date: 'Apr 2026', title: 'Skilled trades vacancy rates at multi-decade highs', relatedForce: 'Workforce Transformation', accentHex: '#ea580c' },
    { date: 'Mar 2026', title: 'AR-assisted manufacturing reducing complex assembly training time by 40–60%', relatedForce: 'Human Augmentation', accentHex: '#a78bfa' },
  ],
  'Government|Innovation': [
    { date: 'May 2026', title: 'Government AI procurement standards raising the bar for public-sector technology', relatedForce: 'Institutional Rewiring', accentHex: '#b45309' },
    { date: 'Apr 2026', title: 'Geopolitical pressure accelerating sovereign digital capability-building', relatedForce: 'Geopolitical Realignment', accentHex: '#be123c' },
    { date: 'Mar 2026', title: 'AI-enabled public service delivery pilots expanding across OECD governments', relatedForce: 'AI Ascendance', accentHex: '#7c3aed' },
  ],
  'Government|Trust': [
    { date: 'May 2026', title: 'Public trust in AI-assisted government decisions diverging by domain', relatedForce: 'Trust Recalibration', accentHex: '#059669' },
    { date: 'Apr 2026', title: 'Mandatory AI governance frameworks entering force for public sector', relatedForce: 'Institutional Rewiring', accentHex: '#b45309' },
    { date: 'Feb 2026', title: 'Gen Z entering the workforce with distinctively different institutional expectations', relatedForce: 'Identity & Belonging', accentHex: '#9333ea' },
  ],
  'Technology Company|Innovation': [
    { date: 'May 2026', title: 'AI-native products displacing established technology categories', relatedForce: 'AI Ascendance', accentHex: '#7c3aed' },
    { date: 'Apr 2026', title: 'US-China technology decoupling accelerating across AI and semiconductors', relatedForce: 'Geopolitical Realignment', accentHex: '#be123c' },
    { date: 'Mar 2026', title: 'Enterprise buyers adding AI governance requirements to procurement checklists', relatedForce: 'Institutional Rewiring', accentHex: '#b45309' },
  ],
}

const defaultSignals: ComposerSignal[] = [
  { date: 'May 2026', title: 'AI agents entering operational workflows at scale across sectors', relatedForce: 'AI Ascendance', accentHex: '#7c3aed' },
  { date: 'Apr 2026', title: 'Governance and regulatory requirements expanding faster than anticipated', relatedForce: 'Institutional Rewiring', accentHex: '#b45309' },
  { date: 'Mar 2026', title: 'Workforce shortages and reskilling pressure remain structurally elevated', relatedForce: 'Workforce Transformation', accentHex: '#ea580c' },
]

export function getComposerSignals(
  industry: ComposerIndustry,
  challenge: ComposerChallenge
): ComposerSignal[] {
  const key: ImplicationKey = `${industry}|${challenge}`
  return signalsByKey[key] ?? defaultSignals
}

// ─── Route resolution ─────────────────────────────────────────────────────────

function slugify(val: string) {
  return val.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

// Maps composer display labels to their generator industry slugs where they differ.
const industrySlugAliases: Record<string, string> = {
  'technology-company': 'technology',
}

// Maps composer situation labels that have no generator equivalent to the closest generator slug.
const situationSlugAliases: Record<string, string> = {
  'workforce-transformation': 'transformation',
}

// Maps composer challenge labels that have no generator equivalent to the closest generator slug.
const challengeSlugAliases: Record<string, string> = {
  'relevance': 'trust',
}

// All hand-crafted context IDs (additional + curated).
// Routes to these take priority over the generator.
const handCraftedIds = new Set([
  'healthcare-ceo-transition-growth',
  'healthcare-ceo-transition-trust',
  'financial-services-ceo-transition-trust',
  'consumer-transformation-innovation',
  'consumer-brand-growth',
  'technology-company-innovation',
  'manufacturing-workforce-transformation',
  'energy-trust',
  'government-transformation',
  'healthcare-talent',
  'financial-services-innovation',
  'energy-transformation-resilience',
  'consumer-brand-culture-change-relevance',
  'manufacturing-growth-resource-pressure',
])

export function resolveComposerRoute(
  industry: ComposerIndustry,
  situation: ComposerSituation | null,
  challenge: ComposerChallenge
): string {
  const rawIndSlug = slugify(industry)
  const rawSitSlug = situation ? slugify(situation) : null
  const rawChlSlug = slugify(challenge)

  // Check hand-crafted contexts first using the raw (unaliased) slugs,
  // since those IDs were created from the original composer labels.
  if (rawSitSlug) {
    const threePartId = `${rawIndSlug}-${rawSitSlug}-${rawChlSlug}`
    if (handCraftedIds.has(threePartId)) return `/contexts/${threePartId}`
  }
  const twoPartId = `${rawIndSlug}-${rawChlSlug}`
  if (handCraftedIds.has(twoPartId)) return `/contexts/${twoPartId}`

  // Resolve to generator slugs, mapping any aliases.
  const indSlug = industrySlugAliases[rawIndSlug] ?? rawIndSlug
  const sitSlug = rawSitSlug ? (situationSlugAliases[rawSitSlug] ?? rawSitSlug) : null
  const chlSlug = challengeSlugAliases[rawChlSlug] ?? rawChlSlug

  // Route through the generator (all 8 industries × 3 situations × 4 challenges).
  if (sitSlug) {
    return `/contexts/${indSlug}-${sitSlug}-${chlSlug}`
  }
  // No situation selected: default to transformation as the middle-ground situation.
  return `/contexts/${indSlug}-transformation-${chlSlug}`
}

// ─── Saved contexts ───────────────────────────────────────────────────────────

export type SavedContext = {
  id: string
  title: string
  subtitle: string
  route: string
  accentHex: string
}

export const savedContexts: SavedContext[] = [
  {
    id: 'healthcare-ceo-transition-growth',
    title: 'Healthcare · CEO Transition · Growth',
    subtitle: 'Healthcare · 3–5 Years',
    route: '/contexts/healthcare-ceo-transition-growth',
    accentHex: '#7c3aed',
  },
  {
    id: 'financial-services-ceo-transition-trust',
    title: 'Financial Services · CEO Transition · Trust',
    subtitle: 'Financial Services · 3–5 Years',
    route: '/contexts/financial-services-ceo-transition-trust',
    accentHex: '#059669',
  },
  {
    id: 'consumer-transformation-innovation',
    title: 'Consumer · Transformation · Innovation',
    subtitle: 'Consumer · 3–5 Years',
    route: '/contexts/consumer-transformation-innovation',
    accentHex: '#7c3aed',
  },
  {
    id: 'consumer-brand-growth',
    title: 'Consumer Brand · Growth',
    subtitle: 'Consumer Brand · 3–5 Years',
    route: '/contexts/consumer-brand-growth',
    accentHex: '#a78bfa',
  },
  {
    id: 'energy-transformation-resilience',
    title: 'Energy · Transformation · Resilience',
    subtitle: 'Energy · 5–10 Years',
    route: '/contexts/energy-transformation-resilience',
    accentHex: '#d97706',
  },
  {
    id: 'consumer-brand-culture-change-relevance',
    title: 'Consumer Brand · Culture Change · Relevance',
    subtitle: 'Consumer Brand · 3–5 Years',
    route: '/contexts/consumer-brand-culture-change-relevance',
    accentHex: '#9333ea',
  },
  {
    id: 'manufacturing-growth-resource-pressure',
    title: 'Manufacturing · Growth · Resource Pressure',
    subtitle: 'Manufacturing · 3–5 Years',
    route: '/contexts/manufacturing-growth-resource-pressure',
    accentHex: '#d97706',
  },
]
