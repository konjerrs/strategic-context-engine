import type { AlignmentCard } from '@/data/mockContext'

interface Props {
  cards: AlignmentCard[]
}

export function AlignmentExercise({ cards }: Props) {
  return (
    <section className="border-b border-zinc-100 bg-zinc-50/60">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex items-start justify-between gap-8 mb-12">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
                Alignment Exercise
              </p>
              <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600">
                Workshop Mode · Soon
              </span>
            </div>
            <h2
              className="text-[24px] font-serif text-zinc-800 max-w-lg leading-[1.4]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              When the team is in the room, align around what matters most.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-zinc-100 rounded-xl px-5 py-6 flex flex-col gap-3 hover:border-zinc-200 transition-colors cursor-default"
            >
              <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 font-medium">
                {card.label}
              </p>
              <p className="text-[13px] text-zinc-500 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-2 text-[13px] font-medium text-zinc-800 border border-zinc-200 rounded-lg px-5 py-2.5 hover:border-zinc-400 hover:bg-white transition-colors">
          Start a session
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
