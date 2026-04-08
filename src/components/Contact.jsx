import React, { useState } from 'react'

export default function Contact() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <section
      id="contact"
      className="responsive-section"
      style={{
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: '1px solid var(--border)',
      }}
    >
      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '0.5rem',
          textAlign: 'center',
        }}
      >
        <span style={{ color: 'var(--accent2)' }}>Contact</span> Us
      </h2>
      <p
        style={{
          fontSize: '16px',
          color: 'var(--muted)',
          marginBottom: '4rem',
          textAlign: 'center',
        }}
      >
        We'd love to hear from you
      </p>

      <div
        className="responsive-grid-2"
        style={{
          maxWidth: '900px',
          width: '100%',
        }}
      >
        {/* Left Card: Contact Info */}
        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg2)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {/* Email */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--accent2)', marginTop: '2px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Email</div>
              <div style={{ fontSize: '14px', color: 'var(--muted)' }}>info@atsresumehelper.com</div>
            </div>
          </div>

          {/* Office */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--accent2)', marginTop: '2px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Office</div>
              <div style={{ fontSize: '14px', color: 'var(--muted)' }}>San Francisco, CA</div>
            </div>
          </div>

          {/* Support */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--accent2)', marginTop: '2px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Support</div>
              <div style={{ fontSize: '14px', color: 'var(--muted)' }}>Mon–Fri, 9am–6pm PT</div>
            </div>
          </div>
        </div>

        {/* Right Card: Contact Form */}
        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg2)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {/* Name Field */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: 'var(--text)', marginBottom: '8px' }}>
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              style={{
                width: '100%',
                padding: '12px 14px',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text)',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent2)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
            />
          </div>

          {/* Email Field */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: 'var(--text)', marginBottom: '8px' }}>
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '12px 14px',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text)',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent2)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
            />
          </div>

          {/* Message Field */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: 'var(--text)', marginBottom: '8px' }}>
              Message
            </label>
            <textarea
              placeholder="How can we help?"
              rows={4}
              style={{
                width: '100%',
                padding: '12px 14px',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text)',
                fontSize: '14px',
                outline: 'none',
                resize: 'vertical',
                minHeight: '100px',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent2)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
            />
          </div>

          <button
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              width: '100%',
              padding: '12px',
              background: btnHovered ? 'var(--accent2)' : 'var(--accent)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.2s',
              marginTop: '0.5rem',
            }}
          >
            Send message
          </button>
        </div>
      </div>
    </section>
  )
}
