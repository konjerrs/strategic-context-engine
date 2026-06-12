export type Force = {
  rank: string
  id: string
  name: string
  shortLine: string
  accentHex: string
  description: string
  whySurfaced: string[]
  whereShows: string[]
  topSignals: string[]
}

export type Signal = {
  id: string
  title: string
  potentialImpact: string
  relatedForce: string
  sourceName: string
  publicationDate: string
  sourceLink: string
  confidence: 'High' | 'Medium' | 'Low'
}

export type StrategicTension = {
  left: string
  right: string
  lean: string
  leanPosition: number
  interpretation: string
}

export type StrategicImplication = {
  id: string
  label: string
  text: string
}

export type SnapshotChange = {
  force: string
  text: string
  direction: 'up' | 'stable' | 'down'
}

export type AlignmentCard = {
  id: string
  label: string
  description: string
}

export type ContextResult = {
  industry: string
  leadershipSituation: string
  strategicChallenge: string
  timeHorizon: string
  snapshot: string
  forces: Force[]
  tensions: StrategicTension[]
  questions: { number: string; text: string }[]
  provocations: { number: string; text: string }[]
  signals: Signal[]
  alignmentCards: AlignmentCard[]
  implications: StrategicImplication[]
  snapshotChanges: SnapshotChange[]
}

export const mockContext: ContextResult = {
  industry: 'Healthcare',
  leadershipSituation: 'CEO Transition',
  strategicChallenge: 'Growth',
  timeHorizon: '3–5 Years',
  snapshot: 'June 2026',

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

  tensions: [
    {
      left: 'Efficiency',
      right: 'Humanity',
      lean: 'Holding the tension',
      leanPosition: 50,
      interpretation:
        'The organization needs to improve throughput without diminishing the human experience of care.',
    },
    {
      left: 'Scale',
      right: 'Personalization',
      lean: 'Holding the tension',
      leanPosition: 50,
      interpretation:
        'Growth will require more scalable systems while preserving individualized care.',
    },
    {
      left: 'Innovation',
      right: 'Trust',
      lean: 'Leaning innovation',
      leanPosition: 62,
      interpretation:
        'New capabilities are necessary, but adoption will depend on credibility with patients, clinicians, and regulators.',
    },
    {
      left: 'Access',
      right: 'Quality',
      lean: 'Holding the tension',
      leanPosition: 50,
      interpretation:
        'Expanding access cannot come at the expense of clinical confidence or outcomes.',
    },
    {
      left: 'Intelligence',
      right: 'Judgment',
      lean: 'Leaning intelligence',
      leanPosition: 38,
      interpretation:
        'AI can expand decision support, but human judgment must remain visible and accountable.',
    },
  ],

  implications: [
    {
      id: 'leadership',
      label: 'Leadership',
      text: 'A new CEO may need to become the organization\'s chief interpreter of how these forces interact — not just a manager of change, but a narrator of the transition.',
    },
    {
      id: 'talent',
      label: 'Talent',
      text: 'The workforce strategy may need to shift from filling roles to redesigning work around new capabilities — treating AI deployment as a role design question, not just a technology one.',
    },
    {
      id: 'operating-model',
      label: 'Operating Model',
      text: 'The organization may need to redesign workflows rather than simply improve existing processes — the assumption that current structures can be optimized may be the most dangerous assumption.',
    },
    {
      id: 'growth',
      label: 'Growth',
      text: 'New growth may come from more intelligent, personalized, and trusted models of care — not from scale alone. The growth strategy and the AI strategy may need to become one document.',
    },
    {
      id: 'governance',
      label: 'Governance',
      text: 'AI deployment, workforce pressure, and trust dynamics may require clearer accountability structures — including visibility into where AI is making or influencing decisions.',
    },
  ],

  questions: [
    {
      number: '01',
      text: 'What assumptions about healthcare delivery were built for a world of scarce intelligence?',
    },
    {
      number: '02',
      text: 'Which parts of our model should be redesigned rather than optimized?',
    },
    {
      number: '03',
      text: 'What aspects of care should become more personalized?',
    },
    {
      number: '04',
      text: 'What work should clinicians spend less time doing?',
    },
    {
      number: '05',
      text: 'What role should AI play in organizational decision-making?',
    },
  ],

  provocations: [
    {
      number: '01',
      text: "What if healthcare's primary scarcity is no longer expertise but attention?",
    },
    {
      number: '02',
      text: 'What if patients increasingly trust AI for information and humans for decisions?',
    },
    {
      number: '03',
      text: 'What if administrative work largely disappears before clinical work changes substantially?',
    },
    {
      number: '04',
      text: 'What if healthcare organizations become learning systems rather than delivery systems?',
    },
    {
      number: '05',
      text: 'What if trust becomes a more valuable competitive asset than technology?',
    },
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
    {
      id: 'most-relevant',
      label: 'Most Relevant',
      description: 'Team will choose which force bears most directly on this context.',
    },
    {
      id: 'most-urgent',
      label: 'Most Urgent',
      description: 'Team will choose which force demands action soonest.',
    },
    {
      id: 'most-uncertain',
      label: 'Most Uncertain',
      description: 'Team will choose which force is hardest to call.',
    },
    {
      id: 'most-transformative',
      label: 'Most Transformative',
      description: 'Team will choose which force could reshape the operating model.',
    },
  ],
}
