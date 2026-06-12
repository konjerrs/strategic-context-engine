export function ExecutiveBrief() {
  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-10">
          Executive Context Brief
        </p>

        {/* Pull quote */}
        <blockquote
          className="text-[26px] leading-[1.5] text-zinc-800 max-w-3xl mb-12 font-serif"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          For a new CEO, the challenge is not simply responding to these forces independently.
          It is understanding{' '}
          <span style={{ color: '#7c3aed' }}>how they interact.</span>
        </blockquote>

        {/* Two-column body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-5xl">
          <p className="text-[15px] text-zinc-500 leading-[1.8]">
            Healthcare organizations are entering a period of profound structural change. Advances in
            artificial intelligence, persistent workforce pressures, shifting patient expectations,
            evolving trust dynamics, and growing demands for affordability and access are converging
            simultaneously.
          </p>
          <p className="text-[15px] text-zinc-500 leading-[1.8]">
            Over the next three to five years, the organizations most likely to succeed may not be
            those with the best technology or the largest scale, but those that most effectively
            redesign themselves around changing expectations of care, trust, talent, and value creation.
          </p>
        </div>
      </div>
    </section>
  )
}
