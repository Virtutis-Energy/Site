'use client'

import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useLanguage } from './LanguageProvider'
import {
    getLocalizedPath,
    getLocalizedPathFromPathname,
    getRouteKeyFromPath,
    type LocaleSegment,
} from '@/lib/i18n'

export default function Header() {
    const router = useRouter()
    const pathname = usePathname()
    const [mobileNavActive, setMobileNavActive] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { localeSegment, t } = useLanguage()
    const isHomePage = getRouteKeyFromPath(pathname) === 'home'

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

    useEffect(() => {
        const toggleScrolled = () => {
            setScrolled(window.scrollY > 48)
        }

        toggleScrolled()
        window.addEventListener('scroll', toggleScrolled, { passive: true })

        return () => {
            window.removeEventListener('scroll', toggleScrolled)
        }
    }, [])

    const switchLocale = (targetLocale: LocaleSegment) => {
        router.push(getLocalizedPathFromPathname(pathname, targetLocale))
        closeMobileNav()
    }

    return (
        <header
            id="header"
            className={`header d-flex align-items-center fixed-top${isHomePage ? ' header-home' : ''}${scrolled ? ' header-scrolled' : ''}`}
        >
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <button onClick={() => router.push(getLocalizedPath(localeSegment, 'home'))} className="logo d-flex align-items-center">
                    <img src="/img/logo.png" alt="Virtutis" style={{ scale: '1.5' }} />
                </button>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><button onClick={() => { router.push(getLocalizedPath(localeSegment, 'home')); closeMobileNav(); }}>{t.common.home}</button></li>
                        <li><button onClick={() => { router.push(getLocalizedPath(localeSegment, 'about')); closeMobileNav(); }}>{t.common.about}</button></li>
                        <li><button onClick={() => { router.push(getLocalizedPath(localeSegment, 'clients')); closeMobileNav(); }}>{t.common.clients}</button></li>
                        <li><button onClick={() => { router.push(getLocalizedPath(localeSegment, 'investors')); closeMobileNav(); }}>{t.common.investors}</button></li>
                        <li><button onClick={() => { router.push(getLocalizedPath(localeSegment, 'associate')); closeMobileNav(); }}>{t.common.associate}</button></li>
                        <li id="contact-cad">
                            <a
                                href={t.header.whatsappText}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileNav}
                            >
                                {t.common.contact}
                            </a>
                        </li>
                        <li>
                            <div
                                aria-label={t.header.languageSwitcherLabel}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.35rem',
                                    marginLeft: '1rem',
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() => switchLocale('pt-br')}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.45rem',
                                        fontWeight: localeSegment === 'pt-br' ? 700 : 500,
                                        opacity: localeSegment === 'pt-br' ? 1 : 0.7,
                                    }}
                                >
                                    <span
                                        aria-hidden="true"
                                        style={{
                                            width: '1.6rem',
                                            height: '1.6rem',
                                            borderRadius: '999px',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            overflow: 'hidden',
                                            boxShadow: '0 0 0 1px rgba(255,255,255,0.25)',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <img
                                            src="/img/country/brazil.jpeg"
                                            alt=""
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block',
                                            }}
                                        />
                                    </span>
                                    {t.common.portuguese}
                                </button>
                                <span style={{ color: '#fff', opacity: 0.6 }}>/</span>
                                <button
                                    type="button"
                                    onClick={() => switchLocale('en-us')}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.45rem',
                                        fontWeight: localeSegment === 'en-us' ? 700 : 500,
                                        opacity: localeSegment === 'en-us' ? 1 : 0.7,
                                    }}
                                >
                                    <span
                                        aria-hidden="true"
                                        style={{
                                            width: '1.6rem',
                                            height: '1.6rem',
                                            borderRadius: '999px',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            overflow: 'hidden',
                                            boxShadow: '0 0 0 1px rgba(255,255,255,0.25)',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <img
                                            src="/img/country/eua.jpeg"
                                            alt=""
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block',
                                            }}
                                        />
                                    </span>
                                    {t.common.english}
                                </button>
                            </div>
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
