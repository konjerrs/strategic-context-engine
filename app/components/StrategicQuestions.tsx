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
        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-10">
          Strategic Questions
        </p>

        <div className="border-t border-zinc-100">
          {questions.map((q) => (
            <div
              key={q.number}
              className="border-b border-zinc-100 py-6 flex items-start gap-7 group cursor-pointer hover:bg-zinc-50/60 transition-colors px-1 rounded-sm"
            >
              <span className="font-mono text-[11px] text-zinc-300 mt-[3px] tabular-nums shrink-0 w-5">
                {q.number}
              </span>
              <p className="text-[18px] text-zinc-700 leading-[1.6] group-hover:text-zinc-900 transition-colors font-serif" style={{ fontFamily: 'var(--font-serif)' }}>
                {q.text}
              </p>
              <svg
                className="w-4 h-4 text-zinc-200 group-hover:text-zinc-400 transition-colors shrink-0 mt-1.5 ml-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
