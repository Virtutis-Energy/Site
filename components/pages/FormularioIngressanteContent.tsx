'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { useLanguage } from '@/components/LanguageProvider'
import workWithUsTeamImage from '@/assets/Imagem-trabalhe-conosco.jpg'
import { useCadastrarIngressante } from '@/hooks/useCadastroIngressante'
import { useSubdivisoes } from '@/hooks/useSubdivisoes'
import {
  getLocalizedPath,
  subdivisionNameAliases,
  subdivisionOrder,
  type SubdivisionKey,
} from '@/lib/i18n'

const normalizeText = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()

const subdivisionNameToKey = Object.entries(subdivisionNameAliases).reduce<Record<string, SubdivisionKey>>(
  (acc, [key, aliases]) => {
    aliases.forEach((alias) => {
      acc[normalizeText(alias)] = key as SubdivisionKey
    })
    return acc
  },
  {}
)

const subdivisionIcons: Record<SubdivisionKey, string> = {
  secretaryEconomy: 'bi bi-pie-chart',
  secretaryHr: 'bi bi-people',
  administrativeSector: 'bi bi-building-gear',
  legalSector: 'bi bi-shield-check',
  structuralSector: 'bi bi-diagram-3',
  technologySector: 'bi bi-cpu',
  commercialSector: 'bi bi-briefcase',
  accountingDepartment: 'bi bi-calculator',
  landDepartment: 'bi bi-geo-alt',
  projectsDepartment: 'bi bi-journal-richtext',
  worksDepartment: 'bi bi-hammer',
  operationsDepartment: 'bi bi-lightning-charge',
}

function getSubdivisionKey(name: string) {
  return subdivisionNameToKey[normalizeText(name)] ?? null
}

export default function FormularioIngressanteContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()
  const { cadastrar, sucesso, erro, loading } = useCadastrarIngressante()
  const { subdivisoes, loading: loadingSub } = useSubdivisoes()

  const [formData, setFormData] = useState({
    cpf: '',
    nome: '',
    email: '',
    telefone: '',
    subdivisoes: [] as number[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target

    if (name === 'subdivisoes') {
      const id = parseInt(value, 10)
      setFormData((prev) => {
        const novaLista = checked
          ? [...prev.subdivisoes, id]
          : prev.subdivisoes.filter((item) => item !== id)

        return { ...prev, subdivisoes: novaLista }
      })
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await cadastrar(formData)
  }

  const subdivisoesOrdenadas = [...subdivisoes].sort((a, b) => {
    const keyA = getSubdivisionKey(a.nome)
    const keyB = getSubdivisionKey(b.nome)
    const indexA = keyA ? subdivisionOrder.indexOf(keyA) : -1
    const indexB = keyB ? subdivisionOrder.indexOf(keyB) : -1
    const posA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA
    const posB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB

    return posA - posB
  })

  const getSubdivisionLabel = (name: string) => {
    const key = getSubdivisionKey(name)
    return key ? t.subdivisionsPage[key] : name
  }

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
              <span className="careers-kicker">{t.workWithUsPage.formTitle}</span>
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
                    name="nome"
                    placeholder={t.forms.name}
                    required
                    className="form-control careers-input"
                    value={formData.nome}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label htmlFor="work-cpf" className="careers-label">
                    {t.forms.cpf}
                  </label>
                  <input
                    id="work-cpf"
                    type="text"
                    name="cpf"
                    placeholder={t.forms.cpf}
                    required
                    className="form-control careers-input"
                    value={formData.cpf}
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
                    name="telefone"
                    placeholder={t.forms.phone}
                    required
                    className="form-control careers-input"
                    value={formData.telefone}
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
                      {subdivisoesOrdenadas.map((sub) => {
                        const subdivisionKey = getSubdivisionKey(sub.nome)
                        const subdivisionLabel = getSubdivisionLabel(sub.nome)
                        const isSelected = formData.subdivisoes.includes(sub.id)
                        const iconClass = subdivisionKey ? subdivisionIcons[subdivisionKey] : 'bi bi-grid'

                        return (
                          <label key={sub.id} className={`careers-subdivision-card${isSelected ? ' is-selected' : ''}`}>
                            <input
                              className="careers-subdivision-input"
                              type="checkbox"
                              name="subdivisoes"
                              value={sub.id}
                              onChange={handleChange}
                              checked={isSelected}
                            />
                            <span className="careers-subdivision-check" aria-hidden="true">
                              <i className={`bi ${isSelected ? 'bi-check2' : 'bi-plus'}`}></i>
                            </span>
                            <span className="careers-subdivision-icon" aria-hidden="true">
                              <i className={iconClass}></i>
                            </span>
                            <span className="careers-subdivision-text">{subdivisionLabel}</span>
                          </label>
                        )
                      })}
                    </div>
                  )}
                </div>

                <div className="col-12">
                  <button onClick={() => router.push(getLocalizedPath(localeSegment, 'subdivisions'))} className="careers-link-button" type="button">
                    {t.workWithUsPage.learnMore}
                  </button>
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
            background:
              radial-gradient(circle at top left, rgba(11, 31, 61, 0.04), transparent 38%),
              linear-gradient(180deg, #ffffff 0%, #f6f9fc 100%);
          }

          .careers-intro-card,
          .careers-form-shell {
            background: rgba(255, 255, 255, 0.98);
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 28px;
            box-shadow: 0 18px 42px rgba(11, 31, 61, 0.08);
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
            color: #1f5eff;
            font-size: 0.82rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .careers-intro-copy h2,
          .careers-form-header h3,
          .careers-section-heading h3 {
            margin: 0;
            color: #0b1f3d;
            font-size: clamp(1.85rem, 2.5vw, 2.5rem);
            font-weight: 700;
            line-height: 1.12;
          }

          .careers-intro-copy p,
          .careers-form-header p {
            margin: 1rem 0 0;
            max-width: 36rem;
            color: rgba(11, 31, 61, 0.76);
            font-size: 1rem;
            line-height: 1.8;
          }

          .careers-intro-copy strong {
            display: block;
            margin-top: 1.1rem;
            color: #0b1f3d;
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
            border: 1px solid rgba(11, 31, 61, 0.08);
            border-radius: 22px;
            box-shadow: 0 12px 28px rgba(11, 31, 61, 0.05);
          }

          .careers-unit-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 3rem;
            flex-shrink: 0;
            border-radius: 16px;
            background: rgba(31, 94, 255, 0.08);
            color: #1f5eff;
            font-size: 1.2rem;
          }

          .careers-unit-copy h4 {
            margin: 0 0 0.35rem;
            color: #0b1f3d;
            font-size: 1.1rem;
            font-weight: 700;
          }

          .careers-unit-copy p {
            margin: 0;
            color: rgba(11, 31, 61, 0.7);
            line-height: 1.65;
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
            color: #0b1f3d;
            font-size: 0.92rem;
            font-weight: 600;
          }

          .careers-label-block {
            margin-bottom: 0.35rem;
          }

          :global(.careers-input.form-control) {
            min-height: 3.5rem;
            padding: 0.9rem 1rem;
            border: 1px solid rgba(11, 31, 61, 0.14);
            border-radius: 16px;
            background: #fff;
            color: #0b1f3d;
            box-shadow: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
          }

          :global(.careers-input.form-control:focus) {
            border-color: rgba(31, 94, 255, 0.6);
            box-shadow: 0 0 0 4px rgba(31, 94, 255, 0.12);
          }

          .careers-subdivision-header p,
          .careers-loading-copy {
            margin: 0;
            color: rgba(11, 31, 61, 0.7);
            line-height: 1.7;
          }

          .careers-subdivision-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
            margin-top: 1rem;
          }

          .careers-subdivision-card {
            position: relative;
            display: flex;
            align-items: center;
            gap: 0.9rem;
            min-height: 5.35rem;
            padding: 1.05rem 1rem;
            border: 1px solid rgba(11, 31, 61, 0.12);
            border-radius: 20px;
            background: #fff;
            cursor: pointer;
            transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          }

          .careers-subdivision-card:hover {
            transform: translateY(-2px);
            border-color: rgba(31, 94, 255, 0.3);
            box-shadow: 0 12px 24px rgba(11, 31, 61, 0.06);
          }

          .careers-subdivision-card.is-selected {
            border-color: rgba(31, 94, 255, 0.65);
            background: linear-gradient(180deg, rgba(31, 94, 255, 0.07), rgba(31, 94, 255, 0.03));
            box-shadow: 0 14px 28px rgba(31, 94, 255, 0.12);
          }

          .careers-subdivision-input {
            position: absolute;
            inset: 0;
            opacity: 0;
            cursor: pointer;
          }

          .careers-subdivision-card:focus-within {
            outline: 2px solid rgba(31, 94, 255, 0.55);
            outline-offset: 3px;
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
            border: 1px solid rgba(11, 31, 61, 0.14);
            color: rgba(11, 31, 61, 0.5);
            background: rgba(11, 31, 61, 0.03);
          }

          .careers-subdivision-card.is-selected .careers-subdivision-check {
            border-color: #1f5eff;
            background: #1f5eff;
            color: #fff;
          }

          .careers-subdivision-icon {
            width: 2.65rem;
            height: 2.65rem;
            background: rgba(31, 94, 255, 0.08);
            color: #1f5eff;
            font-size: 1.05rem;
          }

          .careers-subdivision-text {
            color: #0b1f3d;
            font-size: 0.98rem;
            font-weight: 600;
            line-height: 1.45;
          }

          .careers-link-button {
            padding: 0;
            border: 0;
            background: transparent;
            color: #1f5eff;
            font-weight: 600;
            text-decoration: underline;
            text-underline-offset: 0.2rem;
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
            background: linear-gradient(135deg, #0b1f3d 0%, #1f5eff 100%);
            color: #fff;
            font-weight: 700;
            letter-spacing: 0.01em;
            box-shadow: 0 16px 30px rgba(11, 31, 61, 0.18);
            transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          }

          .careers-submit-button:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 18px 34px rgba(11, 31, 61, 0.22);
          }

          .careers-submit-button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          @media (max-width: 1199px) {
            .careers-subdivision-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
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
