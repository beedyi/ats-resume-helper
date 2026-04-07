import React, { useState } from 'react'

const FEATURES = [
  {
    icon: '⚡',
    title: 'ATS Score & Analysis',
    desc: 'Real-time scoring against the job description. Know exactly which keywords you\'re missing before you apply.',
  },
  {
    icon: '✦',
    title: 'AI Resume Rewriter',
    desc: 'Paste a job description and let the AI tailor your resume to it automatically — bullet by bullet.',
  },
  {
    icon: '◈',
    title: 'Cover Letter Generator',
    desc: 'Personalized cover letters in one click. Reads your resume and the job posting, writes the rest.',
  },
  {
    icon: '▣',
    title: '41 ATS-Safe Templates',
    desc: 'Beautiful templates that are fully machine-readable. No columns, no tables, no parsing failures.',
  },
  {
    icon: '⬡',
    title: 'Keyword Intelligence',
    desc: 'Surfaces the exact phrases recruiters and ATS systems are scanning for in your industry.',
  },
  {
    icon: '◎',
    title: 'PDF & DOCX Export',
    desc: 'Download in any format, anytime. Clean exports that look pixel-perfect in every viewer.',
  },
]

function FeatureCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg3)' : 'var(--bg2)',
        padding: '2rem',
        transition: 'background 0.2s',
        cursor: 'default',
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--accent-glow)',
          border: '1px solid rgba(107,92,231,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          marginBottom: '1.2rem',
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontSize: '15px',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: '13px',
          color: 'var(--muted)',
          lineHeight: 1.7,
          fontWeight: 400,
        }}
      >
        {desc}
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section
      id="features"
      style={{ padding: '5rem 2.5rem' }}
    >
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          letterSpacing: '0.1em',
          color: 'var(--accent2)',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}
      >
        // features
      </div>
      <div
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: 'var(--text)',
          maxWidth: '600px',
          marginBottom: '1rem',
        }}
      >
        Everything you need to get hired.
      </div>
      <div
        style={{
          fontSize: '16px',
          color: 'var(--muted)',
          maxWidth: '500px',
          lineHeight: 1.7,
          marginBottom: '3rem',
        }}
      >
        One platform to build, optimize, and track your resume across every application.
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}
      >
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  )
}
