'use client'
import { useRouter } from "next/navigation"

export default function SobreNosPage() {
  const router = useRouter()
return(

    <main className="main">

    <div className="page-title dark-background" style={{ backgroundImage: "url(/img/hero-carousel/hero-carousel-5.jpg)" }}>
      <div className="container position-relative">
        <h1>Sobre nós</h1>
        <nav className="breadcrumbs">
          <ol>
            <li><button onClick={() => router.push("/")} style={{fontWeight: 600,color:"white"}}>Home</button></li>
            <li className="current">Sobre nós</li>
          </ol>
        </nav>
      </div>
    </div>

    <section id="about" className="about section">

      <div className="container">

        <div className="row position-relative">

          <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200"><img
              src="img/hero-carousel/about.jpg"/></div>

          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <h2 className="inner-title">Sobre nós</h2>
            <div className="our-story">
              <h4>Desde 2020</h4>
              <h3>Nossa história</h3>
              <p id="text-index">A história da Virtutis Energy reflete nosso compromisso com a inovação e a
                sustentabilidade no setor de energia elétrica. Fundada em 15 de dezembro de 2020, a empresa nasceu com a
                missão de transformar a maneira como a energia é produzida, distribuída e consumida.</p>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Combinamos Tecnologia e Preservação Ambiental</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Entre 2022 e 2023 implementamos nossa primeira filial</span></li>
              </ul>
              <p id="text-index">Desde o início, a Virtutis Energy tem se esforçado para se estabelecer como uma
                referência no mercado energético.Em 2021, estruturamos setores e departamentos estratégicos para
                direcionar nossas atividades, com foco especial no mercado de energia elétrica. Sob a coordenação de uma
                direção geral e gerência local, a base sólida da Virtutis Energy começou a se formar!</p>

            
            </div>
          </div>

        </div>

      </div>

    </section>

  </main>
)



}