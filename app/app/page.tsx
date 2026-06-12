import { mockContext } from '@/data/mockContext'
import { Header } from '@/components/Header'
import { ContextHero } from '@/components/ContextHero'
import { SnapshotChanges } from '@/components/SnapshotChanges'
import { ExecutiveBrief } from '@/components/ExecutiveBrief'
import { ForceAccordion } from '@/components/ForceAccordion'
import { StrategicTensions } from '@/components/StrategicTensions'
import { StrategicQuestions } from '@/components/StrategicQuestions'
import { StrategicImplications } from '@/components/StrategicImplications'
import { Provocations } from '@/components/Provocations'
import { SignalsToWatch } from '@/components/SignalsToWatch'
import { AlignmentExercise } from '@/components/AlignmentExercise'
import { Footer } from '@/components/Footer'

export default function ContextResultsPage() {
  const forceAccentMap = Object.fromEntries(
    mockContext.forces.map((f) => [f.name, f.accentHex])
  )

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContextHero context={mockContext} />
      <SnapshotChanges changes={mockContext.snapshotChanges} snapshot={mockContext.snapshot} />
      <ExecutiveBrief />
      <ForceAccordion forces={mockContext.forces} />
      <StrategicTensions tensions={mockContext.tensions} />
      <StrategicQuestions questions={mockContext.questions} />
      <StrategicImplications implications={mockContext.implications} />
      <Provocations provocations={mockContext.provocations} />
      <SignalsToWatch signals={mockContext.signals} forceAccentMap={forceAccentMap} />
      <AlignmentExercise cards={mockContext.alignmentCards} />
      <Footer />
    </div>
  )
}
