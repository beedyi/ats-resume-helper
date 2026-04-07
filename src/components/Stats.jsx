import React from 'react'

const STATS = [
  { num: '500', suffix: 'K+', label: 'Resumes Created' },
  { num: '34',  suffix: '+',  label: 'Professional Templates' },
  { num: '95',  suffix: '%',  label: 'ATS Pass Rate' },
  { num: '3',   suffix: 'x',  label: 'More Interviews' },
  { num: '4.9', suffix: '/5', label: 'User Rating' },
]

export default function Stats() {
  return (
    <div
      style={{
        display: 'flex',
        margin: '4rem 2.5rem',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg2)',
        overflow: 'hidden',
      }}
    >
      {STATS.map((s, i) => (
        <div
          key={s.label}
          style={{
            flex: 1,
            padding: '2rem',
            textAlign: 'center',
            borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none',
          }}
        >
          <div
            style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: 'var(--text)',
            }}
          >
            {s.num}
            <span style={{ color: 'var(--accent2)' }}>{s.suffix}</span>
          </div>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              color: 'var(--muted)',
              letterSpacing: '0.05em',
              marginTop: '4px',
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
