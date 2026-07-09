import { useState } from 'react'
import omoProduct from '@/imports/images.jpeg'
import downloadPhoto from '@/imports/download.webp'
import sabaoPoLiquido from '@/imports/sabao-po-liquido-omo-lavagem-perfeita-900ml.webp'
import productsCombinedPhoto from '@/imports/4f80667b58000a9e4a4e180de6ab175d.webp'

type ProductsPageProps = {
  onBack?: () => void
  onParticipate: () => void
}

type Fragrance = { name: string; notes: string; color: string; textColor: string }

const fragrances: Fragrance[] = [
  { name: 'Cheirinho de Cuidado', notes: 'Toque de carinho, conexão familiar e memórias afetuosas', color: '#FAF6E6', textColor: '#111934' }
]

const productsData = [
  {
    title: "OMO Herança Pó",
    subtitle: "1,6 kg · Cuidado Clássico",
    description: "A clássica e insubstituível limpeza profunda que acompanha gerações, removendo manchas difíceis sem agredir os tecidos.",
    badge: "Tradição",
    badgeColor: "#111934",
    image: omoProduct
  },
  {
    title: "OMO Herança Líquido",
    subtitle: "3 L · Proteção Ativa",
    description: "A fórmula líquida com enzimas ativas de alta performance, projetada para agir de forma rápida e preservar as cores vivas das suas roupas.",
    badge: "Cuidado",
    badgeColor: "#E52320",
    image: downloadPhoto
  },
  {
    title: "OMO Herança Refil Líquido",
    subtitle: "900 ml · Praticidade",
    description: "Sustentabilidade e economia na medida certa. O formato refil reduz o uso de plástico mantendo a mesma e incomparável qualidade de lavagem.",
    badge: "Prático",
    badgeColor: "#008060",
    image: sabaoPoLiquido
  }
]

export default function ProductsPage({ onParticipate }: ProductsPageProps) {
  const [activeFrag, setActiveFrag] = useState<number | null>(null)

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #FFFFF0 0%, #FAF6E6 40%, #F5E5BE 100%)',
      paddingTop: '0px',
    }}>
      {/* Hero bar */}
      <div style={{
        background: 'linear-gradient(135deg, #111934 0%, #1c2850 50%, #293d7c 100%)',
        padding: '120px 24px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 30% 50%, rgba(229,35,32,0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        
        <div className="hero-grid" style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Left: Text & CTA */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,240,0.6)', marginBottom: '16px' }}>
              Portfólio Exclusivo
            </div>
            <h1 style={{
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#FFFFF0',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}>
              Linha OMO{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ff9e9c, #E52320)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Herança
              </span>
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,240,0.75)', marginBottom: '32px', lineHeight: 1.65, maxWidth: '460px' }}>
              Três versões de cuidado com a mesma tradição de carinho, conectadas pela nossa fragrância exclusiva que desperta memórias de afeto.
            </p>
            <button className="btn-red" onClick={onParticipate} style={{ padding: '15px 36px', fontSize: '14px', cursor: 'pointer' }}>
              Participar da Campanha →
            </button>
          </div>

          {/* Right: The combined photo */}
          <div style={{
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(17,25,52,0.15)',
            border: '1.5px solid #FFFFF0',
            position: 'relative',
          }}>
            <img 
              src={productsCombinedPhoto} 
              alt="Linha OMO Herança" 
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '380px', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(0deg, rgba(17,25,52,0.85) 0%, transparent 100%)',
              padding: '16px 20px',
              color: '#FFFFF0',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              Família OMO Herança
            </div>
          </div>
        </div>
      </div>

      {/* Products side-by-side */}
      <div className="products-section" style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '80px 32px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '80px',
        }}>
          {productsData.map((p, idx) => (
            <ProductCard
              key={idx}
              title={p.title}
              subtitle={p.subtitle}
              description={p.description}
              badge={p.badge}
              badgeColor={p.badgeColor}
              image={p.image}
              activeFrag={activeFrag}
              onFragSelect={setActiveFrag}
            />
          ))}
        </div>

        {/* Fragrance section */}
        <div className="fragrance-card-wrapper" style={{
          background: '#FFFFF0',
          borderRadius: '24px',
          border: '1.5px solid #111934',
          padding: '48px',
          boxShadow: '0 4px 40px rgba(17,25,52,0.04)',
          marginBottom: '60px',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
            alignItems: 'center',
          }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E52320', marginBottom: '12px' }}>
                Fragrância de Conexão
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.035em', color: '#111934', marginBottom: '16px', lineHeight: 1.25 }}>
                Cheirinho de Cuidado
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(17,25,52,0.7)', lineHeight: 1.6 }}>
                Criado especialmente para a Coleção Herança, este perfume combina notas clássicas com acordes reconfortantes que resgatam memórias de carinho e a união entre gerações de famílias brasileiras.
              </p>
            </div>

            <div
              style={{
                background: '#FAF6E6',
                borderRadius: '20px',
                padding: '24px 32px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                border: `1.5px dashed #111934`,
              }}
            >
              <div style={{
                width: '56px', height: '56px',
                borderRadius: '50%',
                background: 'rgba(17,25,52,0.05)',
                border: '2px solid rgba(17,25,52,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', flexShrink: 0,
              }}>
                ❤️
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#111934', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                  Cheirinho de Cuidado
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(17,25,52,0.6)', letterSpacing: '0.02em', fontWeight: 650 }}>
                  Toque de carinho, conexão familiar e memórias afetuosas
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center !important; }
          .hero-grid > div { text-align: center !important; }
        }
        @media (max-width: 640px) {
          .products-section { padding: 48px 16px !important; }
          .fragrance-card-wrapper { padding: 32px 20px !important; }
        }
      `}</style>
    </div>
  )
}

function ProductCard({
  title,
  subtitle,
  description,
  badge,
  badgeColor,
  activeFrag,
  onFragSelect,
  image,
}: {
  title: string
  subtitle: string
  description: string
  badge: string
  badgeColor: string
  activeFrag: number | null
  onFragSelect: (i: number | null) => void
  image: string
}) {
  const [hovered, setHovered] = useState(false)

  const bg = (activeFrag !== null && activeFrag >= 0 && fragrances[activeFrag])
    ? fragrances[activeFrag].color
    : (hovered ? '#F5E5BE' : '#FFFFF0')

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg,
        border: `1.5px solid ${hovered ? '#E52320' : '#111934'}`,
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: hovered ? '0 16px 60px rgba(17,25,52,0.12)' : '0 4px 24px rgba(17,25,52,0.04)',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image area */}
      <div style={{
        background: `linear-gradient(135deg, ${bg} 0%, #FAF6E6 100%)`,
        padding: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '220px',
        transition: 'background 0.4s ease',
      }}>
        <img
          src={image}
          alt={title}
          style={{
            height: '180px',
            objectFit: 'contain',
            filter: `drop-shadow(0 12px 28px rgba(17,25,52,0.1))`,
            transform: hovered ? 'scale(1.06) translateY(-4px)' : 'none',
            transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}>
            <div style={{
              display: 'inline-block',
              background: `${badgeColor}12`,
              border: `1px solid ${badgeColor}25`,
              borderRadius: '100px',
              padding: '4px 12px',
              fontSize: '10px',
              fontWeight: 700,
              color: badgeColor,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              {badge}
            </div>
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.03em', color: '#111934', marginBottom: '4px' }}>
            {title}
          </h3>
          <div style={{ fontSize: '12px', color: 'rgba(17,25,52,0.55)', marginBottom: '16px', fontWeight: 600 }}>
            {subtitle}
          </div>
          <p style={{ fontSize: '14px', color: 'rgba(17,25,52,0.7)', lineHeight: 1.7, marginBottom: '24px' }}>
            {description}
          </p>
        </div>

        {/* Fragrance picker mini */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: 650, color: 'rgba(17,25,52,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
            Fragrância
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {fragrances.map((f, i) => (
              <div
                key={i}
                onMouseEnter={() => onFragSelect(i)}
                onMouseLeave={() => onFragSelect(null)}
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: f.color,
                  border: `2px solid ${activeFrag === i ? '#111934' : 'rgba(17,25,52,0.2)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  transform: activeFrag === i ? 'scale(1.15)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                }}
                title={f.name}
              >
                ❤️
              </div>
            ))}
            <span style={{ fontSize: '12px', color: 'rgba(17,25,52,0.6)', fontWeight: 600 }}>
              {fragrances[0].name}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
