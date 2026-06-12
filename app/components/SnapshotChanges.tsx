import type { SnapshotChange } from '@/data/mockContext'

interface Props {
  changes: SnapshotChange[]
  snapshot: string
}

const directionIcon = {
  up: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 9.5V2.5M6 2.5L3 5.5M6 2.5L9 5.5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  stable: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2.5 6H9.5" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  down: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 2.5V9.5M6 9.5L3 6.5M6 9.5L9 6.5" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export function SnapshotChanges({ changes, snapshot }: Props) {
  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex items-center gap-3 mb-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
            Since Last Snapshot
          </p>
          <span className="text-[10px] text-zinc-300">·</span>
          <span className="text-[10px] text-zinc-400">{snapshot}</span>
        </div>

        <div className="flex flex-col gap-3">
          {changes.map((c, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0 flex items-center gap-1.5">
                {directionIcon[c.direction]}
                <span className="text-[11px] font-medium text-zinc-500 whitespace-nowrap">
                  {c.force}
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 leading-relaxed">
                — {c.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
