import type { ContextData, Force, Signal, StrategicImplication, SnapshotChange, AlignmentCard } from './mockContext'

// ─── Slug utilities ──────────────────────────────────────────────────────────

export type IndustrySlug = 'healthcare' | 'financial-services' | 'consumer' | 'technology'
export type SituationSlug = 'ceo-transition' | 'transformation' | 'culture-change'
export type ChallengeSlug = 'growth' | 'trust' | 'innovation' | 'talent'
export type ForceId = 'ai-ascendance' | 'workforce-transformation' | 'trust-recalibration' | 'human-augmentation' | 'institutional-rewiring'

const industryLabels: Record<IndustrySlug, string> = {
  'healthcare': 'Healthcare',
  'financial-services': 'Financial Services',
  'consumer': 'Consumer',
  'technology': 'Technology',
}
const situationLabels: Record<SituationSlug, string> = {
  'ceo-transition': 'CEO Transition',
  'transformation': 'Transformation',
  'culture-change': 'Culture Change',
}
const challengeLabels: Record<ChallengeSlug, string> = {
  'growth': 'Growth',
  'trust': 'Trust',
  'innovation': 'Innovation',
  'talent': 'Talent',
}
const situationArticle: Record<SituationSlug, string> = {
  'ceo-transition': 'a CEO transition',
  'transformation': 'a transformation',
  'culture-change': 'a culture change',
}

// ─── Force base data ─────────────────────────────────────────────────────────

const forceBase: Record<ForceId, { name: string; accentHex: string }> = {
  'ai-ascendance':         { name: 'AI Ascendance',          accentHex: '#7c3aed' },
  'workforce-transformation': { name: 'Workforce Transformation', accentHex: '#ea580c' },
  'trust-recalibration':   { name: 'Trust Recalibration',    accentHex: '#059669' },
  'human-augmentation':    { name: 'Human Augmentation',     accentHex: '#a78bfa' },
  'institutional-rewiring':{ name: 'Institutional Rewiring', accentHex: '#b45309' },
}

// ─── Force relevance scoring ─────────────────────────────────────────────────
// Higher = more relevant for that dimension

const challengeScore: Record<ForceId, Record<ChallengeSlug, number>> = {
  'ai-ascendance':          { growth: 5, innovation: 5, talent: 3, trust: 2 },
  'workforce-transformation':{ talent: 5, growth: 3, innovation: 3, trust: 2 },
  'trust-recalibration':    { trust: 5, talent: 2, growth: 2, innovation: 2 },
  'human-augmentation':     { innovation: 5, talent: 4, growth: 3, trust: 2 },
  'institutional-rewiring': { trust: 4, innovation: 3, growth: 2, talent: 2 },
}

const situationScore: Record<ForceId, Record<SituationSlug, number>> = {
  'ai-ascendance':          { transformation: 5, 'ceo-transition': 4, 'culture-change': 2 },
  'workforce-transformation':{ 'culture-change': 5, transformation: 4, 'ceo-transition': 3 },
  'trust-recalibration':    { 'ceo-transition': 5, 'culture-change': 4, transformation: 2 },
  'human-augmentation':     { transformation: 5, 'ceo-transition': 3, 'culture-change': 3 },
  'institutional-rewiring': { 'ceo-transition': 4, 'culture-change': 4, transformation: 3 },
}

const industryScore: Record<ForceId, Record<IndustrySlug, number>> = {
  'ai-ascendance':          { technology: 5, healthcare: 4, consumer: 4, 'financial-services': 3 },
  'workforce-transformation':{ healthcare: 5, technology: 4, 'financial-services': 3, consumer: 3 },
  'trust-recalibration':    { 'financial-services': 5, healthcare: 4, consumer: 4, technology: 3 },
  'human-augmentation':     { technology: 5, healthcare: 4, consumer: 3, 'financial-services': 2 },
  'institutional-rewiring': { 'financial-services': 5, healthcare: 4, technology: 3, consumer: 2 },
}

function rankForces(industry: IndustrySlug, situation: SituationSlug, challenge: ChallengeSlug): ForceId[] {
  const ids: ForceId[] = ['ai-ascendance', 'workforce-transformation', 'trust-recalibration', 'human-augmentation', 'institutional-rewiring']
  return ids
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
  },
  'workforce-transformation': {
    healthcare:           'Persistent shortages reshape the operating model.',
    'financial-services': 'AI changes what financial expertise means and who holds it.',
    consumer:             'AI changes what consumer-facing roles require and create.',
    technology:           'Redefines what technical talent looks like and where it comes from.',
  },
  'trust-recalibration': {
    healthcare:           "Becomes the new CEO's scarcest, decisive asset.",
    'financial-services': 'The defining constraint and competitive differentiator.',
    consumer:             'Determines which AI experiences consumers accept and which they reject.',
    technology:           'Shapes what users and regulators will permit technology companies to do.',
  },
  'human-augmentation': {
    healthcare:           'Redraws the line between clinician and machine.',
    'financial-services': 'Redraws the boundary between advisor judgment and machine recommendation.',
    consumer:             'Redraws the value of human presence in consumer experience.',
    technology:           'Redefines the relationship between engineers, products, and AI systems.',
  },
  'institutional-rewiring': {
    healthcare:           'Governance and the regulatory floor are reset.',
    'financial-services': 'Compliance frameworks are being rewritten in real time.',
    consumer:             'Data, privacy, and AI regulations reshape the innovation boundary.',
    technology:           'The regulatory environment catches up with what the industry built.',
  },
}

// ─── Force descriptions ───────────────────────────────────────────────────────

const forceDescriptions: Record<ForceId, Record<IndustrySlug, string>> = {
  'ai-ascendance': {
    healthcare:           'Healthcare is heavily dependent on information processing, documentation, coordination, and decision support — all areas where AI is rapidly improving.',
    'financial-services': 'AI is transforming underwriting, fraud detection, customer advisory, and portfolio management — creating competitive opportunity and new categories of risk.',
    consumer:             'AI is changing how products are discovered, how services are delivered, how preferences are understood, and how brand relationships are maintained at scale.',
    technology:           'AI is changing every layer of technology organizations — how products are built, how engineering teams work, how competitive advantage is created, and how quickly the rules of the industry shift.',
  },
  'workforce-transformation': {
    healthcare:           'Structural workforce shortages — not cyclical — are forcing healthcare organizations to rethink staffing models, role design, and the relationship between human and machine work.',
    'financial-services': 'AI is changing the skills, roles, and career paths that financial services organizations need — while creating cultural tension between efficiency expectations and workforce stability.',
    consumer:             'Consumer organizations are seeing the earliest and most visible effects of AI on frontline roles — in retail, service, and logistics. The transformation agenda is partly a workforce redesign agenda.',
    technology:           'Technology organizations face a paradox: they are building the AI that transforms every industry — including their own. The skills, roles, and team structures of technology companies are changing as fast as their products.',
  },
  'trust-recalibration': {
    healthcare:           'Trust — with patients, clinicians, regulators, and payers — is under pressure from AI deployment, leadership change, and widening gaps between stated values and observable action.',
    'financial-services': 'Trust in financial services — with customers, regulators, employees, and the public — is under structural pressure as AI-driven decisions proliferate and accountability gaps widen.',
    consumer:             'Consumer trust in AI-driven brand experiences is highly contextual — welcomed in some moments, resented in others. Organizations that get this wrong at scale face significant brand damage.',
    technology:           'Trust in technology companies — from users, regulators, enterprise customers, and employees — is under pressure from AI deployment decisions, data practices, and growing power concentration.',
  },
  'human-augmentation': {
    healthcare:           'The boundary between what humans do and what machines do in healthcare is actively shifting. Clinical roles are being redesigned around AI capability rather than against it.',
    'financial-services': 'The question in financial services is no longer whether AI will change advisory and analytical roles, but how — and who will set the terms of that boundary.',
    consumer:             'As AI handles more routine consumer interactions, the question becomes what human presence adds and where it is irreplaceable — shaping the entire design of consumer experience.',
    technology:           'Technology organizations are at the center of the human augmentation question — building AI tools that change what their own engineers and product teams do, and how quickly.',
  },
  'institutional-rewiring': {
    healthcare:           'Healthcare regulatory frameworks, governance structures, and institutional expectations are under revision as AI deployment, workforce change, and trust dynamics force new accountability architectures.',
    'financial-services': 'Regulatory frameworks governing AI, data, and financial decision-making are being actively rewritten by regulators who are moving faster than most institutions anticipated.',
    consumer:             'The regulatory and institutional environment around consumer data, AI in marketing, and privacy is changing rapidly — creating both constraints and competitive dynamics.',
    technology:           'Technology companies built most of the current AI infrastructure before the regulatory frameworks existed. Those frameworks are now being written — and the organizations that shaped the technology are now subject to it.',
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
}

// ─── Top signals per force × industry ────────────────────────────────────────

const topSignals: Record<ForceId, Record<IndustrySlug, string[]>> = {
  'ai-ascendance': {
    healthcare:           ['AI agents enter clinical and administrative workflows', 'Rapid growth in healthcare AI investment', 'AI diagnostic tools reach clinical parity'],
    'financial-services': ['Rapid growth of AI in consumer lending and credit decisioning', 'Emergence of agentic AI in wealth management', 'AI audit requirements entering regulatory frameworks'],
    consumer:             ['Rapid adoption of AI-driven personalization in consumer retail', 'AI-generated content entering consumer marketing', 'Agentic shopping and discovery tools gaining traction'],
    technology:           ['AI coding assistants accelerating software development velocity', 'Agentic AI systems entering production engineering workflows', 'AI-native products displacing established technology categories'],
  },
  'workforce-transformation': {
    healthcare:           ['Persistent workforce shortages in clinical roles', 'Growth of hybrid human-AI care teams', 'Ambient AI documentation tools reducing clinician burden'],
    'financial-services': ['Declining demand for entry-level financial analyst roles', 'Rising premium for AI-fluent relationship managers', 'Internal AI upskilling programs at major institutions'],
    consumer:             ['AI customer service tools reducing handling time in consumer retail', 'Frontline role redesign becoming a workforce strategy priority', 'Consumer preference for human interaction in high-stakes moments'],
    technology:           ['AI accelerating junior developer productivity significantly', 'Shift in engineering hiring toward systems design over implementation', 'Internal AI tool adoption changing team structure and size'],
  },
  'trust-recalibration': {
    healthcare:           ['Public trust in AI-assisted care diverges by domain', 'Expansion of AI governance requirements in healthcare', 'Clinician trust in AI tools tracks with involvement in deployment'],
    'financial-services': ['Regulatory frameworks targeting algorithmic lending bias', 'Growing customer demand for human explanation of AI decisions', 'EU AI Act enforcement accelerating for financial services'],
    consumer:             ['Consumer backlash against invasive AI personalization', 'Brand preference shifting toward transparency in data use', 'Growing regulatory attention to AI in consumer marketing'],
    technology:           ['User trust in AI-generated content declining in key domains', 'Regulatory scrutiny of AI systems used in high-stakes decisions', 'Enterprise buyers demanding AI transparency and auditability'],
  },
  'human-augmentation': {
    healthcare:           ['Growth of personalized patient experiences', 'AI diagnostic tools reach clinical parity in radiology and pathology', 'Human-AI complementarity producing superior outcomes in research'],
    'financial-services': ['Growing adoption of AI co-pilot tools among relationship managers', 'Client preference for hybrid human-AI advisory models', 'Human accountability requirements in AI-driven financial decisions'],
    consumer:             ['Consumer research confirming human preference in emotionally significant interactions', 'Premium brands investing in elevated human experience as differentiator', 'Service design increasingly distinguishing human and AI touchpoints'],
    technology:           ['AI pair programming tools changing how software is written', 'Product teams using AI for ideation, testing, and design iteration', 'Engineering organizations rethinking what human judgment adds in AI-assisted work'],
  },
  'institutional-rewiring': {
    healthcare:           ['Expansion of AI governance requirements in clinical settings', 'New compliance frameworks for high-risk AI systems', 'EU AI Act creating precedent for healthcare AI governance'],
    'financial-services': ['Algorithmic accountability standards from financial regulators', 'EU AI Act enforcement timeline accelerating', 'Board AI governance requirements becoming standard practice'],
    consumer:             ['Major markets implementing new consumer AI and data regulations', 'Consumer preference shifting toward privacy-protective brands', 'Advertising AI facing new disclosure requirements'],
    technology:           ['AI regulation advancing in EU, UK, US, and major markets simultaneously', 'Government scrutiny of foundation model providers intensifying', 'Enterprise AI procurement requiring compliance documentation'],
  },
}

// ─── Signals pool per industry ────────────────────────────────────────────────

type SignalInput = Omit<Signal, 'id'>
const signalPools: Record<IndustrySlug, SignalInput[]> = {
  healthcare: [
    { title: 'AI agents enter clinical and administrative workflows', potentialImpact: 'Redesign of care coordination, documentation, and patient engagement.', relatedForce: 'AI Ascendance', sourceName: 'HIMSS', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Expansion of AI governance requirements', potentialImpact: 'New compliance, oversight, and accountability structures in clinical AI.', relatedForce: 'Institutional Rewiring', sourceName: 'HHS', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Persistent workforce shortages in clinical roles', potentialImpact: 'Acceleration of automation and augmentation strategies across care settings.', relatedForce: 'Workforce Transformation', sourceName: 'AHA Workforce', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Growth of personalized patient experiences', potentialImpact: 'Changing expectations around access, communication, and care delivery.', relatedForce: 'Human Augmentation', sourceName: 'Deloitte Health', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Rapid growth in healthcare AI investment', potentialImpact: 'Increased competitive pressure and innovation velocity across health systems.', relatedForce: 'AI Ascendance', sourceName: 'Rock Health', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'High' },
  ],
  'financial-services': [
    { title: 'Regulatory frameworks targeting algorithmic lending bias', potentialImpact: 'New compliance requirements for AI-driven credit and lending decisions.', relatedForce: 'Institutional Rewiring', sourceName: 'CFPB', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Rapid growth of AI in consumer lending and credit decisioning', potentialImpact: 'Competitive pressure on organizations without AI-enabled underwriting.', relatedForce: 'AI Ascendance', sourceName: 'McKinsey Financial Services', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Growing customer demand for human explanation of AI decisions', potentialImpact: 'Customer experience expectations shifting toward transparency and explanation.', relatedForce: 'Trust Recalibration', sourceName: 'Edelman Trust Barometer', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'EU AI Act enforcement timeline accelerating for financial services', potentialImpact: 'Compliance requirements for high-risk AI systems becoming operative.', relatedForce: 'Institutional Rewiring', sourceName: 'European Banking Authority', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Emergence of agentic AI in wealth management advisory', potentialImpact: 'Redefinition of advisor role and fiduciary accountability in wealth management.', relatedForce: 'AI Ascendance', sourceName: 'Cerulli Associates', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
  ],
  consumer: [
    { title: 'Rapid adoption of AI-driven personalization in consumer retail', potentialImpact: 'Competitive pressure on organizations without AI-enabled discovery and recommendation.', relatedForce: 'AI Ascendance', sourceName: 'Forrester Consumer Tech', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Consumer backlash against invasive AI personalization', potentialImpact: 'Brand risk from AI personalization that crosses consumer comfort thresholds.', relatedForce: 'Trust Recalibration', sourceName: 'Edelman Brand Trust', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'AI customer service tools reducing handling time by 30–40%', potentialImpact: 'Significant cost reduction opportunity with risk of experience degradation.', relatedForce: 'Workforce Transformation', sourceName: 'Gartner Customer Service', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Major markets implementing new consumer AI and data regulations', potentialImpact: 'Compliance requirements changing data use, personalization, and advertising practices.', relatedForce: 'Institutional Rewiring', sourceName: 'IAPP', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Consumer preference confirmed for human interaction in high-stakes service moments', potentialImpact: 'Design implication for where human presence creates differentiation vs. commodity.', relatedForce: 'Human Augmentation', sourceName: 'PwC Consumer Intelligence', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'Medium' },
  ],
  technology: [
    { title: 'AI coding assistants accelerating software development velocity by 30–50%', potentialImpact: 'Fundamental change in how software teams are sized, structured, and managed.', relatedForce: 'AI Ascendance', sourceName: 'GitHub Research', publicationDate: 'May 2026', sourceLink: '#', confidence: 'High' },
    { title: 'AI regulation advancing simultaneously in EU, UK, US, and major markets', potentialImpact: 'Compliance requirements affecting product design, deployment, and market access.', relatedForce: 'Institutional Rewiring', sourceName: 'Future of Life Institute', publicationDate: 'Apr 2026', sourceLink: '#', confidence: 'High' },
    { title: 'Engineering hiring shifting toward systems design over implementation', potentialImpact: 'Fundamental change in talent profile, compensation, and team architecture.', relatedForce: 'Workforce Transformation', sourceName: 'Sequoia Talent Report', publicationDate: 'Mar 2026', sourceLink: '#', confidence: 'Medium' },
    { title: 'Enterprise buyers demanding AI transparency and auditability', potentialImpact: 'New product requirements and procurement standards for B2B AI products.', relatedForce: 'Trust Recalibration', sourceName: 'Gartner Enterprise IT', publicationDate: 'Feb 2026', sourceLink: '#', confidence: 'High' },
    { title: 'AI-native products displacing established technology categories', potentialImpact: 'Competitive disruption of incumbents in search, productivity, and developer tools.', relatedForce: 'AI Ascendance', sourceName: 'a16z Market Report', publicationDate: 'Jan 2026', sourceLink: '#', confidence: 'High' },
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

// ─── Implications templates ───────────────────────────────────────────────────

function buildImplications(
  industry: IndustrySlug,
  situation: SituationSlug,
  challenge: ChallengeSlug
): StrategicImplication[] {
  const ind = industryLabels[industry]
  const sit = situationLabels[situation]
  const ch = challengeLabels[challenge].toLowerCase()

  return [
    {
      id: 'leadership',
      label: 'Leadership',
      implication: `${sit} leaders may need to become the organization's chief interpreter of these forces — not just a manager of change, but a navigator of the transition.`,
      detail: `The leadership task in ${ind} is less about responding to each force independently and more about creating a coherent narrative for why change is necessary, what will remain human, and where the organization must redesign itself to succeed at ${ch}.`,
    },
    {
      id: 'talent',
      label: 'Talent',
      implication: 'The talent strategy may need to shift from filling roles to redesigning work around new capabilities.',
      detail: `In ${ind}, AI and structural shifts are changing what work requires. Organizations that redesign roles — rather than simply hiring against the current structure — may find themselves with a workforce better equipped for the next five years than those that don't.`,
    },
    {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'The operating model may need to be redesigned rather than simply optimized.',
      detail: `Many current workflows in ${ind} were designed for a world of expensive information processing and scarce intelligence. AI and automation may make it possible to reimagine how work flows across the enterprise — but only if the organization is willing to ask the harder redesign questions.`,
    },
    {
      id: 'growth',
      label: 'Growth',
      implication: `${ch.charAt(0).toUpperCase() + ch.slice(1)} may require a fundamentally different model than the one the organization currently operates.`,
      detail: `The ${ch} opportunity in ${ind} may depend less on scale alone and more on the organization's ability to move faster, earn trust, and deploy new capabilities in ways that the current operating model was not designed to support.`,
    },
    {
      id: 'governance',
      label: 'Governance',
      implication: 'AI deployment and structural change may require clearer accountability structures than currently exist.',
      detail: `As AI influences decisions and operations across ${ind}, leaders will need clearer models for oversight, transparency, and responsibility — particularly in the areas where AI interacts most directly with the people the organization serves.`,
    },
  ]
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

const executiveBriefBody: Record<IndustrySlug, { body1: string; body2: string }> = {
  healthcare: {
    body1: 'Healthcare organizations are entering a period of profound structural change. Advances in artificial intelligence, persistent workforce pressures, shifting patient expectations, and evolving trust dynamics are converging simultaneously.',
    body2: 'Over the next three to five years, the organizations most likely to succeed may not be those with the best technology or the largest scale — but those that most effectively redesign themselves around changing expectations of care, trust, talent, and value creation.',
  },
  'financial-services': {
    body1: 'Financial services organizations are navigating a convergence of forces that center on credibility: AI-driven decisions that customers struggle to explain, a regulatory environment rewriting the rules of transparency, and a workforce asked to work alongside systems it does not fully understand.',
    body2: 'The organizations most likely to build durable competitive positions may not be those with the most sophisticated AI — but those that earn the right to deploy it. In this context, trust is both a constraint and a strategic asset.',
  },
  consumer: {
    body1: 'Consumer expectations are changing faster than most organizations can adapt. AI is enabling new forms of personalization, discovery, and service that were not possible three years ago — while consumer trust in brands, and in the AI systems brands deploy, remains fragile and contextual.',
    body2: 'Organizations that treat transformation as primarily a technology question may find themselves building impressive capabilities for experiences that customers no longer want. The strategic challenge is knowing what to innovate for — not just how fast to move.',
  },
  technology: {
    body1: 'Technology organizations are at the center of the forces reshaping every industry — and are simultaneously subject to them. AI is changing how software is built, how teams are structured, how competitive advantage is created, and how quickly the rules of the market shift.',
    body2: 'The organizations most likely to succeed in this environment may not be those that move fastest in absolute terms, but those that move with the most clarity about where they are going — and why the people they need will want to go there with them.',
  },
}

// ─── Snapshot changes ─────────────────────────────────────────────────────────

function buildSnapshotChanges(rankedIds: ForceId[]): SnapshotChange[] {
  const directionByForce: Record<ForceId, SnapshotChange['direction']> = {
    'ai-ascendance': 'up',
    'trust-recalibration': 'up',
    'workforce-transformation': 'stable',
    'human-augmentation': 'stable',
    'institutional-rewiring': 'up',
  }
  const changeText: Record<ForceId, string> = {
    'ai-ascendance': 'Elevated as deployment of agentic AI systems accelerates across industries.',
    'trust-recalibration': 'Increasing in importance as AI deployment raises new accountability questions.',
    'workforce-transformation': 'Remains highly relevant as role redesign continues to accelerate.',
    'human-augmentation': 'Growing in strategic importance as the human-AI boundary becomes a design question.',
    'institutional-rewiring': 'Moving faster than anticipated as regulatory frameworks become operative.',
  }
  return rankedIds.slice(0, 3).map(id => ({
    force: forceBase[id].name,
    text: changeText[id],
    direction: directionByForce[id],
  }))
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
  const body = executiveBriefBody[industry]
  const ind = industryLabels[industry]
  const sit = situationLabels[situation]
  const ch = challengeLabels[challenge]

  return {
    id: `${industry}-${situation}-${challenge}`,
    name: `${ind} + ${sit} + ${ch}`,
    headline: `${ind}, through ${situationArticle[situation]}, in pursuit of ${ch.toLowerCase()}.`,
    lastUpdated: 'June 2026',
    trackedForces: 5,
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
      text,
    })),
    signals: signalPools[industry].map((s, i) => ({ ...s, id: `${industry}-sig-${i + 1}` })),
    alignmentCards: [
      { id: 'most-relevant', label: 'Most Relevant', description: 'Team will choose which force bears most directly on this context.' },
      { id: 'most-urgent', label: 'Most Urgent', description: 'Team will choose which force demands action soonest.' },
      { id: 'most-uncertain', label: 'Most Uncertain', description: 'Team will choose which force is hardest to call.' },
      { id: 'most-transformative', label: 'Most Transformative', description: 'Team will choose which force could reshape the operating model.' },
    ],
  }
}

// ─── Where shows up ───────────────────────────────────────────────────────────

const whereShowsMap: Record<ForceId, Record<IndustrySlug, string[]>> = {
  'ai-ascendance': {
    healthcare:           ['Operations', 'Care delivery', 'Decision support'],
    'financial-services': ['Lending', 'Fraud detection', 'Advisory', 'Risk management'],
    consumer:             ['Customer experience', 'Product discovery', 'Marketing'],
    technology:           ['Product development', 'Engineering', 'Competitive strategy'],
  },
  'workforce-transformation': {
    healthcare:           ['Talent', 'Operating model', 'Culture'],
    'financial-services': ['Talent', 'Culture', 'Skill development'],
    consumer:             ['Retail operations', 'Customer service', 'Logistics'],
    technology:           ['Engineering teams', 'Product', 'Talent strategy'],
  },
  'trust-recalibration': {
    healthcare:           ['Governance', 'Patient relationships', 'Workforce trust'],
    'financial-services': ['Customer relationships', 'Regulatory relations', 'Governance'],
    consumer:             ['Brand experience', 'Data practices', 'Customer communication'],
    technology:           ['User relationships', 'Regulatory', 'Enterprise sales'],
  },
  'human-augmentation': {
    healthcare:           ['Clinical operations', 'Role design', 'Technology investment'],
    'financial-services': ['Wealth management', 'Commercial banking', 'Compliance'],
    consumer:             ['High-value service', 'Brand moments', 'Community experience'],
    technology:           ['Engineering', 'Product development', 'Technical leadership'],
  },
  'institutional-rewiring': {
    healthcare:           ['Governance', 'Compliance', 'Board relationships'],
    'financial-services': ['Compliance', 'Risk management', 'Board relations'],
    consumer:             ['Data strategy', 'Marketing compliance', 'Product design'],
    technology:           ['Legal', 'Government relations', 'Product governance'],
  },
}

// ─── Parse context ID ─────────────────────────────────────────────────────────

export function parseContextId(id: string): {
  industry: IndustrySlug
  situation: SituationSlug
  challenge: ChallengeSlug
} | null {
  const industries: IndustrySlug[] = ['healthcare', 'financial-services', 'consumer', 'technology']
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
  const industries: IndustrySlug[] = ['healthcare', 'financial-services', 'consumer', 'technology']
  const situations: SituationSlug[] = ['ceo-transition', 'transformation', 'culture-change']
  const challenges: ChallengeSlug[] = ['growth', 'trust', 'innovation', 'talent']
  return industries.flatMap(i => situations.flatMap(s => challenges.map(c => `${i}-${s}-${c}`)))
}
