'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { InvestChart } from '@/components/RendimentoChart'
import { useLanguage } from '@/components/LanguageProvider'
import { hasBackendUrl } from '@/lib/backend'
import { getLocalizedPath } from '@/lib/i18n'
import { useCupomValidator } from '@/hooks/useCupomValidator'
import { useNiveisOperacao } from '@/hooks/useNiveisOperacao'
import { useSimulacaoInvestimento } from '@/hooks/useSimulacaoInvestimento'
import { useValorInvestido } from '@/hooks/useValorInvestido'

export default function InvestidoresPageContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()
  const { usinas, backendUnavailable } = useNiveisOperacao()
  const plantLevels = [1, 2, 3]
  const backendConfigured = hasBackendUrl()

  const [usinaSelecionada, setUsinaSelecionada] = useState<string>('default')
  const [quantidadeVitisInput, setQuantidadeVitisInput] = useState<string>('')
  const [mesesInput, setMesesInput] = useState<string>('')
  const [fatorNivelInput, setFatorNivelInput] = useState<string>('1')
  const [cupom, setCupom] = useState<string>('')
  const [activeFaq, setActiveFaq] = useState(0)

  const { cupomValido, desconto } = useCupomValidator(cupom)

  const quantidadeVitis = Number(quantidadeVitisInput) || 0
  const meses = Number(mesesInput) || 0
  const nivel = Number(fatorNivelInput) || 0
  const valorInvestido = useValorInvestido(usinas, usinaSelecionada, quantidadeVitis, desconto)

  const { totalYield, dateResult, graficoDados, calcular } = useSimulacaoInvestimento()

  const handleCalculate = () => {
    if (!backendConfigured) {
      alert(t.investorsPage.backendConfigError)
      return
    }

    if (!quantidadeVitis || !meses || usinaSelecionada === 'default' || !nivel) {
      alert(t.investorsPage.fillFieldsAlert)
      return
    }

    calcular({
      vitis: quantidadeVitis,
      meses,
      usina_id: usinaSelecionada,
      nivel,
      cupom,
      errorPrefix: t.investorsPage.errorPrefix,
      serverError: t.investorsPage.serverError,
    })
  }

  const faqs = [
    { question: t.investorsPage.faq1Question, answer: t.investorsPage.faq1Answer },
    { question: t.investorsPage.faq2Question, answer: t.investorsPage.faq2Answer },
    { question: t.investorsPage.faq3Question, answer: t.investorsPage.faq3Answer },
    { question: t.investorsPage.faq4Question, answer: t.investorsPage.faq4Answer },
    { question: t.investorsPage.faq5Question, answer: t.investorsPage.faq5Answer },
    { question: t.investorsPage.faq6Question, answer: t.investorsPage.faq6Answer },
  ]

  const scrollToSimulator = () => {
    document.getElementById('investor-simulator')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="main">
      <div className="page-title dark-background" style={{ backgroundImage: "url('/img/hero-carousel/hero-carousel-3.jpg')" }}>
        <div className="container position-relative">
          <h1>{t.investorsPage.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <button onClick={() => router.push(getLocalizedPath(localeSegment, 'home'))} style={{ fontWeight: 600, color: 'white' }}>
                  {t.common.home}
                </button>
              </li>
              <li className="current">{t.investorsPage.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="investors-page section">
        <div className="container">
          <div className="investors-hero-card" data-aos="fade-up" data-aos-delay="100">
            <div className="investors-hero-copy">
              <h2>{t.investorsPage.headline}</h2>
              <p>{t.investorsPage.heroText}</p>
              <button type="button" className="investors-primary-button" onClick={scrollToSimulator}>
                {t.investorsPage.heroCta}
              </button>
            </div>

            <div className="investors-hero-media">
              <Image
                src="/img/hero-carousel/hero-carousel-3.jpg"
                alt={t.investorsPage.heroImageAlt}
                className="investors-hero-image"
                width={640}
                height={460}
              />
            </div>
          </div>

          <div className="investors-vitis-card" data-aos="fade-up" data-aos-delay="140">
            <div className="investors-section-heading">
              <h3>{t.investorsPage.vitisTitle}</h3>
              <p>{t.investorsPage.vitisText}</p>
            </div>
            <p className="investors-support-text">{t.investorsPage.vitisSupport}</p>
          </div>

          <div id="investor-simulator" className="investors-simulator-shell" data-aos="fade-up" data-aos-delay="260">
            <div className="investors-section-heading">
              <h3>{t.investorsPage.simulatePrompt}</h3>
              <p>{t.investorsPage.simulateIntro}</p>
            </div>

            {backendUnavailable && (
              <div className="alert alert-warning mb-4" role="alert">
                {t.investorsPage.backendConfigError}
              </div>
            )}

            <div className="investors-simulator-card">
              <div className="investors-simulator-top">
                <div className="investors-simulator-select">
                  <label htmlFor="investor-plant" className="investors-label">
                    {t.investorsPage.selectPlantLabel}
                  </label>
                  <select
                    id="investor-plant"
                    className="form-select investors-select"
                    value={usinaSelecionada}
                    onChange={(e) => setUsinaSelecionada(e.target.value)}
                  >
                    <option value="default">{t.investorsPage.selectPlant}</option>
                    {usinas.map((usina) => (
                      <option key={usina.id} value={usina.id}>
                        {usina.nome}
                      </option>
                    ))}
                  </select>
                  {usinaSelecionada === 'default' && <p className="investors-help-text">{t.investorsPage.selectPlantGuidance}</p>}
                </div>
              </div>

              <p className="investors-simulator-guidance">
                {t.investorsPage.stepsIntro}
              </p>

              <div className="investors-analysis-card">
                <h4>
                  <i className="bi bi-calculator-fill" aria-hidden="true"></i>
                  {t.investorsPage.analysisTitle}
                </h4>

                <div className="investors-form-grid">
                  <div className="investors-field">
                    <label className="investors-label" htmlFor="vitisResult">
                      {t.investorsPage.investedValue}
                    </label>
                    <div className="investors-readonly" id="vitisResult">
                      {valorInvestido}
                    </div>
                  </div>

                  <div className="investors-field">
                    <label htmlFor="vitisInput" className="investors-label">
                      {t.investorsPage.quantity}
                    </label>
                    <input
                      type="number"
                      className="form-control investors-input"
                      id="vitisInput"
                      placeholder="Ex: 1"
                      value={quantidadeVitisInput}
                      onChange={(e) => setQuantidadeVitisInput(e.target.value)}
                      disabled={usinaSelecionada === 'default' || backendUnavailable}
                    />
                  </div>

                  <div className="investors-field">
                    <label htmlFor="monthsInput" className="investors-label">
                      {t.investorsPage.period}
                    </label>
                    <input
                      type="number"
                      className="form-control investors-input"
                      id="monthsInput"
                      placeholder="Ex: 1"
                      value={mesesInput}
                      onChange={(e) => setMesesInput(e.target.value)}
                      disabled={backendUnavailable}
                    />
                  </div>

                  <div className="investors-field">
                    <label htmlFor="fatorNivelInput" className="investors-label">
                      {t.investorsPage.plantLevel}
                    </label>
                    <select
                      className="form-select investors-select"
                      id="fatorNivelInput"
                      value={fatorNivelInput}
                      onChange={(e) => setFatorNivelInput(e.target.value)}
                      disabled={usinaSelecionada === 'default' || backendUnavailable}
                    >
                      {plantLevels.map((level) => (
                        <option key={level} value={String(level)}>
                          {t.investorsPage.levelOption(level)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="investors-field">
                    <label htmlFor="cupom" className="investors-label">
                      {t.investorsPage.coupon}
                    </label>
                    <input
                      type="text"
                      className="form-control investors-input"
                      id="cupom"
                      placeholder={t.investorsPage.optional}
                      value={cupom}
                      onChange={(e) => setCupom(e.target.value)}
                      disabled={backendUnavailable}
                    />

                    {cupom !== '' && (
                      <small className={`investors-coupon-feedback ${cupomValido ? 'is-valid' : 'is-invalid'}`}>
                        {cupomValido === null ? t.investorsPage.validating : cupomValido ? t.investorsPage.validCoupon : t.investorsPage.invalidCoupon}
                      </small>
                    )}
                  </div>
                </div>

                <div className="investors-summary-grid">
                  <div className="investors-summary-card">
                    <span>{t.investorsPage.selectPlantLabel}</span>
                    <strong>{usinaSelecionada === 'default' ? t.investorsPage.selectPlant : usinas.find((usina) => String(usina.id) === usinaSelecionada)?.nome ?? t.investorsPage.selectPlant}</strong>
                  </div>
                  <div className="investors-summary-card">
                    <span>{t.investorsPage.plantLevel}</span>
                    <strong>{t.investorsPage.levelOption(nivel || 1)}</strong>
                  </div>
                  <div className="investors-summary-card">
                    <span>{t.investorsPage.period}</span>
                    <strong>{meses || 0}</strong>
                  </div>
                  <div className="investors-summary-card">
                    <span>{t.investorsPage.quantity}</span>
                    <strong>{quantidadeVitis || 0}</strong>
                  </div>
                </div>

                <button className="investors-primary-button investors-simulate-button" onClick={handleCalculate} disabled={backendUnavailable}>
                  <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
                  {t.investorsPage.simulateButton}
                </button>

                <div className="investors-results-grid">
                  <div className="investors-result-card">
                    <span>{t.investorsPage.accumulatedYield}</span>
                    <strong id="totalYield">{totalYield}</strong>
                  </div>
                  <div className="investors-result-card">
                    <span>{t.investorsPage.finalDate}</span>
                    <strong id="dateResult">{dateResult}</strong>
                  </div>
                </div>

                {graficoDados.length > 0 && (
                  <div className="investors-chart-card">
                    <h5>{t.investorsPage.chartTitle}</h5>
                    <InvestChart
                      data={graficoDados}
                      monthLabel={t.common.monthLabel}
                      datasetLabel={t.investorsPage.chartDataset}
                      yAxisLabel={t.investorsPage.chartYAxis}
                      xAxisLabel={t.investorsPage.chartXAxis}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="investors-faq-section" data-aos="fade-up" data-aos-delay="300">
            <div className="investors-section-heading investors-section-heading-centered">
              <h3>{t.investorsPage.faqTitle}</h3>
              <p>{t.investorsPage.faqIntro}</p>
            </div>

            <div className="investors-faq-list">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index

                return (
                  <div key={faq.question} className={`investors-faq-item${isOpen ? ' is-open' : ''}`}>
                    <button
                      type="button"
                      className="investors-faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`investor-faq-panel-${index}`}
                      onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <i className={`bi ${isOpen ? 'bi-dash-lg' : 'bi-plus-lg'}`}></i>
                    </button>
                    <div id={`investor-faq-panel-${index}`} className="investors-faq-panel" hidden={!isOpen}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <style jsx>{`
          .investors-page {
            background:
              radial-gradient(circle at top left, rgba(11, 31, 61, 0.04), transparent 35%),
              linear-gradient(180deg, #ffffff 0%, #f6f9fc 100%);
            padding-bottom: clamp(2.5rem, 5vw, 4.5rem);
          }

          .investors-hero-card,
          .investors-vitis-card,
          .investors-simulator-shell {
            background: rgba(255, 255, 255, 0.98);
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 28px;
            box-shadow: 0 18px 42px rgba(11, 31, 61, 0.08);
          }

          .investors-hero-card {
            display: grid;
            grid-template-columns: minmax(0, 1.12fr) minmax(300px, 0.88fr);
            gap: 1.25rem;
            align-items: center;
            padding: clamp(1.15rem, 2.2vw, 1.75rem);
            margin-bottom: 1.7rem;
          }

          .investors-hero-copy h2,
          .investors-section-heading h3 {
            margin: 0;
            color: #0b1f3d;
            font-size: clamp(1.95rem, 3vw, 2.9rem);
            font-weight: 700;
            line-height: 1.1;
          }

          .investors-hero-copy p,
          .investors-section-heading p,
          .investors-support-text,
          .investors-simulator-guidance {
            margin: 1rem 0 0;
            color: rgba(11, 31, 61, 0.75);
            line-height: 1.75;
            text-align: left;
          }

          .investors-hero-copy p {
            max-width: 34rem;
            line-height: 1.68;
            margin-top: 0.85rem;
          }

          .investors-hero-media {
            overflow: hidden;
            border-radius: 24px;
            align-self: stretch;
          }

          :global(.investors-hero-image) {
            width: 100%;
            height: 100%;
            min-height: 300px;
            max-height: 360px;
            object-fit: cover;
            display: block;
          }

          .investors-primary-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1.05rem;
            min-height: 3.2rem;
            padding: 0.85rem 1.5rem;
            border: 0;
            border-radius: 999px;
            background: #0b1f3d;
            color: #fff;
            font-weight: 700;
            box-shadow: 0 16px 30px rgba(11, 31, 61, 0.18);
            transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          }

          .investors-primary-button:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 18px 34px rgba(11, 31, 61, 0.22);
          }

          .investors-primary-button:disabled {
            opacity: 0.72;
            cursor: not-allowed;
          }

          .investors-vitis-card,
          .investors-simulator-shell {
            padding: clamp(1.45rem, 3vw, 2.2rem);
            margin-bottom: 2.3rem;
          }

          .investors-section-heading {
            margin-bottom: 1.35rem;
          }

          .investors-section-heading-centered {
            text-align: center;
          }

          .investors-section-heading-centered p {
            max-width: 42rem;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          .investors-support-text {
            max-width: 56rem;
            font-weight: 500;
          }

          .investors-faq-section {
            margin-bottom: 2.35rem;
          }

          .investors-faq-item {
            background: rgba(255, 255, 255, 0.98);
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 24px;
            box-shadow: 0 12px 28px rgba(11, 31, 61, 0.05);
          }

          .investors-faq-panel p {
            margin: 0;
            color: rgba(11, 31, 61, 0.74);
            line-height: 1.7;
            text-align: left;
          }

          .investors-simulator-card {
            display: grid;
            gap: 1.4rem;
          }

          .investors-simulator-guidance {
            max-width: 48rem;
            margin-top: 0.25rem;
          }

          .investors-label {
            display: inline-block;
            margin-bottom: 0.55rem;
            color: #0b1f3d;
            font-size: 0.92rem;
            font-weight: 600;
          }

          .investors-help-text {
            margin: 0.8rem 0 0;
            color: rgba(11, 31, 61, 0.68);
            line-height: 1.65;
          }

          .investors-analysis-card {
            background: rgba(246, 249, 252, 0.96);
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 24px;
            padding: clamp(1.25rem, 2.5vw, 1.8rem);
          }

          .investors-analysis-card h4 {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            margin: 0 0 1.4rem;
            color: #0b1f3d;
            font-size: 1.15rem;
            font-weight: 700;
          }

          .investors-form-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
          }

          .investors-field {
            min-width: 0;
          }

          :global(.investors-input.form-control),
          :global(.investors-select.form-select) {
            min-height: 3.25rem;
            padding: 0.9rem 1rem;
            border: 1px solid rgba(11, 31, 61, 0.14);
            border-radius: 16px;
            background: #fff;
            color: #0b1f3d;
            box-shadow: none;
          }

          :global(.investors-input.form-control:focus),
          :global(.investors-select.form-select:focus) {
            border-color: rgba(31, 94, 255, 0.6);
            box-shadow: 0 0 0 4px rgba(31, 94, 255, 0.12);
          }

          .investors-readonly {
            display: flex;
            align-items: center;
            min-height: 3.25rem;
            padding: 0.9rem 1rem;
            border: 1px solid rgba(11, 31, 61, 0.12);
            border-radius: 16px;
            background: #fff;
            color: #0b1f3d;
            font-weight: 600;
          }

          .investors-coupon-feedback {
            display: inline-block;
            margin-top: 0.45rem;
            font-size: 0.86rem;
          }

          .investors-coupon-feedback.is-valid {
            color: #198754;
          }

          .investors-coupon-feedback.is-invalid {
            color: #dc3545;
          }

          .investors-summary-grid,
          .investors-results-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 0.9rem;
            margin-top: 1.3rem;
          }

          .investors-results-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .investors-summary-card,
          .investors-result-card {
            padding: 1rem 1rem 1.05rem;
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 18px;
            background: #fff;
          }

          .investors-summary-card span,
          .investors-result-card span {
            display: block;
            margin-bottom: 0.4rem;
            color: rgba(11, 31, 61, 0.62);
            font-size: 0.82rem;
            font-weight: 600;
          }

          .investors-summary-card strong,
          .investors-result-card strong {
            color: #0b1f3d;
            font-size: 1rem;
            font-weight: 700;
            word-break: break-word;
          }

          .investors-simulate-button {
            width: 100%;
            margin-top: 1.4rem;
          }

          .investors-chart-card {
            margin-top: 1.6rem;
            padding: 1.1rem 1rem 0.4rem;
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 20px;
            background: #fff;
          }

          .investors-chart-card h5 {
            margin: 0 0 1rem;
            color: #0b1f3d;
            text-align: center;
            font-size: 1.05rem;
            font-weight: 700;
          }

          .investors-faq-list {
            display: grid;
            gap: 0.9rem;
            max-width: 52rem;
            margin: 0 auto;
          }

          .investors-faq-trigger {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 1rem;
            padding: 1.2rem 1.3rem;
            border: 0;
            background: transparent;
            color: #0b1f3d;
            font-size: 1rem;
            font-weight: 600;
            text-align: left;
          }

          .investors-faq-panel {
            padding: 0 1.3rem 1.25rem;
          }

          .investors-faq-item.is-open {
            border-color: rgba(31, 94, 255, 0.32);
            box-shadow: 0 16px 32px rgba(31, 94, 255, 0.08);
          }

          @media (max-width: 1199px) {
            .investors-form-grid,
            .investors-summary-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 991px) {
            .investors-hero-card {
              grid-template-columns: 1fr;
              display: grid;
              gap: 1rem;
            }
          }

          @media (max-width: 767px) {
            .investors-hero-card,
            .investors-vitis-card,
            .investors-simulator-shell {
              border-radius: 24px;
              padding: 1.3rem;
            }

            .investors-form-grid,
            .investors-summary-grid,
            .investors-results-grid {
              grid-template-columns: 1fr;
            }

            .investors-primary-button {
              width: 100%;
              max-width: 100%;
            }

            :global(.investors-hero-image) {
              min-height: 240px;
              max-height: 290px;
            }

            .investors-faq-trigger {
              padding: 1.05rem 1rem;
            }

            .investors-faq-panel {
              padding: 0 1rem 1.05rem;
            }
          }
        `}</style>
      </section>
    </main>
  )
}
