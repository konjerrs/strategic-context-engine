import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const savedSnapshots = [
  {
    id: 'healthcare-ceo-transition-growth',
    title: 'Healthcare · CEO Transition · Growth',
    headline: 'Healthcare, through a CEO transition, in pursuit of growth.',
    industry: 'Healthcare',
    situation: 'CEO Transition',
    challenge: 'Growth',
    horizon: '3–5 Years',
    snapshot: 'June 2026',
    topForce: 'AI Ascendance',
    accentHex: '#7c3aed',
    route: '/contexts/healthcare-ceo-transition-growth',
  },
  {
    id: 'financial-services-ceo-transition-trust',
    title: 'Financial Services · CEO Transition · Trust',
    headline: 'Financial services, through a CEO transition, in pursuit of trust.',
    industry: 'Financial Services',
    situation: 'CEO Transition',
    challenge: 'Trust',
    horizon: '3–5 Years',
    snapshot: 'June 2026',
    topForce: 'Trust Recalibration',
    accentHex: '#059669',
    route: '/contexts/financial-services-ceo-transition-trust',
  },
  {
    id: 'consumer-transformation-innovation',
    title: 'Consumer · Transformation · Innovation',
    headline: 'Consumer, through a transformation, in pursuit of innovation.',
    industry: 'Consumer',
    situation: 'Transformation',
    challenge: 'Innovation',
    horizon: '3–5 Years',
    snapshot: 'June 2026',
    topForce: 'AI Ascendance',
    accentHex: '#7c3aed',
    route: '/contexts/consumer-transformation-innovation',
  },
  {
    id: 'consumer-brand-growth',
    title: 'Consumer Brand · Growth',
    headline: 'Consumer brands, in pursuit of growth, as AI rewrites how audiences are built.',
    industry: 'Consumer Brand',
    situation: null,
    challenge: 'Growth',
    horizon: '3–5 Years',
    snapshot: 'June 2026',
    topForce: 'Human Augmentation',
    accentHex: '#a78bfa',
    route: '/contexts/consumer-brand-growth',
  },
  {
    id: 'technology-company-innovation',
    title: 'Technology Company · Innovation',
    headline: 'Technology companies, in pursuit of innovation, as AI redefines the competitive boundary.',
    industry: 'Technology Company',
    situation: null,
    challenge: 'Innovation',
    horizon: '3–5 Years',
    snapshot: 'June 2026',
    topForce: 'AI Ascendance',
    accentHex: '#7c3aed',
    route: '/contexts/technology-company-innovation',
  },
  {
    id: 'manufacturing-workforce-transformation',
    title: 'Manufacturing · Workforce Transformation',
    headline: 'Manufacturing, navigating workforce transformation, as skilled trades shortages intensify.',
    industry: 'Manufacturing',
    situation: null,
    challenge: 'Workforce Transformation',
    horizon: '3–5 Years',
    snapshot: 'June 2026',
    topForce: 'Workforce Transformation',
    accentHex: '#ea580c',
    route: '/contexts/manufacturing-workforce-transformation',
  },
  {
    id: 'energy-trust',
    title: 'Energy · Trust',
    headline: 'Energy organizations, rebuilding trust, as the transition demands credibility.',
    industry: 'Energy',
    situation: null,
    challenge: 'Trust',
    horizon: '3–5 Years',
    snapshot: 'June 2026',
    topForce: 'Trust Recalibration',
    accentHex: '#059669',
    route: '/contexts/energy-trust',
  },
  {
    id: 'government-transformation',
    title: 'Government · Transformation',
    headline: 'Government organizations, navigating transformation, as institutional legitimacy is renegotiated.',
    industry: 'Government',
    situation: null,
    challenge: 'Innovation',
    horizon: '3–5 Years',
    snapshot: 'June 2026',
    topForce: 'Institutional Rewiring',
    accentHex: '#b45309',
    route: '/contexts/government-transformation',
  },
  {
    id: 'energy-transformation-resilience',
    title: 'Energy · Transformation · Resilience',
    headline: 'Energy organizations, through transformation, building resilience for a system being rebuilt under pressure.',
    industry: 'Energy',
    situation: 'Transformation',
    challenge: 'Resilience',
    horizon: '5–10 Years',
    snapshot: 'June 2026',
    topForce: 'Resource & Energy Transition',
    accentHex: '#d97706',
    route: '/contexts/energy-transformation-resilience',
  },
  {
    id: 'consumer-brand-culture-change-relevance',
    title: 'Consumer Brand · Culture Change · Relevance',
    headline: 'Consumer brands, through a culture change, rebuilding relevance as authenticity becomes measurable.',
    industry: 'Consumer Brand',
    situation: 'Culture Change',
    challenge: 'Relevance',
    horizon: '3–5 Years',
    snapshot: 'June 2026',
    topForce: 'Identity & Belonging',
    accentHex: '#9333ea',
    route: '/contexts/consumer-brand-culture-change-relevance',
  },
  {
    id: 'manufacturing-growth-resource-pressure',
    title: 'Manufacturing · Growth · Resource Pressure',
    headline: 'Manufacturing organizations, in pursuit of growth, under simultaneous pressure from resource costs and workforce scarcity.',
    industry: 'Manufacturing',
    situation: null,
    challenge: 'Growth',
    horizon: '3–5 Years',
    snapshot: 'June 2026',
    topForce: 'Resource & Energy Transition',
    accentHex: '#d97706',
    route: '/contexts/manufacturing-growth-resource-pressure',
  },
]

export default function SavedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-8 pt-14 pb-20">
        <div className="mb-12">
          <p className="text-[11px] font-medium tracking-[0.14em] text-zinc-400 uppercase mb-5">
            Saved Snapshots
          </p>
          <h1
            className="text-[2.25rem] leading-[1.2] text-zinc-900 max-w-2xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Previously applied lenses.
          </h1>
          <p className="text-[14px] text-zinc-400 max-w-lg leading-relaxed">
            Snapshots from earlier sessions. Each captures the forces and signals most active for that context at the time it was generated.
          </p>
        </div>

        <div className="border-t border-zinc-100 flex flex-col">
          {savedSnapshots.map((snap) => (
            <Link
              key={snap.id}
              href={snap.route}
              className="group border-b border-zinc-100 py-7 flex items-start gap-6 hover:bg-zinc-50/50 -mx-4 px-4 transition-colors"
            >
              {/* Accent dot */}
              <div
                className="w-2 h-2 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: snap.accentHex }}
              />

              {/* Main content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3 mb-1.5 flex-wrap">
                  <p className="text-[13px] font-medium text-zinc-800 group-hover:text-zinc-900 transition-colors">
                    {snap.title}
                  </p>
                  <span className="text-zinc-200 select-none hidden sm:inline">·</span>
                  <span className="text-[11px] text-zinc-400 hidden sm:inline">{snap.snapshot}</span>
                </div>
                <p className="text-[13px] text-zinc-400 leading-relaxed max-w-2xl">
                  {snap.headline}
                </p>
              </div>

              {/* Top force */}
              <div className="shrink-0 text-right hidden md:block">
                <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-300 mb-1">Top Force</p>
                <div className="flex items-center gap-1.5 justify-end">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: snap.accentHex }}
                  />
                  <p className="text-[12px] font-medium text-zinc-600">{snap.topForce}</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="shrink-0 mt-1 text-zinc-200 group-hover:text-zinc-400 transition-colors hidden sm:block">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-zinc-50">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Apply a new lens
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
