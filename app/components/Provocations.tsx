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
              className="border-b border-zinc-800 py-7 flex items-start gap-7 group cursor-pointer hover:bg-white/[0.025] transition-colors px-1 rounded-sm"
            >
              <span className="font-mono text-[11px] text-zinc-700 mt-[4px] tabular-nums shrink-0 w-5">
                {p.number}
              </span>
              <p
                className="text-[19px] text-zinc-300 leading-[1.6] group-hover:text-white transition-colors italic"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Large solid accent circle — bottom right, bleeds off edge */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-140px',
          right: '-100px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          backgroundColor: '#4c1d95',
          opacity: 0.35,
        }}
      />
    </section>
  )
}
