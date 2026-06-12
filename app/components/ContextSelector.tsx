'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const industries = [
  'Healthcare', 'Financial Services', 'Consumer', 'Technology',
  'Consumer Brand', 'Technology Company', 'Manufacturing', 'Energy', 'Government',
]
const situations = ['CEO Transition', 'Transformation', 'Culture Change']
const challenges = ['Growth', 'Trust', 'Innovation', 'Talent', 'Relevance', 'Workforce Transformation']
const horizons = ['0–2 Years', '3–5 Years', '5–10 Years']

function slug(val: string) {
  return val.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

interface ChipGroupProps {
  label: string
  options: string[]
  selected: string | null
  onSelect: (val: string) => void
}

function ChipGroup({ label, options, selected, onSelect }: ChipGroupProps) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 font-medium mb-3">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isSelected = selected === opt
          return (
            <button
              key={opt}
              onClick={() => onSelect(opt)}
              className="text-[13px] px-4 py-2 rounded-full border transition-all"
              style={
                isSelected
                  ? { color: '#0f0f0f', backgroundColor: '#f4f4f5', borderColor: '#d4d4d8', fontWeight: 500 }
                  : { color: '#a1a1aa', backgroundColor: 'transparent', borderColor: '#e4e4e7' }
              }
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function ContextSelector() {
  const router = useRouter()
  const [industry, setIndustry] = useState<string | null>(null)
  const [situation, setSituation] = useState<string | null>(null)
  const [challenge, setChallenge] = useState<string | null>(null)
  const [horizon, setHorizon] = useState<string | null>(null)
  const [attempted, setAttempted] = useState(false)

  const coreComplete = industry && challenge

  const handleGenerate = () => {
    setAttempted(true)
    if (!coreComplete) return
    const contextId = situation
      ? `${slug(industry)}-${slug(situation)}-${slug(challenge)}`
      : `${slug(industry)}-${slug(challenge)}`
    router.push(`/contexts/${contextId}`)
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
        <ChipGroup label="Industry"            options={industries} selected={industry}   onSelect={setIndustry} />
        <ChipGroup label="Leadership Situation" options={situations} selected={situation}  onSelect={setSituation} />
        <ChipGroup label="Strategic Challenge"  options={challenges} selected={challenge}  onSelect={setChallenge} />
        <ChipGroup label="Time Horizon"         options={horizons}   selected={horizon}    onSelect={setHorizon} />
      </div>

      <div className="flex items-center gap-5">
        <button
          onClick={handleGenerate}
          className="px-8 py-3.5 rounded-full text-[14px] font-medium transition-all"
          style={
            coreComplete
              ? { backgroundColor: '#0f0f0f', color: '#ffffff' }
              : { backgroundColor: '#f4f4f5', color: '#a1a1aa', cursor: 'default' }
          }
        >
          Generate Context Brief →
        </button>

        {attempted && !coreComplete && (
          <p className="text-[13px] text-zinc-400">
            Select an industry and challenge to continue.
          </p>
        )}
      </div>
    </div>
  )
}
