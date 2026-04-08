import React from 'react'

const TESTIMONIALS = [
  {
    stars: 5,
    text: 'I went from zero callbacks to three interviews in two weeks. The ATS score feature showed me exactly what I was missing.',
    highlight: 'zero callbacks to three interviews',
    author: 'James K., Software Engineer',
  },
  {
    stars: 5,
    text: 'The cover letter generator is genuinely impressive. It sounded like me, not a robot. Saved hours every application.',
    highlight: 'genuinely impressive',
    author: 'Priya M., Product Manager',
  },
  {
    stars: 5,
    text: 'I landed a $40K salary increase after optimizing my resume here. Worth every penny of the premium plan.',
    highlight: '$40K salary increase',
    author: 'Marcus T., Data Analyst',
  },
]

function highlightText(text, highlight) {
  const parts = text.split(highlight)
  if (parts.length < 2) return text
  return (
    <>
      {parts[0]}
      <strong style={{ color: 'var(--text)', fontWeight: 500 }}>{highlight}</strong>
      {parts[1]}
    </>
  )
}

export default function Testimonials() {
  return (
    <section className="responsive-section">
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
        // testimonials
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
        People are getting hired.
      </div>

      <div className="responsive-grid-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
            }}
          >
            <div
              style={{
                color: '#f5c542',
                fontSize: '12px',
                letterSpacing: '2px',
                marginBottom: '0.75rem',
              }}
            >
              {'★'.repeat(t.stars)}
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--muted)',
                lineHeight: 1.7,
                marginBottom: '1.2rem',
              }}
            >
              {highlightText(t.text, t.highlight)}
            </p>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--accent2)',
                letterSpacing: '0.04em',
              }}
            >
              — {t.author}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
