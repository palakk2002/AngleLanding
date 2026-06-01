import React, { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.webp'
import './App.css'

const LandingPage = lazy(() => import('./modules/landing-page/pages/LandingPage'))
const EcommercePage = lazy(() => import('./modules/landing-page/pages/EcommercePage'))
const HyperlocalPage = lazy(() => import('./modules/landing-page/pages/HyperlocalPage'))
const SMEPage = lazy(() => import('./modules/landing-page/pages/SMEPage'))
const AboutPage = lazy(() => import('./modules/landing-page/pages/AboutPage'))
const InnovationPage = lazy(() => import('./modules/landing-page/pages/InnovationPage'))
const SocialImpactPage = lazy(() => import('./modules/landing-page/pages/SocialImpactPage'))
const CareersPage = lazy(() => import('./modules/landing-page/pages/CareersPage'))
const ClientPartnersPage = lazy(() => import('./modules/landing-page/pages/ClientPartnersPage'))
const DeliveryPartnersPage = lazy(() => import('./modules/landing-page/pages/DeliveryPartnersPage'))


// Preserve the existing Vite scaffold page as a component so it remains 100% operational
function ViteScaffold() {
  const [count, setCount] = useState(0)

  return (
    <div className="vite-scaffold-container text-center">
      <section id="center">
        <div className="hero">
          <img loading="lazy" src={heroImg} className="base" width="170" height="179" alt="" />
          <img loading="lazy" src={reactLogo} className="framework" alt="React logo" />
          <img loading="lazy" src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img loading="lazy" className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img loading="lazy" className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen bg-slate-50 text-[#00796B] font-black text-xl font-display">
          <div className="flex flex-col items-center gap-4">
            <svg className="w-12 h-12 text-[#00796B] animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeDasharray="30 30" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span className="text-slate-800 text-sm tracking-wider uppercase font-semibold">Loading Page...</span>
          </div>
        </div>
      }>
        <Routes>
          {/* Main route serves the gorgeous premium landing page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Ecommerce & D2C dedicated interactive page */}
          <Route path="/ecommerce" element={<EcommercePage />} />
          
          {/* Hyperlocal & Quick Commerce dedicated interactive page */}
          <Route path="/hyperlocal" element={<HyperlocalPage />} />

          {/* SME & Personal Courier dedicated interactive page */}
          <Route path="/sme" element={<SMEPage />} />
          
          {/* About Company dedicated interactive page */}
          <Route path="/about" element={<AboutPage />} />
          
          {/* Innovation dedicated interactive page */}
          <Route path="/innovation" element={<InnovationPage />} />
          
          {/* Social Impact dedicated interactive page */}
          <Route path="/social-impact" element={<SocialImpactPage />} />
          
          {/* Careers dedicated interactive page */}
          <Route path="/careers" element={<CareersPage />} />

          {/* Client Partners dedicated interactive page */}
          <Route path="/client-partners" element={<ClientPartnersPage />} />
          
          {/* Delivery Partners dedicated interactive page */}
          <Route path="/delivery-partners" element={<DeliveryPartnersPage />} />
          
          {/* Subroute preserves the scaffolded template UI for checking or later expansion */}
          <Route path="/scaffold" element={<ViteScaffold />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
