import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContextSelector } from '@/components/ContextSelector'
import { allContexts } from '@/data/contexts'
import { allForces } from '@/data/forces'

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

export default function HomePage() {
  const savedContexts = allContexts
  const featuredForces = allForces.slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── HERO + SELECTOR ── */}
      <div className="border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-8 pt-20 pb-20">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-6">
            Context Selector
          </p>
          <h1
            className="text-[40px] text-zinc-900 leading-[1.2] mb-4 max-w-2xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Understand what matters for your context.
          </h1>
          <p className="text-[16px] text-zinc-500 leading-relaxed mb-14 max-w-xl">
            Explore the forces shaping your industry, leadership moment, and strategic challenge.
          </p>

          <ContextSelector />
        </div>
      </div>

      {/* ── SAVED CONTEXTS ── */}
      <div className="border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="flex items-baseline justify-between mb-10">
            <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
              Saved Contexts
            </p>
            <span className="text-[11px] text-zinc-400">{savedContexts.length} available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {savedContexts.map((ctx) => (
              <Link
                key={ctx.id}
                href={`/contexts/${ctx.id}`}
                className="group border border-zinc-100 rounded-lg p-6 hover:border-zinc-200 hover:bg-zinc-50/60 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: ctx.forces[0]?.accentHex ?? '#a1a1aa' }}
                  />
                  <span className="text-[10px] uppercase tracking-[0.14em] text-zinc-400 font-medium">
                    {ctx.industry}
                  </span>
                </div>

                <h3
                  className="text-[17px] text-zinc-800 leading-[1.4] mb-3 group-hover:text-zinc-900 transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {ctx.leadershipSituation} · {ctx.strategicChallenge}
                </h3>

                <div className="flex flex-col gap-1.5 mb-5">
                  <span className="text-[12px] text-zinc-400">{ctx.timeHorizon}</span>
                </div>

                <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-zinc-400">
                      {ctx.trackedForces} forces tracked
                    </span>
                    <span className="text-zinc-200">·</span>
                    <span className="text-[11px] text-zinc-400">
                      {ctx.lastUpdated}
                    </span>
                  </div>
                  <svg
                    className="w-3.5 h-3.5 text-zinc-300 group-hover:text-zinc-500 transition-colors"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path d="M4 7h6M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── CURRENT FORCES AT PLAY ── */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex items-baseline justify-between mb-10">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium">
            Current Forces at Play
          </p>
          <Link
            href="/forces"
            className="text-[11px] text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            View all forces →
          </Link>
        </div>

        <div className="border-t border-zinc-100 flex flex-col">
          {featuredForces.map((force) => (
            <Link
              key={force.id}
              href={`/forces/${force.id}`}
              className="group border-b border-zinc-100 py-6 flex items-center gap-6 hover:bg-zinc-50/40 transition-colors px-2 -mx-2 rounded-sm"
            >
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: force.accentHex }}
              />
              <div className="flex-1 flex items-baseline gap-4 min-w-0">
                <span className="text-[16px] font-medium text-zinc-800 group-hover:text-zinc-900 transition-colors shrink-0">
                  {force.name}
                </span>
                <span className="text-[13px] text-zinc-400 truncate hidden sm:block">
                  {force.shortLine}
                </span>
              </div>
              <span
                className="text-[11px] font-medium shrink-0"
                style={{ color: momentumColor[force.momentum] }}
              >
                {momentumIcon[force.momentum]} {force.momentum}
              </span>
              <svg
                className="w-3.5 h-3.5 text-zinc-200 group-hover:text-zinc-400 transition-colors shrink-0"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path d="M4 7h6M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
