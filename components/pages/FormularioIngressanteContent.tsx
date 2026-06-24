'use client'

import { useCadastrarIngressante } from '@/hooks/useCadastroIngressante'
import { useSubdivisoes } from '@/hooks/useSubdivisoes'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
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
      const id = parseInt(value)
      setFormData((prev) => {
        const novaLista = checked
          ? [...prev.subdivisoes, id]
          : prev.subdivisoes.filter((item) => item !== id)

        return { ...prev, subdivisoes: novaLista }
      })
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
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

      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt"></i>
                <h3>{t.workWithUsPage.branch}</h3>
                <p>{t.workWithUsPage.branchAddress}</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt"></i>
                <h3>{t.workWithUsPage.headOffice}</h3>
                <p>{t.workWithUsPage.headOfficeAddress}</p>
              </div>
            </div>
          </div>

          <br />

          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row gy-3">
                <div className="col-12">
                  <input type="text" name="cpf" placeholder={t.forms.cpf} required className="form-control" value={formData.cpf} onChange={handleChange} />
                </div>
                <div className="col-12">
                  <input type="text" name="nome" placeholder={t.forms.name} required className="form-control" value={formData.nome} onChange={handleChange} />
                </div>
                <div className="col-12">
                  <input type="email" name="email" placeholder={t.forms.email} required className="form-control" value={formData.email} onChange={handleChange} />
                </div>
                <div className="col-12">
                  <input type="text" name="telefone" placeholder={t.forms.phone} required className="form-control" value={formData.telefone} onChange={handleChange} />
                </div>

                <div className="col-12">
                  <label className="form-label">{t.workWithUsPage.subdivisions}</label>
                  {loadingSub ? (
                    <p>{t.workWithUsPage.loadingSubdivisions}</p>
                  ) : (
                    subdivisoesOrdenadas.map((sub) => (
                      <div className="form-check" key={sub.id}>
                        <input className="form-check-input" type="checkbox" name="subdivisoes" value={sub.id} onChange={handleChange} checked={formData.subdivisoes.includes(sub.id)} />
                        <label className="form-check-label">{getSubdivisionLabel(sub.nome)}</label>
                      </div>
                    ))
                  )}
                </div>

                <div className="col-12">
                  <button
                    onClick={() => router.push(getLocalizedPath(localeSegment, 'subdivisions'))}
                    className="setor-link"
                    type="button"
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    {t.workWithUsPage.learnMore}
                  </button>
                </div>

                <div className="col-12 text-center">
                  <button type="submit" disabled={loading}>
                    {loading ? t.common.sending : t.common.submit}
                  </button>

                  {sucesso && <p className="text-success mt-2">{t.common.successMessage}</p>}
                  {erro && <p className="text-danger mt-2">{erro}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
