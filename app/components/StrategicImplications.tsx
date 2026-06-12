import type { StrategicImplication } from '@/data/mockContext'

interface Props {
  implications: StrategicImplication[]
}

export function StrategicImplications({ implications }: Props) {
  return (
    <section className="border-b border-zinc-100 bg-zinc-50/40">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex items-baseline justify-between mb-10">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
            Strategic Implications
          </p>
          <span className="text-[11px] text-zinc-400 hidden md:block">
            What these forces may mean for leadership
          </span>
        </div>

        <div className="border-t border-zinc-100 flex flex-col">
          {implications.map((imp) => (
            <div
              key={imp.id}
              className="border-b border-zinc-100 py-7 flex items-start gap-8"
            >
              <div className="w-32 shrink-0 pt-0.5">
                <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 font-medium">
                  {imp.label}
                </span>
              </div>
              <p className="text-[15px] text-zinc-600 leading-[1.75] flex-1">
                {imp.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
