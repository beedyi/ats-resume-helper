import React, { useState } from 'react'

const FREE_FEATURES = [
  { label: '1 resume', active: true },
  { label: 'ATS score checker', active: true },
  { label: '3 templates', active: true },
  { label: 'AI rewriter', active: false },
  { label: 'Cover letter gen', active: false },
  { label: 'Unlimited exports', active: false },
]

const PREMIUM_FEATURES = [
  { label: 'Unlimited resumes', active: true },
  { label: 'ATS score checker', active: true },
  { label: '41 templates', active: true },
  { label: 'AI rewriter', active: true },
  { label: 'Cover letter gen', active: true },
  { label: 'Unlimited exports', active: true },
]

function PlanFeature({ label, active }) {
  return (
    <li
      style={{
        fontSize: '13px',
        color: active ? 'var(--text)' : 'var(--muted)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <span
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'var(--green)',
          flexShrink: 0,
          opacity: active ? 1 : 0.3,
          display: 'inline-block',
        }}
      />
      {label}
    </li>
  )
}

export default function Pricing() {
  const [freeBtnHovered, setFreeBtnHovered] = useState(false)
  const [premBtnHovered, setPremBtnHovered] = useState(false)

  return (
    <section
      id="pricing"
      style={{
        padding: '5rem 2.5rem',
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '750px', margin: '0 auto', width: '100%' }}>
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
        // pricing
      </div>
      <div
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: 'var(--text)',
          maxWidth: '600px',
          marginBottom: '0.5rem',
        }}
      >
        Simple pricing.
      </div>
      <div
        style={{
          fontSize: '16px',
          color: 'var(--muted)',
          marginBottom: '3rem',
        }}
      >
        Start free, upgrade when you're ready.
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {/* Free Plan */}
        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg2)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Free
          </div>
          <div
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: 'var(--text)',
              marginBottom: '0.25rem',
            }}
          >
            $0
          </div>
          <div
            style={{
              fontSize: '12px',
              color: 'var(--muted)',
              marginBottom: '1.5rem',
            }}
          >
            forever
          </div>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '1.5rem',
            }}
          >
            {FREE_FEATURES.map((f) => (
              <PlanFeature key={f.label} {...f} />
            ))}
          </ul>
          <button
            onMouseEnter={() => setFreeBtnHovered(true)}
            onMouseLeave={() => setFreeBtnHovered(false)}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '13px',
              display: 'block',
              textAlign: 'center',
              width: '100%',
              padding: '11px 0',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border2)',
              color: freeBtnHovered ? 'var(--text)' : 'var(--muted)',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'color 0.15s',
              marginTop: 'auto',
            }}
          >
            Get started free
          </button>
        </div>

        {/* Premium Plan */}
        <div
          style={{
            border: '1px solid var(--accent)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg3)',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--accent2), transparent)',
            }}
          />
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              letterSpacing: '0.06em',
              background: 'rgba(107,92,231,0.15)',
              color: 'var(--accent2)',
              border: '1px solid rgba(107,92,231,0.3)',
              padding: '3px 10px',
              borderRadius: '100px',
              display: 'inline-block',
              marginBottom: '1rem',
            }}
          >
            Most popular
          </div>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              color: 'var(--accent2)',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Premium
          </div>
          <div
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: 'var(--text)',
              marginBottom: '0.25rem',
            }}
          >
            $4
            <sub
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: 'var(--muted)',
                verticalAlign: 'middle',
              }}
            >
              .99
            </sub>
          </div>
          <div
            style={{
              fontSize: '12px',
              color: 'var(--muted)',
              marginBottom: '1.5rem',
            }}
          >
            per month
          </div>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '1.5rem',
            }}
          >
            {PREMIUM_FEATURES.map((f) => (
              <PlanFeature key={f.label} {...f} />
            ))}
          </ul>
          <button
            onMouseEnter={() => setPremBtnHovered(true)}
            onMouseLeave={() => setPremBtnHovered(false)}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '13px',
              display: 'block',
              textAlign: 'center',
              width: '100%',
              padding: '11px 0',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              background: premBtnHovered ? 'var(--accent2)' : 'var(--accent)',
              color: '#fff',
              cursor: 'pointer',
              transition: 'background 0.15s',
              marginTop: 'auto',
            }}
          >
            Upgrade to Premium
          </button>
        </div>
      </div>
      </div>
    </section>
  )
}
