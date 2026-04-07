import React, { useState, useEffect } from 'react'

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2.5rem',
    height: '56px',
    background: 'rgba(13,13,15,0.88)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--border)',
    transition: 'border-color 0.3s',
  },
  logo: {
    fontSize: '15px',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: 'var(--text)',
  },
  logoAccent: {
    color: 'var(--accent2)',
  },
  links: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    fontSize: '13px',
    color: 'var(--muted)',
    fontWeight: 400,
    letterSpacing: '0.01em',
    cursor: 'pointer',
    transition: 'color 0.15s',
    background: 'none',
    border: 'none',
  },
  cta: {
    fontFamily: 'var(--mono)',
    fontSize: '12px',
    padding: '7px 18px',
    border: '1px solid var(--border2)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--text)',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'background 0.15s, border-color 0.15s',
  },
}

export default function Navbar({ setPage }) {
  const [hovered, setHovered] = useState(null)
  const [ctaHovered, setCtaHovered] = useState(false)

  const links = ['Features', 'Templates', 'Pricing', 'About']

  return (
    <nav style={styles.nav}>
      <div 
        style={{ ...styles.logo, cursor: 'pointer' }}
        onClick={() => setPage('home')}
      >
        ATS Resume<span style={styles.logoAccent}> Helper</span>
      </div>

      <div style={styles.links}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              ...styles.link,
              color: hovered === l ? 'var(--text)' : 'var(--muted)',
            }}
            onMouseEnter={() => setHovered(l)}
            onMouseLeave={() => setHovered(null)}
          >
            {l}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <button
          style={styles.link}
          onClick={() => setPage('auth')}
        >
          Log in
        </button>
        <button
          style={{
            ...styles.cta,
            background: ctaHovered ? 'var(--bg3)' : 'transparent',
            borderColor: ctaHovered ? 'var(--accent)' : 'var(--border2)',
          }}
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          onClick={() => setPage('auth')}
        >
          Get started →
        </button>
      </div>
    </nav>
  )
}
