import { useState } from 'react'
import { motion } from 'framer-motion'
import { Droplet, Wind, Layers, ArrowUpRight } from 'lucide-react'
import omoCampanha from '@/imports/omo_campanha.png'
import cestoPhoto from '@/imports/photo-1582735689369-4fe89db7114c.avif'
import comoSecarRoupa from '@/imports/como-secar-roupa-rapido.jpg'

export default function CareHub() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section
      id="care-hub"
      style={{
        padding: '120px 24px',
        background: 'linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Accent */}
      <div style={{
        position: 'absolute', top: '25%', left: '50%', transform: 'translateX(-50%)',
        width: '1000px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,51,160,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#E52320', display: 'block', marginBottom: '12px'
          }}>
            Guia de Cuidados
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4.5vw, 54px)', fontWeight: 900,
            letterSpacing: '-0.04em', color: '#001240', lineHeight: 1.08
          }}>
            Hub de Dicas de Cuidado <span style={{ color: '#0033A0' }}>OMO Herança.</span>
          </h2>
          <p style={{
            fontSize: '14px', color: 'rgba(0,19,64,0.55)', marginTop: '16px',
            maxWidth: '560px', margin: '16px auto 0', lineHeight: 1.6
          }}>
            Aprenda a maximizar a durabilidade das suas roupas afetivas com técnicas clássicas e inovadoras de lavanderia e pós-lavagem.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="care-hub-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px',
        }}>
          
          {/* CARD 1: Destaque - Tamanho Duplo */}
          <motion.a
            href="https://www.cleanipedia.com/br/lavanderia/como-usar-sabao-em-po.html"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{
              scale: 1.02,
              y: -4,
              boxShadow: '0 25px 50px -12px rgba(0, 51, 160, 0.12)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="care-card care-card-double"
            style={{
              background: '#ffffff',
              border: hoveredCard === 1 ? '1.5px solid rgba(0, 51, 160, 0.18)' : '1.5px solid rgba(0, 51, 160, 0.07)',
            }}
          >
            {/* Content half */}
            <div style={{
              flex: 1,
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    background: '#f4f7ff', border: '1px solid rgba(0,51,160,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0033A0'
                  }}>
                    <Droplet className="w-5 h-5" />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 800, tracking: 'wider', color: '#0033A0', textTransform: 'uppercase' }}>
                    Dosagem & Diluição
                  </span>
                </div>
                <h3 style={cardTitleStyle}>
                  O Segredo da Diluição Perfeita do OMO Pó
                </h3>
                <p style={cardSubtitleStyle}>
                  Maximize o rendimento e evite resíduos.
                </p>
                <p style={cardBodyStyle}>
                  Para ativar as microcápsulas de perfume e as enzimas de limpeza na dosagem certa, nunca jogue o sabão diretamente sobre as roupas secas. Encha a máquina com água, adicione a dose ideal de OMO Herança Pó (focando no excelente custo por lavagem de menos de <strong style={{ color: '#0033A0' }}>R$ 0,80 por dose!</strong>), mexa para diluir completamente e só então coloque as roupas. Isso garante eficiência máxima na primeira lavagem.
                </p>
              </div>
              <div className="care-cta" style={{
                display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700,
                color: '#0033A0', marginTop: '32px', transition: 'transform 0.2s ease'
              }}>
                Ver Dica Completa <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            {/* Image half */}
            <div className="care-img-container-double">
              <img
                src={omoCampanha}
                alt="Mistura perfeita de água e sabão OMO"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

            </div>
          </motion.a>

          {/* CARD 2: Tamanho Médio */}
          <motion.a
            href="https://www.cleanipedia.com/br/lavanderia/como-secar-roupa.html"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{
              scale: 1.02,
              y: -4,
              boxShadow: '0 25px 50px -12px rgba(0, 51, 160, 0.12)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="care-card care-card-medium"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 51, 160, 0.05) 0%, rgba(255, 255, 255, 0.95) 100%)',
              border: hoveredCard === 2 ? '1.5px solid rgba(0, 51, 160, 0.18)' : '1.5px solid rgba(0, 51, 160, 0.07)',
              backdropFilter: 'blur(12px)',
              padding: '40px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: '#ffffff', border: '1px solid rgba(0,51,160,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0033A0'
                }}>
                  <Wind className="w-5 h-5" />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, tracking: 'wider', color: '#0033A0', textTransform: 'uppercase' }}>
                  Secagem
                </span>
              </div>
              <h3 style={cardTitleStyle}>
                Secagem Inteligente: Preservando as Fibras
              </h3>
              <p style={cardSubtitleStyle}>
                Como estender para passar menos ferro.
              </p>
              <p style={cardBodyStyle}>
                Seque suas roupas afetivas sempre do avesso e à sombra para proteger as cores contra o desbotamento solar. Sacuda bem as peças antes de estender e alinhe-as pelas costuras no varal. Camisas e tecidos finos secam melhor diretamente em cabides, reduzindo os vincos e facilitando a dobra.
              </p>
            </div>
            <div style={{ marginTop: '24px' }}>
              <div className="care-img-container-medium">
                <img
                  src={comoSecarRoupa}
                  alt="Roupas estendidas no varal à sombra"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="care-cta" style={{
                display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700,
                color: '#0033A0', transition: 'transform 0.2s ease'
              }}>
                Ver Dica Completa <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>

          {/* CARD 3: Tamanho Médio */}
          <motion.a
            href="https://www.cleanipedia.com/br/organizacao-da-casa/como-dobrar-roupa.html"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{
              scale: 1.02,
              y: -4,
              boxShadow: '0 25px 50px -12px rgba(0, 51, 160, 0.12)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="care-card care-card-medium"
            style={{
              background: '#ffffff',
              border: hoveredCard === 3 ? '1.5px solid rgba(229, 35, 32, 0.18)' : '1.5px solid rgba(0, 51, 160, 0.07)',
              padding: '40px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: '#fff0f0', border: '1px solid rgba(229,35,32,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E52320'
                }}>
                  <Layers className="w-5 h-5" />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, tracking: 'wider', color: '#E52320', textTransform: 'uppercase' }}>
                  Organização
                </span>
              </div>
              <h3 style={cardTitleStyle}>
                A Arte da Dobra e Organização Eficiente
              </h3>
              <p style={cardSubtitleStyle}>
                Roupas impecáveis por muito mais tempo.
              </p>
              <p style={cardBodyStyle}>
                Dobre as peças logo após a secagem para evitar novos vincos. Agrupe por categoria e guarde em gavetas usando a dobra em rolo ou vertical, o que melhora a visualização no armário e ativa o aroma das microcápsulas de fragrância toda vez que você abrir a gaveta, mantendo o perfume de cuidado por semanas.
              </p>
            </div>
            <div style={{ marginTop: '24px' }}>
              <div className="care-img-container-medium">
                <img
                  src={cestoPhoto}
                  alt="Roupas limpas e perfeitamente dobradas"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom' }}
                />
              </div>
              <div className="care-cta" style={{
                display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700,
                color: '#E52320', transition: 'transform 0.2s ease'
              }}>
                Ver Dica Completa <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>

        </div>
      </div>

      <style>{`
        .care-card {
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0, 51, 160, 0.04);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          text-decoration: none;
          color: inherit;
        }
        .care-card-double {
          grid-column: span 12;
          flex-direction: row;
        }
        .care-card-medium {
          grid-column: span 6;
          flex-direction: column;
          justify-content: space-between;
        }
        .care-img-container-double {
          width: 45%;
          position: relative;
          overflow: hidden;
        }
        .care-img-container-medium {
          width: 100%;
          height: 240px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 24px;
        }
        .care-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #ffffff 0%, transparent 50%);
          pointer-events: none;
        }
        .care-card:hover .care-cta {
          transform: translateX(4px);
        }
        
        @media (max-width: 768px) {
          .care-hub-grid {
            gap: 16px !important;
          }
          .care-card-double {
            flex-direction: column !important;
          }
          .care-card-medium {
            grid-column: span 12 !important;
            padding: 32px !important;
          }
          .care-img-container-double {
            width: 100% !important;
            height: 220px !important;
          }
          .care-gradient-overlay {
            background: linear-gradient(0deg, #ffffff 0%, transparent 50%) !important;
          }
          .care-card-double > div {
            padding: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}

const cardTitleStyle: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: 850,
  letterSpacing: '-0.03em',
  color: '#001240',
  lineHeight: 1.2,
  marginBottom: '8px',
}

const cardSubtitleStyle: React.CSSProperties = {
  fontSize: '12px',
  fontWeight: 700,
  color: 'rgba(0,19,64,0.4)',
  marginBottom: '16px',
}

const cardBodyStyle: React.CSSProperties = {
  fontSize: '14px',
  color: 'rgba(0,19,64,0.58)',
  lineHeight: 1.65,
  fontWeight: 500,
}
