import React, { useState } from 'react'

export default function Templates() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <section
      id="templates"
      style={{
        padding: '5rem 2.5rem',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '0.5rem',
        }}
      >
        Professional <span style={{ color: 'var(--accent2)' }}>Resume Templates</span>
      </h2>
      <p
        style={{
          fontSize: '16px',
          color: 'var(--muted)',
          marginBottom: '3rem',
          maxWidth: '600px',
        }}
      >
        Choose from 34+ ATS-optimized templates designed by career experts
      </p>

      {/* Stats Pills */}
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {[
          { num: '3', label: 'Free Templates' },
          { num: '31', label: 'Premium Templates' },
          { num: '94/100', label: 'Avg ATS Score' },
        ].map(stat => (
          <div
            key={stat.label}
            style={{
              padding: '0.75rem 1.5rem',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '160px',
            }}
          >
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent2)', marginBottom: '0.25rem' }}>
              {stat.num}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        {/* Free Card */}
        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg2)',
            padding: '1.5rem',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>☆</span> Popular
            </div>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              padding: '0.4rem 0.8rem',
              borderRadius: '100px',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--muted)',
              border: '1px solid var(--border)',
            }}>
              FREE
            </div>
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <img
              src="/template-free.png"
              alt="Free Template Mockup"
              style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '1/1.3', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>

        {/* Premium Card */}
        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg2)',
            padding: '1.5rem',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>☆</span> Popular
            </div>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              padding: '0.4rem 0.8rem',
              borderRadius: '100px',
              background: '#e84142',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <span>☆</span> PREMIUM
            </div>
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <img
              src="/template-premium.png"
              alt="Premium Template Mockup"
              style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '1/1.3', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>

      </div>

      <button
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '13px',
          padding: '12px 28px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border2)',
          color: btnHovered ? 'var(--text)' : 'var(--muted)',
          background: 'transparent',
          cursor: 'pointer',
          transition: 'color 0.15s, border-color 0.15s',
          marginTop: '3.5rem',
        }}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
      >
        View more
      </button>
    </section>
  )
}
