// components/Header.tsx
'use client'

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
            <a href="../../index.html" className="logo d-flex align-items-center">
                <img src="/img/logo.png" alt="Virtutis" style={{scale: '1.5'}}/>
            </a>
            <nav id="navmenu" className="navmenu">
                <ul>
                    <li className="navbar_home"><a href="../../index.html">Virtutis Energy</a></li>
                    <li><a href="../../02_FE - SobreNós.html">Sobre nós</a></li>
                    <li><a href="../../03_FE - Clientes.html">Clientes</a></li>
                    <li><a href="../../04_FE - Investidores.html">Investidores</a></li>
                    <li id="contact-cad"><a href="../../05_FE - Cadastro.html">Cadastre-se</a></li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
        </div>
    </header>
  )
}