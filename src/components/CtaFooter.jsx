import React, { useState } from 'react'

export function CTA() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <div
      style={{
        margin: '2rem 2.5rem 4rem',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        background: 'var(--bg2)',
        padding: '4rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(107,92,231,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <h2
        style={{
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '1rem',
          lineHeight: 1.1,
        }}
      >
        Ready to transform
        <br />
        <span style={{ color: 'var(--accent2)' }}>your career?</span>
      </h2>
      <p
        style={{
          fontSize: '16px',
          color: 'var(--muted)',
          marginBottom: '2rem',
        }}
      >
        Join 500,000+ job seekers who landed interviews with ATS Resume Helper.
      </p>
      <button
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '14px',
          padding: '14px 36px',
          borderRadius: 'var(--radius-md)',
          border: 'none',
          background: btnHovered ? 'var(--accent2)' : 'var(--accent)',
          color: '#fff',
          cursor: 'pointer',
          transition: 'background 0.15s, transform 0.15s',
          transform: btnHovered ? 'translateY(-1px)' : 'translateY(0)',
        }}
      >
        Build my resume — it's free →
      </button>
    </div>
  )
}

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '-0.02em',
        }}
      >
        ATS Resume<span style={{ color: 'var(--accent2)' }}> Helper</span>
      </div>
      <p
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--muted)',
        }}
      >
        © 2026 ATS Resume Helper. All rights reserved.
      </p>
    </footer>
  )
}
