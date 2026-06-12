import type { StrategicTension } from '@/data/mockContext'

interface Props {
  tensions: StrategicTension[]
}

const LEAN_ACCENT = '#6d28d9'

export function StrategicTensions({ tensions }: Props) {
  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex items-baseline justify-between mb-2">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
            Strategic Tensions
          </p>
          <span className="text-[11px] text-zinc-400 max-w-sm text-right hidden md:block leading-relaxed">
            Not problems to solve — leadership choices to make.
          </span>
        </div>

        <div className="mt-8 border-t border-zinc-100 flex flex-col">
          {tensions.map((t, i) => {
            const leansLeft = t.leanPosition < 48
            const leansRight = t.leanPosition > 52
            const isHolding = !leansLeft && !leansRight

            const leftColor = leansLeft ? LEAN_ACCENT : '#3f3f46'
            const rightColor = leansRight ? LEAN_ACCENT : '#a1a1aa'

            return (
              <div key={i} className="border-b border-zinc-100 py-8">
                {/* Two-pole editorial row */}
                <div className="flex items-center gap-0">
                  {/* Left pole */}
                  <div className="flex-1 pr-6 text-right">
                    <span
                      className="text-[20px] font-medium leading-none transition-colors"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        color: leftColor,
                      }}
                    >
                      {t.left}
                    </span>
                  </div>

                  {/* Center divider + lean badge */}
                  <div className="flex flex-col items-center shrink-0 gap-2">
                    <div className="w-px h-8 bg-zinc-200" />
                    <span
                      className="text-[9px] uppercase tracking-[0.15em] whitespace-nowrap px-2.5 py-1 rounded-full border"
                      style={
                        isHolding
                          ? { color: '#a1a1aa', borderColor: '#e4e4e7', backgroundColor: '#fafafa' }
                          : { color: LEAN_ACCENT, borderColor: LEAN_ACCENT + '30', backgroundColor: LEAN_ACCENT + '08' }
                      }
                    >
                      {t.lean}
                    </span>
                    <div className="w-px h-8 bg-zinc-200" />
                  </div>

                  {/* Right pole */}
                  <div className="flex-1 pl-6">
                    <span
                      className="text-[20px] font-medium leading-none transition-colors"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        color: rightColor,
                      }}
                    >
                      {t.right}
                    </span>
                  </div>
                </div>

                {/* Interpretation text */}
                <p className="mt-4 text-[13px] text-zinc-400 leading-[1.7] max-w-2xl mx-auto text-center">
                  {t.interpretation}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
