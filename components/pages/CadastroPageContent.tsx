'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCadastroInvestidor } from '@/hooks/useCadastroInvestidor'
import { useLanguage } from '@/components/LanguageProvider'
import { getLocalizedPath } from '@/lib/i18n'

export default function CadastroPageContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()
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
    <main className="main">
      <div className="page-title dark-background" style={{ backgroundImage: 'url(/img/hero-carousel/hero-carousel-1.jpg)' }}>
        <div className="container position-relative">
          <h1>{t.signUpPage.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><a onClick={() => router.push(getLocalizedPath(localeSegment, 'home'))}>{t.common.home}</a></li>
              <li className="current">{t.signUpPage.title}</li>
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
                <h3>{t.common.address}</h3>
                <p>Av. Humberto Monte s/n, Fortaleza, CE</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                <a className="logo_zap" href="https://api.whatsapp.com/send?phone=558582351512">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <h3>{t.signUpPage.whatsapp}</h3>
                <p>+55 85 98483 1512</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                <a className="logo_email" href="mailto:dr.gr@virtutisenergy.com">
                  <i className="bi bi-envelope"></i>
                </a>
                <h3>Email</h3>
                <p>dr.gr@virtutisenergy.com</p>
              </div>
            </div>
          </div>

          <div className="row gy-4 mt-1">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3189424919906!2d-38.572065625497466!3d-3.7405181432329178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74b9a30e7eacd%3A0xebd1f33eefe87b1!2sBloco%20334%20-%20CEI%20-%20Condom%C3%ADnio%20de%20Empreendedorismo%20e%20Inova%C3%A7%C3%A3o!5e0!3m2!1sen!2sbr!4v1720744362409!5m2!1sen!2sbr"
                style={{ border: 0, width: '100%', height: '400px' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <form className="php-email-form" onSubmit={handleSubmit}>
                <h3>{t.signUpPage.formTitle}</h3>
                <div className="row gy-3 mt-2">
                  <div className="col-12">
                    <input type="text" name="doc" className="form-control" placeholder={t.forms.cpfCnpj} required value={formData.cpf_cnpj} onChange={(e) => setFormData({ ...formData, cpf_cnpj: e.target.value.replace(/[^0-9/.\+\-\s]/g, '') })} />
                  </div>
                  <div className="col-12">
                    <input type="text" name="nome" className="form-control" placeholder={t.forms.name} required value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '') })} />
                  </div>
                  <div className="col-12">
                    <input type="email" name="email" className="form-control" placeholder={t.forms.email} required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div className="col-12 mb-3">
                    <input type="text" name="telefone" className="form-control" placeholder={t.forms.phone} required value={formData.telefone} onChange={(e) => setFormData({ ...formData, telefone: e.target.value.replace(/[^0-9+\-\s]/g, '') })} />
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
    </main>
  )
}
