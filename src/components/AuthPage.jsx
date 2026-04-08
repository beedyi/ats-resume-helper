import React, { useState } from 'react'

export default function AuthPage({ setPage }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'var(--bg)',
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        color: 'var(--text)',
        fontFamily: 'var(--sans)',
      }}
    >
      {/* Top Left Close/Back Button */}
      <button
        onClick={() => setPage('home')}
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'border-color 0.15s',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--text)'}
        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <div
        className="auth-card"
        style={{
          background: 'var(--bg2)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem 2.5rem',
          width: '100%',
          maxWidth: '440px',
          border: '1px solid var(--border)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Logo Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
          <div
            style={{
              width: '40px',
              height: '48px',
              background: 'var(--accent)',
              borderRadius: 'var(--radius-sm)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text)',
              fontWeight: 'bold',
            }}
          >
            {/* Simple face representation for the logo */}
            <span style={{ fontSize: '20px', lineHeight: 1 }}>:)</span>
            {/* The folded corner */}
            <div style={{
              position: 'absolute',
              top: '-1px',
              right: '-1px',
              width: '0',
              height: '0',
              borderBottom: '12px solid var(--accent2)',
              borderRight: '12px solid var(--bg2)',
              borderBottomLeftRadius: '4px'
            }} />
            <div style={{
              position: 'absolute',
              top: '-4px',
              right: '8px',
              width: '6px',
              height: '6px',
              background: 'var(--green)',
              borderRadius: '50%'
            }} />
          </div>
          <div style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.2 }}>
            ATS <span style={{ fontWeight: 400 }}>Resume</span>
            <br />
            <span style={{ fontWeight: 400 }}>Helper</span>
          </div>
        </div>

        {/* Headings */}
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>
          Welcome <span style={{ color: 'var(--accent2)' }}>back</span>
        </h1>
        <p style={{ color: 'var(--muted)', textAlign: 'center', marginBottom: '2rem', fontSize: '15px', lineHeight: 1.5 }}>
          Sign in and pick up where you left off with<br />your resumes.
        </p>

        {/* Social Auth Widget */}
        <div style={{
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          cursor: 'pointer',
          marginBottom: '2rem',
          background: 'var(--bg)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--green)', overflow: 'hidden' }}>
              {/* Fake Avatar */}
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                 <div style={{ width: '16px', height: '16px', background: '#0fa37f', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>Sign in as Ubaid</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)' }}>ubaidmufti@gmail.com</div>
            </div>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: '2rem' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <div style={{ padding: '0 12px', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', letterSpacing: '1px', fontFamily: 'var(--mono)' }}>
            OR CONTINUE WITH EMAIL
          </div>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {/* Form Fields */}
        <div style={{ width: '100%', marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text)', marginBottom: '6px' }}>
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              fontSize: '15px',
              background: 'var(--bg)',
              color: 'var(--text)',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent2)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
          />
        </div>

        <div style={{ width: '100%', marginBottom: '1.5rem', position: 'relative' }}>
          <label style={{ display: 'block', fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text)', marginBottom: '6px' }}>
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              fontSize: '15px',
              background: 'var(--bg)',
              color: 'var(--text)',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent2)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '12px',
              top: '32px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--muted)',
            }}
          >
            {/* Simple Eye icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>

        <button style={{
          background: 'none',
          border: 'none',
          color: 'var(--accent2)',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
          marginBottom: '1.5rem'
        }}>
          Forgot password?
        </button>

        <button style={{
          width: '100%',
          padding: '12px',
          background: 'var(--accent)',
          color: 'white',
          border: 'none',
          borderRadius: '100px',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '2rem',
          boxShadow: '0 4px 12px var(--accent-glow)'
        }}>
          Sign In
        </button>

        <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
          Don't have an account? <span style={{ color: 'var(--accent2)', cursor: 'pointer', fontWeight: 500 }}>Sign up</span>
        </div>

      </div>
    </div>
  )
}
