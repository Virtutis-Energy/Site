'use client'

import Script from 'next/script'
import { useState } from 'react'
import {useRouter} from 'next/navigation'
import { useCadastroInvestidor } from '@/hooks/useCadastroInvestidor'

export default function HomePage() {
const router = useRouter()
const [formData, setFormData] = useState({
  cpf_cnpj: '',
  nome: '',
  email: '',
  telefone: ''
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
        {/* Hero Section */} 
        <section id="hero" className="hero section dark-background">
          <div className="info d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <div className="col-lg-6 text-center">
                  <h2><strong id="name-hero">Virtutis Energy</strong></h2>
                  <h3 className="subtext">Gerando a Melhor Energia!</h3>
                  <p id="invisible-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div><button onClick={() => { router.push("/cadastro")}} className="btn-get-started">Abra sua conta</button></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/img/hero-carousel/ft1.jpg" alt="Hero Image" className="img-fluid" />
          </div>
        </section>

        {/* Get Started Section */}
        <section id="get-started" className="get-started section">
          <div className="container">
            <div className="row justify-content-between gy-4">
              <div className="sobre col-lg-12 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
                <div className="content">
                  <h3>Sobre a Virtutis Energy</h3>
                  <p id="text-index" className="fs-6">
                    A Virtutis Energy é uma fintech de energia que desenvolve e gerencia
                    usinas fotovoltaicas de microgeração distribuída, proporcionando - a partir de sua locação,
                    redução dos custos com eletricidade a seus clientes e retorno financeiro mensal a seus investidores.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
                <div className="content">
                  <h3>Abra sua conta</h3>
                  <p id="text-index">
                    Se você está interessado em reduzir seus custos com eletricidade ou investir em energia renovável, a Virtutis Energy é a escolha certa. Queremos conhecê-lo melhor e ajudá-lo a aproveitar nossas soluções inovadoras. Preencha o formulário com seus dados, e nossa equipe entrará em contato com você para discutir como podemos atender às suas necessidades.
                  </p>
                  <p>Ao fazer o cadastro, o usuário terá acesso a nossas propostas de locação e investimento em usinas.</p>
                </div>
              </div>

              <div className="col-lg-5" data-aos="zoom-out" data-aos-delay="200">
               <form className="php-email-form" onSubmit={handleSubmit}>
                <h3>Realize seu Cadastro</h3>
                <div className="row gy-3 mt-2">
                  <div className="col-12">
                    <input
                      type="text"
                      name="doc"
                      className="form-control"
                      placeholder="CPF/CNPJ"
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
                      placeholder="Nome"
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
                      placeholder="Email"
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
                      placeholder="Telefone"
                      required
                      value={formData.telefone}
                      onChange={(e) =>
                        setFormData({ ...formData, telefone: e.target.value.replace(/[^0-9+\-\s]/g, '') })
                      }
                    />
                  </div>

                  {erro && <div className="text-danger text-center">{erro}</div>}
                  {sucesso && <div className="text-success text-center">Cadastro realizado com sucesso!</div>}

                  <div className="col-12 text-center">
                    <button type="submit" disabled={loading}>
                      {loading ? 'Enviando...' : 'Cadastrar-se'}
                    </button>
                  </div>
                </div>
              </form>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features section">
          <div className="container">
            <ul className="nav nav-tabs row g-2 d-flex" data-aos="fade-up" data-aos-delay="100" role="tablist">
              <li className="nav-item col-6" role="presentation">
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1" aria-selected="true" role="tab">
                  <h4>Cliente</h4>
                </a>
              </li>
              <li className="nav-item col-6" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" aria-selected="false" role="tab">
                  <h4>Investidor</h4>
                </a>
              </li>
            </ul>

            <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
              <div className="tab-pane fade active show" id="features-tab-1" role="tabpanel">
                <div className="row content">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Economia para o Cliente</h3>
                    <p className="" id="text-index">
                  A <strong>Virtutis Energy</strong> é uma fintech de energia solar que desenvolve, gerencia e aluga
                  usinas fotovoltaicas próprias. Oferecemos redução de custos com energia elétrica para nossos clientes,
                  sem a necessidade de que eles paguem pela construção e manutenção de placas solares. Além disso,
                  proporcionamos aos investidores a oportunidade de participar do desenvolvimento dos sistemas de
                  geração de energia, oferecendo-lhes participação nos lucros oriundos da locação das usinas.
                </p>
                <p id="text-index">Com a <strong>Virtutis Energy</strong>, você aproveita uma solução sustentável que
                  combina economia, rentabilidade e impacto positivo no meio ambiente. Junte-se a nós e faça parte do
                  futuro da energia renovável!</p>
                    <div className="info">
                      <button onClick={() => { router.push("/clientes")}} className="btn-get-started">Saiba mais</button>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center mb-4">
                    <img src="/img/hero-carousel/ft2.jpg" alt="" width="500" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="features-tab-2" role="tabpanel">
                <div className="row content">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Turbine seus Investimentos</h3>
                    <p className="" id="text-index">
                      Invista em nossas usinas fotovoltaicas e desfrute de uma rentabilidade de até 2,35% ao mês. Com a
                      <strong> Virtutis Energy</strong>, você garante economia e rentabilidade em um só lugar. Potencialize
                      seus investimentos e faça parte do futuro da energia renovável!
                    </p>
                    <div className="info">
                      <button onClick={() => { router.push("/investidores")}} className="btn-get-started">Saiba mais</button>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center mb-4">
                    <img src="/img/hero-carousel/ft1.jpg" width="500" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
    <Script
  src="/styles/vendor/bootstrap/js/bootstrap.bundle.min.js"
  strategy="afterInteractive"
/>
      </>
  )
}
