import type { ContextResult } from '@/data/mockContext'

interface Props {
  context: ContextResult
}

export function ContextHero({ context }: Props) {
  const meta = [
    { label: 'Industry', value: context.industry },
    { label: 'Leadership Situation', value: context.leadershipSituation },
    { label: 'Strategic Challenge', value: context.strategicChallenge },
    { label: 'Time Horizon', value: context.timeHorizon },
  ]

  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 pt-10 pb-12">
        {/* Eyebrow + controls row */}
        <div className="flex items-center justify-between mb-9">
          <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
            Context Results
          </span>
          <div className="flex items-center gap-5">
            <button className="text-[12px] text-zinc-400 hover:text-zinc-700 transition-colors">
              Edit lens
            </button>
            <button className="text-[12px] text-zinc-400 hover:text-zinc-700 transition-colors">
              Export brief
            </button>
            <div className="relative">
              <button className="flex items-center gap-1.5 text-[12px] text-zinc-500 border border-zinc-200 rounded-md px-3 py-1.5 hover:border-zinc-300 transition-colors">
                <span className="text-zinc-400">Snapshot:</span>
                <span className="text-zinc-700">{context.snapshot}</span>
                <svg className="w-3 h-3 text-zinc-400 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main headline */}
        <h1
          className="text-[42px] leading-[1.15] text-zinc-900 max-w-3xl mb-9 font-serif"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Healthcare, through a{' '}
          <em>CEO transition</em>, in pursuit of growth.
        </h1>

        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {meta.map((m, i) => (
            <div key={m.label} className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-zinc-400">{m.label}:</span>
                <span className="text-[12px] text-zinc-700 font-medium">{m.value}</span>
              </div>
              {i < meta.length - 1 && (
                <span className="text-zinc-200 select-none">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
