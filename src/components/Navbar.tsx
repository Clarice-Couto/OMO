import { useEffect, useState } from 'react'
import type { AppPage } from '../App'
import unileverWhite from '@/imports/images__1_.jpeg'

type NavbarProps = {
  onParticipate: () => void
  onProducts: () => void
  onRegulation: () => void
  currentPage: AppPage
  onBack: () => void
  onCampaign: () => void
  onHeritage: () => void
}

const mainLinks = [
  { label: 'Campanha', href: '#hero' },
  { label: 'Herança', href: '#origin' },
  { label: 'Produtos', href: '#products-link' },
  { label: 'Regulamento', href: '#regulation' },
]

export default function Navbar({
  onParticipate,
  onProducts,
  onRegulation,
  currentPage,
  onBack,
  onCampaign,
  onHeritage,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Campanha')

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const threshold = currentPage === 'main' ? 700 : 300
      setScrolled(scrollY > threshold)

      if (currentPage === 'main') {
        if (scrollY < 650) {
          setActiveLink('Campanha')
        } else {
          setActiveLink('Herança')
        }
      } else if (currentPage === 'products') {
        setActiveLink('Produtos')
      } else if (currentPage === 'regulation') {
        setActiveLink('Regulamento')
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [currentPage])

  // On hero (blue top): white text. After scroll into white section: blue text.
  const isDark = !scrolled

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 200,
      transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      background: scrolled
        ? 'rgba(255,255,255,0.88)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,51,160,0.1)' : 'none',
      boxShadow: scrolled ? '0 2px 24px rgba(0,51,160,0.08)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
      }}>
        {/* Left: Unilever logo + OMO wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '12px',
            overflow: 'hidden',
            background: isDark ? 'transparent' : '#0033A0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.3s ease',
          }}>
            <img
              src={unileverWhite}
              alt="Unilever"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <OmoWordmark color={isDark ? 'white' : '#0033A0'} />
            <span style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,51,160,0.5)',
              borderLeft: `2px solid ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,51,160,0.2)'}`,
              paddingLeft: '14px',
            }}>
              Herança
            </span>
          </div>
        </div>

        {/* Center: floating pill nav */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,51,160,0.06)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,51,160,0.12)'}`,
          borderRadius: '100px',
          padding: '5px 6px',
        }}
          className="hidden md:flex"
        >
          {mainLinks.map(link => (
            <button
              key={link.label}
              onClick={() => {
                setActiveLink(link.label)
                if (link.label === 'Regulamento') onRegulation()
                else if (link.label === 'Produtos') onProducts()
                else if (link.label === 'Campanha') onCampaign()
                else if (link.label === 'Herança') onHeritage()
              }}
              style={{
                padding: '7px 18px',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: activeLink === link.label ? 600 : 400,
                color: activeLink === link.label
                  ? (isDark ? '#fff' : '#0033A0')
                  : (isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,51,160,0.55)'),
                background: activeLink === link.label
                  ? (isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,51,160,0.1)')
                  : 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.01em',
              }}>
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: CTA & Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            className="btn-red hidden sm:block"
            onClick={onParticipate}
            style={{ padding: '11px 24px', fontSize: '13px', flexShrink: 0 }}
          >
            Participar Agora
          </button>

          {/* Hamburger toggle button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isDark ? 'white' : '#0033A0',
              zIndex: 210,
              transition: 'transform 0.2s ease',
            }}
            className="md:hidden"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '68px',
          left: 0,
          right: 0,
          height: 'calc(100vh - 68px)',
          background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(0, 31, 107, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 190,
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          gap: '16px',
          animation: 'fade-up 0.3s cubic-bezier(0.25, 1, 0.5, 1) forwards',
          borderTop: scrolled ? '1px solid rgba(0,51,160,0.08)' : '1px solid rgba(255,255,255,0.08)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {mainLinks.map(link => (
              <button
                key={link.label}
                onClick={() => {
                  setMenuOpen(false)
                  setActiveLink(link.label)
                  if (link.label === 'Regulamento') onRegulation()
                  else if (link.label === 'Produtos') onProducts()
                  else if (link.label === 'Campanha') onCampaign()
                  else if (link.label === 'Herança') onHeritage()
                }}
                style={{
                  padding: '14px 20px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  textAlign: 'left',
                  color: scrolled ? '#0033A0' : '#fff',
                  background: activeLink === link.label
                    ? (scrolled ? 'rgba(0, 51, 160, 0.08)' : 'rgba(255, 255, 255, 0.15)')
                    : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div style={{ marginTop: 'auto', paddingBottom: '20px' }}>
            <button
              className="btn-red"
              onClick={() => {
                setMenuOpen(false)
                onParticipate()
              }}
              style={{ width: '100%', padding: '16px', fontSize: '15px' }}
            >
              Participar Agora
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

function OmoWordmark({ color }: { color: string }) {
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      fontWeight: 900,
      fontSize: '32px',
      letterSpacing: '-0.04em',
      color,
      lineHeight: 1,
      userSelect: 'none',
      position: 'relative',
    }}>
      OMO
      <span style={{
        position: 'absolute',
        bottom: '-6px',
        left: 0,
        right: 0,
        height: '4px',
        background: '#E52320',
        borderRadius: '2px',
      }} />
    </div>
  )
}
