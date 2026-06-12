'use client'

import { useState } from 'react'
import type { StrategicImplication } from '@/data/mockContext'

interface Props {
  implications: StrategicImplication[]
}

const numbers = ['01', '02', '03', '04', '05']

export function StrategicImplications({ implications }: Props) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-5">
            Strategic Implications
          </p>
          <p
            className="text-[28px] text-zinc-800 leading-[1.4] max-w-2xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            What leaders may need to pay attention to, rethink, or do differently.
          </p>
        </div>

        {/* Vertical list */}
        <div className="border-t border-zinc-100">
          {implications.map((imp, i) => {
            const isOpen = openId === imp.id
            return (
              <div key={imp.id} className="border-b border-zinc-100">
                <button
                  onClick={() => setOpenId(isOpen ? null : imp.id)}
                  className="w-full text-left py-8 flex items-start gap-8 group"
                >
                  {/* Number */}
                  <span className="font-mono text-[11px] text-zinc-300 mt-[4px] tabular-nums shrink-0 w-5">
                    {numbers[i]}
                  </span>

                  {/* Label */}
                  <span
                    className="text-[11px] uppercase tracking-[0.14em] text-zinc-400 font-medium shrink-0 w-32 mt-[5px] hidden sm:block"
                  >
                    {imp.label}
                  </span>

                  {/* Main implication */}
                  <p
                    className="flex-1 text-[20px] text-zinc-700 leading-[1.55] group-hover:text-zinc-900 transition-colors pr-4"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {imp.implication}
                  </p>

                  {/* Expand toggle */}
                  <div className="shrink-0 mt-1.5">
                    <div
                      className="w-6 h-6 rounded-full border border-zinc-200 group-hover:border-zinc-300 flex items-center justify-center transition-colors"
                    >
                      <svg
                        className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M4 12h16" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <div className="pb-8 pl-[5.75rem] pr-8">
                    <p className="text-[15px] text-zinc-500 leading-[1.8] max-w-2xl border-l-2 border-zinc-100 pl-5">
                      {imp.detail}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
