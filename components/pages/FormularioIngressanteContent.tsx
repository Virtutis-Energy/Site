'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { useLanguage } from '@/components/LanguageProvider'
import workWithUsTeamImage from '@/assets/Imagem-trabalhe-conosco.jpg'
import { useCadastrarIngressante } from '@/hooks/useCadastroIngressante'
import { useSubdivisoes } from '@/hooks/useSubdivisoes'
import { getLocalizedPath } from '@/lib/i18n'

export default function FormularioIngressanteContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()
  const { cadastrar, sucesso, erro, loading } = useCadastrarIngressante()
  const { subdivisoes, loading: loadingSub } = useSubdivisoes()
  const [openBond, setOpenBond] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subdivisions: [] as number[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await cadastrar(formData)
  }

  const toggleSubdivisionSelection = (id: number) => {
    setFormData((prev) => {
      const isSelected = prev.subdivisions.includes(id)
      const subdivisions = isSelected ? prev.subdivisions.filter((item) => item !== id) : [...prev.subdivisions, id]

      return { ...prev, subdivisions }
    })
  }

  const bondCards = [
    {
      id: 'intern-level-1',
      title: t.subdivisionsPage.intern,
      subtitle: t.subdivisionsPage.levelI,
      description: t.workWithUsPage.bondInternLevel1Desc,
      icon: 'bi bi-mortarboard',
    },
    {
      id: 'intern-level-2',
      title: t.subdivisionsPage.intern,
      subtitle: t.subdivisionsPage.levelII,
      description: t.workWithUsPage.bondInternLevel2Desc,
      icon: 'bi bi-lightbulb',
    },
    {
      id: 'employee-level-1',
      title: t.subdivisionsPage.employee,
      subtitle: t.subdivisionsPage.levelI,
      description: t.workWithUsPage.bondEmployeeLevel1Desc,
      icon: 'bi bi-person-workspace',
    },
    {
      id: 'employee-level-2',
      title: t.subdivisionsPage.employee,
      subtitle: t.subdivisionsPage.levelII,
      description: t.workWithUsPage.bondEmployeeLevel2Desc,
      icon: 'bi bi-briefcase',
    },
    {
      id: 'partner-collaborator',
      title: t.subdivisionsPage.partnerCollaborator,
      subtitle: null,
      description: t.workWithUsPage.bondPartnerCollaboratorDesc,
      icon: 'bi bi-people',
    },
  ]

  return (
    <main className="main">
      <div className="page-title dark-background" style={{ backgroundImage: 'url(/img/hero-carousel/hero-carousel-1.jpg)' }}>
        <div className="container position-relative">
          <h1>{t.workWithUsPage.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <button type="button" onClick={() => router.push(getLocalizedPath(localeSegment, 'home'))} style={{ color: 'white' }}>
                  {t.common.home}
                </button>
              </li>
              <li className="current">{t.workWithUsPage.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="contact" className="contact section careers-page">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="careers-intro-card" data-aos="fade-up" data-aos-delay="140">
            <div className="careers-intro-copy">
              <span className="careers-kicker">{t.workWithUsPage.title}</span>
              <h2>{t.workWithUsPage.introTitle}</h2>
              <p>{t.workWithUsPage.introText}</p>
              <strong>{t.workWithUsPage.introAccent}</strong>
            </div>

            <div className="careers-intro-media">
              <Image
                src={workWithUsTeamImage}
                alt="Equipe da Virtutis Energy"
                sizes="(max-width: 991px) 100vw, 42vw"
                className="careers-intro-image"
              />
            </div>
          </div>

          <div className="careers-units" data-aos="fade-up" data-aos-delay="180">
            <div className="careers-section-heading">
              <h3>{t.workWithUsPage.unitsTitle}</h3>
            </div>

            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="careers-unit-card">
                  <div className="careers-unit-icon" aria-hidden="true">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="careers-unit-copy">
                    <h4>{t.workWithUsPage.branch}</h4>
                    <p>{t.workWithUsPage.branchAddress}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="careers-unit-card">
                  <div className="careers-unit-icon" aria-hidden="true">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="careers-unit-copy">
                    <h4>{t.workWithUsPage.headOffice}</h4>
                    <p>{t.workWithUsPage.headOfficeAddress}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="careers-form-shell" data-aos="fade-up" data-aos-delay="220">
                <div className="careers-form-header">
                  <h3>{t.workWithUsPage.formTitle}</h3>
                  <p>{t.workWithUsPage.formIntro}</p>
                </div>

            <form onSubmit={handleSubmit} className="php-email-form careers-form">
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <label htmlFor="work-name" className="careers-label">
                    {t.forms.name}
                  </label>
                  <input
                    id="work-name"
                    type="text"
                    name="name"
                    placeholder={t.forms.name}
                    required
                    className="form-control careers-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label htmlFor="work-email" className="careers-label">
                    {t.forms.email}
                  </label>
                  <input
                    id="work-email"
                    type="email"
                    name="email"
                    placeholder={t.forms.email}
                    required
                    className="form-control careers-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label htmlFor="work-phone" className="careers-label">
                    {t.forms.phone}
                  </label>
                  <input
                    id="work-phone"
                    type="text"
                    name="phone"
                    placeholder={t.forms.phone}
                    required
                    className="form-control careers-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12">
                  <div className="careers-subdivision-header">
                    <label className="careers-label careers-label-block">{t.workWithUsPage.areasTitle}</label>
                    <p>{t.workWithUsPage.areasIntro}</p>
                  </div>

                  {loadingSub ? (
                    <p className="careers-loading-copy">{t.workWithUsPage.loadingSubdivisions}</p>
                  ) : (
                    <div className="careers-subdivision-grid" role="group" aria-label={t.workWithUsPage.subdivisions}>
                      {subdivisoes.map((sub) => {
                        const isSelected = formData.subdivisions.includes(sub.id)

                        return (
                          <article key={sub.id} className={`careers-subdivision-card${isSelected ? ' is-selected' : ''}`}>
                            <div className="careers-subdivision-main">
                              <button
                                type="button"
                                className="careers-subdivision-select"
                                aria-pressed={isSelected}
                                aria-label={t.workWithUsPage.toggleSelection(sub.name, isSelected)}
                                onClick={() => toggleSubdivisionSelection(sub.id)}
                              >
                                <span className="careers-subdivision-check" aria-hidden="true">
                                  <i className={`bi ${isSelected ? 'bi-check2' : 'bi-plus'}`}></i>
                                </span>
                              </button>

                              <span className="careers-subdivision-icon" aria-hidden="true">
                                <i className="bi bi-diagram-3"></i>
                              </span>

                              <span className="careers-subdivision-text">{sub.name}</span>
                            </div>
                          </article>
                        )
                      })}
                    </div>
                  )}
                </div>

                <div className="col-12">
                  <div className="careers-bonds-section">
                    <div className="careers-bonds-header">
                      <h4>{t.workWithUsPage.bondsTitle}</h4>
                      <p>{t.workWithUsPage.bondsIntro}</p>
                    </div>

                    <div className="careers-bonds-grid">
                      {bondCards.map((bond, index) => {
                        const isOpen = openBond === bond.id
                        const isLast = index === bondCards.length - 1

                        return (
                          <article key={bond.id} className={`careers-bond-card${isOpen ? ' is-open' : ''}${isLast ? ' careers-bond-card--wide' : ''}`}>
                            <div className="careers-bond-main">
                              <span className="careers-bond-icon" aria-hidden="true">
                                <i className={bond.icon}></i>
                              </span>

                              <div className="careers-bond-copy">
                                <strong>{bond.title}</strong>
                                {bond.subtitle ? <span>{bond.subtitle}</span> : null}
                              </div>

                              <button
                                type="button"
                                className={`careers-bond-toggle${isOpen ? ' is-open' : ''}`}
                                aria-expanded={isOpen}
                                aria-controls={`careers-bond-panel-${bond.id}`}
                                aria-label={isOpen ? t.workWithUsPage.closeBondDetails(bond.title) : t.workWithUsPage.openBondDetails(bond.title)}
                                onClick={() => setOpenBond(isOpen ? null : bond.id)}
                              >
                                <i className="bi bi-chevron-down" aria-hidden="true"></i>
                              </button>
                            </div>

                            <div id={`careers-bond-panel-${bond.id}`} className={`careers-bond-details${isOpen ? ' is-open' : ''}`}>
                              <div className="careers-bond-details__inner">
                                <p>{bond.description}</p>
                              </div>
                            </div>
                          </article>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <button type="submit" disabled={loading} className="careers-submit-button">
                    {loading ? t.common.sending : t.workWithUsPage.submitCta}
                  </button>

                  {sucesso && <p className="text-success mt-3">{t.common.successMessage}</p>}
                  {erro && <p className="text-danger mt-3">{erro}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>

        <style jsx>{`
          .careers-page {
            --careers-submit-blue: #02083b;
            background:
              radial-gradient(circle at top left, rgba(2, 8, 59, 0.04), transparent 38%),
              linear-gradient(180deg, #ffffff 0%, #f6f9fc 100%);
          }

          .careers-intro-card,
          .careers-form-shell {
            background: rgba(255, 255, 255, 0.98);
            border: 1px solid rgba(2, 8, 59, 0.08);
            border-radius: 28px;
            box-shadow: 0 18px 42px rgba(2, 8, 59, 0.08);
          }

          .careers-intro-card {
            display: grid;
            grid-template-columns: minmax(0, 1.05fr) minmax(300px, 0.95fr);
            gap: 2rem;
            align-items: center;
            padding: clamp(1.5rem, 3vw, 2.5rem);
            margin-bottom: 2rem;
          }

          .careers-kicker {
            display: inline-flex;
            align-items: center;
            margin-bottom: 1rem;
            color: var(--accent-color);
            font-size: 0.82rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .careers-intro-copy h2,
          .careers-form-header h3,
          .careers-section-heading h3 {
            margin: 0;
            color: #02083b;
            font-size: clamp(1.85rem, 2.5vw, 2.5rem);
            font-weight: 700;
            line-height: 1.12;
          }

          .careers-intro-copy p,
          .careers-form-header p {
            margin: 1rem 0 0;
            max-width: 36rem;
            color: rgba(2, 8, 59, 0.76);
            font-size: 1rem;
            line-height: 1.8;
          }

          .careers-intro-copy strong {
            display: block;
            margin-top: 1.1rem;
            color: #02083b;
            font-size: 1rem;
            line-height: 1.6;
          }

          .careers-intro-media {
            overflow: hidden;
            border-radius: 24px;
            min-height: 100%;
          }

          :global(.careers-intro-image) {
            display: block;
            width: 100%;
            height: 100%;
            max-height: 460px;
            object-fit: cover;
          }

          .careers-units {
            margin-bottom: 2rem;
          }

          .careers-section-heading {
            margin-bottom: 1.25rem;
          }

          .careers-unit-card {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            height: 100%;
            padding: 1.35rem 1.4rem;
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(2, 8, 59, 0.08);
            border-radius: 22px;
            box-shadow: 0 12px 28px rgba(2, 8, 59, 0.05);
          }

          .careers-unit-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 3rem;
            flex-shrink: 0;
            border-radius: 16px;
            background: rgba(2, 8, 59, 0.08);
            color: #02083b;
            font-size: 1.2rem;
          }

          .careers-unit-copy h4 {
            margin: 0 0 0.35rem;
            color: #02083b;
            font-size: 1.1rem;
            font-weight: 700;
          }

          .careers-unit-copy p {
            margin: 0;
            color: rgba(2, 8, 59, 0.7);
            line-height: 1.65;
            white-space: pre-line;
          }

          .careers-form-shell {
            padding: clamp(1.5rem, 3vw, 2.5rem);
          }

          .careers-form-header {
            margin-bottom: 1.7rem;
          }

          .careers-form {
            background: transparent;
            padding: 0;
            box-shadow: none;
          }

          .careers-label {
            display: inline-block;
            margin-bottom: 0.55rem;
            color: #02083b;
            font-size: 0.92rem;
            font-weight: 600;
          }

          .careers-label-block {
            margin-bottom: 0.35rem;
          }

          :global(.careers-input.form-control) {
            min-height: 3.5rem;
            padding: 0.9rem 1rem;
            border: 1px solid rgba(2, 8, 59, 0.14);
            border-radius: 16px;
            background: #fff;
            color: #02083b;
            box-shadow: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
          }

          :global(.careers-input.form-control:focus) {
            border-color: rgba(2, 8, 59, 0.6);
            box-shadow: 0 0 0 4px rgba(2, 8, 59, 0.12);
          }

          .careers-subdivision-header p,
          .careers-loading-copy {
            margin: 0;
            color: rgba(2, 8, 59, 0.7);
            line-height: 1.7;
          }

          .careers-subdivision-groups {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-top: 0.55rem;
          }

          .careers-subdivision-group {
            display: block;
          }

          .careers-subdivision-group__header h4 {
            margin: 0;
            color: var(--accent-color);
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: 0.01em;
          }

          .careers-subdivision-group__header {
            margin-bottom: 0.5rem;
          }

          .careers-subdivision-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
            align-items: start;
          }

          .careers-subdivision-card {
            position: relative;
            display: grid;
            align-content: start;
            min-height: 5.35rem;
            padding: 1.05rem 1rem;
            border: 1px solid rgba(2, 8, 59, 0.12);
            border-radius: 20px;
            background: #fff;
            transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          }

          .careers-subdivision-card:hover {
            transform: translateY(-2px);
            border-color: rgba(2, 8, 59, 0.3);
            box-shadow: 0 12px 24px rgba(2, 8, 59, 0.06);
          }

          .careers-subdivision-card.is-selected {
            border-color: rgba(2, 8, 59, 0.65);
            background: linear-gradient(180deg, rgba(2, 8, 59, 0.07), rgba(2, 8, 59, 0.03));
            box-shadow: 0 14px 28px rgba(2, 8, 59, 0.12);
          }

          .careers-subdivision-card:focus-within {
            outline: 2px solid rgba(2, 8, 59, 0.55);
            outline-offset: 3px;
          }

          .careers-subdivision-main {
            display: grid;
            grid-template-columns: auto auto minmax(0, 1fr) auto;
            align-items: center;
            gap: 0.9rem;
          }

          .careers-subdivision-select,
          .careers-subdivision-toggle,
          .careers-link-button {
            border: 0;
            background: transparent;
            padding: 0;
          }

          .careers-subdivision-select {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .careers-subdivision-check,
          .careers-subdivision-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            border-radius: 14px;
          }

          .careers-subdivision-check {
            width: 2rem;
            height: 2rem;
            border: 1px solid rgba(2, 8, 59, 0.14);
            color: rgba(2, 8, 59, 0.5);
            background: rgba(2, 8, 59, 0.03);
          }

          .careers-subdivision-card.is-selected .careers-subdivision-check {
            border-color: #02083b;
            background: #02083b;
            color: #fff;
          }

          .careers-subdivision-icon {
            width: 2.65rem;
            height: 2.65rem;
            background: rgba(2, 8, 59, 0.08);
            color: var(--careers-submit-blue);
            font-size: 1.05rem;
          }

          .careers-subdivision-text {
            color: #02083b;
            font-size: 0.98rem;
            font-weight: 600;
            line-height: 1.35;
            white-space: normal;
            text-wrap: balance;
          }

          .careers-subdivision-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            border-radius: 999px;
            color: var(--accent-color);
            transition: transform 0.2s ease, background-color 0.2s ease;
          }

          .careers-subdivision-toggle:hover {
            background: rgba(2, 8, 59, 0.05);
          }

          .careers-subdivision-toggle.is-open {
            transform: rotate(180deg);
          }

          .careers-subdivision-details {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.28s ease;
          }

          .careers-subdivision-details.is-open {
            grid-template-rows: 1fr;
          }

          .careers-subdivision-details__inner {
            min-height: 0;
            overflow: hidden;
          }

          .careers-subdivision-details__inner p {
            margin: 0.8rem 0 0;
            padding-top: 0.8rem;
            border-top: 1px solid rgba(2, 8, 59, 0.08);
            color: rgba(2, 8, 59, 0.76);
            font-size: 0.9rem;
            line-height: 1.65;
          }

          .careers-bonds-section {
            display: grid;
            gap: 1rem;
          }

          .careers-bonds-header h4 {
            margin: 0;
            color: #02083b;
            font-size: clamp(1.25rem, 2vw, 1.55rem);
            font-weight: 700;
          }

          .careers-bonds-header p {
            margin: 0.55rem 0 0;
            max-width: 42rem;
            color: rgba(2, 8, 59, 0.72);
            line-height: 1.7;
          }

          .careers-bonds-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
            align-items: start;
          }

          .careers-bond-card {
            display: grid;
            align-content: start;
            padding: 1rem;
            border: 1px solid rgba(2, 8, 59, 0.1);
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 12px 28px rgba(2, 8, 59, 0.05);
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
          }

          .careers-bond-card.is-open {
            border-color: rgba(2, 8, 59, 0.22);
            box-shadow: 0 16px 30px rgba(2, 8, 59, 0.08);
          }

          .careers-bond-card--wide {
            grid-column: 1 / -1;
          }

          .careers-bond-main {
            display: grid;
            grid-template-columns: auto minmax(0, 1fr) auto;
            align-items: center;
            gap: 0.9rem;
          }

          .careers-bond-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 16px;
            background: rgba(2, 8, 59, 0.08);
            color: var(--accent-color);
            font-size: 1.05rem;
            flex-shrink: 0;
          }

          .careers-bond-copy {
            display: grid;
            gap: 0.18rem;
            min-width: 0;
          }

          .careers-bond-copy strong {
            color: #02083b;
            font-size: 1rem;
            font-weight: 700;
            line-height: 1.3;
          }

          .careers-bond-copy span {
            color: rgba(2, 8, 59, 0.64);
            font-size: 0.84rem;
            font-weight: 600;
            letter-spacing: 0.02em;
          }

          .careers-bond-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            border: 0;
            border-radius: 999px;
            background: transparent;
            color: var(--accent-color);
            transition: transform 0.2s ease, background-color 0.2s ease;
          }

          .careers-bond-toggle:hover {
            background: rgba(2, 8, 59, 0.05);
          }

          .careers-bond-toggle.is-open {
            transform: rotate(180deg);
          }

          .careers-bond-details {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.28s ease;
          }

          .careers-bond-details.is-open {
            grid-template-rows: 1fr;
          }

          .careers-bond-details__inner {
            min-height: 0;
            overflow: hidden;
          }

          .careers-bond-details__inner p {
            margin: 0.8rem 0 0;
            padding-top: 0.8rem;
            border-top: 1px solid rgba(2, 8, 59, 0.08);
            color: rgba(2, 8, 59, 0.76);
            font-size: 0.92rem;
            line-height: 1.68;
            white-space: pre-line;
          }

          .careers-submit-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: min(100%, 19rem);
            max-width: 100%;
            min-height: 3.5rem;
            padding: 0.95rem 1.8rem;
            border: 0;
            box-sizing: border-box;
            border-radius: 999px;
            background: var(--careers-submit-blue);
            color: #fff;
            font-weight: 700;
            letter-spacing: 0.01em;
            box-shadow: 0 16px 30px rgba(2, 8, 59, 0.18);
            transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          }

          .careers-submit-button:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 18px 34px rgba(2, 8, 59, 0.22);
          }

          .careers-submit-button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          @media (max-width: 1199px) {
            .careers-subdivision-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .careers-bonds-grid {
              grid-template-columns: 1fr;
            }

            .careers-bond-card--wide {
              grid-column: auto;
            }
          }

          @media (max-width: 991px) {
            .careers-intro-card {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 767px) {
            .careers-intro-card,
            .careers-form-shell {
              border-radius: 24px;
              padding: 1.3rem;
            }

            .careers-subdivision-grid {
              grid-template-columns: 1fr;
            }

            .careers-bonds-section {
              gap: 0.85rem;
            }

            .careers-bonds-grid {
              grid-template-columns: 1fr;
            }

            .careers-bond-card {
              padding: 0.92rem 0.88rem;
            }

            .careers-bond-main {
              gap: 0.72rem;
            }

            .careers-bond-icon {
              width: 2.4rem;
              height: 2.4rem;
              font-size: 0.96rem;
            }

            .careers-bond-copy strong {
              font-size: 0.94rem;
            }

            .careers-bond-copy span {
              font-size: 0.78rem;
            }

            .careers-bond-details__inner p {
              margin-top: 0.72rem;
              padding-top: 0.72rem;
              font-size: 0.84rem;
              line-height: 1.58;
            }

            .careers-subdivision-groups {
              gap: 1.1rem;
            }

            .careers-subdivision-group {
              display: block;
            }

            .careers-subdivision-group__header {
              margin-bottom: 0.42rem;
            }

            .careers-subdivision-card {
              min-height: 4.9rem;
              padding: 0.9rem 0.85rem;
            }

            .careers-subdivision-main {
              gap: 0.7rem;
              grid-template-columns: auto auto minmax(0, 1fr) auto;
            }

            .careers-subdivision-check {
              width: 1.85rem;
              height: 1.85rem;
            }

            .careers-subdivision-icon {
              width: 2.35rem;
              height: 2.35rem;
              font-size: 0.96rem;
            }

            .careers-subdivision-text {
              font-size: 0.86rem;
              line-height: 1.25;
            }

            .careers-subdivision-details__inner p {
              margin-top: 0.72rem;
              padding-top: 0.72rem;
              font-size: 0.84rem;
              line-height: 1.55;
            }

            .careers-submit-button {
              min-width: 0;
              width: min(100%, 16.5rem);
              max-width: calc(100vw - 4rem);
              margin-inline: auto;
              padding: 0.9rem 1.25rem;
              font-size: 0.96rem;
            }
          }
        `}</style>
      </section>
    </main>
  )
}
