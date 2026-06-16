import type { ContextData, Force, Signal, StrategicImplication, SnapshotChange, AlignmentCard } from './mockContext'

// ─── Slug utilities ──────────────────────────────────────────────────────────

export type IndustrySlug = 'healthcare' | 'financial-services' | 'consumer' | 'technology' | 'energy' | 'manufacturing' | 'consumer-brand' | 'government' | 'consulting'
export type SituationSlug = 'ceo-transition' | 'transformation' | 'culture-change'
export type ChallengeSlug = 'growth' | 'trust' | 'innovation' | 'talent'
export type ForceId =
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

const industryLabels: Record<IndustrySlug, string> = {
  'healthcare':          'Healthcare',
  'financial-services':  'Financial Services',
  'consumer':            'Consumer',
  'technology':          'Technology',
  'energy':              'Energy',
  'manufacturing':       'Manufacturing',
  'consumer-brand':      'Consumer Brand',
  'government':          'Government',
  'consulting':          'Consulting',
}
const situationLabels: Record<SituationSlug, string> = {
  'ceo-transition': 'CEO Transition',
  'transformation': 'Transformation',
  'culture-change': 'Culture Change',
}
const challengeLabels: Record<ChallengeSlug, string> = {
  'growth':     'Growth',
  'trust':      'Trust',
  'innovation': 'Innovation',
  'talent':     'Talent',
}
const situationArticle: Record<SituationSlug, string> = {
  'ceo-transition': 'a CEO transition',
  'transformation': 'a transformation',
  'culture-change': 'a culture change',
}

// ─── Force base data ─────────────────────────────────────────────────────────

const forceBase: Record<ForceId, { name: string; accentHex: string }> = {
  'ai-ascendance':                  { name: 'AI Ascendance',                accentHex: '#7c3aed' },
  'workforce-transformation':       { name: 'Workforce Transformation',     accentHex: '#ea580c' },
  'trust-recalibration':            { name: 'Trust Recalibration',          accentHex: '#059669' },
  'human-augmentation':             { name: 'Human Augmentation',           accentHex: '#a78bfa' },
  'institutional-rewiring':         { name: 'Institutional Rewiring',       accentHex: '#b45309' },
  'economic-reconfiguration':       { name: 'Economic Reconfiguration',     accentHex: '#0369a1' },
  'geopolitical-realignment':       { name: 'Geopolitical Realignment',     accentHex: '#be123c' },
  'climate-and-resilience':         { name: 'Climate & Resilience',         accentHex: '#047857' },
  'resource-and-energy-transition': { name: 'Resource & Energy Transition', accentHex: '#d97706' },
  'identity-and-belonging':         { name: 'Identity & Belonging',         accentHex: '#9333ea' },
}

// ─── Force relevance scoring ─────────────────────────────────────────────────
// Three dimensions summed to produce a raw relevance score.
// Scale: 1 (not relevant) → 8 (defining force for this dimension).
// Calibrated so each force dominates where it is genuinely decisive.

const challengeScore: Record<ForceId, Record<ChallengeSlug, number>> = {
  'ai-ascendance':                  { growth: 5, innovation: 8, talent: 2, trust: 1 },
  'workforce-transformation':       { talent: 8, growth: 3,    innovation: 3, trust: 2 },
  'trust-recalibration':            { trust: 8, talent: 2,    growth: 2, innovation: 2 },
  'human-augmentation':             { innovation: 6, talent: 5, growth: 3, trust: 2 },
  'institutional-rewiring':         { trust: 5, innovation: 5, growth: 2, talent: 2 },
  // Economic Reconfiguration: most relevant for growth; lower for talent-only
  'economic-reconfiguration':       { growth: 6, innovation: 5, trust: 3, talent: 2 },
  // Geopolitical Realignment: reshapes innovation strategy; raises trust stakes
  'geopolitical-realignment':       { growth: 5, innovation: 5, trust: 4, talent: 2 },
  // Climate & Resilience: most relevant for trust (credibility); relevant for growth
  'climate-and-resilience':         { trust: 6, growth: 4, innovation: 3, talent: 2 },
  // Resource & Energy Transition: decisive for growth and innovation
  'resource-and-energy-transition': { growth: 6, innovation: 5, trust: 4, talent: 2 },
  // Identity & Belonging: decisive for talent; relevant for trust and growth
  'identity-and-belonging':         { talent: 7, trust: 4, growth: 3, innovation: 2 },
}

const situationScore: Record<ForceId, Record<SituationSlug, number>> = {
  'ai-ascendance':                  { transformation: 5, 'ceo-transition': 4, 'culture-change': 1 },
  'workforce-transformation':       { 'culture-change': 5, transformation: 4, 'ceo-transition': 3 },
  'trust-recalibration':            { 'ceo-transition': 5, 'culture-change': 4, transformation: 2 },
  'human-augmentation':             { transformation: 5, 'ceo-transition': 3, 'culture-change': 3 },
  'institutional-rewiring':         { 'ceo-transition': 4, 'culture-change': 4, transformation: 4 },
  // Economic Reconfiguration: most active in transformation and CEO transition
  'economic-reconfiguration':       { transformation: 6, 'ceo-transition': 5, 'culture-change': 2 },
  // Geopolitical: high in transformation; relevant at CEO transition
  'geopolitical-realignment':       { transformation: 6, 'ceo-transition': 5, 'culture-change': 2 },
  // Climate: most active in transformation; relevant at CEO transition
  'climate-and-resilience':         { transformation: 6, 'ceo-transition': 4, 'culture-change': 3 },
  // Resource & Energy: transformation-led
  'resource-and-energy-transition': { transformation: 7, 'ceo-transition': 4, 'culture-change': 2 },
  // Identity & Belonging: most acute in culture change; relevant at CEO transition
  'identity-and-belonging':         { 'culture-change': 5, 'ceo-transition': 4, transformation: 3 },
}

const industryScore: Record<ForceId, Record<IndustrySlug, number>> = {
  'ai-ascendance':                  { technology: 7, healthcare: 4, consumer: 4, 'financial-services': 3, energy: 4, manufacturing: 5, 'consumer-brand': 5, government: 4, consulting: 9 },
  'workforce-transformation':       { healthcare: 5, technology: 3, 'financial-services': 3, consumer: 3, energy: 6, manufacturing: 8, 'consumer-brand': 4, government: 6, consulting: 6 },
  'trust-recalibration':            { 'financial-services': 6, healthcare: 4, consumer: 4, technology: 2, energy: 7, manufacturing: 3, 'consumer-brand': 7, government: 8, consulting: 8 },
  'human-augmentation':             { technology: 6, healthcare: 4, consumer: 3, 'financial-services': 2, energy: 4, manufacturing: 7, 'consumer-brand': 7, government: 5, consulting: 7 },
  'institutional-rewiring':         { 'financial-services': 6, healthcare: 4, technology: 3, consumer: 2, energy: 7, manufacturing: 5, 'consumer-brand': 5, government: 9, consulting: 4 },
  'economic-reconfiguration':       { 'financial-services': 7, consumer: 5, healthcare: 4, technology: 4, energy: 6, manufacturing: 7, 'consumer-brand': 5, government: 5, consulting: 7 },
  'geopolitical-realignment':       { technology: 5, 'financial-services': 5, consumer: 3, healthcare: 2, energy: 8, manufacturing: 7, 'consumer-brand': 4, government: 7, consulting: 5 },
  'climate-and-resilience':         { healthcare: 4, 'financial-services': 4, consumer: 3, technology: 3, energy: 9, manufacturing: 5, 'consumer-brand': 5, government: 6, consulting: 3 },
  'resource-and-energy-transition': { 'financial-services': 4, consumer: 3, healthcare: 3, technology: 3, energy: 9, manufacturing: 7, 'consumer-brand': 3, government: 5, consulting: 2 },
  'identity-and-belonging':         { consumer: 6, healthcare: 5, technology: 4, 'financial-services': 3, energy: 3, manufacturing: 4, 'consumer-brand': 8, government: 6, consulting: 6 },
}

const allForceIds: ForceId[] = [
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

function rankForces(industry: IndustrySlug, situation: SituationSlug, challenge: ChallengeSlug): ForceId[] {
  return allForceIds
    .map(id => ({
      id,
      score: challengeScore[id][challenge] + situationScore[id][situation] + industryScore[id][industry],
    }))
    .sort((a, b) => b.score - a.score)
    .map(x => x.id)
}

// ─── Force short lines ────────────────────────────────────────────────────────

const forceShortLines: Record<ForceId, Record<IndustrySlug, string>> = {
  'ai-ascendance': {
    healthcare:           'Rewrites the cost and capacity to serve patients.',
    'financial-services': 'Reshapes how financial decisions are made and explained.',
    consumer:             'Redefines personalization, discovery, and the consumer relationship.',
    technology:           'Accelerates every product, workflow, and competitive advantage.',
    energy:               'Accelerates grid intelligence, automation, and asset optimization.',
    manufacturing:        'Transforms production, quality control, and supply chain intelligence.',
    'consumer-brand':     'Reshapes how brands understand, reach, and retain customers at scale.',
    government:           'Raises the productivity ceiling for public services and regulatory capacity.',
    consulting:           'Compresses the core economics of strategy, research, and delivery work.',
  },
  'workforce-transformation': {
    healthcare:           'Persistent shortages reshape the operating model.',
    'financial-services': 'AI changes what financial expertise means and who holds it.',
    consumer:             'AI changes what consumer-facing roles require and create.',
    technology:           'Redefines what technical talent looks like and where it comes from.',
    energy:               'The workforce that built fossil-fuel infrastructure must transition alongside the energy system.',
    manufacturing:        'Automation is changing every role on the factory floor.',
    'consumer-brand':     'AI changes what brand, marketing, and creative roles require of the people who fill them.',
    government:           'Public sector workforce expectations and capabilities are being reset.',
    consulting:           'Senior talent migrating to independent models reshapes who delivers the work and how.',
  },
  'trust-recalibration': {
    healthcare:           "Becomes the new CEO's scarcest, decisive asset.",
    'financial-services': 'The defining constraint and competitive differentiator.',
    consumer:             'Determines which AI experiences consumers accept and which they reject.',
    technology:           'Shapes what users and regulators will permit technology companies to do.',
    energy:               'Social licence to operate is under pressure from transition conflicts and community impact.',
    manufacturing:        'Supply chain integrity and operational transparency are becoming competitive requirements.',
    'consumer-brand':     'Consumer trust is fragile, contextual, and harder to recover than ever before.',
    government:           'Public trust in government institutions is the defining constraint on effective governance.',
    consulting:           'Clients are scrutinising value more actively than at any point in recent decades.',
  },
  'human-augmentation': {
    healthcare:           'Redraws the line between clinician and machine.',
    'financial-services': 'Redraws the boundary between advisor judgment and machine recommendation.',
    consumer:             'Redraws the value of human presence in consumer experience.',
    technology:           'Redefines the relationship between engineers, products, and AI systems.',
    energy:               'AI and sensors are changing what energy workers do, and where their judgment is irreplaceable.',
    manufacturing:        'Robots and AI are redefining what human expertise means on the factory floor.',
    'consumer-brand':     'Human creativity and judgment remain irreplaceable even as AI handles more execution.',
    government:           'AI tools are expanding what public servants can do — and raising questions about accountability.',
    consulting:           'The human-AI service model is becoming the new competitive baseline for advisory work.',
  },
  'institutional-rewiring': {
    healthcare:           'Governance and the regulatory floor are reset.',
    'financial-services': 'Compliance frameworks are being rewritten in real time.',
    consumer:             'Data, privacy, and AI regulations reshape the innovation boundary.',
    technology:           'The regulatory environment catches up with what the industry built.',
    energy:               'The regulatory architecture for energy markets is being rebuilt for a decarbonized world.',
    manufacturing:        'Industrial policy and trade regulation are reshaping the rules of manufacturing competition.',
    'consumer-brand':     'Data, privacy, and AI regulations are actively rewriting the marketing rulebook.',
    government:           'The governance frameworks that define government are being tested and rewritten.',
    consulting:           'Governance and compliance are growing as client demand categories.',
  },
  'economic-reconfiguration': {
    healthcare:           'Capital, reimbursement models, and the cost of care are all shifting simultaneously.',
    'financial-services': 'Capital allocation, cost structures, and competitive economics are being restructured.',
    consumer:             'Consumer purchasing power, cost of goods, and the economics of loyalty are in flux.',
    technology:           'Platform economics and capital efficiency assumptions are being stress-tested.',
    energy:               'The capital structure of energy is being rebuilt around transition finance.',
    manufacturing:        'Industrial policy, tariffs, and automation economics are reshaping the cost of manufacturing.',
    'consumer-brand':     'Consumer spending power and the economics of brand loyalty are shifting structurally.',
    government:           'Fiscal pressure is forcing governments to redesign how public value is delivered.',
    consulting:           'Outcome-based buying and budget pressure are restructuring the economics of client engagements.',
  },
  'geopolitical-realignment': {
    healthcare:           'Supply chain dependencies and regulatory divergence are creating new operating constraints.',
    'financial-services': 'Capital flows, market access, and cross-border compliance are reshaped by alignment dynamics.',
    consumer:             'Supply chain regionalization and tariff exposure are changing the economics of consumer goods.',
    technology:           'Technology decoupling is bifurcating markets, standards, and investment flows.',
    energy:               'Energy security and the geopolitics of critical minerals are reshaping global strategy.',
    manufacturing:        'Trade realignment, tariffs, and friend-shoring are redrawing the map of manufacturing.',
    'consumer-brand':     'Supply chain exposure and trade policy are changing the economics of global consumer goods.',
    government:           'Geopolitical realignment is reshaping the sovereignty constraints and alliances that define governance.',
    consulting:           'Geopolitical uncertainty is shaping what clients need and how quickly they can decide.',
  },
  'climate-and-resilience': {
    healthcare:           'Climate-related health pressures and operational resilience requirements are rising.',
    'financial-services': 'Climate disclosure, physical risk, and transition risk are reshaping the investment landscape.',
    consumer:             'Consumer expectations around climate credibility are becoming measurable and material.',
    technology:           'Data centre energy and physical climate risk are becoming operational constraints.',
    energy:               'The pace of the energy transition is the defining strategic variable for the sector.',
    manufacturing:        'Climate-related risk and the carbon cost of production are becoming competitive factors.',
    'consumer-brand':     'Climate credibility is becoming a measurable driver of consumer brand preference.',
    government:           'Climate impacts are creating new demands on public institutions and testing their resilience.',
    consulting:           'Decarbonisation and climate transition advisory are growing as demand categories.',
  },
  'resource-and-energy-transition': {
    healthcare:           'Energy costs and supply chain resilience for medical goods are rising strategic concerns.',
    'financial-services': 'Transition finance and energy-linked assets are introducing new categories of risk and opportunity.',
    consumer:             'Energy cost exposure and the electrification of logistics are changing the cost of consumer goods.',
    technology:           'Power availability for AI infrastructure is becoming a strategic constraint faster than expected.',
    energy:               'The entire business model of the sector is being redesigned around the energy transition.',
    manufacturing:        'Energy cost exposure and the shift to low-carbon processes are creating structural competitive change.',
    'consumer-brand':     'The energy footprint of products and supply chains is becoming a brand variable.',
    government:           'The pace of energy transition depends heavily on public sector investment, regulation, and coordination.',
    consulting:           'Energy transition is creating specialist advisory demand across sectors.',
  },
  'identity-and-belonging': {
    healthcare:           'Workforce belonging determines whether clinical talent stays, performs, and advocates.',
    'financial-services': 'Belonging expectations are reshaping how financial organizations attract and retain talent.',
    consumer:             'Consumer loyalty increasingly tracks to whether people feel genuinely seen by the brands they choose.',
    technology:           'The most capable technical talent evaluates employers on belonging and values alignment.',
    energy:               'Workforce belonging is under pressure as energy transition creates uncertainty about careers and communities.',
    manufacturing:        'The transformation of factory work raises fundamental questions about worker identity and value.',
    'consumer-brand':     'Consumer brand loyalty is increasingly built on whether people feel seen and represented.',
    government:           'Public institutions must serve diverse populations while managing their own workforce belonging challenges.',
    consulting:           'Culture and belonging are increasingly the presenting problem behind strategic mandates.',
  },
}

// ─── Force descriptions ───────────────────────────────────────────────────────

const forceDescriptions: Record<ForceId, Record<IndustrySlug, string>> = {
  'ai-ascendance': {
    healthcare:           'Healthcare is heavily dependent on information processing, documentation, coordination, and decision support — all areas where AI is rapidly improving.',
    'financial-services': 'AI is transforming underwriting, fraud detection, customer advisory, and portfolio management — creating competitive opportunity and new categories of risk.',
    consumer:             'AI is changing how products are discovered, how services are delivered, how preferences are understood, and how brand relationships are maintained at scale.',
    technology:           'AI is changing every layer of technology organizations — how products are built, how engineering teams work, how competitive advantage is created, and how quickly the rules of the industry shift.',
    energy:               'AI is enabling new levels of grid intelligence, predictive maintenance, and asset optimization that are materially changing the economics of energy generation and distribution. Energy companies that deploy AI effectively can reduce operating costs, improve system reliability, and create competitive advantages that scale with their asset base.',
    manufacturing:        'AI is transforming manufacturing operations — enabling predictive maintenance, quality control, supply chain optimization, and production scheduling at a level of precision that was not previously achievable. The manufacturers that deploy AI most effectively will create cost and quality advantages that are structurally difficult for competitors to close.',
    'consumer-brand':     'AI is reshaping every dimension of consumer brand strategy — how consumers are understood, how products are developed, how marketing is personalized, and how brand relationships are maintained at scale. The gap between AI-enabled and AI-naive consumer organizations is widening faster than most anticipated.',
    government:           'AI is raising the potential productivity of public services — in benefit administration, regulatory review, citizen services, and policy analysis — while creating new questions about accountability, bias, and the appropriate boundaries of automated decision-making in government.',
    consulting:           'AI is compressing the research, analysis, and document-production work that historically justified the consulting leverage model. Tasks that previously required junior teams of analysts can now be completed faster and at lower cost with AI tools — by clients themselves, by AI-native competitors, or by the same firm with fewer people. The gap between AI-enabled and AI-naive consulting firms is widening, and the value proposition built on information asymmetry and analytical throughput is under structural pressure.',
  },
  'workforce-transformation': {
    healthcare:           'Structural workforce shortages — not cyclical — are forcing healthcare organizations to rethink staffing models, role design, and the relationship between human and machine work.',
    'financial-services': 'AI is changing the skills, roles, and career paths that financial services organizations need — while creating cultural tension between efficiency expectations and workforce stability.',
    consumer:             'Consumer organizations are seeing the earliest and most visible effects of AI on frontline roles — in retail, service, and logistics. The transformation agenda is partly a workforce redesign agenda.',
    technology:           'Technology organizations face a paradox: they are building the AI that transforms every industry — including their own. The skills, roles, and team structures of technology companies are changing as fast as their products.',
    energy:               'The energy workforce built for extraction, refining, and combustion-based generation must evolve alongside the energy system itself. This is not primarily a technology upskilling challenge — it is a workforce identity challenge, because the transition changes not just what people do but what their career means.',
    manufacturing:        'Automation and AI are changing every layer of manufacturing employment — from the skills that floor workers need, to the role of supervisors, to what engineering and operations leaders manage. Organizations that invest in workforce redesign alongside technology deployment will move faster and face less resistance than those that treat automation and workforce as separate agendas.',
    'consumer-brand':     'Consumer brand organizations are navigating a transformation of their core creative and marketing roles as AI takes over more execution while human judgment, taste, and cultural fluency become more valuable. The workforce challenge is partly technical and partly cultural — the meaning of creative work is changing.',
    government:           'Public sector organizations face workforce challenges that private sector organizations also face — AI adoption, skills gaps, changing employee expectations — alongside constraints specific to government: civil service rules, salary caps, and the difficulty of competing with private sector employers for technical talent.',
    consulting:           'The consulting workforce is fracturing in ways that challenge the traditional partnership model from multiple directions simultaneously. Senior talent — partners and principals whose client relationships are the primary asset — is migrating to fractional, independent, and boutique models faster than most established firms anticipated. Platforms that enable direct client-expert matching are removing the intermediary role that firms historically played. And the talent that remains is applying belonging and values criteria to their employer choice that the billability-first culture of traditional consulting was not designed to satisfy.',
  },
  'trust-recalibration': {
    healthcare:           'Trust — with patients, clinicians, regulators, and payers — is under pressure from AI deployment, leadership change, and widening gaps between stated values and observable action.',
    'financial-services': 'Trust in financial services — with customers, regulators, employees, and the public — is under structural pressure as AI-driven decisions proliferate and accountability gaps widen.',
    consumer:             'Consumer trust in AI-driven brand experiences is highly contextual — welcomed in some moments, resented in others. Organizations that get this wrong at scale face significant brand damage.',
    technology:           'Trust in technology companies — from users, regulators, enterprise customers, and employees — is under pressure from AI deployment decisions, data practices, and growing power concentration.',
    energy:               'Energy organizations operate under a persistent social licence challenge: the communities, governments, and investors they depend on are asking harder questions about the pace and authenticity of transition commitments. Trust is the operating condition that determines whether transformation programs proceed or stall.',
    manufacturing:        'Supply chain transparency — knowing where materials come from, under what conditions, and at what environmental cost — is becoming a baseline expectation from customers, regulators, and investors. The manufacturers that build visible, verifiable transparency into their operations will have structural trust advantages.',
    'consumer-brand':     'Consumer trust is fragile, contextual, and difficult to recover once lost. The AI-enabled personalization and engagement practices that create competitive advantage also create risk: consumers who feel surveilled, manipulated, or misrepresented withdraw both spending and advocacy at speed.',
    government:           'Trust in public institutions is the precondition for effective governance. Governments that lose public trust find every policy initiative harder to implement, every crisis harder to manage, and every reform harder to sustain. Rebuilding institutional trust is among the hardest and most consequential challenges in public leadership.',
    consulting:           'Client trust in the consulting value proposition is under structural pressure. AI is reducing the information asymmetry that historically justified advisory fees; clients are building internal strategy and transformation capability that reduces advisory dependency; and the scrutiny applied to measurable impact has intensified as procurement sophistication rises and discretionary budgets tighten. Firms that cannot demonstrate clear, attributable outcomes — rather than high-quality process and well-packaged insight — are finding the value proposition harder to defend.',
  },
  'human-augmentation': {
    healthcare:           'The boundary between what humans do and what machines do in healthcare is actively shifting. Clinical roles are being redesigned around AI capability rather than against it.',
    'financial-services': 'The question in financial services is no longer whether AI will change advisory and analytical roles, but how — and who will set the terms of that boundary.',
    consumer:             'As AI handles more routine consumer interactions, the question becomes what human presence adds and where it is irreplaceable — shaping the entire design of consumer experience.',
    technology:           'Technology organizations are at the center of the human augmentation question — building AI tools that change what their own engineers and product teams do, and how quickly.',
    energy:               'The combination of AI, sensor networks, and remote monitoring is changing what energy workers do — increasing their ability to oversee complex systems while shifting the premium to the human judgment that machines cannot replicate: safety decisions, community relationships, and the judgment calls in novel failure modes.',
    manufacturing:        'Robots and AI are taking over more physical and analytical tasks in manufacturing, changing what human expertise means on the floor. The most effective manufacturing organizations are those that redesign jobs around what humans do best — the judgment, adaptability, and relational skills that automation cannot yet replicate.',
    'consumer-brand':     'The creative and strategic heart of consumer brand work remains intensely human — judgment about culture, tone, authenticity, and meaning cannot be automated. What is changing is the execution layer: AI handles more of the production, personalization, and analytics, allowing human talent to focus on decisions that require cultural fluency and creative risk-taking.',
    government:           'AI is expanding what public servants can do — handling more routine inquiries, processing more data, and generating more analysis — while raising questions about where human judgment, accountability, and the democratic obligations of government require humans to make the decision, not machines.',
    consulting:           'The human-AI service model is becoming the new competitive baseline in consulting. Firms that deploy AI to handle research synthesis, data analysis, first-draft production, and scenario generation — while directing senior human judgment toward the highest-value moments of the engagement — can deliver more with less. The question is not whether to use AI but how to design the human-AI collaboration so that the result is genuinely better, not just faster and cheaper. The firms that get this design right will have a structural advantage over those that either ignore AI or use it primarily to reduce headcount.',
  },
  'institutional-rewiring': {
    healthcare:           'Healthcare regulatory frameworks, governance structures, and institutional expectations are under revision as AI deployment, workforce change, and trust dynamics force new accountability architectures.',
    'financial-services': 'Regulatory frameworks governing AI, data, and financial decision-making are being actively rewritten by regulators who are moving faster than most institutions anticipated.',
    consumer:             'The regulatory and institutional environment around consumer data, AI in marketing, and privacy is changing rapidly — creating both constraints and competitive dynamics.',
    technology:           'Technology companies built most of the current AI infrastructure before the regulatory frameworks existed. Those frameworks are now being written — and the organizations that shaped the technology are now subject to it.',
    energy:               'The regulatory architecture governing energy markets — carbon pricing, grid reliability standards, permitting, and market design — is being rebuilt to support a transition that most existing frameworks were not designed for. Energy organizations that understand the direction of regulatory travel will have strategic advantages over those that react to each change as it arrives.',
    manufacturing:        'Industrial policy — from the US Inflation Reduction Act to EU industrial strategy to China\'s manufacturing ambitions — is actively reshaping the competitive economics of manufacturing. Organizations that position themselves to benefit from these frameworks, rather than simply react to them, will have structural advantages.',
    'consumer-brand':     'Data privacy regulations, AI in marketing guidelines, and consumer protection frameworks are being actively rewritten across major markets. The consumer brand organizations that build compliance into their operating model — rather than treating it as a constraint to minimize — will have more strategic freedom in an environment of increasing regulatory activity.',
    government:           'Government institutions are simultaneously subject to institutional reform and agents of it — the expectations placed on public organizations by citizens, parliaments, and oversight bodies are changing alongside the organizations themselves. The governance capacity to manage AI deployment, fiscal constraint, and service transformation simultaneously is tested in most public institutions.',
    consulting:           'Governance, compliance, and regulatory advisory are among the fastest-growing demand categories in professional services. As AI regulation, data privacy, and ESG disclosure requirements expand across major markets, clients need advisors who can navigate the complexity — and who have the institutional credibility to represent positions before regulators and boards. For consulting firms positioned at the intersection of strategy and governance, this is a structural growth opportunity. For those without that positioning, it represents a category they are ill-equipped to enter quickly.',
  },
  'economic-reconfiguration': {
    healthcare:           'Reimbursement models, capital access, and the fundamental economics of delivering care are shifting. Healthcare organizations built for one cost structure may find themselves exposed in another.',
    'financial-services': 'The macroeconomic backdrop — elevated rates, industrial policy reshaping capital flows, and productivity gains concentrating unevenly — is changing the competitive economics of financial services in ways that are still working through the system.',
    consumer:             'Consumer spending power, the cost of goods, and the economics of loyalty programs are all shifting simultaneously. The consumer organizations built for the 2010–2020 growth environment may need to fundamentally rethink their model.',
    technology:           'Platform economics, capital efficiency expectations, and the cost of building and scaling technology products are all in flux. The assumptions that shaped technology strategy for the past decade are being pressure-tested.',
    energy:               'Transition finance — the capital required to build new generation, grid, and storage infrastructure — is being mobilized at a scale that is reshaping energy sector economics. The organizations that understand how to access, deploy, and justify this capital will have investment capacity that peers dependent on traditional financing cannot match.',
    manufacturing:        'Industrial policy subsidies, tariff-driven reshoring, and the automation-driven restructuring of labour costs are creating a new economic geography for manufacturing. Organizations positioned in the right locations, with the right incentive structures and supply chain configurations, will have cost advantages that compound over time.',
    'consumer-brand':     'Consumer spending is bifurcating as income inequality grows and purchasing power diverges sharply by demographic segment. The consumer brand economics built for a more unified middle market are under pressure — the organizations that understand their actual customer economics in this environment will make better strategic decisions than those assuming continuity with the previous decade.',
    government:           'Governments are navigating a fiscal constraint that limits the resources available for public investment just as the demand for public services is rising. The organizations that find ways to deliver more with existing resources, rather than simply requesting more, will have more political and operational freedom.',
    consulting:           'The economics of client engagements are being restructured from both sides simultaneously. Clients are resisting time-and-materials pricing, demanding outcome-based models that shift performance risk to the advisor. AI is compressing the labour hours required to produce the same analytical output, reducing the justification for traditional fee structures built on team size and hours billed. And procurement sophistication — driven by CFO scrutiny of discretionary spend — is treating consulting as a managed category with strict ROI requirements. Firms that can demonstrate clear outcomes and price accordingly will have more durable client relationships than those defending legacy models.',
  },
  'geopolitical-realignment': {
    healthcare:           'Supply chain dependencies on geographically concentrated pharmaceutical and device manufacturing are creating new strategic vulnerabilities. Regulatory divergence across major markets is adding compliance complexity.',
    'financial-services': 'Capital flows, market access, and the ability to operate across borders are increasingly shaped by geopolitical alignment. Financial institutions are navigating a world where the rules of international finance are being rewritten.',
    consumer:             'Supply chain regionalization, tariff exposure, and shifting trade relationships are changing the cost structure and operational complexity of consumer goods organizations operating across multiple markets.',
    technology:           'Technology decoupling between the US and China is bifurcating markets, standards, and supply chains. Technology companies are being asked to choose sides in a geopolitical contest that has no clear resolution.',
    energy:               'The geopolitics of energy are inseparable from the geopolitics of critical minerals, climate commitments, and energy security. The critical minerals required for batteries, solar panels, and transmission infrastructure are concentrated in ways that create strategic dependencies — and strategic opportunities for organizations that understand the map.',
    manufacturing:        'Trade realignment — friend-shoring, tariff escalation, and the reshoring of strategic industries — is creating a new geography of manufacturing advantage and constraint. Organizations that can navigate this environment, positioning assets in the right jurisdictions, will have structural competitive advantages over those that optimize purely on historical cost.',
    'consumer-brand':     'Consumer goods organizations operating across multiple markets face a new level of trade policy uncertainty that is changing sourcing economics, supply chain design, and market access assumptions. The organizations that build supply chain optionality and geographic flexibility into their operating models will have more resilience than those optimized for a more stable trade environment.',
    government:           'Geopolitical realignment is reshaping the alliances, institutions, and norms that public organizations depend on — from trade agreements to security arrangements to international regulatory cooperation. Government leaders navigating this environment must balance national interests with the institutional commitments that give governance its legitimacy.',
    consulting:           'Geopolitical uncertainty is simultaneously creating demand for advisory and suppressing the decisiveness required to act on it. Clients facing trade policy volatility, technology decoupling, and geopolitical market access questions need advisors with genuine geopolitical fluency — not just scenario frameworks. At the same time, leadership caution in uncertain environments is suppressing discretionary spend on the strategy programs where that advisory would be applied. Consulting firms that can provide integrated geopolitical perspective, connect it to near-term strategic decisions, and demonstrate rapid value are better positioned than those offering long-horizon strategic planning in an environment of short-horizon decision-making.',
  },
  'climate-and-resilience': {
    healthcare:           'Climate-related health events are increasing the demand burden on health systems. At the same time, healthcare organizations face rising expectations around their own climate credentials from staff, communities, and regulators.',
    'financial-services': 'Climate disclosure requirements, physical asset risk, and the transition risk in investment portfolios are reshaping how financial organizations assess and manage long-term exposure. The timeline is compressing faster than most anticipated.',
    consumer:             'Consumer expectations around climate credibility are becoming a measurable factor in brand preference and purchase behavior. Organizations that cannot demonstrate genuine progress are exposed to both activist pressure and consumer drift.',
    technology:           'The energy demands of AI infrastructure are colliding with climate commitments and power grid constraints. Technology organizations face a credibility question about whether their climate goals survive the scale of their AI ambitions.',
    energy:               'The pace of the energy transition is the central strategic question for the sector — and it is driven as much by policy, capital flows, and social expectations as by technology. Energy organizations that position for transition acceleration will be better placed than those calibrating for a slower path, even when near-term signals are mixed.',
    manufacturing:        'Climate risk — physical risk to facilities, transition risk in input costs, and reputational risk from supply chain emissions — is becoming a strategic variable in manufacturing competitiveness. Organizations that manage climate exposure proactively will have lower disruption costs and stronger positions with customers and investors who scrutinize supply chain carbon.',
    'consumer-brand':     'Consumer expectations around climate credibility are moving from aspiration to accountability. The consumer brands most exposed are those that have made visible commitments but lack verifiable progress — the credibility gap between stated values and observable action is becoming a brand risk that competitors and advocates can exploit.',
    government:           'Climate is reshaping what governments must do: invest in physical resilience infrastructure, regulate industrial emissions, manage climate migration, and coordinate international responses. The governments that build the institutional capacity for long-horizon climate strategy — rather than managing climate as a series of emergency responses — will be better placed to serve their populations.',
    consulting:           'Sustainability and climate transition advisory are among the fastest-growing practice areas in consulting. Mandatory disclosure requirements, net-zero commitments, and transition risk assessments are creating demand for advisors who can help clients navigate the gap between stated ambition and operational reality. For consulting firms, this creates both an opportunity — a growing, recurring advisory category — and a credibility challenge: clients are increasingly scrutinising whether their advisors model the sustainability practices they are paid to recommend.',
  },
  'resource-and-energy-transition': {
    healthcare:           'The cost and reliability of energy for healthcare facilities — and the resilience of supply chains for pharmaceuticals and medical devices — are becoming strategic concerns as the energy system transitions and critical mineral dependencies are exposed.',
    'financial-services': 'Transition finance — debt and equity for the energy transition — is creating significant new categories of opportunity and risk. Energy-linked assets in existing portfolios are being repriced as the transition accelerates.',
    consumer:             'The electrification of logistics, rising energy input costs, and the exposure of consumer goods supply chains to critical mineral dependencies are changing the economics of getting products to market.',
    technology:           'The power requirements of large-scale AI infrastructure are growing faster than grid capacity in key markets. Data centre energy access is transitioning from an operational concern to a strategic constraint on AI ambition.',
    energy:               'For energy sector organizations, the resource and energy transition is not a background force — it is the defining strategic reality. Every investment decision, every operating assumption, and every organizational capability is shaped by how quickly and completely the energy system moves from fossil fuels to renewables, storage, and new grid architectures.',
    manufacturing:        'The electrification of manufacturing processes, rising carbon pricing, and the exposure of supply chains to energy cost volatility are creating structural changes in the competitive economics of industrial production. The manufacturers that invest in energy efficiency and low-carbon processes now will have lower cost structures and fewer compliance exposures as transition pressures intensify.',
    'consumer-brand':     'The energy footprint of consumer goods — from production through logistics to retail — is becoming increasingly visible and increasingly material to brand reputation. Consumer brands that can demonstrate genuine progress on supply chain decarbonization are building a source of differentiation that compounds as expectations continue to rise.',
    government:           'Government has a unique role in the energy transition: setting the regulatory frameworks, making the public investments, and coordinating the international agreements that determine the pace and shape of change. Public organizations that build genuine energy transition capability — not just policy ambition — will have the credibility to sustain this role through the political cycles that complicate long-horizon government action.',
    consulting:           'Energy transition advisory is scaling as organisations across every sector grapple with the operational, strategic, and regulatory implications of a changing energy system. Consulting firms with genuine energy transition capability — not just sustainability reporting expertise — are in a structurally growing market. Building that capability requires specialist talent that is in acute short supply and in high demand from energy companies, infrastructure funds, and government agencies competing for the same profiles.',
  },
  'identity-and-belonging': {
    healthcare:           'Workforce belonging — whether clinical staff feel genuinely seen, valued, and respected — is emerging as a primary driver of retention in an environment where structural shortages leave no margin for voluntary departure.',
    'financial-services': 'Expectations around belonging, representation, and organizational values are reshaping how financial institutions attract and retain the talent they need — particularly among younger professionals with more options than previous generations.',
    consumer:             'Consumer loyalty is increasingly correlated with whether people feel that the brands they choose represent their values and reflect their lives. This is no longer a niche preference — it is a measurable driver of brand choice across demographics.',
    technology:           'The most capable technical talent has the most options and exercises the most judgment about where to work. Belonging, values alignment, and organizational identity are becoming decisive factors in talent decisions at the organizations that can least afford to get it wrong.',
    energy:               'The energy transition creates profound belonging disruption: workers who built careers in fossil fuel industries, communities whose economic identity is tied to energy production, and organizations navigating a transformation that challenges the meaning of what they have always done. Leaders who attend to this dimension of transition — not just the technical and financial — will move more durably.',
    manufacturing:        'The transformation of factory work — through automation, AI, and supply chain change — raises fundamental questions about worker identity, skill value, and the relationship between manufacturing organizations and the communities they are embedded in. Organizations that take these questions seriously, rather than treating them as communications challenges, will build more resilient workforces.',
    'consumer-brand':     'Consumer brand loyalty is increasingly built on belonging: whether consumers feel that a brand genuinely represents them, sees them, and shares their values. The brands that build belonging authentically — rather than performing it — create loyalty that is more resilient to competitive and price pressure than preference built on product attributes alone.',
    government:           'Public institutions serve diverse populations whose belonging needs are often in tension — and must also manage their own internal belonging dynamics as they navigate workforce transformation and public scrutiny. Governments that take belonging seriously, as a policy design criterion and as an organizational value, tend to build more effective and more trusted institutions.',
    consulting:           'Culture and belonging are increasingly the presenting problem behind the strategic and transformation mandates that bring clients to consulting firms. Organisations that need help with CEO transitions, workforce transformation, or strategic repositioning are often — beneath the stated mandate — working on questions of belonging: who belongs in the future organisation, whose identity is challenged by the change, and whether the culture can absorb what the strategy requires. Consulting firms that can engage with these dimensions credibly — not just technically — are better positioned than those that treat culture as a downstream output of strategy work.',
  },
}

// ─── Why surfaced bullets ─────────────────────────────────────────────────────

const whySurfaced: Record<ForceId, Record<SituationSlug, string[]>> = {
  'ai-ascendance': {
    'ceo-transition': [
      'New CEOs have unusual freedom to redesign operating assumptions',
      'AI deployment decisions made now will shape the organization for years',
      'AI affects workforce, operations, and the meaning of competitive advantage',
      'Organizations that lead on AI deployment will be harder to displace',
    ],
    transformation: [
      'Transformation without AI strategy is likely to be incomplete',
      'AI creates the possibility of redesigning workflows, not just improving them',
      'Transformation leaders have a mandate and a window to set AI norms',
      'Competitors deploying AI are changing the baseline faster than most realize',
    ],
    'culture-change': [
      'Culture change must address how employees relate to AI-enabled work',
      'AI changes what skills and expertise feel valued in an organization',
      'How leaders communicate about AI shapes cultural safety and confidence',
      'Culture determines whether AI deployment is embraced or quietly resisted',
    ],
  },
  'workforce-transformation': {
    'ceo-transition': [
      'CEO transitions create a window to reset workforce expectations',
      'New leaders can name workforce redesign as a priority without inheriting the politics',
      'Workforce trust is among the first things a new CEO must establish',
      'Talent strategy signals organizational values more than most public statements',
    ],
    transformation: [
      'Transformation without workforce redesign produces capability without adoption',
      'Role redesign is often the most underestimated element of transformation',
      'Workforce confidence in the future determines pace of change',
      'The organizations that redesign roles alongside technology will move faster',
    ],
    'culture-change': [
      'Culture change is often experienced by employees as workforce change',
      'Role clarity is foundational to cultural safety during periods of disruption',
      'Workforce anxiety about AI is a cultural variable, not just a communication problem',
      'The organizations that invest in workforce understanding will move culture faster',
    ],
  },
  'trust-recalibration': {
    'ceo-transition': [
      'CEO transitions are among the highest-trust-sensitivity moments in organizational life',
      'New leaders inherit trust deficits they did not create but must address',
      'How a new CEO communicates in the first ninety days shapes credibility for years',
      'Trust is both a constraint and an asset for incoming leadership',
    ],
    transformation: [
      'Transformation creates trust risk — stakeholders are uncertain about direction',
      'Transparency about what is changing and why is the highest-leverage trust action',
      'Trust in transformation leadership determines how much resistance the leader faces',
      'Organizations that earn trust during transformation move through it faster',
    ],
    'culture-change': [
      'Culture change requires trust before behavior change is possible',
      'Employees who do not trust leadership will not change culture — they will perform it',
      'Trust is the precondition for the psychological safety that culture change requires',
      'Observable leadership behavior shapes trust more than culture programs do',
    ],
  },
  'human-augmentation': {
    'ceo-transition': [
      'New CEOs can set the terms of augmentation vs. replacement for the organization',
      'The cultural meaning of AI in the organization is shaped by what leaders say early',
      'Human-AI collaboration design is a leadership decision as much as a technical one',
      'How the organization defines human value determines the culture of AI adoption',
    ],
    transformation: [
      'Transformation requires redefining what humans do well versus what machines do well',
      'Human augmentation is often the underarticulated theory of change in transformation',
      'The most effective transformations redesign roles around human strengths, not despite them',
      'Human-AI workflow design determines whether transformation delivers its productivity promise',
    ],
    'culture-change': [
      'Culture change must address what it means to work alongside AI systems',
      'The cultural question of augmentation is whether AI is a tool or a threat',
      'Organizations that help people understand what AI makes possible for them move culture faster',
      'Human-AI collaboration norms are a cultural design problem, not a technology problem',
    ],
  },
  'institutional-rewiring': {
    'ceo-transition': [
      'New CEOs face inherited governance gaps they must address or accept responsibility for',
      'Boards are asking whether incoming leadership teams can govern AI credibly',
      'Regulatory compliance status is a first-hundred-days discovery item for new leaders',
      'Institutional relationships — with regulators, boards, and partners — must be renegotiated',
    ],
    transformation: [
      'Transformation programs often outpace governance capacity',
      'Regulatory frameworks are active variables in transformation timing and scope',
      'Organizations that build governance infrastructure early face fewer mid-transformation complications',
      'Compliance requirements are increasingly a transformation constraint, not just a background condition',
    ],
    'culture-change': [
      'Institutional expectations shape what culture changes are possible and at what pace',
      'Regulatory context determines the risk tolerance available for culture experiments',
      'Boards are increasingly involved in culture change as a governance matter',
      'Institutional accountability structures must evolve alongside cultural norms',
    ],
  },
  'economic-reconfiguration': {
    'ceo-transition': [
      'Incoming leaders inherit economic assumptions built for a different cost and capital environment',
      'CEO transitions create a window to reset strategy before economic headwinds become visible constraints',
      'The economic model that justified the previous strategy may no longer hold',
      'New leaders who audit economic assumptions early create options that those who inherit them uncritically do not',
    ],
    transformation: [
      'Economic reconfiguration often creates the urgency that transformation programs require',
      'Transformation built on faulty economic assumptions risks solving for the wrong problem',
      'The organizations that redesign their economic model — not just their operations — will be hardest to displace',
      'Capital availability, cost structures, and competitive economics are all variables in transformation scope and pace',
    ],
    'culture-change': [
      'Economic pressure shapes the organizational culture in ways that culture programs cannot override',
      'Culture change is harder to sustain when economic uncertainty makes people feel their security is at risk',
      'The organizations that are honest with people about economic conditions build more durable cultural trust',
      'Economic reconfiguration changes the meaning of success — and culture must evolve alongside it',
    ],
  },
  'geopolitical-realignment': {
    'ceo-transition': [
      'New leaders inherit geopolitical exposures that may not be fully visible in existing strategy documents',
      'CEO transitions create an opportunity to audit geographic and supply chain dependencies before they become crises',
      'Geopolitical fluency is increasingly expected of incoming chief executives across industries',
      'The strategic assumptions built for a more stable geopolitical environment may need to be rebuilt',
    ],
    transformation: [
      'Transformation strategy built without geopolitical awareness may optimize for a world that is changing',
      'Supply chain resilience, market access, and technology dependencies are geopolitical variables',
      'The organizations that build geopolitical optionality into transformation will have more freedom of movement',
      'Regulatory divergence across major markets is a transformation constraint that must be designed around',
    ],
    'culture-change': [
      'Geopolitical tensions surface in organizational culture — particularly in globally diverse workforces',
      'Culture change programs that ignore geopolitical context may create friction they did not anticipate',
      'Employee expectations around organizational values are shaped by the geopolitical environment they live in',
      'The organizations that take a clear, principled position on geopolitical questions build more cohesive cultures',
    ],
  },
  'climate-and-resilience': {
    'ceo-transition': [
      'New leaders inherit climate commitments they did not make and must decide whether to honour, extend, or revise',
      'CEO transitions create an opportunity to recalibrate climate strategy before disclosure requirements make revision harder',
      'Climate credibility is increasingly a CEO reputation variable, not just a corporate reporting one',
      'The climate positions taken in the first year tend to define the organization\'s posture for the leader\'s tenure',
    ],
    transformation: [
      'Climate resilience is increasingly a design requirement for transformation, not a separate workstream',
      'Organizations that embed climate assumptions into transformation will avoid having to retrofit them',
      'Physical climate risk and transition risk are both variables in long-horizon transformation planning',
      'Climate disclosure requirements are hardening into compliance obligations that transformation programs must accommodate',
    ],
    'culture-change': [
      'Climate values are among the most significant cultural variables in organizations with younger workforces',
      'Employees increasingly evaluate organizational climate credibility against observable action',
      'Culture change programs that ignore climate are missing a dimension that matters deeply to the workforce',
      'The organizations that make climate credibility a genuine cultural commitment rather than a communications strategy build stronger cultures',
    ],
  },
  'resource-and-energy-transition': {
    'ceo-transition': [
      'Incoming leaders may find energy and resource dependencies in the operating model that were not visible in the due diligence',
      'The energy transition is creating strategic inflection points that CEO transitions are well-positioned to act on',
      'Resource and energy strategy is moving from an operational concern to a board-level strategic question',
      'New leaders who build energy transition fluency early will have strategic options that those who inherit assumptions do not',
    ],
    transformation: [
      'The energy transition is creating the kind of structural disruption that transformation programs must design for, not around',
      'Organizations that build energy and resource resilience into transformation will be better positioned for the next decade',
      'The cost and availability of energy is a variable in transformation economics that is more volatile than it has been in decades',
      'Transformation programs that treat energy strategy as a facilities question rather than a strategic one are leaving risk unmanaged',
    ],
    'culture-change': [
      'Energy and resource transition is a values question for many employees, not just a strategic one',
      'Culture change programs that do not engage with the energy transition miss a dimension of organizational purpose that matters to the workforce',
      'The organizations that connect energy transition commitments to cultural identity build more coherent organizations',
      'Employee expectations around organizational sustainability have moved from aspiration to accountability',
    ],
  },
  'identity-and-belonging': {
    'ceo-transition': [
      'Incoming leaders set the cultural tone on belonging in their first six months — sometimes without knowing it',
      'CEO transitions create a window to recalibrate belonging signals before patterns become entrenched',
      'The most capable candidates for key roles are evaluating whether they belong before they evaluate compensation',
      'Leaders who make belonging visible and genuine early build organizational cultures that are harder for competitors to replicate',
    ],
    transformation: [
      'Transformation is among the highest-belonging-risk moments in organizational life — people feel uncertain about whether they have a place in the future',
      'Transformation programs that fail to address belonging explicitly tend to lose the people they most need to keep',
      'The organizations that make belonging a design criterion for the future state will have higher transformation adoption rates',
      'Identity and belonging are not soft variables in transformation — they are predictors of whether people stay and perform',
    ],
    'culture-change': [
      'Culture change without belonging is cosmetic — it changes the language without changing the experience',
      'Belonging is the felt dimension of culture: the answer to whether someone experiences the values as real',
      'The organizations that take belonging seriously — not as a program but as a design criterion — build cultures that persist through leadership changes',
      'Identity questions surface during culture change; organizations that avoid them create culture gaps that belonging research predicts',
    ],
  },
}

// ─── Where shows up ───────────────────────────────────────────────────────────

const whereShowsMap: Record<ForceId, Record<IndustrySlug, string[]>> = {
  'ai-ascendance': {
    healthcare:           ['Operations', 'Care delivery', 'Decision support'],
    'financial-services': ['Lending', 'Fraud detection', 'Advisory', 'Risk management'],
    consumer:             ['Customer experience', 'Product discovery', 'Marketing'],
    technology:           ['Product development', 'Engineering', 'Competitive strategy'],
    energy:               ['Grid operations', 'Asset management', 'Predictive maintenance'],
    manufacturing:        ['Quality control', 'Production scheduling', 'Supply chain optimization'],
    'consumer-brand':     ['Marketing', 'Product discovery', 'Customer analytics'],
    government:           ['Benefits administration', 'Regulatory review', 'Citizen services'],
    consulting:           ['Research and analysis', 'Deck production', 'Client advisory', 'Talent economics'],
  },
  'workforce-transformation': {
    healthcare:           ['Talent', 'Operating model', 'Culture'],
    'financial-services': ['Talent', 'Culture', 'Skill development'],
    consumer:             ['Retail operations', 'Customer service', 'Logistics'],
    technology:           ['Engineering teams', 'Product', 'Talent strategy'],
    energy:               ['Operations', 'Field services', 'Workforce transition programs'],
    manufacturing:        ['Production floor', 'Engineering', 'Talent strategy'],
    'consumer-brand':     ['Creative', 'Marketing', 'Brand strategy roles'],
    government:           ['Civil service', 'Technical talent', 'Service delivery'],
    consulting:           ['Senior talent', 'Practice model', 'Team design', 'Client capability building'],
  },
  'trust-recalibration': {
    healthcare:           ['Governance', 'Patient relationships', 'Workforce trust'],
    'financial-services': ['Customer relationships', 'Regulatory relations', 'Governance'],
    consumer:             ['Brand experience', 'Data practices', 'Customer communication'],
    technology:           ['User relationships', 'Regulatory', 'Enterprise sales'],
    energy:               ['Community relations', 'Regulatory relationships', 'Investor relations'],
    manufacturing:        ['Supply chain transparency', 'Customer relationships', 'ESG reporting'],
    'consumer-brand':     ['Brand experience', 'Data practices', 'Customer communication'],
    government:           ['Public communications', 'Service delivery', 'Policy credibility'],
    consulting:           ['Client relationships', 'Value demonstration', 'Business development'],
  },
  'human-augmentation': {
    healthcare:           ['Clinical operations', 'Role design', 'Technology investment'],
    'financial-services': ['Wealth management', 'Commercial banking', 'Compliance'],
    consumer:             ['High-value service', 'Brand moments', 'Community experience'],
    technology:           ['Engineering', 'Product development', 'Technical leadership'],
    energy:               ['Field operations', 'Grid management', 'Safety systems'],
    manufacturing:        ['Production operations', 'Quality management', 'Engineering'],
    'consumer-brand':     ['Creative direction', 'Brand strategy', 'Customer experience design'],
    government:           ['Case management', 'Regulatory decision-making', 'Policy analysis'],
    consulting:           ['Service delivery', 'Practice design', 'Client advisory model'],
  },
  'institutional-rewiring': {
    healthcare:           ['Governance', 'Compliance', 'Board relationships'],
    'financial-services': ['Compliance', 'Risk management', 'Board relations'],
    consumer:             ['Data strategy', 'Marketing compliance', 'Product design'],
    technology:           ['Legal', 'Government relations', 'Product governance'],
    energy:               ['Regulatory strategy', 'Carbon compliance', 'Market design'],
    manufacturing:        ['Industrial policy strategy', 'Trade compliance', 'ESG reporting'],
    'consumer-brand':     ['Data privacy', 'Marketing compliance', 'AI governance'],
    government:           ['Governance reform', 'Digital infrastructure', 'Accountability frameworks'],
    consulting:           ['Compliance advisory', 'Governance consulting', 'Risk and regulatory practice'],
  },
  'economic-reconfiguration': {
    healthcare:           ['Capital allocation', 'Reimbursement strategy', 'Operating model'],
    'financial-services': ['Competitive strategy', 'Capital markets', 'Product economics'],
    consumer:             ['Pricing strategy', 'Supply chain economics', 'Loyalty model'],
    technology:           ['Business model', 'Platform economics', 'Capital efficiency'],
    energy:               ['Capital allocation', 'Transition finance', 'Asset strategy'],
    manufacturing:        ['Cost structure', 'Supply chain economics', 'Investment strategy'],
    'consumer-brand':     ['Pricing strategy', 'Brand economics', 'Loyalty model'],
    government:           ['Budget strategy', 'Public investment', 'Service economics'],
    consulting:           ['Engagement model', 'Pricing strategy', 'Business development', 'Practice economics'],
  },
  'geopolitical-realignment': {
    healthcare:           ['Supply chain', 'Regulatory strategy', 'Market access'],
    'financial-services': ['Cross-border operations', 'Capital markets', 'Risk management'],
    consumer:             ['Supply chain', 'Sourcing strategy', 'Market access'],
    technology:           ['Market strategy', 'Supply chain', 'Government relations'],
    energy:               ['Critical minerals strategy', 'Market access', 'Energy security planning'],
    manufacturing:        ['Supply chain', 'Trade compliance', 'Market strategy'],
    'consumer-brand':     ['Sourcing strategy', 'Supply chain', 'Market access'],
    government:           ['International relations', 'Trade policy', 'Security strategy'],
    consulting:           ['Strategy advisory', 'Market advisory', 'Geopolitical risk practice'],
  },
  'climate-and-resilience': {
    healthcare:           ['Facilities', 'Supply chain resilience', 'ESG reporting'],
    'financial-services': ['Portfolio risk', 'ESG disclosure', 'Investment strategy'],
    consumer:             ['Brand positioning', 'Supply chain', 'Regulatory compliance'],
    technology:           ['Infrastructure', 'ESG commitments', 'Data centre strategy'],
    energy:               ['Transition strategy', 'Portfolio design', 'Stakeholder management'],
    manufacturing:        ['Facilities', 'Supply chain resilience', 'Carbon reporting'],
    'consumer-brand':     ['Brand positioning', 'Supply chain', 'ESG reporting'],
    government:           ['Infrastructure investment', 'Emergency management', 'Climate policy'],
    consulting:           ['Sustainability advisory', 'ESG strategy', 'Decarbonisation practice'],
  },
  'resource-and-energy-transition': {
    healthcare:           ['Facilities management', 'Supply chain', 'Capital planning'],
    'financial-services': ['Transition finance', 'Asset risk', 'Portfolio strategy'],
    consumer:             ['Logistics', 'Packaging', 'Cost structure'],
    technology:           ['Data centre strategy', 'Infrastructure', 'AI capacity planning'],
    energy:               ['Portfolio strategy', 'Investment planning', 'New business development'],
    manufacturing:        ['Energy management', 'Process decarbonization', 'Capital planning'],
    'consumer-brand':     ['Supply chain', 'Product design', 'Logistics'],
    government:           ['Energy regulation', 'Infrastructure investment', 'International coordination'],
    consulting:           ['Energy transition advisory', 'Sector specialisation', 'Talent competition'],
  },
  'identity-and-belonging': {
    healthcare:           ['Workforce retention', 'Culture', 'Leadership development'],
    'financial-services': ['Talent strategy', 'Culture', 'Early-career pipeline'],
    consumer:             ['Brand positioning', 'Customer loyalty', 'Workforce culture'],
    technology:           ['Talent strategy', 'Culture', 'Employer brand'],
    energy:               ['Workforce communities', 'Culture', 'Transition support programs'],
    manufacturing:        ['Workforce culture', 'Community relations', 'Leadership development'],
    'consumer-brand':     ['Brand positioning', 'Customer loyalty', 'Workforce culture'],
    government:           ['Service design', 'Workforce culture', 'Public communication'],
    consulting:           ['Culture advisory', 'Transformation practice', 'Talent and belonging'],
  },
}

// ─── Top signals per force × industry ────────────────────────────────────────

const topSignals: Record<ForceId, Record<IndustrySlug, string[]>> = {
  'ai-ascendance': {
    healthcare:           ['AI agents enter clinical and administrative workflows', 'Rapid growth in healthcare AI investment', 'AI diagnostic tools reach clinical parity'],
    'financial-services': ['Rapid growth of AI in consumer lending and credit decisioning', 'Emergence of agentic AI in wealth management', 'AI audit requirements entering regulatory frameworks'],
    consumer:             ['Rapid adoption of AI-driven personalization in consumer retail', 'AI-generated content entering consumer marketing', 'Agentic shopping and discovery tools gaining traction'],
    technology:           ['AI coding assistants accelerating software development velocity', 'Agentic AI systems entering production engineering workflows', 'AI-native products displacing established technology categories'],
    energy:               ['AI-enabled grid balancing systems reducing curtailment at scale', 'Predictive maintenance AI reducing unplanned downtime in energy assets', 'AI optimization tools entering upstream resource extraction operations'],
    manufacturing:        ['AI quality control systems reducing defect rates in high-volume production', 'Predictive maintenance AI reducing unplanned downtime in manufacturing', 'AI supply chain optimization tools entering standard manufacturing operations'],
    'consumer-brand':     ['AI-generated creative content entering mainstream consumer brand campaigns', 'AI personalization tools achieving measurable uplift in conversion and retention', 'Agentic AI tools changing how consumers discover and evaluate consumer brands'],
    government:           ['Government AI pilots in benefits processing reducing administrative time significantly', 'AI tools entering regulatory review and permitting workflows', 'Public sector AI procurement growing rapidly as vendors target government'],
    consulting:           ['AI compressing research and analysis tasks that previously required junior consulting teams', 'Clients building internal AI strategy capability, reducing advisory dependency', 'AI-native tools enabling direct client-expert matching outside traditional firm models'],
  },
  'workforce-transformation': {
    healthcare:           ['Persistent workforce shortages in clinical roles', 'Growth of hybrid human-AI care teams', 'Ambient AI documentation tools reducing clinician burden'],
    'financial-services': ['Declining demand for entry-level financial analyst roles', 'Rising premium for AI-fluent relationship managers', 'Internal AI upskilling programs at major institutions'],
    consumer:             ['AI customer service tools reducing handling time in consumer retail', 'Frontline role redesign becoming a workforce strategy priority', 'Consumer preference for human interaction in high-stakes moments'],
    technology:           ['AI accelerating junior developer productivity significantly', 'Shift in engineering hiring toward systems design over implementation', 'Internal AI tool adoption changing team structure and size'],
    energy:               ['Energy transition creating growing mismatch between current workforce skills and future requirements', 'Fossil fuel workforce communities seeking political guarantees alongside economic transition support', 'New energy roles in solar, wind, and storage drawing from outside traditional energy labour markets'],
    manufacturing:        ['Automation investment accelerating in high-labour-cost manufacturing markets', 'Manufacturers increasingly competing with technology companies for engineering talent', 'Manufacturing workforce training programs scaling as skills gap widens'],
    'consumer-brand':     ['Consumer brand organizations restructuring creative and marketing teams around AI capabilities', 'Demand for AI-fluent brand strategists and creative directors rising sharply', 'Traditional advertising and media roles declining as AI handles more production'],
    government:           ['Government struggling to compete with private sector for AI and digital talent', 'Civil service reform initiatives targeting workforce flexibility and skills development', 'Public sector workforce aging creating succession risk in critical service areas'],
    consulting:           ['Senior talent migrating to fractional and independent models faster than firms anticipated', 'Platforms enabling high-end solo consultants to compete directly with established firms', 'Consulting talent evaluating employers on values alignment and flexibility, not just compensation'],
  },
  'trust-recalibration': {
    healthcare:           ['Public trust in AI-assisted care diverges by domain', 'Expansion of AI governance requirements in healthcare', 'Clinician trust in AI tools tracks with involvement in deployment'],
    'financial-services': ['Regulatory frameworks targeting algorithmic lending bias', 'Growing customer demand for human explanation of AI decisions', 'EU AI Act enforcement accelerating for financial services'],
    consumer:             ['Consumer backlash against invasive AI personalization', 'Brand preference shifting toward transparency in data use', 'Growing regulatory attention to AI in consumer marketing'],
    technology:           ['User trust in AI-generated content declining in key domains', 'Regulatory scrutiny of AI systems used in high-stakes decisions', 'Enterprise buyers demanding AI transparency and auditability'],
    energy:               ['Community opposition to energy transition infrastructure delaying project timelines', 'Just transition discourse shifting from aspirational to political and contractual', 'Energy company climate commitments facing legal scrutiny for precision and verifiability'],
    manufacturing:        ['Supply chain due diligence requirements becoming legally mandated in major markets', 'Consumers and enterprise buyers demanding verified supply chain transparency', 'Manufacturing ESG ratings gaining weight in procurement decisions'],
    'consumer-brand':     ['Consumer backlash against perceived AI manipulation in brand personalization', 'Brand trust erosion accelerating when stated values and observable practice diverge', 'Consumer data privacy concerns hardening into active brand avoidance in key segments'],
    government:           ['Public trust in government institutions at multi-decade lows in several major democracies', 'Institutional credibility gaps making policy implementation slower and more contested', 'Social media accelerating the speed at which government trust is lost'],
    consulting:           ['Client scrutiny of measurable impact intensifying as AI reduces information asymmetry', 'Consultant fatigue and cynicism creating openings for differentiated value propositions', 'Reputation increasingly driven by peer networks and visible track records, not firm brand'],
  },
  'human-augmentation': {
    healthcare:           ['Growth of personalized patient experiences', 'AI diagnostic tools reach clinical parity in radiology and pathology', 'Human-AI complementarity producing superior outcomes in research'],
    'financial-services': ['Growing adoption of AI co-pilot tools among relationship managers', 'Client preference for hybrid human-AI advisory models', 'Human accountability requirements in AI-driven financial decisions'],
    consumer:             ['Consumer research confirming human preference in emotionally significant interactions', 'Premium brands investing in elevated human experience as differentiator', 'Service design increasingly distinguishing human and AI touchpoints'],
    technology:           ['AI pair programming tools changing how software is written', 'Product teams using AI for ideation, testing, and design iteration', 'Engineering organizations rethinking what human judgment adds in AI-assisted work'],
    energy:               ['Remote monitoring and AI reducing need for field personnel in routine operations', 'Human safety judgment remaining decisive in novel failure modes and emergency response', 'Energy worker roles evolving from physical operation to system oversight and intervention'],
    manufacturing:        ['Collaborative robotics growth shifting factory floor roles from execution to oversight', 'Manufacturing engineers increasingly managing AI systems rather than direct production', 'Human adaptability valued higher than speed in complex, variable production environments'],
    'consumer-brand':     ['Brand strategists using AI for ideation and testing while retaining creative direction', 'Consumer research confirming human judgment irreplaceable in brand culture and tone decisions', 'AI-human creative collaboration models becoming standard in leading consumer brand agencies'],
    government:           ['AI entering government decision support in welfare, permitting, and enforcement', 'Courts and oversight bodies scrutinizing AI-assisted government decisions for fairness', 'Human accountability requirements limiting pure AI automation of high-stakes government decisions'],
    consulting:           ['Human-AI service delivery becoming the competitive baseline in strategy and advisory', 'Clients expecting faster, cheaper, always-on insight alongside senior human judgment', 'Firms deploying AI to augment senior judgment outperforming those using it only to reduce headcount'],
  },
  'institutional-rewiring': {
    healthcare:           ['Expansion of AI governance requirements in clinical settings', 'New compliance frameworks for high-risk AI systems', 'EU AI Act creating precedent for healthcare AI governance'],
    'financial-services': ['Algorithmic accountability standards from financial regulators', 'EU AI Act enforcement timeline accelerating', 'Board AI governance requirements becoming standard practice'],
    consumer:             ['Major markets implementing new consumer AI and data regulations', 'Consumer preference shifting toward privacy-protective brands', 'Advertising AI facing new disclosure requirements'],
    technology:           ['AI regulation advancing in EU, UK, US, and major markets simultaneously', 'Government scrutiny of foundation model providers intensifying', 'Enterprise AI procurement requiring compliance documentation'],
    energy:               ['Carbon pricing mechanisms expanding in major markets, creating new cost structures', 'Energy market design rules being rewritten to accommodate variable renewable generation', 'Permitting reform emerging as a political priority as transition infrastructure bottlenecks'],
    manufacturing:        ['US, EU, and Asian industrial policy creating competitive incentive structures for domestic manufacturing', 'Supply chain due diligence legislation becoming operative in EU and UK', 'Trade remedy actions and tariff escalation creating new compliance and strategic planning requirements'],
    'consumer-brand':     ['EU Digital Markets Act and Digital Services Act creating new constraints on consumer data use', 'AI in advertising facing new disclosure and accountability requirements in major markets', 'Consumer brand AI practices attracting increasing regulatory and activist scrutiny'],
    government:           ['AI governance frameworks for public sector deployment advancing in EU, UK, and OECD', 'Digital infrastructure regulation creating new requirements for government technology procurement', 'Accountability frameworks for AI-assisted government decisions being developed by oversight bodies'],
    consulting:           ['Governance, risk, and compliance advisory growing as proportion of consulting demand', 'AI governance requirements creating new advisory categories for positioned firms', 'Regulatory complexity increasing specialist advisory demand across sectors'],
  },
  'economic-reconfiguration': {
    healthcare:           ['Healthcare reimbursement model reform accelerating', 'Capital cost of health system expansion rising with elevated rates', 'Health system M&A activity driven by margin pressure'],
    'financial-services': ['Industrial policy reshaping capital allocation across major economies', 'Cost of capital structurally elevated relative to 2010–2020 norms', 'AI productivity gains concentrating returns unevenly across financial institutions'],
    consumer:             ['Consumer spending patterns diverging sharply by income segment', 'Private label share rising as price sensitivity increases', 'Supply chain costs remaining elevated despite normalization expectations'],
    technology:           ['Platform economics under pressure as capital efficiency expectations tighten', 'AI infrastructure investment creating new cost structures for technology companies', 'Venture capital concentration accelerating around AI-native businesses'],
    energy:               ['Transition finance instruments scaling rapidly as green bond and infrastructure debt markets mature', 'Stranded asset risk repricing fossil fuel assets in institutional portfolios', 'Energy infrastructure investment requirements creating significant capital deployment opportunity'],
    manufacturing:        ['Reshoring subsidies and industrial policy incentives reshaping manufacturing location economics', 'Input cost volatility — energy, critical minerals, logistics — compressing margins in exposed sectors', 'Automation ROI improving as labour costs rise and technology costs fall'],
    'consumer-brand':     ['Consumer spending power diverging sharply by income segment, complicating mass-market strategies', 'Private label and value-tier growth outpacing branded tiers as price sensitivity rises', 'Brand premium under pressure as consumers scrutinize value propositions more carefully'],
    government:           ['Fiscal consolidation pressures constraining public investment in most advanced economies', 'Rising cost of public debt reducing the available fiscal space for new government programs', 'Productivity imperative creating political pressure for public service efficiency and reform'],
    consulting:           ['Clients resisting time-and-materials pricing and demanding outcome-based models', 'AI compressing the work that justified traditional consulting leverage ratios', 'Procurement sophistication treating consulting as managed spend with strict ROI scrutiny'],
  },
  'geopolitical-realignment': {
    healthcare:           ['Pharmaceutical supply chain concentration creating regulatory and security concerns', 'Medical device trade policy becoming more restrictive', 'Healthcare regulatory divergence complicating cross-border clinical operations'],
    'financial-services': ['Capital flow restrictions reshaping cross-border investment strategies', 'Financial sanctions creating compliance complexity for global institutions', 'Central bank digital currency initiatives changing the architecture of cross-border payments'],
    consumer:             ['Supply chain regionalization accelerating across apparel, electronics, and consumer goods', 'Tariff uncertainty creating hedging costs in consumer goods sourcing', 'Consumer sentiment toward country-of-origin shifting in several major markets'],
    technology:           ['US-China technology decoupling accelerating across AI and semiconductors', 'Technology export controls creating market access constraints', 'Sovereign AI initiatives bifurcating the technology standards landscape'],
    energy:               ['Critical mineral supply chains concentrated in geopolitically sensitive countries creating strategic risk', 'Energy security rising as a top-tier national security and industrial policy priority', 'LNG and pipeline infrastructure investment driven by energy security logic, not only economics'],
    manufacturing:        ['Friend-shoring creating preferential trade relationships that advantage well-positioned manufacturers', 'Tariff escalation creating significant uncertainty in supply chain investment decisions', 'Technology export controls affecting manufacturing capabilities in semiconductor-adjacent sectors'],
    'consumer-brand':     ['Tariff and trade policy volatility increasing sourcing costs and complexity for global consumer brands', 'Country-of-origin consumer sentiment shifting in multiple major markets', 'Supply chain regionalization increasing resilience but also per-unit cost'],
    government:           ['Alliance structures under pressure as geopolitical realignment reshapes security commitments', 'International regulatory cooperation declining in some areas, creating divergent compliance environments', 'Economic statecraft — sanctions, subsidies, export controls — becoming a primary tool of government strategy'],
    consulting:           ['Geopolitical uncertainty creating advisory demand while suppressing discretionary spending', 'Trade policy and industrial strategy creating new advisory categories for positioned firms', 'Clients seeking integrated geopolitical perspective that traditional strategy frameworks do not provide'],
  },
  'climate-and-resilience': {
    healthcare:           ['Climate-related health events increasing demand burden on health systems', 'Healthcare facilities facing rising climate resilience requirements', 'Staff expectations around organizational climate action hardening'],
    'financial-services': ['Mandatory climate disclosure requirements entering force in major markets', 'Physical climate risk repricing in real estate and infrastructure portfolios', 'Transition risk assessment becoming a standard component of credit analysis'],
    consumer:             ['Consumer preference for climate-credible brands measurable in purchase data', 'Retail supply chains exposed to physical climate risk in key sourcing regions', 'Consumer goods companies facing activist and investor pressure on climate commitments'],
    technology:           ['AI data centre energy demands colliding with climate commitments', 'Physical climate risk to data centre infrastructure increasing', 'Technology company climate credibility under heightened scrutiny'],
    energy:               ['Physical climate risk increasing financial exposure of existing fossil fuel infrastructure', 'Transition risk repricing fossil fuel assets faster than most modelled', 'Community expectations around energy transition pace and justice becoming political variables'],
    manufacturing:        ['Extreme weather events creating direct operational disruption at manufacturing sites', 'Carbon pricing entering supply chain cost models as transition mechanisms mature', 'Industrial decarbonization investment accelerating as technology costs fall and policy pressure rises'],
    'consumer-brand':     ['Consumer preference data showing measurable shift toward climate-credible brands', 'Retail supply chains exposed to physical climate disruption in key sourcing regions', 'Consumer brand carbon footprint disclosure becoming standard in regulated markets'],
    government:           ['Climate-related disaster response cost increasing as physical climate risk materializes', 'Climate disclosure requirements for public bodies entering force in several major markets', 'Long-term public investment planning increasingly incorporating climate scenario analysis'],
    consulting:           ['Sustainability and decarbonisation advisory among fastest-growing practice areas globally', 'Mandatory climate disclosure creating compliance-adjacent consulting demand', 'Firms without credible sustainability practices losing relevance with climate-conscious clients'],
  },
  'resource-and-energy-transition': {
    healthcare:           ['Healthcare facility energy costs rising with transition and grid volatility', 'Medical supply chain dependencies on critical minerals becoming visible', 'Energy resilience becoming a facilities strategy priority for major health systems'],
    'financial-services': ['Transition finance volumes growing rapidly as energy investment accelerates', 'Stranded asset risk repricing in fossil fuel-linked portfolios', 'Energy transition creating significant new categories of infrastructure debt'],
    consumer:             ['Electrification of logistics raising costs and operational complexity', 'Energy cost exposure in consumer goods manufacturing increasing', 'Consumer expectations around product energy footprint becoming more specific'],
    technology:           ['Power availability for AI infrastructure becoming a strategic constraint', 'Data centre energy demand growing faster than renewable supply in key markets', 'Critical mineral dependencies in hardware supply chains surfacing as strategic risks'],
    energy:               ['Renewable energy capacity additions outpacing fossil fuel additions globally for the third consecutive year', 'Battery storage economics improving faster than mainstream models projected', 'Critical mineral demand for energy transition creating new geopolitical and supply chain dynamics'],
    manufacturing:        ['Industrial electrification investment accelerating as cost parity with gas-based processes approaches', 'Green hydrogen emerging as a viable industrial fuel in hard-to-electrify manufacturing sectors', 'Energy cost exposure in manufacturing intensifying as carbon pricing mechanisms expand'],
    'consumer-brand':     ['Supply chain decarbonization becoming a procurement criterion for major retail customers', 'Consumer goods packaging and logistics electrification creating capital investment requirements', 'Scope 3 emissions reporting requirements increasing pressure on consumer brand supply chains'],
    government:           ['Government energy transition investment commitments at historic highs across major economies', 'Permitting and grid connection bottlenecks emerging as transition pace constraints', 'International energy transition coordination through G7, G20, and COP mechanisms intensifying'],
    consulting:           ['Energy transition advisory scaling as organisations across sectors face operational implications', 'Critical minerals and supply chain exposure creating advisory demand outside energy sector', 'Firms building energy transition practices facing significant talent competition'],
  },
  'identity-and-belonging': {
    healthcare:           ['Clinical workforce belonging scores predicting voluntary departure at 18-month horizon', 'Healthcare organizations with stronger belonging metrics showing lower agency staff costs', 'Gen Z clinical professionals citing belonging as a top-three employment criterion'],
    'financial-services': ['Younger financial services professionals citing belonging as decisive in employer choice', 'Employee resource group participation correlating with retention in mid-career cohorts', 'Belonging gaps between demographic groups remaining persistent despite DEI investment'],
    consumer:             ['Consumer loyalty increasingly correlated with brand representation scores', 'Brand authenticity metrics emerging as leading indicators of consumer retention', 'Community-building becoming a primary consumer brand growth strategy'],
    technology:           ['Technical talent departure rates highest in organizations with low belonging scores', 'Employer brand perception on belonging becoming a recruiting variable in competitive talent markets', 'Gen Z technical professionals placing values alignment above compensation in employer evaluations'],
    energy:               ['Just transition discourse forcing organizations to address workforce and community identity explicitly', 'Energy worker communities generating organized political resistance to transition pace', 'New energy workforce identity emerging in solar, wind, and storage communities'],
    manufacturing:        ['Manufacturing communities facing identity disruption as automation reduces traditional employment', 'Worker pride and craftsmanship identity becoming a talent retention variable in reshoring investments', 'Community investment commitments becoming a condition of social licence for manufacturing operations'],
    'consumer-brand':     ['Diverse representation in brand marketing becoming a measurable driver of purchase preference', 'Brands perceived as inauthentic in belonging claims facing organized consumer and activist pressure', 'Consumer community-building becoming a primary brand loyalty strategy'],
    government:           ['Public institutions failing to reflect the demographic diversity of the populations they serve losing credibility', 'Belonging gaps in public sector workforce creating retention risk and service quality consequences', 'Policy design increasingly expected to demonstrate belonging and inclusion by affected communities'],
    consulting:           ['Culture advisory growing as presenting problem behind CEO transition and transformation mandates', 'Firms perceived as lacking genuine inclusion facing talent disadvantage in competitive hiring', 'Clients expecting advisory firms to model the belonging practices they are paid to recommend'],
  },
}

// ─── Signals pool per industry ────────────────────────────────────────────────

type SignalInput = Omit<Signal, 'id'>
const signalPools: Record<IndustrySlug, SignalInput[]> = {
  healthcare: [
    { title: 'AI agents enter clinical and administrative workflows', potentialImpact: 'Redesign of care coordination, documentation, and patient engagement.', relatedForce: 'AI Ascendance', sourceName: 'HIMSS', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Expansion of AI governance requirements in clinical settings', potentialImpact: 'New compliance, oversight, and accountability structures in clinical AI.', relatedForce: 'Institutional Rewiring', sourceName: 'HHS', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Persistent workforce shortages in clinical roles', potentialImpact: 'Acceleration of automation and augmentation strategies across care settings.', relatedForce: 'Workforce Transformation', sourceName: 'AHA Workforce', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Clinical workforce belonging scores predicting voluntary departure', potentialImpact: 'Belonging gaps creating structural retention risk beyond what compensation alone can address.', relatedForce: 'Identity & Belonging', sourceName: 'Press Ganey', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Public trust in AI-assisted care diverging sharply by clinical domain and patient demographic', potentialImpact: 'Organizations deploying AI without visible governance frameworks facing credibility risk with patients and clinicians.', relatedForce: 'Trust Recalibration', sourceName: 'JAMA Health Forum', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'High' },
    { title: 'AI diagnostic tools reaching clinical parity in radiology and pathology', potentialImpact: 'Clinical roles being redesigned around AI capability in imaging-intensive specialties.', relatedForce: 'Human Augmentation', sourceName: 'NEJM AI', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Healthcare reimbursement model reform accelerating as payers renegotiate value-based arrangements', potentialImpact: 'Operating models built for fee-for-service economics facing structural pressure.', relatedForce: 'Economic Reconfiguration', sourceName: 'KFF Health Policy', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Pharmaceutical and medical device supply chain concentration creating regulatory and security vulnerabilities', potentialImpact: 'Strategic dependencies in drug manufacturing and device supply chains surfacing as operational risks.', relatedForce: 'Geopolitical Realignment', sourceName: 'FDA Drug Shortages', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Climate-related health events increasing demand burden on health systems in exposed regions', potentialImpact: 'Operational resilience requirements rising for health systems in climate-vulnerable geographies.', relatedForce: 'Climate & Resilience', sourceName: 'Lancet Countdown', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Healthcare facility energy costs rising as grid transition creates cost and reliability volatility', potentialImpact: 'Energy resilience becoming a facilities strategy priority for major health systems.', relatedForce: 'Resource & Energy Transition', sourceName: 'ASHE Energy Benchmark', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
  ],
  'financial-services': [
    { title: 'Rapid growth of AI in consumer lending, credit decisioning, and wealth management', potentialImpact: 'Competitive gap between AI-enabled and AI-naive institutions widening faster than anticipated.', relatedForce: 'AI Ascendance', sourceName: 'Oliver Wyman FinTech', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Industrial policy reshaping capital allocation across major economies', potentialImpact: 'Competitive economics of financial services changing as capital flows follow policy, not just returns.', relatedForce: 'Economic Reconfiguration', sourceName: 'IMF Fiscal Monitor', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Growing customer demand for human explanation of AI decisions', potentialImpact: 'Customer experience expectations shifting toward transparency and explanation.', relatedForce: 'Trust Recalibration', sourceName: 'Edelman Trust Barometer', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Regulatory frameworks targeting algorithmic lending bias and AI accountability', potentialImpact: 'Compliance requirements for high-risk AI systems becoming operative across lending and advisory.', relatedForce: 'Institutional Rewiring', sourceName: 'CFPB', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Transition finance volumes growing rapidly as energy investment accelerates', potentialImpact: 'New categories of infrastructure debt and equity creating opportunity and risk.', relatedForce: 'Resource & Energy Transition', sourceName: 'BloombergNEF', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Declining demand for entry-level analyst roles as AI handles more structured financial analysis', potentialImpact: 'Entry-level pipeline and career development models under structural pressure.', relatedForce: 'Workforce Transformation', sourceName: 'Citigroup Future of Finance', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Growing adoption of AI co-pilot tools among relationship managers producing measurable client outcome improvements', potentialImpact: 'Hybrid human-AI advisory becoming the competitive baseline in wealth and commercial banking.', relatedForce: 'Human Augmentation', sourceName: 'Accenture Banking', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Capital flow restrictions and financial sanctions reshaping cross-border investment and financing strategies', potentialImpact: 'Compliance complexity and market access constraints rising for globally active institutions.', relatedForce: 'Geopolitical Realignment', sourceName: 'BIS Quarterly Review', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Mandatory climate disclosure requirements entering force with physical and transition risk assessments now standard', potentialImpact: 'Portfolio risk frameworks requiring structural updates to accommodate climate scenario analysis.', relatedForce: 'Climate & Resilience', sourceName: 'TCFD Status Report', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Belonging gaps between demographic groups remaining persistent in financial services despite sustained investment', potentialImpact: 'Structural retention risk concentrated in mid-career cohorts among underrepresented groups.', relatedForce: 'Identity & Belonging', sourceName: 'Deloitte FS Inclusion', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
  ],
  consumer: [
    { title: 'Rapid adoption of AI-driven personalization in consumer retail', potentialImpact: 'Competitive pressure on organizations without AI-enabled discovery and recommendation.', relatedForce: 'AI Ascendance', sourceName: 'Forrester Consumer Tech', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Consumer spending patterns diverging sharply by income segment', potentialImpact: 'Value proposition and pricing strategy assumptions built for a unified market no longer hold.', relatedForce: 'Economic Reconfiguration', sourceName: 'McKinsey Consumer', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Consumer loyalty increasingly correlated with brand belonging scores', potentialImpact: 'Belonging and representation becoming measurable drivers of retention and advocacy.', relatedForce: 'Identity & Belonging', sourceName: 'Edelman Brand Trust', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Major markets implementing new consumer AI and data regulations', potentialImpact: 'Compliance requirements changing data use, personalization, and advertising practices.', relatedForce: 'Institutional Rewiring', sourceName: 'IAPP', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Consumer preference confirmed for human interaction in high-stakes service moments', potentialImpact: 'Design implication for where human presence creates differentiation vs. commodity.', relatedForce: 'Human Augmentation', sourceName: 'PwC Consumer Intelligence', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'AI customer service tools reducing handling time in consumer retail, triggering frontline role redesign', potentialImpact: 'Workforce redesign becoming a leading indicator of automation deployment pace.', relatedForce: 'Workforce Transformation', sourceName: 'McKinsey Future of Work', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Consumer backlash against invasive AI personalization generating measurable brand switching', potentialImpact: 'Organizations deploying AI personalization without trust frameworks exposed to brand damage.', relatedForce: 'Trust Recalibration', sourceName: 'Edelman Trust Barometer', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Supply chain regionalization accelerating across apparel, electronics, and consumer goods categories', potentialImpact: 'Per-unit costs rising and sourcing complexity increasing as regionalization replaces global optimization.', relatedForce: 'Geopolitical Realignment', sourceName: 'BCG Trade Monitor', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Retail supply chains exposed to physical climate disruption in key sourcing regions', potentialImpact: 'Supply chain resilience investment becoming a cost-of-doing-business requirement in exposed categories.', relatedForce: 'Climate & Resilience', sourceName: 'Swiss Re Institute', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Electrification of consumer goods logistics raising costs and complexity in last-mile delivery', potentialImpact: 'Delivery economics and last-mile infrastructure requiring capital investment ahead of regulatory mandates.', relatedForce: 'Resource & Energy Transition', sourceName: 'Deloitte Supply Chain', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
  ],
  technology: [
    { title: 'AI coding assistants accelerating software development velocity by 30–50%', potentialImpact: 'Fundamental change in how software teams are sized, structured, and managed.', relatedForce: 'AI Ascendance', sourceName: 'GitHub Research', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Power availability for AI infrastructure becoming a strategic constraint', potentialImpact: 'Data centre energy access shifting from operational concern to strategic constraint on AI ambition.', relatedForce: 'Resource & Energy Transition', sourceName: 'IEA Data Report', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'US-China technology decoupling accelerating across AI and semiconductors', potentialImpact: 'Market bifurcation creating strategic choices about where to compete and on whose terms.', relatedForce: 'Geopolitical Realignment', sourceName: 'CSIS Tech Policy', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Enterprise buyers demanding AI transparency and auditability', potentialImpact: 'New product requirements and procurement standards for B2B AI products.', relatedForce: 'Trust Recalibration', sourceName: 'Gartner Enterprise IT', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Technical talent departure rates highest in organizations with low belonging scores', potentialImpact: 'Belonging gaps creating structural retention risk at organizations that can least afford it.', relatedForce: 'Identity & Belonging', sourceName: 'Sequoia Talent Report', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Shift in engineering hiring toward systems design and AI direction over implementation velocity', potentialImpact: 'Talent profiles, compensation structures, and career ladders requiring fundamental redesign.', relatedForce: 'Workforce Transformation', sourceName: 'Sequoia Talent Report', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'AI pair programming tools changing how software is written and how engineering teams are structured', potentialImpact: 'Team size, role design, and the meaning of engineering expertise shifting faster than org structures adapt.', relatedForce: 'Human Augmentation', sourceName: 'GitHub Octoverse', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'AI regulation advancing simultaneously in EU, UK, US, and major markets creating multi-jurisdictional compliance obligations', potentialImpact: 'Product design, data governance, and deployment velocity affected by divergent regulatory requirements.', relatedForce: 'Institutional Rewiring', sourceName: 'IAPP AI Governance', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Platform economics under pressure as capital efficiency expectations tighten around AI-native business models', potentialImpact: 'Valuation and investment assumptions built on growth-at-any-cost being repriced toward profitability.', relatedForce: 'Economic Reconfiguration', sourceName: 'a16z State of AI', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'AI data centre energy demands colliding with climate commitments and power grid capacity constraints', potentialImpact: 'Energy access becoming a strategic constraint on AI infrastructure expansion ambitions.', relatedForce: 'Climate & Resilience', sourceName: 'IEA Data Centres', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'High' },
  ],
  energy: [
    { title: 'Renewable energy capacity additions outpacing fossil fuel investment globally', potentialImpact: 'Structural shift in energy economics accelerating faster than most planning models assumed.', relatedForce: 'Resource & Energy Transition', sourceName: 'IEA World Energy Outlook', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Critical mineral supply chain concentration creating energy transition bottlenecks', potentialImpact: 'Strategic dependencies in battery and solar supply chains emerging as geopolitical and commercial risks.', relatedForce: 'Geopolitical Realignment', sourceName: 'BloombergNEF', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Just transition commitments becoming legally and contractually specified', potentialImpact: 'Social licence requirements for energy transition moving from aspiration to obligation.', relatedForce: 'Trust Recalibration', sourceName: 'ILO Just Transition', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Physical climate risk repricing fossil fuel infrastructure assets', potentialImpact: 'Asset valuations under pressure as physical risk materializes faster than transition models assumed.', relatedForce: 'Climate & Resilience', sourceName: 'MSCI Climate Risk', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Energy AI optimization tools generating measurable returns in generation and transmission', potentialImpact: 'Operational advantage gap between AI-enabled and AI-naive operators widening.', relatedForce: 'AI Ascendance', sourceName: 'Wood Mackenzie', publicationDate: 'May 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Energy transition creating growing mismatch between current workforce skills and future operational requirements', potentialImpact: 'Transition programs that do not address workforce capability and identity will face resistance and execution gaps.', relatedForce: 'Workforce Transformation', sourceName: 'IEA Clean Energy Jobs', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Remote monitoring and AI reducing need for field personnel while raising the premium on oversight judgment', potentialImpact: 'Energy worker roles evolving from physical operation to system oversight, intervention, and safety governance.', relatedForce: 'Human Augmentation', sourceName: 'EPRI Digital Operations', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Energy market design rules being rewritten to accommodate variable renewable generation and new storage assets', potentialImpact: 'Organizations that understand regulatory direction will position capital ahead of those that react to each change.', relatedForce: 'Institutional Rewiring', sourceName: 'FERC Order Archive', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Transition finance instruments scaling rapidly as green bond and infrastructure debt markets mature', potentialImpact: 'Capital access diverging between organizations positioned for transition finance and those dependent on traditional structures.', relatedForce: 'Economic Reconfiguration', sourceName: 'Climate Bonds Initiative', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Just transition discourse shifting from aspiration to legally specified obligation in several major markets', potentialImpact: 'Workforce and community belonging becoming a compliance and social licence condition, not only a values question.', relatedForce: 'Identity & Belonging', sourceName: 'ILO Just Transition', publicationDate: 'May 2026', sourceLink: '#', confidence: 'Medium' },
  ],
  manufacturing: [
    { title: 'Industrial policy subsidies reshaping manufacturing location economics globally', potentialImpact: 'Investment decisions increasingly driven by policy incentives rather than factor cost alone.', relatedForce: 'Economic Reconfiguration', sourceName: 'OECD Industrial Policy Monitor', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Automation investment accelerating as labour costs rise in key manufacturing markets', potentialImpact: 'Structural shift in manufacturing labour economics creating competitive divergence between early and late movers.', relatedForce: 'Workforce Transformation', sourceName: 'Rockwell Automation Survey', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Supply chain due diligence legislation becoming operative in EU and UK markets', potentialImpact: 'New compliance requirements for supply chain transparency creating operational and strategic obligations.', relatedForce: 'Institutional Rewiring', sourceName: 'European Parliament', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Tariff escalation and trade realignment creating supply chain investment uncertainty', potentialImpact: 'Long-cycle manufacturing investments harder to justify as policy environment remains volatile.', relatedForce: 'Geopolitical Realignment', sourceName: 'WTO Trade Monitor', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Industrial electrification investment accelerating as carbon pricing expands', potentialImpact: 'Manufacturing energy cost structure changing as electrification and carbon pricing intersect.', relatedForce: 'Resource & Energy Transition', sourceName: 'Rocky Mountain Institute', publicationDate: 'May 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'AI quality control and predictive maintenance systems generating measurable operational advantage', potentialImpact: 'Competitive gap between AI-enabled and AI-naive manufacturers compounding across cost, quality, and uptime.', relatedForce: 'AI Ascendance', sourceName: 'McKinsey Manufacturing', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Supply chain transparency requirements hardening into legally mandated due diligence', potentialImpact: 'Organizations without verifiable supply chain transparency losing access to major customer and investor relationships.', relatedForce: 'Trust Recalibration', sourceName: 'European Parliament', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Collaborative robotics growth shifting factory floor roles from physical execution to oversight and judgment', potentialImpact: 'Human adaptability and judgment becoming the scarce variable on increasingly automated production floors.', relatedForce: 'Human Augmentation', sourceName: 'IFR World Robotics', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Industrial decarbonization investment accelerating as carbon pricing expands and customer requirements tighten', potentialImpact: 'Carbon cost exposure becoming a competitive disadvantage for manufacturers that delay decarbonization investment.', relatedForce: 'Climate & Resilience', sourceName: 'Rocky Mountain Institute', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Manufacturing communities facing identity disruption as automation reduces traditional employment and changes the meaning of craft', potentialImpact: 'Organizations that do not address workforce belonging through transition will face resistance and retention failure.', relatedForce: 'Identity & Belonging', sourceName: 'Brookings Metro Program', publicationDate: 'May 2026', sourceLink: '#', confidence: 'Medium' },
  ],
  'consumer-brand': [
    { title: 'AI personalization tools generating measurable conversion and retention uplift in consumer retail', potentialImpact: 'Competitive gap between AI-enabled and AI-naive consumer brands widening faster than expected.', relatedForce: 'AI Ascendance', sourceName: 'Forrester Consumer Tech', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Consumer spending bifurcating sharply by income segment in major markets', potentialImpact: 'Mass-market brand strategies under pressure as middle-market purchasing power erodes.', relatedForce: 'Economic Reconfiguration', sourceName: 'McKinsey Consumer', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Brand loyalty correlation with belonging and representation scores strengthening', potentialImpact: 'Identity-aligned consumer brands building structural loyalty advantages in key demographics.', relatedForce: 'Identity & Belonging', sourceName: 'Edelman Brand Trust', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Consumer data privacy enforcement accelerating across EU, UK, and US markets', potentialImpact: 'Marketing data practices requiring structural changes as enforcement becomes routine.', relatedForce: 'Institutional Rewiring', sourceName: 'IAPP Global Privacy', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Consumer preference for climate-credible brands measurable in purchase and switching data', potentialImpact: 'Climate authenticity gap becoming a brand risk that competitors and advocates can exploit.', relatedForce: 'Climate & Resilience', sourceName: 'BCG Center for Growth', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Consumer brand organizations restructuring creative and marketing teams around AI capabilities', potentialImpact: 'Workforce redesign becoming a leading indicator of AI adoption pace in brand and marketing functions.', relatedForce: 'Workforce Transformation', sourceName: 'WPP Future of Creativity', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Brand trust erosion accelerating when stated values and observable organizational practice visibly diverge', potentialImpact: 'Gap between brand promise and organizational reality becoming a commercially exploitable vulnerability.', relatedForce: 'Trust Recalibration', sourceName: 'Edelman Brand Trust', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Brand strategists using AI for creative ideation and testing while retaining direction of cultural tone and brand voice', potentialImpact: 'Human creative judgment becoming more valuable, not less, as AI handles more execution.', relatedForce: 'Human Augmentation', sourceName: 'Cannes Lions Creative Report', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Tariff and trade policy volatility increasing sourcing costs and complexity for globally sourced consumer brands', potentialImpact: 'Organizations without supply chain optionality absorbing margin pressure that more flexible competitors avoid.', relatedForce: 'Geopolitical Realignment', sourceName: 'BCG Trade Exposure Index', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Scope 3 emissions reporting requirements increasing pressure on consumer brand supply chains', potentialImpact: 'Supply chain decarbonization moving from voluntary aspiration to commercial and regulatory requirement.', relatedForce: 'Resource & Energy Transition', sourceName: 'CDP Supply Chain', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
  ],
  government: [
    { title: 'Government AI pilots demonstrating significant productivity gains in citizen services', potentialImpact: 'Political and operational pressure increasing to scale AI deployment across public services.', relatedForce: 'AI Ascendance', sourceName: 'OECD Digital Government', publicationDate: 'May 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Public trust in government institutions at multi-decade lows in several major democracies', potentialImpact: 'Policy implementation slower and more contested as institutional credibility gaps widen.', relatedForce: 'Trust Recalibration', sourceName: 'Edelman Trust Barometer', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'AI governance frameworks for public sector deployment advancing in EU, UK, and OECD', potentialImpact: 'New compliance requirements for government AI deployment creating procurement and governance obligations.', relatedForce: 'Institutional Rewiring', sourceName: 'OECD AI Observatory', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Geopolitical realignment reshaping the multilateral institutions that governments depend on', potentialImpact: 'International coordination on trade, climate, and security becoming harder in a more contested order.', relatedForce: 'Geopolitical Realignment', sourceName: 'Chatham House', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Fiscal consolidation pressures constraining public investment across most advanced economies', potentialImpact: 'Government capacity to respond to new demands limited by fiscal headroom at a time of rising service expectations.', relatedForce: 'Economic Reconfiguration', sourceName: 'IMF Fiscal Monitor', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Government struggling to compete with private sector for AI and digital talent as skills gap widens', potentialImpact: 'Delivery capacity for digital public services constrained by structural inability to recruit and retain technical capability.', relatedForce: 'Workforce Transformation', sourceName: 'OECD Digital Gov', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'AI entering government decision support in welfare, permitting, and enforcement raising accountability and fairness questions', potentialImpact: 'Human oversight requirements and legal challenges shaping the pace and scope of AI deployment in public services.', relatedForce: 'Human Augmentation', sourceName: 'Ada Lovelace Institute', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Climate-related disaster response costs increasing as physical risk materializes, testing institutional capacity', potentialImpact: 'Governments facing a compounding fiscal and operational challenge as climate events become more frequent and costly.', relatedForce: 'Climate & Resilience', sourceName: 'UNDRR Global Risk Report', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Government energy transition investment commitments at historic highs, creating implementation capacity challenges', potentialImpact: 'The gap between commitment and delivery capability emerging as the binding constraint on transition pace.', relatedForce: 'Resource & Energy Transition', sourceName: 'IEA Clean Energy Monitor', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Public institutions failing to reflect the demographic diversity of the populations they serve losing credibility', potentialImpact: 'Belonging gaps in public sector workforce creating service quality consequences and recruitment disadvantage.', relatedForce: 'Identity & Belonging', sourceName: 'UK Civil Service Diversity', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
  ],
  consulting: [
    { title: 'AI compressing research and analysis tasks that previously required junior consulting teams', potentialImpact: 'Traditional leverage model under structural pressure as AI enables fewer people to produce comparable analytical output.', relatedForce: 'AI Ascendance', sourceName: 'BCG Henderson Institute', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Senior consulting talent migrating to fractional and independent models faster than firms anticipated', potentialImpact: 'Partnership pipelines and client relationship continuity at risk as senior talent redefines working models.', relatedForce: 'Workforce Transformation', sourceName: 'Korn Ferry Consulting Talent', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Client scrutiny of measurable consulting impact intensifying as AI reduces information asymmetry', potentialImpact: 'Value propositions built on process quality and analytical capability under pressure from clients who can verify more independently.', relatedForce: 'Trust Recalibration', sourceName: 'Source Global Research', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Human-AI service delivery becoming the competitive baseline in strategy and advisory', potentialImpact: 'Firms that design effective human-AI collaboration models able to deliver more value at comparable cost.', relatedForce: 'Human Augmentation', sourceName: 'McKinsey Global Institute', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Governance, risk, and compliance advisory growing as proportion of total consulting demand', potentialImpact: 'Firms positioned at the intersection of strategy and governance gaining structural advantage in a growing category.', relatedForce: 'Institutional Rewiring', sourceName: 'ALM Intelligence', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Clients demanding outcome-based engagement models that shift performance risk to the advisor', potentialImpact: 'Traditional time-and-materials pricing models under sustained pressure as procurement sophistication rises.', relatedForce: 'Economic Reconfiguration', sourceName: 'Heidrick & Struggles Consulting Outlook', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Geopolitical uncertainty creating advisory demand while suppressing client decisiveness and discretionary spend', potentialImpact: 'Consulting firms facing paradox of rising strategic need and declining conversion of that need into contracted work.', relatedForce: 'Geopolitical Realignment', sourceName: 'KPMG CEO Outlook', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Sustainability and decarbonisation advisory among fastest-growing practice areas globally', potentialImpact: 'Firms with credible sustainability capability gaining access to a growing recurring advisory category.', relatedForce: 'Climate & Resilience', sourceName: 'Verdantix Green Quadrant', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Energy transition advisory scaling as clients across sectors face operational and strategic implications', potentialImpact: 'Specialist energy transition capability becoming a structural competitive differentiator for positioned firms.', relatedForce: 'Resource & Energy Transition', sourceName: 'Wood Mackenzie Advisory', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Culture and belonging emerging as the presenting problem behind CEO transition and transformation mandates', potentialImpact: 'Firms that can engage credibly with culture dimensions of strategic mandates winning deeper and longer engagements.', relatedForce: 'Identity & Belonging', sourceName: 'Spencer Stuart Leadership Index', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
  ],
}

// ─── Provocations by challenge ────────────────────────────────────────────────

const provocations: Record<ChallengeSlug, string[]> = {
  growth: [
    'What if the assumption that growth requires more people was built for a world that no longer exists?',
    'What if the organizations that grow fastest in the next five years are those that redesign, not those that scale?',
    'What if new market opportunities require a fundamentally different operating model to reach?',
    'What if the growth constraint is not capital or talent, but the ability to move and decide quickly enough?',
    'What if the most defensible growth comes not from acquiring customers but from becoming genuinely trusted by them?',
  ],
  trust: [
    'What if the organizations that deploy AI most transparently end up with the most strategic freedom?',
    'What if trust becomes a more valuable competitive asset than technology capability?',
    'What if the gap between what organizations say about AI and what they do is the defining credibility problem of this decade?',
    'What if the most important governance decision is not about technology, but about accountability structures?',
    'What if customers increasingly trust AI for information and humans for decisions that matter most?',
  ],
  innovation: [
    'What if the organizations that innovate fastest are not those with the most ideas, but those with the clearest sense of what they will not build?',
    'What if the constraint on innovation is not imagination but the organizational capacity to absorb change?',
    'What if AI makes it possible to do in months what previously took years — and most organizations are not designed for that speed?',
    'What if the next competitive advantage does not come from a new product but from a new operating model for how products are created?',
    'What if genuine innovation now requires letting go of capabilities that currently feel like core competencies?',
  ],
  talent: [
    'What if the talent strategy built for the last decade is the wrong architecture for the next five years?',
    'What if the most important talent decision is not who to hire but what work to redesign around AI?',
    'What if the organizations that retain the best people are those that are clearest about what AI will and will not replace?',
    'What if the premium for genuinely scarce human judgment is higher in an AI era than it was before?',
    'What if the talent problem is not supply — it is that the roles being filled no longer reflect the work that actually needs doing?',
  ],
}

// Situation-specific override for the last provocation slot (index 4).
// Replaces the most generic challenge-level provocation with one that speaks
// to the specific situational logic — making the set feel responsive to context.
const situationProvocation: Record<SituationSlug, Record<ChallengeSlug, string>> = {
  'ceo-transition': {
    growth:     'What if the most consequential growth decision of the new leader\'s tenure is made in the first ninety days — before the full picture is clear?',
    trust:      'What if the first visible decision the new leader makes shapes stakeholder trust more than anything else in the next five years?',
    innovation: 'What if the incoming leader has a narrower window to reset the innovation operating model than they think — and it has already started?',
    talent:     'What if the people most likely to leave during a CEO transition are exactly the ones the incoming leader most needs to keep?',
  },
  transformation: {
    growth:     'What if the transformation program is optimizing the operating model for the growth of the last decade rather than the growth of the next one?',
    trust:      'What if stakeholders are tracking the gap between transformation commitments and observable progress more carefully than the program team realizes?',
    innovation: 'What if the transformation creates the conditions for a competitor to innovate faster — not because it fails, but because it succeeds at the wrong thing?',
    talent:     'What if the transformation is being designed by the people least likely to be honest about what it is actually costing the workforce?',
  },
  'culture-change': {
    growth:     'What if the culture change that is described as enabling growth is actually defending an operating model that limits it?',
    trust:      'What if the employees most critical of the culture change program are also the most accurate observers of the gap between what is said and what is done?',
    innovation: 'What if the culture change creates psychological safety for surface-level challenges but not for the assumptions that most need questioning?',
    talent:     'What if the talent the organization most wants to retain is making their decision about whether to stay before the culture change program has had any effect?',
  },
}

// ─── Snapshot changes ─────────────────────────────────────────────────────────

function buildSnapshotChanges(rankedIds: ForceId[]): SnapshotChange[] {
  const directionByForce: Record<ForceId, SnapshotChange['direction']> = {
    'ai-ascendance':                  'up',
    'trust-recalibration':            'up',
    'workforce-transformation':       'stable',
    'human-augmentation':             'stable',
    'institutional-rewiring':         'up',
    'economic-reconfiguration':       'up',
    'geopolitical-realignment':       'up',
    'climate-and-resilience':         'stable',
    'resource-and-energy-transition': 'up',
    'identity-and-belonging':         'stable',
  }
  const changeText: Record<ForceId, string> = {
    'ai-ascendance':                  'Elevated as deployment of agentic AI systems accelerates across industries.',
    'trust-recalibration':            'Increasing in importance as AI deployment raises new accountability questions.',
    'workforce-transformation':       'Remains highly relevant as role redesign continues to accelerate.',
    'human-augmentation':             'Growing in strategic importance as the human-AI boundary becomes a design question.',
    'institutional-rewiring':         'Moving faster than anticipated as regulatory frameworks become operative.',
    'economic-reconfiguration':       'Rising as industrial policy and elevated capital costs reshape competitive economics.',
    'geopolitical-realignment':       'Accelerating as technology decoupling and trade realignment create new strategic constraints.',
    'climate-and-resilience':         'Steady pressure as disclosure requirements harden and physical risk becomes more visible.',
    'resource-and-energy-transition': 'Elevated as AI infrastructure energy demand collides with transition timelines.',
    'identity-and-belonging':         'Consistently active as workforce belonging becomes a retention and culture variable.',
  }
  return rankedIds.slice(0, 3).map(id => ({
    force: forceBase[id].name,
    text: changeText[id],
    direction: directionByForce[id],
  }))
}

// ─── Implications templates ───────────────────────────────────────────────────

// Challenge-keyed implication sets.
// Each of the four strategic challenges gets its own set of five implications,
// written for that challenge's specific logic rather than a generic template.
// Industry label is interpolated where useful; situation label is not used
// (situation differentiation lives in whySurfaced bullets, not implications).

type ImplicationSet = Pick<StrategicImplication, 'id' | 'label' | 'implication' | 'detail'>[]

const implicationsByChallenge: Record<ChallengeSlug, (industry: string) => ImplicationSet> = {
  growth: (ind) => [
    {
      id: 'leadership',
      label: 'Leadership',
      implication: 'The growth mandate may require leaders to redesign the organization, not just direct it to perform better.',
      detail: `In ${ind}, the forces shaping growth are structural — not cyclical. Leaders who treat growth as an execution challenge will move more slowly than those who treat it as a redesign challenge: rebuilding operating assumptions, redistributing where value is created, and redefining what the organization needs to do at scale.`,
    },
    {
      id: 'talent',
      label: 'Talent',
      implication: 'The talent required for growth may be different in profile from the talent optimized for operational efficiency.',
      detail: `${ind} organizations built for steady-state performance tend to attract and develop talent suited to that mode. Growth in an environment reshaped by AI, economic reconfiguration, and market volatility may require a different profile — people who can navigate ambiguity, build new things, and make decisions with incomplete information. The talent strategy may need to evolve alongside the growth strategy.`,
    },
    {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Growth may require adding new operating capacity — not just improving the efficiency of what already exists.',
      detail: `Many current workflows in ${ind} were designed to optimize an existing model, not to reach new markets or serve new needs. The growth opportunity may require asking where the operating model is the constraint, not just where it is the platform.`,
    },
    {
      id: 'growth',
      label: 'Growth',
      implication: 'The growth available in the next five years may be structurally different from the growth of the last decade.',
      detail: `In ${ind}, the combination of AI-enabled competition, economic reconfiguration, and shifting stakeholder expectations is changing what growth looks like and where it comes from. Organizations that pursue the growth patterns of the previous decade may find the runway shorter than they expected.`,
    },
    {
      id: 'governance',
      label: 'Governance',
      implication: 'Growth decisions at the frontier of AI and structural change may require governance that does not yet exist.',
      detail: `As ${ind} organizations deploy AI-enabled capabilities, enter new markets, or redesign their operating models, the accountability structures for those decisions may lag the decisions themselves. Building governance infrastructure ahead of growth — rather than after incidents — is both a risk management practice and a trust-building one.`,
    },
  ],

  trust: (ind) => [
    {
      id: 'leadership',
      label: 'Leadership',
      implication: 'Leaders are the primary trust signal — behavior in the first year shapes credibility for the rest of the tenure.',
      detail: `In ${ind}, trust is not built by communications programs. It is built by observable leadership decisions that are consistent with stated values over time. The leaders most likely to earn durable trust are those who make their commitments visible, acknowledge when they fall short, and treat accountability as a feature rather than a risk.`,
    },
    {
      id: 'talent',
      label: 'Talent',
      implication: 'Organizational trust is often transmitted through frontline employees — who must trust the organization before they can represent it credibly.',
      detail: `The people ${ind} organizations send to serve customers, patients, clients, and communities are the trust infrastructure. Organizations whose employees believe in what they are doing tend to project a credibility that communications alone cannot manufacture. Workforce trust and external trust are more connected than most organizations manage them.`,
    },
    {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Trust may require building observable accountability mechanisms into operations — not just into communications.',
      detail: `In ${ind}, trust is increasingly earned through what is visible and verifiable, not through what is stated. Operating models that embed transparency — in how AI decisions are made, in how commitments are tracked, in how errors are acknowledged — build the kind of trust that communications programs cannot replicate and that reputational incidents cannot easily destroy.`,
    },
    {
      id: 'growth',
      label: 'Growth',
      implication: 'Trust is increasingly a precondition for growth — not a parallel consideration.',
      detail: `In ${ind}, the organizations with the highest trust profiles tend to have more strategic freedom: faster regulatory approvals, lower customer acquisition costs, stronger talent pipelines, and more resilience when things go wrong. Trust is not a soft metric — it is a growth input that compounds.`,
    },
    {
      id: 'governance',
      label: 'Governance',
      implication: 'The accountability architecture for AI-enabled decisions may need to be visible enough for external stakeholders to evaluate — not just internal auditors.',
      detail: `As AI influences decisions across ${ind} — in care, in lending, in service, in governance — the question of who is accountable, and how that accountability is observed, becomes a material trust question. Organizations that build governance infrastructure that is externally legible will be better positioned than those whose accountability structures exist primarily in policy documents.`,
    },
  ],

  innovation: (ind) => [
    {
      id: 'leadership',
      label: 'Leadership',
      implication: 'Innovation leaders may need to set the constraint — what the organization will not build — as clearly as the ambition.',
      detail: `In ${ind}, the most common innovation failure is not lack of ideas or capability. It is the absence of a clear frame for which bets are worth making, what the organization is uniquely positioned to win, and where the competitive logic of AI changes the calculus. Leaders who can define the constraint create focus; those who leave it undefined create noise.`,
    },
    {
      id: 'talent',
      label: 'Talent',
      implication: 'The talent that drives innovation may increasingly be those who can direct AI systems — not only those who can build them.',
      detail: `In ${ind}, AI is shifting the premium from people who can produce outputs to people who can judge which outputs are worth producing. The most valuable innovation talent may not be the fastest coder or the most prolific researcher — it may be those who can frame the right problem, evaluate AI-generated options critically, and translate judgment into direction.`,
    },
    {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Innovation may require the ability to absorb and deploy change — not just to generate it.',
      detail: `Many ${ind} organizations can produce ideas faster than they can deploy them. AI accelerates generation; it does not automatically accelerate adoption, compliance review, cultural acceptance, or operational integration. The innovation operating model that succeeds may be the one that invests as heavily in the pathway from idea to deployment as in the ideation process itself.`,
    },
    {
      id: 'growth',
      label: 'Growth',
      implication: 'Innovation that cannot reach the market at the organization\'s current operating speed will not produce growth.',
      detail: `In ${ind}, the gap between innovation capability and commercial delivery is often where value is lost. Organizations that innovate faster than their operating model can absorb will accumulate a backlog of capability that competitors deploying more modestly but more reliably will eventually outpace. Delivery speed is an innovation variable.`,
    },
    {
      id: 'governance',
      label: 'Governance',
      implication: 'AI-enabled innovation without governance creates exposure that can erase the competitive advantage it generates.',
      detail: `In ${ind}, the organizations that have faced the most significant AI-related regulatory or reputational setbacks have often been those that moved fastest without governance infrastructure. Building compliance, explainability, and accountability frameworks before deployment — not after — is the practice that allows innovation to scale without strategic interruption.`,
    },
  ],

  talent: (ind) => [
    {
      id: 'leadership',
      label: 'Leadership',
      implication: 'The talent mandate may require leaders to redesign what work requires — not just compete harder for the people willing to do it as it is.',
      detail: `In ${ind}, the structural forces reshaping talent — AI augmentation, workforce demographics, shifting expectations about meaning and belonging — are not problems that more aggressive recruiting solves. Leaders who treat talent as a supply problem will move more slowly than those who treat it as a design problem: asking what roles should look like, what work should require of human beings, and what the organization must offer to earn genuine commitment.`,
    },
    {
      id: 'talent',
      label: 'Talent',
      implication: 'Retention may be worth more investment than recruitment — the cost of losing the people already here compounds.',
      detail: `In ${ind}, the cost of talent departure — in productivity, institutional knowledge, recruiting cost, and onboarding time — is typically underestimated. Organizations that invest in the conditions that make capable people want to stay tend to have a structural workforce advantage over those managing a continuous replacement cycle. Retention is not a softer version of the talent strategy; it may be the highest-return version of it.`,
    },
    {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Operating models built for a workforce that no longer exists — in supply, skills, or expectations — may need to be redesigned for the one that does.',
      detail: `Many current workflows in ${ind} were designed assuming workforce characteristics that structural forces have changed: clinical staffing levels, technical skills profiles, expectations around role autonomy, and the meaning of expertise in an AI-augmented environment. Organizations that redesign operations around the workforce reality — rather than trying to restore a workforce baseline that may not return — will adapt faster.`,
    },
    {
      id: 'growth',
      label: 'Growth',
      implication: 'Talent scarcity is increasingly the binding growth constraint — augmentation may be the most viable path through it.',
      detail: `In ${ind}, growth targets that depend on proportional headcount increases may be unreachable given structural workforce constraints. The growth path with the most headroom may be increasing output per person through AI augmentation, role redesign, and capability development — not adding headcount to an existing operating model that cannot be staffed.`,
    },
    {
      id: 'governance',
      label: 'Governance',
      implication: 'AI deployment that affects workforce roles may require governance that is visible to employees — not just to compliance functions.',
      detail: `In ${ind}, the trust that employees extend to AI-enabled changes in their work is a governance variable, not only a change management one. Organizations that build workforce governance frameworks — clarifying what AI will and will not change, what support is available during transitions, and who is accountable for decisions that affect roles — tend to see faster adoption and fewer morale-driven disruptions than those that deploy first and explain later.`,
    },
  ],
}

// Situation-specific override for the 'operating-model' implication slot.
// Replaces the generic operating model implication with one that speaks to
// the specific situational logic — CEO transition, transformation, or culture change.
const situationImplication: Record<SituationSlug, Record<ChallengeSlug, Pick<StrategicImplication, 'id' | 'label' | 'implication' | 'detail'>>> = {
  'ceo-transition': {
    growth: {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'A CEO transition is one of the few moments when the operating model can be questioned rather than inherited.',
      detail: 'Incoming leaders have a window — typically the first six to twelve months — in which organizational assumptions are held lightly enough to be examined. The growth mandate is best served by leaders who use that window to audit the operating model for alignment with the growth opportunity, rather than accelerating an inherited model whose fitness for the current context has not been tested.',
    },
    trust: {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Trust is rebuilt through observable operating decisions — not communications programs — and CEO transitions are when those decisions are most visible.',
      detail: 'Stakeholders pay close attention to the first significant decisions an incoming leader makes. Operating model choices that are consistent with stated values — about how AI is governed, how workforce changes are communicated, how accountability is structured — build the credibility that communications programs cannot manufacture. The operating model is a trust statement.',
    },
    innovation: {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Incoming leaders can set the terms for how the organization experiments — the operating model for innovation — before inheriting the politics that usually protect it.',
      detail: 'Innovation operating models accumulate organizational debt: processes, governance gates, and approval structures that made sense when they were created but slow the pace of experimentation over time. CEO transitions create a window to examine that debt without the political cost of challenging it mid-tenure. The leaders who redesign the innovation operating model early tend to see compounding returns.',
    },
    talent: {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Workforce operating models — how roles are designed, how performance is evaluated, how careers are structured — are among the most change-resistant inherited structures a new leader faces.',
      detail: 'Talent operating models are shaped by years of accumulated decisions about what the organization rewards, how it promotes, and what it tolerates. Incoming leaders who want to change the talent reality must change the operating conditions that produce it — not just the stated values. The window for redesigning those conditions is widest in the first year.',
    },
  },
  transformation: {
    growth: {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Transformation is the moment to redesign the operating model for the growth available — not to optimize the existing model for the growth already captured.',
      detail: 'Most transformation programs begin with a performance problem and end with an efficiency improvement. The more consequential opportunity is to use the transformation mandate to ask whether the operating model is configured for the growth the organization is trying to reach — not just better at delivering what it already delivers. That question tends to produce larger and more durable returns than efficiency alone.',
    },
    trust: {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Transformation creates operating model opacity that erodes trust — stakeholders cannot tell what the organization is becoming or whether it will be trustworthy when it arrives.',
      detail: 'During transformation, the operating model is in motion: processes are changing, roles are shifting, governance structures are being redesigned. Stakeholders who cannot see where it is going — or who have no basis for trusting that the destination will be better than the starting point — tend to withdraw confidence before the transformation is complete. Building transparency into the transformation operating model itself is a trust strategy, not a communications add-on.',
    },
    innovation: {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Transformation provides the mandate to redesign the innovation operating model — but only if that redesign is explicitly scoped into the program.',
      detail: 'Organizations that treat innovation operating model redesign as a consequence of transformation — something that will emerge from the new structure — typically find that the new structure inherits the innovation constraints of the old one. The organizations that scope innovation operating model redesign as an explicit workstream within transformation tend to come out with meaningfully different and faster innovation capacity.',
    },
    talent: {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Transformation that changes the strategy without redesigning the talent operating model tends to produce a new direction with an old capability base.',
      detail: 'Role design, performance management, career architecture, and workforce planning are the structural conditions that determine what the talent operating model actually produces. Transformation programs that address strategy and technology without explicitly redesigning these conditions tend to find that the talent capability required for the new direction is not available within the inherited structure — often at precisely the point execution requires it.',
    },
  },
  'culture-change': {
    growth: {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Culture change that does not change the operating model will not change the culture — the operating conditions are the culture.',
      detail: 'Organizations frequently invest in culture programs while leaving unchanged the operating model structures that produce the culture they are trying to change: the incentives, the promotion signals, the decision rights, the governance structures that determine whose judgment is trusted and whose is not. Culture change without operating model change is language change. The growth agenda requires the operating model to produce a different culture, not just describe one.',
    },
    trust: {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Trustworthy culture cannot be declared — it must be operationalized in the structures that determine how decisions are made and how accountability is held.',
      detail: 'Trust is not a cultural attribute that can be created through communications or values programs. It is the output of operating structures: who makes which decisions, how those decisions are explained, what happens when commitments are not met, and whether accountability is applied consistently regardless of seniority. Culture change in service of trust requires operating model change in service of accountability.',
    },
    innovation: {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Culture change that aims to create more innovative behavior must address the operating model conditions that currently make innovation slow or costly.',
      detail: 'Organizations frequently diagnose innovation problems as cultural — people are risk-averse, they do not challenge convention, they do not experiment — without examining whether the operating model makes risk-taking costly and convention-challenging career-limiting. Culture change for innovation requires changing the operating conditions that shape behavior: the approval processes, the failure tolerance structures, the reward mechanisms that determine what the organization actually encourages.',
    },
    talent: {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Culture change that talent can feel — rather than describe — requires operating model changes in how roles are designed, careers are structured, and belonging is measured.',
      detail: 'Talent evaluates culture through operating experience, not cultural communications: how their work is recognized, whether their development is invested in, whether the organization\'s stated values are consistent with their daily operating reality. Culture change that targets talent outcomes must change the operating structures that produce those outcomes — role design, career architecture, belonging measurement — not just the language used to describe the organization\'s aspirations.',
    },
  },
}

function buildImplications(
  industry: IndustrySlug,
  situation: SituationSlug,
  challenge: ChallengeSlug
): StrategicImplication[] {
  const ind = industryLabels[industry]
  const base = implicationsByChallenge[challenge](ind) as StrategicImplication[]
  const override = situationImplication[situation][challenge]
  return base.map(imp => imp.id === 'operating-model' ? { ...imp, ...override } : imp)
}

// ─── Executive brief ──────────────────────────────────────────────────────────

const executiveBriefPullQuotes: Record<ChallengeSlug, { pq: string; accent: string }> = {
  growth: {
    pq: 'The question is not whether growth is possible. The question is whether the organization is designed for',
    accent: 'the growth that is actually available.',
  },
  trust: {
    pq: 'In this environment, trust is not a reputation consideration. It is',
    accent: 'the operating condition.',
  },
  innovation: {
    pq: 'Innovation leaders rarely lack for ideas. The harder question is whether the organization is built to',
    accent: 'absorb and deploy them.',
  },
  talent: {
    pq: 'The talent question is no longer primarily about supply. It is about whether the organization is designed for',
    accent: 'the work that actually needs doing.',
  },
}

const executiveBriefBody: Record<IndustrySlug, Record<SituationSlug, { body1: string; body2: string }>> = {
  healthcare: {
    'ceo-transition': {
      body1: 'Incoming healthcare leaders inherit an organization under structural pressure from multiple directions simultaneously: workforce shortages that are not cyclical, AI deployment decisions already in motion, trust relationships with patients and clinicians that were formed before the new leader arrived, and a reimbursement environment that is reshaping the economics of care delivery.',
      body2: 'The leaders most likely to build durable health system performance are those who spend the first year auditing assumptions rather than accelerating existing programs — understanding which inherited commitments are still valid, where the operating model needs redesign rather than optimization, and which trust relationships require deliberate repair before they will support meaningful change.',
    },
    transformation: {
      body1: 'Healthcare organizations attempting transformation face a distinctive challenge: the forces that make transformation urgent — AI capability, workforce disruption, economic pressure — are the same forces that make transformation risky. Change programs that do not account for clinical workforce trust, patient experience continuity, and regulatory constraint tend to move faster in the planning stage than in execution.',
      body2: 'The health systems most likely to complete successful transformations are those that invest as heavily in organizational readiness — workforce confidence, governance clarity, stakeholder trust — as in the technology and process design itself. Transformation in healthcare is as much a human question as a strategic one.',
    },
    'culture-change': {
      body1: 'Culture change in healthcare is not primarily a communications challenge. It is a structural one: the workforce is under shortage pressure that makes people feel their capacity is already consumed; AI deployment is changing what clinical roles mean without always explaining why; and the trust relationships that culture depends on — between leaders and clinicians, between staff and institution — have been under strain since before the pandemic.',
      body2: 'Health systems that achieve genuine culture change tend to be those that address the structural conditions — workforce belonging, role clarity, consistent leadership behavior — rather than those that invest primarily in culture programs. The language of culture change spreads quickly; the experience of it changes slowly, and only when the conditions that produce it are genuinely different.',
    },
  },
  'financial-services': {
    'ceo-transition': {
      body1: 'CEO transitions in financial services occur against a backdrop of structural reconfiguration: AI is changing what financial expertise means, regulatory frameworks are being rewritten in real time, and the economic environment is testing assumptions about capital efficiency and competitive advantage that held for the previous decade. Incoming leaders inherit commitments, exposures, and organizational cultures shaped by a context that is now shifting.',
      body2: 'The leaders most likely to build lasting advantage are those who move quickly to audit the inherited strategic assumptions — not to discard them, but to understand which are still valid and which need revision before they become constraints. In financial services, the gap between what the organization knows about itself and what the external environment actually requires is often wider than it appears from the inside.',
    },
    transformation: {
      body1: 'Financial services transformation programs are increasingly navigating a paradox: the AI capabilities that make transformation possible also raise the trust and governance questions that can slow or derail it. Organizations that deploy AI-driven decisions at scale without visible accountability frameworks are discovering that regulatory and customer trust problems do not wait for the transformation program to complete.',
      body2: 'The institutions most likely to build durable competitive positions through transformation are those that treat trust as a design criterion — not a communications outcome. Earning the right to deploy AI at the pace the technology makes possible requires governance infrastructure, workforce confidence, and customer transparency that must be built in parallel with, not after, the capability itself.',
    },
    'culture-change': {
      body1: 'Culture change in financial services is shaped by a tension that most culture programs do not resolve: the industry attracts and rewards people who are very good at performing what is required of them. Organizations that launch culture initiatives without changing the underlying incentives, promotion signals, and leadership behaviors are often surprised to find that the culture changed in language but not in practice.',
      body2: 'The institutions that achieve genuine culture change tend to be those where senior leaders treat their own behavior as the primary variable — where the culture program is a description of how leaders are already acting differently, not a prescription for how others should act. In financial services, culture is a lagging indicator of leadership, not a leading indicator of strategy.',
    },
  },
  consumer: {
    'ceo-transition': {
      body1: 'Consumer organization leaders take the role at a moment when the fundamentals of consumer engagement are shifting faster than most operating models can absorb. AI is changing what personalization means and what it risks; economic divergence is bifurcating the market that many organizations were built to serve as a unified whole; and consumer trust in brands — especially in the AI experiences brands deploy — is more fragile and more contextual than it has been in years.',
      body2: 'The incoming leaders most likely to build durable consumer organizations are those who ask early which inherited assumptions about the customer, the market, and the operating model are still valid — and who are willing to redesign around changed answers rather than optimizing inherited structures for a market that is becoming something different.',
    },
    transformation: {
      body1: 'Consumer transformation programs face a specific risk that is easy to underestimate: moving faster than customers want to be moved. AI enables organizations to deploy personalization, automation, and new service models at a pace that can outrun the trust consumers are willing to extend to those systems. The transformation that succeeds technically but generates consumer resistance or brand damage has not succeeded strategically.',
      body2: 'The consumer organizations most likely to come through transformation with stronger competitive positions are those that treat customer trust as a real-time variable — monitoring how consumers are experiencing the changes being deployed, and willing to slow down or redesign elements that are winning capability without winning confidence. Transformation at the consumer layer is an iterative trust-building process as much as a delivery program.',
    },
    'culture-change': {
      body1: 'Culture change in consumer organizations is often driven by one of two forces: a strategic pivot that requires different behaviors from the organization, or a workforce expectation shift that makes the existing culture increasingly difficult to sustain. In the current environment, both are active simultaneously — AI is changing what frontline roles mean, and younger consumer workforces are applying belonging and values criteria to their employment decisions that previous generations did not apply as explicitly.',
      body2: 'Consumer organizations that achieve genuine culture change tend to be those that address the question of what the organization stands for — not just what it does. In an industry where consumer loyalty increasingly tracks to whether people feel that brands genuinely represent them, organizational culture and brand identity are more connected than most strategy processes treat them. The culture change is also, in part, a brand strategy decision.',
    },
  },
  technology: {
    'ceo-transition': {
      body1: 'Technology leaders take the CEO role inside an industry that is restructuring itself faster than any external force is restructuring it. AI is changing how software is built, how teams are sized, what competitive advantage means, and how quickly the rules of the market shift — and the incoming leader is expected to both navigate this and direct it, often simultaneously.',
      body2: 'The leaders most likely to build durable technology organizations are those who distinguish clearly between the forces they can shape and the forces they must design around. In a market where competitors are also deploying AI at speed, the advantage tends to go not to the organization that moves fastest in absolute terms but to the one that moves with the most clarity about where it is distinctively positioned to win.',
    },
    transformation: {
      body1: 'Technology organization transformations carry a specific irony: the industry builds the tools that transform every other sector, while navigating the same transformation pressures from the inside. AI is changing how products are built, how engineering teams are structured, and how quickly the assumptions underlying current strategy become outdated — often within the same planning horizon the transformation program was designed for.',
      body2: 'The technology organizations most likely to complete successful transformations are those that hold two things in tension: the speed that the market rewards, and the organizational clarity — about purpose, about people, about what will not change — that makes speed sustainable rather than disorienting. Transformation without clarity tends to produce organizational anxiety that limits the very execution speed it was designed to create.',
    },
    'culture-change': {
      body1: 'Culture change in technology organizations is complicated by the industry\'s founding mythology: the most capable people, moving fastest, building the best things. That mythology is under pressure from multiple directions — AI is changing what "most capable" means, the workforce is applying belonging and values criteria that the existing culture was not designed to satisfy, and the organizations that built AI infrastructure are now subject to the governance questions that infrastructure raises.',
      body2: 'Technology organizations that achieve genuine culture change tend to be those that are willing to examine which elements of the founding culture are still assets and which have become liabilities — not through the lens of external criticism, but through the question of what kind of organization the people here would choose to build if they were building it today. The answer tends to be more nuanced than either the defenders of the original culture or its critics would suggest.',
    },
  },
  energy: {
    'ceo-transition': {
      body1: 'Energy leaders take the CEO role at a moment of structural discontinuity: the asset base, the workforce, the regulatory environment, and the capital markets that shaped the organization\'s current strategy were all calibrated for a world that is actively changing. Incoming leaders inherit transition commitments they did not make, workforce communities whose careers are bound to an energy system in motion, and geopolitical dependencies that were not designed to be dependencies.',
      body2: 'The leaders most likely to navigate this period with organizational integrity intact are those who do not mistake the pace of near-term signals for the direction of long-term forces. The energy transition is not moving at a uniform rate, and the organizations that position for the long-term direction while managing the near-term volatility will have more strategic freedom than those calibrating for either extreme.',
    },
    transformation: {
      body1: 'Energy transformation programs are among the most structurally complex in any industry: they require redeploying capital from one system to another while the first is still generating returns; managing workforce transitions that carry genuine community and identity stakes; and navigating a regulatory and geopolitical environment that is actively being redesigned around the very transformation being attempted.',
      body2: 'The energy organizations most likely to complete successful transformations are those that treat the social and organizational dimensions — workforce belonging, community trust, leadership credibility — with the same analytical rigor as the capital allocation and technology decisions. Transformation programs that optimize the financial model while underinvesting in the human one tend to encounter the resistance they did not plan for at the moment they can least afford it.',
    },
    'culture-change': {
      body1: 'Culture change in energy organizations carries stakes that are not present in most industries: the workforce identity question is not abstract. People who built careers in fossil fuel extraction, refining, or combustion-based generation are being asked to find new meaning in organizations whose direction of travel is away from what they were recruited to build. That is a genuine belonging challenge, not a communications one.',
      body2: 'Energy organizations that manage culture change through this transition with the most integrity tend to be those that are honest about what is changing and what that means for people — acknowledging the loss alongside the direction, creating pathways that are real rather than aspirational, and measuring the belonging experience of the workforce rather than assuming that a stated commitment to just transition is experienced as such by the people it is intended to serve.',
    },
  },
  manufacturing: {
    'ceo-transition': {
      body1: 'Manufacturing leaders take the CEO role in an environment where competitive advantage is being restructured from multiple directions simultaneously: industrial policy is reshaping the economics of where production is located; automation and AI are changing the economics of how it is done; and the sustainability requirements of major customers and regulators are changing the cost of carbon-intensive processes faster than most capital planning cycles anticipated.',
      body2: 'Incoming leaders who audit inherited assumptions early — about supply chain geography, automation investment pace, energy cost exposure, and workforce capability — will create strategic options that those who inherit and accelerate existing programs without that audit will not have. In manufacturing, the long asset lives that make the industry stable in steady state make it specifically vulnerable to structural shifts that compound while assumptions are held too long.',
    },
    transformation: {
      body1: 'Manufacturing transformation programs are navigating a convergence that has no clean sequence: reshoring decisions require workforce commitments before the automation strategy is settled; decarbonization timelines are shaped by regulatory frameworks that are still being written; and the trade policy environment that determines supply chain geography has been more volatile in the past three years than in the previous twenty.',
      body2: 'The manufacturers most likely to come through this period with stronger competitive positions are those that build optionality into their transformation rather than locking into a single path. The organizations that can move on reshoring, automation, and decarbonization in parallel — rather than sequencing them as if each were stable while the others are resolved — will be better positioned when the environment clarifies.',
    },
    'culture-change': {
      body1: 'Culture change in manufacturing organizations carries a dimension that is often underweighted in strategic planning: the identity stakes for the workforce. The transformation of factory work through automation is not experienced by production workers as an efficiency improvement — it is experienced as a change in what their expertise means, what their contribution is worth, and whether the organization they have built their careers in still values what they bring.',
      body2: 'Manufacturing organizations that manage culture change through this transition most effectively tend to be those that take the workforce identity question seriously as a leadership responsibility, not just a change management task. Communities built around manufacturing have long memories about how industrial transitions were managed, and the organizations that invest in genuine belonging — not just retraining programs — build the trust that transformation execution requires.',
    },
  },
  'consumer-brand': {
    'ceo-transition': {
      body1: 'Consumer brand leaders take the CEO role when the foundational relationships of brand strategy — between brand and consumer, between creative and data, between loyalty and price — are all in motion simultaneously. AI is enabling personalization at a scale that changes what brand relationship means; consumer spending power is bifurcating in ways that put mass-market brand assumptions under pressure; and the belonging dimension of brand loyalty is becoming a more explicit driver of consumer choice.',
      body2: 'The incoming leaders most likely to build enduring consumer brand positions are those who ask which of the inherited brand\'s assets are genuinely durable — which elements of equity, relationship, and consumer trust will hold through a period of significant change — and which are artefacts of a market environment that is becoming something different. The answer usually requires both more confidence in some things and more willingness to redesign others than the first hundred days feel comfortable with.',
    },
    transformation: {
      body1: 'Consumer brand transformation programs carry a specific risk that is easy to underweight: the assets being transformed — brand equity, consumer trust, creative reputation — are more fragile under transformation pressure than financial or operational assets. Organizations that move through transformation at speed without managing the consumer experience of that transition can exit the program with stronger capabilities and weaker brands.',
      body2: 'The consumer brands most likely to come through transformation with durable competitive positions are those that treat the consumer relationship as a real-time variable throughout the program — not a static asset to be deployed once the new model is ready. Transformation that is invisible or legible to consumers builds confidence; transformation that is visible but unexplained builds suspicion. The communications strategy is a transformation design question, not a post-launch one.',
    },
    'culture-change': {
      body1: 'Culture change in consumer brand organizations sits at an unusual intersection: the organization\'s external brand is, in part, a projection of its internal culture, and the internal culture is shaped by the external brand the organization has committed to. Culture programs that do not engage with this connection tend to produce internal change that is not reflected externally, or external repositioning that is not backed by internal reality — both of which consumers and employees identify quickly.',
      body2: 'Consumer brand organizations that achieve genuine culture change tend to be those where the internal and external work are designed together — where the brand values being communicated to consumers are the same values being tested in decisions about how the organization treats its own workforce, how it handles mistakes publicly, and what it is willing to say no to commercially. The consistency between inside and outside is not just a communications discipline; it is the structural condition for the belonging that genuine brand loyalty requires.',
    },
  },
  government: {
    'ceo-transition': {
      body1: 'Public sector leaders taking on new roles inherit organizations shaped by commitments, constraints, and cultures that precede them — and they typically have less latitude to change inherited structure than incoming leaders in most private sector contexts. The forces that matter most in this environment are not primarily those the new leader can control: fiscal headroom, public trust levels, the state of AI governance frameworks, and the geopolitical environment are all variables the leader must design around rather than set.',
      body2: 'The public sector leaders most likely to build lasting institutional effectiveness are those who invest early in understanding the gap between what the organization is committed to delivering and what its current capability actually permits — and who are willing to be honest with governing bodies and the public about that gap before it manifests as a service failure. In government, the credibility cost of revealed incapacity is typically much higher than the political cost of honest constraint.',
    },
    transformation: {
      body1: 'Government transformation programs operate under constraints that private sector transformation programs do not: procurement rules that slow technology adoption, civil service frameworks that limit workforce redesign, political cycles that can reprioritize or defund programs before they complete, and a public accountability standard that means failures are visible in ways that commercial failures are not. These constraints are not reasons to avoid transformation — they are design parameters that transformation programs must build around.',
      body2: 'The government organizations most likely to complete successful transformations are those that invest in building political and institutional durability into the program from the start — designing for handover, building cross-party or cross-ministerial ownership where possible, and demonstrating early enough value to survive the inevitable review cycles. Transformation programs that depend on sustained political attention tend not to complete; those that become self-evidently valuable tend to.',
    },
    'culture-change': {
      body1: 'Culture change in government is complicated by a fundamental tension: public sector organizations exist to serve populations whose belonging needs are often in conflict, and the workforce that serves those populations is subject to the same belonging dynamics it is sometimes asked to mediate. Culture programs that do not acknowledge this complexity — that treat public sector culture change as analogous to private sector culture change — tend to underestimate the structural and political constraints that shape what is possible.',
      body2: 'Government organizations that achieve genuine culture change tend to be those that connect the internal experience of the workforce to the external quality of service: treating belonging, capability, and wellbeing of public servants as organizational outcomes that matter in their own right, not just as inputs to service delivery metrics. The organizations that invest in their people with the same seriousness with which they are asked to serve the public tend to build the institutional trust — internal and external — that makes sustained change possible.',
    },
  },
  consulting: {
    'ceo-transition': {
      body1: 'Consulting firm leaders entering new roles inherit practices, client portfolios, and partnership cultures shaped by a model that is under structural pressure from multiple directions simultaneously. AI is compressing the analytical work that historically justified the leverage pyramid; senior talent is migrating toward independence faster than succession pipelines can replace it; and clients are demanding measurable outcomes at a time when the definition of value is shifting beneath traditional fee structures. The incoming leader who treats this as a cycle to manage is likely to find it is a structural shift to navigate.',
      body2: "The consulting leaders most likely to build durable firm positions are those who are willing to ask foundational questions early: what is the firm's distinctive value in a world of AI-enabled analysis; which client relationships are deep enough to survive model disruption; and what changes to the talent and operating model are needed now, not in three years. The window for proactive repositioning is narrower than most succession timelines assume.",
    },
    transformation: {
      body1: 'Consulting firm transformation programs are complicated by a structural irony: the organizations most expert at advising on transformation are often those with the deepest cultural resistance to transforming themselves. Partnership governance, billability cultures, and practice incentives that reward individual client relationships over collective capability-building are all design features that make the firm effective in stable markets and difficult to adapt in disrupted ones. The transformation challenge is not primarily strategic — it is cultural and structural.',
      body2: "The consulting firms most likely to complete successful transformations are those that invest early in changing the incentive and culture architecture, not just the strategy deck. That means rethinking how partners are evaluated and rewarded, how AI capability is built and shared across practices, and how the firm's value proposition is communicated to clients who are watching to see whether the advisory on transformation is backed by visible organizational change in the firm itself.",
    },
    'culture-change': {
      body1: "Culture change in consulting firms confronts a distinctive challenge: the firm's culture is its product. The way consultants collaborate, challenge each other, maintain client relationships, and develop younger talent is not separable from the quality of the advisory work clients receive. Culture change programs that treat internal culture as distinct from client experience — that focus on internal values statements without changing the actual dynamics of engagement staffing, client interaction, and knowledge-sharing — tend to produce branding without change.",
      body2: 'Consulting organizations that achieve genuine culture change tend to be those that make the connection between internal belonging and external performance explicit: that the quality of the work depends on the quality of the environment in which it is produced. Firms that invest in belonging and inclusion not as compliance programs but as capability investments — recognising that diverse teams produce better strategic insight, and that psychologically safe environments produce more honest client advice — tend to build the internal cultures that sustain competitive differentiation over time.',
    },
  },
}

// ─── Signal builder ──────────────────────────────────────────────────────────
// Reorders signalPools[industry] so signals matching the top-ranked forces
// appear first. This makes signals responsive to what actually surfaced
// rather than showing the same fixed list for every context in an industry.

function buildSignals(rankedIds: ForceId[], industry: IndustrySlug): Signal[] {
  const pool = signalPools[industry]
  const forceNameRank: Record<string, number> = {}
  rankedIds.forEach((id, i) => { forceNameRank[forceBase[id].name] = i })

  return [...pool]
    .sort((a, b) => {
      const ra = forceNameRank[a.relatedForce] ?? 99
      const rb = forceNameRank[b.relatedForce] ?? 99
      return ra - rb
    })
    .map((s, i) => ({ ...s, id: `${industry}-sig-${i + 1}` }))
}

// ─── Main generator ───────────────────────────────────────────────────────────

export function generateContext(
  industry: IndustrySlug,
  situation: SituationSlug,
  challenge: ChallengeSlug,
  horizon: string = '3–5 Years'
): ContextData {
  const rankedIds = rankForces(industry, situation, challenge)

  const forces: Force[] = rankedIds.map((id, i) => ({
    rank: String(i + 1).padStart(2, '0'),
    id,
    name: forceBase[id].name,
    accentHex: forceBase[id].accentHex,
    shortLine: forceShortLines[id][industry],
    description: forceDescriptions[id][industry],
    whySurfaced: whySurfaced[id][situation],
    whereShows: whereShowsMap[id][industry],
    topSignals: topSignals[id][industry],
  }))

  const pq = executiveBriefPullQuotes[challenge]
  const body = executiveBriefBody[industry][situation]
  const ind = industryLabels[industry]
  const sit = situationLabels[situation]
  const ch = challengeLabels[challenge]

  return {
    id: `${industry}-${situation}-${challenge}`,
    name: `${ind} + ${sit} + ${ch}`,
    headline: `${ind}, through ${situationArticle[situation]}, in pursuit of ${ch.toLowerCase()}.`,
    lastUpdated: 'June 2026',
    trackedForces: 10,
    industry: ind,
    leadershipSituation: sit,
    strategicChallenge: ch,
    timeHorizon: horizon,
    snapshot: 'June 2026',
    executiveBrief: {
      pullQuote: pq.pq,
      pullQuoteAccent: pq.accent,
      body1: body.body1,
      body2: body.body2,
    },
    snapshotChanges: buildSnapshotChanges(rankedIds),
    forces,
    implications: buildImplications(industry, situation, challenge),
    provocations: provocations[challenge].map((text, i) => ({
      number: String(i + 1).padStart(2, '0'),
      text: i === 4 ? situationProvocation[situation][challenge] : text,
    })),
    signals: buildSignals(rankedIds, industry),
    alignmentCards: [
      { id: 'most-relevant', label: 'Most Relevant', description: 'Team will choose which force bears most directly on this context.' },
      { id: 'most-urgent', label: 'Most Urgent', description: 'Team will choose which force demands action soonest.' },
      { id: 'most-uncertain', label: 'Most Uncertain', description: 'Team will choose which force is hardest to call.' },
      { id: 'most-transformative', label: 'Most Transformative', description: 'Team will choose which force could reshape the operating model.' },
    ],
  }
}

// ─── Parse context ID ─────────────────────────────────────────────────────────

export function parseContextId(id: string): {
  industry: IndustrySlug
  situation: SituationSlug
  challenge: ChallengeSlug
} | null {
  const industries: IndustrySlug[] = ['healthcare', 'financial-services', 'consumer', 'technology', 'consumer-brand', 'energy', 'manufacturing', 'government', 'consulting']
  const situations: SituationSlug[] = ['ceo-transition', 'transformation', 'culture-change']
  const challenges: ChallengeSlug[] = ['growth', 'trust', 'innovation', 'talent']

  const industry = industries.find(i => id.startsWith(i))
  if (!industry) return null

  const rest = id.slice(industry.length + 1)
  const situation = situations.find(s => rest.startsWith(s))
  if (!situation) return null

  const challenge = rest.slice(situation.length + 1) as ChallengeSlug
  if (!challenges.includes(challenge)) return null

  return { industry, situation, challenge }
}

// ─── All possible param combinations ─────────────────────────────────────────

export function getAllContextIds(): string[] {
  const industries: IndustrySlug[] = ['healthcare', 'financial-services', 'consumer', 'technology', 'consumer-brand', 'energy', 'manufacturing', 'government', 'consulting']
  const situations: SituationSlug[] = ['ceo-transition', 'transformation', 'culture-change']
  const challenges: ChallengeSlug[] = ['growth', 'trust', 'innovation', 'talent']
  return industries.flatMap(i => situations.flatMap(s => challenges.map(c => `${i}-${s}-${c}`)))
}
