import Link from 'next/link'
import { allForces } from '@/data/forces'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const momentumColor: Record<string, string> = {
  Rising: '#059669',
  Stable: '#a1a1aa',
  Declining: '#dc2626',
}

const momentumIcon: Record<string, string> = {
  Rising: '↑',
  Stable: '→',
  Declining: '↓',
}

export default function ForcesLibraryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Page header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-5">
            Force Library
          </p>
          <h1
            className="text-[36px] text-zinc-900 leading-[1.25] mb-5"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            The forces shaping the strategic landscape.
          </h1>
          <p className="text-[15px] text-zinc-500 leading-[1.8]">
            Each force represents a structural shift with sustained strategic relevance. Forces are
            ranked and weighted for each leadership context.
          </p>
        </div>

        {/* Force cards — vertical editorial list */}
        <div className="border-t border-zinc-100 flex flex-col">
          {allForces.map((force, i) => (
            <Link
              key={force.id}
              href={`/forces/${force.id}`}
              className="group border-b border-zinc-100 py-10 flex items-start gap-8 hover:bg-zinc-50/60 transition-colors px-2 -mx-2 rounded-sm"
            >
              {/* Number */}
              <span className="font-mono text-[11px] text-zinc-300 mt-1 tabular-nums shrink-0 w-5">
                0{i + 1}
              </span>

              {/* Accent dot */}
              <div
                className="w-2 h-2 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: force.accentHex }}
              />

              {/* Main content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-4 mb-2">
                  <h2 className="text-[22px] font-medium text-zinc-800 group-hover:text-zinc-900 transition-colors">
                    {force.name}
                  </h2>
                  <span
                    className="text-[11px] font-medium shrink-0"
                    style={{ color: momentumColor[force.momentum] }}
                  >
                    {momentumIcon[force.momentum]} {force.momentum}
                  </span>
                </div>
                <p className="text-[15px] text-zinc-500 leading-relaxed mb-4">
                  {force.shortLine}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-[11px] text-zinc-400">
                    Updated {force.lastUpdated}
                  </span>
                  <span className="text-zinc-200">·</span>
                  <span
                    className="text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 rounded-full border"
                    style={{
                      color: force.accentHex,
                      borderColor: force.accentHex + '30',
                      backgroundColor: force.accentHex + '08',
                    }}
                  >
                    {force.confidence} confidence
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="shrink-0 mt-1.5 text-zinc-200 group-hover:text-zinc-400 transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
