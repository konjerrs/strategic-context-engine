interface Provocation {
  number: string
  text: string
}

interface Props {
  provocations: Provocation[]
}

export function Provocations({ provocations }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-8 py-16 relative z-10">
        <div className="flex items-baseline justify-between mb-10">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-medium">
            Provocations
          </p>
          <span className="text-[11px] text-zinc-600">For discussion · not right answers</span>
        </div>

        <div className="border-t border-zinc-800">
          {provocations.map((p) => (
            <div
              key={p.number}
              className="border-b border-zinc-800 py-7 flex items-start gap-7 group cursor-pointer hover:bg-white/[0.02] transition-colors px-1 rounded-sm"
            >
              <span className="font-mono text-[11px] text-zinc-700 mt-[3px] tabular-nums shrink-0 w-5">
                {p.number}
              </span>
              <p
                className="text-[20px] text-zinc-200 leading-[1.55] group-hover:text-white transition-colors font-serif"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Abstract accent shape */}
      <div className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none opacity-[0.04]">
        <svg viewBox="0 0 288 288" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="144" cy="144" r="140" stroke="white" strokeWidth="1.5" />
          <circle cx="144" cy="144" r="100" stroke="white" strokeWidth="1.5" />
          <circle cx="144" cy="144" r="60" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
    </section>
  )
}
