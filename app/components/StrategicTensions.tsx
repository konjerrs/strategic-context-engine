import type { StrategicTension } from '@/data/mockContext'

interface Props {
  tensions: StrategicTension[]
}

const LEAN_ACCENT = '#6d28d9'

function Diamond({ active }: { active: boolean }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0">
      <rect
        x="5" y="0.5"
        width="6.4" height="6.4"
        rx="0.5"
        transform="rotate(45 5 5)"
        fill={active ? LEAN_ACCENT : '#d4d4d8'}
      />
    </svg>
  )
}

export function StrategicTensions({ tensions }: Props) {
  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex items-baseline justify-between mb-2">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
            Strategic Tensions
          </p>
          <span className="text-[11px] text-zinc-400 max-w-sm text-right hidden md:block leading-relaxed">
            Not problems to solve — leadership choices to make. Declare where this organization should lean.
          </span>
        </div>

        <div className="mt-8 border-t border-zinc-100 flex flex-col">
          {tensions.map((t, i) => {
            const leansLeft = t.leanPosition < 48
            const leansRight = t.leanPosition > 52
            const isLeaning = leansLeft || leansRight

            return (
              <div key={i} className="border-b border-zinc-100 py-7">
                <div className="flex items-center gap-8">
                  {/* Left pole */}
                  <span
                    className="text-[16px] font-medium w-40 shrink-0 transition-colors"
                    style={{ color: leansLeft ? LEAN_ACCENT : '#3f3f46' }}
                  >
                    {t.left}
                  </span>

                  {/* Axis */}
                  <div className="flex-1 flex flex-col gap-2.5">
                    {/* The axis line + markers */}
                    <div className="relative flex items-center">
                      {/* Left dot */}
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 shrink-0" />
                      {/* Line segment left */}
                      <div className="flex-1 h-px bg-zinc-150" style={{ backgroundColor: '#ebebeb' }} />
                      {/* Center diamond */}
                      <div className="mx-1.5 shrink-0">
                        <Diamond active={isLeaning} />
                      </div>
                      {/* Line segment right */}
                      <div className="flex-1 h-px bg-zinc-150" style={{ backgroundColor: '#ebebeb' }} />
                      {/* Right dot */}
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 shrink-0" />
                    </div>

                    {/* Lean label */}
                    <div className="flex justify-center">
                      <span
                        className="text-[10px] tracking-wide whitespace-nowrap"
                        style={{
                          color: isLeaning ? LEAN_ACCENT : '#a1a1aa',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {t.lean}
                      </span>
                    </div>
                  </div>

                  {/* Right pole */}
                  <span
                    className="text-[16px] font-medium w-40 shrink-0 text-right transition-colors"
                    style={{ color: leansRight ? LEAN_ACCENT : '#a1a1aa' }}
                  >
                    {t.right}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
