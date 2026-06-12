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
    shortLine: 'Rewrites the cost and capacity to serve patients.',
    accentHex: '#7c3aed',
    momentum: 'Rising',
    confidence: 'High',
    lastUpdated: 'June 2026',
    executiveSummary:
      'Healthcare is among the highest-information industries in the economy. Clinical documentation, care coordination, diagnostic decision support, administrative processing, and patient communication all depend on the movement and interpretation of information — and all are being transformed by AI. The pace of this transformation has accelerated sharply. What was experimental three years ago is now operational at scale in leading systems. New CEOs entering the industry do so in a context where AI is no longer a future consideration but an active structural force reshaping cost, capacity, quality, and the roles of clinicians and staff.',
    whyItMatters:
      'The strategic importance of AI Ascendance in healthcare is not primarily about efficiency — it is about the redesign of what healthcare organizations do and how they do it. Leaders who treat AI as a cost-reduction tool may capture some near-term gains while missing the deeper opportunity: to rebuild care models around new capabilities that were not possible five years ago. The organizations most likely to succeed in the next decade may be those that ask not how to make existing workflows faster, but what kinds of care, access, and experience become possible when information is abundant and intelligence is cheap.',
    implications: {
      leadership:
        'A new CEO may need to position AI not as a technology initiative but as the context in which every major strategic decision is now made. The leadership task includes interpreting what AI means for care delivery, culture, and the meaning of clinical work.',
      talent:
        'AI changes what clinical and administrative roles require. Organizations may need to redesign careers — not just retrain staff — and develop clarity about which work remains distinctively human and why.',
      operatingModel:
        'Many current workflows were designed for a world of expensive information processing. AI may make it possible to fundamentally rethink how care is coordinated, documented, and supported — not just automate the same steps faster.',
      growth:
        'AI creates new possibilities for growth through personalized experiences, expanded access, and higher-quality decision support. Organizations that deploy AI credibly may attract patients, partners, and talent that prefer capable, trust-earning systems.',
      governance:
        'AI introduces new governance requirements: visibility into where AI is influencing decisions, accountability structures for errors, and mechanisms for maintaining human oversight at appropriate points in the care process.',
    },
    provocations: [
      'What if healthcare organizations that move slowly on AI lose the talent to organizations that move faster?',
      'What if AI makes it economically viable to care for populations that were previously too expensive to serve?',
      'What if the bottleneck in healthcare shifts from expertise to trust in AI-assisted decisions?',
      'What if the most important clinical skill in five years is knowing when not to follow an AI recommendation?',
    ],
    signals: [
      {
        id: 'sig-ai-1',
        title: 'AI agents enter clinical and administrative workflows at scale',
        interpretation:
          'Agentic AI — systems that can autonomously plan, coordinate, and execute multi-step tasks — is moving from pilots to production in leading healthcare organizations. The implication is not incremental automation but role redesign.',
        source: 'HIMSS',
        date: 'May 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-ai-2',
        title: 'Rapid growth in healthcare AI investment',
        interpretation:
          'Venture and strategic capital flowing into healthcare AI has accelerated. Competitive pressure is increasing for organizations that have not yet developed coherent AI deployment strategies.',
        source: 'Rock Health',
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
    ],
    relatedForces: [
      { id: 'workforce-transformation', name: 'Workforce Transformation' },
      { id: 'trust-recalibration', name: 'Trust Recalibration' },
    ],
    relevantContexts: [
      { id: 'healthcare-ceo-growth-3-5', label: 'Healthcare · CEO Transition · Growth · 3–5 Years' },
    ],
  },

  {
    id: 'trust-recalibration',
    name: 'Trust Recalibration',
    shortLine: "Becomes the new CEO's scarcest, decisive asset.",
    accentHex: '#059669',
    momentum: 'Rising',
    confidence: 'High',
    lastUpdated: 'June 2026',
    executiveSummary:
      'Trust in healthcare organizations — with patients, clinicians, regulators, payers, and the public — is under structural pressure from multiple directions simultaneously. AI deployment raises questions about accountability and transparency. Leadership transitions create uncertainty about institutional direction. Widening gaps between stated values and observable actions erode internal credibility. And patients, increasingly informed and empowered, are applying higher expectations to the organizations they choose to engage. In this environment, trust is not merely a reputational asset — it is an operational and competitive variable that affects access to talent, patients, partners, and capital.',
    whyItMatters:
      'Trust has historically been treated as a soft consideration in healthcare strategy — important in theory but difficult to act on directly. What is changing is the degree to which trust is becoming measurable, differentiated, and strategically decisive. Organizations with high patient trust attract patients. Organizations with high clinician trust retain staff. Organizations that deploy AI credibly earn the right to move faster. The new CEO who understands that trust is both a constraint and an asset — and who acts accordingly from the first days in role — may have a structural advantage that compounds over time.',
    implications: {
      leadership:
        'CEO transitions are among the highest-trust-sensitivity moments in organizational life. How a new CEO communicates, what they say about AI, and whether their actions match their words in the first ninety days will shape credibility for years.',
      talent:
        'Clinicians and staff increasingly evaluate organizations on whether they feel trusted, respected, and supported — not just compensated. Organizations that deploy AI in ways that feel replacing rather than augmenting may face accelerating attrition.',
      operatingModel:
        'Operating models that make AI decisions opaque, that obscure accountability, or that reduce human contact at the wrong moments will erode trust at the point of care. Trust-sensitive operating model design requires intentionality.',
      growth:
        'Trust is a growth lever. Patients who trust an organization refer others, return more often, and engage more fully in care. In a competitive market, trust differentiation may become as important as network access or service range.',
      governance:
        'Trust requires governance. Boards, regulators, and patients are beginning to ask who is accountable when AI influences a clinical decision. Organizations that build clear accountability structures before they are required will be better positioned.',
    },
    provocations: [
      'What if the organizations that deploy AI most cautiously end up being trusted more by patients — and faster by regulators?',
      'What if trust becomes a more valuable competitive asset than technology capability?',
      'What if the new CEO\'s most important first act is not a strategy announcement but a trust-building signal?',
      'What if the gap between what healthcare organizations say about AI and what they actually do is the defining trust problem of the next five years?',
    ],
    signals: [
      {
        id: 'sig-trust-1',
        title: 'Public trust in AI-assisted care diverges sharply by domain',
        interpretation:
          'Patients express higher comfort with AI in administrative and scheduling tasks than in diagnosis or treatment decisions. Organizations deploying AI at the clinical edge need differentiated trust strategies.',
        source: 'Pew Research',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-trust-2',
        title: 'Expansion of AI governance requirements in healthcare',
        interpretation:
          'Regulatory frameworks are beginning to require transparency, explainability, and documented accountability for AI systems in clinical settings. Organizations that have not started governance infrastructure will face increasing pressure.',
        source: 'HHS',
        date: 'Apr 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-trust-3',
        title: 'Clinician trust in AI tools tracks closely with involvement in deployment decisions',
        interpretation:
          'Research shows that clinicians who are involved in selecting and configuring AI tools report significantly higher trust in their outputs. Top-down deployment without clinical co-design is a trust risk.',
        source: 'AMA Digital Medicine',
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
      { id: 'healthcare-ceo-growth-3-5', label: 'Healthcare · CEO Transition · Growth · 3–5 Years' },
      { id: 'financial-services-ceo-trust-3-5', label: 'Financial Services · CEO Transition · Trust · 3–5 Years' },
    ],
  },

  {
    id: 'workforce-transformation',
    name: 'Workforce Transformation',
    shortLine: 'Persistent shortages reshape the operating model.',
    accentHex: '#ea580c',
    momentum: 'Stable',
    confidence: 'High',
    lastUpdated: 'June 2026',
    executiveSummary:
      'Healthcare workforce shortages are structural, not cyclical. The nursing shortage, the primary care gap, the burnout epidemic among clinicians, and the growing difficulty of retaining administrative and support staff have not resolved since the pandemic — they have deepened. At the same time, AI and automation are beginning to change what work is required, how it is organized, and who can do it. The result is a workforce in transition: not simply understaffed, but in the early stages of a role redesign that will take a decade to complete. New healthcare CEOs inherit this reality and face the question of how to build for the future without further straining a workforce already at its limits.',
    whyItMatters:
      'The workforce challenge in healthcare cannot be solved by hiring more people into existing roles. The fundamental structure of clinical and administrative work is changing, and organizations that respond only with recruitment and retention programs — without also addressing role design, burden reduction, and the integration of AI tools — will remain structurally short-staffed. The organizations that move toward workforce redesign — redefining what nurses do, what administrators do, what AI does, and what gets automated — may find not just efficiency gains but improved staff experience, reduced burnout, and a more sustainable operating model for the next decade.',
    implications: {
      leadership:
        'New CEOs will need to communicate a credible vision for what the workforce will look like in five years — not just what positions they are trying to fill today. The risk of silence on this question is that staff fill the void with fear about replacement.',
      talent:
        'Workforce strategy may need to evolve from workforce planning (how many FTEs do we need?) to workforce architecture (what work should humans do, and how should it be organized around new capabilities?). This requires investment in job design, training, and leadership development.',
      operatingModel:
        'Operating models built around the assumption of fully staffed human teams may need redesign. Organizations that use AI and automation to reduce administrative burden on clinicians — without reducing clinical judgment or patient contact — may find sustainable efficiency gains.',
      growth:
        'Growth plans that assume current staffing ratios may not be achievable. New growth models may require thinking about how to serve more patients with differently organized teams — not just larger ones.',
      governance:
        'Boards will need to understand workforce transformation as a long-cycle strategic challenge, not a short-term operational issue. Regular reporting on workforce architecture, role redesign progress, and burnout indicators may become board-level expectations.',
    },
    provocations: [
      'What if the healthcare organizations that reduce administrative burden fastest retain the best clinicians?',
      'What if the nursing shortage is never solved — and organizations need to build for that assumption?',
      'What if the best clinicians of the next decade are those most skilled at working with AI — not those most resistant to it?',
      'What if AI could shift 30% of current clinical documentation time back to direct patient care?',
    ],
    signals: [
      {
        id: 'sig-wf-1',
        title: 'Persistent workforce shortages across clinical and administrative roles',
        interpretation:
          'Vacancy rates for nurses, primary care physicians, and administrative roles remain elevated. The pipeline is not recovering at the rate needed to meet demand, particularly in rural and underserved markets.',
        source: 'AHA Workforce',
        date: 'Mar 2026',
        confidence: 'High',
        sourceLink: '#',
      },
      {
        id: 'sig-wf-2',
        title: 'Growth of hybrid human-AI care teams in pilot health systems',
        interpretation:
          'Leading health systems are running pilots in which AI tools handle documentation, triage assistance, and care coordination — freeing clinicians for higher-judgment work. Early results suggest meaningful burnout reduction.',
        source: 'NEJM Catalyst',
        date: 'Apr 2026',
        confidence: 'Medium',
        sourceLink: '#',
      },
      {
        id: 'sig-wf-3',
        title: 'Ambient AI documentation tools reduce clinician documentation time by 20–35%',
        interpretation:
          'Ambient AI — tools that listen to clinical encounters and auto-generate notes — is reaching production scale. Systems that deploy these tools are reporting measurable reductions in after-hours charting time.',
        source: 'Nuance / Microsoft',
        date: 'Feb 2026',
        confidence: 'High',
        sourceLink: '#',
      },
    ],
    relatedForces: [
      { id: 'ai-ascendance', name: 'AI Ascendance' },
      { id: 'trust-recalibration', name: 'Trust Recalibration' },
    ],
    relevantContexts: [
      { id: 'healthcare-ceo-growth-3-5', label: 'Healthcare · CEO Transition · Growth · 3–5 Years' },
    ],
  },
]

export function getForceById(id: string): ForceDetail | undefined {
  return allForces.find((f) => f.id === id)
}
