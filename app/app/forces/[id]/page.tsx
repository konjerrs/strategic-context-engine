import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allForces, getForceById } from '@/data/forces'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export async function generateStaticParams() {
  return allForces.map((f) => ({ id: f.id }))
}

const momentumColor: Record<string, string> = {
  Rising: '#059669',
  Stable: '#a1a1aa',
  Declining: '#dc2626',
}

const momentumIcon: Record<string, string> = {
  Rising: '↑',
  Stable: '→',
  Declining: '↓',
}

const confidenceBadge: Record<string, string> = {
  High: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  Medium: 'text-amber-700 bg-amber-50 border-amber-200',
  Low: 'text-zinc-500 bg-zinc-50 border-zinc-200',
}

const implicationAreas = [
  { key: 'leadership', label: 'Leadership' },
  { key: 'talent', label: 'Talent' },
  { key: 'operatingModel', label: 'Operating Model' },
  { key: 'growth', label: 'Growth' },
  { key: 'governance', label: 'Governance' },
] as const

export default async function ForceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const force = getForceById(id)
  if (!force) notFound()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Back nav */}
      <div className="max-w-6xl mx-auto px-8 pt-8">
        <Link
          href="/forces"
          className="inline-flex items-center gap-2 text-[12px] text-zinc-400 hover:text-zinc-700 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Forces
        </Link>
      </div>

      {/* ── FORCE HEADER ── */}
      <div className="max-w-6xl mx-auto px-8 pt-12 pb-16 border-b border-zinc-100">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: force.accentHex }}
          />
          <span
            className="text-[11px] font-medium"
            style={{ color: momentumColor[force.momentum] }}
          >
            {momentumIcon[force.momentum]} {force.momentum}
          </span>
          <span className="text-zinc-200">·</span>
          <span
            className={`text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 rounded-full border ${confidenceBadge[force.confidence]}`}
          >
            {force.confidence} confidence
          </span>
          <span className="text-zinc-200">·</span>
          <span className="text-[11px] text-zinc-400">Updated {force.lastUpdated}</span>
        </div>

        <h1
          className="text-[42px] text-zinc-900 leading-[1.15] mb-5 max-w-3xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {force.name}
        </h1>
        <p className="text-[18px] text-zinc-500 leading-relaxed max-w-2xl">
          {force.shortLine}
        </p>
      </div>

      {/* ── CORE THESIS ── */}
      <div className="max-w-6xl mx-auto px-8 pt-12 pb-10 border-b border-zinc-100">
        <p
          className="text-[26px] text-zinc-900 leading-[1.45] max-w-3xl"
          style={{ fontFamily: 'var(--font-serif)', borderLeft: `3px solid ${force.accentHex}`, paddingLeft: '1.25rem' }}
        >
          {force.coreThesis}
        </p>
      </div>

      {/* ── EXECUTIVE SUMMARY ── */}
      <div className="max-w-6xl mx-auto px-8 py-16 border-b border-zinc-100">
        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-8">
          Executive Summary
        </p>
        <p className="text-[17px] text-zinc-600 leading-[1.85] max-w-3xl">
          {force.executiveSummary}
        </p>
      </div>

      {/* ── WHAT LEADERS ARE MISSING ── */}
      <div className="max-w-6xl mx-auto px-8 py-16 border-b border-zinc-100">
        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-8">
          What Leaders Are Missing
        </p>
        <p className="text-[17px] text-zinc-700 leading-[1.85] max-w-3xl">
          {force.whatLeadersAreMissing}
        </p>
      </div>

      {/* ── WHY IT MATTERS ── */}
      <div className="max-w-6xl mx-auto px-8 py-16 border-b border-zinc-100">
        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-8">
          Why It Matters
        </p>
        <p
          className="text-[22px] text-zinc-800 leading-[1.6] max-w-3xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {force.whyItMatters}
        </p>
      </div>

      {/* ── STRATEGIC STAKES ── */}
      <div className="max-w-6xl mx-auto px-8 py-16 border-b border-zinc-100">
        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-12">
          Strategic Stakes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-emerald-600 font-medium mb-5">
              If leaders get this right
            </p>
            <ul className="flex flex-col gap-4">
              {force.strategicStakes.ifLeadersGetThisRight.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <p className="text-[14px] text-zinc-600 leading-[1.75]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-rose-600 font-medium mb-5">
              If leaders get this wrong
            </p>
            <ul className="flex flex-col gap-4">
              {force.strategicStakes.ifLeadersGetThisWrong.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                  <p className="text-[14px] text-zinc-600 leading-[1.75]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── STRATEGIC IMPLICATIONS ── */}
      <div className="max-w-6xl mx-auto px-8 py-16 border-b border-zinc-100">
        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-12">
          Strategic Implications
        </p>

        <div className="border-t border-zinc-100 flex flex-col">
          {implicationAreas.map((area, i) => (
            <div key={area.key} className="border-b border-zinc-100 py-7 flex items-start gap-8">
              <span className="font-mono text-[11px] text-zinc-300 mt-[3px] tabular-nums shrink-0 w-5">
                0{i + 1}
              </span>
              <span className="text-[10px] uppercase tracking-[0.14em] text-zinc-400 font-medium shrink-0 w-32 mt-[4px] hidden sm:block">
                {area.label}
              </span>
              <p className="text-[15px] text-zinc-600 leading-[1.8] flex-1">
                {force.implications[area.key]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROVOCATIONS ── */}
      <section className="relative overflow-hidden bg-[#0d0d0d] border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-8 py-16 relative z-10">
          <div className="flex items-baseline justify-between mb-10">
            <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-medium">
              Provocations
            </p>
            <span className="text-[11px] text-zinc-600">For discussion · not right answers</span>
          </div>

          <div className="border-t border-zinc-800">
            {force.provocations.map((p, i) => (
              <div
                key={i}
                className="border-b border-zinc-800 py-7 flex items-start gap-7 group cursor-pointer hover:bg-white/[0.025] transition-colors px-1 rounded-sm"
              >
                <span className="font-mono text-[11px] text-zinc-700 mt-[4px] tabular-nums shrink-0 w-5">
                  0{i + 1}
                </span>
                <p
                  className="text-[19px] text-zinc-300 leading-[1.6] group-hover:text-white transition-colors italic"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-140px',
            right: '-100px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            backgroundColor: force.accentHex,
            opacity: 0.15,
          }}
        />
      </section>

      {/* ── SIGNALS DRIVING THIS FORCE ── */}
      <div className="max-w-6xl mx-auto px-8 py-16 border-b border-zinc-100">
        <div className="flex items-baseline justify-between mb-10">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
            Signals Driving This Force
          </p>
          <span className="text-[11px] text-zinc-400">{force.signals.length} tracked</span>
        </div>

        <div className="border-t border-zinc-100 flex flex-col">
          {force.signals.map((sig) => (
            <div key={sig.id} className="border-b border-zinc-100 py-7 flex items-start gap-5 group">
              <div
                className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                style={{ backgroundColor: force.accentHex }}
              />
              <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-[15px] font-medium text-zinc-800 leading-snug">
                    {sig.title}
                  </p>
                  <p className="text-[13px] text-zinc-500 leading-[1.75]">
                    {sig.interpretation}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
                  <span
                    className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${confidenceBadge[sig.confidence]}`}
                  >
                    {sig.confidence}
                  </span>
                  <a
                    href={sig.sourceLink}
                    className="text-[12px] text-zinc-500 hover:text-zinc-800 underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 transition-colors"
                  >
                    {sig.source} ↗
                  </a>
                  <span className="text-[11px] text-zinc-400">{sig.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RELATED FORCES ── */}
      <div className="max-w-6xl mx-auto px-8 py-16 border-b border-zinc-100">
        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-8">
          Related Forces
        </p>
        <div className="flex flex-col gap-3">
          {force.relatedForces.map((rf) => (
            <Link
              key={rf.id}
              href={`/forces/${rf.id}`}
              className="inline-flex items-center gap-3 group w-fit"
            >
              <svg
                className="w-3.5 h-3.5 text-zinc-300 group-hover:text-zinc-600 transition-colors"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path d="M4 7h6M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[15px] text-zinc-600 group-hover:text-zinc-900 underline underline-offset-2 decoration-zinc-200 group-hover:decoration-zinc-400 transition-colors">
                {rf.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── RELEVANT CONTEXTS ── */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-8">
          Relevant Contexts
        </p>
        <div className="flex flex-col gap-3">
          {force.relevantContexts.map((ctx) => (
            <Link
              key={ctx.id}
              href={`/contexts/${ctx.id}`}
              className="inline-flex items-center gap-3 group w-fit"
            >
              <svg
                className="w-3.5 h-3.5 text-zinc-300 group-hover:text-zinc-600 transition-colors"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path d="M4 7h6M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[15px] text-zinc-600 group-hover:text-zinc-900 underline underline-offset-2 decoration-zinc-200 group-hover:decoration-zinc-400 transition-colors">
                {ctx.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
