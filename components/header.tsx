'use client'

import { useRouter } from "next/navigation"

export default function Header() {
    const router = useRouter()
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
            <button onClick={() => router.push("/")} className="logo d-flex align-items-center">
                <img src="/img/logo.png" alt="Virtutis" style={{scale: '1.5'}}/>
            </button>
            <nav id="navmenu" className="navmenu">
                <ul>
                    <li className="navbar_home"><button onClick={() => router.push("/")}></button></li>
                    <li><button onClick={() => router.push("/sobre")}>Sobre nós</button></li>
                    <li><button onClick={() => router.push("/clientes")}>Clientes</button></li>
                    <li><button onClick={() => router.push("/investidores")}>Investidores</button></li>
                    <li id="contact-cad"><a href="../../05_FE - Cadastro.html">Cadastre-se</a></li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
        </div>
    </header>
  )
}