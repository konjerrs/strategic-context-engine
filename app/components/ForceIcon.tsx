interface Props {
  id: string
  accentHex: string
  size?: number
}

export function ForceIcon({ id, accentHex, size = 28 }: Props) {
  const s = size
  const scale = s / 48

  const scaleAttr = scale !== 1 ? `scale(${scale})` : undefined

  if (id === 'ai-ascendance') {
    return (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
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
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M24 6 L38 20 L24 42 L10 20 Z" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.35" />
        <path d="M24 14 L32 22 L24 34 L16 22 Z" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.55" />
        <circle cx="24" cy="22" r="3" fill={accentHex} opacity="0.75" />
      </svg>
    )
  }
  if (id === 'institutional-rewiring') {
    return (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
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
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
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
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <circle cx="16" cy="24" r="9" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.45" />
        <circle cx="32" cy="24" r="9" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.45" />
        <path d="M23 17 Q24 24 23 31" stroke={accentHex} strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M25 17 Q24 24 25 31" stroke={accentHex} strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="24" cy="24" r="3" fill={accentHex} opacity="0.7" />
      </svg>
    )
  }
  if (id === 'economic-reconfiguration') {
    return (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
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
    return (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
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
    return (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M4 32 Q10 20 18 24 Q26 28 34 16 Q40 8 44 14" stroke={accentHex} strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round" />
        <path d="M4 38 Q10 26 18 30 Q26 34 34 22 Q40 14 44 20" stroke={accentHex} strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round" />
        <circle cx="34" cy="16" r="3"   fill={accentHex} opacity="0.75" />
        <circle cx="18" cy="24" r="2.5" fill={accentHex} opacity="0.5" />
        <line x1="34" y1="16" x2="34" y2="42" stroke={accentHex} strokeWidth="1" opacity="0.15" strokeDasharray="2 3" />
      </svg>
    )
  }
  if (id === 'resource-and-energy-transition') {
    return (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
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
    return (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <circle cx="18" cy="22" r="10" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="30" cy="22" r="10" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="24" cy="32" r="10" stroke={accentHex} strokeWidth="1.5" fill="none" opacity="0.3" />
        <circle cx="24" cy="24" r="4"  fill={accentHex} opacity="0.65" />
      </svg>
    )
  }
  return null
}
