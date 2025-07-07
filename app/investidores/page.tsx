'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Investidores() {
  const router = useRouter()

  return (
    <main className="main">
      <div
        className="page-title dark-background"
        style={{
          backgroundImage: "url('/img/hero-carousel/hero-carousel-6.jpg')",
        }}
      >
        <div className="container position-relative">
          <h1>Investidores</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><button onClick={() => router.push("/")} style={{fontWeight: 600,color:"white"}}>Home</button></li>
              <li className="current">Investidores</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="alt-services-2" className="alt-services-2 section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>Venha ser Investidor Virtutis Energy</h3>

              <h5>Como funcionam os Vitis?</h5>

              <p>
                Os Vitis são notas comerciais emitidas pelas usinas da Virtutis Energy, proporcionando uma
                rentabilidade de até 2,35% a.m., em proventos mensais...
              </p>

              <h6>
                Faça aqui sua <strong>simulação</strong>
              </h6>

              <select className="form-select mb-3 mt-3 w-60" id="usina">
                <option value="default">Selecione a usina</option>
                <option value="usina-ve1">Usina VE.1 - 2023.01 (Nível 3)</option>
                <option value="usina-ve2">Usina VE.1 - 2024.01 (Nível 0)</option>
              </select>

              <div className="card shadow-sm p-4">
                <h5 className="mb-4">
                  <i className="bi bi-calculator-fill me-2"></i>Analise de Investimento
                </h5>

                <div className="row g-4 align-items-end">
                  <div className="col-md-4">
                    <label className="form-label">
                      <strong>Valor Investido</strong>
                    </label>
                    <div className="form-control bg-light" id="vitisResult">
                      R$ 0,00
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="vitisInput" className="form-label">
                      Quantidade de Vitis
                    </label>
                    <input type="number" className="form-control" id="vitisInput" placeholder="Ex: 1" />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="monthsInput" className="form-label">
                      Período (em meses)
                    </label>
                    <input type="number" className="form-control" id="monthsInput" placeholder="Ex: 1" />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <label htmlFor="cupom" className="form-label">
                      Cupom de Desconto
                    </label>
                    <input type="text" className="form-control" id="cupom" placeholder="Opcional" />
                  </div>
                </div>

                <div className="mt-4">
                  <button className="btn btn-primary w-100" id="calculateButton">
                    <i className="bi bi-graph-up-arrow me-2"></i>Calcular Rentabilidade
                  </button>
                </div>

                <div className="row mt-4 text-center">
                  <div className="col-md-4">
                    <div className="result-box p-3 border rounded bg-light">
                      <strong>Total Acumulado</strong>
                      <br />
                      <span id="totalYield">R$ 0,00</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="result-box p-3 border rounded bg-light">
                      <strong>Data Final</strong>
                      <br />
                      <span id="dateResult">__/__/____</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="result-box p-3 border rounded bg-light">
                      <strong>Rentabilidade</strong>
                      <br />
                      <span id="yieldPercentage">0%</span>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-5" id="chartContainer">
                  <canvas id="yieldChart"></canvas>
                </div> */}
              </div>
            </div>

            <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
              <Image
                src="/img/hero-carousel/hero-carousel-3.jpg"
                alt="Investimento"
                className="img-fluid"
                width={500}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 col-md-6 mx-auto" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-currency-dollar flex-shrink-0"></i>
                </div>
                <h3>Formas de Investimentos</h3>
                <p id="text-index">
                  A Virtutis Energy oferece investimentos por meio das Notas Comerciais chamadas Vitis. Cada Vitis é específico para um sistema fotovoltaico, com um total de 1.000 Vitis por usina. Os rendimentos variam de acordo com o nível de locação da usina associada. Por exemplo, na Usina VE.1 - 2023.1, a rentabilidade pode chegar a 2,35% a.m. Os Vitis proporcionam uma renda passiva garantida por 20 anos, um payback projetado de 4,5 anos, liquidez mensal e um investimento acessível em energia renovável, contribuindo para a preservação ambiental.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mx-auto" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-graph-up-arrow flex-shrink-0"></i>
                </div>
                <h3>Níveis de Operação</h3>
                <ul>
                  <li>Usina Nível 0 - 0% a 24% → R$ 0,38</li>
                  <li>Usina Nível 1 - 25% a 49% → R$ 0,76</li>
                  <li>Usina Nível 2 - 50% a 74% → R$ 1,52</li>
                  <li>Usina Nível 3 - 75% a 100% → R$ 3,04</li>
                </ul>
              </div>
            </div>
          
        </div>

      <section id="grafico-vitis" className="grafico-vitis section">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-brightness-alt-high-fill"></i>
          </div>
          <h3>Gráfico Vitis - Comparativo</h3>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper init-swiper">
              <script
  type="application/json"
  className="swiper-config"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      loop: true,
      speed: 600,
      autoplay: {
        delay: 9000,
      },
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
    }),
  }}
/>

            
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="grafico-wrap">
                    <div className="grafico-item">
                      <Image
                        src="/img/hero-carousel/Grafico Vitis.png"
                        alt="Gráfico Vitis"
                        className="grafico-img img-fluid"
                        width={800}
                        height={500}
                        priority
                      />
                    </div>
                  </div>
                </div>

              </div>
              </div>

              <div className="swiper-pagination" />
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
          </section>
          </div>
      </section>
      
    </main>
  )
}
