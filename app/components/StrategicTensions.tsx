import type { StrategicTension } from '@/data/mockContext'

interface Props {
  tensions: StrategicTension[]
}

export function StrategicTensions({ tensions }: Props) {
  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex items-baseline justify-between mb-2">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
            Strategic Tensions
          </p>
          <span className="text-[11px] text-zinc-400 max-w-xs text-right hidden md:block">
            Not problems to solve — leadership choices to make. Declare where this organization should lean.
          </span>
        </div>
        <p className="text-[11px] text-zinc-400 mt-1 mb-10 md:hidden">
          Not problems to solve — leadership choices to make.
        </p>

        <div className="mt-8 border-t border-zinc-100 flex flex-col">
          {tensions.map((t, i) => (
            <div key={i} className="border-b border-zinc-100 py-7">
              <div className="flex items-center gap-6">
                {/* Left pole */}
                <span className="text-[16px] font-medium text-zinc-800 w-36 shrink-0">
                  {t.left}
                </span>

                {/* Axis */}
                <div className="flex-1 relative flex flex-col gap-2">
                  <div className="relative h-[1px] bg-zinc-150" style={{ backgroundColor: '#e8e8e8' }}>
                    {/* Marker dot */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-400"
                      style={{ left: `${t.leanPosition}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                    />
                  </div>
                  {/* Lean label — positioned under the dot */}
                  <div className="relative h-4">
                    <span
                      className="absolute text-[10px] text-zinc-400 -translate-x-1/2 whitespace-nowrap"
                      style={{ left: `${t.leanPosition}%` }}
                    >
                      {t.lean}
                    </span>
                  </div>
                </div>

                {/* Right pole */}
                <span className="text-[16px] font-medium text-zinc-400 w-36 shrink-0 text-right">
                  {t.right}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
