'use client'

import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/LanguageProvider'
import { getLocalizedPath } from '@/lib/i18n'

export default function PrivacidadePageContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()

  return (
    <main className="main">
      <div className="page-title dark-background" style={{ backgroundImage: 'url(/img/hero-carousel/hero-carousel-1.jpg)' }}>
        <div className="container position-relative">
          <h1>{t.privacyPage.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><button onClick={() => router.push(getLocalizedPath(localeSegment, 'home'))} style={{ fontWeight: 600, color: 'white' }}>{t.common.home}</button></li>
              <li className="current">{t.privacyPage.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="starter-section" className="starter-section section">
        <div className="container mt-5">
          <h1 className="text-center">{t.privacyPage.title}</h1>
          <p className="text-muted text-center">{t.privacyPage.updatedAt}</p>

          <section>
            <h2>{t.privacyPage.introTitle}</h2>
            <p>{t.privacyPage.introText}</p>
          </section>

          <section>
            <h2>{t.privacyPage.collectTitle}</h2>
            <p>{t.privacyPage.collectText}</p>
            <ul>
              <li>{t.privacyPage.list.fullName}</li>
              <li>{t.privacyPage.list.email}</li>
              <li>{t.privacyPage.list.phone}</li>
              <li>{t.privacyPage.list.address}</li>
              <li>{t.privacyPage.list.payment}</li>
            </ul>
            <p>{t.privacyPage.collectAutoText}</p>
            <ul>
              <li>{t.privacyPage.list.ip}</li>
              <li>{t.privacyPage.list.browser}</li>
              <li>{t.privacyPage.list.pages}</li>
              <li>{t.privacyPage.list.time}</li>
            </ul>
          </section>

          <section>
            <h2>{t.privacyPage.useTitle}</h2>
            <p>{t.privacyPage.useText}</p>
            <ul>
              <li>{t.privacyPage.list.serviceManagement}</li>
              <li>{t.privacyPage.list.paymentProcessing}</li>
              <li>{t.privacyPage.list.communication}</li>
              <li>{t.privacyPage.list.improvement}</li>
              <li>{t.privacyPage.list.legal}</li>
            </ul>
          </section>

          <section>
            <h2>{t.privacyPage.shareTitle}</h2>
            <p>{t.privacyPage.shareText}</p>
            <ul>
              <li>{t.privacyPage.list.processors}</li>
              <li>{t.privacyPage.list.obligations}</li>
              <li>{t.privacyPage.list.consent}</li>
            </ul>
          </section>

          <section>
            <h2>{t.privacyPage.securityTitle}</h2>
            <p>{t.privacyPage.securityText}</p>
            <ul>
              <li>{t.privacyPage.list.encryption}</li>
              <li>{t.privacyPage.list.accessControl}</li>
              <li>{t.privacyPage.list.monitoring}</li>
            </ul>
          </section>

          <section>
            <h2>{t.privacyPage.rightsTitle}</h2>
            <p>{t.privacyPage.rightsText}</p>
            <ul>
              <li>{t.privacyPage.list.access}</li>
              <li>{t.privacyPage.list.correction}</li>
              <li>{t.privacyPage.list.anonymization}</li>
              <li>{t.privacyPage.list.portability}</li>
              <li>{t.privacyPage.list.deletion}</li>
              <li>{t.privacyPage.list.sharedInfo}</li>
              <li>{t.privacyPage.list.revoke}</li>
            </ul>
          </section>

          <section>
            <h2>{t.privacyPage.retentionTitle}</h2>
            <p>{t.privacyPage.retentionText}</p>
          </section>

          <section>
            <h2>{t.privacyPage.changesTitle}</h2>
            <p>{t.privacyPage.changesText}</p>
          </section>

          <section>
            <h2>{t.privacyPage.contactTitle}</h2>
            <p>{t.privacyPage.contactText}</p>
            <ul>
              <li>E-mail: <a href="mailto:so.ad@virtutisenergy.com">so.ad@virtutisenergy.com</a></li>
              <li>{t.privacyPage.list.addressLine}</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  )
}
