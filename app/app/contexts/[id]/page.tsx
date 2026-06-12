import { notFound } from 'next/navigation'
import { getContextById } from '@/data/contexts'
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
  return getAllContextIds().map((id) => ({ id }))
}

export default async function ContextResultsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const context = getContextById(id)
  if (!context) notFound()

  const forceAccentMap = Object.fromEntries(
    context.forces.map((f) => [f.name, f.accentHex])
  )

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContextHero context={context} />
      <SnapshotChanges changes={context.snapshotChanges} snapshot={context.snapshot} />
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
