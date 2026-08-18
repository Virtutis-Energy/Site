'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useLanguage } from '@/components/LanguageProvider'
import { useNiveisOperacao } from '@/hooks/useNiveisOperacao'
import { getLocalizedPath } from '@/lib/i18n'

const BASE_ASSOCIATE_REVENUE = 1392.05
const plantOptions = [
  { id: '20', nome: '20 kW', power: 20, fraction: 1 / 3, vitis: 40, rentalPrice: 22.24 },
  { id: '40', nome: '40 kW', power: 40, fraction: 2 / 3, vitis: 80, rentalPrice: 44.48 },
  { id: '60', nome: '60 kW', power: 60, fraction: 1, vitis: 120, rentalPrice: 66.73 },
]
const plantLevels = [0, 1, 2, 3]
const stepIcons = ['bi bi-building-add', 'bi bi-diagram-3', 'bi bi-bar-chart-line'] as const
const trackingIcons = ['bi bi-lightning-charge', 'bi bi-link-45deg', 'bi bi-cash-coin', 'bi bi-grid-1x2'] as const

export default function AssociadoPageContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()
  const { usinas } = useNiveisOperacao()
  const [selectedPlant, setSelectedPlant] = useState(plantOptions[0].id)
  const [associateLevel, setAssociateLevel] = useState(1)
  const [activeFaq, setActiveFaq] = useState(0)

  const availablePlants = useMemo(() => {
    if (!usinas.length) {
      return plantOptions
    }

    return usinas.map((usina, index) => {
      const fallbackPlant = plantOptions[index] ?? plantOptions[plantOptions.length - 1]

      return {
        ...fallbackPlant,
        id: String(usina.id),
        nome: usina.nome,
      }
    })
  }, [usinas])

  useEffect(() => {
    if (!availablePlants.some((plant) => plant.id === selectedPlant)) {
      setSelectedPlant(availablePlants[0].id)
    }
  }, [availablePlants, selectedPlant])

  const selectedPlantData = availablePlants.find((plant) => plant.id === selectedPlant) ?? availablePlants[0]

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat(localeSegment === 'pt-br' ? 'pt-BR' : localeSegment === 'es' ? 'es-ES' : 'en-US', {
        style: 'currency',
        currency: 'BRL',
      }),
    [localeSegment]
  )

  const associateRevenue = associateLevel === 0 ? 0 : BASE_ASSOCIATE_REVENUE * selectedPlantData.fraction * associateLevel

  const steps = [
    { title: t.associatePage.step1Title, text: t.associatePage.step1Text },
    { title: t.associatePage.step2Title, text: t.associatePage.step2Text },
    { title: t.associatePage.step3Title, text: t.associatePage.step3Text },
  ]

  const trackingItems = [
    { title: t.associatePage.service1Title, text: t.associatePage.service1Text },
    { title: t.associatePage.service2Title, text: t.associatePage.service2Text },
    { title: t.associatePage.service3Title, text: t.associatePage.service3Text },
    { title: t.associatePage.service4Title, text: t.associatePage.service4Text },
  ]

  const faqs = [
    { question: t.associatePage.faq1Question, answer: t.associatePage.faq1Answer },
    { question: t.associatePage.faq2Question, answer: t.associatePage.faq2Answer },
    { question: t.associatePage.faq3Question, answer: t.associatePage.faq3Answer },
    { question: t.associatePage.faq4Question, answer: t.associatePage.faq4Answer },
    { question: t.associatePage.faq6Question, answer: t.associatePage.faq6Answer },
  ]

  const scrollToSimulator = () => {
    document.getElementById('associate-simulator')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="main">
      <div className="page-title dark-background" style={{ backgroundImage: 'url(/img/hero-carousel/ft2.jpg)' }}>
        <div className="container position-relative">
          <h1 style={{ color: '#FFFFFF', opacity: 1 }}>{t.associatePage.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <button type="button" onClick={() => router.push(getLocalizedPath(localeSegment, 'home'))} style={{ color: 'white', fontWeight: 600 }}>
                  {t.common.home}
                </button>
              </li>
              <li className="current">{t.associatePage.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="associate-page section">
        <div className="container">
          <div className="associate-hero-card" data-aos="fade-up" data-aos-delay="100">
            <div className="associate-hero-copy">
              <span className="associate-kicker">{t.associatePage.title}</span>
              <h2>{t.associatePage.headline}</h2>
              <p>{t.associatePage.body}</p>
              <button type="button" className="associate-primary-button" onClick={scrollToSimulator}>
                {t.associatePage.heroCta}
              </button>
            </div>

            <div className="associate-hero-media">
              <Image
                src="/img/hero-carousel/hero-carousel-6.jpg"
                alt={t.associatePage.title}
                className="associate-hero-image"
                width={680}
                height={460}
              />
            </div>
          </div>

          <div className="associate-intro-grid" data-aos="fade-up" data-aos-delay="140">
            <article className="associate-info-card">
              <div className="associate-section-heading">
                <h3>{t.associatePage.whatTitle}</h3>
              </div>
              <p>{t.associatePage.whatText}</p>
              <p className="associate-support-text">{t.associatePage.whatSupport}</p>
            </article>

            <article className="associate-summary-card">
              <div className="associate-summary-item">
                <span>{t.associatePage.currentPlantLabel}</span>
                <strong>{selectedPlantData.nome}</strong>
              </div>
              <div className="associate-summary-item">
                <span>{t.associatePage.referenceValue}</span>
                <strong>{selectedPlantData.vitis} Vitis</strong>
              </div>
              <div className="associate-summary-item">
                <span>{t.associatePage.associateLevel}</span>
                <strong>{t.associatePage.levelLabel(associateLevel)}</strong>
              </div>
            </article>
          </div>

          <div className="associate-journey-section" data-aos="fade-up" data-aos-delay="180">
            <div className="associate-section-heading associate-section-heading-centered">
              <h3>{t.associatePage.journeyTitle}</h3>
              <p>{t.associatePage.journeyText}</p>
            </div>

            <div className="associate-journey-grid">
              {steps.map((step, index) => (
                <article key={step.title} className="associate-step-card">
                  <span className="associate-step-icon" aria-hidden="true">
                    <i className={stepIcons[index]}></i>
                  </span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div id="associate-simulator" className="associate-simulator-card" data-aos="fade-up" data-aos-delay="220">
            <div className="associate-simulator-copy">
              <div className="associate-section-heading">
                <h3>{t.associatePage.calculatorTitle}</h3>
                <p className="associate-simulator-lead">{t.associatePage.calculatorText}</p>
              </div>
              <p className="associate-simulator-intro">{t.associatePage.calculatorIntro}</p>
              <div className="associate-inline-notes">
                <div className="associate-inline-note-card">
                  <span>{t.associatePage.baseLeaseLabel}</span>
                  <strong>{t.associatePage.baseLeaseText}</strong>
                </div>
                <div className="associate-inline-note-card">
                  <span>{t.associatePage.baseLevelLabel}</span>
                  <strong>{t.associatePage.baseLevelText}</strong>
                </div>
              </div>
              <p className="associate-note">{t.associatePage.simulatorNote}</p>
            </div>

            <div className="associate-simulator-panel">
              <div className="associate-form-grid">
                <div className="associate-field">
                  <label htmlFor="associatePlant" className="associate-label">
                    {t.associatePage.selectedPlantLabel}
                  </label>
                  <select
                    id="associatePlant"
                    className="form-select associate-select"
                    value={selectedPlant}
                    onChange={(event) => setSelectedPlant(event.target.value)}
                  >
                    {availablePlants.map((plant) => (
                      <option value={plant.id} key={plant.id}>
                        {t.associatePage.plantLabel} {plant.nome}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="associate-field">
                  <label htmlFor="associateLevel" className="associate-label">
                    {t.associatePage.associateLevel}
                  </label>
                  <select
                    id="associateLevel"
                    className="form-select associate-select"
                    value={associateLevel}
                    onChange={(event) => setAssociateLevel(Number(event.target.value))}
                  >
                    {plantLevels.map((level) => (
                      <option value={level} key={level}>
                        {t.associatePage.levelLabel(level)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <p className="associate-help-text">{t.associatePage.selectPlantGuidance}</p>

              <div className="associate-results-grid">
                <article className="associate-result-card associate-result-card-featured">
                  <span>{t.associatePage.levelRevenue}</span>
                  <strong>{formatter.format(associateRevenue)}</strong>
                </article>
              </div>
            </div>
          </div>

          <div className="associate-tracking-section" data-aos="fade-up" data-aos-delay="260">
            <div className="associate-section-heading associate-section-heading-centered">
              <h3>{t.associatePage.trackingTitle}</h3>
              <p>{t.associatePage.trackingText}</p>
            </div>

            <div className="associate-tracking-grid">
              {trackingItems.map((item, index) => (
                <article key={item.title} className="associate-tracking-card">
                  <span className="associate-tracking-icon" aria-hidden="true">
                    <i className={trackingIcons[index]}></i>
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="associate-faq-section" data-aos="fade-up" data-aos-delay="300">
            <div className="associate-section-heading associate-section-heading-centered">
              <h3>{t.associatePage.faqTitle}</h3>
              <p>{t.associatePage.faqText}</p>
            </div>

            <div className="associate-faq-list">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index

                return (
                  <div key={faq.question} className={`associate-faq-item${isOpen ? ' is-open' : ''}`}>
                    <button
                      type="button"
                      className="associate-faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`associate-faq-panel-${index}`}
                      onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <i className={`bi ${isOpen ? 'bi-dash-lg' : 'bi-plus-lg'}`}></i>
                    </button>
                    <div id={`associate-faq-panel-${index}`} className="associate-faq-panel" hidden={!isOpen}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        <style jsx>{`
          .associate-page {
            background:
              radial-gradient(circle at top left, rgba(11, 31, 61, 0.05), transparent 34%),
              linear-gradient(180deg, #ffffff 0%, #f6f9fc 100%);
            padding-bottom: clamp(2.25rem, 4vw, 3.5rem);
          }

          .associate-hero-card,
          .associate-info-card,
          .associate-summary-card,
          .associate-simulator-card {
            background: rgba(255, 255, 255, 0.98);
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 28px;
            box-shadow: 0 18px 42px rgba(11, 31, 61, 0.08);
          }

          .associate-hero-card {
            display: grid;
            grid-template-columns: minmax(0, 1.06fr) minmax(320px, 0.94fr);
            gap: 1.5rem;
            align-items: center;
            padding: clamp(1.4rem, 2.7vw, 2.1rem);
            margin-bottom: 1.8rem;
          }

          .associate-kicker {
            display: inline-flex;
            align-items: center;
            margin-bottom: 1rem;
            color: var(--accent-color);
            font-size: 0.82rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .associate-hero-copy h2,
          .associate-section-heading h3 {
            margin: 0;
            color: #02083b;
            font-size: clamp(1.85rem, 2.8vw, 2.9rem);
            font-weight: 700;
            line-height: 1.1;
            text-align: left;
          }

          .associate-hero-copy p,
          .associate-section-heading p,
          .associate-info-card p {
            margin: 1rem 0 0;
            color: rgba(2, 8, 59, 0.76);
            line-height: 1.68;
            text-align: left;
          }

          .associate-hero-copy p {
            max-width: 38rem;
          }

          .associate-primary-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-top: 1.3rem;
            min-height: 3.25rem;
            padding: 0.9rem 1.7rem;
            border: 0;
            border-radius: 999px;
            background: #02083b;
            color: #ffffff;
            font-weight: 700;
            transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          }

          .associate-primary-button:hover {
            transform: translateY(-1px);
            box-shadow: 0 14px 26px rgba(2, 8, 59, 0.16);
            opacity: 0.96;
          }

          .associate-hero-media {
            overflow: hidden;
            border-radius: 24px;
            min-height: 100%;
            align-self: stretch;
          }

          .associate-hero-image {
            display: block;
            width: 100%;
            height: 100%;
            min-height: 350px;
            max-height: 420px;
            object-fit: cover;
          }

          .associate-intro-grid {
            display: grid;
            grid-template-columns: minmax(0, 1.08fr) minmax(280px, 0.92fr);
            gap: 1.25rem;
            margin-bottom: 1.55rem;
          }

          .associate-info-card,
          .associate-summary-card {
            padding: clamp(1.2rem, 2vw, 1.6rem);
          }

          .associate-support-text {
            max-width: 41rem;
            padding-top: 0.75rem;
            border-top: 1px solid rgba(2, 8, 59, 0.1);
          }

          .associate-summary-card {
            display: grid;
            gap: 0.85rem;
            align-content: start;
            background:
              linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(246, 249, 252, 0.98) 100%);
          }

          .associate-summary-item {
            display: grid;
            gap: 0.3rem;
            min-height: 5.55rem;
            padding: 0.95rem 1rem;
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 20px;
            background: #ffffff;
          }

          .associate-summary-item span,
          .associate-result-card span,
          .associate-inline-notes span {
            color: rgba(2, 8, 59, 0.58);
            font-size: 0.82rem;
            font-weight: 600;
            letter-spacing: 0.01em;
          }

          .associate-summary-item strong,
          .associate-result-card strong {
            color: #02083b;
            font-size: 1.02rem;
            line-height: 1.4;
          }

          .associate-journey-section,
          .associate-tracking-section,
          .associate-faq-section {
            margin-bottom: 1.55rem;
          }

          .associate-section-heading-centered h3,
          .associate-section-heading-centered p {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }

          .associate-section-heading-centered p {
            max-width: 44rem;
          }

          .associate-journey-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
            margin-top: 1rem;
          }

          .associate-step-card,
          .associate-tracking-card,
          .associate-result-card,
          .associate-faq-item {
            background: rgba(255, 255, 255, 0.98);
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 24px;
            box-shadow: 0 14px 32px rgba(11, 31, 61, 0.06);
          }

          .associate-step-card,
          .associate-tracking-card {
            padding: 1.15rem 1.1rem;
          }

          .associate-step-icon,
          .associate-tracking-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 3rem;
            margin-bottom: 1rem;
            border-radius: 18px;
            background: rgba(2, 8, 59, 0.1);
            color: #02083b;
            font-size: 1.2rem;
          }

          .associate-step-card h4,
          .associate-tracking-card h4 {
            margin: 0 0 0.55rem;
            color: #02083b;
            font-size: 1.08rem;
            font-weight: 700;
            text-align: left;
          }

          .associate-step-card p,
          .associate-tracking-card p,
          .associate-faq-panel p {
            margin: 0;
            color: rgba(2, 8, 59, 0.74);
            line-height: 1.6;
            text-align: left;
          }

          .associate-simulator-card {
            display: grid;
            grid-template-columns: minmax(0, 0.88fr) minmax(0, 1fr);
            gap: 1.1rem;
            align-items: start;
            padding: clamp(1rem, 1.8vw, 1.35rem);
            margin-bottom: 1.55rem;
          }

          .associate-simulator-copy {
            display: grid;
            align-content: start;
            gap: 0.55rem;
            max-width: 35.5rem;
            padding: 0.1rem 0.35rem 0.1rem 0;
          }

          .associate-simulator-copy :global(.associate-section-heading) {
            max-width: 35rem;
          }

          .associate-simulator-copy :global(.associate-section-heading h3) {
            max-width: 34rem;
            font-size: clamp(1.72rem, 2.35vw, 2.3rem);
            line-height: 1.08;
            letter-spacing: -0.02em;
            white-space: nowrap;
          }

          .associate-simulator-lead {
            max-width: 31.5rem;
            margin-top: 0.7rem;
            line-height: 1.62;
          }

          .associate-simulator-intro {
            max-width: 28.5rem;
            margin: 0;
            color: rgba(2, 8, 59, 0.68);
            font-size: 0.95rem;
            line-height: 1.52;
          }

          .associate-inline-notes {
            display: grid;
            gap: 0.85rem;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 32rem;
            margin-top: 0.45rem;
          }

          .associate-inline-note-card {
            display: grid;
            align-content: start;
            gap: 0.18rem;
            min-height: 5.35rem;
            padding: 0.8rem 0.9rem;
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 16px;
            background: rgba(246, 249, 252, 0.82);
          }

          .associate-inline-note-card strong {
            color: #02083b;
            font-size: 0.92rem;
            line-height: 1.45;
            font-weight: 600;
          }

          .associate-note,
          .associate-help-text {
            margin: 0;
            color: rgba(2, 8, 59, 0.6);
            font-size: 0.88rem;
            line-height: 1.48;
            text-align: left;
          }

          .associate-note {
            max-width: 30rem;
            margin-top: 0.2rem;
          }

          .associate-simulator-panel {
            padding: 0.9rem;
            border-radius: 22px;
            background: linear-gradient(180deg, rgba(246, 249, 252, 0.96) 0%, rgba(255, 255, 255, 0.98) 100%);
            border: 1px solid rgba(11, 31, 61, 0.08);
          }

          .associate-form-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.8rem;
          }

          .associate-field {
            display: grid;
          }

          .associate-label {
            margin-bottom: 0.38rem;
            color: #02083b;
            font-size: 0.9rem;
            font-weight: 700;
          }

          :global(.associate-select) {
            min-height: 3rem;
            border-radius: 14px;
            border: 1px solid rgba(11, 31, 61, 0.14);
            color: #02083b;
            box-shadow: none;
            padding-inline: 0.9rem 2rem;
          }

          :global(.associate-select:focus) {
            border-color: rgba(2, 8, 59, 0.48);
            box-shadow: 0 0 0 0.18rem rgba(2, 8, 59, 0.12);
          }

          .associate-results-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.75rem;
            margin-top: 0.8rem;
            justify-items: center;
          }

          .associate-result-card {
            display: grid;
            gap: 0.22rem;
            width: min(100%, 22rem);
            min-height: 5.9rem;
            padding: 0.95rem 1rem;
            align-content: center;
            justify-items: flex-start;
            text-align: left;
            border-radius: 20px;
          }

          .associate-result-card-featured {
            justify-self: center;
          }

          .associate-result-card span {
            font-size: 0.79rem;
          }

          .associate-result-card strong {
            font-size: clamp(1.02rem, 1.8vw, 1.18rem);
            line-height: 1.35;
          }

          .associate-tracking-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
            margin-top: 1rem;
          }

          .associate-faq-list {
            display: grid;
            gap: 0.85rem;
            max-width: 56rem;
            margin: 1rem auto 0;
          }

          .associate-faq-trigger {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 1rem 1.1rem;
            border: 0;
            background: transparent;
            color: #02083b;
            text-align: left;
            font-size: 1rem;
            font-weight: 700;
          }

          .associate-faq-trigger i {
            color: var(--accent-color);
            font-size: 1rem;
          }

          .associate-faq-panel {
            padding: 0 1.1rem 1.1rem;
          }

          @media (max-width: 1024px) {
            .associate-hero-card,
            .associate-simulator-card,
            .associate-intro-grid {
              grid-template-columns: 1fr;
            }

            .associate-simulator-copy {
              padding-right: 0;
              max-width: none;
            }

            .associate-simulator-copy :global(.associate-section-heading),
            .associate-simulator-copy :global(.associate-section-heading h3),
            .associate-simulator-lead,
            .associate-simulator-intro,
            .associate-inline-notes,
            .associate-note {
              max-width: none;
            }

            .associate-simulator-copy :global(.associate-section-heading h3) {
              white-space: normal;
            }

            .associate-hero-image {
              min-height: 300px;
            }

            .associate-journey-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 768px) {
            :global(.page-title h1) {
              color: #ffffff !important;
              opacity: 1 !important;
              text-shadow: 0 10px 24px rgba(2, 8, 59, 0.28) !important;
            }

            .associate-page {
              padding-bottom: 3rem;
            }

            .associate-hero-card,
            .associate-info-card,
            .associate-summary-card,
            .associate-simulator-card {
              border-radius: 24px;
            }

            .associate-hero-copy h2,
            .associate-section-heading h3 {
              font-size: clamp(1.72rem, 7vw, 2.2rem);
            }

            .associate-hero-card {
              padding: 1.25rem;
            }

            .associate-simulator-card {
              padding: 1.2rem;
            }

            .associate-inline-notes,
            .associate-form-grid,
            .associate-results-grid,
            .associate-journey-grid,
            .associate-tracking-grid {
              grid-template-columns: 1fr;
            }

            .associate-inline-note-card,
            .associate-result-card,
            .associate-result-card-wide {
              min-height: unset;
            }
          }

          @media (max-width: 430px) {
            .associate-hero-card,
            .associate-simulator-card,
            .associate-info-card,
            .associate-summary-card {
              padding-left: 1rem;
              padding-right: 1rem;
            }

            .associate-primary-button {
              width: 100%;
            }

            .associate-hero-image {
              min-height: 250px;
            }

            .associate-step-card,
            .associate-tracking-card,
            .associate-result-card {
              padding: 0.85rem;
            }
          }
        `}</style>
      </section>
    </main>
  )
}
