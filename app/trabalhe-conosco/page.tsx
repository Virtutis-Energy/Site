'use client'
import { useRouter } from "next/navigation"


export default function TrabalheConosco() {
  const router = useRouter()
return(
<main className="main">

    <div className="page-title dark-background"
      style={{backgroundImage: 'url(/img/hero-carousel/hero-carousel-5.jpg)'}}>
      <div className="container position-relative">
        <h1>Trabalhe Conosco</h1>
        <nav className="breadcrumbs">
          <ol>
            <li>
              <button onClick={() => router.push('/')} style={{color:'white'}}>Home</button>
              </li>
            <li className="current">Trabalhe Conosco</li>
          </ol>
        </nav>
      </div>
    </div>

   
    <section id="contact" className="contact section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up"
              data-aos-delay="200">
              <i className="bi bi-geo-alt"></i>
              <h3>Filial VE.1 - Ceará</h3>
              <p>Av. Humberto Monte s/n, Fortaleza, CE</p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up"
              data-aos-delay="200">
              <i className="bi bi-geo-alt"></i>
              <h3>Matriz</h3>
              <p>Av. Barão de Studart, 1980 - Aldeota, Fortaleza - CE, 60120-024</p>
            </div>
          </div>
          
        </div>
        <br/>
  <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
  <form action="https://api.sheetmonkey.io/form/3vFnDNvBGyF2W2DTCbNkfL" method="post" className="php-email-form">
    <br/>
    <div className="row gy-3">

      <div className="col-12">
        <input type="text" name="doc" className="form-control w-100" placeholder="CPF" required/>

      </div>

      <div className="col-12">
        <input type="text" name="nome" className="form-control w-100" placeholder="Nome" required/>
      </div>

      <div className="col-12">
        <input type="email" className="form-control w-100" name="email" placeholder="Email" required/>
      </div>

      <div className="col-12">
        <input type="text" name="telefone" className="form-control w-100" placeholder="Telefone" required
          />
      </div>

      <div className="col-12">
        <label className="form-label">Subdivisões (pode selecionar mais de uma):</label>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Secretaria de Economia"/>
          <label className="form-check-label">Secretaria de Economia</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Secretaria de Recursos Humanos"/>
          <label className="form-check-label">Secretaria de Recursos Humanos</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Setor Administrativo"/>
          <label className="form-check-label">Setor Administrativo</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Setor Jurídico"/>
          <label className="form-check-label">Setor Jurídico</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Setor Estrutural"/>
          <label className="form-check-label">Setor Estrutural</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Setor Tecnológico"/>
          <label className="form-check-label">Setor Tecnológico</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Setor Comercial"/>
          <label className="form-check-label">Setor Comercial</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Departamento de Contabilidade"/>
          <label className="form-check-label">Departamento de Contabilidade</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Departamento de Terrenos"/>
          <label className="form-check-label">Departamento de Terrenos</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Departamento de Projetos"/>
          <label className="form-check-label">Departamento de Projetos</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Departamento de Obras"/>
          <label className="form-check-label">Departamento de Obras</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Departamento de Operação"/>
          <label className="form-check-label">Departamento de Operação</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Departamento de Clientes"/>
          <label className="form-check-label">Departamento de Clientes</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="setor[]" value="Departamento de Investidores"/>
          <label className="form-check-label">Departamento de Investidores</label>
        </div>
      </div>

      <div className="col-12">
        <button  onClick={() => router.push('/subdivisoes')} className="setor-link">Saiba mais sobre o Trabalho Conosco.</button>
      </div>

      <div className="col-12 text-center">
        <button type="submit" value="submit">Cadastrar-se</button>
      </div>

    </div>
  </form>
</div>



        </div>

    </section>

  </main>
    
)}