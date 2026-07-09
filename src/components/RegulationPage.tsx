import { useState } from 'react'

type RegulationPageProps = {
  onParticipate?: () => void
}

const regulationItems = [
  {
    title: '1. Elegibilidade',
    content: 'Campanha válida para residentes do Brasil maiores de 18 anos.',
  },
  {
    title: '2. Período da Campanha',
    content: 'A campanha "OMO Herança 2026" é válida de 1º de janeiro de 2026 a 31 de dezembro de 2026, enquanto durarem os estoques de embalagens participantes.',
  },
  {
    title: '3. Como Participar',
    content: 'Adquira qualquer produto da linha OMO Herança (Pó 1,6kg ou Líquido 3L), localize o código interno na embalagem e insira no site oficial. Complete o relato de memória afetiva (mínimo 20 caracteres) ou faça o upload de sua história em formato de vídeo de até 1 minuto.',
  },
  {
    title: '4. Objetivo da Ação',
    content: 'Eternizar histórias e relatos de cuidado das famílias brasileiras. Os relatos selecionados poderão ser divulgados nos canais oficiais da marca.',
  },
  {
    title: '5. Privacidade e Proteção de Dados',
    content: 'Os dados fornecidos serão tratados em conformidade com a LGPD (Lei nº 13.709/2018) e utilizados exclusivamente para fins desta campanha, assegurando o sigilo e segurança das informações.',
  },
]

export default function RegulationPage({ onParticipate }: RegulationPageProps) {
  const [downloaded, setDownloaded] = useState(false)

  const handleDownloadPDF = () => {
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 2000)
    alert('Download do PDF do Regulamento iniciado com sucesso!')
  }

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
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,240,0.65)', marginBottom: '16px' }}>
            Transparência & Informação
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 4.5vw, 48px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: '#FFFFF0',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            Regulamento da Campanha
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,240,0.75)', marginBottom: '0px', lineHeight: 1.6 }}>
            Consulte as regras gerais de elegibilidade, prazos e diretrizes de proteção de dados para participar da campanha OMO Herança.
          </p>
        </div>
      </div>

      {/* Content wrapper */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '60px 24px 80px',
      }}>
        {/* Warning Alert Box */}
        <div style={{
          background: '#fff8f0',
          border: '1.5px solid rgba(229,35,32,0.18)',
          borderRadius: '16px',
          padding: '20px 24px',
          marginBottom: '44px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          boxShadow: '0 8px 30px rgba(229,35,32,0.04)',
        }}>
          <div style={{
            fontSize: '24px',
            flexShrink: 0,
          }}>
            ⚠️
          </div>
          <div style={{ fontSize: '14px', color: '#8B2000', lineHeight: 1.6, fontWeight: 500 }}>
            Leia atentamente as disposições regulamentares abaixo. A inclusão de códigos promocionais e o envio de relatos históricos implicam na aceitação integral de todos os termos apresentados.
          </div>
        </div>

        {/* Regulation Items List */}
        <div className="regulation-card" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          background: '#FFFFF0',
          borderRadius: '24px',
          border: '1.5px solid #111934',
          padding: '40px 48px',
          boxShadow: '0 4px 40px rgba(17,25,52,0.04)',
          marginBottom: '44px',
        }}>
          {regulationItems.map((item, index) => (
            <div key={index} style={{
              borderBottom: index < regulationItems.length - 1 ? '1px solid rgba(17,25,52,0.12)' : 'none',
              paddingBottom: index < regulationItems.length - 1 ? '28px' : '0px',
            }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: 800,
                color: '#111934',
                marginBottom: '12px',
                letterSpacing: '-0.025em',
              }}>
                {item.title}
              </h2>
              <p style={{
                fontSize: '14.5px',
                color: 'rgba(17,25,52,0.7)',
                lineHeight: 1.8,
                letterSpacing: '-0.01em',
              }}>
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons Row */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <button 
            className="btn-blue" 
            onClick={handleDownloadPDF} 
            style={{ padding: '16px 32px', fontSize: '14px', minWidth: '200px', cursor: 'pointer' }}
          >
            {downloaded ? 'Baixando PDF...' : 'Baixar Regulamento PDF'}
          </button>
          
          {onParticipate && (
            <button 
              className="btn-red" 
              onClick={onParticipate} 
              style={{ padding: '16px 36px', fontSize: '14px', minWidth: '200px', cursor: 'pointer' }}
            >
              Quero Participar Agora →
            </button>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .regulation-card { padding: 28px 20px !important; }
        }
      `}</style>
    </div>
  )
}
