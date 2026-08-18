'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/LanguageProvider'
import { getLocalizedPath } from '@/lib/i18n'
import { getAppDownloadHref } from '@/lib/appDownload'
import WorldPresenceMap from '@/components/about/WorldPresenceMap'
import fotoCarrosel from '@/assets/foto_carrosel.jpeg'
import fotoCarrosel2 from '@/assets/foto_carrosel2.jpeg'
import fotoCarrosel3 from '@/assets/foto_carrosel3.jpeg'
import fotoCarrosel4 from '@/assets/foto_carrosel4.jpeg'
import fotoCarrosel5 from '@/assets/foto_carrosel5.jpeg'
import imagemTrabalheConosco from '@/assets/Imagem-trabalhe-conosco.jpg'

const latinPrayer = [
  ['Veni, Sancte Spiritus,', 'et emitte caelitus', 'lucis tuae radium.'],
  ['Veni, pater pauperum,', 'veni, dator munerum', 'veni, lumen cordium.'],
  ['Consolator optime,', 'dulcis hospes animae,', 'dulce refrigerium.'],
  ['In labore requies,', 'in aestu temperies', 'in fletu solatium.'],
  ['O lux beatissima,', 'reple cordis intima', 'tuorum fidelium.'],
  ['Sine tuo numine,', 'nihil est in homine,', 'nihil est innoxium.'],
  ['Lava quod est sordidum,', 'riga quod est aridum,', 'sana quod est saucium.'],
  ['Flecte quod est rigidum,', 'fove quod est frigidum,', 'rege quod est devium.'],
  ['Da tuis fidelibus,', 'in te confidentibus,', 'sacrum septenarium.'],
  ['Da virtutis meritum,', 'da salutis exitum,', 'da perenne gaudium.', 'Amen. Alleluia.'],
]

const latinPrayerColumns = [latinPrayer.slice(0, 5), latinPrayer.slice(5)]

export default function SobreNosPageContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    { image: fotoCarrosel, caption: t.aboutPage.carouselCaptions[0], alt: t.aboutPage.carouselAlt1 },
    { image: fotoCarrosel2, caption: t.aboutPage.carouselCaptions[1], alt: t.aboutPage.carouselAlt2 },
    { image: fotoCarrosel3, caption: t.aboutPage.carouselCaptions[2], alt: t.aboutPage.carouselAlt3 },
    { image: fotoCarrosel4, caption: t.aboutPage.carouselCaptions[3], alt: t.aboutPage.carouselAlt4 },
    { image: fotoCarrosel5, caption: t.aboutPage.carouselCaptions[4], alt: t.aboutPage.carouselAlt5 },
    { image: imagemTrabalheConosco, caption: t.aboutPage.carouselCaptions[5], alt: t.aboutPage.carouselAlt6 },
  ]

  const goToPreviousSlide = () => {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const goToNextSlide = () => {
    setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1))
  }

  const getSlideRole = (index: number) => {
    const previousIndex = activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    const nextIndex = activeSlide === slides.length - 1 ? 0 : activeSlide + 1

    if (index === activeSlide) return 'active'
    if (index === previousIndex) return 'previous'
    if (index === nextIndex) return 'next'
    return 'hidden'
  }

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1))
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [slides.length])

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
        <div className="container about-page-shell">
          <section className="about-overview-card" data-aos="fade-up" data-aos-delay="90">
            <div className="about-overview-copy">
              <span className="about-overview-kicker">{t.aboutPage.since}</span>
              <h2>{t.aboutPage.story}</h2>
              <p className="about-overview-lead">{t.aboutPage.intro}</p>

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

              <div className="about-overview-body">
                <p>{t.aboutPage.body}</p>
                <ul className="about-overview-list">
                  <li>
                    <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                    <span>{t.aboutPage.bullet1}</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                    <span>{t.aboutPage.bullet2}</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                    <span>{t.aboutPage.bullet3}</span>
                  </li>
                </ul>
                <p className="about-overview-footprint">{t.aboutPage.footprint}</p>
              </div>
            </div>

            <div className="about-overview-media" data-aos="zoom-out" data-aos-delay="160">
              <img src="/img/hero-carousel/about.jpg" alt={t.aboutPage.story} />
            </div>
          </section>

          <section className="about-carousel-section" data-aos="fade-up" data-aos-delay="120">
            <div className="about-section-heading about-section-heading-centered">
              <h3>{t.aboutPage.carouselTitle}</h3>
              <p>{t.aboutPage.carouselText}</p>
            </div>

            <div className="about-carousel-frame">
              <button type="button" className="about-carousel-arrow about-carousel-arrow--prev" onClick={goToPreviousSlide} aria-label={t.aboutPage.carouselPrevious}>
                <i className="bi bi-arrow-left-short" aria-hidden="true"></i>
              </button>

              <div className="about-carousel-stage">
                <div className="about-carousel-showcase">
                  {slides.map((slide, index) => (
                    <div key={slide.alt} className={`about-carousel-slide about-carousel-slide--${getSlideRole(index)}`}>
                      <div className="about-carousel-image-shell">
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        className="about-carousel-image"
                        sizes="(max-width: 767px) 92vw, 78vw"
                        priority={index === 0}
                      />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button type="button" className="about-carousel-arrow about-carousel-arrow--next" onClick={goToNextSlide} aria-label={t.aboutPage.carouselNext}>
                <i className="bi bi-arrow-right-short" aria-hidden="true"></i>
              </button>
            </div>

            <div className="about-carousel-dots" role="tablist" aria-label={t.aboutPage.carouselTitle}>
              {slides.map((slide, index) => (
                <button
                  key={slide.alt}
                  type="button"
                  className={`about-carousel-dot${activeSlide === index ? ' is-active' : ''}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`${t.aboutPage.carouselGoTo} ${index + 1}`}
                  aria-pressed={activeSlide === index}
                />
              ))}
            </div>
          </section>

          <section className="about-contact-section" data-aos="fade-up" data-aos-delay="130">
            <div className="about-section-heading about-section-heading-centered">
              <h3 className="about-contact-title">{t.aboutPage.locationTitle}</h3>
            </div>

            <div className="about-contact-grid">
              <div className="about-contact-map-shell">
                <iframe
                  aria-label={t.aboutPage.locationMapTitle}
                  src="https://www.google.com/maps?q=Av.%20Humberto%20Monte%20s%2Fn%2C%20Bloco%20334%20-%20Condom%C3%ADnio%20de%20Empreendedorismo%20e%20Inova%C3%A7%C3%A3o%2C%20Campus%20do%20Pici%20-%20Universidade%20Federal%20do%20Cear%C3%A1%2C%20Pici%2C%20Fortaleza%20-%20CE%2C%2060440-593&z=16&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="about-contact-card">
                <div className="about-contact-card__header">
                  <h4>Virtutis Energy</h4>
                  <p>{t.aboutPage.contactCardSubtitle}</p>
                </div>

                <div className="about-contact-card__group">
                  <span className="about-contact-card__label">{t.aboutPage.instagramLabel}</span>
                  <a href="https://www.instagram.com/virtutisenergy/" target="_blank" rel="noopener noreferrer" className="about-contact-card__value">
                    @virtutisenergy
                  </a>
                </div>

                <div className="about-contact-card__group">
                  <span className="about-contact-card__label">{t.forms.email}</span>
                  <a href="mailto:vitinho@virtutisenergy.com" className="about-contact-card__value">
                    vitinho@virtutisenergy.com
                  </a>
                </div>

                <a href={getAppDownloadHref(t.header.appDownloadMessage)} target="_blank" rel="noopener noreferrer" className="about-contact-button">
                  {t.aboutPage.contactButton}
                </a>
              </div>
            </div>
          </section>

          <section className="about-map-section" data-aos="fade-up" data-aos-delay="140">
            <WorldPresenceMap />
          </section>

          <section className="about-essence-section" data-aos="fade-up" data-aos-delay="160">
            <div className="about-section-heading about-section-heading-centered">
              <h3>{t.aboutPage.essenceTitle}</h3>
            </div>

            <div className="about-latin-feature">
              <div className="text-latim" lang="la">
                {latinPrayerColumns.map((column, index) => (
                  <div className="text-latim__column" key={`latin-column-${index}`}>
                    {column.map((stanza) => (
                      <p key={stanza.join(' ')}>
                        {stanza.map((line) => (
                          <span key={line}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              <div className="about-latin-feature__image">
                <img src="/img/hero-carousel/peaceImage.png" alt={t.aboutPage.essenceTitle} />
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .about-page-shell {
            display: grid;
            gap: clamp(2rem, 4vw, 3.5rem);
          }

          .about-overview-card {
            display: grid;
            grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
            gap: clamp(1.5rem, 3vw, 2.5rem);
            align-items: center;
            padding: clamp(1.5rem, 3vw, 2.4rem);
            border-radius: 32px;
            background:
              linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(246, 249, 255, 0.98) 100%);
            border: 1px solid rgba(2, 8, 59, 0.08);
            box-shadow: 0 24px 56px rgba(2, 8, 59, 0.08);
          }

          .about-overview-copy {
            min-width: 0;
          }

          .about-overview-kicker,
          .about-section-heading__eyebrow {
            display: inline-flex;
            align-items: center;
            margin-bottom: 0.85rem;
            color: var(--accent-color);
            font-size: 0.82rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .about-overview-copy h2,
          .about-section-heading h3 {
            margin: 0;
            color: #02083b;
            font-size: clamp(2.05rem, 4vw, 3.35rem);
            font-weight: 700;
            line-height: 1.05;
          }

          .about-overview-lead,
          .about-section-heading p {
            margin: 1rem 0 0;
            max-width: 62ch;
            color: rgba(2, 8, 59, 0.78);
            font-size: 1.02rem;
            line-height: 1.75;
          }

          .about-overview-body {
            display: grid;
            gap: 1rem;
          }

          .about-overview-body p {
            margin: 0;
            max-width: 64ch;
            color: rgba(2, 8, 59, 0.8);
            line-height: 1.8;
          }

          .about-overview-footprint {
            padding-top: 0.35rem;
          }

          .about-overview-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 0.8rem;
          }

          .about-overview-list li {
            display: grid;
            grid-template-columns: auto minmax(0, 1fr);
            gap: 0.7rem;
            align-items: start;
            color: rgba(2, 8, 59, 0.84);
            line-height: 1.65;
          }

          .about-overview-list i {
            color: var(--accent-color);
            font-size: 1rem;
            margin-top: 0.18rem;
          }

          .about-overview-media {
            position: relative;
            overflow: hidden;
            border-radius: 26px;
            min-height: clamp(320px, 42vw, 520px);
            box-shadow: 0 22px 46px rgba(2, 8, 59, 0.14);
          }

          .about-overview-media img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .about-section-heading {
            max-width: 760px;
          }

          .about-section-heading-centered {
            text-align: center;
            margin: 0 auto 1.6rem;
          }

          .about-section-heading-centered p {
            margin-left: auto;
            margin-right: auto;
          }

          .about-carousel-section,
          .about-contact-section,
          .about-map-section,
          .about-essence-section {
            display: grid;
            gap: 1.6rem;
          }

          .about-essence-section {
            gap: 0.9rem;
          }

          .about-essence-section .about-section-heading-centered {
            margin: 0.45rem auto 0.35rem;
          }

          .about-contact-grid {
            display: grid;
            grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
            gap: 0.95rem;
            align-items: stretch;
          }

          .about-contact-title {
            font-size: clamp(2rem, 2.7vw, 2.55rem);
            line-height: 1.08;
            white-space: nowrap;
          }

          .about-contact-map-shell {
            overflow: hidden;
            border-radius: 22px;
            min-height: 315px;
            box-shadow: 0 16px 32px rgba(2, 8, 59, 0.09);
          }

          .about-contact-map-shell iframe {
            display: block;
            width: 100%;
            height: 100%;
            min-height: 315px;
            border: 0;
          }

          .about-contact-card {
            display: grid;
            align-content: start;
            gap: 0.72rem;
            padding: clamp(0.95rem, 2vw, 1.3rem);
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.98);
            border: 1px solid rgba(2, 8, 59, 0.08);
            box-shadow: 0 16px 32px rgba(2, 8, 59, 0.07);
          }

          .about-contact-card__header h4 {
            margin: 0;
            color: #02083b;
            font-size: clamp(1.25rem, 1.9vw, 1.65rem);
            font-weight: 700;
          }

          .about-contact-card__header p {
            margin: 0.2rem 0 0;
            color: rgba(2, 8, 59, 0.7);
            line-height: 1.45;
            font-size: 0.92rem;
          }

          .about-contact-card__group {
            display: grid;
            gap: 0.2rem;
          }

          .about-contact-card__label {
            color: var(--accent-color);
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .about-contact-card__value {
            color: #02083b;
            font-weight: 600;
            text-decoration: none;
            word-break: break-word;
            font-size: 0.95rem;
          }

          .about-contact-card__text {
            margin: 0;
            color: rgba(2, 8, 59, 0.78);
            line-height: 1.6;
            font-size: 0.95rem;
          }

          .about-contact-button {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            align-self: start;
            margin-top: 0.65rem;
            min-height: 43px;
            padding: 0.68rem 0.88rem;
            border-radius: 999px;
            background: #02083b;
            color: #ffffff;
            font-weight: 700;
            font-size: 0.91rem;
            text-decoration: none;
            box-shadow: 0 16px 34px rgba(2, 8, 59, 0.22);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .about-contact-button:hover,
          .about-contact-button:focus-visible {
            transform: translateY(-1px);
            box-shadow: 0 20px 38px rgba(2, 8, 59, 0.26);
          }

          .about-carousel-frame {
            display: grid;
            grid-template-columns: auto minmax(0, 1fr) auto;
            gap: 1rem;
            align-items: center;
          }

          .about-carousel-stage {
            min-width: 0;
            background: transparent;
            display: flex;
            justify-content: center;
            overflow: visible;
          }

          .about-carousel-showcase {
            position: relative;
            width: min(100%, 1120px);
            height: min(72vh, 760px);
            min-height: 420px;
            background: transparent !important;
          }

          .about-carousel-slide {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition:
              opacity 0.55s ease,
              transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
              filter 0.55s ease;
            background: transparent !important;
          }

          .about-carousel-slide--active {
            opacity: 1;
            transform: translateX(0) scale(1);
            z-index: 3;
            pointer-events: auto;
          }

          .about-carousel-slide--previous,
          .about-carousel-slide--next {
            opacity: 0.62;
            z-index: 2;
          }

          .about-carousel-slide--previous {
            transform: translateX(-32%) scale(0.82);
            filter: saturate(0.9) brightness(0.92);
          }

          .about-carousel-slide--next {
            transform: translateX(32%) scale(0.82);
            filter: saturate(0.9) brightness(0.92);
          }

          .about-carousel-slide--hidden {
            transform: translateX(0) scale(0.76);
            z-index: 1;
          }

          .about-carousel-image-shell {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: min(100%, 760px);
            max-width: 100%;
            min-height: 0;
            background: transparent !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
          }

          :global(.about-carousel-image) {
            width: auto;
            height: auto;
            max-height: min(72vh, 760px);
            max-width: min(100%, 760px);
            object-fit: contain;
            object-position: center;
            background: transparent !important;
            display: block;
            border-radius: 24px;
            box-shadow: 0 24px 52px rgba(2, 8, 59, 0.16);
          }

          .about-carousel-arrow {
            width: 52px;
            height: 52px;
            border-radius: 999px;
            border: none;
            background: rgba(255, 255, 255, 0.92);
            color: var(--accent-color);
            box-shadow: 0 12px 28px rgba(2, 8, 59, 0.1);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
          }

          .about-carousel-arrow:hover,
          .about-carousel-arrow:focus-visible {
            transform: translateY(-1px);
            box-shadow: 0 16px 32px rgba(2, 8, 59, 0.14);
          }

          .about-carousel-arrow i {
            font-size: 1.6rem;
          }

          .about-carousel-dots {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.55rem;
            margin-top: 0.65rem;
          }

          .about-carousel-dot {
            width: 10px;
            height: 10px;
            padding: 0;
            border: none;
            border-radius: 999px;
            background: rgba(11, 31, 61, 0.18);
            transition:
              width 0.25s ease,
              background-color 0.25s ease,
              transform 0.25s ease;
          }

          .about-carousel-dot.is-active {
            width: 28px;
            background: #02083b;
            transform: translateY(-1px);
          }

          @media (max-width: 991px) {
            .about-contact-title {
              white-space: normal;
            }

            .about-overview-card {
              grid-template-columns: 1fr;
            }

            .about-contact-grid {
              grid-template-columns: 1fr;
            }

            .about-carousel-showcase {
              height: min(64vh, 620px);
              min-height: 360px;
            }

            .about-carousel-slide--previous {
              transform: translateX(-24%) scale(0.8);
            }

            .about-carousel-slide--next {
              transform: translateX(24%) scale(0.8);
            }
          }

          @media (max-width: 767px) {
            .about-overview-card {
              border-radius: 24px;
              padding: 1.25rem;
            }

            .about-overview-copy h2,
            .about-section-heading h3 {
              font-size: 2rem;
            }

            .about-overview-lead,
            .about-section-heading p,
            .about-overview-body p,
            .about-overview-list li {
              font-size: 0.98rem;
              line-height: 1.7;
            }

            .about-overview-media {
              min-height: 280px;
            }

            .about-contact-map-shell,
            .about-contact-map-shell iframe {
              min-height: 280px;
            }

            .about-carousel-showcase {
              height: min(58vh, 520px);
              min-height: 300px;
            }

            .about-carousel-image-shell {
              width: min(100%, 86vw);
              overflow: hidden;
              border-radius: 22px;
            }

            :global(.about-carousel-image) {
              max-height: min(58vh, 520px);
              max-width: 86vw;
              border-radius: 22px;
            }

            .about-carousel-frame {
              gap: 0.5rem;
              grid-template-columns: 40px minmax(0, 1fr) 40px;
              align-items: center;
            }

            .about-carousel-arrow {
              width: 40px;
              height: 40px;
              position: relative;
              z-index: 5;
              box-shadow: 0 10px 22px rgba(2, 8, 59, 0.14);
            }

            .about-carousel-slide--previous {
              opacity: 0;
              visibility: hidden;
              pointer-events: none;
              transform: translateX(0) scale(0.92);
            }

            .about-carousel-slide--next {
              opacity: 0;
              visibility: hidden;
              pointer-events: none;
              transform: translateX(0) scale(0.92);
            }

            .about-carousel-slide--hidden {
              opacity: 0;
              visibility: hidden;
              pointer-events: none;
              transform: translateX(0) scale(0.92);
            }

            .about-carousel-slide--active {
              inset: 0;
              opacity: 1;
              visibility: visible;
              transform: translateX(0) scale(1);
              z-index: 3;
            }

            .about-carousel-stage {
              overflow: hidden;
            }

            .about-carousel-dot {
              width: 9px;
              height: 9px;
            }

            .about-carousel-dot.is-active {
              width: 24px;
            }

            .about-carousel-dots {
              margin-top: 0.9rem;
            }
          }
        `}</style>
      </section>
    </main>
  )
}
