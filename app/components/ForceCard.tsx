import type { RankedForce, Force } from '@/lib/types'
import { ScoreBar } from './ScoreBar'

interface ForceCardProps {
  ranked: RankedForce & { force: Force | null }
  rank: number
}

const scoreColors = [
  'text-emerald-400',
  'text-emerald-400',
  'text-yellow-400',
]

const ringColors = [
  'ring-emerald-800',
  'ring-emerald-900',
  'ring-yellow-900',
]

export function ForceCard({ ranked, rank }: ForceCardProps) {
  const { force, score, score_breakdown, why_this_force_surfaced } = ranked
  const colorIdx = Math.min(rank, scoreColors.length - 1)

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full bg-zinc-800 ring-1 ${ringColors[colorIdx]} flex items-center justify-center text-xs font-bold text-zinc-400`}>
            {rank + 1}
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">
              {force?.name ?? ranked.force_id}
            </h3>
            {force && (
              <p className="text-xs text-zinc-500 mt-0.5">{force.short_description}</p>
            )}
          </div>
        </div>
        <div className="shrink-0 text-right">
          <span className={`text-3xl font-bold tabular-nums ${scoreColors[colorIdx]}`}>
            {score}
          </span>
          <span className="text-zinc-600 text-sm">/100</span>
        </div>
      </div>

      {/* Why this force surfaced */}
      <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800">
        <p className="text-[11px] uppercase tracking-widest text-zinc-500 mb-2">Why this force surfaced</p>
        <p className="text-sm text-zinc-300 leading-relaxed">{why_this_force_surfaced}</p>
      </div>

      {/* Score breakdown */}
      {score_breakdown && (
        <div className="flex flex-col gap-2.5">
          <p className="text-[11px] uppercase tracking-widest text-zinc-500">Score breakdown</p>
          <ScoreBar label="Industry match" value={score_breakdown.industry_match} max={25} />
          <ScoreBar label="Leadership situation" value={score_breakdown.leadership_situation_match} max={25} />
          <ScoreBar label="Strategic challenge" value={score_breakdown.strategic_challenge_match} max={20} />
          <ScoreBar label="Time horizon" value={score_breakdown.time_horizon_match} max={10} />
          <ScoreBar label="Impact area" value={score_breakdown.impact_area_match} max={10} />
          <ScoreBar label="Signal strength" value={score_breakdown.signal_strength} max={10} />
        </div>
      )}

      {/* Force metadata pills */}
      {force && (
        <div className="flex flex-wrap gap-2">
          <Pill label={`Momentum: ${force.momentum}`} color="text-indigo-400 bg-indigo-950 border-indigo-900" />
          <Pill label={`Confidence: ${force.confidence}`} color="text-emerald-400 bg-emerald-950 border-emerald-900" />
          {force.related_forces.slice(0, 3).map((f) => (
            <Pill key={f} label={f} color="text-zinc-400 bg-zinc-800 border-zinc-700" />
          ))}
        </div>
      )}
    </div>
  )
}

function Pill({ label, color }: { label: string; color: string }) {
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border ${color}`}>{label}</span>
  )
}
