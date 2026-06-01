'use client'

import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/LanguageProvider'
import { getLocalizedPath } from '@/lib/i18n'

export default function AssociadoPageContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()

  return (
    <main className="main">
      <div className="page-title dark-background" style={{ backgroundImage: 'url(/img/hero-carousel/hero-carousel-5.jpg)' }}>
        <div className="container position-relative">
          <h1>{t.associatePage.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <button type="button" onClick={() => router.push(getLocalizedPath(localeSegment, 'home'))} style={{ color: 'white' }}>
                  {t.common.home}
                </button>
              </li>
              <li className="current">{t.associatePage.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="about section">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6">
              <img src="/img/hero-carousel/ft2.jpg" alt={t.associatePage.title} className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <h2 className="inner-title">{t.associatePage.headline}</h2>
              <p className="text-index">{t.associatePage.body}</p>
              <button type="button" onClick={() => router.push(getLocalizedPath(localeSegment, 'workWithUs'))} className="btn-get-started">
                {t.common.openAccount}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
