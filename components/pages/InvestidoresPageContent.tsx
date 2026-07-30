'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { useLanguage } from '@/components/LanguageProvider'
import { getLocalizedPath } from '@/lib/i18n'

const PROCEEDS_LEVELS = [
  { level: 0, amountPerVitis: 0.4 },
  { level: 1, amountPerVitis: 0.8 },
  { level: 2, amountPerVitis: 1.6 },
  { level: 3, amountPerVitis: 3.2 },
] as const

const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export default function InvestidoresPageContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()
  const [quantidadeVitisInput, setQuantidadeVitisInput] = useState<string>('')
  const [simulatedQuantity, setSimulatedQuantity] = useState<number | null>(null)
  const [simulationError, setSimulationError] = useState('')
  const [activeFaq, setActiveFaq] = useState(0)

  const handleQuantityChange = (value: string) => {
    setQuantidadeVitisInput(value)
    setSimulationError('')
    setSimulatedQuantity(null)
  }

  const handleCalculate = () => {
    const normalizedValue = quantidadeVitisInput.trim()

    if (!normalizedValue) {
      setSimulationError(t.investorsPage.quantityRequiredError)
      return
    }

    if (!/^\d+$/.test(normalizedValue)) {
      setSimulationError(t.investorsPage.quantityInvalidError)
      return
    }

    const quantity = Number(normalizedValue)

    if (!Number.isInteger(quantity) || quantity <= 0) {
      setSimulationError(t.investorsPage.quantityPositiveError)
      return
    }

    setSimulationError('')
    setSimulatedQuantity(quantity)
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

            <div className="investors-simulator-card">
              <div className="investors-analysis-card">
                <h4>
                  <i className="bi bi-calculator-fill" aria-hidden="true"></i>
                  {t.investorsPage.analysisTitle}
                </h4>

                <div className="investors-form-layout">
                  <div className="investors-form-grid investors-form-grid--single">
                    <div className="investors-field">
                      <label htmlFor="vitisInput" className="investors-label">
                        {t.investorsPage.quantity}
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        className="form-control investors-input"
                        id="vitisInput"
                        placeholder={t.investorsPage.quantityPlaceholder}
                        value={quantidadeVitisInput}
                        onChange={(e) => handleQuantityChange(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="investors-form-action">
                    <button className="investors-primary-button investors-simulate-button" onClick={handleCalculate}>
                      <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
                      {t.investorsPage.simulateButton}
                    </button>
                  </div>
                </div>

                {simulationError ? (
                  <div className="investors-feedback-card investors-feedback-card--error" role="alert">
                    {simulationError}
                  </div>
                ) : null}

                {simulatedQuantity !== null ? (
                  <>
                    <div className="investors-results-grid investors-results-grid--levels">
                      {PROCEEDS_LEVELS.map(({ level, amountPerVitis }) => (
                        <div key={level} className="investors-result-card">
                          <span className="investors-result-level">{t.investorsPage.levelOption(level)}</span>
                          <strong className="investors-result-quantity">{simulatedQuantity} Vitis</strong>
                          <p className="investors-result-caption">{t.investorsPage.estimatedProceedsLabel}</p>
                          <strong className="investors-result-value">{brlFormatter.format(simulatedQuantity * amountPerVitis)}</strong>
                        </div>
                      ))}
                    </div>

                    <div className="investors-app-note">
                      <div className="investors-app-note__copy">
                        <p>{t.investorsPage.downloadAppNotice}</p>
                      </div>
                      <a
                        href={t.header.whatsappText}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="investors-download-link"
                      >
                        {t.header.downloadApp}
                      </a>
                    </div>
                  </>
                ) : null}
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
            color: #02083b;
            font-size: clamp(1.95rem, 3vw, 2.9rem);
            font-weight: 700;
            line-height: 1.1;
          }

          .investors-hero-copy p,
          .investors-section-heading p,
          .investors-support-text {
            margin: 1rem 0 0;
            color: rgba(2, 8, 59, 0.75);
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
            background: #02083b;
            color: #fff;
            font-weight: 700;
            box-shadow: 0 16px 30px rgba(2, 8, 59, 0.18);
            transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          }

          .investors-primary-button:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 18px 34px rgba(2, 8, 59, 0.22);
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
            color: rgba(2, 8, 59, 0.74);
            line-height: 1.7;
            text-align: left;
          }

          .investors-simulator-card {
            display: grid;
            gap: 1.4rem;
          }

          .investors-label {
            display: inline-block;
            margin-bottom: 0.55rem;
            color: #02083b;
            font-size: 0.92rem;
            font-weight: 600;
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
            margin: 0 0 1.2rem;
            color: #02083b;
            font-size: 1.15rem;
            font-weight: 700;
          }

          .investors-form-layout {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(220px, 0.38fr);
            align-items: end;
            gap: 1rem;
          }

          .investors-form-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
          }

          .investors-form-grid--single {
            grid-template-columns: minmax(0, 1fr);
          }

          .investors-field {
            min-width: 0;
          }

          .investors-form-action {
            display: flex;
            align-items: flex-end;
          }

          :global(.investors-input.form-control),
          :global(.investors-select.form-select) {
            min-height: 3.25rem;
            padding: 0.9rem 1rem;
            border: 1px solid rgba(2, 8, 59, 0.14);
            border-radius: 16px;
            background: #fff;
            color: #02083b;
            box-shadow: none;
          }

          :global(.investors-input.form-control:focus),
          :global(.investors-select.form-select:focus) {
            border-color: rgba(2, 8, 59, 0.6);
            box-shadow: 0 0 0 4px rgba(2, 8, 59, 0.12);
          }

          .investors-results-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 1rem;
            margin-top: 1.5rem;
          }

          .investors-results-grid--levels {
            align-items: stretch;
          }

          .investors-result-card {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            min-height: 190px;
            padding: 1rem 1rem 1.05rem;
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 18px;
            background: #fff;
          }

          .investors-result-level {
            display: block;
            margin-bottom: 0.45rem;
            color: rgba(2, 8, 59, 0.62);
            font-size: 0.82rem;
            font-weight: 600;
          }

          .investors-result-quantity {
            color: #02083b;
            font-size: 1.05rem;
            font-weight: 700;
            word-break: break-word;
          }

          .investors-result-caption {
            margin: 0.95rem 0 0.35rem;
            color: rgba(2, 8, 59, 0.76);
            line-height: 1.45;
            font-size: 0.9rem;
            font-weight: 500;
            white-space: normal;
            text-align: left;
          }

          .investors-result-value {
            margin-top: auto;
            color: #02083b;
            font-size: clamp(1.35rem, 2vw, 1.7rem);
            font-weight: 800;
            line-height: 1.1;
            overflow-wrap: anywhere;
          }

          .investors-simulate-button {
            margin-top: 0;
            width: 100%;
            min-height: 3.25rem;
          }

          .investors-feedback-card {
            margin-top: 0.9rem;
            padding: 0.95rem 1rem;
            border-radius: 16px;
            border: 1px solid rgba(220, 53, 69, 0.18);
            background: rgba(220, 53, 69, 0.06);
            color: #b42318;
            line-height: 1.55;
          }

          .investors-app-note {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            margin-top: 1.75rem;
            padding-top: 1.25rem;
            border-top: 1px solid rgba(11, 31, 61, 0.08);
          }

          .investors-app-note__copy {
            flex: 1 1 420px;
            min-width: 0;
          }

          .investors-app-note p {
            margin: 0;
            color: rgba(2, 8, 59, 0.74);
            line-height: 1.65;
          }

          .investors-download-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 3rem;
            padding: 0.75rem 1.3rem;
            border-radius: 999px;
            border: 1px solid rgba(2, 8, 59, 0.12);
            background: #fff;
            color: #02083b;
            font-weight: 700;
            text-decoration: none;
            white-space: nowrap;
            flex-shrink: 0;
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
            color: #02083b;
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
            color: #02083b;
            font-size: 1rem;
            font-weight: 600;
            text-align: left;
          }

          .investors-faq-panel {
            padding: 0 1.3rem 1.25rem;
          }

          .investors-faq-item.is-open {
            border-color: rgba(2, 8, 59, 0.32);
            box-shadow: 0 16px 32px rgba(2, 8, 59, 0.08);
          }

          @media (max-width: 1199px) {
            .investors-results-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 991px) {
            .investors-hero-card {
              grid-template-columns: 1fr;
              display: grid;
              gap: 1rem;
            }

            .investors-form-layout {
              grid-template-columns: minmax(0, 1fr);
            }

            .investors-app-note {
              align-items: flex-start;
              flex-direction: column;
            }

            .investors-download-link {
              width: auto;
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
            .investors-results-grid {
              grid-template-columns: 1fr;
            }

            .investors-form-layout {
              grid-template-columns: 1fr;
            }

            .investors-primary-button {
              width: 100%;
              max-width: 100%;
            }

            .investors-app-note {
              align-items: stretch;
              justify-content: flex-start;
            }

            .investors-download-link {
              width: 100%;
            }

            .investors-result-card {
              min-height: auto;
            }

            .investors-result-value {
              overflow-wrap: break-word;
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
