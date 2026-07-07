import { useEffect, useRef, useState } from 'react'

type FeatureId = 0 | 1 | 2

const features = [
  {
    id: 0 as FeatureId,
    tag: 'Inovação',
    title: 'Microcápsulas de Perfume',
    short: 'Tecnologia avançada que libera fragrância a cada movimento das fibras.',
    full: 'As microcápsulas são minúsculas esferas que ficam aderidas às fibras do tecido. Quando há atrito, como ao sentar ou abraçar alguém, elas se rompem e liberam a fragrância de forma progressiva. O resultado é uma roupa que cheira bem por até 72 horas após a lavagem, mantendo a sensação de frescor duradouro ao longo de todo o dia.',
    icon: <MicrocapsuleIcon />,
    span: 'col-span-7',
    accentBg: 'linear-gradient(135deg, #f0f4ff 0%, #e0ecff 100%)',
    accentColor: '#0033A0',
  },
  {
    id: 1 as FeatureId,
    tag: 'Sustentabilidade',
    title: 'Ciclo Rápido Avançado',
    short: 'Lavagem completa em menos tempo, com menor consumo de energia e água.',
    full: 'A fórmula OMO Herança foi desenvolvida para agir em ciclos curtos sem comprometer a limpeza profunda. Com enzimas ativas que atacam manchas desde os primeiros minutos, você reduz em até 40% o tempo de ciclo e economiza significativamente no consumo de água e energia, sem abrir mão de roupas impecáveis.',
    icon: <CycleIcon />,
    span: 'col-span-5',
    accentBg: 'linear-gradient(135deg, #fff0f0 0%, #ffe0e0 100%)',
    accentColor: '#E52320',
  },
  {
    id: 2 as FeatureId,
    tag: 'Tradição',
    title: 'Segredos de Geração em Geração',
    short: 'A fórmula que remove as manchas mais difíceis com a sabedoria de décadas.',
    full: 'Inspirada em mais de 70 anos de pesquisa e nas técnicas que as famílias brasileiras passaram de geração em geração, a fórmula OMO Herança combina poder de limpeza superior com delicadeza para os tecidos. Do barro das brincadeiras de criança ao vermelho do molho de tomate, nada fica para trás.',
    icon: <HeritageIcon />,
    span: 'col-span-12',
    accentBg: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%)',
    accentColor: '#0033A0',
  },
]

export default function BentoGrid() {
  const [expanded, setExpanded] = useState<FeatureId | null>(null)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="features"
      style={{
        padding: '120px 24px',
        background: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative top divider */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '900px', height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,51,160,0.15) 30%, rgba(229,35,32,0.15) 70%, transparent 100%)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '72px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)',
        }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E52320', marginBottom: '16px' }}>
            Tecnologia & Tradição
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 54px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: '#001240',
            lineHeight: 1.08,
          }}>
            O que torna OMO Herança{' '}
            <span style={{ color: '#0033A0' }}>único.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '16px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(40px)',
            transition: 'all 0.9s cubic-bezier(0.4,0,0.2,1) 0.15s',
          }}
        >
          {/* Microcapsule: large */}
          <BentoCard
            feature={features[0]}
            gridColumn="1 / span 7"
            onExpand={() => setExpanded(0)}
          />
          {/* Cycle: medium */}
          <BentoCard
            feature={features[1]}
            gridColumn="8 / span 5"
            onExpand={() => setExpanded(1)}
          />
          {/* Heritage: full width */}
          <BentoCard
            feature={features[2]}
            gridColumn="1 / span 12"
            horizontal
            onExpand={() => setExpanded(2)}
          />
        </div>
      </div>

      {/* Expanded overlay */}
      {expanded !== null && (
        <ExpandedOverlay
          feature={features[expanded]}
          onClose={() => setExpanded(null)}
        />
      )}

      <style>{`
        @media (max-width: 768px) {
          .bento-card { grid-column: 1 / span 12 !important; }
        }
      `}</style>
    </section>
  )
}

function BentoCard({
  feature,
  gridColumn,
  horizontal = false,
  onExpand,
}: {
  feature: typeof features[0]
  gridColumn: string
  horizontal?: boolean
  onExpand: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="bento-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn,
        background: '#fff',
        border: hovered
          ? `1.5px solid ${feature.accentColor}30`
          : '1.5px solid rgba(0,51,160,0.07)',
        borderRadius: '20px',
        padding: '32px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: hovered
          ? `0 12px 48px ${feature.accentColor}18`
          : '0 2px 16px rgba(0,51,160,0.05)',
        display: horizontal ? 'flex' : 'block',
        gap: horizontal ? '48px' : undefined,
        alignItems: horizontal ? 'center' : undefined,
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
      onClick={onExpand}
    >
      {/* Hover bg glow */}
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0,
          background: feature.accentBg,
          opacity: 0.6,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }} />
      )}

      {/* Icon */}
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '15px',
        background: hovered ? feature.accentBg : '#f4f7ff',
        border: `1px solid ${feature.accentColor}20`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: horizontal ? 0 : '24px',
        flexShrink: 0,
        position: 'relative',
        transition: 'all 0.3s ease',
      }}>
        {feature.icon}
      </div>

      <div style={{ position: 'relative', flex: horizontal ? 1 : undefined }}>
        <div style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: feature.accentColor,
          marginBottom: '8px',
          opacity: 0.8,
        }}>
          {feature.tag}
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: '#001240',
          lineHeight: 1.2,
          marginBottom: '12px',
        }}>
          {feature.title}
        </h3>
        <p style={{
          fontSize: '14px',
          color: 'rgba(0,19,64,0.55)',
          lineHeight: 1.7,
          letterSpacing: '-0.01em',
          maxWidth: horizontal ? '600px' : undefined,
        }}>
          {feature.short}
        </p>
      </div>

      {/* CTA */}
      <div style={{
        marginTop: horizontal ? 0 : '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '13px',
        fontWeight: 700,
        color: feature.accentColor,
        opacity: hovered ? 1 : 0.6,
        transition: 'all 0.2s ease',
        flexShrink: 0,
        position: 'relative',
      }}>
        Ver Mais Detalhes
        <span style={{
          display: 'inline-flex',
          width: '28px', height: '28px',
          borderRadius: '50%',
          border: `1.5px solid ${feature.accentColor}40`,
          alignItems: 'center', justifyContent: 'center',
          transform: hovered ? 'translateX(4px)' : 'none',
          transition: 'transform 0.2s ease',
        }}>→</span>
      </div>
    </div>
  )
}

function ExpandedOverlay({
  feature,
  onClose,
}: {
  feature: typeof features[0]
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'rgba(0,10,40,0.6)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'fade-in 0.25s ease forwards',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '28px',
          padding: 'clamp(32px, 5vw, 60px)',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 40px 120px rgba(0,19,64,0.3)',
          animation: 'scale-in 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Icon header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '28px',
        }}>
          <div style={{
            width: '60px', height: '60px',
            borderRadius: '17px',
            background: feature.accentBg,
            border: `1.5px solid ${feature.accentColor}25`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            {feature.icon}
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: feature.accentColor, marginBottom: '4px' }}>
              {feature.tag}
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', color: '#001240', lineHeight: 1.2 }}>
              {feature.title}
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(0,51,160,0.08)', marginBottom: '28px' }} />

        {/* Full text */}
        <p style={{
          fontSize: '16px',
          color: 'rgba(0,19,64,0.65)',
          lineHeight: 1.8,
          letterSpacing: '-0.01em',
          marginBottom: '36px',
        }}>
          {feature.full}
        </p>

        {/* Close button */}
        <button
          className="btn-blue"
          onClick={onClose}
          style={{ padding: '14px 32px', fontSize: '14px' }}
        >
          Fechar
        </button>
      </div>
    </div>
  )
}

function MicrocapsuleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="5" stroke="#0033A0" strokeWidth="1.8" />
      <circle cx="13" cy="4" r="2.5" fill="rgba(0,51,160,0.15)" stroke="#0033A0" strokeWidth="1.2" />
      <circle cx="22" cy="13" r="2.5" fill="rgba(0,51,160,0.15)" stroke="#0033A0" strokeWidth="1.2" />
      <circle cx="13" cy="22" r="2.5" fill="rgba(0,51,160,0.15)" stroke="#0033A0" strokeWidth="1.2" />
      <circle cx="4" cy="13" r="2.5" fill="rgba(0,51,160,0.15)" stroke="#0033A0" strokeWidth="1.2" />
      <line x1="13" y1="9" x2="13" y2="6.5" stroke="#0033A0" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="17" y1="13" x2="19.5" y2="13" stroke="#0033A0" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="13" y1="17" x2="13" y2="19.5" stroke="#0033A0" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="9" y1="13" x2="6.5" y2="13" stroke="#0033A0" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function CycleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M4 13A9 9 0 1 1 13 22" stroke="#E52320" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 9.5V13H7.5" stroke="#E52320" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 8.5V13L16 16" stroke="#E52320" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function HeritageIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M13 2L15.5 9.5H23.5L17 14.5L19.5 22L13 17L6.5 22L9 14.5L2.5 9.5H10.5Z"
        stroke="#0033A0" strokeWidth="1.5" strokeLinejoin="round"
        fill="rgba(0,51,160,0.08)" />
    </svg>
  )
}
