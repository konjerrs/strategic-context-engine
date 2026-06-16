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

export type ForceDetail = {
  id: string
  name: string
  shortLine: string
  accentHex: string
  momentum: 'Rising' | 'Stable' | 'Declining'
  confidence: 'High' | 'Medium' | 'Low'
  lastUpdated: string
  executiveSummary: string
  whyItMatters: string
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
    executiveSummary:
      'Across industries, the workflows, roles, and operating models built for an era of expensive information processing are being challenged by a new reality: AI is making intelligence abundant, fast, and embedded. Clinical documentation, financial analysis, manufacturing quality control, customer service, strategic decision support, and administrative coordination are all being transformed simultaneously. The pace of this transformation has accelerated sharply. What was experimental three years ago is now operational at scale in leading organizations. Leaders across every sector do so in a context where AI is no longer a future consideration but an active structural force reshaping cost, capacity, quality, and the meaning of human work.',
    whyItMatters:
      'The strategic importance of AI Ascendance is not primarily about efficiency — it is about the redesign of what organizations do and how they do it. Leaders who treat AI as a cost-reduction tool may capture some near-term gains while missing the deeper opportunity: to rebuild operating models around new capabilities that were not possible five years ago. The organizations most likely to succeed in the next decade may be those that ask not how to make existing workflows faster, but what kinds of outcomes become possible when information is abundant and intelligence is cheap.',
    implications: {
      leadership:
        'Leaders may need to position AI not as a technology initiative but as the context in which every major strategic decision is now made. The leadership task includes interpreting what AI means for operating models, culture, and the meaning of human work.',
      talent:
        'AI changes what roles require. Organizations may need to redesign careers — not just retrain people — and develop clarity about which work remains distinctively human and why that matters strategically.',
      operatingModel:
        'Many current workflows were designed for a world of expensive information processing. AI may make it possible to fundamentally rethink how work is coordinated and supported — not just automate the same steps faster.',
      growth:
        'AI creates new possibilities for growth through personalized experiences, expanded access, and higher-quality decision support. Organizations that deploy AI credibly may attract customers, partners, and talent that prefer capable, trust-earning systems.',
      governance:
        'AI introduces new governance requirements: visibility into where AI is influencing decisions, accountability structures for errors, and mechanisms for maintaining human oversight at appropriate points in critical processes.',
    },
    provocations: [
      'What if the organizations that move slowly on AI lose the talent to organizations that move faster?',
      'What if AI makes it economically viable to serve populations that were previously too expensive to reach?',
      'What if the bottleneck shifts from expertise to trust in AI-assisted decisions?',
      'What if the most important skill in five years is knowing when not to follow an AI recommendation?',
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
    executiveSummary:
      'Trust in organizations — with customers, employees, regulators, and the public — is under structural pressure from multiple directions simultaneously. AI deployment raises questions about accountability and transparency. Leadership transitions create uncertainty about institutional direction. Widening gaps between stated values and observable actions erode internal credibility. And people, increasingly informed and empowered, are applying higher expectations to the organizations they choose to engage. In this environment, trust is not merely a reputational asset — it is an operational and competitive variable that affects access to talent, customers, partners, and capital.',
    whyItMatters:
      'Trust has historically been treated as a soft consideration in strategy — important in theory but difficult to act on directly. What is changing is the degree to which trust is becoming measurable, differentiated, and strategically decisive. Organizations with high trust attract customers. Organizations that deploy AI credibly earn the right to move faster. The leader who understands that trust is both a constraint and an asset — and who acts on it deliberately — may have a structural advantage that compounds over time.',
    implications: {
      leadership:
        'Leaders set the trust tone for their organizations — through what they say, what they do, and whether the two align. The credibility questions that matter most to stakeholders are shaped in moments of high visibility: how AI is explained and deployed, how difficult decisions are communicated, and whether stated values are observable in practice.',
      talent:
        'People increasingly evaluate organizations on whether they feel trusted, respected, and supported — not just compensated. Organizations that deploy AI in ways that feel replacing rather than augmenting may face accelerating attrition.',
      operatingModel:
        'Operating models that make AI decisions opaque, that obscure accountability, or that reduce human contact at the wrong moments will erode trust. Trust-sensitive operating model design requires intentionality about where transparency and human presence matter most.',
      growth:
        'Trust is a growth lever. Customers who trust an organization refer others, return more often, and engage more fully. In a competitive market, trust differentiation may become as important as product capability or price.',
      governance:
        'Trust requires governance. Boards, regulators, and customers are beginning to ask who is accountable when AI influences a consequential decision. Organizations that build clear accountability structures before they are required will be better positioned.',
    },
    provocations: [
      'What if the organizations that deploy AI most cautiously end up being trusted more — and faster by regulators?',
      'What if trust becomes a more valuable competitive asset than technology capability?',
      'What if the most important leadership act in the first ninety days is not a strategy announcement but a trust-building signal?',
      'What if the gap between what organizations say about AI and what they actually do is the defining credibility problem of this decade?',
      'What if the communities most dependent on an organization are also the ones with the least trust in it — and the most power to slow it down?',
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
    executiveSummary:
      'The regulatory, governance, and accountability frameworks that organize institutional life are being actively rewritten across every major sector simultaneously. AI regulation, financial services compliance, energy transition requirements, government digital transformation standards, and data privacy laws are all advancing — often faster than the organizations subject to them anticipated. This is not a temporary compliance surge: it reflects a structural shift in how societies expect institutions to be accountable, transparent, and adaptive. For leaders, institutional rewiring is not background noise — it is a design constraint on every major strategic initiative.',
    whyItMatters:
      'Organizations that treat regulatory change as a periodic compliance exercise will be repeatedly surprised. Organizations that treat it as a structural force — one that shapes what is possible, what is permitted, and what earns legitimacy — will build governance infrastructure early, move with more confidence inside regulated environments, and earn the regulatory trust that translates into strategic freedom. Institutional rewiring is not about risk management. It is about recognizing that the rules of the game are being rewritten, and that the organizations most involved in shaping those rules will have the most freedom to operate inside them.',
    implications: {
      leadership:
        'Leaders may need to position governance capability as a strategic asset, not just a compliance cost. The organizations that build deep regulatory relationships and governance infrastructure will navigate change faster than those that treat compliance as an afterthought.',
      talent:
        'The most valuable talent at the intersection of policy, legal, and operations is increasingly scarce and increasingly strategic. Organizations that develop regulatory expertise internally will have a more durable advantage than those dependent on external counsel.',
      operatingModel:
        'Operating models that can adapt to changing regulatory requirements without full redesign will outperform those that must rebuild with each regulatory cycle. Governance agility is becoming an operational capability.',
      growth:
        'In highly regulated industries, the organizations with the strongest regulatory trust often have more freedom to grow — faster approvals, fewer audit disruptions, and more credibility with enterprise buyers who require compliance documentation.',
      governance:
        'Boards may need to develop genuine literacy in the regulatory domains most relevant to their organization. The era of governance-by-delegation to management is under pressure in AI, energy transition, and financial services contexts.',
    },
    provocations: [
      'What if the organizations that invest most in governance infrastructure end up with more strategic freedom than those that minimize it?',
      'What if regulation turns out to be a competitive advantage for the organizations that anticipated it?',
      'What if the most consequential institutional decisions of the next decade are not made by executives but by regulators writing the rules they will operate inside?',
      'What if the organizations that help write the regulations governing their industry end up with a more favorable operating environment than those that only respond to them?',
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
    executiveSummary:
      'Workforce transformation is no longer a future consideration — it is the operating reality. Across industries, the skills required for work are changing faster than training systems can respond. AI is compressing some roles while elevating others. Skilled trades shortages coexist with knowledge worker surpluses. Clinical burnout and shop floor automation are simultaneous crises. The organizations navigating this well are treating workforce transformation as a design challenge: redesigning what work requires, not simply trying to hire or retrain faster against a structure that may no longer fit.',
    whyItMatters:
      'Workforce strategy built for the last decade is increasingly the wrong architecture for the next five years. Organizations that recognize this early — and redesign roles, workflows, and career paths around new realities — will have structural advantages in talent attraction, retention, and productivity that laggards will find difficult to close. The workforce question is not peripheral. It is central to whether organizations can execute on any of the other strategic priorities that matter.',
    implications: {
      leadership:
        'Leaders may need to communicate a credible vision for what the workforce will look like in five years — not just what positions they are trying to fill today. The risk of silence on this question is that people fill the void with fear about replacement.',
      talent:
        'Workforce strategy may need to evolve from workforce planning (how many people do we need?) to workforce architecture (what work should humans do, and how should it be organized around new capabilities?). This requires investment in job design, training, and leadership development.',
      operatingModel:
        'Operating models built around the assumption of fully staffed teams with stable skill profiles may need redesign. Organizations that use AI and automation to reduce burden on people — without reducing human judgment at critical points — may find sustainable efficiency gains.',
      growth:
        'Growth plans that assume current workforce availability and capability may not be achievable. New growth models may require thinking about how to serve more with differently organized teams — not just larger ones.',
      governance:
        'Boards may need to treat workforce transformation as a long-cycle strategic challenge with capital implications, not a short-term operational issue. Regular reporting on workforce architecture and redesign progress may become board-level expectations.',
    },
    provocations: [
      'What if the organizations that reduce administrative burden for their most skilled people retain them — and the talent crisis effectively solves itself?',
      'What if the skills shortage is never solved by traditional hiring — and organizations have to build the workforce they need from people who are already there?',
      'What if the best workers of the next decade are those most skilled at working with AI — and the organizations that trained them earliest will be hardest to compete with?',
      'What if AI could shift 30% of current documentation and coordination time back to the work that actually requires human judgment?',
      'What if the most durable competitive advantage in labor-intensive industries is not technology but the culture that makes people want to work there through transformation?',
      'What if augmentation tools make the average worker as capable as the best worker of ten years ago — and the implications for competitive dynamics are barely understood yet?',
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
    executiveSummary:
      'The boundary between what humans do and what machines do is actively shifting across every domain of work. Clinical roles are being redesigned around AI capability. Engineering teams are producing more with smaller headcounts. Financial advisors are making decisions in partnership with AI recommendation systems. The question is no longer whether AI will change how people work, but how organizations design that partnership — and who sets the terms of it. Human augmentation is not the same as automation. Automation replaces human work; augmentation redesigns it. The organizations that understand the distinction and design accordingly will achieve outcomes that neither purely human nor purely automated approaches can match.',
    whyItMatters:
      'Human augmentation may be one of the most strategically consequential forces in play — because it is the one that directly shapes what humans do in an AI era. If organizations get the augmentation design right, they unlock new levels of human capability, judgment, and satisfaction. If they get it wrong — deploying AI in ways that feel degrading, disempowering, or trust-eroding — they face resistance, attrition, and poor outcomes. The organizations that ask "how do we help people do their best work in an AI era?" will build fundamentally more adaptive workforces than those that ask only "what can we automate?"',
    implications: {
      leadership:
        'Leaders may need to set the cultural and design norms for human-AI collaboration — early, explicitly, and visibly. The meaning of augmentation in an organization is largely set by what leaders model and what they say. Silence on this question allows anxiety to fill the void.',
      talent:
        'The most valuable talent in an augmented organization may be people who know how to direct AI systems toward genuinely useful outcomes — and who can tell when not to. This is a judgment skill, not a technical one, and it cannot be trained away from the work itself.',
      operatingModel:
        'Operating models may need to be redesigned around human-AI handoff points — the moments where AI should give way to human judgment, and vice versa. Getting these handoffs right is both a design problem and a trust problem.',
      growth:
        'Augmentation may be the most viable path to growing capacity without proportional headcount growth. Organizations that demonstrate measurable capacity expansion through augmentation will have access to growth strategies that their non-augmented competitors cannot match.',
      governance:
        'The accountability question for augmented organizations is not fully settled: when an AI-assisted human makes an error, who is responsible? Organizations that build explicit accountability structures for human-AI collaboration will navigate this question better than those that leave it implicit.',
    },
    provocations: [
      'What if the organizations that invest most in helping people work with AI — rather than replacing them with it — end up with the most adaptive and capable workforces?',
      'What if the most important design question of the next decade is not "what can AI do?" but "what should humans still do — and why?"',
      'What if augmentation raises the floor of human performance so dramatically that the meaningful differentiation becomes entirely about the ceiling of human judgment?',
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
    executiveSummary:
      'The underlying logic of economic value creation is shifting. Decades of assumptions about where growth comes from, who creates it, how labor and capital interact, and what productivity means are all under active revision. AI is compressing the cost of knowledge work. Automation is hollowing out mid-skill roles while concentrating returns at the top and bottom of the distribution. Industrial policy is redirecting capital flows in ways that markets alone would not produce. Geopolitical fragmentation is creating new cost structures and supply chain designs. And the relationship between productivity gains and broadly shared prosperity has become one of the defining political questions of the era. For leaders, economic reconfiguration is not a macroeconomic backdrop — it is a design constraint on every major strategic decision.',
    whyItMatters:
      'Organizations that built their strategies on the economic logic of 2010–2020 may be operating with assumptions that are quietly becoming obsolete. The cost structures, talent models, pricing power, and growth paths that made sense in an era of globalization, cheap capital, and stable productivity may no longer hold. The leaders who recognize this earliest — and redesign their operating models and growth strategies accordingly — will be better positioned than those who treat current economic turbulence as a temporary deviation from a norm that is unlikely to return.',
    implications: {
      leadership:
        'Leaders may need to develop a clear organizational point of view on how economic reconfiguration affects their specific business model — not just as a risk to manage, but as a source of strategic opportunity for those who move early.',
      talent:
        'The economics of talent are shifting. AI is compressing the cost of cognitive work, while genuinely scarce human capabilities are commanding premium returns. Workforce strategy may need to identify clearly which human capabilities remain irreplaceable and invest accordingly.',
      operatingModel:
        'Operating models built on the assumptions of stable globalization, predictable input costs, and cheap capital may need fundamental redesign. The new operating logic may need to prioritize resilience and adaptability alongside efficiency.',
      growth:
        'Growth models that depend on expanding into stable, rules-based global markets may face structural headwinds. New growth may require identifying where economic reconfiguration creates genuine demand — for resilience, localization, or capability building.',
      governance:
        'Boards may need to develop economic literacy that goes beyond reading quarterly results — including genuine understanding of how industrial policy, capital flows, and productivity dynamics are affecting the competitive environment.',
    },
    provocations: [
      'What if the productivity gains from AI accrue so unevenly that they become a political and regulatory constraint on the organizations that capture them?',
      'What if the era of cheap capital was the anomaly — and the organizations that built strategies assuming its return are systematically disadvantaged?',
      'What if economic reconfiguration creates as much opportunity as risk — and the organizations that move first to redesign around it outperform those that wait for stability?',
      "What if the next decade's competitive advantage is not technological but structural — the ability to operate profitably in an environment of genuine economic uncertainty?",
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
    executiveSummary:
      "The post-Cold War framework of open, rules-based global order — which underpinned several decades of corporate globalization strategy — is being actively replaced by something more contested, fragmented, and geopolitically charged. US-China competition is restructuring technology and supply chains. European sovereignty ambitions are reshaping energy, defense, and digital infrastructure. Trade policy is increasingly an instrument of industrial and security strategy, not just economic optimization. For global organizations, the comfortable assumption that geopolitics was someone else's problem — to be managed by government-affairs teams at the margins — has become untenable. Geopolitical risk is now a first-order strategic variable.",
    whyItMatters:
      'The organizations most exposed to geopolitical realignment are not necessarily those with obvious political risk — they are those whose strategies were built on assumptions of stable, rules-based globalization that are no longer reliable. Technology supply chains, talent flows, market access, data sovereignty, and capital availability are all being reshaped by geopolitical dynamics. Leaders who develop genuine geopolitical fluency — not just government-affairs capability — will be better positioned to navigate the emerging environment. Those who wait for stability to return may be waiting for something that is not coming.',
    implications: {
      leadership:
        'Geopolitical fluency may need to become a core leadership capability, not a specialist function. CEOs and boards that understand how geopolitical dynamics affect their specific operating environment will make better strategic decisions than those who delegate this understanding entirely to advisors.',
      talent:
        'Talent flows across borders are being affected by geopolitical dynamics — through visa restrictions, technology transfer controls, and shifting perceptions of destination countries. Global talent strategies may need to be redesigned around a more fragmented world.',
      operatingModel:
        'Operating models built on the assumption of seamless global integration — shared technology platforms, global supply chains, cross-border data flows — may need redesign to accommodate a world of competing regulatory regimes and geopolitical boundaries.',
      growth:
        'Market access assumptions may need revision. Organizations that built growth strategies around open global markets may find that some of those markets are becoming politically contested, closed, or conditioned on local production and partnership requirements.',
      governance:
        'Boards may need to develop genuine geopolitical expertise — not just risk committee oversight of political risk, but strategic-level understanding of how geopolitical dynamics affect competitive position, market access, and regulatory exposure.',
    },
    provocations: [
      'What if the organizations that build genuine geopolitical capability — not just government-affairs teams — end up with a structural advantage in navigating the next decade?',
      'What if the bifurcation of the global technology stack forces organizations to choose sides in ways they have been successfully deferring?',
      'What if some of the most valuable markets of the next decade are in regions that current risk models would classify as too uncertain to enter?',
      'What if the return to industrial policy and state capitalism requires organizations to develop a fundamentally different relationship with governments than globalization made possible?',
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
    executiveSummary:
      'Climate is no longer a future risk to be managed at the margins of corporate strategy — it is an active, present-tense operating constraint affecting physical assets, supply chains, insurance markets, regulatory frameworks, talent expectations, and capital access. The transition to lower-carbon economies is creating winners and losers across every sector. Physical climate risks — extreme weather, water scarcity, heat stress, and sea-level rise — are affecting asset values and operational continuity in ways that are measurable and accelerating. And the credibility of corporate climate commitments is under unprecedented scrutiny, with material consequences for brand trust, regulatory relationships, and access to capital from an increasingly climate-literate investor community.',
    whyItMatters:
      'The strategic question for most organizations is no longer whether climate matters — it is how to build genuine resilience and credibility in an environment where both physical climate risks and transition risks are increasing simultaneously. Organizations that treat climate primarily as a reporting and compliance challenge may find themselves managing the wrong problem. The organizations most likely to navigate this well are those that integrate climate risk and resilience thinking into core strategic decisions — about capital allocation, operating model design, supply chain architecture, and the long-term viability of specific business models.',
    implications: {
      leadership:
        'Leaders may need to move from climate commitment to climate strategy — from articulating ambitions to demonstrating how those ambitions are integrated into capital allocation, operating model design, and organizational accountability.',
      talent:
        'Climate credentials are increasingly relevant to talent attraction, particularly among younger professionals. Organizations seen as credible on climate — not just compliant — may have a meaningful advantage in competitive talent markets.',
      operatingModel:
        'Physical climate risks require operational resilience planning that goes beyond business continuity. Supply chain exposure to climate events, asset location risk, and water and energy dependency all need to be explicitly addressed in operating model design.',
      growth:
        'Climate transition creates significant demand for new products, services, and infrastructure — in energy, built environment, agriculture, water, and beyond. Organizations that can credibly serve this demand may access growth markets that are structurally underpenetrated.',
      governance:
        'Board-level climate governance is becoming an expectation, not a leading practice. Mandatory disclosure frameworks (TCFD, CSRD, SEC) are creating accountability structures that require genuine board-level climate literacy and oversight.',
    },
    provocations: [
      'What if the organizations that invest most seriously in physical climate resilience end up with a structural cost advantage as climate disruption accelerates?',
      'What if the gap between stated climate commitments and observable action becomes the defining credibility challenge for corporate leaders in the next five years?',
      'What if adaptation — rather than mitigation — becomes the primary strategic climate challenge for organizations in the next decade?',
      'What if climate resilience becomes as important as financial resilience in how boards and investors evaluate organizational health?',
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
    executiveSummary:
      'The global energy system is undergoing the most significant structural transformation in a century. Renewables are becoming the cheapest form of new power generation across most of the world. Electrification is expanding from transport into heating, industry, and agriculture. Critical minerals — lithium, cobalt, nickel, rare earths — have become strategic assets contested by major powers. And the infrastructure required to support the energy transition — grids, storage, pipelines, ports — is creating both massive investment opportunity and significant execution risk. For organizations outside the energy sector, the transition is reshaping input costs, supply chain risks, operational requirements, and the regulatory environment in ways that are increasingly material.',
    whyItMatters:
      'Energy and resource dynamics affect every industry — through input costs, operational requirements, supply chain exposure, and regulatory obligations. Organizations that treat the energy transition as primarily a sustainability question miss the strategic significance: it is reshaping competitive dynamics, cost structures, and the regulatory environment across every sector simultaneously. The organizations most likely to navigate this well are those that develop genuine fluency in how energy and resource dynamics affect their specific business model — not just their carbon footprint — and build that understanding into long-term strategic planning.',
    implications: {
      leadership:
        'Leaders may need to develop genuine fluency in energy and resource dynamics — not to become energy experts, but to understand how these dynamics affect their specific operating environment, cost structure, and competitive position.',
      talent:
        'The energy transition is creating acute talent shortages in engineering, grid design, battery technology, and project management. For organizations in adjacent sectors, competition for technically skilled talent with energy-transition expertise will intensify.',
      operatingModel:
        'Operating models with significant energy cost exposure may need to redesign around energy efficiency and flexibility. Organizations with large physical footprints — in manufacturing, logistics, retail, and healthcare — face both challenge and opportunity in the energy transition.',
      growth:
        'The scale of investment required by the energy transition is creating significant demand for capital, technology, services, and talent. Organizations that can serve this demand — in finance, construction, engineering, software, and professional services — may access structurally growing markets.',
      governance:
        'Energy risk governance may need to expand from compliance and reporting to genuine strategic oversight. Board-level understanding of energy cost exposure, supply chain risk, and transition timing is becoming a differentiator, not a baseline.',
    },
    provocations: [
      'What if the critical minerals required for the energy transition become as geopolitically contested as oil — with similar consequences for global stability and corporate strategy?',
      'What if the pace of electrification accelerates faster than grid infrastructure can support — creating structural operational risk for organizations with significant energy demands?',
      'What if the organizations that move earliest to redesign operations around cheap renewable energy end up with durable cost advantages that later movers cannot close?',
      'What if the energy transition creates more disruption in adjacent industries — logistics, manufacturing, agriculture, real estate — than in energy itself?',
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
    executiveSummary:
      'Something significant is happening in how people relate to institutions, to each other, and to the organizations they work for and buy from. Expectations around representation, meaning, and belonging at work have changed substantially over the past decade — and continue to evolve in ways that are not always linear or predictable. The social contract between employers and employees is being renegotiated in real time. Consumers increasingly choose brands that reflect or affirm their values and identity. Community — which was weakening before the pandemic — has become a strategic asset for brands and employers who can authentically create it. And the question of what it means to belong — to a workplace, a brand, a community, a nation — is more contested, more politically charged, and more commercially relevant than it has been in a generation.',
    whyItMatters:
      'Organizations that dismiss Identity & Belonging as a soft concern — relevant only to HR and marketing — may be missing one of the most strategically significant forces shaping their talent pools, customer relationships, and brand equity. The employees most likely to stay and perform are those who feel genuinely seen and valued. The customers most likely to advocate are those who feel their identity is respected. And the organizations most likely to navigate the political volatility around these questions are those that have built genuine clarity about their values — and act consistently with them. Identity & Belonging is not primarily a risk to manage; it is a design challenge.',
    implications: {
      leadership:
        'Leaders may need to develop a clear and authentic organizational point of view on belonging — not a policy, but a genuine cultural position — that can survive political pressure and social evolution without constant revision.',
      talent:
        'The most talented people increasingly evaluate organizations on whether they feel genuinely seen, valued, and able to do their best work. Belonging is not a benefit or a program — it is a felt experience that determines whether people bring their full capability or protect themselves.',
      operatingModel:
        'Operating models that create visible belonging — through team design, management practice, physical environment, and the way decisions are made and communicated — may outperform those that treat culture as a downstream outcome of strategy.',
      growth:
        'Consumer brands that authentically reflect and affirm the identities of their target communities — without performative or extractive approaches — may build loyalty and advocacy that paid media cannot replicate. Authenticity is not a communication strategy; it is a product and culture strategy.',
      governance:
        'The political environment around DEI, ESG, and corporate social positioning is increasingly volatile. Boards may need to develop genuine literacy in how these dynamics affect their specific organization — rather than relying on frameworks that were designed for a more stable political environment.',
    },
    provocations: [
      'What if the organizations that create the most genuine belonging — not just the most visible DEI programs — end up with the most resilient and productive workforces?',
      'What if consumer brand loyalty in the next decade is less about product and more about whether people feel their identity is respected by the brands they choose?',
      'What if the political backlash against corporate DEI programs creates a window for organizations that have built genuine inclusion as a cultural practice rather than a compliance posture?',
      'What if the most important belonging question of the next decade is not who is included in the organization but whether AI-mediated work still feels meaningful to the humans doing it?',
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
