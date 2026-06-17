export type ForceSignal = {
  id: string
  title: string
  interpretation: string
  source: string
  date: string
  confidence: 'High' | 'Medium' | 'Low'
  sourceLink: string
}

export type ForceImplications = {
  leadership: string
  talent: string
  operatingModel: string
  growth: string
  governance: string
}

export type StrategicStakes = {
  ifLeadersGetThisRight: string[]
  ifLeadersGetThisWrong: string[]
}

export type ForceDriver = {
  id: string
  name: string
  shortDescription: string
  whyItMatters: string
  signals?: string[]
}

export type ForceDetail = {
  id: string
  name: string
  shortLine: string
  accentHex: string
  momentum: 'Rising' | 'Stable' | 'Declining'
  confidence: 'High' | 'Medium' | 'Low'
  lastUpdated: string
  coreThesis: string
  executiveSummary: string
  whatLeadersAreMissing: string
  whyItMatters: string
  strategicStakes: StrategicStakes
  drivers: ForceDriver[]
  implications: ForceImplications
  provocations: string[]
  signals: ForceSignal[]
  relatedForces: { id: string; name: string }[]
  relevantContexts: { id: string; label: string }[]
}

export const allForces: ForceDetail[] = [
  {
    id: 'ai-ascendance',
    name: 'AI Ascendance',
    shortLine: 'Intelligence is becoming abundant, embedded, and operational.',
    accentHex: '#7c3aed',
    momentum: 'Rising',
    confidence: 'High',
    lastUpdated: 'June 2026',
    coreThesis: 'As intelligence becomes abundant, judgment becomes the primary source of advantage.',
    executiveSummary:
      'Across industries, the workflows, roles, and operating models built for an era of expensive information processing are being challenged by a new reality: AI is making intelligence abundant, fast, and embedded. Clinical documentation, financial analysis, manufacturing quality control, customer service, strategic decision support, and administrative coordination are all being transformed simultaneously. But the more significant shift may be cognitive: organizations are beginning to outsource reasoning itself — not just tasks. AI systems are drafting strategy documents, synthesizing research, generating code, and advising on decisions that previously required years of accumulated human expertise. The pace of this transformation has accelerated sharply. What was experimental three years ago is now operational at scale in leading organizations. Leaders across every sector face a context in which AI is no longer a future consideration but an active structural force reshaping cost, capacity, quality, and the boundaries of human judgment.',
    whyItMatters:
      'The strategic importance of AI Ascendance is not primarily about efficiency — it is about the redesign of what organizations do and how they do it. Leaders who treat AI as a cost-reduction tool may capture some near-term gains while missing the deeper question: as organizations outsource more reasoning to AI systems, they may also be eroding the organizational capacity to evaluate, challenge, and reproduce that reasoning independently. The organizations most likely to succeed in the next decade may be those that ask not only how to deploy AI faster, but what kinds of human judgment become more valuable — not less — as AI becomes more capable. When expertise is abundant, judgment becomes the scarce resource.',
    whatLeadersAreMissing:
      'Many leaders are focused on productivity gains. The deeper implication is that organizations are beginning to outsource reasoning itself — and may weaken the human judgment they will need most. When AI generates the analysis, drafts the strategy, and synthesizes the options, the humans in the loop are increasingly in a position to approve rather than to think. That is a structural change in organizational capability, and it is happening faster than most leaders have noticed.',
    strategicStakes: {
      ifLeadersGetThisRight: [
        'New operating models become possible — serving more people, at higher quality, with fewer constraints.',
        'Human judgment is elevated rather than eroded: people focus on the decisions that only they can make.',
        'AI-enabled growth earns trust because the governance that surrounds it is visible and accountable.',
      ],
      ifLeadersGetThisWrong: [
        'Skill and judgment atrophy inside the organization — the capacity to evaluate AI reasoning quietly disappears.',
        'Governance failures damage trust at the moments when AI deployment is most visible.',
        'AI becomes a patchwork of tools rather than a strategic capability, with no one accountable for what it collectively produces.',
      ],
    },
    drivers: [
      {
        id: 'agentic-systems',
        name: 'Agentic Systems',
        shortDescription: 'AI systems increasingly act across workflows rather than merely answer questions.',
        whyItMatters: 'Organizations will need to design accountability, escalation, and oversight for AI that does work, not just provides information.',
      },
      {
        id: 'cognitive-outsourcing',
        name: 'Cognitive Outsourcing',
        shortDescription: 'People increasingly rely on AI to synthesize, recommend, and reason.',
        whyItMatters: 'The risk is not only bad outputs; it is weakened human capacity to challenge or reproduce the reasoning behind them.',
      },
      {
        id: 'human-ai-collaboration',
        name: 'Human-AI Collaboration',
        shortDescription: 'Performance increasingly comes from designed human-machine systems.',
        whyItMatters: 'Advantage depends on knowing which work should be automated, which should be augmented, and where human judgment must remain central.',
      },
      {
        id: 'synthetic-media',
        name: 'Synthetic Media',
        shortDescription: 'AI-generated content becomes abundant and harder to distinguish from human-created material.',
        whyItMatters: 'Verification, authenticity, and trust become more important as creation costs collapse.',
      },
      {
        id: 'data-governance',
        name: 'Data Governance',
        shortDescription: 'Control, quality, ownership, and permitted use of data become strategic constraints.',
        whyItMatters: 'Organizations with better data governance will have more freedom to deploy AI credibly and safely.',
      },
      {
        id: 'ai-native-competition',
        name: 'AI-Native Competition',
        shortDescription: 'New entrants build products, services, and operating models around AI from the beginning.',
        whyItMatters: 'Incumbents face competitors not merely using AI, but designed around it.',
      },
    ],
    implications: {
      leadership:
        'AI is no longer a technology initiative — it is the operating context in which every major strategic decision is now made. Leaders who treat it as an IT function have already misframed the problem.',
      talent:
        'The organizations that redesign careers around what AI makes possible — rather than simply retraining people for roles AI is replacing — will build workforces that are structurally harder to displace.',
      operatingModel:
        'Workflows designed for expensive information processing are increasingly obsolete. The opportunity is not to automate the same steps faster — it is to rethink what coordination and knowledge work require at all.',
      growth:
        'AI enables organizations to serve populations and needs that were previously too expensive to reach. The growth ceiling has changed — but only for organizations that can build AI-enabled trust alongside AI-enabled scale.',
      governance:
        'When AI influences consequential decisions, accountability must be explicit before it is needed. Organizations that cannot answer "who is responsible when this goes wrong" are not ready to deploy AI at scale.',
    },
    provocations: [
      'Most organizations believe AI will make people more productive. What if its bigger impact is making expertise less scarce — and the organizations built around expert scarcity are structurally disrupted?',
      'What breaks if the organization can no longer reproduce the reasoning it has outsourced to AI — and the vulnerability only becomes visible in a crisis?',
      'The risk is not that AI makes mistakes. It is that organizations lose the capacity to recognize them.',
      'Where are we preserving the appearance of human judgment long after the humans involved are mostly approving what the model already decided?',
      'What becomes possible if the organizations with the best judgment — not the most data — win the next decade?',
      'Most leaders assume AI adoption is a competitive advantage. What if it becomes a competitive floor — and the real advantage lies entirely in how it is governed?',
    ],
    signals: [
      {
        id: 'sig-ai-1',
        title: 'AI agents enter clinical and administrative workflows at scale',
        interpretation:
          'Agentic AI — systems that can autonomously plan, coordinate, and execute multi-step tasks — is moving from pilots to production. The implication is not incremental automation but role redesign.',
        source: 'HIMSS',
        date: 'May 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ai-2',
        title: 'Rapid growth in AI investment across all sectors',
        interpretation:
          'Venture and strategic capital flowing into AI has accelerated across healthcare, financial services, and technology. Competitive pressure is increasing for organizations without coherent AI deployment strategies.',
        source: 'Rock Health / a16z',
        date: 'Jan 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ai-3',
        title: 'AI diagnostic tools reach clinical parity in key specialties',
        interpretation:
          'In radiology, pathology, and dermatology, AI tools are matching or exceeding specialist-level accuracy in controlled studies. The question is no longer capability but deployment, governance, and clinical trust.',
        source: 'NEJM AI',
        date: 'Mar 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ai-4',
        title: 'AI coding assistants accelerating software development velocity by 30–50%',
        interpretation:
          'Multiple studies confirm meaningful productivity gains for engineering teams using AI pair-programming tools. Team size assumptions and hiring models are under pressure.',
        source: 'GitHub Research',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ai-5',
        title: 'Frontier labs publish joint autonomous-agent safety pacts',
        interpretation:
          'The leading AI labs are beginning to coordinate on agentic safety standards before widespread deployment. Signals that governance infrastructure is starting to catch up with capability.',
        source: 'Partnership on AI',
        date: 'May 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ai-6',
        title: 'AI-native products displacing established technology categories',
        interpretation:
          'New entrants using AI natively are challenging incumbents in search, productivity, and developer tools. Category disruption is accelerating in ways that established players did not anticipate.',
        source: 'a16z Market Report',
        date: 'Feb 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ai-7',
        title: 'Enterprise buyers adding AI governance requirements to procurement checklists',
        interpretation:
          'Procurement teams at large enterprises now routinely assess AI transparency, auditability, and bias risk before purchase. A new compliance dimension in B2B technology sales.',
        source: 'Gartner Enterprise IT',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ai-8',
        title: 'Agentic AI systems entering production across research, analysis, and operations',
        interpretation:
          'AI systems that can plan, execute multi-step tasks, and operate autonomously across tools are moving from experiment to production. The implication is not incremental automation but a fundamental shift in how knowledge work is organized and who — or what — performs it.',
        source: 'Anthropic / OpenAI Research',
        date: 'May 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ai-9',
        title: 'Synthetic media proliferating faster than detection and verification infrastructure',
        interpretation:
          'AI-generated text, images, audio, and video are now indistinguishable from human-created content at scale. Organizations that depend on the authenticity of communications — internally and externally — face a new information integrity challenge with no established playbook.',
        source: 'MIT Media Lab / Stanford Internet Observatory',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ai-10',
        title: 'Data governance disputes emerging as AI training and deployment scale',
        interpretation:
          'Conflicts over data ownership, licensing, consent, and liability are multiplying as AI systems require vast training data and operate across organizational boundaries. Legal and regulatory frameworks are lagging the technical reality.',
        source: 'IAPP / Future of Privacy Forum',
        date: 'Mar 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ai-12',
        title: 'Organizations outsourcing reasoning to AI systems at a pace that outstrips their ability to audit it',
        interpretation:
          'As AI systems take on strategy synthesis, research, and complex analysis, a growing risk emerges: organizations may lose the internal capacity to evaluate the quality of AI-produced reasoning. When the system that generates the answer also validates it, intellectual dependency becomes a structural governance risk.',
        source: 'MIT Sloan Management Review / Harvard Business Review',
        date: 'May 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ai-13',
        title: 'Human-machine collaboration emerging as the dominant performance model in knowledge-intensive work',
        interpretation:
          'Research across legal, clinical, financial, and consulting contexts shows that human-AI collaboration consistently outperforms either alone — but only when the human retains directional judgment. Organizations that structure AI as a tool for human judgment, rather than a replacement for it, are seeing the largest gains.',
        source: 'Stanford HAI / MIT Work of the Future',
        date: 'Apr 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ai-11',
        title: 'AI judgment and reasoning errors in high-stakes settings raising liability questions',
        interpretation:
          'As AI systems take on more consequential roles — in clinical triage, legal analysis, financial advice, and engineering decisions — errors that would be accepted from humans are creating new liability exposure. Governance frameworks for AI accountability are underdeveloped relative to the speed of deployment.',
        source: 'Brookings / National Academy of Sciences',
        date: 'Feb 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
    ],
    relatedForces: [
      { id: 'workforce-transformation', name: 'Workforce Transformation' },
      { id: 'trust-recalibration', name: 'Trust Recalibration' },
    ],
    relevantContexts: [
      { id: 'healthcare-ceo-transition-growth', label: 'Healthcare · CEO Transition · Growth · 3–5 Years' },
      { id: 'technology-company-innovation', label: 'Technology Company · Innovation · 3–5 Years' },
      { id: 'financial-services-innovation', label: 'Financial Services · Innovation · 3–5 Years' },
    ],
  },

  {
    id: 'trust-recalibration',
    name: 'Trust Recalibration',
    shortLine: 'Authority is migrating from institutions to networks, proof, and participation.',
    accentHex: '#059669',
    momentum: 'Rising',
    confidence: 'High',
    lastUpdated: 'June 2026',
    coreThesis: 'Trust is no longer granted through authority; it is earned through evidence.',
    executiveSummary:
      'Trust is not a reputational metric — it is strategic infrastructure. The organizations that can sustain trust across customers, employees, regulators, and the public will have structural advantages in every dimension that matters: AI adoption, talent retention, regulatory relationships, capital access, and strategic freedom. Trust is under pressure from multiple directions simultaneously. AI deployment raises new questions about accountability and explainability. Leadership credibility erodes when stated values diverge from observable actions. Institutional trust has declined across health, media, government, and business — creating a context in which goodwill can no longer be assumed and must be continuously earned. Narrative fragmentation means that the same organization can be perceived in fundamentally different ways by different stakeholder groups, making coherent trust-building harder. In this environment, organizations that treat trust as infrastructure — designed in, maintained, and actively governed — will have different strategic options than those that treat it as reputation management.',
    whyItMatters:
      'When trust operates as infrastructure, it enables things that would otherwise be impossible: AI adoption at pace, transformation without internal resistance, regulatory relationships that allow strategic freedom, and access to the talent who choose their employers on values alignment as much as compensation. The organizations most likely to build durable competitive positions are not those with the best technology or the most efficient operations — they are those that earn the legitimacy to deploy both. Trust is both the condition and the competitive output. Leaders who treat it as a soft concern will find themselves managing the consequences of its absence at the worst moments.',
    whatLeadersAreMissing:
      'Most organizations treat trust as a communications issue — something to be managed through messaging, disclosure, and reputation programs. Increasingly, trust functions as infrastructure: the precondition for AI adoption, transformation velocity, regulatory freedom, and talent retention. When trust is absent, every other strategic priority becomes harder and slower. Organizations that design trust in — rather than communicate it on — will have different strategic options than those that discover its absence through a crisis.',
    strategicStakes: {
      ifLeadersGetThisRight: [
        'AI deployment earns rather than erodes stakeholder confidence — opening the pace of adoption that strategy requires.',
        'Transformation meets less internal resistance because people believe the organization means what it says.',
        'Regulatory relationships provide strategic freedom rather than friction at the moments that matter most.',
      ],
      ifLeadersGetThisWrong: [
        'Trust failures slow AI adoption at the worst moments — when competitive pressure is highest.',
        'The gap between stated values and observable practice drives attrition in the talent the organization most needs.',
        'Regulatory or reputational events constrain strategy precisely when decisiveness is most needed.',
      ],
    },
    drivers: [
      {
        id: 'proof-over-authority',
        name: 'Proof Over Authority',
        shortDescription: 'Stakeholders increasingly demand evidence rather than accepting institutional claims.',
        whyItMatters: 'Reputation becomes less durable unless backed by visible proof, outcomes, and accountability.',
      },
      {
        id: 'leadership-transparency',
        name: 'Leadership Transparency',
        shortDescription: 'Leaders are expected to make decision processes more visible.',
        whyItMatters: 'Trust is built not only through outcomes, but through the perceived integrity of how choices are made.',
      },
      {
        id: 'institutional-distrust',
        name: 'Institutional Distrust',
        shortDescription: 'Trust shifts away from large institutions toward people, communities, and networks.',
        whyItMatters: 'Organizations can no longer rely on category authority or legacy reputation.',
      },
      {
        id: 'accountability-pressure',
        name: 'Accountability Pressure',
        shortDescription: 'Stakeholders expect clear responsibility when systems, leaders, or institutions fail.',
        whyItMatters: 'Ambiguous accountability quickly becomes a trust liability.',
      },
      {
        id: 'narrative-fragmentation',
        name: 'Narrative Fragmentation',
        shortDescription: 'Shared understanding becomes harder as audiences inhabit different information environments.',
        whyItMatters: 'Organizations must build trust across multiple realities, not one shared story.',
      },
      {
        id: 'real-time-reputation',
        name: 'Real-Time Reputation',
        shortDescription: 'Reputation events unfold faster and with less organizational control.',
        whyItMatters: 'Trust can be damaged before traditional response systems are activated.',
      },
    ],
    implications: {
      leadership:
        'The trust tone of an organization is set by what leaders do at moments of high visibility — how they deploy AI, what they say when things go wrong, and whether their stated values survive contact with difficult decisions.',
      talent:
        'People who feel replaced rather than augmented do not stay. The talent capable of building organizational capability is the same talent with the most options — and they are watching closely how AI is introduced.',
      operatingModel:
        'AI decisions that are opaque, accountability structures that are unclear, and human touchpoints that disappear at the wrong moments will erode the trust that enables every other strategic priority.',
      growth:
        'Trust compounds. Organizations that earn it grow through referral, reduce friction in sales, and attract talent who would not otherwise choose them. Organizations that lose it face costs that accumulate faster than they can be rebuilt.',
      governance:
        'The accountability question is no longer abstract: who is responsible when an AI system influences a consequential decision badly? The organizations that build clear answers before they are required will be ahead of those managing the question after an incident.',
    },
    provocations: [
      'What if the fastest way to build trust is to give up the illusion of control — to be genuinely transparent about what AI does and does not do?',
      'The risk is not transparency. It is the discovery of what you were not saying.',
      'Most leaders assume trust is built through communication. What if the primary trust signal is the gap between what you say and what you do?',
      'What becomes possible if the organizations most trusted by AI-skeptical stakeholders move faster on AI than those chasing early adoption?',
      'Where are we performing transparency while preserving opacity in the decisions that actually matter?',
    ],
    signals: [
      {
        id: 'sig-trust-1',
        title: 'Public trust in AI-assisted decisions diverges sharply by domain',
        interpretation:
          'People express higher comfort with AI in administrative and scheduling tasks than in consequential decisions about health, credit, or employment. Organizations deploying AI at the decision edge need differentiated trust strategies.',
        source: 'Pew Research',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-trust-2',
        title: 'AI governance requirements expanding across sectors',
        interpretation:
          'Regulatory frameworks are beginning to require transparency, explainability, and documented accountability for AI systems in high-stakes settings. Organizations without governance infrastructure will face increasing pressure.',
        source: 'HHS / CFPB',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-trust-3',
        title: 'Employee trust in AI tools tracks closely with involvement in deployment decisions',
        interpretation:
          'Research shows that people who are involved in selecting and configuring AI tools report significantly higher trust in their outputs. Top-down deployment without co-design is a trust risk.',
        source: 'AMA Digital Medicine',
        date: 'Feb 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-trust-4',
        title: 'Brand backlash events accelerating when AI use is perceived as deceptive',
        interpretation:
          'Consumer brands using AI-generated content without disclosure are facing measurable reputational damage. The feedback loop between AI transparency failure and brand trust loss is shortening.',
        source: 'Edelman Brand Trust 2026',
        date: 'May 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-trust-5',
        title: 'Energy company transition commitments under third-party verification scrutiny',
        interpretation:
          'Independent bodies are now auditing the gap between stated ESG commitments and observable action. Greenwashing legal exposure is increasing in energy and consumer sectors.',
        source: 'Bloomberg Green',
        date: 'Mar 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-trust-6',
        title: 'Misinformation at scale eroding the shared information environment organizations depend on',
        interpretation:
          'AI-generated misinformation is undermining the shared factual baseline that organizations need for stakeholder communication, policy engagement, and public trust-building. When the information environment itself is contested, every communication carries higher credibility risk.',
        source: 'Reuters Institute Digital News Report',
        date: 'May 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-trust-7',
        title: 'Real-time reputation events compressing the window for organizational response',
        interpretation:
          'Social media and AI-amplified content are shortening the time between a trust-damaging event and full public visibility to hours or minutes. Organizations with slow approval processes and reactive communication cultures face structural disadvantage in reputation management.',
        source: 'Edelman Trust Barometer 2026',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-trust-9',
        title: 'Leadership transparency expectations rising as organizations navigate AI deployment and transformation',
        interpretation:
          'Employees, investors, and regulators are applying higher scrutiny to how leaders communicate about AI deployment, workforce impacts, and strategic decisions. The gap between what leaders say and what they do is shortening the window for credibility — and the organizations with clear, consistent communication are differentiating from those that are opaque or inconsistent.',
        source: 'Edelman Trust Barometer / Mercer',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-trust-10',
        title: 'Accountability pressure intensifying as AI systems influence consequential decisions',
        interpretation:
          'When AI systems contribute to consequential decisions — in credit, hiring, healthcare, and benefits — affected individuals are asserting rights to explanation and recourse. Organizations that cannot identify who is accountable for AI-influenced decisions face growing regulatory and legal exposure, and a deepening credibility problem with the people most affected.',
        source: 'Algorithmic Justice League / AI Now Institute',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-trust-8',
        title: 'Institutional trust at multi-decade lows across health, media, government, and business',
        interpretation:
          'Survey data shows declining baseline trust in major institutions across most advanced economies. Organizations cannot assume a reservoir of goodwill — trust must be earned continuously and specifically, not inherited from institutional category.',
        source: 'Edelman Trust Barometer / Gallup',
        date: 'Jan 2026',
        confidence: 'High',
        sourceLink: '#',
      },
    ],
    relatedForces: [
      { id: 'ai-ascendance', name: 'AI Ascendance' },
      { id: 'institutional-rewiring', name: 'Institutional Rewiring' },
    ],
    relevantContexts: [
      { id: 'healthcare-ceo-transition-growth', label: 'Healthcare · CEO Transition · Growth · 3–5 Years' },
      { id: 'financial-services-ceo-transition-trust', label: 'Financial Services · CEO Transition · Trust · 3–5 Years' },
      { id: 'energy-trust', label: 'Energy · Trust · 3–5 Years' },
      { id: 'government-transformation', label: 'Government · Transformation · 3–5 Years' },
    ],
  },

  {
    id: 'institutional-rewiring',
    name: 'Institutional Rewiring',
    shortLine: 'The architecture of public and organizational life is being rebuilt.',
    accentHex: '#b45309',
    momentum: 'Rising',
    confidence: 'High',
    lastUpdated: 'June 2026',
    coreThesis: 'Legitimacy is shifting from institutional position to demonstrated accountability.',
    executiveSummary:
      'The rules of institutional life are being rewritten — not just the regulations, but the deeper question of what earns legitimacy. Regulatory frameworks are advancing across AI, energy transition, financial services, data privacy, and labor protection simultaneously. But alongside formal regulation, something broader is happening: institutions are being expected to demonstrate accountability in new ways, to communities and stakeholders who now have the tools and organizing capacity to enforce that accountability independently of regulators. Inclusive design, responsible AI governance, accessibility, and stakeholder value creation are transitioning from aspirational frameworks to operating requirements. For leaders, institutional rewiring is not background noise — it is a fundamental redesign of the conditions under which organizations earn the right to operate, grow, and innovate.',
    whyItMatters:
      'Organizations that treat regulatory change as a periodic compliance exercise will be repeatedly surprised. Those that treat it as a structural signal about changing institutional legitimacy will build governance infrastructure early, earn regulatory trust, and develop the social licence that translates into strategic freedom. The question is not only what the rules require — it is what earns legitimacy in an environment where formal rules and stakeholder expectations are moving at different speeds in different directions. The organizations that understand both dimensions will navigate the decade ahead with more confidence than those managing only the compliance dimension.',
    whatLeadersAreMissing:
      'Most organizations manage regulation as a compliance function — something handled by legal and government affairs at the margins of strategy. The deeper shift is that legitimacy itself — the license to operate, grow, and innovate — is being renegotiated by communities, regulators, and stakeholders who now have the capacity to enforce expectations independently of formal rules. The organizations that understand this are building governance as a strategic capability. Those that do not are managing a compliance function that will keep getting more expensive.',
    strategicStakes: {
      ifLeadersGetThisRight: [
        'Regulatory relationships provide strategic freedom rather than friction at the moments decisions require speed.',
        'Governance becomes a differentiator in enterprise sales, capital access, and regulatory trust.',
        'The organization earns a seat at the table in shaping the frameworks it will operate under.',
      ],
      ifLeadersGetThisWrong: [
        'Governance failures create existential regulatory exposure at the moments when other priorities are most urgent.',
        'The organization is perpetually reactive to frameworks it had no hand in designing.',
        'Compliance overhead accumulates without strategic return — a cost without a capability.',
      ],
    },
    drivers: [
      {
        id: 'responsible-ai-governance',
        name: 'Responsible AI Governance',
        shortDescription: 'AI governance shifts from policy aspiration to operational requirement.',
        whyItMatters: 'Organizations need clear structures for oversight, accountability, transparency, and risk.',
      },
      {
        id: 'regulatory-acceleration',
        name: 'Regulatory Acceleration',
        shortDescription: 'Rules in AI, climate, data, labor, and financial services are evolving rapidly.',
        whyItMatters: 'Governance agility becomes a strategic capability.',
      },
      {
        id: 'community-accountability',
        name: 'Community Accountability',
        shortDescription: 'Communities increasingly enforce expectations outside formal regulatory channels.',
        whyItMatters: 'Social license can become as important as formal permission.',
      },
      {
        id: 'inclusive-design',
        name: 'Inclusive Design & Accessibility',
        shortDescription: 'Accessibility and inclusion expectations move into core product and service design.',
        whyItMatters: 'Legitimacy increasingly depends on who systems are designed to serve well.',
      },
      {
        id: 'stakeholder-governance',
        name: 'Stakeholder Governance',
        shortDescription: 'Organizations are judged against broader stakeholder value, not only shareholder return.',
        whyItMatters: 'Governance models must account for employees, communities, customers, regulators, and society.',
      },
      {
        id: 'public-private-rebalancing',
        name: 'Public-Private Rebalancing',
        shortDescription: 'Boundaries between public responsibility and private capability are shifting.',
        whyItMatters: 'Organizations increasingly operate in spaces once left to institutions or governments.',
      },
    ],
    implications: {
      leadership:
        'Governance capability is a strategic asset — the organizations that build it early have more freedom to act, faster approvals, and stronger regulatory relationships when contested decisions arise.',
      talent:
        'The most valuable people at the intersection of policy, legal, and operations are deciding which organizations are serious about governance before they commit. They are not waiting for a job description.',
      operatingModel:
        'Organizations that build regulatory agility into their operating model outperform those that must rebuild compliance infrastructure with each new framework. Adaptability to regulation is now an operational capability, not a legal function.',
      growth:
        'In regulated sectors, organizations with the deepest regulatory trust move faster — more approvals, fewer audit disruptions, more credibility with enterprise buyers. Governance is a growth enabler, not only a cost center.',
      governance:
        'Board literacy in the regulatory domains most relevant to the business is no longer optional. In AI, energy, and financial services, the questions are now consequential enough that governance-by-delegation to management is an inadequate model.',
    },
    provocations: [
      'Most organizations treat compliance as a cost. What if it is actually a barrier to entry that favors those who have already paid it?',
      'The organizations that help write the regulations governing their industry will operate in a more favorable environment than those that only respond to them. Where are you in that positioning?',
      'What breaks if regulators move faster than you assumed — and the window to build genuine governance capability closes before you started?',
      'What becomes possible if regulatory trust becomes as strategically valuable as market share?',
      'Where are we preserving the appearance of governance while the accountability structures that would make it real remain unbuilt?',
    ],
    signals: [
      {
        id: 'sig-ir-1',
        title: 'EU AI Act enforcement creating product design requirements globally',
        interpretation:
          'The EU AI Act is designating high-risk AI systems with specific requirements that affect product development across financial services, healthcare, and government sectors. Companies building for EU markets must comply; many are choosing to comply globally.',
        source: 'European Commission',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ir-2',
        title: 'Mandatory climate disclosure requirements entering force in major markets',
        interpretation:
          'SEC, CSRD, and equivalent frameworks are now creating binding disclosure obligations for transition commitments. The accountability standard for stated strategy is rising materially.',
        source: 'SEC / CSRD',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ir-3',
        title: 'Government AI procurement standards raising the bar for public-sector technology',
        interpretation:
          'Governments are developing AI-specific procurement requirements — covering transparency, fairness, and human oversight — that affect any organization selling technology to the public sector.',
        source: 'GAO / OECD AI Policy',
        date: 'Feb 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ir-4',
        title: 'Labor union negotiations increasingly addressing AI and automation deployment terms',
        interpretation:
          'Collective bargaining is expanding to cover AI deployment conditions, workforce transition support, and algorithmic management. Organizations deploying AI at scale in unionized environments need a negotiation strategy.',
        source: 'Bureau of Labor Statistics',
        date: 'Jan 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ir-5',
        title: 'Governance vacuum in AI, social media, and frontier technology creating uncertainty for organizations',
        interpretation:
          'The gap between technological capability and regulatory frameworks is wider than at any point since the internet era. Organizations are making consequential decisions about AI deployment, data use, and platform participation without the regulatory certainty that normally shapes compliance strategy.',
        source: 'OECD AI Policy Observatory',
        date: 'May 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ir-6',
        title: 'Political leadership volatility increasing policy uncertainty across major economies',
        interpretation:
          'Election cycles, coalition fragility, and political polarization are producing faster policy reversals in areas previously considered stable — including climate, trade, industrial policy, and labor regulation. Organizations that built long-term plans on policy continuity face new exposure.',
        source: 'Eurasia Group Global Risks',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ir-8',
        title: 'Responsible AI governance frameworks entering operational requirements across sectors',
        interpretation:
          'Governance frameworks for responsible AI — covering fairness, transparency, explainability, and human oversight — are moving from voluntary principles to enforceable standards in healthcare, financial services, and government. Organizations without formal AI governance infrastructure face increasing regulatory exposure and procurement disadvantage.',
        source: 'NIST AI Risk Management Framework / IEEE',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ir-9',
        title: 'Inclusive design and accessibility standards entering core product and service requirements',
        interpretation:
          'Accessibility and inclusive design are moving from best-practice recommendations to compliance requirements in digital products, physical infrastructure, and service delivery. Organizations that designed primarily for average users face retrofitting costs and growing regulatory exposure as standards broaden.',
        source: 'W3C / ADA / European Accessibility Act',
        date: 'Feb 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ir-10',
        title: 'Stakeholder value creation displacing pure shareholder primacy as the accepted standard of corporate governance',
        interpretation:
          'Regulatory frameworks, investor coalitions, and legal accountability structures are increasingly encoding multi-stakeholder obligations into governance requirements. Organizations that designed operating models purely around shareholder return face growing pressure from regulators, employees, and communities asserting legitimate claims on how value is created and distributed.',
        source: 'Business Roundtable / BCBS / OECD Corporate Governance',
        date: 'Mar 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ir-7',
        title: 'Community and civic accountability expectations rising alongside formal regulatory requirements',
        interpretation:
          'Organizations are increasingly accountable not just to regulators but to the communities in which they operate — for environmental impact, employment practices, and local investment. Social licence is becoming a parallel governance constraint alongside legal compliance.',
        source: 'Business Roundtable / BSR',
        date: 'Mar 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
    ],
    relatedForces: [
      { id: 'trust-recalibration', name: 'Trust Recalibration' },
      { id: 'workforce-transformation', name: 'Workforce Transformation' },
    ],
    relevantContexts: [
      { id: 'government-transformation', label: 'Government · Transformation · 3–5 Years' },
      { id: 'energy-trust', label: 'Energy · Trust · 3–5 Years' },
      { id: 'financial-services-innovation', label: 'Financial Services · Innovation · 3–5 Years' },
    ],
  },

  {
    id: 'workforce-transformation',
    name: 'Workforce Transformation',
    shortLine: 'Skills, contracts, and the meaning of work are in flux.',
    accentHex: '#ea580c',
    momentum: 'Stable',
    confidence: 'High',
    lastUpdated: 'June 2026',
    coreThesis: 'The workforce challenge is no longer filling roles; it is redesigning work.',
    executiveSummary:
      'Workforce transformation is no longer a future consideration — it is the operating reality. Across industries, the skills required for work are changing faster than training systems can respond. AI is compressing some roles while elevating others. Skilled trades shortages coexist with knowledge worker surpluses. Clinical burnout and shop floor automation are simultaneous crises. The organizations navigating this well are treating workforce transformation as a design challenge: redesigning what work requires, not simply trying to hire or retrain faster against a structure that may no longer fit.',
    whyItMatters:
      'Workforce strategy built for the last decade is increasingly the wrong architecture for the next five years. Organizations that recognize this early — and redesign roles, workflows, and career paths around new realities — will have structural advantages in talent attraction, retention, and productivity that laggards will find difficult to close. The workforce question is not peripheral. It is central to whether organizations can execute on any of the other strategic priorities that matter.',
    whatLeadersAreMissing:
      'Most organizations frame workforce issues as hiring, retention, or reskilling problems. The deeper challenge is that work itself may need to be redesigned — the roles, the workflows, the definition of what human contribution looks like in an AI-assisted environment. Organizations still trying to fill the current job architecture faster are solving the wrong problem. The organizations redesigning the architecture are the ones building durable workforce advantage.',
    strategicStakes: {
      ifLeadersGetThisRight: [
        'Role redesign unlocks human capability rather than suppressing it — people do work that requires genuine judgment.',
        'Augmented workforces out-deliver those built on headcount alone, creating structural competitive advantage.',
        'The organization builds genuine talent advantage through design, not competition for a scarce and shrinking pool.',
      ],
      ifLeadersGetThisWrong: [
        'People leave not for compensation but because the work no longer feels meaningful or worth the effort.',
        'AI deployment accelerates attrition rather than relieving it — creating new administrative burden without removing existing constraint.',
        'Workforce resilience fails precisely when strategic execution requires it most.',
      ],
    },
    drivers: [
      {
        id: 'work-redesign',
        name: 'Work Redesign',
        shortDescription: 'The structure of work changes faster than job descriptions.',
        whyItMatters: 'Organizations must redesign roles and workflows, not simply hire faster.',
      },
      {
        id: 'continuous-reskilling',
        name: 'Continuous Reskilling',
        shortDescription: 'Capability renewal becomes ongoing rather than episodic.',
        whyItMatters: 'Learning systems become core infrastructure for workforce resilience.',
      },
      {
        id: 'workforce-fluidity',
        name: 'Workforce Fluidity',
        shortDescription: 'Careers become more project-based, portfolio-oriented, and mobile.',
        whyItMatters: 'Talent strategies must adapt to people moving across roles, organizations, and employment models.',
      },
      {
        id: 'meaning-and-purpose',
        name: 'Meaning & Purpose',
        shortDescription: 'Workers evaluate jobs through identity, purpose, growth, and belonging.',
        whyItMatters: 'Retention increasingly depends on whether work feels worth doing.',
      },
      {
        id: 'burnout-visibility',
        name: 'Burnout Visibility',
        shortDescription: 'Wellbeing becomes measurable and strategically consequential.',
        whyItMatters: 'Burnout is no longer a private issue; it becomes an operating constraint.',
      },
      {
        id: 'hybrid-work-baseline',
        name: 'Hybrid Work Baseline',
        shortDescription: 'Hybrid and flexible work become expected conditions for many knowledge workers.',
        whyItMatters: 'Organizations must design culture, collaboration, and management for distributed work.',
      },
    ],
    implications: {
      leadership:
        'A credible vision for what the workforce will look like in three years — not just what positions are open — is now a leadership requirement. The organizations whose leaders cannot articulate this are losing talent who will not wait.',
      talent:
        'Workforce strategy must evolve from headcount planning to work architecture: what should humans do, what should AI do, and how are those roles designed around genuine human strengths — not legacy job descriptions that predate the tools.',
      operatingModel:
        'The organizations that redesign work around human-AI handoffs — and invest in removing administrative burden from the people doing work that actually matters — will achieve sustainable efficiency gains that conventional staffing cannot match.',
      growth:
        'Growth plans that assume current workforce availability are built on a constraint that is tightening. The organizations that redesign around AI-augmented teams will unlock growth capacity that conventional hiring strategies cannot replicate.',
      governance:
        'Workforce transformation is a capital allocation question. The decisions about role redesign, reskilling investment, and augmentation tooling deserve the same board-level rigor as other major capital decisions — including explicit attention to the workforce experience, not just the economics.',
    },
    provocations: [
      'Most organizations are trying to hire their way through a workforce crisis. What if the constraint is structural — and the only path through is redesign?',
      'The risk is not that AI takes jobs. It is that organizations automate tasks without redesigning roles — and end up with workers managing processes rather than doing work that matters.',
      'What breaks if the people you most need to retain are also the people with the most options and the highest expectations of meaningful work?',
      'What becomes possible if you redesign work around what humans do best — and deploy AI for everything else?',
      'Where are we preserving roles that no longer reflect the actual work, while the people in them quietly disengage or find somewhere else to go?',
    ],
    signals: [
      {
        id: 'sig-wf-1',
        title: 'Persistent workforce shortages across clinical and skilled trades roles',
        interpretation:
          'Vacancy rates for nurses, primary care physicians, skilled tradespeople, and administrative roles remain elevated. The pipeline is not recovering at the rate needed to meet demand.',
        source: 'AHA Workforce / NAM',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-wf-2',
        title: 'Growth of hybrid human-AI teams in pilot organizations',
        interpretation:
          'Leading organizations are running pilots in which AI tools handle documentation, triage assistance, and coordination — freeing people for higher-judgment work. Early results suggest meaningful burnout reduction and satisfaction improvement.',
        source: 'NEJM Catalyst',
        date: 'Apr 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-wf-3',
        title: 'Ambient AI documentation tools reduce documentation time by 20–35%',
        interpretation:
          'Ambient AI is reaching production scale in healthcare and knowledge-work contexts. Organizations deploying these tools are reporting measurable reductions in after-hours administrative burden.',
        source: 'Nuance / Microsoft',
        date: 'Feb 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-wf-4',
        title: 'Major employers dropping degree requirements at scale',
        interpretation:
          'Leading employers in technology, financial services, and healthcare are removing degree requirements for roles previously requiring them. Skills-based hiring is accelerating faster than most HR systems anticipated.',
        source: 'LinkedIn / Burning Glass',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-wf-5',
        title: 'Manufacturing skilled trades vacancy rates at multi-decade highs',
        interpretation:
          'Skilled trades shortages are deepening as the workforce ages and automation adoption accelerates. The gap between available roles and available people is widening, constraining production capacity.',
        source: 'National Association of Manufacturers',
        date: 'May 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-wf-6',
        title: 'Technology hiring shifting toward AI direction over implementation execution',
        interpretation:
          'Engineering hiring criteria are changing faster than job description templates can reflect. Systems design and AI direction are commanding premiums over pure implementation skills.',
        source: 'Sequoia Talent Report',
        date: 'Jan 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-wf-7',
        title: 'Hybrid work now a baseline expectation, not a benefit, for knowledge workers',
        interpretation:
          'Flexible work arrangements have shifted from a differentiator to a minimum threshold for attracting knowledge workers. Organizations mandating full-time office presence without clear rationale are experiencing elevated attrition among their most mobile talent.',
        source: 'Microsoft Work Trend Index',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-wf-8',
        title: 'Burnout and chronic stress visible in workforce data across multiple sectors',
        interpretation:
          'Healthcare, professional services, education, and technology sectors are all showing elevated burnout indicators. Organizations treating this as a personal resilience issue rather than a structural design problem are losing the people they most need to retain.',
        source: 'APA Work and Well-Being Survey',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-wf-9',
        title: 'Workforce fluidity increasing as people move between employment models more frequently',
        interpretation:
          'The boundary between employee, contractor, fractional worker, and independent professional is becoming more permeable. Organizations that can engage talent across these models — rather than requiring traditional employment — may access a larger effective talent pool.',
        source: 'MBO Partners State of Independence',
        date: 'Feb 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-wf-11',
        title: 'Continuous reskilling becoming a structural workforce requirement, not a periodic initiative',
        interpretation:
          'The half-life of specific technical and operational skills is shortening as AI rewrites job requirements in real time. Organizations that built workforce development around periodic training cycles are finding them inadequate for a context where what the job requires may change faster than the training can respond. Continuous learning infrastructure is becoming a competitive necessity, not a benefit.',
        source: 'World Economic Forum Future of Jobs / LinkedIn Learning',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-wf-12',
        title: 'Expectation of meaningful work hardening as a retention variable, particularly among high-performers',
        interpretation:
          'High-performing employees — the cohort most capable of choosing — are demonstrating increasing sensitivity to whether their work feels meaningful and whether their capabilities are genuinely used. AI-assisted work that creates new layers of machine management without genuine autonomy is producing disengagement in the talent that organizations most need to keep.',
        source: 'McKinsey Great Attrition Research / Gallup',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-wf-10',
        title: 'Corporate layoff cycles creating a cohort of experienced workers evaluating their options',
        interpretation:
          'Multiple rounds of technology and professional services layoffs have produced a large cohort of experienced workers who are rethinking their relationship with large-organization employment. This is simultaneously a talent acquisition opportunity and a signal about where employer-of-choice pressure is intensifying.',
        source: 'Challenger Gray & Christmas',
        date: 'May 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
    ],
    relatedForces: [
      { id: 'ai-ascendance', name: 'AI Ascendance' },
      { id: 'human-augmentation', name: 'Human Augmentation' },
    ],
    relevantContexts: [
      { id: 'healthcare-ceo-transition-growth', label: 'Healthcare · CEO Transition · Growth · 3–5 Years' },
      { id: 'manufacturing-workforce-transformation', label: 'Manufacturing · Workforce Transformation · 3–5 Years' },
      { id: 'healthcare-talent', label: 'Healthcare · Talent · 3–5 Years' },
    ],
  },

  {
    id: 'human-augmentation',
    name: 'Human Augmentation',
    shortLine: 'The line between tool and self is thinning.',
    accentHex: '#a78bfa',
    momentum: 'Stable',
    confidence: 'Medium',
    lastUpdated: 'June 2026',
    coreThesis: 'The future of advantage lies in designing better human-machine systems, not replacing people.',
    executiveSummary:
      'The boundary between what humans do and what machines do is actively shifting across every domain of work. Clinical roles are being redesigned around AI capability. Engineering teams are producing more with smaller headcounts. Financial advisors are making decisions in partnership with AI recommendation systems. The question is no longer whether AI will change how people work, but how organizations design that partnership — and who sets the terms of it. Human augmentation is not the same as automation. Automation replaces human work; augmentation redesigns it. The organizations that understand the distinction and design accordingly will achieve outcomes that neither purely human nor purely automated approaches can match.',
    whyItMatters:
      'Human augmentation may be one of the most strategically consequential forces in play — because it is the one that directly shapes what humans do in an AI era. If organizations get the augmentation design right, they unlock new levels of human capability, judgment, and satisfaction. If they get it wrong — deploying AI in ways that feel degrading, disempowering, or trust-eroding — they face resistance, attrition, and poor outcomes. The organizations that ask "how do we help people do their best work in an AI era?" will build fundamentally more adaptive workforces than those that ask only "what can we automate?"',
    whatLeadersAreMissing:
      'Most organizations are asking "what can we automate?" The question that produces better outcomes — and more resilient workforces — is "what should humans still do, and how do we make them exceptional at it?" The organizations that design augmentation systems around human excellence will build capability that AI tools alone cannot replicate — because the humans inside them will have gotten better, not more dependent.',
    strategicStakes: {
      ifLeadersGetThisRight: [
        'Human capability expands alongside AI — people focus on judgment, creativity, and the work that actually requires them.',
        'Workforce engagement rises because the work feels meaningful and the tools support rather than surveil.',
        'The organization builds institutional knowledge and judgment that AI tools alone cannot generate or replicate.',
      ],
      ifLeadersGetThisWrong: [
        'AI deployment creates disengagement and attrition in the talent the organization most needs to keep.',
        'The institutional knowledge and judgment that made the AI useful in the first place quietly erodes.',
        'Human-machine systems fail at the moments that require human accountability — because no one has actually practiced exercising it.',
      ],
    },
    drivers: [
      {
        id: 'judgment-amplification',
        name: 'Judgment Amplification',
        shortDescription: 'Tools expand the range, speed, and quality of human judgment.',
        whyItMatters: 'The best outcomes come from humans making better decisions with better systems.',
      },
      {
        id: 'human-ai-handoffs',
        name: 'Human-AI Handoffs',
        shortDescription: 'The boundary between machine recommendation and human decision becomes a critical design point.',
        whyItMatters: 'Poor handoffs create quality, trust, and accountability failures.',
      },
      {
        id: 'skill-extension',
        name: 'Skill Extension',
        shortDescription: 'Technology enables people to perform tasks that previously required deeper specialization.',
        whyItMatters: 'Capability becomes more distributed across the workforce.',
      },
      {
        id: 'dignity-by-design',
        name: 'Dignity by Design',
        shortDescription: 'Augmentation must preserve agency, dignity, and meaning.',
        whyItMatters: 'Tools that make people feel diminished create resistance and attrition.',
      },
      {
        id: 'physical-digital-augmentation',
        name: 'Physical-Digital Augmentation',
        shortDescription: 'AR, sensors, robotics, and AI extend human capability in physical environments.',
        whyItMatters: 'Augmentation is not only knowledge work; it reshapes manufacturing, healthcare, logistics, and field work.',
      },
      {
        id: 'oversight-capacity',
        name: 'Oversight Capacity',
        shortDescription: 'Humans are asked to supervise increasingly complex systems.',
        whyItMatters: 'Oversight only works if humans retain enough understanding and authority to intervene.',
      },
    ],
    implications: {
      leadership:
        'Leaders who set the cultural norms for human-AI collaboration early — visibly, and with genuine respect for what humans bring — will build workforces that adopt AI as an amplifier rather than resisting it as a threat to their purpose.',
      talent:
        'The most valuable people in an augmented organization are those who can direct AI systems toward genuinely useful outcomes — and know when not to. That is a judgment skill, and it develops only through work that makes judgment matter.',
      operatingModel:
        'The human-AI handoff points — where AI should yield to human judgment, and vice versa — are the most consequential design decisions in an augmented operating model. Getting them wrong produces quality failures and trust failures simultaneously.',
      growth:
        'Augmentation is the most viable path to growing organizational capacity without proportional headcount growth. Organizations that demonstrate measurable capacity expansion through augmentation will access growth strategies that non-augmented competitors cannot match.',
      governance:
        'When AI-assisted humans make errors, the accountability structure must be explicit before it is needed. The organizations that build clear human-AI accountability frameworks now are ahead of those designing them after an incident.',
    },
    provocations: [
      'Most organizations are asking what AI can replace. What if the better question is what humans become capable of when AI handles everything else?',
      'The risk is not augmentation. It is designing augmentation systems that create dependency without building capability — so when the system fails, so does the human.',
      'What breaks if the handoff from AI to human judgment happens too late — and the human has already lost the context to make a good call?',
      'Where are we preserving the appearance of human oversight while the humans involved no longer understand enough to actually exercise it?',
      'What becomes possible if organizations stop designing AI systems around efficiency and start designing them around what they want humans to be capable of?',
    ],
    signals: [
      {
        id: 'sig-ha-1',
        title: 'Human-AI collaboration outperforming solo approaches in complex judgment tasks',
        interpretation:
          'Research across financial advice, clinical diagnosis, and legal analysis consistently shows human-AI collaboration outperforming either alone in high-stakes, high-complexity scenarios. The design of the collaboration matters more than the capability of either party alone.',
        source: 'Harvard Business Review',
        date: 'Mar 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ha-2',
        title: 'AR-assisted manufacturing reducing complex assembly training time by 40–60%',
        interpretation:
          'Augmented reality tools are enabling less experienced workers to perform tasks previously requiring multi-year skill development. The training time advantage is compressing the skilled trades gap for organizations that invest in augmentation.',
        source: 'Deloitte Manufacturing',
        date: 'Feb 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ha-3',
        title: 'Consumer preference for human involvement persisting in high-stakes service moments',
        interpretation:
          'Despite high AI acceptance in routine interactions, consumer surveys consistently show preference for human involvement in consequential service moments — healthcare decisions, financial advice, significant complaints. The design of AI-human handoffs matters greatly.',
        source: 'PwC Consumer Intelligence',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ha-4',
        title: 'Design for dignity emerging as a framework for AI deployment in human-facing contexts',
        interpretation:
          'Organizations deploying AI in contexts where people are vulnerable — patients, job seekers, benefit recipients, students — are facing growing expectations that systems be designed to preserve rather than diminish human dignity. This is becoming a governance and brand requirement, not just an ethical aspiration.',
        source: 'Mozilla Foundation / AI Now Institute',
        date: 'Mar 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ha-5',
        title: 'Workers expecting AI to take over routine tasks, not expand them',
        interpretation:
          'Employee surveys show that workers expect AI tools to reduce administrative burden, not create new layers of AI-generated work to manage. Organizations deploying AI in ways that increase rather than decrease human workload are seeing adoption resistance and engagement decline.',
        source: 'Workday Peakon Employee Voice',
        date: 'Feb 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
    ],
    relatedForces: [
      { id: 'ai-ascendance', name: 'AI Ascendance' },
      { id: 'workforce-transformation', name: 'Workforce Transformation' },
    ],
    relevantContexts: [
      { id: 'consumer-brand-growth', label: 'Consumer Brand · Growth · 3–5 Years' },
      { id: 'healthcare-talent', label: 'Healthcare · Talent · 3–5 Years' },
      { id: 'manufacturing-workforce-transformation', label: 'Manufacturing · Workforce Transformation · 3–5 Years' },
    ],
  },

  {
    id: 'economic-reconfiguration',
    name: 'Economic Reconfiguration',
    shortLine: 'How value creation, capital, labor, productivity, and markets are being reshaped.',
    accentHex: '#0369a1',
    momentum: 'Rising',
    confidence: 'High',
    lastUpdated: 'June 2026',
    coreThesis: 'The rules of value creation are changing faster than most organizations realize.',
    executiveSummary:
      'The rules of the economic game are being rewritten — not just the conditions, but the underlying logic of how value is created, captured, and distributed. The era of cheap capital, seamless globalization, and productivity gains that accrued primarily to shareholders is giving way to something structurally different. Industrial policy is redirecting capital at scale. Trade friction is restructuring supply chains and pricing assumptions. AI is concentrating productivity gains in ways that create political and regulatory pressure on the organizations capturing them. Inflation has restructured consumer spending and exposed fragility in business models built on margin compression rather than genuine value creation. Rising inequality has become a strategic variable — not just a moral concern — because it generates the political responses that change the rules under which organizations operate. And stakeholder expectations of value creation are broadening in ways that formal governance frameworks are now beginning to encode. For leaders, economic reconfiguration is not a macroeconomic backdrop. It is a redesign of the environment in which every major decision is made.',
    whyItMatters:
      'Organizations that built their strategies on the economic logic of 2010–2020 may be operating with assumptions that are quietly becoming obsolete. The growth paths, cost structures, pricing power, and capital models that made sense in an era of globalization and cheap money may no longer hold. But economic reconfiguration is not only a risk story — it is also a reorganization of where opportunity lies. The organizations that move first to understand how value creation logic is changing in their specific domain — and redesign their operating and growth models accordingly — may find structural advantages that laggards cannot easily close. The leaders most likely to navigate this well are those who understand that they are not managing through a correction; they are operating inside a structural transition.',
    whatLeadersAreMissing:
      'Many leaders are waiting for economic conditions to normalize. The deeper signal is that the rules of value creation, capital allocation, and pricing power are changing — and the organizations designed for the last economic era will find the new one increasingly hostile. The wait for normalization is itself a strategic bet — and in most sectors, it is the losing one.',
    strategicStakes: {
      ifLeadersGetThisRight: [
        'The organization identifies where new value creation logic creates genuine opportunity before competitors do.',
        'Pricing models reflect actual value delivered — generating durable margin rather than defending legacy structures.',
        'Capital is deployed against a realistic model of how competitive economics are evolving, not how they used to work.',
      ],
      ifLeadersGetThisWrong: [
        'The organization is trapped in a cost structure built for economic conditions that have passed.',
        'Growth assumptions fail when the markets and pricing models they were built on contract or restructure.',
        'The organizations that reset fastest gain structural advantages that compound — and the gap keeps widening.',
      ],
    },
    drivers: [
      {
        id: 'outcome-based-economics',
        name: 'Outcome-Based Economics',
        shortDescription: 'Buyers increasingly prefer pricing tied to impact, performance, and measurable value.',
        whyItMatters: 'Organizations must prove outcomes, not merely sell activity or expertise.',
      },
      {
        id: 'procurement-rationalization',
        name: 'Procurement Rationalization',
        shortDescription: 'Buyers consolidate vendors, benchmark spend, and scrutinize ROI.',
        whyItMatters: 'Differentiation must survive increasingly sophisticated buying systems.',
      },
      {
        id: 'ai-cost-compression',
        name: 'AI Cost Compression',
        shortDescription: 'AI reduces the cost of analysis, content production, service delivery, and knowledge work.',
        whyItMatters: 'Business models built on labor intensity and information scarcity face margin pressure.',
      },
      {
        id: 'capital-discipline',
        name: 'Capital Discipline',
        shortDescription: 'Elevated capital costs and investor scrutiny reshape growth strategies.',
        whyItMatters: 'Growth must justify itself through clearer returns and stronger resilience.',
      },
      {
        id: 'industrial-policy',
        name: 'Industrial Policy',
        shortDescription: 'Governments redirect capital and market incentives through policy.',
        whyItMatters: 'Strategy increasingly depends on understanding where public investment and regulation are moving value.',
      },
      {
        id: 'inequality-demand-fragmentation',
        name: 'Inequality & Demand Fragmentation',
        shortDescription: 'Economic divergence reshapes consumer demand, labor markets, and political pressure.',
        whyItMatters: 'Markets become more uneven, and strategy must account for who can pay, who is excluded, and who pushes back.',
      },
      {
        id: 'internal-capability-building',
        name: 'Internal Capability Building',
        shortDescription: 'Clients and organizations build capabilities they previously bought externally.',
        whyItMatters: 'External providers must shift from owning work to enabling capability.',
      },
    ],
    implications: {
      leadership:
        'Leaders who develop a clear point of view on how economic reconfiguration affects their specific business model — not just their macro exposure — will make better capital, pricing, and positioning decisions than those managing quarterly results against outdated assumptions.',
      talent:
        'The economics of talent are bifurcating: AI compresses the value of routine cognitive work while genuinely scarce human judgment commands premium returns. Workforce strategy must distinguish clearly between these and invest accordingly.',
      operatingModel:
        'Operating models built on stable globalization, cheap capital, and predictable input costs require redesign. The new operating logic must prioritize resilience and adaptability alongside efficiency — and treat those as compatible rather than competing.',
      growth:
        'The growth models that generated returns in 2010–2020 are increasingly misaligned with where value is being created. New growth requires identifying which economic dislocations create genuine demand — for resilience, localization, or capability that did not previously exist.',
      governance:
        'Board economic literacy must go beyond reading quarterly results to include genuine understanding of how industrial policy, capital flows, and AI-driven productivity concentration are affecting the competitive environment — and the organization\'s social licence within it.',
    },
    provocations: [
      'What if the next decade rewards adaptability more than efficiency — and the organizations built to optimize are structurally disadvantaged against those built to pivot?',
      'Most leaders assume economic conditions will normalize. What if the normalization never comes — and the organizations that kept waiting for it are the ones that fell furthest behind?',
      'The risk is not that economic reconfiguration is hard to see. It is that the evidence only becomes undeniable at the same moment that responding to it becomes very expensive.',
      'What becomes possible if the organization treats every pricing model, cost assumption, and growth theory as provisional — and builds the capacity to revise them faster than competitors?',
      'Where are we preserving business models built for a globalized, low-interest, growing middle class long after the conditions that made them viable have structurally changed?',
    ],
    signals: [
      {
        id: 'sig-er-1',
        title: 'Industrial policy reshaping capital allocation across major economies',
        interpretation:
          'Governments in the US, EU, China, and beyond are directing capital into strategic sectors at a scale not seen since the post-war era. Organizations in targeted sectors face new competitive dynamics; those outside face new headwinds.',
        source: 'IMF / OECD',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-er-2',
        title: 'AI productivity gains concentrated in knowledge-intensive sectors',
        interpretation:
          'Early evidence suggests AI productivity gains are largest in knowledge-intensive sectors and roles, while routine physical work is largely unaffected. The distributional consequences are significant and politically charged.',
        source: 'McKinsey Global Institute',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-er-3',
        title: 'Cost of capital remains structurally elevated relative to 2010–2020 norms',
        interpretation:
          'The era of near-zero interest rates appears to be over. Organizations that built growth models on cheap capital — in technology, real estate, healthcare, and elsewhere — are redesigning around a materially different cost of capital.',
        source: 'Federal Reserve / ECB',
        date: 'May 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-er-4',
        title: 'Supply chain regionalization accelerating across critical sectors',
        interpretation:
          'Organizations in technology, pharmaceuticals, and manufacturing are redesigning global supply chains around resilience rather than pure efficiency. The cost of this redesign is material; the benefit is strategic optionality.',
        source: 'World Economic Forum',
        date: 'Feb 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-er-5',
        title: 'Labor market bifurcation deepening between high- and low-skill roles',
        interpretation:
          'The hollowing-out of mid-skill roles is accelerating as AI and automation compress the value of routine cognitive work. Political pressure on organizations seen as accelerating this bifurcation is increasing.',
        source: 'Bureau of Labor Statistics / Brookings',
        date: 'Jan 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-er-6',
        title: 'Consumer confidence fragile and diverging sharply by income segment',
        interpretation:
          'Persistent inflation in essentials — food, housing, energy — is suppressing discretionary spending among lower-income consumers while higher-income segments remain relatively resilient. Organizations serving broad consumer markets face structurally diverging demand signals.',
        source: 'University of Michigan Consumer Sentiment',
        date: 'May 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-er-7',
        title: 'Clients and customers demanding outcome-based pricing across professional and consumer services',
        interpretation:
          'Buyers — both institutional and consumer — are increasingly unwilling to pay for inputs (time, process, effort) when they can specify outcomes. This is restructuring economics in consulting, healthcare, legal services, and SaaS simultaneously.',
        source: 'Bain Client Demand Survey',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-er-8',
        title: 'Rising inequality becoming a political and regulatory constraint on corporate strategy',
        interpretation:
          'Growing wealth concentration is generating policy responses — tax changes, wage regulation, antitrust action — that affect corporate operating assumptions. Organizations that treated rising inequality as a macroeconomic backdrop rather than a strategic variable may face unexpected regulatory exposure.',
        source: 'Oxfam / World Inequality Lab',
        date: 'Mar 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-er-10',
        title: 'Persistent inflation in essentials structurally reshaping consumer demand patterns and operating economics',
        interpretation:
          'Food, housing, energy, and healthcare costs have remained elevated even as headline inflation has moderated. The structural effect is a bifurcation of consumer markets and a compression of disposable spending that is not a temporary cyclical pattern. Organizations with pricing models, product mixes, or operating cost structures built on pre-inflation assumptions are facing ongoing margin and demand pressure.',
        source: 'Bureau of Labor Statistics / ECB Inflation Report',
        date: 'May 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-er-11',
        title: 'AI productivity gains concentrating in ways that are generating political and regulatory responses',
        interpretation:
          'The organizations capturing the largest AI-driven productivity gains are facing scrutiny from regulators, legislators, and the public about how those gains are distributed. Wage stagnation relative to productivity growth is a recurring political catalyst; organizations that demonstrate genuine investment in workforce capability alongside AI deployment may navigate this environment with less regulatory friction.',
        source: 'Economic Policy Institute / McKinsey Global Institute',
        date: 'Apr 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-er-12',
        title: 'Trade friction expanding the cost and complexity of global operating models',
        interpretation:
          'Tariffs, export controls, and sanctions are restructuring the economics of global supply chains, talent flows, and market access. Organizations with operating models built on the assumption of stable, rules-based trade are encountering new costs and constraints that require active strategic response — not just compliance adaptation.',
        source: 'WTO / Peterson Institute / US Chamber of Commerce',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-er-9',
        title: 'Capital discipline tightening as investors reassert return expectations',
        interpretation:
          'The era of growth-at-any-cost is over across most sectors. Investors are demanding clearer paths to profitability, and organizations that built operating models on the assumption of sustained access to cheap capital are redesigning around more constrained assumptions.',
        source: 'Goldman Sachs Equity Research',
        date: 'Feb 2026',
        confidence: 'High',
        sourceLink: '#',
      },
    ],
    relatedForces: [
      { id: 'geopolitical-realignment', name: 'Geopolitical Realignment' },
      { id: 'workforce-transformation', name: 'Workforce Transformation' },
      { id: 'ai-ascendance', name: 'AI Ascendance' },
    ],
    relevantContexts: [
      { id: 'financial-services-ceo-transition-trust', label: 'Financial Services · CEO Transition · Trust · 3–5 Years' },
      { id: 'manufacturing-workforce-transformation', label: 'Manufacturing · Workforce Transformation · 3–5 Years' },
      { id: 'energy-trust', label: 'Energy · Trust · 3–5 Years' },
    ],
  },

  {
    id: 'geopolitical-realignment',
    name: 'Geopolitical Realignment',
    shortLine: 'How power, alliances, trade, security, and industrial strategy are being reordered.',
    accentHex: '#be123c',
    momentum: 'Rising',
    confidence: 'High',
    lastUpdated: 'June 2026',
    coreThesis: 'Strategy now depends on navigating fragmented power, policy volatility, and contested interdependence.',
    executiveSummary:
      "The post-Cold War framework of open, rules-based global order — which underpinned several decades of corporate globalization strategy — is being actively replaced by something more contested, fragmented, and geopolitically charged. US-China competition is restructuring technology and supply chains. European sovereignty ambitions are reshaping energy, defense, and digital infrastructure. Trade policy is increasingly an instrument of industrial and security strategy, not just economic optimization. For global organizations, the comfortable assumption that geopolitics was someone else's problem — to be managed by government-affairs teams at the margins — has become untenable. Geopolitical risk is now a first-order strategic variable.",
    whyItMatters:
      'The organizations most exposed to geopolitical realignment are not necessarily those with obvious political risk — they are those whose strategies were built on assumptions of stable, rules-based globalization that are no longer reliable. Technology supply chains, talent flows, market access, data sovereignty, and capital availability are all being reshaped by geopolitical dynamics. Leaders who develop genuine geopolitical fluency — not just government-affairs capability — will be better positioned to navigate the emerging environment. Those who wait for stability to return may be waiting for something that is not coming.',
    whatLeadersAreMissing:
      'Many organizations still manage geopolitics as a peripheral risk — something handled by government-affairs teams at the margins of strategy. The deeper implication is that geopolitical dynamics are now reshaping the fundamental conditions under which market access, talent flows, capital allocation, and regulatory exposure are determined. The organizations that treat geopolitical fluency as a core leadership capability — not a specialist function — will make better decisions than those who discover their exposure through a crisis.',
    strategicStakes: {
      ifLeadersGetThisRight: [
        'The organization builds genuine geopolitical fluency into strategic planning — not just government-affairs monitoring.',
        'Market access and supply chain decisions account for the new geopolitical architecture rather than the one that existed.',
        'Technology and capital dependencies are designed for resilience in a fragmented world, not optimization in a stable one.',
      ],
      ifLeadersGetThisWrong: [
        'Strategic assumptions built on globalization fail precisely when the decisions that rely on them are most consequential.',
        'Technology or capital dependencies create leverage points that adversaries or regulators can exploit at the worst moments.',
        'The organization discovers its geopolitical exposure through a crisis rather than through planning.',
      ],
    },
    drivers: [
      {
        id: 'strategic-decoupling',
        name: 'Strategic Decoupling',
        shortDescription: 'Technology, data, capital, and supply chains separate along geopolitical lines.',
        whyItMatters: 'Global operating models must account for fragmentation.',
      },
      {
        id: 'industrial-sovereignty',
        name: 'Industrial Sovereignty',
        shortDescription: 'Nations invest in domestic capacity for strategic sectors.',
        whyItMatters: 'Market access and investment decisions increasingly reflect national priorities.',
      },
      {
        id: 'trade-friction',
        name: 'Trade Friction',
        shortDescription: 'Trade rules become tools of security and industrial policy.',
        whyItMatters: 'Tariffs, controls, and restrictions reshape cost structures and supply chains.',
      },
      {
        id: 'security-reprioritization',
        name: 'Security Reprioritization',
        shortDescription: 'Defense, cyber, energy, and infrastructure security move higher on national agendas.',
        whyItMatters: 'Private-sector strategy is increasingly shaped by security logic.',
      },
      {
        id: 'policy-volatility',
        name: 'Policy Volatility',
        shortDescription: 'Political shifts change regulatory and market assumptions quickly.',
        whyItMatters: 'Leaders need scenario planning and adaptive strategy capacity.',
      },
      {
        id: 'contested-interdependence',
        name: 'Contested Interdependence',
        shortDescription: 'Organizations remain globally connected while the risks of connection rise.',
        whyItMatters: 'Resilience requires navigating dependence without assuming stability.',
      },
    ],
    implications: {
      leadership:
        'Geopolitical fluency is now a core leadership skill — not a specialist function to delegate. Leaders who understand how geopolitical dynamics affect their specific operating environment will make better decisions than those who rely entirely on advisors who do not share the accountability.',
      talent:
        'Global talent strategies require redesign for a world of tightening visa constraints, technology transfer controls, and shifting perceptions of destination countries. The talent flows that organizations built strategies around are no longer as predictable or accessible.',
      operatingModel:
        'Operating models built on seamless global integration — shared technology platforms, cross-border data flows, and global supply chains — must be redesigned for a world of competing regulatory regimes and contested geopolitical boundaries.',
      growth:
        'Market access assumptions need revision. Some of the most attractive growth markets are in regions where geopolitical volatility creates both risk and genuine opportunity — and the organizations that develop the capability to navigate ambiguity will access markets that risk-averse competitors avoid entirely.',
      governance:
        'Boards need genuine geopolitical expertise — not just political risk committee oversight, but strategic-level understanding of how geopolitical dynamics affect competitive position, regulatory exposure, and the resilience of the supply chains and markets the organization depends on.',
    },
    provocations: [
      'Most strategies were built for a world of stable, rules-based globalization. What if that world is not returning — and the strategies built on its return are the biggest strategic risk in the portfolio?',
      'The risk is not geopolitical volatility. It is the strategic dependencies — in technology, supply chains, and capital — that volatility can suddenly activate.',
      'What breaks if the technology platform your operations depend on becomes contested at a geopolitical level before you have built any alternative?',
      'Where are we optimizing for a global operating model that is becoming harder to sustain — while organizations redesigning for fragmentation are gaining structural advantages?',
      'What becomes possible if geopolitical fluency becomes a genuine strategic capability rather than a risk management function?',
    ],
    signals: [
      {
        id: 'sig-gr-1',
        title: 'US-China technology decoupling accelerating across semiconductors, AI, and data',
        interpretation:
          'Technology supply chains are being redesigned around geopolitical boundaries. Organizations operating in both markets face increasing pressure to choose architectures, partnerships, and data practices that are compatible with competing regulatory regimes.',
        source: 'CSIS / Brookings',
        date: 'May 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-gr-2',
        title: 'European strategic autonomy ambitions reshaping procurement and infrastructure',
        interpretation:
          'The EU is actively building industrial and regulatory independence in technology, energy, defense, and critical materials. Organizations serving European markets face new local-content expectations and competitive dynamics from state-backed champions.',
        source: 'European Commission',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-gr-3',
        title: 'Trade policy increasingly used as industrial and security instrument',
        interpretation:
          'Tariffs, export controls, investment screening, and sanctions are being deployed as strategic tools rather than economic instruments. Organizations with complex global supply chains face new compliance requirements and cost structures.',
        source: 'WTO / Peterson Institute',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-gr-4',
        title: 'Defense and security spending increasing across NATO and Indo-Pacific',
        interpretation:
          'Government defense and security budgets are growing at rates not seen since the Cold War. Organizations in relevant sectors face new market opportunities; the broader economy faces fiscal implications that will shape policy for years.',
        source: 'Stockholm International Peace Research Institute',
        date: 'Feb 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-gr-5',
        title: 'US-Iran tensions and Middle East instability creating energy and logistics risk',
        interpretation:
          'Escalating tensions in the Middle East are creating volatility in oil markets, shipping routes, and regional supply chains. Organizations with exposure to energy costs, Gulf logistics corridors, or regional operations face heightened uncertainty in operational and financial planning.',
        source: 'International Crisis Group',
        date: 'May 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-gr-6',
        title: 'Trade friction between major economies expanding beyond goods into services and data',
        interpretation:
          'Trade disputes are no longer limited to tariffs on physical goods. Data localization requirements, digital services taxes, and restrictions on cross-border professional services are creating new compliance complexity for organizations with global operating models.',
        source: 'WTO / Peterson Institute for International Economics',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-gr-7',
        title: 'Political leadership volatility increasing the half-life of strategic assumptions',
        interpretation:
          'Government changes in major economies are producing faster policy reversals than previous cycles. Strategic plans built on the assumption of policy continuity — in climate, trade, industrial policy, and tax — need more frequent review and built-in scenario optionality.',
        source: 'Eurasia Group Political Risk',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
    ],
    relatedForces: [
      { id: 'economic-reconfiguration', name: 'Economic Reconfiguration' },
      { id: 'institutional-rewiring', name: 'Institutional Rewiring' },
      { id: 'resource-and-energy-transition', name: 'Resource & Energy Transition' },
    ],
    relevantContexts: [
      { id: 'energy-trust', label: 'Energy · Trust · 3–5 Years' },
      { id: 'government-transformation', label: 'Government · Transformation · 3–5 Years' },
      { id: 'manufacturing-workforce-transformation', label: 'Manufacturing · Workforce Transformation · 3–5 Years' },
    ],
  },

  {
    id: 'climate-and-resilience',
    name: 'Climate & Resilience',
    shortLine: 'How climate pressure, adaptation, risk, and resilience are reshaping strategy.',
    accentHex: '#047857',
    momentum: 'Rising',
    confidence: 'High',
    lastUpdated: 'June 2026',
    coreThesis: 'Resilience is becoming a strategic capability, not a risk management function.',
    executiveSummary:
      'The strategic question around climate has shifted — from whether to act, to how to build genuine resilience and adaptation capability while managing accelerating physical and transition risks simultaneously. Climate is an active, present-tense operating constraint: affecting physical assets, supply chains, insurance markets, regulatory frameworks, talent expectations, and capital access. Decarbonization mandates are entering force across major markets, changing the compliance baseline for energy-intensive industries. But physical climate events — extreme weather, water scarcity, heat stress, compound infrastructure failures — are now disrupting operations at a frequency that exceeds what normal business continuity planning was designed to absorb. The organizations that will navigate this decade well are not those with the most ambitious climate commitments — they are those that have built resilience as a genuine operating capability, not a reporting posture.',
    whyItMatters:
      'Adaptation and resilience are becoming the primary strategic climate challenge for most organizations — not because mitigation no longer matters, but because the physical consequences of decades of accumulated emissions are now unavoidable regardless of what organizations commit to today. The organizations most likely to emerge with structural advantages are those that treat resilience investment as a strategic asset: operationally, in supply chain design, in asset location decisions, and in energy dependency management. Climate credibility — the alignment between stated commitments and observable action — will continue to be a decisive variable in regulatory relationships and capital access. But the ability to operate through climate disruption may become as important as the ability to demonstrate progress against it.',
    whatLeadersAreMissing:
      'Most organizations approach climate through the lens of commitment and disclosure. The deeper challenge is operational: physical climate events are disrupting supply chains, assets, and operations at a frequency that exceeds what normal business continuity planning was designed to absorb. The organizations building resilience as a structural capability — not a compliance posture — will have operational advantages as disruption frequency continues to rise, regardless of what their stated commitments say.',
    strategicStakes: {
      ifLeadersGetThisRight: [
        'Physical resilience investment produces structural operational advantages as disruption frequency increases — competitors without it face higher disruption costs.',
        'Climate credibility provides regulatory relationships and capital access that organizations without it cannot access on the same terms.',
        'The organization builds adaptation infrastructure before it becomes unavoidably expensive — when everyone else is building it at the same time.',
      ],
      ifLeadersGetThisWrong: [
        'Physical climate disruption causes operational failures that organizations that invested in resilience can absorb and competitors cannot.',
        'Greenwashing exposure creates legal and regulatory risk precisely when the organization least needs it.',
        'The gap between stated commitments and observable action becomes the defining credibility failure — with capital markets, regulators, and the talent the organization is trying to attract.',
      ],
    },
    drivers: [
      {
        id: 'physical-climate-disruption',
        name: 'Physical Climate Disruption',
        shortDescription: 'Extreme weather, heat, flooding, and water stress directly affect operations.',
        whyItMatters: 'Climate becomes an operating constraint, not a distant risk.',
      },
      {
        id: 'adaptation-resilience-investment',
        name: 'Adaptation & Resilience Investment',
        shortDescription: 'Organizations invest to withstand disruption rather than merely report on emissions.',
        whyItMatters: 'Resilience becomes a source of operational advantage.',
      },
      {
        id: 'climate-disclosure',
        name: 'Climate Disclosure',
        shortDescription: 'Reporting requirements make climate exposure more visible to investors and regulators.',
        whyItMatters: 'Climate credibility affects capital access, governance, and reputation.',
      },
      {
        id: 'decarbonization-mandates',
        name: 'Decarbonization Mandates',
        shortDescription: 'Policy and customer pressure create binding expectations for emissions reduction.',
        whyItMatters: 'Transition planning becomes a strategic and operational requirement.',
      },
      {
        id: 'infrastructure-fragility',
        name: 'Infrastructure Fragility',
        shortDescription: 'Grids, transport, water, and logistics systems show increasing vulnerability.',
        whyItMatters: 'Organizations depend on infrastructure they do not fully control.',
      },
      {
        id: 'biodiversity-ecosystem-stress',
        name: 'Biodiversity & Ecosystem Stress',
        shortDescription: 'Environmental degradation enters corporate risk and resilience frameworks.',
        whyItMatters: 'Business continuity increasingly depends on ecosystem health.',
      },
    ],
    implications: {
      leadership:
        'The leadership shift is from climate commitment to climate strategy — from articulating ambitions to demonstrating how those ambitions are integrated into capital allocation, operating model design, and organizational accountability that can be verified.',
      talent:
        'Climate credibility is now a talent attraction variable among the professionals organizations most need. Leaders who treat sustainability as a compliance posture are signaling something to those people — and they notice.',
      operatingModel:
        'Physical climate risks require operational redesign that goes beyond business continuity planning. Supply chain exposure, asset location decisions, and energy and water dependency all need to be explicitly addressed in operating model architecture — not left to the risk committee.',
      growth:
        'Climate transition is creating significant demand for new products, services, and infrastructure. Organizations that can serve this demand credibly — not performatively — may access structurally growing markets that competitors without genuine capability cannot reach.',
      governance:
        'Board-level climate governance is no longer a leading practice — it is a disclosure requirement, a capital access condition, and increasingly a legal accountability standard. Directors who cannot engage substantively with physical risk assessment are behind the governance expectation.',
    },
    provocations: [
      'Most organizations are managing climate as a reporting challenge. What if the primary challenge is operational — and the window to build resilience infrastructure before you need it is already closing?',
      'The risk is not failing to hit net-zero targets. It is being operationally unprepared when the physical climate events arrive that your assets and supply chains were not designed to absorb.',
      'What breaks if the insurance markets that backstop your physical climate exposure continue to withdraw from your geographies and asset classes at the current pace?',
      'What becomes possible if resilience investment is treated as a competitive asset rather than a compliance cost — and the organization that builds it earliest has the lowest disruption cost when it matters most?',
      'Where are we preserving climate commitments as aspirational positioning while the physical risk accumulates in the assets and supply chains that make the organization actually function?',
    ],
    signals: [
      {
        id: 'sig-cr-1',
        title: 'Mandatory climate disclosure requirements entering force in major markets',
        interpretation:
          'SEC, CSRD, and equivalent frameworks are creating binding disclosure obligations. The accountability standard for stated climate strategy is rising materially, with legal exposure for organizations that cannot substantiate their commitments.',
        source: 'SEC / CSRD',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-cr-2',
        title: 'Physical climate events causing measurable supply chain disruptions',
        interpretation:
          'Extreme weather events are affecting production, logistics, and asset values at increasing frequency. Insurance markets are repricing climate risk in ways that are affecting asset ownership economics in vulnerable geographies.',
        source: 'Swiss Re / Munich Re',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-cr-3',
        title: 'Investor climate expectations hardening beyond voluntary commitments',
        interpretation:
          'Major institutional investors are moving from engagement to exclusion in climate-exposed sectors. Access to capital is becoming a function of climate credibility, not just financial performance.',
        source: 'BlackRock / Net Zero Asset Managers',
        date: 'Feb 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-cr-4',
        title: 'Greenwashing legal exposure increasing across jurisdictions',
        interpretation:
          'Courts and regulators are beginning to hold organizations accountable for gaps between climate commitments and observable action. Legal risk is now a material dimension of climate strategy, not just reputational risk.',
        source: 'ClientEarth / GFANZ',
        date: 'Jan 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-cr-5',
        title: 'Extreme weather events causing direct operational disruption at increasing frequency',
        interpretation:
          'Floods, wildfires, heat events, and storms are disrupting operations, logistics, and supply chains at a frequency that is no longer absorbed within normal business continuity planning. Physical climate risk is moving from a future scenario to a present operational constraint.',
        source: 'Munich Re Natural Catastrophe Statistics',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-cr-6',
        title: 'Critical infrastructure fragility exposed by compound climate and cyber events',
        interpretation:
          'Power grids, water systems, and logistics networks are showing vulnerability to compound stresses — extreme weather combined with ageing infrastructure or cyberattack. Organizations dependent on infrastructure reliability face new business continuity requirements.',
        source: 'CISA / World Economic Forum Global Risks',
        date: 'Mar 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-cr-8',
        title: 'Decarbonization mandates tightening across energy-intensive sectors with binding compliance timelines',
        interpretation:
          'Regulatory decarbonization requirements are moving from voluntary targets to binding mandates with compliance timelines that affect capital planning horizons. Energy-intensive sectors — steel, cement, chemicals, aviation, and heavy transport — face the most acute near-term pressure, but the scope of binding requirements is expanding across the economy.',
        source: 'IEA / European Green Deal / US EPA',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-cr-9',
        title: 'Resilience investment emerging as a distinct capital allocation category for operations and infrastructure',
        interpretation:
          'Organizations are beginning to account for climate resilience investment as a distinct capital category — separate from decarbonization spending — covering operational hardening, supply chain redesign, asset relocation, and water and energy independence. The organizations treating resilience as a strategic investment, rather than insurance overhead, are making different decisions about asset location, supply chain design, and operational architecture.',
        source: 'Swiss Re Institute / Marsh McLennan Climate Risk',
        date: 'Mar 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-cr-7',
        title: 'Biodiversity and ecosystem stress entering corporate risk frameworks',
        interpretation:
          'Nature-related financial risks — from biodiversity loss, deforestation, and ecosystem degradation — are beginning to enter investor and regulatory frameworks alongside climate. The Taskforce on Nature-related Financial Disclosures is creating new disclosure expectations for sectors with material nature dependencies.',
        source: 'TNFD / WWF',
        date: 'Feb 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
    ],
    relatedForces: [
      { id: 'resource-and-energy-transition', name: 'Resource & Energy Transition' },
      { id: 'institutional-rewiring', name: 'Institutional Rewiring' },
      { id: 'trust-recalibration', name: 'Trust Recalibration' },
    ],
    relevantContexts: [
      { id: 'energy-trust', label: 'Energy · Trust · 3–5 Years' },
      { id: 'manufacturing-workforce-transformation', label: 'Manufacturing · Workforce Transformation · 3–5 Years' },
      { id: 'government-transformation', label: 'Government · Transformation · 3–5 Years' },
    ],
  },

  {
    id: 'resource-and-energy-transition',
    name: 'Resource & Energy Transition',
    shortLine: 'How energy systems, infrastructure, critical resources, and supply chains are shifting.',
    accentHex: '#d97706',
    momentum: 'Rising',
    confidence: 'High',
    lastUpdated: 'June 2026',
    coreThesis: 'Energy and resource constraints are becoming design constraints for every growth strategy.',
    executiveSummary:
      'The global energy system is undergoing the most significant structural transformation in a century. Renewables are becoming the cheapest form of new power generation across most of the world. Electrification is expanding from transport into heating, industry, and agriculture. Critical minerals — lithium, cobalt, nickel, rare earths — have become strategic assets contested by major powers. And the infrastructure required to support the energy transition — grids, storage, pipelines, ports — is creating both massive investment opportunity and significant execution risk. For organizations outside the energy sector, the transition is reshaping input costs, supply chain risks, operational requirements, and the regulatory environment in ways that are increasingly material.',
    whatLeadersAreMissing:
      'Most leaders think about energy transition in terms of sustainability compliance or carbon footprint. The deeper implication is that energy and resource dynamics are reshaping competitive economics, supply chain risk, and the regulatory environment across every sector. The organizations that treat this as a reporting challenge are making a different strategic bet than those that treat it as an operating model question — and the gap between those two positions will widen as transition timelines accelerate.',
    whyItMatters:
      'Energy and resource dynamics affect every industry — through input costs, operational requirements, supply chain exposure, and regulatory obligations. Organizations that treat the energy transition as primarily a sustainability question miss the strategic significance: it is reshaping competitive dynamics, cost structures, and the regulatory environment across every sector simultaneously. The organizations most likely to navigate this well are those that develop genuine fluency in how energy and resource dynamics affect their specific business model — not just their carbon footprint — and build that understanding into long-term strategic planning.',
    strategicStakes: {
      ifLeadersGetThisRight: [
        'Energy cost and availability become competitive advantages as organizations that move early lock in favorable long-term positions.',
        'The organization builds optionality before transition constraints tighten — redesigning supply chains and infrastructure while alternatives are still affordable.',
        'Capital deployed in energy resilience is treated as value-creating investment, not compliance cost, generating returns as competitors face higher exposure.',
      ],
      ifLeadersGetThisWrong: [
        'Energy cost volatility creates structural margin exposure in business models built for stable, cheap energy — with no fast path to redesign.',
        'Critical mineral dependencies become leverage points as supply chain disruptions arrive faster than procurement strategies can adapt.',
        'Regulatory timelines arrive faster than capital plans can accommodate, forcing reactive and expensive infrastructure changes under constraint.',
      ],
    },
    drivers: [
      {
        id: 'electrification-demand',
        name: 'Electrification Demand',
        shortDescription: 'Transport, industry, and buildings shift to electricity as the primary energy source.',
        whyItMatters: 'Electrification creates new cost structures, infrastructure needs, and competitive dynamics.',
      },
      {
        id: 'grid-constraint',
        name: 'Grid Constraint',
        shortDescription: 'Electricity grids struggle to keep pace with demand growth and distributed generation.',
        whyItMatters: 'Grid reliability becomes a strategic operating constraint for energy-intensive organizations.',
      },
      {
        id: 'critical-minerals',
        name: 'Critical Minerals',
        shortDescription: 'Lithium, cobalt, rare earths, and other minerals become strategic bottlenecks.',
        whyItMatters: 'Supply chain resilience requires new sourcing strategies and geopolitical awareness.',
      },
      {
        id: 'energy-cost-volatility',
        name: 'Energy Cost Volatility',
        shortDescription: 'Energy prices become less predictable as the grid and fuel mix shift.',
        whyItMatters: 'Margin exposure increases for organizations that have not designed for price variability.',
      },
      {
        id: 'industrial-decarbonization',
        name: 'Industrial Decarbonization',
        shortDescription: 'Hard-to-abate sectors face specific technology and capital challenges in the transition.',
        whyItMatters: 'Transition pathways vary by sector — no single strategy applies across industries.',
      },
      {
        id: 'resource-circularity',
        name: 'Resource Circularity',
        shortDescription: 'Circular economy models gain traction as linear resource models face regulatory and cost pressure.',
        whyItMatters: 'Organizations that redesign for circularity gain input cost advantages and regulatory resilience.',
      },
    ],
    implications: {
      leadership:
        'Leaders need genuine fluency in energy and resource dynamics — not to become energy experts, but to understand how these dynamics affect their specific operating environment, cost structure, and competitive position. Energy illiteracy at the leadership level is increasingly a strategic liability.',
      talent:
        'The energy transition is creating acute talent shortages in engineering, grid design, battery technology, and project management. For organizations in adjacent sectors, competition for technically skilled talent with energy-transition expertise is intensifying — and the organizations that build that capability in-house will outperform those that try to hire it at the moment of need.',
      operatingModel:
        'Operating models with significant energy cost exposure need to redesign around energy efficiency and flexibility now, before constraints tighten. Organizations with large physical footprints — in manufacturing, logistics, retail, and healthcare — face both challenge and durable opportunity in the transition.',
      growth:
        'The scale of investment required by the energy transition is creating significant demand for capital, technology, services, and talent. Organizations that can serve this demand — in finance, construction, engineering, software, and professional services — are positioned to access structurally growing markets for the next decade.',
      governance:
        'Energy risk governance must expand from compliance and reporting to genuine strategic oversight. Board-level understanding of energy cost exposure, supply chain risk, and transition timing is a differentiator — and the boards that acquire it before a crisis will have more options than those that acquire it after.',
    },
    provocations: [
      'Most organizations think about energy transition as a sustainability issue. What if it is primarily a competitive economics issue — and the organizations framing it that way are making faster, better decisions?',
      'The risk is not moving too fast on the energy transition. It is being caught with infrastructure designed for energy conditions that no longer exist.',
      'What breaks if critical mineral supply chains are disrupted at the same moment that electrification timelines accelerate — and your organization has no alternative sourcing strategy?',
      'What becomes possible if energy resilience becomes a source of competitive advantage — and the organizations that built it early are using it to price differently, operate more reliably, and attract better capital?',
      'Where are we treating energy transition as a future risk to monitor while competitors are treating it as a present opportunity to build toward?',
    ],
    signals: [
      {
        id: 'sig-ret-1',
        title: 'Renewable energy now cheapest source of new power generation in most markets',
        interpretation:
          'Solar and wind costs have fallen below the marginal cost of new fossil fuel generation across most major markets. The competitive economics of energy are changing faster than most strategic planning cycles anticipated.',
        source: 'IEA / BloombergNEF',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ret-2',
        title: 'Critical minerals supply chains becoming a major geopolitical flashpoint',
        interpretation:
          'Lithium, cobalt, nickel, and rare earths are now strategic assets contested by major powers. Organizations dependent on these materials face new supply security risks that require active management.',
        source: 'IEA Critical Minerals',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ret-3',
        title: 'Grid infrastructure investment lagging electrification demand',
        interpretation:
          'Electricity grid infrastructure in most major economies is not being built fast enough to support the pace of electrification. Grid constraints are becoming a material operational risk for energy-intensive industries.',
        source: 'NERC / European Network of Transmission System Operators',
        date: 'Feb 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ret-4',
        title: 'Industrial decarbonization proving harder and more expensive than anticipated',
        interpretation:
          'Hard-to-abate sectors — steel, cement, chemicals, aviation, shipping — are finding decarbonization technically feasible but economically challenging at pace. The transition timeline is longer and the cost higher than early scenarios suggested.',
        source: 'Energy Transitions Commission',
        date: 'Jan 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ret-5',
        title: 'Fossil fuel reserve depletion and stranded asset risk repricing in institutional portfolios',
        interpretation:
          'Major institutional investors are accelerating the repricing of fossil fuel assets as transition timelines shorten and regulatory risk increases. Organizations holding fossil fuel assets — or exposed to them through supply chains and financing relationships — face growing stranded asset risk that is no longer theoretical.',
        source: 'Carbon Tracker Initiative',
        date: 'May 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ret-6',
        title: 'Oil reserve depletion scenarios shortening productive horizon for fossil fuel dependent strategies',
        interpretation:
          'Independent analysis suggests accessible, economically viable oil reserves are being consumed faster than new discoveries can replace them. Combined with accelerating transition timelines, organizations with fossil fuel exposure face both demand-side and supply-side transition pressure simultaneously.',
        source: 'IEA World Energy Outlook',
        date: 'Apr 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
    ],
    relatedForces: [
      { id: 'climate-and-resilience', name: 'Climate & Resilience' },
      { id: 'geopolitical-realignment', name: 'Geopolitical Realignment' },
      { id: 'economic-reconfiguration', name: 'Economic Reconfiguration' },
    ],
    relevantContexts: [
      { id: 'energy-trust', label: 'Energy · Trust · 3–5 Years' },
      { id: 'manufacturing-workforce-transformation', label: 'Manufacturing · Workforce Transformation · 3–5 Years' },
      { id: 'government-transformation', label: 'Government · Transformation · 3–5 Years' },
    ],
  },

  {
    id: 'identity-and-belonging',
    name: 'Identity & Belonging',
    shortLine: "How people's expectations around meaning, community, representation, and belonging are changing.",
    accentHex: '#9333ea',
    momentum: 'Stable',
    confidence: 'Medium',
    lastUpdated: 'June 2026',
    coreThesis: 'Organizations that design for genuine belonging will outperform those that treat it as a program.',
    executiveSummary:
      'Organizations compete not only for attention and revenue — they compete for relevance, meaning, and belonging. This is a structural shift in the conditions of organizational effectiveness. People are making choices about where to work, what to buy, and what to support based on whether they feel genuinely seen, valued, and part of something that matters. The social contract between employers and employees is being renegotiated under visible stress — AI is changing the nature of work, political polarization is fragmenting shared narrative, and representation expectations are evolving faster than most organizations have adapted. Community formation — the human capacity to build collective identity around shared values and experience — is becoming a strategic asset that brands and employers who can genuinely create it will have that those who cannot will struggle to replicate. And the question of what it means to belong — to a workplace, a brand, a community — is more politically charged, more commercially relevant, and more organizationally consequential than it has been in a generation. Social polarization is deepening the challenge: organizations operating across ideologically divided stakeholder communities cannot satisfy everyone, but they can choose — explicitly or by default — whether belonging is something they design for or something they leave to chance.',
    whatLeadersAreMissing:
      'Most leaders think about Identity & Belonging as a DEI and communications challenge — something managed through programs, policies, and messaging. The deeper implication is that belonging is a performance variable. Organizations where people feel genuinely seen, valued, and connected to something meaningful get more from those people — more creativity, more resilience, more discretionary effort. The organizations that confuse belonging programs with belonging culture are building the wrong thing, and the difference shows up in talent retention, customer loyalty, and organizational adaptability under pressure.',
    whyItMatters:
      'The organizations that get Identity & Belonging right will have advantages that are genuinely difficult to replicate: the talent who choose them because they feel genuinely valued, the customers who advocate because they feel genuinely seen, the communities who support them because the organization has demonstrated that it understands and respects what matters to them. These advantages compound. The organizations most likely to navigate the political volatility around representation, DEI, and corporate values are those that have built genuine belonging as a cultural practice — not as a program or a posture. Programs can be challenged; cultural practice is harder to dislodge. Identity & Belonging is not a risk to manage or a trend to respond to. It is a design domain — one that determines whether people bring their full capability to the organizations they work for, and whether the brands people choose feel like expressions of their own identity or transactions they would rather minimize.',
    strategicStakes: {
      ifLeadersGetThisRight: [
        'Talent advantage compounds as people who feel genuinely valued choose to stay, develop, and bring their full capability — rather than protecting themselves or leaving.',
        'Brand loyalty deepens as customers who feel genuinely seen become advocates who cannot be replicated by paid media or competitive pricing alone.',
        'Political and regulatory resilience improves as organizations with genuine cultural practice weather backlash against programs and posturing more durably than those built on compliance.',
      ],
      ifLeadersGetThisWrong: [
        'The most capable people — with the most options — leave for organizations where they feel more genuinely valued, accelerating a talent disadvantage that becomes structural.',
        'Programs designed to signal inclusion are challenged legally and politically, leaving organizations exposed without the cultural foundation that would make them defensible.',
        'Consumer brand relevance erodes as the gap between what organizations claim and what they practice becomes visible to the communities they are trying to serve.',
      ],
    },
    drivers: [
      {
        id: 'meaning-at-work',
        name: 'Meaning at Work',
        shortDescription: 'Employees expect work to provide more than compensation — they seek purpose and contribution.',
        whyItMatters: 'Organizations that cannot provide meaning lose the most capable and mobile talent first.',
      },
      {
        id: 'community-formation',
        name: 'Community Formation',
        shortDescription: 'People seek belonging in smaller, identity-aligned communities rather than broad institutions.',
        whyItMatters: 'Organizations must earn belonging rather than assume it from employment.',
      },
      {
        id: 'representation-expectations',
        name: 'Representation Expectations',
        shortDescription: 'Employees and consumers expect to see themselves reflected in leadership, products, and culture.',
        whyItMatters: 'Gaps between stated values and visible representation generate credibility failures.',
      },
      {
        id: 'social-polarization',
        name: 'Social Polarization',
        shortDescription: 'Deepening social and political divides make it harder for organizations to hold diverse coalitions together.',
        whyItMatters: 'Organizations face pressure from multiple directions simultaneously and must navigate without alienating key groups.',
      },
      {
        id: 'narrative-fragmentation',
        name: 'Narrative Fragmentation',
        shortDescription: 'Shared organizational narratives erode as people consume different information ecosystems.',
        whyItMatters: 'Building coherent culture becomes harder when employees and customers inhabit different realities.',
      },
      {
        id: 'belonging-as-performance',
        name: 'Belonging as Performance',
        shortDescription: 'Programs and signals substitute for genuine inclusion, creating a gap between stated and lived culture.',
        whyItMatters: 'Performative belonging breeds cynicism and accelerates attrition among exactly the people organizations most want to retain.',
      },
    ],
    implications: {
      leadership:
        'Leaders need a clear and authentic organizational point of view on belonging — not a policy, but a genuine cultural position — that can survive political pressure and social evolution without constant revision. Leaders who cannot articulate this position leave it to chance, and chance tends to produce inconsistency.',
      talent:
        'The most talented people evaluate organizations on whether they feel genuinely seen, valued, and able to do their best work. Belonging is not a benefit or a program — it is a felt experience that determines whether people bring their full capability or protect themselves. The organizations that understand this design for it at every management level.',
      operatingModel:
        'Operating models that create visible belonging — through team design, management practice, physical environment, and the way decisions are made and communicated — outperform those that treat culture as a downstream outcome of strategy. Belonging is designed or it is absent.',
      growth:
        'Consumer brands that authentically reflect and affirm the identities of their target communities build loyalty and advocacy that paid media cannot replicate. Authenticity is not a communication strategy; it is a product and culture strategy — and the gap between brands that understand this and those that do not is widening.',
      governance:
        'The political environment around DEI, ESG, and corporate social positioning is increasingly volatile. Boards need genuine literacy in how these dynamics affect their specific organization — not frameworks designed for a more stable political environment. The boards that develop this understanding before a crisis will have more options than those that develop it after.',
    },
    provocations: [
      'Most organizations are managing belonging as a DEI and communications challenge. What if the organizations treating it as a performance variable — something that directly determines what people are capable of delivering — are building durable advantages the others cannot see?',
      'The risk is not the political backlash against DEI programs. It is discovering that the programs were substituting for culture — and that when the programs go, nothing is left.',
      'What breaks if the people who most need to feel they belong — the ones with the most options and the most capability — are also the ones who can most easily leave?',
      'What becomes possible if belonging is treated as a design constraint rather than a values aspiration — built into how teams are structured, how decisions are made, and how work is experienced?',
      'Where are we performing inclusion while preserving cultures that only some people can fully inhabit — and who in the organization already knows this but has stopped saying it?',
    ],
    signals: [
      {
        id: 'sig-ib-1',
        title: 'Employee expectations around meaning and belonging at work remain elevated post-pandemic',
        interpretation:
          'Survey data consistently shows that employees — particularly in knowledge-intensive roles — evaluate organizations on whether their work feels meaningful and whether they feel genuinely valued. These expectations have not retreated to pre-pandemic norms.',
        source: 'Gallup State of the Global Workplace',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ib-2',
        title: 'Political pressure on corporate DEI programs intensifying in the US',
        interpretation:
          'Legal and political challenges to corporate DEI programs are increasing. Organizations are navigating a more volatile environment that requires clearer distinctions between cultural practice and formal programs.',
        source: 'Harvard Business Review / SHRM',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ib-3',
        title: 'Gen Z entering the workforce with distinctively different expectations around work and belonging',
        interpretation:
          'The youngest cohort of workers evaluates employers on authenticity, flexibility, and values alignment in ways that differ materially from previous generations. Organizations that have not adapted their culture and management practice are experiencing elevated attrition among this group.',
        source: 'Deloitte Global Millennial / Gen Z Survey',
        date: 'Feb 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ib-4',
        title: 'Community-building becoming a primary brand growth strategy for consumer companies',
        interpretation:
          'Leading consumer brands are investing in genuine community infrastructure — not just social media presence — as a growth and retention strategy. Brands with authentic communities are demonstrating higher lifetime value and lower customer acquisition costs.',
        source: 'Edelman Brand Trust / a16z Consumer',
        date: 'Jan 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ib-5',
        title: 'Narrative fragmentation making shared organizational story harder to sustain',
        interpretation:
          'The collapse of shared information environments — accelerated by AI-generated content and algorithmically siloed media — means that employees, customers, and stakeholders may inhabit genuinely different factual worlds. Internal communications strategies built on the assumption of shared context are becoming less effective.',
        source: 'Reuters Institute / Knight Foundation',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ib-6',
        title: 'Stakeholder expectations of value creation expanding beyond shareholders',
        interpretation:
          'Employees, communities, and regulators are asserting legitimate claims on how value is created and distributed. Organizations that continue to optimize purely for shareholder return are finding social licence, talent access, and regulatory relationships increasingly difficult to maintain.',
        source: 'Business Roundtable / B Team',
        date: 'Mar 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ib-8',
        title: 'Community formation becoming a primary competitive differentiator for brands and employers',
        interpretation:
          'Organizations that can genuinely create community — not just audience — are demonstrating measurably different outcomes in customer retention, employee engagement, and brand resilience. Authentic community requires genuine investment in shared experience, values, and belonging; organizations substituting social media presence for community infrastructure are seeing the gap widen.',
        source: 'a16z Consumer / Edelman Brand Trust',
        date: 'Mar 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-ib-9',
        title: 'Representation expectations broadening from diversity metrics to genuine inclusion experience',
        interpretation:
          'Employee and consumer expectations around representation have shifted from diversity in headcount to inclusion in experience — whether people feel their perspective is genuinely valued and incorporated, not merely tolerated. Organizations that have invested heavily in diversity programs without redesigning the cultures those people enter are experiencing the gap between representation and belonging as a retention and trust problem.',
        source: 'Catalyst / McKinsey Women in the Workplace',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ib-10',
        title: 'Social polarization deepening the challenge of maintaining coherent organizational identity across divided stakeholder communities',
        interpretation:
          'Political and cultural polarization is making it harder for organizations to sustain coherent values-based positioning across their full stakeholder base. What earns trust with one community may damage it with another. Organizations are increasingly being forced to make explicit choices about whose belonging they prioritize — or to develop more nuanced approaches to community that acknowledge rather than flatten the diversity of expectations they face.',
        source: 'Pew Research Center / Kantar',
        date: 'Feb 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ib-7',
        title: 'Brand and market overcrowding intensifying as AI lowers production barriers',
        interpretation:
          'AI is making it cheaper to launch products, brands, and content — dramatically increasing the noise environment in which organizations compete for consumer attention and loyalty. Genuine differentiation is becoming harder to achieve and faster to erode.',
        source: 'Kantar Brand Z / Forrester',
        date: 'Feb 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
    ],
    relatedForces: [
      { id: 'workforce-transformation', name: 'Workforce Transformation' },
      { id: 'trust-recalibration', name: 'Trust Recalibration' },
      { id: 'human-augmentation', name: 'Human Augmentation' },
    ],
    relevantContexts: [
      { id: 'consumer-brand-growth', label: 'Consumer Brand · Growth · 3–5 Years' },
      { id: 'healthcare-talent', label: 'Healthcare · Talent · 3–5 Years' },
      { id: 'consumer-transformation-innovation', label: 'Consumer · Transformation · Innovation · 3–5 Years' },
    ],
  },
]

export function getForceById(id: string): ForceDetail | undefined {
  return allForces.find((f) => f.id === id)
}
