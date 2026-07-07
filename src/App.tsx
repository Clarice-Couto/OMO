import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OriginSection from './components/OriginSection'
import PromoCard from './components/PromoCard'
import BentoGrid from './components/BentoGrid'
import CareHub from './components/CareHub'
import Footer from './components/Footer'
import ProductsPage from './components/ProductsPage'
import RegulationPage from './components/RegulationPage'

export type AppPage = 'main' | 'products' | 'regulation'

export default function App() {
  const [page, setPage] = useState<AppPage>('main')

  const goToMainAndScroll = (elementId: string) => {
    if (page !== 'main') {
      setPage('main')
      window.scrollTo(0, 0)
      setTimeout(() => {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    } else {
      document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToHero = () => goToMainAndScroll('hero')
  const scrollToOrigin = () => goToMainAndScroll('origin')
  const scrollToPromo = () => goToMainAndScroll('promo-section')

  const goToProducts = () => {
    setPage('products')
    window.scrollTo(0, 0)
  }
  const goToRegulation = () => {
    setPage('regulation')
    window.scrollTo(0, 0)
  }
  const goToMain = () => {
    setPage('main')
    window.scrollTo(0, 0)
  }

  return (
    <>
      {/* Floating OMO Splash background textures */}
      <OmoSplashLeft />
      <OmoSplashRight />

      <Navbar
        onParticipate={scrollToPromo}
        onProducts={goToProducts}
        currentPage={page}
        onBack={goToMain}
        onRegulation={goToRegulation}
        onCampaign={scrollToHero}
        onHeritage={scrollToOrigin}
      />

      {page === 'main' && (
        <main>
          <Hero onParticipate={scrollToPromo} onProducts={goToProducts} />
          <OriginSection />
          <div id="promo-section">
            <PromoCard onRegulation={goToRegulation} />
          </div>
          <BentoGrid />
          <CareHub />
          <Footer
            onProducts={goToProducts}
            onRegulation={goToRegulation}
            onParticipate={scrollToPromo}
            showCTA={true}
          />
        </main>
      )}

      {page === 'products' && (
        <div className="page-slide-in">
          <ProductsPage onParticipate={scrollToPromo} />
          <Footer
            onProducts={goToProducts}
            onRegulation={goToRegulation}
            onParticipate={scrollToPromo}
            showCTA={false}
          />
        </div>
      )}

      {page === 'regulation' && (
        <div className="page-slide-in">
          <RegulationPage onParticipate={scrollToPromo} />
          <Footer
            onProducts={goToProducts}
            onRegulation={goToRegulation}
            onParticipate={scrollToPromo}
            showCTA={false}
          />
        </div>
      )}
    </>
  )
}

function OmoSplashLeft() {
  return (
    <svg className="splash-left" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="140" fill="#0033A0" className="animate-splash" />
      <path d="M200 60 Q260 80 280 150 Q300 220 240 260 Q180 300 130 260 Q80 220 100 150 Q120 80 200 60Z" fill="#0033A0" opacity="0.7" />
      <circle cx="180" cy="120" r="30" fill="#E52320" opacity="0.6" />
      <circle cx="280" cy="200" r="20" fill="#E52320" opacity="0.4" />
      <circle cx="150" cy="280" r="25" fill="#0033A0" opacity="0.5" />
    </svg>
  )
}

function OmoSplashRight() {
  return (
    <svg className="splash-right" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ animationDelay: '4s' }}>
      <circle cx="180" cy="180" r="120" fill="#0033A0" className="animate-splash" />
      <path d="M180 50 Q240 70 260 140 Q280 210 220 250 Q160 290 110 250 Q60 210 80 140 Q100 70 180 50Z" fill="#0033A0" opacity="0.6" />
      <circle cx="250" cy="130" r="24" fill="#E52320" opacity="0.5" />
      <circle cx="120" cy="220" r="18" fill="#E52320" opacity="0.35" />
    </svg>
  )
}
