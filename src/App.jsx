import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Templates from './components/Templates'
import Pricing from './components/Pricing'
import { CTA, Footer } from './components/CtaFooter'
import AuthPage from './components/AuthPage'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      {page === 'home' ? (
        <>
          <Navbar setPage={setPage} />
          <Hero />
          <Stats />
          <Features />
          <HowItWorks />
          <Testimonials />
          <Templates />
          <Pricing />
          <CTA />
          <Footer />
        </>
      ) : (
        <AuthPage setPage={setPage} />
      )}
    </>
  )
}
