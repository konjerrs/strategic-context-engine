interface ScoreBarProps {
  label: string
  value: number
  max: number
  color?: string
}

export function ScoreBar({ label, value, max, color = 'bg-indigo-500' }: ScoreBarProps) {
  const pct = Math.round((value / max) * 100)
  return (
    <div className="flex items-center gap-3">
      <span className="w-52 text-xs text-zinc-400 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
      </div>
      <span className="w-6 text-right text-xs text-zinc-400 shrink-0">{value}</span>
    </div>
  )
}
