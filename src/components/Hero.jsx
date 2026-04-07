import React, { useState } from 'react'

const styles = {
  section: {
    position: 'relative',
    overflow: 'hidden',
    padding: '7rem 2.5rem 5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  glow: {
    position: 'absolute',
    top: '-120px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '700px',
    height: '700px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(107,92,231,0.12) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--mono)',
    fontSize: '11px',
    letterSpacing: '0.05em',
    color: 'var(--accent2)',
    border: '1px solid rgba(107,92,231,0.3)',
    background: 'rgba(107,92,231,0.08)',
    padding: '5px 14px',
    borderRadius: '100px',
    marginBottom: '2rem',
    animation: 'fadeIn 0.5s ease forwards',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'var(--green)',
    boxShadow: '0 0 6px var(--green)',
    animation: 'pulse 2s infinite',
    display: 'inline-block',
  },
  h1: {
    fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
    fontWeight: 800,
    letterSpacing: '-0.04em',
    lineHeight: 1.0,
    color: 'var(--text)',
    maxWidth: '820px',
    marginBottom: '1.5rem',
  },
  h1Accent: {
    color: 'var(--accent2)',
  },
  sub: {
    fontSize: '17px',
    color: 'var(--muted)',
    maxWidth: '520px',
    lineHeight: 1.7,
    fontWeight: 400,
    marginBottom: '2.5rem',
  },
  actions: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}

export default function Hero() {
  const [primaryHovered, setPrimaryHovered] = useState(false)
  const [ghostHovered, setGhostHovered] = useState(false)

  return (
    <section style={styles.section}>
      <div style={styles.glow} />

      <div className="fade-up" style={styles.badge}>
        <span style={styles.dot} />
        AI-powered · ATS-optimized
      </div>

      <h1 className="fade-up-delay-1" style={styles.h1}>
        Beat the ATS.<br />
        <span style={styles.h1Accent}>Land the job.</span>
      </h1>

      <p className="fade-up-delay-2" style={styles.sub}>
        ATS Resume Helper analyzes job descriptions, rewrites your resume for ATS systems,
        and generates tailored cover letters — in seconds.
      </p>

      <div className="fade-up-delay-3" style={styles.actions}>
        <button
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '13px',
            fontWeight: 500,
            padding: '12px 28px',
            borderRadius: 'var(--radius-md)',
            border: 'none',
            background: primaryHovered ? 'var(--accent2)' : 'var(--accent)',
            color: '#fff',
            cursor: 'pointer',
            transform: primaryHovered ? 'translateY(-1px)' : 'translateY(0)',
            transition: 'background 0.15s, transform 0.15s',
          }}
          onMouseEnter={() => setPrimaryHovered(true)}
          onMouseLeave={() => setPrimaryHovered(false)}
        >
          Build my resume free →
        </button>

        <a
          href="#features"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '13px',
            padding: '12px 24px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border2)',
            color: ghostHovered ? 'var(--text)' : 'var(--muted)',
            background: 'transparent',
            cursor: 'pointer',
            transition: 'color 0.15s',
          }}
          onMouseEnter={() => setGhostHovered(true)}
          onMouseLeave={() => setGhostHovered(false)}
        >
          See how it works
        </a>
      </div>
    </section>
  )
}
