import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles, HelpCircle, AlertTriangle, ArrowUpRight } from 'lucide-react'

type TipsPageProps = {
  onBack: () => void
  onParticipate: () => void
}

export default function TipsPage({ onBack, onParticipate }: TipsPageProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #FFFFF0 0%, #FAF6E6 45%, #F5E5BE 100%)',
      color: '#111934',
      padding: '120px 24px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative background vectors */}
      <div style={{
        position: 'absolute', top: '10%', right: '-10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(245,229,190,0.4) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Navigation & Header */}
        <div style={{ marginBottom: '56px' }}>
          <button
            onClick={onBack}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: '#111934',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 700,
              padding: '8px 0',
              fontFamily: 'Inter, sans-serif',
              transition: 'transform 0.2s ease',
            }}
            className="hover-translate-x"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para o Início
          </button>

          <div style={{ marginTop: '24px', textAlign: 'left' }}>
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#E52320',
              display: 'block',
              marginBottom: '12px'
            }}>
              Guia Prático
            </span>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#111934',
              lineHeight: 1.1,
            }}>
              Manual OMO <span style={{ color: '#E52320' }}>Tira Manchas.</span>
            </h1>
            <p style={{
              fontSize: '16px',
              color: 'rgba(17, 25, 52, 0.7)',
              marginTop: '16px',
              maxWidth: '600px',
              lineHeight: 1.6
            }}>
              Remover manchas e cuidar das roupas que você ama ficou mais fácil. Conheça as dicas oficiais para descomplicar sua rotina de lavagem.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px',
        }}>
          {/* Card 1: Dica Principal (Spans 8 columns on desktop) */}
          <motion.div
            className="bento-card"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              gridColumn: 'span 8',
              background: '#FFFFF0',
              border: '1.5px solid #111934',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: hoveredCard === 1 
                ? '0 20px 40px rgba(17, 25, 52, 0.12)' 
                : '0 4px 20px rgba(17, 25, 52, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background design glow */}
            <div style={{
              position: 'absolute', top: '-100px', right: '-100px',
              width: '250px', height: '250px',
              background: 'radial-gradient(circle, rgba(245,229,190,0.6) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: 'rgba(17, 25, 52, 0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#111934'
                }}>
                  <Sparkles className="w-5 h-5" />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.05em', color: '#111934', textTransform: 'uppercase' }}>
                  Dica Principal
                </span>
              </div>
              <h2 style={cardTitleStyle}>
                Descomplique o Seu Dia com OMO Tira Manchas
              </h2>
              <p style={cardBodyStyle}>
                Roupa de molho de um dia para o outro, esfregar a roupa durante horas, pré-tratamentos complicados e manchas que teimam em não sair de lavagem em lavagem são coisas do passado. Remover manchas é agora mais fácil e prático. O OMO Tira Manchas é imbatível para se livrar das manchas das roupas sem ter muito trabalho e sem perder tempo.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#E52320', marginTop: '24px' }}>
              Descubra mais sobre o produto <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Card 2: Como Usar (Spans 4 columns on desktop) */}
          <motion.div
            className="bento-card"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              gridColumn: 'span 4',
              background: '#111934',
              color: '#FFFFF0',
              border: '1.5px solid #111934',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: hoveredCard === 2 
                ? '0 20px 40px rgba(17, 25, 52, 0.25)' 
                : '0 4px 20px rgba(17, 25, 52, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: 'rgba(255, 255, 240, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFF0'
                }}>
                  <HelpCircle className="w-5 h-5" />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.05em', color: '#FFFFF0', textTransform: 'uppercase', opacity: 0.8 }}>
                  Como Usar
                </span>
              </div>
              <h2 style={{ ...cardTitleStyle, color: '#FFFFF0' }}>
                Fácil e Prático na Máquina
              </h2>
              <p style={{ ...cardBodyStyle, color: 'rgba(255, 255, 240, 0.75)' }}>
                Usar o produto é mesmo muito fácil: basta colocar ½ colher dosadora na máquina junto com OMO Lavagem Perfeita Líquido e seguir com a lavagem completa. Não precisa esfregar nem deixar de molho. Se for uma mancha mais resistente, você pode usar 1 colher cheia de OMO Tira Manchas na lavagem.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#F5E5BE', marginTop: '24px' }}>
              Instruções de lavagem <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Card 3: Dica Extra (Spans 12 columns, horizontal) */}
          <motion.div
            className="bento-card bento-card-horizontal"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              gridColumn: 'span 12',
              background: '#FFFFF0',
              border: '1.5px solid #111934',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: hoveredCard === 3 
                ? '0 20px 40px rgba(17, 25, 52, 0.12)' 
                : '0 4px 20px rgba(17, 25, 52, 0.04)',
              display: 'flex',
              gap: '40px',
              alignItems: 'center',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              width: '60px', height: '60px', borderRadius: '16px',
              background: 'rgba(229, 35, 32, 0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E52320',
              flexShrink: 0
            }}>
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.05em', color: '#E52320', textTransform: 'uppercase' }}>
                  Dica Extra
                </span>
              </div>
              <h2 style={{ ...cardTitleStyle, marginBottom: '8px' }}>
                Para as Manchas Mais Teimosas
              </h2>
              <p style={{ ...cardBodyStyle, maxWidth: '800px' }}>
                O OMO Tira Manchas também pode ser usado com a pré-lavagem, no caso de manchas mais teimosas, como uma mancha de caneta.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Campaign Call to Action */}
        <div style={{
          marginTop: '60px',
          background: 'linear-gradient(135deg, #111934 0%, #0d1326 100%)',
          borderRadius: '24px',
          padding: '48px',
          textAlign: 'center',
          color: '#FFFFF0',
          boxShadow: '0 20px 50px rgba(17, 25, 52, 0.15)',
        }}>
          <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Quer ganhar prêmios e eternizar seus relatos?
          </h3>
          <p style={{ fontSize: '15px', color: 'rgba(255, 255, 240, 0.7)', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Compartilhe sua história afetiva com OMO no nosso formulário de participação e concorra na Campanha Herança 2026.
          </p>
          <button
            className="btn-red"
            onClick={onParticipate}
            style={{ padding: '16px 40px', fontSize: '15px', fontWeight: 700 }}
          >
            Participar da Promoção Agora
          </button>
        </div>
      </div>

      <style>{`
        .hover-translate-x:hover {
          transform: translateX(-4px);
        }
        @media (max-width: 900px) {
          .bento-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 20px !important;
          }
          .bento-card {
            grid-column: span 12 !important;
            padding: 32px 24px !important;
          }
          .bento-card-horizontal {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  )
}

const cardTitleStyle = {
  fontSize: '22px',
  fontWeight: 850,
  letterSpacing: '-0.03em',
  color: '#111934',
  lineHeight: 1.25,
  marginBottom: '16px',
}

const cardBodyStyle = {
  fontSize: '14.5px',
  color: 'rgba(17, 25, 52, 0.72)',
  lineHeight: 1.7,
  fontWeight: 500,
}
