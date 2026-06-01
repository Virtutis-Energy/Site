'use client'

import Script from 'next/script'
import { useState } from 'react'
import { useCadastroInvestidor } from '@/hooks/useCadastroInvestidor'
import { useLanguage } from '@/components/LanguageProvider'
import HomeAudienceTabs from '@/components/home/HomeAudienceTabs'

export default function HomePageContent() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    cpf_cnpj: '',
    nome: '',
    email: '',
    telefone: '',
  })

  const { cadastrar, loading, sucesso, erro } = useCadastroInvestidor()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await cadastrar(formData)
  }

  return (
    <>
      <header id="navbar-placeholder"></header>

      <main className="main">
        <section id="hero" className="hero section dark-background">
          <div className="info d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <div className="col-12">
                  <div
                    className="hero-heading-group"
                    style={{
                      width: '100%',
                      maxWidth: '980px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      margin: '0 auto',
                      gap: '12px',
                    }}
                  >
                    <div
                      className="hero-title-wrap"
                      style={{ width: '100%', textAlign: 'center', display: 'block' }}
                    >
                      <strong
                        id="name-hero"
                        className="hero-title-line"
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'center',
                          margin: 0,
                          textWrap: 'balance',
                        }}
                      >
                        {t.home.heroTitle}
                      </strong>
                    </div>
                    <div
                      className="hero-subtitle-wrap"
                      style={{ width: '100%', textAlign: 'center', display: 'block' }}
                    >
                      <span
                        className="subtext"
                        id="hero-subtitle"
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'center',
                          margin: 0,
                          textWrap: 'balance',
                        }}
                      >
                        {t.home.heroSubtitle}
                      </span>
                    </div>
                  </div>
                  <p id="invisible-text">{t.home.heroText}</p>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '14px',
                    }}
                  >
                    <a
                      href={t.header.whatsappText}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-get-started"
                      style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    >
                      {t.header.downloadApp}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/img/hero-carousel/ft1.jpg" alt="Hero Image" className="img-fluid" />
          </div>
        </section>

        <section id="get-started" className="get-started section">
          <div className="container">
            <div className="row justify-content-between gy-4">
              <div className="sobre col-lg-12 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
                <div className="content">
                  <h3>{t.home.aboutTitle}</h3>
                  <p id="text-index" className="fs-6">
                    {t.home.aboutText}
                  </p>
                </div>
              </div>

              <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
                <div className="content">
                  <h3>{t.home.openAccountTitle}</h3>
                  <p id="text-index">{t.home.openAccountText}</p>
                  <p>{t.home.openAccountNote}</p>
                </div>
              </div>

              <div className="col-lg-5" data-aos="zoom-out" data-aos-delay="200">
                <form className="php-email-form" onSubmit={handleSubmit}>
                  <h3>{t.home.formTitle}</h3>
                  <div className="row gy-3 mt-2">
                    <div className="col-12">
                      <input
                        type="text"
                        name="doc"
                        className="form-control"
                        placeholder={t.forms.cpfCnpj}
                        required
                        value={formData.cpf_cnpj}
                        onChange={(e) =>
                          setFormData({ ...formData, cpf_cnpj: e.target.value.replace(/[^0-9/.\+\-\s]/g, '') })
                        }
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="nome"
                        className="form-control"
                        placeholder={t.forms.name}
                        required
                        value={formData.nome}
                        onChange={(e) =>
                          setFormData({ ...formData, nome: e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '') })
                        }
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder={t.forms.email}
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <input
                        type="text"
                        name="telefone"
                        className="form-control"
                        placeholder={t.forms.phone}
                        required
                        value={formData.telefone}
                        onChange={(e) =>
                          setFormData({ ...formData, telefone: e.target.value.replace(/[^0-9+\-\s]/g, '') })
                        }
                      />
                    </div>

                    {erro && <div className="text-danger text-center">{erro}</div>}
                    {sucesso && <div className="text-success text-center">{t.common.successMessage}</div>}

                    <div className="col-12 text-center">
                      <button type="submit" disabled={loading}>
                        {loading ? t.common.sending : t.common.submit}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <HomeAudienceTabs />
      </main>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <Script src="/styles/vendor/aos/aos.js" strategy="afterInteractive" />
      <Script src="/styles/vendor/glightbox/js/glightbox.min.js" strategy="afterInteractive" />
      <Script src="/styles/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/styles/vendor/isotope-layout/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/styles/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/styles/vendor/purecounter/purecounter_vanilla.js" strategy="afterInteractive" />
      <Script src="/styles/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
    </>
  )
}
