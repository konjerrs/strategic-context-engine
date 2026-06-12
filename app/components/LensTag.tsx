const typeColors: Record<string, string> = {
  industry: 'bg-blue-950 text-blue-300 border-blue-800',
  leadership_situation: 'bg-violet-950 text-violet-300 border-violet-800',
  strategic_challenge: 'bg-amber-950 text-amber-300 border-amber-800',
  time_horizon: 'bg-emerald-950 text-emerald-300 border-emerald-800',
}

const typeLabels: Record<string, string> = {
  industry: 'Industry',
  leadership_situation: 'Leadership Situation',
  strategic_challenge: 'Strategic Challenge',
  time_horizon: 'Time Horizon',
}

interface LensTagProps {
  type: string
  value: string
}

export function LensTag({ type, value }: LensTagProps) {
  const colors = typeColors[type] ?? 'bg-zinc-800 text-zinc-300 border-zinc-700'
  return (
    <div className={`inline-flex flex-col gap-0.5 px-3 py-1.5 rounded-lg border text-xs ${colors}`}>
      <span className="uppercase tracking-wider opacity-60 text-[10px]">{typeLabels[type] ?? type}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
