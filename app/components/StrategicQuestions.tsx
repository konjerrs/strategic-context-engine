interface Question {
  number: string
  text: string
}

interface Props {
  questions: Question[]
}

export function StrategicQuestions({ questions }: Props) {
  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex items-baseline justify-between mb-10">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
            Strategic Questions
          </p>
          <span className="text-[11px] text-zinc-400 hidden md:block">
            For your leadership team · no right answers
          </span>
        </div>

        <div className="border-t border-zinc-100">
          {questions.map((q) => (
            <div
              key={q.number}
              className="border-b border-zinc-100 py-8 flex items-start gap-8 group cursor-pointer hover:bg-zinc-50 transition-colors px-3 -mx-3 rounded-sm"
            >
              <span className="font-mono text-[11px] text-zinc-300 mt-[6px] tabular-nums shrink-0 w-5">
                {q.number}
              </span>
              <p
                className="text-[22px] text-zinc-700 leading-[1.55] group-hover:text-zinc-900 transition-colors flex-1"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {q.text}
              </p>
              <div className="shrink-0 mt-2 ml-4">
                <div
                  className="w-7 h-7 rounded-full border border-zinc-100 group-hover:border-zinc-300 group-hover:bg-zinc-100 transition-all flex items-center justify-center"
                >
                  <svg
                    className="w-3 h-3 text-zinc-300 group-hover:text-zinc-500 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
