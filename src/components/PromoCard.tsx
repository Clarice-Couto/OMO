import { useEffect, useRef, useState } from 'react'
import familyPhoto from '@/imports/familia (1).jpeg'

type Step = 0 | 1 | 2 | 3
type Confetto = { id: number; x: number; color: string; size: number; delay: number; duration: number; rotate: number }

type PromoCardProps = { onRegulation: () => void }

// Helper formatting functions
const formatCPF = (value: string) => {
  const nums = value.replace(/\D/g, '');
  if (nums.length <= 3) return nums;
  if (nums.length <= 6) return `${nums.slice(0, 3)}.${nums.slice(3)}`;
  if (nums.length <= 9) return `${nums.slice(0, 3)}.${nums.slice(3, 6)}.${nums.slice(6)}`;
  return `${nums.slice(0, 3)}.${nums.slice(3, 6)}.${nums.slice(6, 9)}-${nums.slice(9, 11)}`;
};

const formatPhone = (value: string) => {
  const nums = value.replace(/\D/g, '');
  if (nums.length <= 2) return nums;
  if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
  return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7, 11)}`;
};

export default function PromoCard({ onRegulation }: PromoCardProps) {
  const [step, setStep] = useState<Step>(0)
  
  // Step 1: User Registration
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  // Step 2: Invoice Validation
  const [invoiceKey, setInvoiceKey] = useState('')
  const [invoiceFileName, setInvoiceFileName] = useState('')
  const [invoiceError, setInvoiceError] = useState(false)

  // Step 3: Story
  const [story, setStory] = useState('')

  const [loading, setLoading] = useState(false)
  const [confetti, setConfetti] = useState<Confetto[]>([])
  const [visible, setVisible] = useState(false)
  const [luckyNumber] = useState(() => Math.floor(Math.random() * 900000 + 100000))
  const [copied, setCopied] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const spawnConfetti = () => {
    const colors = ['#0033A0', '#E52320', '#ffffff', '#4488ff', '#ff6b6b', '#ffd700']
    const pieces: Confetto[] = Array.from({ length: 48 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 8,
      delay: Math.random() * 0.6,
      duration: 1.2 + Math.random() * 0.8,
      rotate: Math.random() * 720,
    }))
    setConfetti(pieces)
    setTimeout(() => setConfetti([]), 3000)
  }

  const isStep0Valid = () => {
    const cleanCPF = cpf.replace(/\D/g, '');
    const cleanPhone = phone.replace(/\D/g, '');
    const isNameValid = fullName.trim().split(/\s+/).length >= 2;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return (
      isNameValid &&
      isEmailValid &&
      cleanCPF.length === 11 &&
      cleanPhone.length === 11 &&
      termsAccepted
    );
  };

  const isStep1Valid = () => {
    const cleanKey = invoiceKey.replace(/\D/g, '');
    return cleanKey.length === 44;
  };

  const handleRegisterUser = () => {
    if (!isStep0Valid()) return;
    setStep(1);
  };

  const handleValidateInvoice = async () => {
    if (!isStep1Valid()) {
      setInvoiceError(true);
      setTimeout(() => setInvoiceError(false), 700);
      return;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setStep(2);
  };

  const handleSubmitStory = async () => {
    if (story.trim().length < 20) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1800));
    setLoading(false);
    setStep(3);
    spawnConfetti();
  };

  const reset = () => {
    setStep(0);
    setFullName('');
    setEmail('');
    setCpf('');
    setPhone('');
    setTermsAccepted(false);
    setInvoiceKey('');
    setInvoiceFileName('');
    setStory('');
  };

  return (
    <section
      id="promo"
      style={{
        padding: '120px 24px',
        background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 50%, #f8fbff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section bg accent */}
      <div style={{
        position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)',
        width: '900px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(0,51,160,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '64px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(24px)',
          transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)',
        }}>
          <div style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#E52320', marginBottom: '16px',
          }}>
            Campanha Herança 2026
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4.5vw, 54px)', fontWeight: 900,
            letterSpacing: '-0.04em', color: '#001240', lineHeight: 1.08,
          }}>
            Eternize sua memória{' '}
            <span style={{ color: '#0033A0' }}>de cuidado.</span>
          </h2>
        </div>

        {/* Card + Product grid */}
        <div
          ref={sectionRef}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '28px',
            alignItems: 'start',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(40px)',
            transition: 'all 0.9s cubic-bezier(0.4,0,0.2,1) 0.15s',
          }}
          className="promo-grid"
        >
          {/* Main card */}
          <div style={{
            background: '#fff',
            borderRadius: '24px',
            boxShadow: '0 2px 6px rgba(0,51,160,0.06), 0 16px 60px rgba(0,51,160,0.1)',
            border: '1px solid rgba(0,51,160,0.08)',
            overflow: 'hidden',
            position: 'relative',
          }}>
            {/* Confetti layer */}
            {confetti.length > 0 && (
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10, overflow: 'hidden' }}>
                {confetti.map(c => (
                  <div key={c.id} style={{
                    position: 'absolute',
                    left: `${c.x}%`,
                    top: '-12px',
                    width: `${c.size}px`,
                    height: `${c.size}px`,
                    background: c.color,
                    borderRadius: c.id % 3 === 0 ? '50%' : '2px',
                    animation: `confetti-fall ${c.duration}s cubic-bezier(0.25,0.46,0.45,0.94) ${c.delay}s forwards`,
                    transform: `rotate(${c.rotate}deg)`,
                  }} />
                ))}
              </div>
            )}

            {/* Step indicator bar */}
            <div style={{
              height: '4px',
              background: '#f0f4ff',
              display: 'flex',
              gap: '2px',
              padding: '0 2px',
            }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  flex: 1,
                  height: '100%',
                  background: i <= step ? '#0033A0' : 'transparent',
                  transition: 'background 0.5s cubic-bezier(0.25,1,0.5,1)',
                  boxShadow: i === step ? '0 0 8px rgba(0,51,160,0.5)' : 'none',
                }} />
              ))}
            </div>

            {/* Sliding panel container */}
            <div style={{ overflow: 'hidden' }}>
              <div style={{
                display: 'flex',
                width: '400%',
                transform: `translateX(${step === 0 ? '0%' : step === 1 ? '-25%' : step === 2 ? '-50%' : '-75%'})`,
                transition: 'transform 600ms cubic-bezier(0.25, 1, 0.5, 1)',
              }}>
                {/* Panel 0: User registration & Terms */}
                <div className="promo-card-panel">
                  <StepLabel step={1} total={3} />
                  <h3 style={cardHeadStyle}>Identificação e Contato</h3>
                  <p style={cardBodyStyle}>
                    Preencha seus dados para garantir a conformidade da sua inscrição.
                  </p>

                  <div className="responsive-input-grid mb-4">
                    <div>
                      <label style={labelStyle}>Nome Completo</label>
                      <input
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        placeholder="Nome Sobrenome"
                        style={inputStyle}
                        onFocus={e => { e.currentTarget.style.borderColor = '#0033A0'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(0,51,160,0.1)' }}
                        onBlur={e => { e.currentTarget.style.borderColor = fullName ? '#0033A0' : 'rgba(0,51,160,0.15)'; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>E-mail</label>
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="nome@email.com"
                        style={inputStyle}
                        onFocus={e => { e.currentTarget.style.borderColor = '#0033A0'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(0,51,160,0.1)' }}
                        onBlur={e => { e.currentTarget.style.borderColor = email ? '#0033A0' : 'rgba(0,51,160,0.15)'; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>
                  </div>

                  <div className="responsive-input-grid mb-6">
                    <div>
                      <label style={labelStyle}>CPF</label>
                      <input
                        value={cpf}
                        onChange={e => setCpf(formatCPF(e.target.value))}
                        placeholder="000.000.000-00"
                        maxLength={14}
                        style={inputStyle}
                        onFocus={e => { e.currentTarget.style.borderColor = '#0033A0'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(0,51,160,0.1)' }}
                        onBlur={e => { e.currentTarget.style.borderColor = cpf ? '#0033A0' : 'rgba(0,51,160,0.15)'; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Celular com DDD</label>
                      <input
                        value={phone}
                        onChange={e => setPhone(formatPhone(e.target.value))}
                        placeholder="(00) 00000-0000"
                        maxLength={15}
                        style={inputStyle}
                        onFocus={e => { e.currentTarget.style.borderColor = '#0033A0'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(0,51,160,0.1)' }}
                        onBlur={e => { e.currentTarget.style.borderColor = phone ? '#0033A0' : 'rgba(0,51,160,0.15)'; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>
                  </div>

                  {/* Checkbox 1 */}
                  <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer', fontSize: '13px', color: 'rgba(0,19,64,0.7)', lineHeight: 1.5, marginBottom: '28px' }}>
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={e => setTermsAccepted(e.target.checked)}
                      style={{ width: '18px', height: '18px', accentColor: '#0033A0', marginTop: '2px', cursor: 'pointer' }}
                    />
                    <span>
                      Declaro que sou maior de 18 anos e li e concordo com o{' '}
                      <button
                        type="button"
                        onClick={onRegulation}
                        style={{ background: 'none', border: 'none', color: '#0033A0', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontFamily: 'inherit', fontWeight: 600 }}
                      >
                        Regulamento da Promoção
                      </button>{' '}
                      e Políticas de Privacidade.
                    </span>
                  </label>

                  <button
                    className="btn-red"
                    onClick={handleRegisterUser}
                    disabled={!isStep0Valid()}
                    style={{ width: '100%', padding: '18px', fontSize: '15px' }}
                  >
                    Avançar →
                  </button>
                </div>

                {/* Panel 1: Invoice Validation */}
                <div className="promo-card-panel">
                  <StepLabel step={2} total={3} />
                  <h3 style={cardHeadStyle}>Validação da Nota Fiscal</h3>
                  <p style={cardBodyStyle}>
                    Insira os 44 números da chave de acesso da sua Nota Fiscal OMO Herança.
                  </p>

                  <label style={labelStyle}>Chave de Acesso da Nota Fiscal</label>
                  <div style={{ position: 'relative', marginBottom: '20px' }}>
                    <input
                      value={invoiceKey}
                      onChange={e => setInvoiceKey(e.target.value.replace(/\D/g, ''))}
                      placeholder="Chave com 44 dígitos numéricos"
                      maxLength={44}
                      style={{
                        ...inputStyle,
                        borderColor: invoiceError ? '#E52320' : (invoiceKey.length === 44 ? '#0033A0' : 'rgba(0,51,160,0.15)'),
                        boxShadow: invoiceError
                          ? '0 0 0 3px rgba(229,35,32,0.15)'
                          : invoiceKey.length === 44 ? '0 0 0 3px rgba(0,51,160,0.08)' : 'none',
                        animation: invoiceError ? 'shake 0.3s ease' : 'none',
                      }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0033A0'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(0,51,160,0.1)' }}
                      onBlur={e => { e.currentTarget.style.borderColor = invoiceKey ? '#0033A0' : 'rgba(0,51,160,0.15)'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                    <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '12px', color: 'rgba(0,51,160,0.4)', fontWeight: 600 }}>
                      {invoiceKey.length}/44
                    </div>
                  </div>

                  {/* File upload */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle}>Foto do Cupom Fiscal (Opcional)</label>
                    <div
                      onClick={() => document.getElementById('cupom-upload')?.click()}
                      style={{
                        border: '2px dashed rgba(0,51,160,0.2)',
                        borderRadius: '14px',
                        padding: '24px 16px',
                        textAlign: 'center',
                        background: '#fafbff',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <input
                        id="cupom-upload"
                        type="file"
                        accept="image/*,.pdf"
                        onChange={e => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setInvoiceFileName(file.name);
                          }
                        }}
                        style={{ display: 'none' }}
                      />
                      {invoiceFileName ? (
                        <div>
                          <div style={{ fontSize: '24px', marginBottom: '8px' }}>📄</div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: '#0033A0', wordBreak: 'break-all' }}>{invoiceFileName}</div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setInvoiceFileName('');
                            }}
                            style={{
                              marginTop: '8px',
                              background: 'none',
                              border: 'none',
                              color: '#E52320',
                              fontSize: '12px',
                              fontWeight: 700,
                              cursor: 'pointer',
                              textDecoration: 'underline',
                            }}
                          >
                            Remover arquivo
                          </button>
                        </div>
                      ) : (
                        <div>
                          <div style={{ fontSize: '28px', marginBottom: '8px' }}>📸</div>
                          <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(0,51,160,0.6)' }}>Clique para enviar foto do cupom</div>
                          <div style={{ fontSize: '11px', color: 'rgba(0,19,64,0.4)', marginTop: '4px' }}>PNG, JPG ou PDF (Máx. 5MB)</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                    <button
                      className="btn-outline-blue"
                      onClick={() => setStep(0)}
                      style={{ flex: 1, padding: '16px' }}
                    >
                      ← Voltar
                    </button>
                    <button
                      className="btn-red"
                      onClick={handleValidateInvoice}
                      disabled={!isStep1Valid() || loading}
                      style={{ flex: 2, padding: '16px', position: 'relative' }}
                    >
                      {loading ? <LoadingSpinner /> : 'Validar Nota Fiscal →'}
                    </button>
                  </div>
                </div>

                {/* Panel 2: Story */}
                <div className="promo-card-panel">
                  <StepLabel step={3} total={3} />
                  <h3 style={cardHeadStyle}>Sua história de cuidado</h3>
                  <p style={cardBodyStyle}>
                    Qual memória afetiva você tem com OMO? O cheiro que transporta, o domingo de lavagem, o cuidado da sua mãe. Eternize aqui.
                  </p>
                  <label style={labelStyle}>Sua Memória</label>
                  <textarea
                    value={story}
                    onChange={e => setStory(e.target.value)}
                    placeholder="Era um domingo de manhã, minha avó colocava as roupas brancas para lavar e o cheiro de OMO tomava toda a casa..."
                    rows={6}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '130px',
                      borderColor: 'rgba(0,51,160,0.15)',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0033A0'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(0,51,160,0.1)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,51,160,0.15)'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', marginTop: '-4px' }}>
                    <span style={{ fontSize: '12px', color: story.length < 20 ? '#E52320' : 'rgba(0,51,160,0.4)', fontWeight: 500 }}>
                      {story.length} / mín. 20 caracteres
                    </span>
                    <button onClick={() => setStep(1)} style={{ fontSize: '12px', color: 'rgba(0,51,160,0.5)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
                      ← Voltar
                    </button>
                  </div>
                  <button
                    className="btn-red"
                    onClick={handleSubmitStory}
                    disabled={story.length < 20 || loading}
                    style={{ width: '100%', padding: '18px', fontSize: '15px', position: 'relative' }}
                  >
                    {loading ? <LoadingSpinner /> : 'Concluir Inscrição e Gerar Número da Sorte'}
                  </button>
                </div>

                {/* Panel 3: Success */}
                <div className="promo-card-panel text-center" style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>
                    <SuccessCheck />
                  </div>
                  <h3 style={{ ...cardHeadStyle, textAlign: 'center' }}>
                    Inscrição{' '}
                    <span style={{ color: '#E52320' }}>Confirmada!</span>
                  </h3>
                  <p style={{ ...cardBodyStyle, textAlign: 'center' }}>
                    Seus dados e sua história de cuidado foram processados e registrados com sucesso na Campanha OMO Herança 2026.
                  </p>
                  {/* Lucky number */}
                  <div style={{
                    background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%)',
                    border: '1px solid rgba(0,51,160,0.12)',
                    borderRadius: '16px',
                    padding: '20px',
                    marginBottom: '28px',
                  }}>
                    <div style={{ fontSize: '11px', color: 'rgba(0,51,160,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Seu Número da Sorte
                    </div>
                    <div style={{
                      fontSize: '28px',
                      fontWeight: 900,
                      letterSpacing: '0.05em',
                      color: '#0033A0',
                      fontFamily: 'Inter, sans-serif',
                    }}>
                      #{luckyNumber}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn-outline-blue" onClick={reset} style={{ padding: '12px 24px', fontSize: '13px' }}>
                      Participar Novamente
                    </button>
                    <button className="btn-blue" onClick={handleShare} style={{ padding: '12px 24px', fontSize: '13px' }}>
                      {copied ? 'Copiado! ✓' : 'Compartilhar 🔗'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product sidebar */}
          <div style={{ width: '260px', display: 'flex', flexDirection: 'column', gap: '16px' }}
            className="promo-sidebar"
          >
            <div style={{
              background: 'linear-gradient(135deg, #0033A0, #001f6b)',
              borderRadius: '20px',
              padding: '24px',
              color: '#fff',
            }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>
                História OMO
              </div>
              <div style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '8px' }}>
                Eternize sua Memória
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>
                Compartilhe o cuidado que atravessa gerações e faça parte do acervo OMO Herança.
              </div>
            </div>
            <ProductSideCard />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        .promo-card-panel {
          width: 25%;
          padding: 40px 48px;
          flex-shrink: 0;
          box-sizing: border-box;
        }
        .responsive-input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 900px) {
          .promo-grid { grid-template-columns: 1fr !important; }
          .promo-sidebar { width: 100% !important; flex-direction: row !important; flex-wrap: wrap; }
        }
        @media (max-width: 640px) {
          .promo-card-panel {
            padding: 28px 20px !important;
          }
          .responsive-input-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  )
}

const cardHeadStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 800,
  letterSpacing: '-0.03em',
  color: '#001240',
  marginBottom: '12px',
  lineHeight: 1.2,
}

const cardBodyStyle: React.CSSProperties = {
  fontSize: '14px',
  color: 'rgba(0,19,64,0.55)',
  lineHeight: 1.7,
  letterSpacing: '-0.01em',
  marginBottom: '28px',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: 'rgba(0,51,160,0.5)',
  marginBottom: '10px',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '16px 18px',
  background: '#fafbff',
  border: '1.5px solid rgba(0,51,160,0.15)',
  borderRadius: '14px',
  color: '#001240',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 600,
  letterSpacing: '0.04em',
  outline: 'none',
  transition: 'all 0.2s ease',
  display: 'block',
  marginBottom: '8px',
}

function StepLabel({ step, total }: { step: number; total: number }) {
  return (
    <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E52320', marginBottom: '12px' }}>
      Passo {step} de {total}
    </div>
  )
}

function LoadingSpinner() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <span style={{
        display: 'inline-block',
        width: '18px',
        height: '18px',
        border: '2.5px solid rgba(255,255,255,0.3)',
        borderTopColor: '#fff',
        borderRadius: '50%',
        animation: 'spin-slow 0.7s linear infinite',
      }} />
      Processando...
    </span>
  )
}

function SuccessCheck() {
  return (
    <div style={{
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #f0f7ff 0%, #e0ecff 100%)',
      border: '2px solid #0033A0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'check-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards',
      boxShadow: '0 8px 32px rgba(0,51,160,0.2)',
    }}>
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path
          d="M9 20L16 27L29 12"
          stroke="#0033A0"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="40"
          strokeDashoffset="0"
        />
      </svg>
    </div>
  )
}

function ProductSideCard() {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(0,51,160,0.08)',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 4px 24px rgba(0,51,160,0.07)',
      width: '100%',
    }}>
      <div style={{ background: 'linear-gradient(135deg, #f0f4ff, #e8efff)', padding: '0px', height: '220px', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
        <img
          src={familyPhoto}
          alt="Família OMO"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 0%' }}
        />
      </div>
    </div>
  )
}
