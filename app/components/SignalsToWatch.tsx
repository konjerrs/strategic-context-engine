import type { Signal } from '@/data/mockContext'

interface Props {
  signals: Signal[]
}

const confidenceColors: Record<string, string> = {
  High: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  Medium: 'text-amber-600 bg-amber-50 border-amber-200',
  Low: 'text-zinc-500 bg-zinc-50 border-zinc-200',
}

export function SignalsToWatch({ signals }: Props) {
  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex items-baseline justify-between mb-10">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
            Signals to Watch
          </p>
          <span className="text-[11px] text-zinc-400">25+ tracked · 5 shown</span>
        </div>

        {/* Column headers */}
        <div className="hidden md:grid grid-cols-[2fr_1.5fr_1fr_1fr] gap-6 px-1 pb-3 border-b border-zinc-100 mb-0">
          {['Signal', 'Potential impact', 'Source', 'Confidence'].map((h) => (
            <span key={h} className="text-[10px] uppercase tracking-[0.15em] text-zinc-300">
              {h}
            </span>
          ))}
        </div>

        <div className="flex flex-col">
          {signals.map((s) => (
            <div
              key={s.id}
              className="py-5 border-b border-zinc-100 grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1fr_1fr] gap-4 md:gap-6 group"
            >
              {/* Title + force tag */}
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-medium text-zinc-800 leading-snug group-hover:text-zinc-900 transition-colors">
                  {s.title}
                </p>
                <span className="text-[10px] text-zinc-400 border border-zinc-100 rounded-full px-2 py-0.5 w-fit">
                  {s.relatedForce}
                </span>
              </div>

              {/* Impact */}
              <p className="text-[13px] text-zinc-500 leading-relaxed md:pt-0.5">{s.potentialImpact}</p>

              {/* Source + date */}
              <div className="flex flex-col gap-1 md:pt-0.5">
                <a
                  href={s.sourceLink}
                  className="text-[13px] text-zinc-600 hover:text-zinc-900 underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 transition-colors w-fit"
                >
                  {s.sourceName}
                </a>
                <span className="text-[11px] text-zinc-400">{s.publicationDate}</span>
              </div>

              {/* Confidence */}
              <div className="md:pt-0.5">
                <span
                  className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${confidenceColors[s.confidence]}`}
                >
                  {s.confidence}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
