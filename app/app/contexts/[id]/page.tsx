import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getContextWithRelations, getAllContexts } from '@/lib/data'
import { LensTag } from '@/components/LensTag'
import { ForceCard } from '@/components/ForceCard'
import { SignalCard } from '@/components/SignalCard'
export async function generateStaticParams() {
  return getAllContexts().map((c) => ({ id: c.id }))
}

export default async function ContextPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const data = getContextWithRelations(id)
  if (!data) notFound()

  const { context, forces, signals, snapshots } = data
  const snapshot = snapshots[0] ?? null

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <header className="border-b border-zinc-800 px-6 py-4 flex items-center gap-4">
        <Link href="/" className="text-xs text-zinc-500 hover:text-white transition-colors">
          ← All Contexts
        </Link>
        <span className="text-zinc-700">|</span>
        <span className="text-xs text-zinc-500">Strategic Context Engine</span>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-12">

        {/* Context header */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-emerald-800 text-emerald-400 bg-emerald-950">
              {context.status}
            </span>
            {snapshot && (
              <span className="text-xs text-zinc-500">
                Snapshot: {snapshot.snapshot_date}
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold tracking-tight">{context.name}</h1>
          <p className="text-zinc-400 text-base leading-relaxed max-w-3xl">
            {context.context_summary.trim()}
          </p>
        </section>

        {/* Lenses */}
        <section className="flex flex-col gap-3">
          <SectionLabel>Context Lenses</SectionLabel>
          <div className="flex flex-wrap gap-3">
            {Object.entries(context.selected_lenses).map(([type, value]) => (
              <LensTag key={type} type={type} value={value} />
            ))}
          </div>
        </section>

        {/* Ranked Forces */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Ranked Forces</SectionLabel>
          <p className="text-xs text-zinc-500 -mt-2">
            Scored against industry, leadership situation, strategic challenge, time horizon, impact area, and signal strength.
          </p>
          <div className="flex flex-col gap-4">
            {forces.map((rf, i) => (
              <ForceCard key={rf.force_id} ranked={rf} rank={i} />
            ))}
          </div>
        </section>

        {/* Strategic Tensions */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Strategic Tensions</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {context.strategic_tensions.map((t) => (
              <div key={t} className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span className="text-sm text-zinc-300">{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic Questions */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Strategic Questions</SectionLabel>
          <div className="flex flex-col gap-3">
            {context.strategic_questions.map((q, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-4">
                <span className="text-zinc-600 font-mono text-sm shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-sm text-zinc-300 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Provocations */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Provocations</SectionLabel>
          <div className="flex flex-col gap-3">
            {context.provocations.map((p, i) => (
              <div key={i} className="rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-4">
                <p className="text-sm text-zinc-400 italic leading-relaxed">"{p.trim()}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tracked Signals */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Tracked Signals</SectionLabel>
          <p className="text-xs text-zinc-500 -mt-2">{signals.length} signals monitored for this context</p>
          <div className="flex flex-col gap-4">
            {signals.map((s) => (
              <SignalCard key={s.id} signal={s} />
            ))}
          </div>
        </section>

        {/* Snapshot */}
        {snapshot && (
          <section className="flex flex-col gap-4">
            <SectionLabel>Latest Snapshot</SectionLabel>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">{snapshot.id}</span>
                <span className="text-xs text-zinc-500">{snapshot.snapshot_date}</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{snapshot.summary.trim()}</p>
              <div className="border-t border-zinc-800 pt-4">
                <p className="text-[11px] uppercase tracking-widest text-zinc-500 mb-2">Change since previous</p>
                <p className="text-sm text-zinc-400">{snapshot.change_since_previous.summary}</p>
              </div>
            </div>
          </section>
        )}

      </main>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-medium">{children}</h2>
      <div className="flex-1 h-px bg-zinc-800" />
    </div>
  )
}
