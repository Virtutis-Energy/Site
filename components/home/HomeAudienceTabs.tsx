'use client'

import { useRouter } from 'next/navigation'
import { LuHandshake, LuHouse, LuTrendingUp } from 'react-icons/lu'
import { useLanguage } from '@/components/LanguageProvider'
import usinaAssociado from '@/assets/usina-associado.jpeg'
import { getLocalizedPath, type RouteKey } from '@/lib/i18n'

type AudienceTab = {
  id: string
  label: string
  title: string
  paragraphs: string[]
  benefits: string[]
  image: string
  imageAlt: string
  route: RouteKey
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
}

export default function HomeAudienceTabs() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()

  const tabs: AudienceTab[] = [
    {
      id: 'customer',
      label: t.home.customerTab,
      title: t.home.customerFeatureTitle,
      paragraphs: [t.home.customerFeatureText1, t.home.customerFeatureText2],
      benefits: t.home.customerFeatureBenefits,
      image: '/img/hero-carousel/ft2.jpg',
      imageAlt: t.home.customerFeatureTitle,
      route: 'clients',
      icon: LuHouse,
    },
    {
      id: 'investor',
      label: t.home.investorTab,
      title: t.home.investorFeatureTitle,
      paragraphs: [t.home.investorFeatureText, t.home.investorFeatureText2],
      benefits: t.home.investorFeatureBenefits,
      image: '/img/hero-carousel/ft1.jpg',
      imageAlt: t.home.investorFeatureTitle,
      route: 'investors',
      icon: LuTrendingUp,
    },
    {
      id: 'associate',
      label: t.home.associateTab,
      title: t.home.associateFeatureTitle,
      paragraphs: [t.home.associateFeatureText, t.home.associateFeatureText2],
      benefits: t.home.associateFeatureBenefits,
      image: usinaAssociado.src,
      imageAlt: t.home.associateFeatureTitle,
      route: 'associate',
      icon: LuHandshake,
    },
  ]

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="home-audience-selector-wrap" data-aos="fade-up" data-aos-delay="100">
          <p className="home-audience-selector-label">{t.home.audienceSelectorLabel}</p>

          <ul className="nav nav-tabs row g-2 d-flex home-audience-tabs" role="tablist">
          {tabs.map((tab, index) => {
            const tabId = `features-tab-${tab.id}`
            const Icon = tab.icon

            return (
              <li className="nav-item col-12 col-sm-4" role="presentation" key={tab.id}>
                <button
                  className={`nav-link home-audience-tab${index === 0 ? ' active show' : ''}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tabId}`}
                  aria-selected={index === 0}
                  aria-controls={tabId}
                  type="button"
                  role="tab"
                >
                  <span className="home-audience-tab__inner">
                    <Icon className="home-audience-tab__icon" aria-hidden={true} />
                    <span className="home-audience-tab__text">{tab.label}</span>
                  </span>
                </button>
              </li>
            )
          })}
          </ul>
        </div>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {tabs.map((tab, index) => (
            <div
              className={`tab-pane fade${index === 0 ? ' active show' : ''}`}
              id={`features-tab-${tab.id}`}
              role="tabpanel"
              key={tab.id}
            >
              <div className="row content align-items-center gy-4 home-audience-content-card">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center home-audience-copy">
                  <h3>{tab.title}</h3>
                  {tab.paragraphs.map((paragraph) => (
                    <p className="text-index" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}

                  <div
                    className={`home-audience-benefits${tab.id !== 'customer' ? ' home-audience-benefits--single-row' : ''}`}
                    aria-label={`${tab.label} highlights`}
                  >
                    {tab.benefits.map((benefit) => (
                      <span key={benefit} className="home-audience-benefit">
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <div className="info home-audience-cta">
                    <button onClick={() => router.push(getLocalizedPath(localeSegment, tab.route))} className="btn-get-started">
                      {t.common.learnMore}
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0 home-audience-visual">
                  <div className="home-audience-image-wrap">
                    <img src={tab.image} alt={tab.imageAlt} width="500" className="img-fluid home-audience-image" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(#features.section) {
          padding-top: 1.65rem;
        }

        .home-audience-selector-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 0;
          margin-bottom: 18px;
        }

        .home-audience-selector-label {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 0 12px;
          padding: 8px 14px 14px;
          color: #0f2350;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          text-align: center;
        }

        .home-audience-selector-label::after {
          content: none;
        }

        .home-audience-tabs {
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          padding: 8px;
          border-radius: 22px;
          background: rgba(240, 245, 251, 0.72);
        }

        .home-audience-tab {
          width: 100%;
          min-height: 64px;
          border: 0;
          border-radius: 16px;
          background: transparent;
          color: #02083b;
          transition:
            background-color 0.24s ease,
            color 0.24s ease,
            box-shadow 0.24s ease,
            transform 0.24s ease;
        }

        .home-audience-tab__inner {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
        }

        .home-audience-tab__icon {
          width: 18px;
          height: 18px;
          flex: 0 0 18px;
        }

        .home-audience-tab__text {
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .home-audience-tab.active,
        .home-audience-tab.active.show {
          background: linear-gradient(135deg, #02083b 0%, #17316a 100%);
          color: #ffffff;
          box-shadow: 0 14px 28px rgba(12, 28, 69, 0.2);
        }

        @media (hover: hover) and (pointer: fine) {
          .home-audience-tab:hover:not(.active):not(.show) {
            background: rgba(2, 8, 59, 0.05);
            color: #02083b;
            transform: translateY(-1px);
          }
        }

        .home-audience-content-card {
          margin: 0;
          padding: 12px 10px;
          border-radius: 24px;
          background: transparent;
          box-shadow: none;
        }

        .home-audience-copy {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 4px 12px 4px 16px;
        }

        .home-audience-copy h3 {
          margin-bottom: 10px;
          color: #02083b;
          font-size: clamp(1.55rem, 2.2vw, 2rem);
          line-height: 1.04;
          letter-spacing: -0.03em;
        }

        .home-audience-copy p {
          margin-bottom: 0;
          max-width: 50ch;
          color: #36507a;
          font-size: 0.95rem;
          line-height: 1.56;
          text-align: left !important;
          text-wrap: pretty;
        }

        .home-audience-copy p + p {
          margin-top: 10px;
        }

        .home-audience-benefits {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 14px;
        }

        .home-audience-benefits--single-row {
          flex-wrap: nowrap;
        }

        .home-audience-benefits--single-row .home-audience-benefit {
          width: fit-content;
          white-space: nowrap;
          flex-shrink: 0;
          font-size: 0.74rem;
        }

        .home-audience-benefit {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 6px 11px;
          border-radius: 999px;
          background: rgba(2, 8, 59, 0.05);
          border: 1px solid rgba(26, 46, 93, 0.08);
          color: #17316a;
          font-size: 0.82rem;
          font-weight: 600;
          line-height: 1.2;
        }

        .home-audience-cta {
          margin-top: auto;
          padding-top: 14px;
        }

        .home-audience-cta :global(.btn-get-started) {
          margin: 0;
        }

        .home-audience-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .home-audience-image-wrap {
          width: 100%;
          max-width: 420px;
          min-height: 300px;
          border-radius: 0;
          overflow: hidden;
          background: transparent;
        }

        .home-audience-image {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 300px;
          border-radius: 0;
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 1199px) {
          .home-audience-image-wrap {
            max-width: 400px;
            min-height: 280px;
          }

          .home-audience-image {
            min-height: 280px;
          }
        }

        @media (max-width: 991px) {
          .home-audience-tabs {
            max-width: 100%;
          }

          .home-audience-content-card {
            padding: 12px 4px;
          }

          .home-audience-copy {
            padding: 0 12px;
          }

          .home-audience-copy p {
            max-width: 60ch;
          }

          .home-audience-benefits--single-row {
            flex-wrap: wrap;
          }

          .home-audience-benefits--single-row .home-audience-benefit {
            width: fit-content;
            white-space: normal;
            flex-shrink: 1;
          }

          .home-audience-cta {
            display: flex;
            justify-content: flex-start;
          }

          .home-audience-image-wrap {
            max-width: 470px;
            min-height: 280px;
          }

          .home-audience-image {
            min-height: 280px;
          }
        }

        @media (max-width: 767px) {
          :global(#features.section) {
            padding-top: 0.85rem;
          }

          .home-audience-selector-wrap {
            margin-top: 0;
            margin-bottom: 14px;
          }

          .home-audience-selector-label {
            padding: 7px 12px 12px;
            font-size: 0.92rem;
            margin-bottom: 10px;
          }

          .home-audience-selector-label::after {
            width: 62px;
          }

          .home-audience-tabs {
            padding: 6px;
            border-radius: 18px;
          }

          .home-audience-tabs :global(.nav-item) {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .home-audience-tab {
            min-height: 56px;
            border-radius: 14px;
          }

          .home-audience-tab__text {
            font-size: 0.95rem;
          }

          .home-audience-tab__icon {
            width: 17px;
            height: 17px;
            flex-basis: 17px;
          }

          .home-audience-content-card {
            padding: 10px 6px;
            border-radius: 20px;
          }

          .home-audience-copy {
            padding: 2px 10px 0;
          }

          .home-audience-copy h3 {
            font-size: 1.35rem;
            margin-bottom: 10px;
            text-align: left;
          }

          .home-audience-copy p {
            font-size: 0.91rem;
            line-height: 1.5;
            max-width: none;
          }

          .home-audience-benefits {
            gap: 7px;
            margin-top: 12px;
          }

          .home-audience-benefit {
            min-height: 32px;
            padding: 6px 10px;
            font-size: 0.8rem;
          }

          .home-audience-cta {
            justify-content: center;
            padding-top: 12px;
          }

          .home-audience-cta :global(.btn-get-started) {
            width: min(100%, 260px);
            text-align: center;
          }

          .home-audience-image-wrap {
            max-width: 100%;
            border-radius: 0;
            min-height: 230px;
          }

          .home-audience-image {
            min-height: 230px;
          }
        }

        @media (max-width: 430px) {
          .home-audience-selector-wrap {
            margin-bottom: 14px;
          }

          .home-audience-tab__inner {
            gap: 8px;
          }

          .home-audience-tab__text {
            font-size: 0.9rem;
          }

          .home-audience-content-card {
            padding: 8px 0;
          }

          .home-audience-copy {
            padding: 0 6px;
          }

          .home-audience-copy h3 {
            font-size: 1.26rem;
            line-height: 1.12;
          }

          .home-audience-copy p {
            font-size: 0.89rem;
            line-height: 1.52;
          }

          .home-audience-benefits {
            gap: 6px;
          }

          .home-audience-benefit {
            width: fit-content;
            max-width: 100%;
          }

          .home-audience-image-wrap,
          .home-audience-image {
            min-height: 210px;
          }
        }
      `}</style>
    </section>
  )
}
