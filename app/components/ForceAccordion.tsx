'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Force } from '@/data/mockContext'

interface Props {
  forces: Force[]
}

export function ForceAccordion({ forces }: Props) {
  const [openId, setOpenId] = useState<string>(forces[0]?.id ?? '')

  return (
    <section className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex items-baseline justify-between mb-2">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
            Most Relevant Forces
          </p>
          <span className="text-[11px] text-zinc-400">
            Ranked for this context · expand to read why
          </span>
        </div>

        <div className="mt-8 border-t border-zinc-100">
          {forces.map((force) => {
            const isOpen = openId === force.id
            return (
              <div key={force.id} className="border-b border-zinc-100">
                {/* Row header — always visible */}
                <button
                  onClick={() => setOpenId(isOpen ? '' : force.id)}
                  className="w-full text-left py-5 flex items-center gap-6 group hover:bg-zinc-50/60 transition-colors px-1 rounded-sm"
                >
                  <span className="font-mono text-[11px] text-zinc-300 w-6 shrink-0 tabular-nums">
                    {force.rank}
                  </span>

                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: force.accentHex }}
                  />

                  <div className="flex-1 flex items-baseline gap-5 min-w-0">
                    {/* Force name — clickable link to detail page */}
                    <Link
                      href={`/forces/${force.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[16px] font-medium text-zinc-800 hover:text-zinc-600 underline underline-offset-2 decoration-transparent hover:decoration-zinc-300 transition-all shrink-0"
                    >
                      {force.name}
                    </Link>
                    {!isOpen && (
                      <span className="text-[13px] text-zinc-400 truncate hidden sm:block">
                        {force.shortLine}
                      </span>
                    )}
                  </div>

                  <svg
                    className={`w-4 h-4 text-zinc-300 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="pb-8 px-1 ml-12">
                    <p className="text-[13px] text-zinc-400 mb-7 italic">{force.shortLine}</p>

                    <p className="text-[15px] text-zinc-600 leading-[1.75] max-w-2xl mb-8">
                      {force.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 mb-4">
                          Why this force surfaced
                        </p>
                        <ul className="flex flex-col gap-2.5">
                          {force.whySurfaced.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span
                                className="mt-[7px] w-1 h-1 rounded-full shrink-0"
                                style={{ backgroundColor: force.accentHex }}
                              />
                              <span className="text-[13px] text-zinc-500 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 mb-4">
                          Where it shows up
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {force.whereShows.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-3 py-1 rounded-full border"
                              style={{
                                color: force.accentHex,
                                borderColor: force.accentHex + '30',
                                backgroundColor: force.accentHex + '08',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {force.topSignals && force.topSignals.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-zinc-100">
                        <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 mb-4">
                          Top signals driving this force
                        </p>
                        <div className="flex flex-col gap-2">
                          {force.topSignals.map((sig, j) => (
                            <div key={j} className="flex items-center gap-3">
                              <div
                                className="w-1 h-1 rounded-full shrink-0"
                                style={{ backgroundColor: force.accentHex }}
                              />
                              <span className="text-[13px] text-zinc-500">{sig}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Link to full detail page */}
                    <div className="mt-8 pt-6 border-t border-zinc-100">
                      <Link
                        href={`/forces/${force.id}`}
                        className="inline-flex items-center gap-2 text-[12px] text-zinc-400 hover:text-zinc-700 transition-colors group/link"
                      >
                        <span>Read full force analysis</span>
                        <svg
                          className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path d="M4 7h6M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
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
