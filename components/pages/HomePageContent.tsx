'use client'

import Script from 'next/script'
import { useState } from 'react'
import { LuLayoutDashboard, LuShieldCheck, LuTarget } from 'react-icons/lu'
import { useCadastroInvestidor } from '@/hooks/useCadastroInvestidor'
import { useLanguage } from '@/components/LanguageProvider'
import HomeAudienceTabs from '@/components/home/HomeAudienceTabs'
import DigitalEcosystemSection from '@/components/home/DigitalEcosystemSection'

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

  const openAccountCards = [
    {
      title: 'Por que criar sua conta?',
      icon: LuTarget,
      text:
        'Tenha uma conta personalizada de acordo com o seu perfil, com acesso a oportunidades, soluções e informações direcionadas às suas necessidades dentro do app da Virtutis Energy.',
    },
    {
      title: 'O que você pode fazer no app?',
      icon: LuLayoutDashboard,
      text:
        'Explorar oportunidades, consultar informações das usinas, visualizar aportes, proventos e movimentações de forma organizada em um só ambiente.',
    },
    {
      title: 'Como é a experiência?',
      icon: LuShieldCheck,
      text:
        'Uma jornada digital simples, clara e segura, pensada para facilitar sua tomada de decisão e manter suas informações sempre acessíveis.',
    },
  ]

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
            <div className="row justify-content-between gy-4 home-open-account-section">
              <div className="col-12">
                <DigitalEcosystemSection />
              </div>

              <div className="col-lg-7 order-2 order-lg-1" data-aos="zoom-out" data-aos-delay="100">
                <div className="home-open-account-panel">
                  <div className="home-open-account-copy">
                    <h3>{t.home.openAccountTitle}</h3>
                    <p className="home-open-account-subtitle">
                      Cadastre-se na Virtutis Energy e acesse pelo app soluções em energia solar, locação de usinas e oportunidades de investimento em Vitis.
                    </p>
                  </div>

                  <div className="home-open-account-cards">
                    {openAccountCards.map((card) => (
                      <article key={card.title} className="home-open-account-card">
                        <div className="home-open-account-card-index">
                          <card.icon aria-hidden="true" />
                        </div>
                        <div className="home-open-account-card-content">
                          <h4>{card.title}</h4>
                          <p>{card.text}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-5 order-1 order-lg-2 d-flex align-items-center justify-content-center" data-aos="zoom-out" data-aos-delay="200">
                <div className="home-open-account-visual-card">
                  <div className="home-open-account-visual-media">
                    <img src="/img/hero-carousel/ft1.jpg" alt={t.home.openAccountTitle} className="img-fluid home-open-account-image" />
                    <div className="home-open-account-visual-badge">
                      Energia, tecnologia e investimento em um só lugar
                    </div>
                  </div>
                </div>
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

      <style jsx>{`
        .home-open-account-section {
          position: relative;
          isolation: isolate;
          z-index: 1;
          margin-top: 6px;
        }

        .home-open-account-panel {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .home-open-account-copy {
          max-width: 62ch;
        }

        .home-open-account-copy h3 {
          margin: 0;
          color: #02083b;
          font-size: clamp(2rem, 3vw, 2.7rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
        }

        .home-open-account-subtitle {
          margin: 14px 0 0;
          color: #1a2e5d;
          font-size: 1rem;
          line-height: 1.75;
          text-align: left;
        }

        .home-open-account-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          max-width: 640px;
        }

        .home-open-account-card {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: start;
          gap: 14px;
          min-height: 0;
          padding: 16px 18px;
          border-radius: 20px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          border: 1px solid rgba(26, 46, 93, 0.1);
          box-shadow: 0 16px 30px rgba(15, 32, 70, 0.07);
          transition:
            transform 0.26s ease,
            box-shadow 0.26s ease,
            border-color 0.26s ease,
            background-color 0.26s ease;
        }

        .home-open-account-card-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          min-width: 42px;
          height: 42px;
          border-radius: 14px;
          background: rgba(2, 8, 59, 0.06);
          border: 1px solid rgba(2, 8, 59, 0.08);
          color: #02083b;
          transition:
            transform 0.26s ease,
            background-color 0.26s ease,
            border-color 0.26s ease,
            color 0.26s ease,
            box-shadow 0.26s ease;
        }

        .home-open-account-card-index :global(svg) {
          width: 18px;
          height: 18px;
          stroke-width: 1.9;
          transition: transform 0.26s ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .home-open-account-card:hover {
            transform: translateY(-2px);
            border-color: rgba(26, 46, 93, 0.16);
            box-shadow: 0 22px 38px rgba(15, 32, 70, 0.1);
          }

          .home-open-account-card:hover .home-open-account-card-index {
            background: rgba(2, 8, 59, 0.1);
            border-color: rgba(2, 8, 59, 0.14);
            box-shadow: 0 10px 18px rgba(15, 32, 70, 0.08);
          }

          .home-open-account-card:hover .home-open-account-card-index :global(svg) {
            transform: scale(1.06);
          }
        }

        .home-open-account-card-content {
          min-width: 0;
        }

        .home-open-account-card h4 {
          margin: 0 0 8px;
          color: #02083b;
          font-size: 1rem;
          line-height: 1.3;
          font-weight: 700;
        }

        .home-open-account-card p {
          margin: 0;
          color: #36507a;
          font-size: 0.91rem;
          line-height: 1.58;
          text-align: left;
        }

        .home-open-account-visual-card {
          width: 100%;
          max-width: 438px;
        }

        .home-open-account-visual-media {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          min-height: 100%;
        }

        .home-open-account-image {
          display: block;
          width: 100%;
          min-height: 390px;
          object-fit: cover;
        }

        .home-open-account-visual-badge {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          max-width: calc(100% - 32px);
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(4, 14, 46, 0.68);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(12px) saturate(120%);
          color: #ffffff;
          font-size: 0.76rem;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.01em;
          box-shadow: 0 10px 20px rgba(2, 8, 59, 0.14);
        }

        @media (max-width: 1199px) {
          .home-open-account-image {
            min-height: 350px;
          }
        }

        @media (max-width: 991px) {
          .home-open-account-section {
            margin-top: 0;
          }

          .home-open-account-panel {
            gap: 20px;
          }

          .home-open-account-copy {
            max-width: none;
          }

          .home-open-account-copy h3 {
            font-size: clamp(1.8rem, 6vw, 2.4rem);
          }

          .home-open-account-visual-card {
            max-width: 420px;
          }

          .home-open-account-image {
            min-height: 320px;
          }
        }

        @media (max-width: 767px) {
          .home-open-account-copy h3 {
            line-height: 1.06;
          }

          .home-open-account-subtitle {
            font-size: 0.96rem;
            line-height: 1.7;
          }

          .home-open-account-card {
            padding: 18px 16px;
            border-radius: 20px;
          }

          .home-open-account-card-index {
            width: 38px;
            min-width: 38px;
            height: 38px;
            border-radius: 12px;
          }

          .home-open-account-card-index :global(svg) {
            width: 16px;
            height: 16px;
          }

          .home-open-account-card h4 {
            font-size: 0.98rem;
          }

          .home-open-account-card p {
            font-size: 0.9rem;
            line-height: 1.55;
          }

          .home-open-account-visual-card {
            max-width: 100%;
            border-radius: 18px;
          }

          .home-open-account-image {
            min-height: 270px;
          }

          .home-open-account-visual-badge {
            left: 12px;
            right: 12px;
            bottom: 12px;
            font-size: 0.72rem;
            padding: 8px 11px;
          }
        }
      `}</style>
    </>
  )
}
