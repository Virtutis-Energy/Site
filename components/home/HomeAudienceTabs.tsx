'use client'

import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/LanguageProvider'
import { getLocalizedPath, type RouteKey } from '@/lib/i18n'

type AudienceTab = {
  id: string
  label: string
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
  route: RouteKey
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
      image: '/img/hero-carousel/ft2.jpg',
      imageAlt: t.home.customerFeatureTitle,
      route: 'clients',
    },
    {
      id: 'investor',
      label: t.home.investorTab,
      title: t.home.investorFeatureTitle,
      paragraphs: [t.home.investorFeatureText],
      image: '/img/hero-carousel/ft1.jpg',
      imageAlt: t.home.investorFeatureTitle,
      route: 'investors',
    },
    {
      id: 'associate',
      label: t.home.associateTab,
      title: t.home.associateFeatureTitle,
      paragraphs: [t.home.associateFeatureText],
      image: '/img/hero-carousel/hero-carousel-6.jpg',
      imageAlt: t.home.associateFeatureTitle,
      route: 'associate',
    },
  ]

  return (
    <section id="features" className="features section">
      <div className="container">
        <ul className="nav nav-tabs row g-2 d-flex home-audience-tabs" data-aos="fade-up" data-aos-delay="100" role="tablist">
          {tabs.map((tab, index) => {
            const tabId = `features-tab-${tab.id}`

            return (
              <li className="nav-item col-12 col-sm-4" role="presentation" key={tab.id}>
                <button
                  className={`nav-link${index === 0 ? ' active show' : ''}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tabId}`}
                  aria-selected={index === 0}
                  aria-controls={tabId}
                  type="button"
                  role="tab"
                >
                  <h4>{tab.label}</h4>
                </button>
              </li>
            )
          })}
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {tabs.map((tab, index) => (
            <div
              className={`tab-pane fade${index === 0 ? ' active show' : ''}`}
              id={`features-tab-${tab.id}`}
              role="tabpanel"
              key={tab.id}
            >
              <div className="row content align-items-center gy-4">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>{tab.title}</h3>
                  {tab.paragraphs.map((paragraph) => (
                    <p className="text-index" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                  <div className="info">
                    <button onClick={() => router.push(getLocalizedPath(localeSegment, tab.route))} className="btn-get-started">
                      {t.common.learnMore}
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0">
                  <img src={tab.image} alt={tab.imageAlt} width="500" className="img-fluid home-audience-image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
