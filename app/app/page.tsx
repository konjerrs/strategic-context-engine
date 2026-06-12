import Link from 'next/link'
import { getAllContexts } from '@/lib/data'
import { LensTag } from '@/components/LensTag'

export default function HomePage() {
  const contexts = getAllContexts()

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-base font-semibold tracking-tight">Strategic Context Engine</h1>
            <p className="text-xs text-zinc-500 mt-0.5">Forces × Signals × Lenses</p>
          </div>
          <span className="text-xs text-zinc-600 px-3 py-1 rounded-full border border-zinc-800">
            v1 prototype
          </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tight">Contexts</h2>
          <p className="text-sm text-zinc-400">
            Each context combines an industry, leadership situation, strategic challenge, and time horizon
            to surface the forces and signals most relevant to that moment.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {contexts.map((ctx) => (
            <Link
              key={ctx.id}
              href={`/contexts/${ctx.id}`}
              className="group rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-600 transition-colors p-6 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold group-hover:text-white text-zinc-100 transition-colors">
                    {ctx.name}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl line-clamp-2">
                    {ctx.context_summary.trim()}
                  </p>
                </div>
                <span className="shrink-0 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-emerald-800 text-emerald-400 bg-emerald-950">
                  {ctx.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {Object.entries(ctx.selected_lenses).map(([type, value]) => (
                  <LensTag key={type} type={type} value={value} />
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-zinc-600">
                <span>{ctx.ranked_forces.length} forces ranked</span>
                <span>·</span>
                <span>{ctx.tracked_signals.length} signals tracked</span>
                <span>·</span>
                <span>Updated {ctx.updated_at}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
