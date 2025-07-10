'use client'

import {useRouter} from "next/navigation"
import { useState } from 'react'
import { useEconomia } from "@/hooks/useEconomia"

export default function cliente() {

  const router = useRouter()

  const { economia, handleCalculate } = useEconomia()

return(

    <main className="main">

    <div className="page-title dark-background"
      style= {{ backgroundImage: "url(img/hero-carousel/hero-carousel-1.jpg)"}}>
      <div className="container position-relative">
        <h1>Clientes</h1>
        <nav className="breadcrumbs">
          <ol>
            <li><button onClick={() => router.push("/")} style={{fontWeight: 600,color:"white"}}>Home</button></li>
            <li className="current">Clientes</li>
          </ol>
        </nav>
      </div>
    </div>






    <section id="alt-services-2" className="alt-services-2 section">

      <div className="container">

        <div className="row justify-content-around gy-4">

          <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up"
            data-aos-delay="100">
            <h3>Qual o valor médio que você costuma pagar em sua conta de energia?</h3>
            
            <div className="row justify-content-center mt-4">
              <div className="col-md-8 d-flex align-items-center">
                <form id="investmentCalculator" className="form-inline w-100">
                  <div className="input-group w-100 content bill">
                    <input type="text" className="form-control" id="monthlyBill" placeholder="Digite o valor da conta"/>
                    <div className="input-group-append ml-2 info">
                     <button
                      type="button"
                      className="btn-get-started"
                      onClick={handleCalculate}
                    >
                      Calcular
                    </button>
                    </div>
                  </div>
                  {economia && <div id="result" className="ml-3">{economia}</div>}
                </form>
              </div>
            </div>
         

            <div className="row">

              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-coin flex-shrink-0"></i>
                <div>
                  <h4>Redução dos gastos</h4>
                  <p>Redução dos gastos com Energia Elétrica, a partir da contabilização de créditos de energia gerados
                    pela usina alugada.</p>
                </div>
              </div>

              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-bank flex-shrink-0"></i>
                <div>
                  <h4>Sem Burocracia</h4>
                  <p>Nenhuma burocracia na construção de usinas próprias, toda a construção e jurisdição é
                    responsabilidade da <strong>Virtutis Energy</strong>.</p>
                </div>
              </div>

              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4>Aluguel de Espaços</h4>
                  <p>Explore locais alugados para implementar sistemas de geração de energia renovável, promovendo
                    sustentabilidade e eficiência.</p>
                </div>
              </div>

              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-lightbulb flex-shrink-0"></i>
                <div>
                  <h4>Oportunidades em Locais Ideais</h4>
                  <p>Descubra oportunidades em locais estratégicos alugados para construção de usinas, impulsionando a
                    produção energética sustentável.</p>
                </div>
              </div>

            </div>

          </div>

          <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
            <img src="img/hero-carousel/hero-carousel-4.jpg" alt=""/>
          </div>

        </div>

      </div>

    </section>


    <section id="services" className="services section light-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-coins"></i>
              </div>
              <h3>Economia de até 30%</h3>
              <p id="text-index">Ao optar pelas nossas usinas fotovoltaicas, você pode reduzir seus gastos com energia
                elétrica em até 30%, obtendo assim vantagens no uso da nossa energia solar.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-file-signature"></i>
              </div>
              <h3>Contratação Online</h3>
              <p id="text-index">Interessados em ser Clientes e/ou Investidores precisam <strong><a
                    href="05_FE - Cadastro.html">CADASTRAR-SE</a></strong> em nossa base de dados. A partir desse cadastramento, nosso Setor Comercial
                entrará em contato para proceder com todo o funcionamento da usina e aquisição de Vitis.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-helmet-safety"></i>
              </div>
              <h3>Sem Obras</h3>
              <p id="text-index">Com a Virtutis Energy, garantimos a tranquilidade sem preocupações com obras ou
                instalações elétricas. Nossas Usinas Fotovoltaicas oferecem condições ideais para investidores e clientes,
                atendendo a diversas demandas de energia com eficiência.</p>
            </div>
          </div>

          
          <div className="col-lg-6 col-md-6 mx-auto d-flex justify-content-center" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-handshake-slash"></i>
              </div>
              <h3>Sem Fidelização</h3>
              <p id="text-index">Oferecemos liberdade total aos investidores da Virtutis Energy. Você pode retirar seu
                investimento nos Vitis a qualquer momento, sem a necessidade de esperar os 20 anos. Ao investir, você
                recebe bonificações, porém ao realizar a retirada, as bonificações são canceladas.</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 mx-auto d-flex justify-content-center" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-gift"></i>
              </div>
              <h3>Primeira Mensalidade GRÁTIS</h3>
              <p id="text-index">Garantimos a nossos clientes a <strong>primeira mensalidade gratuita</strong>,
                sendo assim uma oportunidade perfeita para conhecer melhor nossos produtos e serviços.</p>
            </div>
          </div>

        </div>

      </div>
      <br/>
      <div className="d-flex justify-content-center " data-aos="fade-up" data-aos-delay="100">
        <a href="05_FE - Cadastro.html" className="btn-kind">Abra sua conta</a>
      </div>
    </section>




  </main>
)



}