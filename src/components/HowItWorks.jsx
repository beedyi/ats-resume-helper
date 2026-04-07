import React from 'react'

const STEPS = [
  {
    num: '01',
    title: 'Upload your resume',
    desc: 'Paste your existing resume or start from one of our ATS-ready templates. Takes under a minute.',
  },
  {
    num: '02',
    title: 'Paste the job description',
    desc: 'Our AI reads the posting and scores your resume against it, showing exactly what\'s missing.',
  },
  {
    num: '03',
    title: 'Export & apply',
    desc: 'Download your tailored resume and generated cover letter. Apply with confidence.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="features"
      style={{
        padding: '5rem 2.5rem',
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
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
        // how it works
      </div>
      <div
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: 'var(--text)',
          maxWidth: '600px',
          marginBottom: '3rem',
        }}
      >
        Three steps. Zero guesswork.
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}
      >
        {STEPS.map((s) => (
          <div key={s.num}>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--accent2)',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              {s.num}
              <div
                style={{
                  flex: 1,
                  height: '1px',
                  background: 'linear-gradient(90deg, var(--border2), transparent)',
                }}
              />
            </div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                marginBottom: '0.5rem',
              }}
            >
              {s.title}
            </div>
            <div
              style={{
                fontSize: '13px',
                color: 'var(--muted)',
                lineHeight: 1.7,
              }}
            >
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
