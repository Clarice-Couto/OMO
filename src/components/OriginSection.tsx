import { useEffect, useRef, useState } from 'react'
import omoBPhoto from '@/imports/OMO_b.jpg'

export default function OriginSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="origin"
      ref={ref}
      style={{
        padding: '120px 24px',
        background: 'linear-gradient(180deg, #FFFFF0 0%, #FAF6E6 40%, #F5E5BE 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative large OMO in background */}
      <div style={{
        position: 'absolute',
        fontSize: '600px',
        fontWeight: 900,
        fontFamily: 'Inter, sans-serif',
        color: 'rgba(17,25,52,0.015)',
        top: '-60px',
        left: '-80px',
        lineHeight: 1,
        userSelect: 'none',
        letterSpacing: '-0.06em',
        pointerEvents: 'none',
      }}>
        OMO
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        {/* Label */}
        <div style={{
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#E52320',
          marginBottom: '48px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(20px)',
          transition: 'all 0.7s ease',
        }}>
          A Origem do Cuidado · Desde 1908
        </div>

        {/* OMO + Owl SVG */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.92)',
          transition: 'all 1s cubic-bezier(0.4,0,0.2,1) 0.15s',
          marginBottom: '60px',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <OmoOwlDisplay />
        </div>

        {/* Text */}
        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 52px)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
          marginBottom: '28px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(24px)',
          transition: 'all 0.9s cubic-bezier(0.4,0,0.2,1) 0.3s',
          color: '#111934',
        }}>
          <span style={{ color: '#111934' }}>Três letras.</span>{' '}
          <span style={{ color: '#111934' }}>Uma história que</span>
          <br />
          <span style={{ color: '#E52320' }}>atravessa séculos.</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          textAlign: 'left',
          marginTop: '60px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(24px)',
          transition: 'all 0.9s cubic-bezier(0.4,0,0.2,1) 0.3s',
        }}>
          {/* Left: historical image of Old Mother Owl */}
          <div style={{
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 16px 48px rgba(17,25,52,0.06)',
            border: '1.5px solid #111934',
            position: 'relative',
          }}>
            <img 
              src={omoBPhoto} 
              alt="Old Mother Owl" 
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '340px', objectFit: 'contain', background: '#FFFFF0' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(0deg, rgba(17,25,52,0.85) 0%, transparent 100%)',
              padding: '16px 20px',
              color: '#FFFFF0',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              Mascote Histórica · 1908
            </div>
          </div>

          {/* Right: text & timeline */}
          <div>
            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 38px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              color: '#111934',
              marginBottom: '20px',
            }}>
              A Velha Mãe Coruja
            </h2>
            <p style={{
              fontSize: '15px',
              color: 'rgba(17,25,52,0.7)',
              lineHeight: 1.7,
              marginBottom: '28px',
            }}>
              Em 1908, a <em style={{ color: '#111934', fontStyle: 'italic', fontWeight: 600 }}>"Old Mother Owl"</em>, a Velha Mãe Coruja, representava sabedoria, proteção e o cuidado que passa de mão em mão. As letras O·M·O carregam esse legado: um símbolo que evoluiu de geração em geração sem jamais perder sua essência de proteção e carinho.
            </p>

            {/* Timeline */}
            <div style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
            }}>
              {[
                { year: '1908', label: 'Old Mother Owl', color: '#111934' },
                { year: '1953', label: 'OMO no Brasil', color: '#111934' },
                { year: '2026', label: 'Coleção Herança', color: '#E52320' },
              ].map((item, i) => (
                <div key={i} style={{ minWidth: '100px', flex: '1 1 0px' }}>
                  <div style={{
                    fontSize: '22px',
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    color: item.color,
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}>
                    {item.year}
                  </div>
                  <div style={{
                    fontSize: '10px',
                    color: 'rgba(17,25,52,0.55)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    fontWeight: 650,
                  }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OmoOwlDisplay() {
  return (
    <svg
      width="520"
      height="220"
      viewBox="0 0 520 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: '95vw' }}
    >
      <text x="90" y="175" textAnchor="middle" fill="#111934" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="160" letterSpacing="-4" opacity="0.95">
        O
      </text>
      <text x="260" y="175" textAnchor="middle" fill="#111934" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="160" opacity="0.95">
        M
      </text>
      <text x="430" y="175" textAnchor="middle" fill="#111934" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="160" opacity="0.95">
        O
      </text>
      <rect x="30" y="185" width="460" height="4" rx="2" fill="#E52320" opacity="0.75" />
    </svg>
  )
}
