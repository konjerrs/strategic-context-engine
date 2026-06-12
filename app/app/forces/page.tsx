import Link from 'next/link'
import { allForces } from '@/data/forces'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const whatChanged = [
  {
    date: 'June 2026',
    forceId: 'ai-ascendance',
    forceName: 'AI Ascendance',
    update: 'Agentic workflows moved from pilots toward operational deployment.',
  },
  {
    date: 'June 2026',
    forceId: 'trust-recalibration',
    forceName: 'Trust Recalibration',
    update: 'Trust challenges intensified as AI-enabled services raise new confidence questions.',
  },
  {
    date: 'June 2026',
    forceId: 'workforce-transformation',
    forceName: 'Workforce Transformation',
    update: 'Talent and reskilling pressure remained high across healthcare, manufacturing, and financial services.',
  },
  {
    date: 'June 2026',
    forceId: 'institutional-rewiring',
    forceName: 'Institutional Rewiring',
    update: 'Governance and regulatory questions became more central in energy, government, and financial services.',
  },
  {
    date: 'June 2026',
    forceId: 'human-augmentation',
    forceName: 'Human Augmentation',
    update: 'Human-machine collaboration gained relevance in consumer growth and healthcare talent contexts.',
  },
  {
    date: 'June 2026',
    forceId: 'economic-reconfiguration',
    forceName: 'Economic Reconfiguration',
    update: 'Industrial policy and capital reallocation accelerated across major economies, reshaping competitive dynamics.',
  },
  {
    date: 'June 2026',
    forceId: 'geopolitical-realignment',
    forceName: 'Geopolitical Realignment',
    update: 'Technology decoupling and trade fragmentation continued to create new supply chain and market access constraints.',
  },
  {
    date: 'June 2026',
    forceId: 'climate-and-resilience',
    forceName: 'Climate & Resilience',
    update: 'Mandatory disclosure requirements entered force in major markets, raising the accountability standard for climate commitments.',
  },
  {
    date: 'June 2026',
    forceId: 'resource-and-energy-transition',
    forceName: 'Resource & Energy Transition',
    update: 'Grid infrastructure constraints and critical minerals scarcity became material operational risks across sectors.',
  },
  {
    date: 'June 2026',
    forceId: 'identity-and-belonging',
    forceName: 'Identity & Belonging',
    update: 'Political pressure on corporate DEI programmes intensified, requiring clearer distinctions between cultural practice and formal programmes.',
  },
]

function ForceAbstractMark({ id, accentHex }: { id: string; accentHex: string }) {
  // Original 5 forces
  if (id === 'ai-ascendance') {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="10" stroke={accentHex} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
        <circle cx="24" cy="24" r="4" fill={accentHex} opacity="0.7" />
        <line x1="24" y1="4" x2="24" y2="14" stroke={accentHex} strokeWidth="1.5" opacity="0.5" />
        <line x1="24" y1="34" x2="24" y2="44" stroke={accentHex} strokeWidth="1.5" opacity="0.5" />
        <line x1="4" y1="24" x2="14" y2="24" stroke={accentHex} strokeWidth="1.5" opacity="0.5" />
        <line x1="34" y1="24" x2="44" y2="24" stroke={accentHex} strokeWidth="1.5" opacity="0.5" />
        <line x1="10" y1="10" x2="17" y2="17" stroke={accentHex} strokeWidth="1" opacity="0.3" />
        <line x1="31" y1="31" x2="38" y2="38" stroke={accentHex} strokeWidth="1" opacity="0.3" />
        <line x1="38" y1="10" x2="31" y2="17" stroke={accentHex} strokeWidth="1" opacity="0.3" />
        <line x1="10" y1="38" x2="17" y2="31" stroke={accentHex} strokeWidth="1" opacity="0.3" />
      </svg>
    )
  }
  if (id === 'trust-recalibration') {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6 L38 20 L24 42 L10 20 Z" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.35" />
        <path d="M24 14 L32 22 L24 34 L16 22 Z" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.55" />
        <circle cx="24" cy="22" r="3" fill={accentHex} opacity="0.75" />
      </svg>
    )
  }
  if (id === 'institutional-rewiring') {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="36" height="36" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.25" />
        <rect x="14" y="14" width="20" height="20" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.45" />
        <rect x="20" y="20" width="8" height="8" fill={accentHex} opacity="0.65" />
        <line x1="6" y1="6" x2="14" y2="14" stroke={accentHex} strokeWidth="1" opacity="0.3" />
        <line x1="42" y1="6" x2="34" y2="14" stroke={accentHex} strokeWidth="1" opacity="0.3" />
        <line x1="6" y1="42" x2="14" y2="34" stroke={accentHex} strokeWidth="1" opacity="0.3" />
        <line x1="42" y1="42" x2="34" y2="34" stroke={accentHex} strokeWidth="1" opacity="0.3" />
      </svg>
    )
  }
  if (id === 'workforce-transformation') {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="8" y1="40" x2="22" y2="18" stroke={accentHex} strokeWidth="1.5" opacity="0.4" />
        <line x1="22" y1="18" x2="30" y2="28" stroke={accentHex} strokeWidth="1.5" opacity="0.4" />
        <line x1="30" y1="28" x2="40" y2="10" stroke={accentHex} strokeWidth="2" opacity="0.75" />
        <circle cx="8" cy="40" r="2.5" fill={accentHex} opacity="0.4" />
        <circle cx="22" cy="18" r="2.5" fill={accentHex} opacity="0.55" />
        <circle cx="30" cy="28" r="2.5" fill={accentHex} opacity="0.55" />
        <circle cx="40" cy="10" r="3" fill={accentHex} opacity="0.8" />
        <line x1="8" y1="40" x2="40" y2="40" stroke={accentHex} strokeWidth="1" opacity="0.15" />
        <line x1="8" y1="40" x2="8" y2="10" stroke={accentHex} strokeWidth="1" opacity="0.15" />
      </svg>
    )
  }
  if (id === 'human-augmentation') {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="24" r="9" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.45" />
        <circle cx="32" cy="24" r="9" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.45" />
        <path d="M23 17 Q24 24 23 31" stroke={accentHex} strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M25 17 Q24 24 25 31" stroke={accentHex} strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="24" cy="24" r="3" fill={accentHex} opacity="0.7" />
      </svg>
    )
  }
  // New 5 forces
  if (id === 'economic-reconfiguration') {
    // Interlocking flow: bars of varying height suggesting market dynamics
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6"  y="28" width="6" height="14" fill={accentHex} opacity="0.3" />
        <rect x="15" y="20" width="6" height="22" fill={accentHex} opacity="0.45" />
        <rect x="24" y="14" width="6" height="28" fill={accentHex} opacity="0.6" />
        <rect x="33" y="22" width="6" height="20" fill={accentHex} opacity="0.45" />
        <polyline points="9,28 18,20 27,14 36,22" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9"  cy="28" r="2" fill={accentHex} opacity="0.6" />
        <circle cx="18" cy="20" r="2" fill={accentHex} opacity="0.6" />
        <circle cx="27" cy="14" r="2.5" fill={accentHex} opacity="0.85" />
        <circle cx="36" cy="22" r="2" fill={accentHex} opacity="0.6" />
      </svg>
    )
  }
  if (id === 'geopolitical-realignment') {
    // Compass rose / node network suggesting power reordering
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="14" stroke={accentHex} strokeWidth="1" opacity="0.2" />
        <line x1="24" y1="6"  x2="24" y2="42" stroke={accentHex} strokeWidth="1" opacity="0.2" />
        <line x1="6"  y1="24" x2="42" y2="24" stroke={accentHex} strokeWidth="1" opacity="0.2" />
        <circle cx="24" cy="10" r="3" fill={accentHex} opacity="0.5" />
        <circle cx="38" cy="24" r="3" fill={accentHex} opacity="0.5" />
        <circle cx="24" cy="38" r="3" fill={accentHex} opacity="0.35" />
        <circle cx="10" cy="24" r="3" fill={accentHex} opacity="0.35" />
        <line x1="24" y1="10" x2="38" y2="24" stroke={accentHex} strokeWidth="1.5" opacity="0.45" />
        <line x1="38" y1="24" x2="24" y2="38" stroke={accentHex} strokeWidth="1"   opacity="0.3" />
        <line x1="24" y1="10" x2="10" y2="24" stroke={accentHex} strokeWidth="1"   opacity="0.3" />
        <circle cx="24" cy="24" r="3.5" fill={accentHex} opacity="0.75" />
      </svg>
    )
  }
  if (id === 'climate-and-resilience') {
    // Wave / cycle — sinusoidal path suggesting adaptation and resilience
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 32 Q10 20 18 24 Q26 28 34 16 Q40 8 44 14" stroke={accentHex} strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round" />
        <path d="M4 38 Q10 26 18 30 Q26 34 34 22 Q40 14 44 20" stroke={accentHex} strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round" />
        <circle cx="34" cy="16" r="3"   fill={accentHex} opacity="0.75" />
        <circle cx="18" cy="24" r="2.5" fill={accentHex} opacity="0.5" />
        <line x1="34" y1="16" x2="34" y2="42" stroke={accentHex} strokeWidth="1" opacity="0.15" strokeDasharray="2 3" />
      </svg>
    )
  }
  if (id === 'resource-and-energy-transition') {
    // Lightning / energy bolt with radiating lines
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="28,6 18,26 25,26 20,42 32,20 24,20" fill={accentHex} opacity="0.65" />
        <line x1="36" y1="8"  x2="32" y2="14" stroke={accentHex} strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <line x1="40" y1="22" x2="34" y2="22" stroke={accentHex} strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <line x1="36" y1="36" x2="31" y2="31" stroke={accentHex} strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <line x1="12" y1="8"  x2="16" y2="14" stroke={accentHex} strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <line x1="8"  y1="22" x2="14" y2="22" stroke={accentHex} strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      </svg>
    )
  }
  if (id === 'identity-and-belonging') {
    // Concentric / overlapping circles suggesting community and belonging
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="22" r="10" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="30" cy="22" r="10" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="24" cy="32" r="10" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.3" />
        <circle cx="24" cy="24" r="4"  fill={accentHex} opacity="0.65" />
      </svg>
    )
  }
  return null
}

export default function ForcesLibraryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-8 pt-16 pb-12">
        <p className="text-[11px] font-medium tracking-[0.14em] text-zinc-400 uppercase mb-6">
          Current Forces at Play · June 2026
        </p>
        <h1
          className="text-[2.75rem] leading-[1.15] text-zinc-900 max-w-2xl mb-5"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Explore the forces at play reshaping the ground beneath every strategy.
        </h1>
      </div>

      {/* Force Grid */}
      <div className="max-w-6xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100 border border-zinc-100">
          {allForces.map((force) => (
            <Link
              key={force.id}
              href={`/forces/${force.id}`}
              className="group bg-white p-8 flex flex-col gap-5 hover:bg-zinc-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <ForceAbstractMark id={force.id} accentHex={force.accentHex} />
                <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] text-zinc-400">Explore</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="#a1a1aa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: force.accentHex }}
                  />
                  <h2 className="text-[13px] font-semibold text-zinc-900 tracking-tight">{force.name}</h2>
                </div>
                <p className="text-[13px] text-zinc-500 leading-relaxed">{force.shortLine}</p>
              </div>

              <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                <span className="text-[11px] text-zinc-400">
                  {force.signals.length} signal{force.signals.length !== 1 ? 's' : ''}
                </span>
                <span
                  className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                  style={{
                    color: force.accentHex,
                    backgroundColor: force.accentHex + '14',
                  }}
                >
                  {force.momentum}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* What Changed This Snapshot */}
      <div className="max-w-6xl mx-auto px-8 pb-16">
        <div className="border-t border-zinc-100 pt-12">
          <p className="text-[11px] font-medium tracking-[0.14em] text-zinc-400 uppercase mb-8">
            What Changed This Snapshot
          </p>
          <div className="space-y-0">
            {whatChanged.map((item, i) => {
              const force = allForces.find((f) => f.id === item.forceId)
              return (
                <Link
                  key={i}
                  href={`/forces/${item.forceId}`}
                  className="group flex items-start gap-6 py-4 border-b border-zinc-50 hover:bg-zinc-50 -mx-4 px-4 transition-colors"
                >
                  <span className="text-[11px] text-zinc-400 tabular-nums pt-0.5 w-20 flex-shrink-0">{item.date}</span>
                  <div className="flex items-center gap-2 w-44 flex-shrink-0 pt-0.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: force?.accentHex ?? '#71717a' }}
                    />
                    <span className="text-[12px] font-medium text-zinc-700">{item.forceName}</span>
                  </div>
                  <p className="text-[13px] text-zinc-500 leading-relaxed flex-1">{item.update}</p>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="#a1a1aa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
