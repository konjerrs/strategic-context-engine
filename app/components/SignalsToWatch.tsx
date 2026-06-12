import type { Signal } from '@/data/mockContext'

interface Props {
  signals: Signal[]
  forceAccentMap: Record<string, string>
}

const confidenceColors: Record<string, string> = {
  High: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  Medium: 'text-amber-700 bg-amber-50 border-amber-200',
  Low: 'text-zinc-500 bg-zinc-50 border-zinc-200',
}

export function SignalsToWatch({ signals, forceAccentMap }: Props) {
  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex items-baseline justify-between mb-10">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
            Signals to Watch
          </p>
          <span className="text-[11px] text-zinc-400">25+ tracked · 5 shown</span>
        </div>

        <div className="flex flex-col border-t border-zinc-100">
          {signals.map((s) => {
            const accentHex = forceAccentMap[s.relatedForce] ?? '#a1a1aa'
            return (
              <div
                key={s.id}
                className="py-5 border-b border-zinc-100 flex gap-5 group"
              >
                {/* Force color dot */}
                <div className="pt-[5px] shrink-0">
                  <div
                    className="w-2 h-2 rounded-full mt-0.5"
                    style={{ backgroundColor: accentHex }}
                  />
                </div>

                {/* Main content */}
                <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
                  {/* Left: title + impact */}
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[14px] font-medium text-zinc-800 leading-snug group-hover:text-zinc-900 transition-colors">
                      {s.title}
                    </p>
                    <p className="text-[12px] text-zinc-400 leading-relaxed">{s.potentialImpact}</p>
                    <span
                      className="text-[10px] w-fit mt-0.5 px-2 py-0.5 rounded-full border"
                      style={{
                        color: accentHex,
                        borderColor: accentHex + '35',
                        backgroundColor: accentHex + '0a',
                      }}
                    >
                      {s.relatedForce}
                    </span>
                  </div>

                  {/* Right: source + date + confidence */}
                  <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${confidenceColors[s.confidence]}`}
                      >
                        {s.confidence}
                      </span>
                    </div>
                    <a
                      href={s.sourceLink}
                      className="text-[12px] text-zinc-500 hover:text-zinc-800 underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 transition-colors"
                    >
                      {s.sourceName} ↗
                    </a>
                    <span className="text-[11px] text-zinc-400">{s.publicationDate}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
