import { useEffect, useState } from 'react'
import omoProduct from '@/imports/images.jpeg'
import laundryPhoto from '@/imports/OMO-amplia-digitalizacao-das-lavanderias-com-aplicativo-reformulado-e-totens-de-pagamento.jpg'

type HeroProps = {
  onParticipate: () => void
  onProducts: () => void
}

export default function Hero({ onParticipate, onProducts }: HeroProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const parallaxFade = Math.max(0, 1 - scrollY * 0.0022)
  const parallaxY = scrollY * 0.35

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '60px',
      }}
    >
      {/* Deep blue hero bg */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(160deg, #001f6b 0%, #0033A0 35%, #0055cc 65%, #3377e8 85%, transparent 100%)',
        zIndex: 0,
      }} />

      {/* Decorative rings */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.07)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }} />
        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }} />
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(229,35,32,0.12) 0%, transparent 70%)',
          top: '25%',
          right: '10%',
          filter: 'blur(40px)',
        }} />
      </div>

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 40px 60px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        opacity: parallaxFade,
        transform: `translateY(${parallaxY * 0.3}px)`,
      }}
        className="hero-grid"
      >
        {/* Left: Copy */}
        <div>

          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            fontWeight: 900,
            lineHeight: 1.04,
            letterSpacing: '-0.045em',
            marginBottom: '28px',
            fontFamily: 'Inter, sans-serif',
          }}>
            <span className="text-blue-gradient">Limpeza que</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.95)' }}>você vê.</span>
            <br />
            <span className="text-blue-gradient" style={{ opacity: 0.8 }}>Perfume que</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>você sente.</span>
            <br />
            <span className="text-red-gradient">História que</span>
            <br />
            <span className="text-red-gradient">você guarda.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            marginBottom: '44px',
            maxWidth: '480px',
            letterSpacing: '-0.01em',
          }}>
            Mais de um século de cuidado e tradição numa embalagem que conta a história de quem somos, a linhagem que atravessa gerações.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              className="btn-red w-full sm:w-auto"
              onClick={onParticipate}
              style={{ padding: '17px 36px', fontSize: '15px' }}
            >
              Participar Agora →
            </button>
            <button
              className="btn-white w-full sm:w-auto"
              onClick={onProducts}
              style={{ padding: '17px 32px', fontSize: '15px' }}
            >
              Conhecer a Linha Completa
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-between sm:justify-start gap-4 sm:gap-9 mt-14 pt-9 border-t border-[rgba(255,255,255,0.1)] flex-wrap">
            {[
              { value: '70+', label: 'anos de história' },
              { value: '25M', label: 'lares atendidos' },
              { value: '#1', label: 'no Brasil' },
            ].map(stat => (
              <div key={stat.value} style={{ minWidth: '80px' }}>
                <div style={{
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  color: '#fff',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product + photo collage */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Lifestyle photo card */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
          }}
            className="animate-float"
          >
            <img
              src={laundryPhoto}
              alt="Cuidado e Tradição"
              style={{
                width: '100%',
                height: '280px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Overlay caption */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(0deg, rgba(0,19,64,0.85) 0%, transparent 100%)',
              padding: '24px 20px 16px',
            }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Momentos de Cuidado · 2026
              </div>
            </div>
          </div>

          {/* Product shot card */}
          <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'stretch',
          }}>
            <div
              className="glass-dark animate-float-delay"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                flex: '0 0 140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
                boxShadow: '0 16px 50px rgba(0,0,0,0.3)',
              }}
            >
              <img
                src={omoProduct}
                alt="OMO Lavagem Perfeita"
                style={{
                  width: '100%',
                  objectFit: 'contain',
                  maxHeight: '150px',
                  borderRadius: '8px',
                }}
              />
            </div>

            <div className="glass-dark" style={{
              flex: 1,
              borderRadius: '20px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(229,35,32,0.2)',
                  border: '1px solid rgba(229,35,32,0.3)',
                  borderRadius: '100px',
                  padding: '3px 12px',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#ff9e9c',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}>
                  Coleção OMO Herança
                </div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: '6px' }}>
                  OMO Lavagem
                  <br />
                  Perfeita
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                  Ativo Concentrado
                </div>
              </div>
              <button
                className="btn-red"
                onClick={onProducts}
                style={{ padding: '10px 16px', fontSize: '12px', marginTop: '12px' }}
              >
                Conhecer a Linha →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        zIndex: 3,
        opacity: parallaxFade * 0.7,
      }}>
        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Rolar
        </span>
        <div style={{
          width: '22px', height: '36px',
          border: '1.5px solid rgba(255,255,255,0.25)',
          borderRadius: '11px',
          display: 'flex', justifyContent: 'center', paddingTop: '6px',
        }}>
          <div style={{
            width: '3px', height: '7px',
            background: '#E52320',
            borderRadius: '2px',
            animation: 'float-gentle 1.6s ease-in-out infinite',
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 60px 20px 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
