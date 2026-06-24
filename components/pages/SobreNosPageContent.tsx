'use client'

import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/LanguageProvider'
import { getLocalizedPath } from '@/lib/i18n'
import WorldPresenceMap from '@/components/about/WorldPresenceMap'

export default function SobreNosPageContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()

  return (
    <main className="main">
      <div className="page-title dark-background" style={{ backgroundImage: 'url(/img/hero-carousel/hero-carousel-5.jpg)' }}>
        <div className="container position-relative ">
          <h1>{t.aboutPage.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <button onClick={() => router.push(getLocalizedPath(localeSegment, 'home'))} style={{ fontWeight: 600, color: 'white' }}>
                  {t.common.home}
                </button>
              </li>
              <li className="current">{t.aboutPage.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="about" className="about section">
        <div className="container">
          <div className="row position-relative align-items-stretch">
            <div className="col-lg-6 about-img" data-aos="zoom-out" data-aos-delay="200">
              <img src="/img/hero-carousel/about.jpg" alt="About" />
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h2 className="inner-title">{t.aboutPage.title}</h2>

              <div className="our-story">
                <h4>{t.aboutPage.since}</h4>
                <h3>{t.aboutPage.story}</h3>
                <p className="text-index">{t.aboutPage.intro}</p>

                <div className="about-highlight-grid">
                  <div className="about-highlight-card">
                    <span className="about-highlight-card__value">{t.aboutPage.stat1Value}</span>
                    <span className="about-highlight-card__label">{t.aboutPage.stat1Label}</span>
                  </div>
                  <div className="about-highlight-card">
                    <span className="about-highlight-card__value">{t.aboutPage.stat2Value}</span>
                    <span className="about-highlight-card__label">{t.aboutPage.stat2Label}</span>
                  </div>
                  <div className="about-highlight-card">
                    <span className="about-highlight-card__value">{t.aboutPage.stat3Value}</span>
                    <span className="about-highlight-card__label">{t.aboutPage.stat3Label}</span>
                  </div>
                </div>

                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>{t.aboutPage.bullet1}</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>{t.aboutPage.bullet2}</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>{t.aboutPage.bullet3}</span>
                  </li>
                </ul>

                <p className="text-index">{t.aboutPage.body}</p>
                <p className="text-index">{t.aboutPage.footprint}</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <WorldPresenceMap />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
