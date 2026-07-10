'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/LanguageProvider'
import telaApp from '@/assets/Tela_app.png'
import vitinho from '@/assets/vitinho.png'

export default function DigitalEcosystemSection() {
  const { t } = useLanguage()

  return (
    <section className="virtutis-ecosystem-section" aria-labelledby="virtutis-ecosystem-title">
      <div className="container">
        <div className="virtutis-ecosystem-shell">
          <div className="virtutis-ecosystem-copy" data-aos="fade-right" data-aos-delay="80">
            <span className="virtutis-ecosystem-badge">{t.home.aboutEyebrow}</span>

            <h3 id="virtutis-ecosystem-title">{t.home.aboutHeadline}</h3>

            <p className="virtutis-ecosystem-description">{t.home.aboutText}</p>
          </div>

          <div className="virtutis-ecosystem-showcase" data-aos="fade-up" data-aos-delay="110">
            <div className="virtutis-ecosystem-visual" data-aos="fade-left" data-aos-delay="130">
              <div className="virtutis-ecosystem-phone">
                <img
                  src={telaApp.src}
                  width={telaApp.width}
                  height={telaApp.height}
                  alt={t.home.aboutAppAlt}
                  className="virtutis-ecosystem-phone-image"
                />
              </div>

              <div className="virtutis-ecosystem-mascot" aria-hidden="true">
                <Image src={vitinho} alt="" priority={false} className="virtutis-ecosystem-mascot-image" />
              </div>
            </div>

            <div className="virtutis-ecosystem-highlights">
              {t.home.aboutHighlights.map((highlight) => (
                <article key={highlight.title} className="virtutis-ecosystem-highlight">
                  <span className="virtutis-ecosystem-highlight-icon" aria-hidden="true">
                    <i className={highlight.icon}></i>
                  </span>
                  <div>
                    <h4>{highlight.title}</h4>
                    <p>{highlight.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="virtutis-ecosystem-actions">
              <a
                href={t.header.whatsappText}
                target="_blank"
                rel="noopener noreferrer"
                className="virtutis-ecosystem-button virtutis-ecosystem-button--primary"
              >
                {t.home.aboutPrimaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .virtutis-ecosystem-section {
          position: relative;
          isolation: isolate;
          z-index: 0;
          padding: 16px 0 52px;
        }

        .virtutis-ecosystem-shell {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 26px;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 26px;
          border-radius: 26px;
          overflow: visible;
        }

        .virtutis-ecosystem-copy {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 62ch;
        }

        .virtutis-ecosystem-showcase {
          display: grid;
          grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
          gap: 26px;
          align-items: center;
          width: 100%;
        }

        .virtutis-ecosystem-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 13px;
          border-radius: 999px;
          background: #02083b;
          border: 1px solid #02083b;
          color: #ffffff;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .virtutis-ecosystem-badge::before {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #ffffff;
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.14);
        }

        .virtutis-ecosystem-copy h3 {
          margin: 14px 0 12px;
          color: #02083b;
          font-size: clamp(1.75rem, 3vw, 2.7rem);
          line-height: 1;
          letter-spacing: -0.04em;
          text-wrap: balance;
        }

        .whitespace-nowrap {
          white-space: nowrap;
        }

        .virtutis-ecosystem-description {
          margin: 0;
          color: #1a2e5d;
          font-size: 0.96rem;
          line-height: 1.7;
        }

        .virtutis-ecosystem-actions {
          display: flex;
          flex-wrap: wrap;
          grid-column: 2;
          gap: 10px;
          margin-top: 4px;
          align-items: center;
          justify-content: flex-start;
        }

        .virtutis-ecosystem-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 18px;
          border-radius: 14px;
          border: 1px solid transparent;
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background-color 0.2s ease,
            border-color 0.2s ease;
        }

        .virtutis-ecosystem-button:hover {
          transform: translateY(-2px);
        }

        .virtutis-ecosystem-button--primary {
          background: linear-gradient(135deg, #02083b 0%, #1a2e5d 100%);
          color: #fff;
          box-shadow: 0 18px 34px rgba(26, 46, 93, 0.22);
        }

        .virtutis-ecosystem-button--secondary {
          background: #ffffff;
          border-color: rgba(163, 181, 203, 0.36);
          color: #1a2e5d;
          box-shadow: 0 10px 20px rgba(26, 46, 93, 0.06);
        }

        .virtutis-ecosystem-highlights {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          align-content: center;
        }

        .virtutis-ecosystem-highlight {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          min-height: 100%;
          padding: 11px 12px;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid rgba(163, 181, 203, 0.32);
          box-shadow: 0 10px 20px rgba(26, 46, 93, 0.07);
        }

        .virtutis-ecosystem-highlight-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 38px;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: rgba(163, 181, 203, 0.18);
          color: #1a2e5d;
          font-size: 0.9rem;
        }

        .virtutis-ecosystem-highlight h4 {
          margin: 0 0 3px;
          color: #02083b;
          font-size: 0.93rem;
          line-height: 1.25;
        }

        .virtutis-ecosystem-highlight p {
          margin: 0;
          color: #1a2e5d;
          font-size: 0.84rem;
          line-height: 1.45;
          text-align: left;
          text-wrap: pretty;
          max-width: 30ch;
        }

        .virtutis-ecosystem-visual {
          position: relative;
          min-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          width: 100%;
          max-width: 320px;
          min-width: 0;
          margin-inline: auto;
          padding: 18px 12px 26px;
          overflow: visible;
        }

        .virtutis-ecosystem-phone {
          position: relative;
          z-index: 2;
          width: min(100%, clamp(220px, 30vw, 282px));
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          transform: none;
        }

        .virtutis-ecosystem-phone::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 8px;
          width: 72%;
          height: 22px;
          transform: translateX(-50%);
          border-radius: 999px;
          background: rgba(2, 8, 59, 0.14);
          filter: blur(14px);
          z-index: 0;
          pointer-events: none;
        }

        .virtutis-ecosystem-phone-image {
          position: relative;
          z-index: 1;
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          max-width: 100%;
          filter: drop-shadow(0 10px 18px rgba(2, 8, 59, 0.12));
        }

        .virtutis-ecosystem-mascot {
          position: absolute;
          left: calc(50% + 92px);
          bottom: 36px;
          z-index: 3;
          width: clamp(72px, 15%, 98px);
          transform: rotate(-1deg);
          opacity: 0.95;
          filter: drop-shadow(0 8px 14px rgba(7, 17, 38, 0.1));
        }

        .virtutis-ecosystem-mascot :global(img) {
          width: 100%;
          height: auto;
        }

        @media (max-width: 1199px) {
          .virtutis-ecosystem-shell {
            gap: 22px;
            padding: 22px;
          }

          .virtutis-ecosystem-showcase {
            grid-template-columns: minmax(220px, 280px) minmax(0, 1fr);
            gap: 22px;
          }

          .virtutis-ecosystem-visual {
            max-width: 286px;
            padding: 14px 12px 22px;
          }
        }

        @media (max-width: 991px) {
          .virtutis-ecosystem-shell {
            padding: 22px;
          }

          .virtutis-ecosystem-showcase {
            grid-template-columns: minmax(200px, 248px) minmax(0, 1fr);
            gap: 18px;
            align-items: stretch;
          }

          .virtutis-ecosystem-visual {
            min-height: 100%;
            max-width: 248px;
            padding-top: 10px;
          }

          .virtutis-ecosystem-highlights {
            grid-template-columns: 1fr 1fr;
          }

          .virtutis-ecosystem-phone {
            width: min(100%, 240px);
          }

          .virtutis-ecosystem-mascot {
            left: calc(50% + 72px);
            bottom: 30px;
            width: 72px;
          }
        }

        @media (max-width: 767px) {
          .virtutis-ecosystem-section {
            padding: 10px 0 34px;
          }

          .virtutis-ecosystem-shell {
            gap: 20px;
            padding: 18px;
            border-radius: 24px;
          }

          .virtutis-ecosystem-showcase {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .virtutis-ecosystem-description {
            font-size: 0.92rem;
            line-height: 1.65;
          }

          .virtutis-ecosystem-copy h3 {
            font-size: clamp(1.5rem, 7vw, 2rem);
          }

          .virtutis-ecosystem-actions {
            grid-column: 1;
            justify-content: center;
            margin-top: 2px;
          }

          .virtutis-ecosystem-button {
            width: min(100%, 280px);
          }

          .virtutis-ecosystem-highlights {
            grid-template-columns: 1fr;
            order: 2;
          }

          .virtutis-ecosystem-visual {
            order: 1;
            min-height: 270px;
            max-width: 240px;
            padding: 8px 10px 16px;
          }

          .virtutis-ecosystem-phone {
            width: min(100%, 208px);
          }

          .virtutis-ecosystem-mascot {
            left: calc(50% + 58px);
            bottom: 18px;
            width: 50px;
          }
        }

        @media (max-width: 430px) {
          .virtutis-ecosystem-shell {
            gap: 18px;
            padding: 16px 14px;
            border-radius: 20px;
          }

          .virtutis-ecosystem-copy {
            text-align: left;
          }

          .virtutis-ecosystem-badge {
            font-size: 0.7rem;
            padding: 7px 11px;
          }

          .virtutis-ecosystem-copy h3 {
            margin: 12px 0 10px;
            font-size: clamp(1.38rem, 7.2vw, 1.82rem);
            line-height: 1.08;
          }

          .virtutis-ecosystem-description {
            font-size: 0.9rem;
            line-height: 1.62;
          }

          .virtutis-ecosystem-actions {
            margin-top: 18px;
          }

          .virtutis-ecosystem-button {
            width: 100%;
            min-height: 44px;
          }

          .virtutis-ecosystem-highlight {
            padding: 10px 11px;
            border-radius: 16px;
          }

          .virtutis-ecosystem-highlight p {
            max-width: none;
          }

          .virtutis-ecosystem-visual {
            min-height: 248px;
            padding-bottom: 8px;
          }

          .virtutis-ecosystem-phone {
            width: min(100%, 188px);
          }

          .virtutis-ecosystem-phone-image {
            filter: drop-shadow(0 8px 14px rgba(2, 8, 59, 0.1));
          }

          .virtutis-ecosystem-mascot {
            left: calc(50% + 46px);
            bottom: 10px;
            width: 42px;
          }
        }
      `}</style>
    </section>
  )
}
