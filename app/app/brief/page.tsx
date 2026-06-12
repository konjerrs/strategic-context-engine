import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare CEO Transition · Growth — Strategic Context Engine',
}

// ─── Mock Data ───────────────────────────────────────────────────────────────

const LENSES = [
  { type: 'Industry', value: 'Healthcare', color: '#1d4ed8', bg: '#eff6ff', border: '#bfdbfe' },
  { type: 'Leadership Situation', value: 'CEO Transition', color: '#6d28d9', bg: '#f5f3ff', border: '#ddd6fe' },
  { type: 'Strategic Challenge', value: 'Growth', color: '#92400e', bg: '#fffbeb', border: '#fde68a' },
  { type: 'Time Horizon', value: '3–5 Years', color: '#065f46', bg: '#ecfdf5', border: '#a7f3d0' },
]

const EXECUTIVE_BRIEF = {
  opening: 'Healthcare is entering a structural inflection point.',
  paragraphs: [
    'Three assumptions that shaped the industry\'s operating model for decades no longer hold: that intelligence is scarce and concentrated in specialists; that workforce supply is a cyclical problem; and that patient trust is ambient rather than earned moment by moment. A CEO entering this organization in 2026 inherits a system calibrated for conditions that are changing in real time.',
    'AI is beginning to perform diagnostic tasks at clinical parity in radiology and pathology. Workforce shortages have moved from cyclical to structural — burnout and role displacement are compounding simultaneously. And the question of what patients trust is becoming a design challenge: research shows majority acceptance of AI in logistics and administration, but only 44% in clinical diagnosis. Trust is not a given. It must be architected.',
    'The 3–5 year horizon is the primary window for strategic repositioning. Decisions made now about AI deployment, workforce architecture, and care delivery models will compound over that period. The CEO who moves quickly without a trust framework risks both regulatory exposure and workforce disengagement. The CEO who moves too slowly risks being out-positioned by systems already redesigning assumptions rather than optimizing them.',
  ],
  meta: [
    { label: 'Forces ranked', value: '3' },
    { label: 'Signals tracked', value: '7' },
    { label: 'Time horizon', value: '3–5 Years' },
    { label: 'Context established', value: 'June 11, 2026' },
  ],
}

const FORCES = [
  {
    rank: 1,
    id: 'ai-ascendance',
    name: 'AI Ascendance',
    description: 'Intelligence is becoming more abundant, embedded, and operational.',
    score: 94,
    scoreColor: '#34d399',
    scoreTrack: '#052e16',
    momentum: 'Accelerating',
    confidence: 'High',
    why: 'Healthcare contains enormous volumes of knowledge work that AI is beginning to perform at clinical parity. Workforce shortages create urgency for augmentation. A new CEO has a rare window to redesign operating assumptions before they harden — and the 3–5 year horizon is exactly when deployment decisions made now will define competitive position.',
    breakdown: [
      { label: 'Industry match', value: 23, max: 25 },
      { label: 'Leadership situation', value: 20, max: 25 },
      { label: 'Strategic challenge', value: 18, max: 20 },
      { label: 'Time horizon', value: 10, max: 10 },
      { label: 'Impact area', value: 10, max: 10 },
      { label: 'Signal strength', value: 13, max: 10 },
    ],
    related: ['Workforce Transformation', 'Trust Recalibration'],
  },
  {
    rank: 2,
    id: 'workforce-transformation',
    name: 'Workforce Transformation',
    description: 'The nature, composition, and expectations of work are fundamentally changing.',
    score: 91,
    scoreColor: '#38bdf8',
    scoreTrack: '#082f49',
    momentum: 'Accelerating',
    confidence: 'High',
    why: 'Healthcare is experiencing persistent workforce shortages, burnout, and significant role disruption from AI. Growth in this context is contingent on workforce strategy — you cannot grow a health system without a credible answer to how work will be done. CEO transitions are moments when workforce expectations reset and new contracts can be formed.',
    breakdown: [
      { label: 'Industry match', value: 22, max: 25 },
      { label: 'Leadership situation', value: 19, max: 25 },
      { label: 'Strategic challenge', value: 17, max: 20 },
      { label: 'Time horizon', value: 10, max: 10 },
      { label: 'Impact area', value: 10, max: 10 },
      { label: 'Signal strength', value: 13, max: 10 },
    ],
    related: ['AI Ascendance', 'Trust Recalibration'],
  },
  {
    rank: 3,
    id: 'trust-recalibration',
    name: 'Trust Recalibration',
    description: 'The foundations of institutional, social, and organizational trust are being renegotiated.',
    score: 88,
    scoreColor: '#a78bfa',
    scoreTrack: '#2e1065',
    momentum: 'Accelerating',
    confidence: 'High',
    why: 'Healthcare depends on trust more than almost any industry — with patients, clinicians, regulators, and payers. A CEO transition is a trust-sensitive moment. As AI enters clinical and administrative functions, patients and staff will need visible human accountability. Trust is both a constraint on growth strategy and the primary source of durable competitive differentiation.',
    breakdown: [
      { label: 'Industry match', value: 21, max: 25 },
      { label: 'Leadership situation', value: 20, max: 25 },
      { label: 'Strategic challenge', value: 15, max: 20 },
      { label: 'Time horizon', value: 10, max: 10 },
      { label: 'Impact area', value: 10, max: 10 },
      { label: 'Signal strength', value: 12, max: 10 },
    ],
    related: ['AI Ascendance', 'Institutional Rewiring'],
  },
]

const TENSIONS = [
  { a: 'Efficiency', b: 'Humanity', note: 'Operational gains from AI vs. the irreducibly human dimensions of care' },
  { a: 'Scale', b: 'Personalization', note: 'Growth through standardization vs. differentiation through individual attention' },
  { a: 'Innovation', b: 'Trust', note: 'Deploying new capabilities fast vs. earning legitimacy for each one' },
  { a: 'Access', b: 'Quality', note: 'Expanding care reach vs. protecting clinical standards under constraint' },
  { a: 'Intelligence', b: 'Judgment', note: 'What AI decides vs. what humans must own' },
]

const QUESTIONS = [
  'What assumptions about healthcare delivery were built for a world of scarce intelligence — and which of those can now be rethought?',
  'Which parts of our operating model should be redesigned rather than optimized? Where does improvement compound the wrong model?',
  'What role should AI play in organizational decision-making, and what governance must exist before we expand that role?',
  'How should the new CEO establish growth credibility while building — not eroding — trust among workforce, patients, and regulators?',
]

const PROVOCATIONS = [
  {
    text: 'What if healthcare\'s primary scarcity is no longer expertise but attention?',
    implication: 'If AI handles diagnostic pattern recognition, the scarce resource shifts to the human moments that require presence, context, and care.',
  },
  {
    text: 'What if patients increasingly trust AI for information and humans for decisions — and the distinction between those moments is the real design challenge?',
    implication: 'Trust architecture becomes a product decision, not a communications afterthought.',
  },
  {
    text: 'What if the workforce shortage is partially a role design problem, not a supply problem?',
    implication: 'Roles built for intelligence scarcity may be recruiting the wrong people for the wrong work.',
  },
]

const SIGNALS = [
  {
    id: 's1',
    type: 'Pattern',
    momentum: 'Strengthening',
    title: 'AI diagnostic tools reach clinical parity in radiology and pathology',
    source: 'New England Journal of Medicine',
    sourceType: 'Academic',
    date: 'May 2026',
    interpretation: 'Clinical AI is no longer experimental in key diagnostic domains — it is achieving evidence-based legitimacy. Healthcare leaders now face a deployment decision, not a readiness question.',
  },
  {
    id: 's2',
    type: 'Pattern',
    momentum: 'Strengthening',
    title: 'Enterprise AI deployment accelerates across Fortune 500',
    source: 'McKinsey & Company',
    sourceType: 'Research',
    date: 'May 2026',
    interpretation: 'AI adoption is becoming a baseline operational expectation. Organizations that have not deployed AI in core workflows risk falling behind peers on cost structure and speed.',
  },
  {
    id: 's3',
    type: 'Event',
    momentum: 'Complicating',
    title: 'EU AI Act enters enforcement phase for high-risk systems',
    source: 'European Commission',
    sourceType: 'Government',
    date: 'April 2026',
    interpretation: 'Healthcare leaders now face a compliance requirement, not a planning item. Those who treated AI governance as a downstream concern face retroactive remediation at scale.',
  },
  {
    id: 's4',
    type: 'Pattern',
    momentum: 'Complicating',
    title: 'Worker anxiety about AI displacement reaches five-year high',
    source: 'Gallup',
    sourceType: 'Research',
    date: 'May 2026',
    interpretation: 'Only 29% of workers say their employer has communicated a clear plan for AI and work. The gap between deployment velocity and organizational communication is creating a workforce trust deficit.',
  },
  {
    id: 's5',
    type: 'Tension',
    momentum: 'Complicating',
    title: 'Public trust in AI-assisted decisions diverges sharply by domain',
    source: 'Edelman',
    sourceType: 'Research',
    date: 'May 2026',
    interpretation: 'Only 44% of the public trusts AI in healthcare diagnosis. Trust is higher when humans are visibly involved in final decisions. Trust architecture is a product requirement, not a communications function.',
  },
  {
    id: 's6',
    type: 'Pattern',
    momentum: 'Complicating',
    title: 'Human-AI teams outperform AI alone on complex judgment tasks',
    source: 'MIT Sloan Management Review',
    sourceType: 'Academic',
    date: 'February 2026',
    interpretation: 'The research is shifting from "will AI replace humans" to "how should humans and AI be organized together." Complementarity — not substitution — produces superior outcomes.',
  },
  {
    id: 's7',
    type: 'Pattern',
    momentum: 'Strengthening',
    title: 'AI agents move from assistants to operators',
    source: 'OpenAI',
    sourceType: 'Company',
    date: 'June 2026',
    interpretation: 'The market is moving beyond AI as conversational interface toward AI as operational actor. Organizations that have not mapped workflow candidates for agent delegation risk ungoverned AI activity.',
  },
]

const SNAPSHOT = {
  id: 'snapshot-healthcare-ceo-growth-2026-06-11',
  date: 'June 11, 2026',
  label: 'Initial baseline',
  summary: 'Three forces rank in the high-90s, reflecting the density of AI, workforce, and trust dynamics converging in healthcare at this moment.',
  isActive: true,
}

const DISCUSSION_PROMPTS = [
  'Which of these forces will hit first — and what would an early signal look like?',
  'Where is the organization most exposed if the CEO doesn\'t act in year one?',
  'Which tension is most likely to define this CEO\'s legacy?',
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-5 mb-8">
      <span className="font-mono text-xs text-zinc-600 shrink-0 tabular-nums">{number}</span>
      <div className="flex-1 flex items-center gap-4">
        <h2 className="text-[11px] uppercase tracking-[0.15em] text-zinc-500 font-medium shrink-0">{title}</h2>
        <div className="flex-1 h-px bg-zinc-800" />
      </div>
    </div>
  )
}

function ScoreRing({
  score,
  color,
  track,
}: {
  score: number
  color: string
  track: string
}) {
  const r = 34
  const circ = 2 * Math.PI * r
  const dash = (score / 100) * circ
  return (
    <svg width="84" height="84" viewBox="0 0 84 84" className="shrink-0">
      <circle cx="42" cy="42" r={r} fill="none" stroke={track} strokeWidth="5" />
      <circle
        cx="42"
        cy="42"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 42 42)"
      />
      <text
        x="42"
        y="46"
        textAnchor="middle"
        fontSize="22"
        fontWeight="700"
        fill="white"
        fontFamily="var(--font-mono, monospace)"
      >
        {score}
      </text>
    </svg>
  )
}

function BreakdownBar({
  label,
  value,
  max,
  color,
}: {
  label: string
  value: number
  max: number
  color: string
}) {
  const capped = Math.min(value, max)
  const pct = (capped / max) * 100
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] text-zinc-500 w-40 shrink-0 truncate">{label}</span>
      <div className="flex-1 h-[3px] bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-[11px] text-zinc-600 tabular-nums w-8 text-right shrink-0">
        {value}/{max}
      </span>
    </div>
  )
}

const momentumColors: Record<string, string> = {
  Strengthening: 'text-emerald-400 border-emerald-900 bg-emerald-950',
  Complicating: 'text-amber-400 border-amber-900 bg-amber-950',
  Weakening: 'text-red-400 border-red-900 bg-red-950',
  Neutral: 'text-zinc-400 border-zinc-700 bg-zinc-800',
}

const typeColors: Record<string, string> = {
  Pattern: 'text-violet-400 border-violet-900 bg-violet-950',
  Event: 'text-blue-400 border-blue-900 bg-blue-950',
  Tension: 'text-orange-400 border-orange-900 bg-orange-950',
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BriefPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur border-b border-zinc-800/60">
        <div className="max-w-[1440px] mx-auto px-8 h-12 flex items-center gap-5">
          <Link
            href="/"
            className="text-[11px] text-zinc-600 hover:text-zinc-400 transition-colors font-mono tracking-wider"
          >
            SCE
          </Link>
          <span className="text-zinc-800">·</span>
          <span className="text-[13px] text-zinc-300 font-medium">Healthcare CEO Transition · Growth</span>
          <span className="text-zinc-800">·</span>
          <span className="text-[11px] text-zinc-600">3–5 Years</span>
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm border border-emerald-800 text-emerald-500 bg-emerald-950/50">
              Active Monitoring
            </span>
            <span className="text-[11px] text-zinc-600 font-mono">Jun 11, 2026</span>
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="max-w-[1440px] mx-auto flex gap-0">

        {/* ── Main content ── */}
        <main className="flex-1 min-w-0 px-8 py-12 flex flex-col gap-20">

          {/* ── 01 · Executive Brief ── */}
          <section>
            <SectionHeader number="01" title="Executive Brief" />

            {/* Opening pull-quote */}
            <p
              className="text-2xl leading-relaxed text-zinc-100 mb-8 font-serif italic"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              &ldquo;{EXECUTIVE_BRIEF.opening}&rdquo;
            </p>

            {/* Prose */}
            <div className="flex flex-col gap-5 max-w-3xl">
              {EXECUTIVE_BRIEF.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] text-zinc-400 leading-[1.8]">
                  {p}
                </p>
              ))}
            </div>

            {/* Meta strip */}
            <div className="mt-10 pt-8 border-t border-zinc-800 flex flex-wrap gap-8">
              {EXECUTIVE_BRIEF.meta.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-600">{m.label}</span>
                  <span className="text-sm font-medium text-zinc-300 font-mono">{m.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── 02 · Ranked Forces ── */}
          <section>
            <SectionHeader number="02" title="Ranked Forces" />
            <div className="flex flex-col gap-6">
              {FORCES.map((force) => (
                <div
                  key={force.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden"
                >
                  {/* Card header */}
                  <div className="px-8 pt-7 pb-6 flex items-start gap-6">
                    <div className="flex flex-col items-start gap-2 min-w-0 flex-1">
                      <div className="flex items-center gap-4">
                        <span
                          className="font-mono text-xs tabular-nums"
                          style={{ color: force.scoreColor + '99' }}
                        >
                          0{force.rank}
                        </span>
                        <h3
                          className="text-xl font-semibold text-white"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          {force.name}
                        </h3>
                      </div>
                      <p className="text-sm text-zinc-500 ml-8">{force.description}</p>
                    </div>
                    <ScoreRing
                      score={force.score}
                      color={force.scoreColor}
                      track={force.scoreTrack}
                    />
                  </div>

                  {/* Why surfaced */}
                  <div className="mx-8 mb-6 rounded-lg bg-zinc-950 border border-zinc-800 px-6 py-5">
                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">
                      Why this force surfaced
                    </p>
                    <p className="text-[14px] text-zinc-300 leading-[1.75]">{force.why}</p>
                  </div>

                  {/* Score breakdown */}
                  <div className="mx-8 mb-6 flex flex-col gap-2.5">
                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1">
                      Score breakdown
                    </p>
                    {force.breakdown.map((b) => (
                      <BreakdownBar
                        key={b.label}
                        label={b.label}
                        value={b.value}
                        max={b.max}
                        color={force.scoreColor}
                      />
                    ))}
                  </div>

                  {/* Footer pills */}
                  <div className="px-8 pb-6 flex flex-wrap gap-2">
                    <span className="text-[11px] px-2.5 py-1 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-400">
                      Momentum: {force.momentum}
                    </span>
                    <span className="text-[11px] px-2.5 py-1 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-400">
                      Confidence: {force.confidence}
                    </span>
                    {force.related.map((r) => (
                      <span
                        key={r}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-zinc-800 text-zinc-500"
                      >
                        → {r}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 03 · Strategic Tensions ── */}
          <section>
            <SectionHeader number="03" title="Strategic Tensions" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TENSIONS.map((t) => (
                <div
                  key={t.a}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-6 py-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-white">{t.a}</span>
                    <span className="text-zinc-600 text-xs">↔</span>
                    <span className="text-sm font-medium text-white">{t.b}</span>
                  </div>
                  <p className="text-[12px] text-zinc-500 leading-relaxed">{t.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 04 · Strategic Questions ── */}
          <section>
            <SectionHeader number="04" title="Strategic Questions" />
            <div className="flex flex-col gap-4">
              {QUESTIONS.map((q, i) => (
                <div
                  key={i}
                  className="flex gap-6 rounded-xl border border-zinc-800 bg-zinc-900/40 px-7 py-6"
                >
                  <span className="font-mono text-xs text-zinc-700 shrink-0 mt-0.5 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[15px] text-zinc-300 leading-[1.75]">{q}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 05 · Provocations ── */}
          <section>
            <SectionHeader number="05" title="Provocations" />
            <div className="flex flex-col gap-6">
              {PROVOCATIONS.map((p, i) => (
                <div key={i} className="flex gap-6">
                  <div
                    className="w-px shrink-0 mt-1"
                    style={{ backgroundColor: '#27272a' }}
                  />
                  <div className="flex flex-col gap-3">
                    <p
                      className="text-xl text-zinc-200 leading-[1.6] italic"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      &ldquo;{p.text}&rdquo;
                    </p>
                    <p className="text-[13px] text-zinc-500 leading-relaxed">{p.implication}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 06 · Signals ── */}
          <section>
            <SectionHeader number="06" title="Signals" />
            <p className="text-[12px] text-zinc-600 -mt-4 mb-6">
              {SIGNALS.length} signals tracked · ordered by relevance to context
            </p>
            <div className="flex flex-col gap-3">
              {SIGNALS.map((s) => (
                <div
                  key={s.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-6 py-5 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <div className="flex flex-wrap gap-1.5">
                        <span
                          className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${typeColors[s.type]}`}
                        >
                          {s.type}
                        </span>
                        <span
                          className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${momentumColors[s.momentum]}`}
                        >
                          {s.momentum}
                        </span>
                      </div>
                      <p className="text-[14px] font-medium text-zinc-100 leading-snug">{s.title}</p>
                    </div>
                    <div className="shrink-0 flex flex-col items-end gap-1">
                      <span className="text-[11px] text-zinc-600">{s.date}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded border border-zinc-700 bg-zinc-800 text-zinc-500">
                        {s.sourceType}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[11px] text-zinc-500 shrink-0 mt-0.5">{s.source}</span>
                    <span className="text-zinc-800 text-[11px] mt-0.5">—</span>
                    <p className="text-[13px] text-zinc-400 leading-[1.65]">{s.interpretation}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

        {/* ── Right rail ── */}
        <aside className="w-[280px] shrink-0 border-l border-zinc-800/60">
          <div className="sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto px-6 py-8 flex flex-col gap-8">

            {/* Context lenses */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600">Context</p>
              <div className="flex flex-col gap-2">
                {LENSES.map((l) => (
                  <div
                    key={l.type}
                    className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 border"
                    style={{
                      borderColor: l.border + '30',
                      backgroundColor: l.bg + '08',
                    }}
                  >
                    <span className="text-[10px] text-zinc-600">{l.type}</span>
                    <span
                      className="text-[12px] font-medium"
                      style={{ color: l.color + 'cc' }}
                    >
                      {l.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-800" />

            {/* Snapshot selector */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600">Snapshots</p>
              <div className="flex flex-col gap-2">
                <div className="rounded-lg border border-emerald-800/50 bg-emerald-950/20 px-4 py-3 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-emerald-400">{SNAPSHOT.label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] text-zinc-600 font-mono">{SNAPSHOT.date}</span>
                  <p className="text-[11px] text-zinc-500 leading-relaxed mt-1">
                    {SNAPSHOT.summary}
                  </p>
                </div>
              </div>
              <button
                disabled
                className="w-full text-[11px] text-zinc-600 border border-zinc-800 rounded-lg px-3 py-2 cursor-not-allowed"
              >
                + Add snapshot
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-800" />

            {/* Discussion rail */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600">Discussion</p>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Start with any of these questions, or use the context to frame your own.
              </p>
              <div className="flex flex-col gap-2">
                {DISCUSSION_PROMPTS.map((prompt, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-zinc-800 px-4 py-3 cursor-pointer hover:border-zinc-700 hover:bg-zinc-800/30 transition-colors group"
                  >
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[10px] text-zinc-700 mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[12px] text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                        {prompt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-dashed border-zinc-800 px-4 py-4 flex items-center gap-3 cursor-pointer hover:border-zinc-700 transition-colors">
                <span className="text-zinc-700 text-lg">+</span>
                <span className="text-[11px] text-zinc-600">Add discussion note</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-800" />

            {/* Export placeholder */}
            <div className="flex flex-col gap-2">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600">Export</p>
              <div className="flex flex-col gap-1.5">
                {['PDF Brief', 'Workshop Deck', 'Share Link'].map((label) => (
                  <button
                    key={label}
                    disabled
                    className="w-full text-left text-[11px] text-zinc-600 px-3 py-2 rounded-lg border border-zinc-800 cursor-not-allowed flex items-center justify-between"
                  >
                    {label}
                    <span className="text-zinc-800">→</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </aside>

      </div>
    </div>
  )
}
