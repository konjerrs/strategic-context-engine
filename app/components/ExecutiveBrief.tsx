interface Props {
  pullQuote?: string
  pullQuoteAccent?: string
  body1?: string
  body2?: string
}

const defaults = {
  pullQuote: 'The challenge is not simply responding to these forces independently. It is understanding',
  pullQuoteAccent: 'how they interact.',
  body1: 'Organizations across industries are entering a period of profound structural change. Advances in artificial intelligence, persistent workforce pressures, evolving trust dynamics, and growing demands for value creation are converging simultaneously.',
  body2: 'Over the next three to five years, the organizations most likely to succeed may not be those with the best technology or the largest scale — but those that most effectively redesign themselves around changing expectations.',
}

export function ExecutiveBrief({ pullQuote, pullQuoteAccent, body1, body2 }: Props) {
  const pq = pullQuote ?? defaults.pullQuote
  const pqAccent = pullQuoteAccent ?? defaults.pullQuoteAccent
  const b1 = body1 ?? defaults.body1
  const b2 = body2 ?? defaults.body2

  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-10">
          Executive Context Brief
        </p>

        {/* Pull quote */}
        <blockquote
          className="text-[26px] leading-[1.5] text-zinc-800 max-w-3xl mb-12"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {pq}{' '}
          <span style={{ color: '#7c3aed' }}>{pqAccent}</span>
        </blockquote>

        {/* Two-column body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-5xl">
          <p className="text-[15px] text-zinc-500 leading-[1.8]">{b1}</p>
          <p className="text-[15px] text-zinc-500 leading-[1.8]">{b2}</p>
        </div>
      </div>
    </section>
  )
}
