import React, { useState } from 'react'

export default function Navbar({ setPage }) {
  const [hovered, setHovered] = useState(null)
  const [ctaHovered, setCtaHovered] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = ['Features', 'Templates', 'Pricing', 'Contact']

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(13,13,15,0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="nav-container">
          <div 
            style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', cursor: 'pointer' }}
            onClick={() => { setPage('home'); setMobileMenuOpen(false); }}
          >
            ATS Resume<span style={{ color: 'var(--accent2)' }}> Helper</span>
          </div>

          <div className="desktop-only" style={{ gap: '2rem' }}>
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  fontSize: '13px',
                  color: hovered === l ? 'var(--text)' : 'var(--muted)',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  cursor: 'pointer',
                  transition: 'color 0.15s',
                  textDecoration: 'none',
                }}
                onMouseEnter={() => setHovered(l)}
                onMouseLeave={() => setHovered(null)}
              >
                {l}
              </a>
            ))}
          </div>

          <div className="desktop-only" style={{ alignItems: 'center', gap: '1.5rem' }}>
            <button
              style={{ fontSize: '13px', color: 'var(--muted)', cursor: 'pointer', background: 'none', border: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}
              onClick={() => setPage('auth')}
            >
              Log in
            </button>
            <button
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                padding: '7px 18px',
                border: '1px solid',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text)',
                background: ctaHovered ? 'var(--bg3)' : 'transparent',
                borderColor: ctaHovered ? 'var(--accent)' : 'var(--border2)',
                cursor: 'pointer',
                transition: 'background 0.15s, border-color 0.15s',
              }}
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
              onClick={() => setPage('auth')}
            >
              Get started →
            </button>
          </div>

          <div className="mobile-only">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'transparent', border: 'none', color: 'var(--text)', cursor: 'pointer', padding: '4px' }}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu fade-up">
            {links.map(link => (
              <button 
                key={link} 
                className="mobile-menu-link" 
                onClick={() => { 
                  document.getElementById(link.toLowerCase())?.scrollIntoView({behavior: 'smooth'}); 
                  setMobileMenuOpen(false); 
                }}
              >
                {link}
              </button>
            ))}
            <button className="mobile-menu-link" onClick={() => { setPage('auth'); setMobileMenuOpen(false); }}>Log in</button>
            <button className="mobile-cta" onClick={() => { setPage('auth'); setMobileMenuOpen(false); }}>Get started →</button>
          </div>
        )}
      </nav>
    </>
  )
}
