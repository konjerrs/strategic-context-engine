import { notFound } from 'next/navigation'
import { getContextById, allContexts } from '@/data/contexts'
import { getAllContextIds } from '@/data/generator'
import { Header } from '@/components/Header'
import { ContextHero } from '@/components/ContextHero'
import { SnapshotChanges } from '@/components/SnapshotChanges'
import { ExecutiveBrief } from '@/components/ExecutiveBrief'
import { ForceAccordion } from '@/components/ForceAccordion'
import { StrategicImplications } from '@/components/StrategicImplications'
import { Provocations } from '@/components/Provocations'
import { SignalsToWatch } from '@/components/SignalsToWatch'
import { AlignmentExercise } from '@/components/AlignmentExercise'
import { Footer } from '@/components/Footer'

export async function generateStaticParams() {
  const generatorIds = getAllContextIds().map((id) => ({ id }))
  const additionalIds = allContexts.map((ctx) => ({ id: ctx.id }))
  // Merge, deduplicate by id
  const seen = new Set<string>()
  return [...generatorIds, ...additionalIds].filter(({ id }) => {
    if (seen.has(id)) return false
    seen.add(id)
    return true
  })
}

export default async function ContextResultsPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ horizon?: string }>
}) {
  const { id } = await params
  const { horizon } = await searchParams
  const context = getContextById(id, horizon)
  if (!context) notFound()

  const forceAccentMap = Object.fromEntries(
    context.forces.map((f) => [f.name, f.accentHex])
  )

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContextHero context={context} />
      <SnapshotChanges changes={context.snapshotChanges} snapshot={context.snapshot} />

      {/* ── CORE INSIGHT ── */}
      <div className="max-w-6xl mx-auto px-8 pt-14 pb-12 border-b border-zinc-100">
        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-8">
          Core Insight
        </p>
        <p
          className="text-[24px] text-zinc-900 leading-[1.5] max-w-3xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {context.coreInsight}
        </p>
      </div>

      {/* ── WHAT LEADERS ARE MISSING ── */}
      <div className="max-w-6xl mx-auto px-8 py-12 border-b border-zinc-100">
        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-6">
          What Leaders Are Missing
        </p>
        <div className="max-w-3xl border-l-2 border-zinc-200 pl-6">
          <p className="text-[16px] text-zinc-600 leading-[1.85]">
            {context.whatLeadersAreMissing}
          </p>
        </div>
      </div>

      <ExecutiveBrief
        pullQuote={context.executiveBrief.pullQuote}
        pullQuoteAccent={context.executiveBrief.pullQuoteAccent}
        body1={context.executiveBrief.body1}
        body2={context.executiveBrief.body2}
      />
      <ForceAccordion forces={context.forces} />
      <StrategicImplications implications={context.implications} />
      <Provocations provocations={context.provocations} />
      <SignalsToWatch signals={context.signals} forceAccentMap={forceAccentMap} />
      <AlignmentExercise cards={context.alignmentCards} />
      <Footer />
    </div>
  )
}
