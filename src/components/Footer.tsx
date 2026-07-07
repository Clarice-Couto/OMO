import unileverBlue from '@/imports/images.png'
import unileverWhite from '@/imports/images__1_.jpeg'

type FooterProps = {
  onProducts: () => void
  onRegulation: () => void
  onParticipate: () => void
  showCTA?: boolean
}

const cols = {
  Produto: ['Linha Pó Herança', 'Linha Líquido Herança', 'Coleção OMO Herança', 'Fragrâncias'],
  Campanha: ['Como Participar', 'Regulamento', 'Histórias', 'Sobre a Ação'],
  Empresa: ['Sobre a OMO', 'Unilever Brasil', 'Sustentabilidade', 'Contato'],
}

export default function Footer({ onProducts, onRegulation, onParticipate, showCTA = true }: FooterProps) {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #f0f4ff 30%, #001f6b 100%)',
    }}>
      {/* Pre-footer CTA band */}
      {showCTA && (
        <div style={{
          background: 'linear-gradient(135deg, #0033A0 0%, #001f6b 100%)',
          padding: '64px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 70% 50%, rgba(229,35,32,0.1) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '20px' }}>
            Não perca a oportunidade
          </div>
          <h2 style={{
            fontSize: 'clamp(26px, 4.5vw, 52px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: '#fff',
            lineHeight: 1.08,
            marginBottom: '20px',
            position: 'relative',
          }}>
            Participe agora e eternize
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #ff9e9c, #E52320)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              sua história de cuidado.
            </span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.6 }}>
            Válido até 31/12/2026. Participe registrando seu código e compartilhando sua história.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-red" onClick={onParticipate} style={{ padding: '16px 36px', fontSize: '15px' }}>
              Participar Agora →
            </button>
            <button className="btn-white" onClick={onRegulation} style={{ padding: '16px 28px', fontSize: '14px' }}>
              Ver Regulamento
            </button>
          </div>
        </div>
      )}

      {/* Main footer body: dark blue */}
      <div style={{
        background: '#001240',
        padding: '64px 40px 40px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Top row */}
          <div style={{
            display: 'flex',
            gap: '48px',
            flexWrap: 'wrap',
            marginBottom: '56px',
          }}>
            {/* Brand col */}
            <div style={{ flex: '1 1 260px', minWidth: '220px' }}>
              {/* Logos */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{
                  width: '52px', height: '52px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}>
                  <img
                    src={unileverWhite}
                    alt="Unilever"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div style={{
                    fontSize: '26px',
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    color: '#fff',
                    lineHeight: 1,
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '2px',
                  }}>
                    OMO
                  </div>
                  <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                    Uma marca Unilever
                  </div>
                </div>
              </div>
              <p style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.35)',
                lineHeight: 1.75,
                maxWidth: '280px',
                letterSpacing: '-0.01em',
              }}>
                Mais de 70 anos cuidando do que importa. OMO Herança, uma homenagem às memórias de cuidado que nos formam.
              </p>

            </div>

            {/* Link cols */}
            {Object.entries(cols).map(([section, items]) => (
              <div key={section} style={{ flex: '1 1 140px', minWidth: '120px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '20px' }}>
                  {section}
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {items.map(item => (
                    <li key={item}>
                      <a
                        href="#"
                        onClick={e => {
                          e.preventDefault()
                          if (item === 'Regulamento') onRegulation()
                          else if (item === 'Como Participar') onParticipate()
                          else if (item.includes('Herança') || item.includes('Fragrâncias') || item.includes('Coleção') || item.includes('Colecionável')) onProducts()
                          else if (item === 'Sobre a OMO') window.open('https://www.omo.com.br', '_blank')
                          else if (item === 'Unilever Brasil') window.open('https://www.unilever.com.br', '_blank')
                          else if (item === 'Contato') window.open('https://www.unilever.com.br/contact/', '_blank')
                        }}
                        style={{
                          fontSize: '13px',
                          color: 'rgba(255,255,255,0.4)',
                          textDecoration: 'none',
                          letterSpacing: '-0.01em',
                          transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '28px' }} />

          {/* Bottom bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src={unileverBlue}
                alt="Unilever"
                style={{ width: '24px', height: '24px', objectFit: 'contain', opacity: 0.3, borderRadius: '4px' }}
              />
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.22)', letterSpacing: '-0.01em' }}>
                © 2026 Unilever Brasil Ltda. OMO® é marca registrada. Todos os direitos reservados.
              </span>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              {['Privacidade', 'Termos', 'Cookies', 'LGPD'].map(item => (
                <a
                  key={item}
                  href="#"
                  style={{ fontSize: '11px', color: 'rgba(255,255,255,0.22)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.22)' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
