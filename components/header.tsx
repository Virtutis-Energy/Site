'use client'

import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"
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
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
    const languageMenuRef = useRef<HTMLDivElement | null>(null)
    const { localeSegment, t } = useLanguage()
    const isHomePage = getRouteKeyFromPath(pathname) === 'home'
    const localeOptions: Array<{
        segment: LocaleSegment
        code: string
        label: string
        flag: string
    }> = [
        { segment: 'pt-br', code: 'PT', label: 'Português', flag: '🇧🇷' },
        { segment: 'en-us', code: 'EN', label: 'English', flag: '🇺🇸' },
        { segment: 'es', code: 'ES', label: 'Español', flag: '🇪🇸' },
    ]
    const activeLocale = localeOptions.find((option) => option.segment === localeSegment) ?? localeOptions[0]

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
        setIsLanguageMenuOpen(false)
        closeMobileNav()
    }

    useEffect(() => {
        const handlePointerDown = (event: MouseEvent) => {
            if (!languageMenuRef.current?.contains(event.target as Node)) {
                setIsLanguageMenuOpen(false)
            }
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsLanguageMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handlePointerDown)
        document.addEventListener('keydown', handleEscape)

        return () => {
            document.removeEventListener('mousedown', handlePointerDown)
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])

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
                    </ul>
                </nav>

                <div className="header-actions">
                    <div className="language-switcher" ref={languageMenuRef}>
                        <button
                            type="button"
                            className="language-switcher__button"
                            aria-label={t.header.languageSwitcherLabel}
                            aria-haspopup="menu"
                            aria-expanded={isLanguageMenuOpen}
                            onClick={() => setIsLanguageMenuOpen((current) => !current)}
                        >
                            <span className="language-switcher__flag" aria-hidden="true">{activeLocale.flag}</span>
                            <span className="language-switcher__code">{activeLocale.code}</span>
                            <i className={`bi ${isLanguageMenuOpen ? 'bi-chevron-up' : 'bi-chevron-down'} language-switcher__chevron`} aria-hidden="true"></i>
                        </button>

                        {isLanguageMenuOpen ? (
                            <div className="language-switcher__menu" role="menu" aria-label={t.header.languageSwitcherLabel}>
                                {localeOptions.map((option) => {
                                    const isActive = option.segment === localeSegment

                                    return (
                                        <button
                                            key={option.segment}
                                            type="button"
                                            role="menuitemradio"
                                            aria-checked={isActive}
                                            className={`language-switcher__option${isActive ? ' language-switcher__option--active' : ''}`}
                                            onClick={() => switchLocale(option.segment)}
                                        >
                                            <span className="language-switcher__option-main">
                                                <span className="language-switcher__flag" aria-hidden="true">{option.flag}</span>
                                                <span className="language-switcher__label">{option.label}</span>
                                            </span>
                                            <span className="language-switcher__option-meta">
                                                <span className="language-switcher__code">{option.code}</span>
                                                {isActive ? <i className="bi bi-check2 language-switcher__check" aria-hidden="true"></i> : null}
                                            </span>
                                        </button>
                                    )
                                })}
                            </div>
                        ) : null}
                    </div>

                    <i
                        className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
                        onClick={toggleMobileNav}
                        style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                    ></i>
                </div>
            </div>

            <style jsx>{`
                :global(#header .container-fluid.container-xl) {
                    justify-content: flex-start !important;
                    gap: 1.1rem;
                }

                :global(#header .navmenu) {
                    margin-left: auto;
                }

                .header-actions {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 0.55rem;
                    margin-left: 0.15rem;
                    flex-shrink: 0;
                }

                .language-switcher {
                    position: relative;
                    z-index: 30;
                }

                .language-switcher__button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    min-height: 32px;
                    min-width: auto;
                    padding: 0.2rem 0.1rem;
                    border-radius: 0;
                    border: 0;
                    background: transparent;
                    color: #02083b;
                    font-size: 0.84rem;
                    font-weight: 700;
                    line-height: 1;
                    transition:
                        background-color 0.2s ease,
                        opacity 0.2s ease,
                        transform 0.2s ease;
                }

                .language-switcher__button:hover {
                    opacity: 0.78;
                }

                .language-switcher__flag {
                    font-size: 1rem;
                    line-height: 1;
                    flex-shrink: 0;
                }

                .language-switcher__code {
                    font-size: 0.8rem;
                    font-weight: 800;
                    letter-spacing: 0.08em;
                    color: inherit;
                }

                .language-switcher__chevron {
                    font-size: 0.72rem;
                    color: inherit;
                    opacity: 1;
                }

                .language-switcher__menu {
                    position: absolute;
                    top: calc(100% + 10px);
                    right: 0;
                    min-width: 208px;
                    padding: 0.45rem;
                    border-radius: 18px;
                    border: 1px solid rgba(20, 45, 93, 0.1);
                    background: #ffffff;
                    box-shadow: 0 18px 36px rgba(2, 8, 59, 0.14);
                }

                .language-switcher__option {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0.75rem;
                    padding: 0.72rem 0.8rem;
                    border: 0;
                    border-radius: 14px;
                    background: transparent;
                    color: #17316a;
                    text-align: left;
                    transition: background-color 0.2s ease, color 0.2s ease;
                }

                .language-switcher__option:hover {
                    background: rgba(26, 46, 93, 0.06);
                }

                .language-switcher__option--active {
                    background: rgba(2, 8, 59, 0.08);
                    color: #02083b;
                }

                .language-switcher__option-main,
                .language-switcher__option-meta {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.55rem;
                }

                .language-switcher__label {
                    font-size: 0.92rem;
                    font-weight: 600;
                }

                .language-switcher__check {
                    font-size: 0.95rem;
                }

                :global(#header.header-home:not(.header-scrolled)) .language-switcher__button {
                    background: transparent;
                    color: var(--accent-color);
                }

                @media (max-width: 1199px) {
                    :global(#header .container-fluid.container-xl) {
                        gap: 0.75rem;
                    }

                    :global(#header .navmenu) {
                        margin-left: 0;
                    }

                    .header-actions {
                        gap: 0.65rem;
                        margin-left: auto;
                    }

                    .language-switcher__button {
                        min-height: 30px;
                        padding: 0.18rem 0.08rem;
                    }
                }

                @media (max-width: 767px) {
                    .language-switcher__button {
                        min-height: 28px;
                        min-width: auto;
                        padding: 0.16rem 0.04rem;
                        gap: 0.35rem;
                    }

                    .language-switcher__menu {
                        min-width: 188px;
                    }
                }

                @media (max-width: 430px) {
                    .language-switcher__button {
                        padding: 0.14rem 0.02rem;
                    }

                    .language-switcher__flag {
                        display: none;
                    }

                    .language-switcher__menu {
                        right: -8px;
                    }
                }
            `}</style>
        </header>
    )
}
