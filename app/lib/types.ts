export interface Force {
  id: string
  name: string
  short_description: string
  status: string
  domains: string[]
  subdomains: string[]
  momentum: string
  time_horizons: string[]
  confidence: string
  last_updated: string
  industries: string[]
  leadership_situations: string[]
  strategic_challenges: string[]
  impact_areas: string[]
  related_forces: string[]
  strategic_tensions: string[]
  strategic_questions: string[]
  provocations: string[]
}

export interface Signal {
  id: string
  title: string
  signal_type: 'Event' | 'Pattern' | 'Tension'
  date_published: string
  date_added: string
  source_name: string
  source_title: string
  source_url: string
  source_type: string
  geographic_scope: string[]
  summary: string
  interpretation: string
  affected_forces: string[]
  confidence: 'Low' | 'Medium' | 'High'
  momentum_impact: 'Strengthening' | 'Weakening' | 'Complicating' | 'Neutral'
  potential_implications: string[]
  related_signals: string[]
  snapshot_id: string
}

export interface RankedForce {
  force_id: string
  score: number
  score_breakdown?: {
    industry_match: number
    leadership_situation_match: number
    strategic_challenge_match: number
    time_horizon_match: number
    impact_area_match: number
    signal_strength: number
  }
  why_this_force_surfaced: string
}

export interface Context {
  id: string
  name: string
  created_at: string
  updated_at: string
  status: string
  selected_lenses: {
    industry: string
    leadership_situation: string
    strategic_challenge: string
    time_horizon: string
  }
  context_summary: string
  ranked_forces: RankedForce[]
  strategic_tensions: string[]
  strategic_questions: string[]
  provocations: string[]
  tracked_signals: string[]
  snapshots: string[]
}

export interface Snapshot {
  id: string
  context_id: string
  snapshot_date: string
  created_by: string
  summary: string
  ranked_forces: Array<{ force_id: string; score: number }>
  top_tensions: string[]
  top_questions: string[]
  top_provocations: string[]
  signals_included: string[]
  context_state_at_snapshot: {
    status: string
    selected_lenses: Record<string, string>
  }
  change_since_previous: {
    summary: string
    force_changes: unknown[]
    signal_changes: unknown[]
    interpretation_changes: unknown[]
  }
}
