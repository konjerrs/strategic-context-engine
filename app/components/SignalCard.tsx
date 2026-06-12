import type { Signal } from '@/lib/types'

const momentumColors: Record<string, string> = {
  Strengthening: 'text-emerald-400 bg-emerald-950 border-emerald-900',
  Weakening: 'text-red-400 bg-red-950 border-red-900',
  Complicating: 'text-amber-400 bg-amber-950 border-amber-900',
  Neutral: 'text-zinc-400 bg-zinc-800 border-zinc-700',
}

const typeColors: Record<string, string> = {
  Event: 'text-blue-400 bg-blue-950 border-blue-900',
  Pattern: 'text-violet-400 bg-violet-950 border-violet-900',
  Tension: 'text-orange-400 bg-orange-950 border-orange-900',
}

interface SignalCardProps {
  signal: Signal
}

export function SignalCard({ signal }: SignalCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 flex flex-col gap-4">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-1.5 mb-2">
            <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${typeColors[signal.signal_type] ?? 'text-zinc-400 bg-zinc-800 border-zinc-700'}`}>
              {signal.signal_type}
            </span>
            <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${momentumColors[signal.momentum_impact] ?? ''}`}>
              {signal.momentum_impact}
            </span>
          </div>
          <h4 className="text-sm font-semibold text-white leading-snug">{signal.title}</h4>
        </div>
        <span className="text-xs text-zinc-500 shrink-0 tabular-nums">{signal.date_published}</span>
      </div>

      {/* Source */}
      <div className="flex items-center gap-2 text-xs text-zinc-500">
        <span className="px-1.5 py-0.5 rounded border border-zinc-700 bg-zinc-800 text-zinc-400">
          {signal.source_type}
        </span>
        <a
          href={signal.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors truncate"
        >
          {signal.source_name} — {signal.source_title}
        </a>
      </div>

      {/* Summary */}
      <p className="text-sm text-zinc-400 leading-relaxed">{signal.summary.trim()}</p>

      {/* Interpretation */}
      <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800">
        <p className="text-[11px] uppercase tracking-widest text-zinc-500 mb-1.5">Interpretation</p>
        <p className="text-sm text-zinc-300 leading-relaxed">{signal.interpretation.trim()}</p>
      </div>

      {/* Geographic scope + implications */}
      <div className="flex flex-wrap gap-1.5">
        {signal.geographic_scope.map((g) => (
          <span key={g} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400">
            {g}
          </span>
        ))}
        {signal.potential_implications.map((imp) => (
          <span key={imp} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400">
            {imp}
          </span>
        ))}
      </div>
    </div>
  )
}
