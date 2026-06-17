import type { ContextData } from './mockContext'
import { generateContext, parseContextId } from './generator'
import { additionalContexts } from './additionalContexts'

export type { ContextData }

const healthcareContext: ContextData = {
  id: 'healthcare-ceo-transition-growth',
  name: 'Healthcare + CEO Transition + Growth',
  headline: 'Healthcare, through a CEO transition, in pursuit of growth.',
  lastUpdated: 'June 2026',
  trackedForces: 10,
  industry: 'Healthcare',
  leadershipSituation: 'CEO Transition',
  strategicChallenge: 'Growth',
  timeHorizon: '3–5 Years',
  snapshot: 'June 2026',
  coreInsight:
    'The organizations most likely to grow are not those that deploy AI fastest, but those that redesign care, workforce, trust, and governance around intelligence abundance.',
  whatLeadersAreMissing:
    'Many healthcare leaders are focused on workforce shortages, technology adoption, and growth pressure as separate problems. The deeper issue is that the definition of capacity itself is changing: clinical expertise, administrative work, patient trust, and organizational scale are being reshaped at the same time.',
  executiveBrief: {
    pullQuote:
      'For a new CEO, the challenge is not simply responding to these forces independently. It is understanding',
    pullQuoteAccent: 'how they interact.',
    body1:
      'Healthcare organizations are entering a period of profound structural change. Advances in artificial intelligence, persistent workforce pressures, shifting patient expectations, evolving trust dynamics, and growing demands for affordability and access are converging simultaneously.',
    body2:
      'Over the next three to five years, the organizations most likely to succeed may not be those with the best technology or the largest scale, but those that most effectively redesign themselves around changing expectations of care, trust, talent, and value creation.',
  },
  snapshotChanges: [
    {
      force: 'AI Ascendance',
      text: 'Moved up in relevance due to new evidence of agentic workflows entering clinical settings.',
      direction: 'up',
    },
    {
      force: 'Workforce Transformation',
      text: 'Remains highly relevant as structural shortages continue and role redesign accelerates.',
      direction: 'stable',
    },
    {
      force: 'Trust Recalibration',
      text: 'Increased in importance as AI-enabled care raises new patient confidence questions.',
      direction: 'up',
    },
  ],
  forces: [
    {
      rank: '01',
      id: 'ai-ascendance',
      name: 'AI Ascendance',
      shortLine: 'Rewrites the cost and capacity to serve patients.',
      accentHex: '#7c3aed',
      description:
        'Healthcare is heavily dependent on information processing, documentation, coordination, and decision support — all areas where AI is rapidly improving.',
      whySurfaced: [
        'Healthcare contains large volumes of knowledge work',
        'Workforce shortages increase pressure for augmentation',
        'AI affects patient experience, operations, and care delivery',
        'New CEOs have unusual freedom to redesign operating assumptions',
      ],
      whereShows: ['Operations', 'Care delivery', 'Decision support'],
      topSignals: [
        'AI agents enter clinical and administrative workflows',
        'Rapid growth in healthcare AI investment',
        'Expansion of AI governance requirements',
      ],
    },
    {
      rank: '02',
      id: 'workforce-transformation',
      name: 'Workforce Transformation',
      shortLine: 'Persistent shortages reshape the operating model.',
      accentHex: '#ea580c',
      description:
        'Structural workforce shortages — not cyclical — are forcing healthcare organizations to rethink staffing models, role design, and the relationship between human and machine work.',
      whySurfaced: [
        'Burnout and attrition remain structurally elevated',
        'AI-driven role redesign is accelerating',
        'CEO transition creates a window to reset workforce expectations',
        'Growth targets cannot be met under current staffing assumptions',
      ],
      whereShows: ['Talent', 'Operating model', 'Culture'],
      topSignals: [
        'Persistent workforce shortages in clinical roles',
        'Growth of hybrid human-AI care teams',
      ],
    },
    {
      rank: '03',
      id: 'trust-recalibration',
      name: 'Trust Recalibration',
      shortLine: "Becomes the new CEO's scarcest, decisive asset.",
      accentHex: '#059669',
      description:
        'Trust — with patients, clinicians, regulators, and payers — is under pressure from AI deployment, leadership change, and widening gaps between stated values and observable action.',
      whySurfaced: [
        'CEO transitions are trust-sensitive leadership moments',
        'AI in clinical settings raises explicit trust questions',
        'Healthcare patients require visible human accountability',
        'Trust is both a growth constraint and a competitive differentiator',
      ],
      whereShows: ['Governance', 'Patient relationships', 'Workforce trust'],
      topSignals: [
        'Public trust in AI-assisted care diverges by domain',
        'Expansion of AI governance requirements',
      ],
    },
    {
      rank: '04',
      id: 'human-augmentation',
      name: 'Human Augmentation',
      shortLine: 'Redraws the line between clinician and machine.',
      accentHex: '#a78bfa',
      description:
        'The boundary between what humans do and what machines do in healthcare is actively shifting. Clinical roles are being redesigned around AI capability rather than against it.',
      whySurfaced: [
        'Clinical AI parity in radiology and pathology is now evidenced',
        'Role redesign is a growth lever, not just an efficiency play',
        'New CEOs can set the terms of augmentation vs. replacement',
        'Human-AI complementarity produces superior outcomes in research',
      ],
      whereShows: ['Clinical operations', 'Role design', 'Technology investment'],
      topSignals: [
        'Growth of personalized patient experiences',
        'AI diagnostic tools reach clinical parity',
      ],
    },
    {
      rank: '05',
      id: 'institutional-rewiring',
      name: 'Institutional Rewiring',
      shortLine: 'Governance and the regulatory floor are reset.',
      accentHex: '#b45309',
      description:
        'Healthcare regulatory frameworks, governance structures, and institutional expectations are all under revision as AI deployment, workforce change, and trust dynamics force new accountability architectures.',
      whySurfaced: [
        'EU AI Act enforcement creates precedent for healthcare AI governance',
        'New CEOs face inherited governance gaps',
        'Boards are asking whether leadership teams can govern AI credibly',
        'Compliance frameworks are still being written in real time',
      ],
      whereShows: ['Governance', 'Compliance', 'Board relationships'],
      topSignals: [
        'Expansion of AI governance requirements',
        'New compliance frameworks for high-risk AI systems',
      ],
    },
  ],
  implications: [
    {
      id: 'leadership',
      label: 'Leadership',
      implication: "The new CEO's most important role is not implementing a strategy. It is creating a coherent account of how these forces interact — and what the organization must redesign as a result.",
      detail: 'The leadership task is less about responding to each force independently and more about naming a direction that makes sense of why change is necessary, what will remain human, and where the organization must fundamentally redesign itself.',
    },
    {
      id: 'talent',
      label: 'Talent',
      implication: 'The workforce strategy that will work is redesigning work around new capabilities — not filling roles that were built for a world before AI.',
      detail: 'Persistent shortages and AI-enabled augmentation mean that recruiting harder against the current role structure will not close the gap. The organizations that succeed are rethinking roles, workflows, skill models, and career paths for the capacity model that AI makes possible.',
    },
    {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'The operating model question is not how to improve current workflows — it is which workflows still make sense when AI makes coordination, documentation, and decision support cheap.',
      detail: 'Many current processes exist because information and coordination were historically expensive. AI changes that calculus. The organizations that reimagine the workflow from first principles will find different answers than those that automate existing steps.',
    },
    {
      id: 'growth',
      label: 'Growth',
      implication: 'Growth in healthcare depends less on scale and more on the ability to create care experiences that are accessible, personalized, credible, and human where it matters most.',
      detail: "The growth model built on volume, coverage, and margin per procedure is under structural pressure. The organizations that grow in the next period are those that build trust and personalization into care at a cost that was not previously possible.",
    },
    {
      id: 'governance',
      label: 'Governance',
      implication: 'AI in healthcare requires accountability structures that are proactively designed — not added after the fact when something goes wrong.',
      detail: 'As AI influences decisions, care experiences, and operational workflows, governance that can answer for those decisions with clarity is a competitive and regulatory requirement. The organizations that build this early will face fewer disruptions than those that do not.',
    },
  ],
  questions: [],
  provocations: [
    { number: '01', text: "What if healthcare's primary scarcity is no longer expertise but attention?" },
    { number: '02', text: 'What if patients increasingly trust AI for information and humans for decisions?' },
    { number: '03', text: 'What if administrative work largely disappears before clinical work changes substantially?' },
    { number: '04', text: 'What if healthcare organizations become learning systems rather than delivery systems?' },
    { number: '05', text: 'What if trust becomes a more valuable competitive asset than technology?' },
  ],
  signals: [
    {
      id: 's1',
      title: 'AI agents enter clinical and administrative workflows',
      potentialImpact: 'Redesign of care coordination, documentation, and patient engagement.',
      relatedForce: 'AI Ascendance',
      sourceName: 'HIMSS',
      publicationDate: 'May 2026',
      sourceLink: '#',
      confidence: 'High',
    },
    {
      id: 's2',
      title: 'Expansion of AI governance requirements',
      potentialImpact: 'New compliance, oversight, and accountability structures.',
      relatedForce: 'Institutional Rewiring',
      sourceName: 'HHS',
      publicationDate: 'Apr 2026',
      sourceLink: '#',
      confidence: 'High',
    },
    {
      id: 's3',
      title: 'Persistent workforce shortages',
      potentialImpact: 'Acceleration of automation and augmentation strategies.',
      relatedForce: 'Workforce Transformation',
      sourceName: 'AHA Workforce',
      publicationDate: 'Mar 2026',
      sourceLink: '#',
      confidence: 'Medium',
    },
    {
      id: 's4',
      title: 'Growth of personalized patient experiences',
      potentialImpact: 'Changing expectations around access, communication, and care delivery.',
      relatedForce: 'Human Augmentation',
      sourceName: 'Deloitte Health',
      publicationDate: 'Feb 2026',
      sourceLink: '#',
      confidence: 'Medium',
    },
    {
      id: 's5',
      title: 'Rapid growth in healthcare AI investment',
      potentialImpact: 'Increased competitive pressure and innovation velocity.',
      relatedForce: 'AI Ascendance',
      sourceName: 'Rock Health',
      publicationDate: 'Jan 2026',
      sourceLink: '#',
      confidence: 'High',
    },
  ],
  alignmentCards: [
    { id: 'most-relevant', label: 'Most Relevant', description: 'Team will choose which force bears most directly on this context.' },
    { id: 'most-urgent', label: 'Most Urgent', description: 'Team will choose which force demands action soonest.' },
    { id: 'most-uncertain', label: 'Most Uncertain', description: 'Team will choose which force is hardest to call.' },
    { id: 'most-transformative', label: 'Most Transformative', description: 'Team will choose which force could reshape the operating model.' },
  ],
}

const financialServicesContext: ContextData = {
  id: 'financial-services-ceo-transition-trust',
  name: 'Financial Services + CEO Transition + Trust',
  headline: 'Financial services, through a CEO transition, in pursuit of trust.',
  lastUpdated: 'June 2026',
  trackedForces: 10,
  industry: 'Financial Services',
  leadershipSituation: 'CEO Transition',
  strategicChallenge: 'Trust',
  timeHorizon: '3–5 Years',
  snapshot: 'June 2026',
  coreInsight:
    'The next trust advantage in financial services will come from making intelligence, accountability, and human judgment visible at the moments that matter most.',
  whatLeadersAreMissing:
    'Many financial services leaders treat trust as a brand, compliance, or communications issue. The deeper issue is that AI-assisted decisions, regulatory pressure, and customer skepticism are converging into a new operating condition: trust must be designed into how decisions are made, explained, and governed.',
  executiveBrief: {
    pullQuote:
      'For a new financial services CEO, trust is not a reputation metric. It is',
    pullQuoteAccent: 'the operating condition.',
    body1:
      'Financial services organizations are navigating a convergence of forces that all center on the question of credibility: AI-driven decisions that customers cannot explain, a regulatory environment that is actively rewriting the rules of transparency, and a workforce that is being asked to work alongside systems it does not fully understand.',
    body2:
      'The organizations most likely to build durable competitive positions may not be those with the most sophisticated AI — but those that earn the right to deploy it. Trust, in this environment, is both a constraint and a strategic asset.',
  },
  snapshotChanges: [
    {
      force: 'Trust Recalibration',
      text: 'Elevated as primary force as regulatory scrutiny of AI-driven financial decisions intensifies.',
      direction: 'up',
    },
    {
      force: 'AI Ascendance',
      text: 'Continues accelerating across lending, advisory, and fraud detection — with governance gaps widening.',
      direction: 'up',
    },
    {
      force: 'Institutional Rewiring',
      text: 'Regulatory frameworks are moving faster than most organizations anticipated.',
      direction: 'up',
    },
  ],
  forces: [
    {
      rank: '01',
      id: 'trust-recalibration',
      name: 'Trust Recalibration',
      shortLine: 'The defining constraint and competitive differentiator.',
      accentHex: '#059669',
      description:
        'Trust in financial services — with customers, regulators, employees, and the public — is under structural pressure as AI-driven decisions proliferate, leadership transitions create uncertainty, and accountability gaps widen.',
      whySurfaced: [
        'AI-driven credit, advisory, and fraud decisions raise explainability questions',
        'CEO transitions are high-trust-sensitivity moments for clients and regulators',
        'Regulatory scrutiny of AI fairness and transparency is accelerating',
        'Customer trust in financial institutions has not recovered to pre-2008 levels',
      ],
      whereShows: ['Customer relationships', 'Regulatory relations', 'Governance'],
      topSignals: [
        'Regulatory frameworks targeting algorithmic lending bias',
        'Growing customer demand for human explanation of AI decisions',
        'Financial services firms investing in explainable AI capabilities',
      ],
    },
    {
      rank: '02',
      id: 'ai-ascendance',
      name: 'AI Ascendance',
      shortLine: 'Reshapes how financial decisions are made and explained.',
      accentHex: '#7c3aed',
      description:
        'AI is transforming underwriting, fraud detection, customer advisory, and portfolio management in financial services — creating both competitive opportunity and new categories of risk.',
      whySurfaced: [
        'AI enables significant efficiency gains in high-volume decision processes',
        'Competitors deploying AI are reducing cost-to-serve materially',
        'Explainability and fairness requirements create new governance demands',
        'New CEOs face inherited AI deployments they did not design',
      ],
      whereShows: ['Lending', 'Fraud detection', 'Customer advisory', 'Risk management'],
      topSignals: [
        'Rapid growth of AI in consumer lending and credit decisioning',
        'Emergence of agentic financial advisors in wealth management',
        'AI audit requirements entering regulatory frameworks',
      ],
    },
    {
      rank: '03',
      id: 'institutional-rewiring',
      name: 'Institutional Rewiring',
      shortLine: 'Compliance frameworks are being rewritten in real time.',
      accentHex: '#b45309',
      description:
        'Regulatory frameworks governing AI, data, and financial decision-making are being actively rewritten by regulators who are moving faster than most institutions anticipated.',
      whySurfaced: [
        'EU AI Act creates direct compliance requirements for financial AI systems',
        'US regulators signaling new expectations for algorithmic accountability',
        'Board-level expectations around AI governance are rising rapidly',
        'New CEOs inherit compliance gaps created during previous AI deployments',
      ],
      whereShows: ['Compliance', 'Risk management', 'Board relations', 'Legal'],
      topSignals: [
        'New algorithmic accountability standards from financial regulators',
        'EU AI Act enforcement timeline accelerating',
        'Board AI governance requirements becoming standard practice',
      ],
    },
    {
      rank: '04',
      id: 'workforce-transformation',
      name: 'Workforce Transformation',
      shortLine: 'AI changes what financial expertise means and who holds it.',
      accentHex: '#ea580c',
      description:
        'AI is changing the skills, roles, and career paths that financial services organizations need — while creating cultural tension between efficiency expectations and workforce stability.',
      whySurfaced: [
        'AI automates high-volume, rules-based financial analysis',
        'Human judgment roles are being redefined, not eliminated',
        'CEO transitions create workforce uncertainty that compounds existing anxiety',
        'Talent competition for AI-fluent financial professionals is intensifying',
      ],
      whereShows: ['Talent', 'Culture', 'Skill development', 'Operating model'],
      topSignals: [
        'Declining demand for entry-level financial analyst roles',
        'Rising premium for AI-fluent relationship managers',
        'Internal AI upskilling programs becoming standard at major institutions',
      ],
    },
    {
      rank: '05',
      id: 'human-augmentation',
      name: 'Human Augmentation',
      shortLine: 'Redraws the boundary between advisor judgment and machine recommendation.',
      accentHex: '#a78bfa',
      description:
        'The question in financial services is no longer whether AI will change advisory and analytical roles, but how — and who will set the terms of that boundary.',
      whySurfaced: [
        'AI-assisted advisory outperforms human-only advice in controlled studies',
        'Clients want human relationship with AI-enhanced capability',
        'Regulatory frameworks require human accountability for AI recommendations',
        'New CEOs can shape the cultural norms around human-AI collaboration',
      ],
      whereShows: ['Wealth management', 'Commercial banking', 'Insurance', 'Compliance'],
      topSignals: [
        'Growing adoption of AI co-pilot tools among relationship managers',
        'Client preference for hybrid human-AI advisory models',
      ],
    },
  ],
  implications: [
    {
      id: 'leadership',
      label: 'Leadership',
      implication: 'A new CEO may need to make trust the organizing principle of every major strategic decision.',
      detail: 'In financial services, trust is both table stakes and a differentiator. The new CEO who publicly and credibly commits to transparency — with customers, regulators, and employees — may gain more strategic freedom than one who leads with capability.',
    },
    {
      id: 'talent',
      label: 'Talent',
      implication: 'The workforce strategy may need to shift from AI literacy to AI judgment.',
      detail: 'The most valuable financial services professionals over the next five years may not be those who can build AI systems, but those who can evaluate, explain, and take accountability for AI-influenced decisions.',
    },
    {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'Operating models may need to embed trust accountability at every AI decision point.',
      detail: 'As AI influences lending, advisory, and risk decisions, the question of who is accountable — and how that accountability is visible to customers and regulators — may need to be designed into operating models, not added after the fact.',
    },
    {
      id: 'growth',
      label: 'Growth',
      implication: 'Growth may depend less on AI capability and more on AI credibility.',
      detail: 'Customers who trust a financial institution to use AI fairly, transparently, and in their interest may be more loyal and more willing to consolidate their financial relationships. Trust could become the growth engine.',
    },
    {
      id: 'governance',
      label: 'Governance',
      implication: 'AI governance may need to become a board-level capability, not just a compliance function.',
      detail: 'Boards of financial services organizations are beginning to be asked to demonstrate AI literacy and oversight competence — not just approve AI strategies. The governance gap is widening faster than most boards are closing it.',
    },
  ],
  questions: [],
  provocations: [
    { number: '01', text: 'What if the organizations that deploy AI most transparently end up with stronger regulatory relationships — and more freedom to innovate?' },
    { number: '02', text: 'What if customers in financial services trust AI for information but increasingly need humans for decisions that matter most?' },
    { number: '03', text: 'What if the compliance cost of AI fairness becomes a competitive advantage for organizations that build it early?' },
    { number: '04', text: 'What if financial services organizations become trust intermediaries — between AI systems and the humans who depend on them?' },
    { number: '05', text: 'What if the new CEO\'s most important governance decision is not about technology, but about accountability structures?' },
  ],
  signals: [
    {
      id: 'fs1',
      title: 'Regulatory frameworks targeting algorithmic lending bias',
      potentialImpact: 'New compliance requirements for AI-driven credit and lending decisions.',
      relatedForce: 'Institutional Rewiring',
      sourceName: 'CFPB',
      publicationDate: 'May 2026',
      sourceLink: '#',
      confidence: 'High',
    },
    {
      id: 'fs2',
      title: 'Rapid growth of AI in consumer lending and credit decisioning',
      potentialImpact: 'Competitive pressure on organizations without AI-enabled underwriting.',
      relatedForce: 'AI Ascendance',
      sourceName: 'McKinsey Financial Services',
      publicationDate: 'Apr 2026',
      sourceLink: '#',
      confidence: 'High',
    },
    {
      id: 'fs3',
      title: 'Growing customer demand for human explanation of AI decisions',
      potentialImpact: 'Customer experience expectations shifting toward transparency and explanation.',
      relatedForce: 'Trust Recalibration',
      sourceName: 'Edelman Trust Barometer',
      publicationDate: 'Mar 2026',
      sourceLink: '#',
      confidence: 'Medium',
    },
    {
      id: 'fs4',
      title: 'EU AI Act enforcement timeline accelerating for financial services',
      potentialImpact: 'Compliance requirements for high-risk AI systems becoming operative.',
      relatedForce: 'Institutional Rewiring',
      sourceName: 'European Banking Authority',
      publicationDate: 'Feb 2026',
      sourceLink: '#',
      confidence: 'High',
    },
    {
      id: 'fs5',
      title: 'Emergence of agentic AI in wealth management advisory',
      potentialImpact: 'Redefinition of advisor role and fiduciary accountability.',
      relatedForce: 'AI Ascendance',
      sourceName: 'Cerulli Associates',
      publicationDate: 'Jan 2026',
      sourceLink: '#',
      confidence: 'Medium',
    },
  ],
  alignmentCards: [
    { id: 'most-relevant', label: 'Most Relevant', description: 'Team will choose which force bears most directly on this context.' },
    { id: 'most-urgent', label: 'Most Urgent', description: 'Team will choose which force demands action soonest.' },
    { id: 'most-uncertain', label: 'Most Uncertain', description: 'Team will choose which force is hardest to call.' },
    { id: 'most-transformative', label: 'Most Transformative', description: 'Team will choose which force could reshape the operating model.' },
  ],
}

const consumerContext: ContextData = {
  id: 'consumer-transformation-innovation',
  name: 'Consumer + Transformation + Innovation',
  headline: 'Consumer, through a transformation, in pursuit of innovation.',
  lastUpdated: 'June 2026',
  trackedForces: 10,
  industry: 'Consumer',
  leadershipSituation: 'Transformation',
  strategicChallenge: 'Innovation',
  timeHorizon: '3–5 Years',
  snapshot: 'June 2026',
  coreInsight:
    'Consumer innovation is shifting from creating more experiences to creating experiences that feel intelligent, credible, and worth belonging to.',
  whatLeadersAreMissing:
    'Many consumer leaders are focused on speed, personalization, and AI-enabled experience design. The deeper issue is that consumers are becoming more selective about what feels real, relevant, and trustworthy. Innovation that scales without meaning risks accelerating irrelevance.',
  executiveBrief: {
    pullQuote:
      'For consumer organizations in transformation, innovation is not the challenge. The challenge is',
    pullQuoteAccent: 'knowing what to innovate for.',
    body1:
      'Consumer expectations are changing faster than most organizations can adapt. AI is enabling new forms of personalization, discovery, and service that were not possible three years ago. At the same time, consumer trust in brands — and in the AI systems brands deploy — is fragile, highly contextual, and increasingly decisive.',
    body2:
      'Organizations that treat transformation as primarily a technology question may find themselves building impressive capabilities for experiences that customers no longer want. The transformation challenge is less technical and more strategic: what kind of relationship do you want to have with the people you serve?',
  },
  snapshotChanges: [
    {
      force: 'AI Ascendance',
      text: 'Consumer AI applications accelerating sharply — personalization, discovery, and service now core battlegrounds.',
      direction: 'up',
    },
    {
      force: 'Trust Recalibration',
      text: 'Consumer trust in brand AI is highly variable — early evidence suggests context matters enormously.',
      direction: 'stable',
    },
    {
      force: 'Workforce Transformation',
      text: 'Role redesign is beginning in earnest as AI changes what retail and service organizations need from people.',
      direction: 'up',
    },
  ],
  forces: [
    {
      rank: '01',
      id: 'ai-ascendance',
      name: 'AI Ascendance',
      shortLine: 'Redefines personalization, discovery, and the consumer relationship.',
      accentHex: '#7c3aed',
      description:
        'AI is changing the fundamental dynamics of consumer experience — how products are discovered, how services are delivered, how preferences are understood, and how brand relationships are maintained at scale.',
      whySurfaced: [
        'Consumer expectations for personalization have shifted from preference to expectation',
        'AI enables discovery and recommendation at a quality and scale not previously possible',
        'Competitors using AI in consumer experience are gaining measurable advantage',
        'Transformation leaders have a mandate and a window to redesign',
      ],
      whereShows: ['Customer experience', 'Product discovery', 'Service delivery', 'Marketing'],
      topSignals: [
        'Rapid adoption of AI-driven personalization in consumer retail',
        'AI-generated content entering consumer marketing and creative',
        'Agentic shopping and discovery tools gaining consumer traction',
      ],
    },
    {
      rank: '02',
      id: 'trust-recalibration',
      name: 'Trust Recalibration',
      shortLine: 'Determines which AI experiences consumers accept and which they reject.',
      accentHex: '#059669',
      description:
        'Consumer trust in AI-driven brand experiences is highly contextual — welcomed in some moments, resented in others. Organizations that get this wrong at scale face significant brand damage.',
      whySurfaced: [
        'AI personalization can feel helpful or invasive depending on context',
        'Brand trust determines consumer tolerance for AI-driven experiences',
        'Transformation moments carry elevated trust sensitivity',
        'Consumer advocacy and regulatory scrutiny of AI in marketing is growing',
      ],
      whereShows: ['Brand experience', 'Data practices', 'Customer communication', 'Marketing'],
      topSignals: [
        'Consumer backlash against invasive AI personalization in retail',
        'Brand preference shifting toward perceived transparency in data use',
        'Growing regulatory attention to AI in consumer marketing',
      ],
    },
    {
      rank: '03',
      id: 'workforce-transformation',
      name: 'Workforce Transformation',
      shortLine: 'AI changes what consumer-facing roles require and create.',
      accentHex: '#ea580c',
      description:
        'Consumer organizations are seeing the earliest and most visible effects of AI on frontline roles — in retail, service, and logistics. The transformation agenda is partly a workforce redesign agenda.',
      whySurfaced: [
        'AI is automating high-volume, routine consumer service interactions',
        'Human-AI handoffs in consumer experience are becoming a design challenge',
        'Frontline workforce is among the most affected by AI deployment',
        'Transformation leaders have mandate to redesign how work is organized',
      ],
      whereShows: ['Retail operations', 'Customer service', 'Logistics', 'Store experience'],
      topSignals: [
        'AI customer service tools reducing handling time in consumer retail',
        'Frontline role redesign becoming a workforce strategy priority',
        'Consumer preference for human interaction in high-stakes service moments',
      ],
    },
    {
      rank: '04',
      id: 'human-augmentation',
      name: 'Human Augmentation',
      shortLine: 'Redraws the value of human presence in consumer experience.',
      accentHex: '#a78bfa',
      description:
        'As AI handles more routine consumer interactions, the question becomes: what does human presence add, and where is it irreplaceable? The answer shapes the entire design of consumer experience.',
      whySurfaced: [
        'Consumer research shows strong preference for humans in emotionally significant service moments',
        'AI-human hybrid service models are outperforming either alone in key contexts',
        'Transformation leaders can set the cultural and design norms for human-AI collaboration',
        'Differentiation may come from human presence where competitors have automated',
      ],
      whereShows: ['High-value customer service', 'Brand moments', 'Community experience'],
      topSignals: [
        'Consumer research confirming human preference in emotionally significant interactions',
        'Premium brands investing in elevated human experience as AI differentiator',
      ],
    },
    {
      rank: '05',
      id: 'institutional-rewiring',
      name: 'Institutional Rewiring',
      shortLine: 'Data, privacy, and AI regulations reshape the innovation boundary.',
      accentHex: '#b45309',
      description:
        'The regulatory and institutional environment around consumer data, AI in marketing, and privacy is changing rapidly — creating both constraints and competitive dynamics for consumer organizations.',
      whySurfaced: [
        'Consumer data regulations are tightening in major markets',
        'AI in advertising and personalization is attracting regulatory attention',
        'Privacy as a consumer value is strengthening, not weakening',
        'Organizations that get ahead of compliance create structural advantage',
      ],
      whereShows: ['Data strategy', 'Marketing compliance', 'Product design', 'Governance'],
      topSignals: [
        'Major markets implementing new consumer AI and data regulations',
        'Consumer preference shifting toward privacy-protective brands',
        'Advertising AI facing new disclosure requirements',
      ],
    },
  ],
  implications: [
    {
      id: 'leadership',
      label: 'Leadership',
      implication: 'A transformation leader may need to define what kind of relationship the organization wants with the people it serves — and let that define the innovation agenda.',
      detail: 'Technology can enable many kinds of consumer relationships. The transformation challenge is not what AI makes possible but what the organization decides to pursue — and whether that decision is made intentionally at the leadership level or defaulted to by function-by-function choices.',
    },
    {
      id: 'talent',
      label: 'Talent',
      implication: 'The most valuable consumer workforce capability may be the ability to design AI-human handoffs that customers actually prefer.',
      detail: 'As AI handles more volume, human roles in consumer organizations may shift toward design, judgment, escalation, and emotional intelligence. Organizations that invest in these capabilities early may build a workforce that is both more resilient and more differentiated.',
    },
    {
      id: 'operating-model',
      label: 'Operating Model',
      implication: 'The operating model may need to be redesigned around consumer trust, not just consumer experience.',
      detail: 'AI can improve consumer experience metrics while simultaneously eroding trust if deployed without attention to context, transparency, and the moments when human presence matters. Operating model design may need to make trust a first-order variable, not a dependent outcome.',
    },
    {
      id: 'growth',
      label: 'Growth',
      implication: 'Growth may come from AI-enabled personalization that feels like genuine understanding, not surveillance.',
      detail: "The organizations that will grow through AI personalization are likely those that use AI to understand consumers in ways that feel helpful and earned — not those that maximize personalization regardless of consumer comfort. The growth opportunity and the trust risk are the same feature.",
    },
    {
      id: 'governance',
      label: 'Governance',
      implication: 'Consumer AI governance may need to move from legal compliance to consumer experience design.',
      detail: 'Compliance with AI and data regulations is the floor. The more interesting governance question for consumer organizations is what standards they set for themselves — around transparency, consent, and the use of consumer data — that create differentiation and reduce trust risk.',
    },
  ],
  questions: [],
  provocations: [
    { number: '01', text: 'What if the organizations that use AI to understand consumers most deeply end up feeling the least trustworthy?' },
    { number: '02', text: 'What if premium consumer experience in the AI era means more human presence, not less?' },
    { number: '03', text: 'What if the consumer relationship is redesigned around AI-enabled understanding — and customers prefer it to what existed before?' },
    { number: '04', text: 'What if the brands that grow fastest in the next five years are those that are most transparent about how AI shapes what they offer?' },
    { number: '05', text: 'What if transformation, done well, makes the organization smaller and faster — not just more technologically sophisticated?' },
  ],
  signals: [
    {
      id: 'c1',
      title: 'Rapid adoption of AI-driven personalization in consumer retail',
      potentialImpact: 'Competitive pressure on organizations without AI-enabled discovery and recommendation.',
      relatedForce: 'AI Ascendance',
      sourceName: 'Forrester Consumer Tech',
      publicationDate: 'May 2026',
      sourceLink: '#',
      confidence: 'High',
    },
    {
      id: 'c2',
      title: 'Consumer backlash against invasive AI personalization',
      potentialImpact: 'Brand risk from AI personalization that crosses consumer comfort thresholds.',
      relatedForce: 'Trust Recalibration',
      sourceName: 'Edelman Brand Trust',
      publicationDate: 'Apr 2026',
      sourceLink: '#',
      confidence: 'Medium',
    },
    {
      id: 'c3',
      title: 'AI customer service tools reducing handling time by 30–40%',
      potentialImpact: 'Significant cost reduction opportunity, with risk of consumer experience degradation.',
      relatedForce: 'Workforce Transformation',
      sourceName: 'Gartner Customer Service',
      publicationDate: 'Mar 2026',
      sourceLink: '#',
      confidence: 'High',
    },
    {
      id: 'c4',
      title: 'Major markets implementing new consumer AI and data regulations',
      potentialImpact: 'Compliance requirements changing data use, personalization, and advertising practices.',
      relatedForce: 'Institutional Rewiring',
      sourceName: 'IAPP',
      publicationDate: 'Feb 2026',
      sourceLink: '#',
      confidence: 'High',
    },
    {
      id: 'c5',
      title: 'Consumer preference confirmed for human interaction in high-stakes service moments',
      potentialImpact: 'Design implication for where human presence creates differentiation vs. commodity.',
      relatedForce: 'Human Augmentation',
      sourceName: 'PwC Consumer Intelligence',
      publicationDate: 'Jan 2026',
      sourceLink: '#',
      confidence: 'Medium',
    },
  ],
  alignmentCards: [
    { id: 'most-relevant', label: 'Most Relevant', description: 'Team will choose which force bears most directly on this context.' },
    { id: 'most-urgent', label: 'Most Urgent', description: 'Team will choose which force demands action soonest.' },
    { id: 'most-uncertain', label: 'Most Uncertain', description: 'Team will choose which force is hardest to call.' },
    { id: 'most-transformative', label: 'Most Transformative', description: 'Team will choose which force could reshape the operating model.' },
  ],
}

export const curatedContexts: ContextData[] = [
  healthcareContext,
  financialServicesContext,
  consumerContext,
]

// allContexts used for the homepage saved-contexts cards (curated + additional)
export const allContexts: ContextData[] = [...curatedContexts, ...additionalContexts]

export function getContextById(id: string, horizon?: string): ContextData | undefined {
  // Check all curated and additional contexts first
  const found = allContexts.find((c) => c.id === id)
  if (found) return horizon ? { ...found, timeHorizon: horizon } : found
  // Fall back to generator for valid 3-part slugs
  const parsed = parseContextId(id)
  if (!parsed) return undefined
  return generateContext(parsed.industry, parsed.situation, parsed.challenge, horizon)
}

// Always returns a full slug — never null
export function resolveContextId(industry: string, situation: string, challenge: string): string {
  return `${industry}-${situation}-${challenge}`
}
