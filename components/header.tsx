'use client'

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Header() {
    const router = useRouter()
    const [mobileNavActive, setMobileNavActive] = useState(false)

    // Função equivalente ao mobileNavToogle do vanilla JS
    const toggleMobileNav = () => {
        setMobileNavActive(!mobileNavActive)
    }

    // Fechar menu ao clicar em links (equivalente ao segundo bloco vanilla)
    const closeMobileNav = () => {
        if (mobileNavActive) {
            setMobileNavActive(false)
        }
    }

    // Adiciona/remove classe no body (equivalente ao vanilla)
    useEffect(() => {
        if (mobileNavActive) {
            document.body.classList.add('mobile-nav-active')
        } else {
            document.body.classList.remove('mobile-nav-active')
        }

        // Cleanup
        return () => {
            document.body.classList.remove('mobile-nav-active')
        }
    }, [mobileNavActive])

    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <button onClick={() => router.push("/")} className="logo d-flex align-items-center">
                    <img src="/img/logo.png" alt="Virtutis" style={{ scale: '1.5' }} />
                </button>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><button onClick={() => { router.push("/"); closeMobileNav(); }}>Home</button></li>
                        <li><button onClick={() => { router.push("/sobre"); closeMobileNav(); }}>Sobre nós</button></li>
                        <li><button onClick={() => { router.push("/clientes"); closeMobileNav(); }}>Clientes</button></li>
                        <li><button onClick={() => { router.push("/investidores"); closeMobileNav(); }}>Investidores</button></li>
                        <li id="contact-cad">
                            <a
                                href="https://wa.me/5585988887777?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20de%20servi%C3%A7os"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileNav}
                            >
                                Fale Conosco
                            </a>
                        </li>
                    </ul>
                </nav>

                <i
                    className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
                    onClick={toggleMobileNav}
                    style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                ></i>
            </div>
        </header>
    )
}