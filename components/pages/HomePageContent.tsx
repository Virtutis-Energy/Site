'use client'

import Script from 'next/script'
import { useState } from 'react'
import {
  LuLayoutDashboard,
  LuShieldCheck,
  LuTarget,
} from 'react-icons/lu'
import imagemCelular from '@/assets/imagem_celular.png'
import { useCadastroInvestidor } from '@/hooks/useCadastroInvestidor'
import { useLanguage } from '@/components/LanguageProvider'
import HomeAudienceTabs from '@/components/home/HomeAudienceTabs'
import DigitalEcosystemSection from '@/components/home/DigitalEcosystemSection'

export default function HomePageContent() {
  const { t, localeSegment } = useLanguage()
  const [formData, setFormData] = useState({
    cpf_cnpj: '',
    nome: '',
    email: '',
    telefone: '',
  })

  // Troque aqui caso o link oficial de download do app mude no futuro.
  const downloadAppHref = t.header.whatsappText
  const openAccountDownloadLabel = t.header.downloadApp

  const { cadastrar, loading, sucesso, erro } = useCadastroInvestidor()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await cadastrar(formData)
  }

  const openAccountCards = [
    {
      title: t.home.openAccountReasonTitle,
      icon: LuTarget,
      text: t.home.openAccountReasonText,
    },
    {
      title: t.home.openAccountAppTitle,
      icon: LuLayoutDashboard,
      text: t.home.openAccountAppText,
    },
    {
      title: t.home.openAccountExperienceTitle,
      icon: LuShieldCheck,
      text: t.home.openAccountExperienceText,
    },
  ]

  const companyIntroContent =
    localeSegment === 'pt-br'
      ? {
          title: 'A Virtutis Energy conecta o futuro da energia',
          lead:
            'Somos uma fintech global que une tecnologia, energia solar e serviços financeiros para aproximar pessoas, empresas e investidores de soluções digitais voltadas à energia limpa, gestão energética e expansão internacional da Virtutis Energy.',
          supporting: '',
          cards: [
            {
              title: 'Atuação Global',
              text: 'Presença em expansão para conectar a Virtutis Energy a novos mercados.',
              icon: 'bi bi-globe-americas',
            },
            {
              title: 'Energia Limpa',
              text: 'Soluções ligadas à geração solar e à sustentabilidade.',
              icon: 'bi bi-sun',
            },
            {
              title: 'Experiência Digital',
              text: 'Tecnologia para simplificar o acesso aos serviços da Virtutis Energy.',
              icon: 'bi bi-phone',
            },
          ],
        }
      : localeSegment === 'es'
        ? {
            title: 'Virtutis Energy conecta el futuro de la energía',
            lead:
              'Somos una fintech global que une tecnología, energía solar y servicios financieros para acercar personas, empresas e inversionistas a soluciones digitales orientadas a la energía limpia, la gestión energética y la expansión internacional de Virtutis Energy.',
            supporting: '',
            cards: [
              {
                title: 'Presencia Global',
                text: 'Presencia en expansión para conectar Virtutis Energy con nuevos mercados.',
                icon: 'bi bi-globe-americas',
              },
              {
                title: 'Energía Limpia',
                text: 'Soluciones vinculadas a la generación solar y a la sostenibilidad.',
                icon: 'bi bi-sun',
              },
              {
                title: 'Experiencia Digital',
                text: 'Tecnología para simplificar el acceso a los servicios de Virtutis Energy.',
                icon: 'bi bi-phone',
              },
            ],
          }
        : {
            title: 'Virtutis Energy connects the future of energy',
            lead:
              'We are a global fintech that brings together technology, solar energy, and financial services to connect people, companies, and investors with sustainable solutions in strategic markets.',
            supporting: '',
            cards: [
              {
                title: 'Global Reach',
                text: 'An expanding presence that connects Virtutis Energy to new markets.',
                icon: 'bi bi-globe-americas',
              },
              {
                title: 'Clean Energy',
                text: 'Solutions connected to solar generation and sustainability.',
                icon: 'bi bi-sun',
              },
              {
                title: 'Digital Experience',
                text: 'Technology that simplifies access to Virtutis Energy services.',
                icon: 'bi bi-phone',
              },
            ],
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
                      style={{
                        width: '100%',
                        maxWidth: '100%',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <span
                        className="subtext"
                        id="hero-subtitle"
                        style={{
                          display: 'block',
                          width: '100%',
                          maxWidth: 'none',
                          textAlign: 'center',
                          margin: 0,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {t.home.heroSubtitle}
                      </span>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '6px',
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
                  <p id="invisible-text">{t.home.heroText}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <picture>
              <source media="(max-width: 1024px)" srcSet={imagemCelular.src} />
              <img src="/img/hero-carousel/ft1.jpg" alt="Hero Image" className="img-fluid" />
            </picture>
          </div>
        </section>

        <section id="get-started" className="get-started section">
          <div className="container">
            <div className="row justify-content-between gy-4 home-open-account-section">
              <div className="col-12">
                <section className="home-company-intro" aria-labelledby="home-company-intro-title">
                  <div className="home-company-intro__top" data-aos="fade-up" data-aos-delay="70">
                    <div className="home-company-intro__heading">
                      <h2 id="home-company-intro-title">{companyIntroContent.title}</h2>
                    </div>

                    <div className="home-company-intro__copy">
                      <p className="home-company-intro__lead">{companyIntroContent.lead}</p>
                      {companyIntroContent.supporting ? (
                        <p className="home-company-intro__supporting">{companyIntroContent.supporting}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="home-company-intro__grid" data-aos="fade-up" data-aos-delay="110">
                    {companyIntroContent.cards.map((card) => (
                      <article key={card.title} className="home-company-intro__card">
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              <div className="col-12">
                <DigitalEcosystemSection />
              </div>

              <div className="col-lg-7 order-2 order-lg-1" data-aos="zoom-out" data-aos-delay="100">
                <div className="home-open-account-panel">
                  <div className="home-open-account-copy">
                    <h3>{t.home.openAccountTitle}</h3>
                    <p className="home-open-account-subtitle">{t.home.openAccountSubtitle}</p>
                  </div>

                  <div className="home-open-account-cards">
                    {openAccountCards.map((card) => (
                      <article key={card.title} className="home-open-account-card">
                        <div className="home-open-account-card-index">
                          <card.icon aria-hidden={true} />
                        </div>
                        <div className="home-open-account-card-content">
                          <h4>{card.title}</h4>
                          <p>{card.text}</p>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="home-open-account-actions">
                    <a
                      href={downloadAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-get-started"
                    >
                      {openAccountDownloadLabel}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 order-1 order-lg-2 d-flex align-items-center justify-content-center" data-aos="zoom-out" data-aos-delay="200">
                <div className="home-open-account-visual-card">
                  <div className="home-open-account-visual-media">
                    <img src="/img/hero-carousel/ft1.jpg" alt={t.home.openAccountTitle} className="img-fluid home-open-account-image" />
                    <div className="home-open-account-visual-badge">
                      {t.home.openAccountImageBadge}
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
        :global(#get-started.section) {
          background: #ffffff;
          padding-bottom: 2.5rem;
        }

        .home-open-account-section {
          position: relative;
          isolation: isolate;
          z-index: 1;
          margin-top: 6px;
          overflow: clip;
        }

        .home-company-intro {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          max-width: 1140px;
          margin: 0 auto;
          padding: 34px 34px 30px;
          align-items: stretch;
          background: #ffffff;
          border: 1px solid rgba(26, 46, 93, 0.1);
          border-radius: 32px;
          box-shadow: 0 12px 30px rgba(11, 36, 84, 0.04);
        }

        .home-company-intro__top {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 14px;
        }

        .home-company-intro__heading {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          max-width: 780px;
        }

        .home-company-intro__copy {
          width: 100%;
          max-width: 64ch;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          margin: 0;
        }

        .home-company-intro__heading h2 {
          margin: 0;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0 0 16px;
          color: #02083b;
          font-size: clamp(2.2rem, 3.6vw, 2.95rem);
          line-height: 1.08;
          letter-spacing: -0.045em;
          font-weight: 780;
          text-align: left;
          max-width: 24ch;
          text-wrap: balance;
        }

        .home-company-intro__heading h2::after {
          content: none;
        }

        .home-company-intro__lead,
        .home-company-intro__supporting {
          margin: 0;
          width: 100%;
          color: #1a2e5d;
          font-size: 0.98rem;
          line-height: 1.74;
          text-align: left;
          text-wrap: pretty;
        }

        .home-company-intro__supporting {
          margin-top: 12px;
        }

        .home-company-intro__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          align-items: stretch;
          padding-top: 18px;
          border-top: 1px solid rgba(26, 46, 93, 0.1);
        }

        .home-company-intro__card {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          min-height: 100%;
          padding: 4px 8px 0 0;
          background: transparent;
          border: 0;
          border-right: 1px solid rgba(26, 46, 93, 0.1);
        }

        .home-company-intro__card:last-child {
          border-right: 0;
        }

        .home-company-intro__card h3 {
          margin: 0 0 12px;
          color: #02083b;
          font-size: 1.08rem;
          line-height: 1.25;
          font-weight: 700;
        }

        .home-company-intro__card p {
          margin: 0;
          max-width: 29ch;
          color: #36507a;
          font-size: 0.92rem;
          line-height: 1.62;
          text-align: left;
          text-wrap: pretty;
        }

        .home-open-account-panel {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
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

        .home-open-account-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 12px;
          justify-content: flex-start;
        }

        .home-open-account-actions :global(.btn-get-started) {
          margin: 0;
          box-shadow: 0 14px 28px rgba(2, 8, 59, 0.22);
          transition:
            box-shadow 0.26s ease,
            transform 0.26s ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .home-open-account-actions :global(.btn-get-started):hover {
            transform: translateY(-1px);
            box-shadow: 0 18px 34px rgba(2, 8, 59, 0.28);
          }
        }

        .home-open-account-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          max-width: 640px;
          width: 100%;
        }

        .home-open-account-card {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: start;
          gap: 14px;
          min-height: 0;
          padding: 16px 18px;
          border-radius: 20px;
          background: #ffffff;
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
          max-width: 42ch;
          color: #36507a;
          font-size: 0.91rem;
          line-height: 1.58;
          text-align: left;
          text-wrap: pretty;
        }

        .home-open-account-visual-card {
          width: 100%;
          max-width: 438px;
          margin-inline: auto;
        }

        .home-open-account-visual-media {
          position: relative;
          overflow: hidden;
          border-radius: 0;
          min-height: 100%;
        }

        .home-open-account-image {
          display: block;
          width: 100%;
          min-height: 390px;
          border-radius: 0;
          object-fit: cover;
          object-position: center;
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
          white-space: nowrap;
          box-shadow: 0 10px 20px rgba(2, 8, 59, 0.14);
        }

        @media (max-width: 1199px) {
          .home-company-intro__grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .home-open-account-image {
            min-height: 350px;
          }
        }

        @media (max-width: 991px) {
          .home-open-account-section {
            display: flex;
            flex-direction: column;
          }

          .home-open-account-section > .col-lg-7 {
            display: contents;
          }

          .home-open-account-panel {
            display: contents;
          }

          .home-open-account-copy {
            order: 1;
          }

          .col-lg-5.order-1.order-lg-2 {
            order: 2;
          }

          .home-open-account-actions {
            order: 3;
          }

          .home-open-account-cards {
            order: 4;
          }

          .home-company-intro {
            gap: 20px;
            padding: 30px 24px 26px;
            border-radius: 28px;
          }

          .home-company-intro__top {
            gap: 14px;
          }

          .home-company-intro__grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .home-company-intro__copy {
            max-width: 72ch;
          }

          .home-company-intro__heading h2 {
            font-size: clamp(1.95rem, 5vw, 2.45rem);
            max-width: 20ch;
          }

          .home-company-intro__card {
            padding: 0 0 18px;
            border-right: 0;
            border-bottom: 1px solid rgba(26, 46, 93, 0.1);
          }

          .home-company-intro__card:last-child {
            padding-bottom: 0;
            border-bottom: 0;
          }

          .home-open-account-section {
            margin-top: 0;
          }

          .home-open-account-panel {
            gap: 20px;
            max-width: 100%;
            margin-inline: auto;
          }

          .home-open-account-copy {
            max-width: none;
            padding-inline: 12px;
          }

          .home-open-account-copy h3 {
            font-size: clamp(1.8rem, 6vw, 2.4rem);
          }

          .home-open-account-visual-card {
            max-width: 420px;
          }

          .home-open-account-actions {
            justify-content: center;
            margin-top: 14px;
            margin-bottom: 8px;
          }

          .home-open-account-actions :global(.btn-get-started) {
            width: min(100%, 240px);
            min-height: 42px;
            padding: 10px 18px;
            justify-content: center;
            text-align: center;
          }

          .home-open-account-image {
            min-height: 320px;
          }
        }

        @media (max-width: 767px) {
          :global(#get-started.section) {
            padding-bottom: 1.5rem;
          }

          .hero-heading-group {
            transform: translateY(-10svh);
            max-width: min(100%, 29rem) !important;
            gap: 18px !important;
          }

          .hero-title-wrap {
            max-width: 100%;
          }

          .hero-heading-group :global(#name-hero) {
            font-size: clamp(5.35rem, 21.5vw, 7.4rem);
            font-weight: 800;
            line-height: 0.8;
            text-shadow: 0 14px 28px rgba(2, 8, 59, 0.42);
          }

          .hero-heading-group :global(#hero-subtitle) {
            font-size: clamp(1.78rem, 8.4vw, 2.15rem);
            font-weight: 600;
            line-height: 1.08;
            text-shadow: 0 10px 22px rgba(2, 8, 59, 0.34);
          }

          .home-company-intro {
            gap: 18px;
            padding: 24px 18px 22px;
            border-radius: 24px;
          }

          .home-company-intro__top {
            gap: 16px;
          }

          .home-company-intro__heading h2 {
            line-height: 1.06;
            max-width: 17ch;
          }

          .home-company-intro__heading h2::after {
            width: 64px;
          }

          .home-company-intro__lead,
          .home-company-intro__supporting {
            width: 100%;
            max-width: none;
            font-size: 0.95rem;
            line-height: 1.7;
            text-align: left;
          }

          .home-company-intro__card {
            padding: 0 0 16px;
          }

          .home-company-intro__card h3 {
            font-size: 1rem;
          }

          .home-company-intro__card p {
            max-width: none;
            font-size: 0.9rem;
            line-height: 1.55;
          }

          .home-open-account-copy h3 {
            line-height: 1.06;
          }

          .home-open-account-subtitle {
            font-size: 0.96rem;
            line-height: 1.7;
          }

          .home-open-account-actions {
            justify-content: center;
            margin-top: 26px;
            margin-bottom: 18px;
          }

          .home-open-account-actions :global(.btn-get-started) {
            width: min(100%, 240px);
            min-height: 42px;
            padding: 10px 18px;
            justify-content: center;
            text-align: center;
          }

          .home-open-account-card {
            gap: 10px;
            padding: 12px 12px;
            border-radius: 16px;
          }

          .home-open-account-card-index {
            width: 30px;
            min-width: 30px;
            height: 30px;
            border-radius: 10px;
          }

          .home-open-account-card-index :global(svg) {
            width: 14px;
            height: 14px;
          }

          .home-open-account-card h4 {
            margin-bottom: 4px;
            font-size: 0.9rem;
          }

          .home-open-account-card p {
            font-size: 0.84rem;
            line-height: 1.42;
          }

          .home-open-account-visual-card {
            max-width: min(100%, 360px);
            border-radius: 18px;
          }

          .home-open-account-image {
            min-height: 270px;
          }

          .home-open-account-visual-badge {
            left: 12px;
            right: 12px;
            bottom: 12px;
            font-size: 0.64rem;
            padding: 8px 10px;
            letter-spacing: 0;
          }
        }

        @media (max-width: 430px) {
          .hero-heading-group {
            transform: translateY(-11svh);
            max-width: min(100%, 24rem) !important;
          }

          .hero-heading-group :global(#name-hero) {
            font-size: clamp(4.45rem, 18.8vw, 6.1rem);
          }

          .hero-heading-group :global(#hero-subtitle) {
            font-size: clamp(1.62rem, 7.8vw, 1.9rem);
          }

          .home-company-intro {
            gap: 16px;
            padding: 20px 14px 18px;
            border-radius: 20px;
          }

          .home-company-intro__heading h2 {
            font-size: clamp(1.6rem, 7.6vw, 2rem);
            line-height: 1.1;
            max-width: 16ch;
          }

          .home-company-intro__grid {
            gap: 16px;
            padding-top: 16px;
          }

          .home-company-intro__card h3 {
            margin-bottom: 8px;
            font-size: 0.96rem;
          }

          .home-company-intro__card p {
            font-size: 0.88rem;
            line-height: 1.52;
          }

          .home-open-account-panel {
            gap: 14px;
          }

          .home-open-account-actions {
            margin-top: 24px;
            margin-bottom: 18px;
          }

          .home-open-account-copy h3 {
            font-size: clamp(1.6rem, 7.4vw, 1.95rem);
          }

          .home-open-account-subtitle {
            margin-top: 12px;
            font-size: 0.92rem;
            line-height: 1.62;
          }

          .home-open-account-cards {
            gap: 8px;
          }

          .home-open-account-card {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 11px 11px;
          }

          .home-open-account-card-index {
            width: 28px;
            min-width: 28px;
            height: 28px;
          }

          .home-open-account-card h4 {
            margin-bottom: 4px;
            font-size: 0.88rem;
          }

          .home-open-account-card p {
            max-width: none;
            font-size: 0.82rem;
            line-height: 1.4;
          }

          .home-open-account-actions :global(.btn-get-started) {
            width: min(100%, 240px);
            min-height: 40px;
            padding: 9px 16px;
            margin-inline: 0;
          }

          .home-open-account-visual-card {
            max-width: min(100%, 320px);
          }

          .home-open-account-image {
            min-height: 238px;
          }

          .home-open-account-visual-badge {
            max-width: calc(100% - 24px);
            font-size: 0.58rem;
            line-height: 1.2;
            padding: 7px 9px;
          }
        }
      `}</style>
    </>
  )
}
