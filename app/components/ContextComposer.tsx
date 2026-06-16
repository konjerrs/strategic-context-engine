'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ForceIcon } from '@/components/ForceIcon'
import {
  type ComposerIndustry,
  type ComposerSituation,
  type ComposerChallenge,
  type ComposerHorizon,
  rankForcesForContext,
  getComposerImplications,
  getComposerSignals,
  resolveComposerRoute,
} from '@/data/composerData'

// ─── Option lists ─────────────────────────────────────────────────────────────

const industries: ComposerIndustry[] = [
  'Healthcare',
  'Financial Services',
  'Consumer',
  'Consumer Brand',
  'Technology Company',
  'Manufacturing',
  'Energy',
  'Government',
  'Consulting',
]

const situations: ComposerSituation[] = [
  'CEO Transition',
  'Transformation',
  'Culture Change',
  'Workforce Transformation',
]

const challenges: ComposerChallenge[] = [
  'Growth',
  'Trust',
  'Innovation',
  'Talent',
  'Relevance',
]

const horizons: ComposerHorizon[] = ['0–6 Months', '6–12 Months', '12–24 Months']

// ─── Pill button ─────────────────────────────────────────────────────────────

function Pill({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="text-[12px] px-3.5 py-1.5 rounded-full border transition-all whitespace-nowrap"
      style={
        selected
          ? {
              color: '#ffffff',
              backgroundColor: '#0f0f0f',
              borderColor: '#0f0f0f',
              fontWeight: 500,
            }
          : {
              color: '#71717a',
              backgroundColor: 'transparent',
              borderColor: '#e4e4e7',
            }
      }
    >
      {label}
    </button>
  )
}

// ─── Sentence builder ─────────────────────────────────────────────────────────

function SentenceBuilder({
  industry,
  situation,
  challenge,
  horizon,
}: {
  industry: ComposerIndustry
  situation: ComposerSituation | null
  challenge: ComposerChallenge
  horizon: ComposerHorizon
}) {
  const Em = ({ children }: { children: React.ReactNode }) => (
    <span className="text-zinc-900 font-medium">{children}</span>
  )
  const Dim = ({ children }: { children: React.ReactNode }) => (
    <span className="text-zinc-400">{children}</span>
  )

  return (
    <p
      className="text-[1.55rem] leading-[1.5] text-zinc-400 max-w-2xl"
      style={{ fontFamily: 'var(--font-serif)' }}
    >
      Through the lens of{' '}
      <Em>{industry}</Em>
      {situation ? (
        <>
          , during{' '}
          <Em>
            {situation === 'CEO Transition' ? 'a CEO Transition' :
             situation === 'Transformation' ? 'a Transformation' :
             situation === 'Culture Change' ? 'a Culture Change' :
             'a Workforce Transformation'}
          </Em>
        </>
      ) : null}
      , in pursuit of{' '}
      <Em>{challenge}</Em>
      , over the next{' '}
      <Em>{horizon}</Em>
      <Dim>.</Dim>
    </p>
  )
}

// ─── Chip group ───────────────────────────────────────────────────────────────

function ChipSection({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string
  options: string[]
  selected: string | null
  onSelect: (v: string) => void
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 font-medium mb-2.5">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <Pill
            key={opt}
            label={opt}
            selected={selected === opt}
            onClick={() => onSelect(opt === selected ? '' : opt)}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Score bar ────────────────────────────────────────────────────────────────

function ScoreBar({ score, accentHex }: { score: number; accentHex: string }) {
  return (
    <div className="w-32 h-1 bg-zinc-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${score}%`, backgroundColor: accentHex, opacity: 0.75 }}
      />
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function ContextComposer() {
  const router = useRouter()

  const [industry, setIndustry] = useState<ComposerIndustry>('Healthcare')
  const [situation, setSituation] = useState<ComposerSituation | null>('CEO Transition')
  const [challenge, setChallenge] = useState<ComposerChallenge>('Growth')
  const [horizon, setHorizon] = useState<ComposerHorizon>('6–12 Months')
  const [attempted, setAttempted] = useState(false)

  const rankedForces = useMemo(
    () => rankForcesForContext(industry, situation ?? 'CEO Transition', challenge, horizon),
    [industry, situation, challenge, horizon]
  )

  const implications = useMemo(
    () => getComposerImplications(industry, challenge),
    [industry, challenge]
  )

  const signals = useMemo(
    () => getComposerSignals(industry, challenge),
    [industry, challenge]
  )

  const route = resolveComposerRoute(industry, situation, challenge)

  const handleGenerate = () => {
    setAttempted(true)
    router.push(route)
  }

return (
    <div className="flex min-h-0">
      {/* ── MAIN COMPOSER ── */}
      <div className="flex-1 min-w-0 py-8 px-8 flex flex-col gap-10">

        {/* Section label */}
        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 font-medium">
          Apply a Lens
        </p>

        {/* Sentence builder */}
        <SentenceBuilder
          industry={industry}
          situation={situation}
          challenge={challenge}
          horizon={horizon}
        />

        {/* Selection groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          <ChipSection
            label="Industry"
            options={industries}
            selected={industry}
            onSelect={(v) => setIndustry((v || 'Healthcare') as ComposerIndustry)}
          />
          <ChipSection
            label="Leadership Situation"
            options={situations}
            selected={situation}
            onSelect={(v) => setSituation((v || null) as ComposerSituation | null)}
          />
          <ChipSection
            label="Strategic Challenge"
            options={challenges}
            selected={challenge}
            onSelect={(v) => setChallenge((v || 'Growth') as ComposerChallenge)}
          />
          <ChipSection
            label="Time Horizon"
            options={horizons}
            selected={horizon}
            onSelect={(v) => setHorizon((v || '6–12 Months') as ComposerHorizon)}
          />
        </div>

        {/* ── Explore button (above force ranking) ── */}
        <div className="flex items-center gap-5 -mt-4">
          <button
            onClick={handleGenerate}
            className="px-7 py-3 rounded-full text-[13px] font-medium transition-all"
            style={{ backgroundColor: '#0f0f0f', color: '#ffffff' }}
          >
            Explore Detailed View →
          </button>
          <span className="text-[12px] text-zinc-400">
            {industry}
            {situation ? ` · ${situation}` : ''}
            {` · ${challenge}`}
          </span>
        </div>

        {/* ── Live Force Ranking ── */}
        <div>
          <div className="flex items-baseline justify-between mb-5">
            <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 font-medium">
              Forces Most Active for This Context
            </p>
            <span className="text-[11px] text-zinc-300">Current forces at play · re-ranked</span>
          </div>

          <div className="border-t border-zinc-100 flex flex-col">
            {rankedForces.map((force, i) => (
              <div
                key={force.id}
                className="border-b border-zinc-50 py-4 flex items-start gap-4"
              >
                {/* Rank */}
                <span className="text-[11px] font-mono text-zinc-300 tabular-nums w-5 shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Force icon */}
                <ForceIcon id={force.id} accentHex={force.accentHex} size={24} />

                {/* Name + rationale */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-zinc-800">{force.name}</p>
                  <p className="text-[12px] text-zinc-400 leading-relaxed mt-0.5">{force.rationale}</p>
                </div>

                {/* Score bar + number */}
                <div className="flex items-center gap-3 shrink-0">
                  <ScoreBar score={force.score} accentHex={force.accentHex} />
                  <span className="text-[12px] font-medium text-zinc-400 tabular-nums w-6 text-right">
                    {force.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Supporting Modules ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Signals */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 font-medium mb-4">
              Signals for This Context
            </p>
            <div className="flex flex-col gap-0">
              {signals.map((sig, i) => (
                <div
                  key={i}
                  className="border-b border-zinc-50 py-3 flex items-start gap-3"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: sig.accentHex }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] text-zinc-700 leading-snug">{sig.title}</p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">{sig.relatedForce}</p>
                  </div>
                  <span className="text-[10px] text-zinc-300 tabular-nums shrink-0 pt-0.5">{sig.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Implications */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 font-medium mb-4">
              Implications to Explore
            </p>
            <div className="flex flex-col gap-0">
              {[
                { key: 'leadership',     label: 'Leadership',      text: implications.leadership },
                { key: 'talent',         label: 'Talent',          text: implications.talent },
                { key: 'operatingModel', label: 'Operating Model', text: implications.operatingModel },
                { key: 'governance',     label: 'Governance',      text: implications.governance },
              ].map((item) => (
                <div key={item.key} className="border-b border-zinc-50 py-3 flex items-start gap-3">
                  <span className="text-[10px] uppercase tracking-[0.12em] text-zinc-300 font-medium mt-0.5 w-24 shrink-0">
                    {item.label}
                  </span>
                  <p className="text-[12px] text-zinc-500 leading-relaxed flex-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Generate CTA ── */}
        <div className="flex items-center gap-5 pt-2 border-t border-zinc-100">
          <button
            onClick={handleGenerate}
            className="px-7 py-3 rounded-full text-[13px] font-medium transition-all"
            style={{ backgroundColor: '#0f0f0f', color: '#ffffff' }}
          >
            Explore Detailed View →
          </button>
          <span className="text-[12px] text-zinc-400">
            {industry}
            {situation ? ` · ${situation}` : ''}
            {` · ${challenge}`}
          </span>
        </div>
      </div>
    </div>
  )
}
