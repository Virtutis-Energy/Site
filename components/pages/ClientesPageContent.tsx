'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { useLanguage } from '@/components/LanguageProvider'
import { useEconomia } from '@/hooks/useEconomia'
import { getLocalizedPath } from '@/lib/i18n'

const stepIcons = ['bi bi-person-plus', 'bi bi-sun', 'bi bi-phone'] as const
const benefitIcons = [
  'bi bi-coin',
  'bi bi-house-check',
  'bi bi-app-indicator',
  'bi bi-brightness-high',
  'bi bi-graph-up-arrow',
  'bi bi-gift',
] as const

export default function ClientesPageContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()
  const { billValue, setBillValue, economia, error, handleCalculate } = useEconomia(t.clientsPage)
  const [activeFaq, setActiveFaq] = useState(0)

  const steps = [
    { title: t.clientsPage.step1Title, text: t.clientsPage.step1Text },
    { title: t.clientsPage.step2Title, text: t.clientsPage.step2Text },
    { title: t.clientsPage.step3Title, text: t.clientsPage.step3Text },
  ]

  const benefits = [
    { title: t.clientsPage.benefit1Title, text: t.clientsPage.benefit1Text },
    { title: t.clientsPage.benefit2Title, text: t.clientsPage.benefit2Text },
    { title: t.clientsPage.benefit3Title, text: t.clientsPage.benefit3Text },
    { title: t.clientsPage.benefit4Title, text: t.clientsPage.benefit4Text },
    { title: t.clientsPage.benefit5Title, text: t.clientsPage.benefit5Text },
    { title: t.clientsPage.benefit6Title, text: t.clientsPage.benefit6Text },
  ]

  const faqs = [
    { question: t.clientsPage.faq1Question, answer: t.clientsPage.faq1Answer },
    { question: t.clientsPage.faq2Question, answer: t.clientsPage.faq2Answer },
    { question: t.clientsPage.faq3Question, answer: t.clientsPage.faq3Answer },
    { question: t.clientsPage.faq4Question, answer: t.clientsPage.faq4Answer },
    { question: t.clientsPage.faq5Question, answer: t.clientsPage.faq5Answer },
    { question: t.clientsPage.faq6Question, answer: t.clientsPage.faq6Answer },
  ]

  return (
    <main className="main">
      <div className="page-title dark-background" style={{ backgroundImage: 'url(/img/hero-carousel/ft2.jpg)' }}>
        <div className="container position-relative">
          <h1 style={{ color: '#FFFFFF', opacity: 1 }}>{t.clientsPage.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <button onClick={() => router.push(getLocalizedPath(localeSegment, 'home'))} style={{ fontWeight: 600, color: 'white' }}>
                  {t.common.home}
                </button>
              </li>
              <li className="current">{t.clientsPage.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="clients-page section">
        <div className="container">
          <div className="clients-hero-card" data-aos="fade-up" data-aos-delay="100">
            <div className="clients-hero-copy">
              <span className="clients-kicker">{t.clientsPage.title}</span>
              <h2>{t.clientsPage.heroTitle}</h2>
              <p>{t.clientsPage.heroText}</p>
              <button type="button" className="clients-primary-button" onClick={() => router.push(getLocalizedPath(localeSegment, 'signUp'))}>
                {t.clientsPage.heroCta}
              </button>
            </div>

            <div className="clients-hero-media">
              <img src="/img/hero-carousel/ft2.jpg" alt={t.clientsPage.heroImageAlt} className="clients-hero-image" />
            </div>
          </div>

          <div className="clients-simulator-card" data-aos="fade-up" data-aos-delay="140">
            <div className="clients-section-heading">
              <h3>{t.clientsPage.simulatorTitle}</h3>
              <p>{t.clientsPage.simulatorText}</p>
            </div>

            <form id="investmentCalculator" className="clients-simulator-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="monthlyBill" className="clients-label">
                {t.clientsPage.simulatorLabel}
              </label>
              <div className="clients-simulator-controls">
                <input
                  type="text"
                  className="form-control clients-input"
                  id="monthlyBill"
                  placeholder={t.clientsPage.billPlaceholder}
                  aria-label={t.clientsPage.simulatorLabel}
                  value={billValue}
                  onChange={(event) => setBillValue(event.target.value)}
                />
                <button type="button" className="clients-secondary-button" onClick={handleCalculate}>
                  {t.clientsPage.calculate}
                </button>
              </div>
              {error ? <div className="clients-feedback-card clients-feedback-card--error">{error}</div> : null}
              {economia ? (
                <div className="clients-result-card">
                  <div className="clients-result-grid">
                    <div className="clients-result-item">
                      <span className="clients-result-label">{t.clientsPage.currentBillLabel}</span>
                      <strong>{economia.contaAtual}</strong>
                    </div>
                    <div className="clients-result-item">
                      <span className="clients-result-label">{t.clientsPage.estimatedFinalCostLabel}</span>
                      <strong>{economia.custoFinal}</strong>
                    </div>
                    <div className="clients-result-item clients-result-item--highlight">
                      <span className="clients-result-label">{t.clientsPage.estimatedMonthlySavingsLabel}</span>
                      <strong>{economia.economiaMensal}</strong>
                    </div>
                  </div>
                </div>
              ) : null}
            </form>
          </div>

          <div className="clients-steps-section" data-aos="fade-up" data-aos-delay="180">
            <div className="clients-section-heading clients-section-heading-centered">
              <h3>{t.clientsPage.howItWorksTitle}</h3>
              <p>{t.clientsPage.howItWorksText}</p>
            </div>

            <div className="clients-steps-grid">
              {steps.map((step, index) => (
                <article key={step.title} className="clients-step-card">
                  <span className="clients-step-icon" aria-hidden="true">
                    <i className={stepIcons[index]}></i>
                  </span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="clients-benefits-section" data-aos="fade-up" data-aos-delay="220">
            <div className="clients-section-heading clients-section-heading-centered">
              <h3>{t.clientsPage.benefitsTitle}</h3>
              <p>{t.clientsPage.benefitsText}</p>
            </div>

            <div className="clients-benefits-grid">
              {benefits.map((benefit, index) => (
                <article key={benefit.title} className="clients-benefit-card">
                  <span className="clients-benefit-icon" aria-hidden="true">
                    <i className={benefitIcons[index]}></i>
                  </span>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="clients-faq-section" data-aos="fade-up" data-aos-delay="260">
            <div className="clients-section-heading clients-section-heading-centered">
              <h3>{t.clientsPage.faqTitle}</h3>
              <p>{t.clientsPage.faqText}</p>
            </div>

            <div className="clients-faq-list">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index

                return (
                  <div key={faq.question} className={`clients-faq-item${isOpen ? ' is-open' : ''}`}>
                    <button
                      type="button"
                      className="clients-faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <i className={`bi ${isOpen ? 'bi-dash-lg' : 'bi-plus-lg'}`}></i>
                    </button>
                    <div id={`faq-panel-${index}`} className="clients-faq-panel" hidden={!isOpen}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        <style jsx>{`
          .clients-page {
            background:
              radial-gradient(circle at top left, rgba(11, 31, 61, 0.04), transparent 35%),
              linear-gradient(180deg, #ffffff 0%, #f6f9fc 100%);
            padding-bottom: clamp(2.5rem, 5vw, 4.5rem);
          }

          .clients-hero-card,
          .clients-simulator-card {
            background: rgba(255, 255, 255, 0.98);
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 28px;
            box-shadow: 0 18px 42px rgba(11, 31, 61, 0.08);
          }

          .clients-hero-card {
            display: grid;
            grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.92fr);
            gap: 1.5rem;
            align-items: center;
            padding: clamp(1.35rem, 2.5vw, 2rem);
            margin-bottom: 1.8rem;
          }

          .clients-kicker {
            display: inline-flex;
            align-items: center;
            margin-bottom: 1rem;
            color: var(--accent-color);
            font-size: 0.82rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .clients-hero-copy h2,
          .clients-section-heading h3 {
            margin: 0;
            color: #02083b;
            font-size: clamp(1.9rem, 2.8vw, 2.85rem);
            font-weight: 700;
            line-height: 1.1;
          }

          .clients-hero-copy p,
          .clients-section-heading p {
            margin: 1rem 0 0;
            max-width: 42rem;
            color: rgba(2, 8, 59, 0.75);
            line-height: 1.72;
            text-align: left;
          }

          .clients-hero-media {
            overflow: hidden;
            border-radius: 24px;
            min-height: 100%;
            align-self: stretch;
          }

          .clients-hero-image {
            display: block;
            width: 100%;
            height: 100%;
            min-height: 360px;
            max-height: 420px;
            object-fit: cover;
          }

          .clients-primary-button,
          .clients-secondary-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 0;
            border-radius: 999px;
            font-weight: 700;
            transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          }

          .clients-primary-button {
            margin-top: 1.25rem;
            min-height: 3.3rem;
            padding: 0.9rem 1.65rem;
            background: #02083b;
            color: #fff;
            box-shadow: 0 16px 30px rgba(2, 8, 59, 0.18);
          }

          .clients-secondary-button {
            min-height: 3.3rem;
            padding: 0.85rem 1.55rem;
            background: #02083b;
            color: #fff;
            box-shadow: 0 12px 24px rgba(2, 8, 59, 0.16);
            white-space: nowrap;
          }

          .clients-primary-button:hover,
          .clients-secondary-button:hover {
            transform: translateY(-1px);
          }

          .clients-simulator-card {
            padding: clamp(1.5rem, 3vw, 2.2rem);
            margin-bottom: 2.25rem;
          }

          .clients-section-heading {
            margin-bottom: 1.35rem;
          }

          .clients-section-heading-centered {
            text-align: center;
          }

          .clients-section-heading-centered p {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            max-width: 40rem;
          }

          .clients-simulator-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .clients-label {
            color: #02083b;
            font-size: 0.92rem;
            font-weight: 600;
          }

          .clients-simulator-controls {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 0.85rem;
            align-items: center;
          }

          :global(.clients-input.form-control) {
            min-height: 3.3rem;
            padding: 0.9rem 1rem;
            border: 1px solid rgba(2, 8, 59, 0.14);
            border-radius: 16px;
            background: #fff;
            color: #02083b;
            box-shadow: none;
          }

          :global(.clients-input.form-control:focus) {
            border-color: rgba(2, 8, 59, 0.6);
            box-shadow: 0 0 0 4px rgba(2, 8, 59, 0.12);
          }

          .clients-feedback-card,
          .clients-result-card {
            border-radius: 18px;
            max-width: 100%;
          }

          .clients-feedback-card {
            padding: 0.95rem 1.1rem;
            border: 1px solid rgba(183, 28, 28, 0.12);
            background: rgba(183, 28, 28, 0.06);
            color: #8d1f1f;
            font-weight: 600;
          }

          .clients-result-card {
            padding: 1rem;
            border: 1px solid rgba(11, 31, 61, 0.08);
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 12px 26px rgba(11, 31, 61, 0.06);
          }

          .clients-result-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0.9rem;
          }

          .clients-result-item {
            display: grid;
            gap: 0.3rem;
            padding: 0.95rem 1rem;
            border-radius: 16px;
            background: rgba(2, 8, 59, 0.04);
          }

          .clients-result-item strong {
            color: #02083b;
            font-size: clamp(1rem, 1.8vw, 1.28rem);
            line-height: 1.2;
          }

          .clients-result-item--highlight {
            background: rgba(2, 8, 59, 0.1);
            border: 1px solid rgba(2, 8, 59, 0.14);
          }

          .clients-result-label {
            color: rgba(2, 8, 59, 0.68);
            font-size: 0.82rem;
            font-weight: 700;
            letter-spacing: 0.04em;
            text-transform: uppercase;
          }

          .clients-steps-section,
          .clients-benefits-section,
          .clients-faq-section {
            margin-bottom: 2.4rem;
          }

          .clients-steps-grid,
          .clients-benefits-grid {
            display: grid;
            gap: 1rem;
          }

          .clients-steps-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .clients-benefits-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .clients-step-card,
          .clients-benefit-card,
          .clients-faq-item {
            background: rgba(255, 255, 255, 0.98);
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 24px;
            box-shadow: 0 12px 28px rgba(11, 31, 61, 0.05);
          }

          .clients-step-card,
          .clients-benefit-card {
            height: 100%;
            padding: 1.35rem 1.25rem;
          }

          .clients-step-icon,
          .clients-benefit-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2.8rem;
            height: 2.8rem;
            margin-bottom: 1.05rem;
            border-radius: 16px;
            background: rgba(2, 8, 59, 0.08);
            color: #02083b;
            font-size: 1.1rem;
          }

          .clients-step-card h4,
          .clients-benefit-card h4 {
            margin: 0 0 0.65rem;
            color: #02083b;
            font-size: 1.1rem;
            font-weight: 700;
          }

          .clients-step-card p,
          .clients-benefit-card p,
          .clients-faq-panel p {
            margin: 0;
            color: rgba(2, 8, 59, 0.74);
            line-height: 1.68;
            text-align: left;
          }

          .clients-faq-list {
            display: grid;
            gap: 0.9rem;
            max-width: 52rem;
            margin: 0 auto;
          }

          .clients-faq-trigger {
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

          .clients-faq-panel {
            padding: 0 1.3rem 1.25rem;
          }

          .clients-faq-item.is-open {
            border-color: rgba(2, 8, 59, 0.32);
            box-shadow: 0 16px 32px rgba(2, 8, 59, 0.08);
          }

          @media (max-width: 1199px) {
            .clients-benefits-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 991px) {
            .clients-hero-card {
              grid-template-columns: 1fr;
              display: grid;
            }

            .clients-steps-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 767px) {
            :global(.page-title h1) {
              color: #ffffff !important;
              opacity: 1 !important;
              text-shadow: 0 10px 24px rgba(2, 8, 59, 0.28) !important;
            }

            .clients-hero-card,
            .clients-simulator-card {
              border-radius: 24px;
              padding: 1.3rem;
            }

            .clients-simulator-controls,
            .clients-benefits-grid,
            .clients-result-grid {
              grid-template-columns: 1fr;
            }

            .clients-primary-button,
            .clients-secondary-button {
              width: 100%;
              max-width: 100%;
            }

            .clients-hero-image {
              min-height: 280px;
              max-height: 320px;
            }

            .clients-faq-trigger {
              padding: 1.05rem 1rem;
            }

            .clients-faq-panel {
              padding: 0 1rem 1.05rem;
            }
          }
        `}</style>
      </section>
    </main>
  )
}
