'use client'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { useRouter } from "next/navigation"

export default function Footer() {
    const router = useRouter()
  return (
    
<footer id="footer" className="footer dark-background bg-dark-blue">
  
    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-6 col-md-6 footer-about">

          <div className="col-lg-6 col-md-3 footer-links">
            <h4>Links úteis</h4>
            <ul>
              <li><button onClick={() => router.push("/")}>Virtutis Energy</button></li>
              <li><button onClick={() => router.push("/trabalhe-conosco")}>Trabalhe Conosco</button></li>
              <li><button onClick={() => router.push("/privacidade")}>Política de Privacidade</button></li>
              <li><button onClick={() => router.push("https://api.whatsapp.com/send?phone=558582351512")}>Contato</button></li>
            </ul>
          </div>

          <div className="social-links d-flex mt-4 ">
            <a href="https://www.instagram.com/virtutisenergy" target="_blank">
            <BsInstagram size={24} />
            </a>

            <a href="https://www.linkedin.com/company/virtutis-energy/" target="_blank">
            <BsLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="footer-contact col mb-5">
          <h4>Endereço</h4>
          <p>Av. Humberto Monte s/n</p>
          <p>Bloco 334 - Condomínio de Empreendedorismo e Inovação</p>
          <p>Campus do Pici - Universidade Federal do Ceará</p>
          <p>Pici, Fortaleza - CE. CEP: 60440-593</p>
          <p className="mb-4">40.121.761/0001-16</p>
          <img src="/img/LOGO_white.png" className="logo-tec"/>
        </div>
       
      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Virtutis Energy</strong> <span>All Rights Reserved</span></p>

    </div>

  </footer>

  )
}