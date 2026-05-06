'use client'

import { useRouter } from 'next/navigation'
import { useEconomia } from '@/hooks/useEconomia'
import { useLanguage } from '@/components/LanguageProvider'
import { getLocalizedPath } from '@/lib/i18n'

export default function ClientesPageContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()
  const { economia, handleCalculate } = useEconomia(t.clientsPage)

  return (
    <main className="main">
      <div className="page-title dark-background" style={{ backgroundImage: 'url(img/hero-carousel/hero-carousel-1.jpg)' }}>
        <div className="container position-relative">
          <h1>{t.clientsPage.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><button onClick={() => router.push(getLocalizedPath(localeSegment, 'home'))} style={{ fontWeight: 600, color: 'white' }}>{t.common.home}</button></li>
              <li className="current">{t.clientsPage.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="alt-services-2" className="alt-services-2 section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
              <h3>{t.clientsPage.question}</h3>

              <div className="row justify-content-center mt-4">
                <div className="col-md-8 d-flex align-items-center">
                  <form id="investmentCalculator" className="form-inline w-100">
                    <div className="input-group w-100 content bill">
                      <input type="text" className="form-control" id="monthlyBill" placeholder={t.clientsPage.billPlaceholder} />
                      <div className="input-group-append ml-2 info">
                        <button type="button" className="btn-get-started" onClick={handleCalculate}>
                          {t.clientsPage.calculate}
                        </button>
                      </div>
                    </div>
                    {economia && <div id="result" className="ml-3">{economia}</div>}
                  </form>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-coin flex-shrink-0"></i>
                  <div>
                    <h4>{t.clientsPage.feature1Title}</h4>
                    <p>{t.clientsPage.feature1Text}</p>
                  </div>
                </div>

                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-bank flex-shrink-0"></i>
                  <div>
                    <h4>{t.clientsPage.feature2Title}</h4>
                    <p>{t.clientsPage.feature2Text}</p>
                  </div>
                </div>

                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>{t.clientsPage.feature3Title}</h4>
                    <p>{t.clientsPage.feature3Text}</p>
                  </div>
                </div>

                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-lightbulb flex-shrink-0"></i>
                  <div>
                    <h4>{t.clientsPage.feature4Title}</h4>
                    <p>{t.clientsPage.feature4Text}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
              <img src="img/hero-carousel/hero-carousel-4.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-coins"></i>
                </div>
                <h3>{t.clientsPage.service1Title}</h3>
                <p id="text-index">{t.clientsPage.service1Text}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-file-signature"></i>
                </div>
                <h3>{t.clientsPage.service2Title}</h3>
                <p id="text-index">{t.clientsPage.service2Text}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-helmet-safety"></i>
                </div>
                <h3>{t.clientsPage.service3Title}</h3>
                <p id="text-index">{t.clientsPage.service3Text}</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mx-auto d-flex justify-content-center" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-handshake-slash"></i>
                </div>
                <h3>{t.clientsPage.service4Title}</h3>
                <p id="text-index">{t.clientsPage.service4Text}</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mx-auto d-flex justify-content-center" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-gift"></i>
                </div>
                <h3>{t.clientsPage.service5Title}</h3>
                <p id="text-index">{t.clientsPage.service5Text}</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-center " data-aos="fade-up" data-aos-delay="100">
          <a onClick={() => router.push(getLocalizedPath(localeSegment, 'signUp'))} style={{ cursor: 'pointer' }} className="btn-kind">{t.common.openAccount}</a>
        </div>
      </section>
    </main>
  )
}
