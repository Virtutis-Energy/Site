'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import { getLocalizedPath } from '@/lib/i18n'

function InfoBox({
  icon,
  title,
  subtitle,
  description,
}: {
  icon: string
  title: string
  subtitle?: string
  description: string
}) {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="info-item d-flex flex-column justify-content-center align-items-center px-5 text-center h-100">
        <i className={icon}></i>
        {subtitle ? (
          <div>
            <h3 className="info-box-title">{title}</h3>
            <span className="info-box-subtitle">{subtitle}</span>
          </div>
        ) : (
          <h3 className="info-box-title">{title}</h3>
        )}
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function SubdivisoesPageContent() {
  const router = useRouter()
  const [key, setKey] = useState('cargos')
  const { localeSegment, t } = useLanguage()

  return (
    <div className="main">
      <div className="page-title dark-background" style={{ backgroundImage: 'url(/img/hero-carousel/hero-carousel-5.jpg)' }}>
        <div className="container position-relative">
          <h1>{t.subdivisionsPage.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <button
                  onClick={() => router.push(getLocalizedPath(localeSegment, 'home'))}
                  style={{ color: 'white', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  {t.common.home}
                </button>
              </li>
              <li className="current">{t.subdivisionsPage.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container py-5">
        <div className="subdivision-tabs mb-4" role="tablist" aria-label={t.subdivisionsPage.title}>
          <button
            type="button"
            className={`subdivision-tab${key === 'cargos' ? ' is-active' : ''}`}
            onClick={() => setKey('cargos')}
            role="tab"
            aria-selected={key === 'cargos'}
            aria-controls="subdivision-panel-cargos"
            id="subdivision-tab-cargos"
          >
            {t.subdivisionsPage.positionsTab}
          </button>
          <button
            type="button"
            className={`subdivision-tab${key === 'vinculos' ? ' is-active' : ''}`}
            onClick={() => setKey('vinculos')}
            role="tab"
            aria-selected={key === 'vinculos'}
            aria-controls="subdivision-panel-vinculos"
            id="subdivision-tab-vinculos"
          >
            {t.subdivisionsPage.rolesTab}
          </button>
        </div>

        {key === 'cargos' ? (
          <div role="tabpanel" id="subdivision-panel-cargos" aria-labelledby="subdivision-tab-cargos">
            <h3 className="titulo-subdivisao">{t.subdivisionsPage.partnerAdmin}</h3>
            <div className="row gy-4 justify-content-center">
              <InfoBox icon="bi bi-person-fill-gear" title={t.subdivisionsPage.secretaryEconomy} description={t.subdivisionsPage.secretaryEconomyDesc} />
              <InfoBox icon="bi bi-file-earmark-text-fill" title={t.subdivisionsPage.secretaryHr} description={t.subdivisionsPage.secretaryHrDesc} />
            </div>

            <h3 className="titulo-subdivisao mt-5">{t.subdivisionsPage.generalManagement}</h3>
            <div className="row gy-4 justify-content-center">
              <InfoBox icon="bi bi-person-fill-gear" title={t.subdivisionsPage.administrativeSector} description={t.subdivisionsPage.administrativeSectorDesc} />
              <InfoBox icon="bi bi-file-earmark-text-fill" title={t.subdivisionsPage.legalSector} description={t.subdivisionsPage.legalSectorDesc} />
              <InfoBox icon="bi bi-building-gear" title={t.subdivisionsPage.structuralSector} description={t.subdivisionsPage.structuralSectorDesc} />
              <InfoBox icon="bi bi-cpu-fill" title={t.subdivisionsPage.technologySector} description={t.subdivisionsPage.technologySectorDesc} />
              <InfoBox icon="bi bi-megaphone-fill" title={t.subdivisionsPage.commercialSector} description={t.subdivisionsPage.commercialSectorDesc} />
            </div>

            <h3 className="titulo-subdivisao mt-5">{t.subdivisionsPage.localManagement}</h3>
            <div className="row gy-4 justify-content-center">
              <InfoBox icon="bi bi-person-fill-gear" title={t.subdivisionsPage.accountingDepartment} description={t.subdivisionsPage.accountingDepartmentDesc} />
              <InfoBox icon="bi bi-file-earmark-text-fill" title={t.subdivisionsPage.landDepartment} description={t.subdivisionsPage.landDepartmentDesc} />
              <InfoBox icon="bi bi-building-gear" title={t.subdivisionsPage.projectsDepartment} description={t.subdivisionsPage.projectsDepartmentDesc} />
              <InfoBox icon="bi bi-cpu-fill" title={t.subdivisionsPage.worksDepartment} description={t.subdivisionsPage.worksDepartmentDesc} />
              <InfoBox icon="bi bi-speedometer2" title={t.subdivisionsPage.operationsDepartment} description={t.subdivisionsPage.operationsDepartmentDesc} />
            </div>
          </div>
        ) : (
          <div role="tabpanel" id="subdivision-panel-vinculos" aria-labelledby="subdivision-tab-vinculos">
            <div className="row gy-4 justify-content-center">
              <InfoBox icon="bi bi-mortarboard-fill" title={t.subdivisionsPage.intern} subtitle={t.subdivisionsPage.levelI} description={t.subdivisionsPage.internLevelIDesc} />
              <InfoBox icon="bi bi-award-fill" title={t.subdivisionsPage.intern} subtitle={t.subdivisionsPage.levelII} description={t.subdivisionsPage.internLevelIIDesc} />
              <InfoBox icon="bi bi-lightbulb-fill" title={t.subdivisionsPage.employee} subtitle={t.subdivisionsPage.levelI} description={t.subdivisionsPage.employeeLevelIDesc} />
              <InfoBox icon="bi bi-person-vcard-fill" title={t.subdivisionsPage.employee} subtitle={t.subdivisionsPage.levelII} description={t.subdivisionsPage.employeeLevelIIDesc} />
              <InfoBox icon="bi bi-people-fill" title={t.subdivisionsPage.partnerCollaborator} description={t.subdivisionsPage.partnerCollaboratorDesc} />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .subdivision-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .subdivision-tab {
          border: 1px solid rgba(10, 97, 79, 0.16);
          background: #ffffff;
          color: #1c2430;
          border-radius: 999px;
          padding: 12px 22px;
          font-size: 0.98rem;
          font-weight: 600;
          transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }

        .subdivision-tab.is-active {
          background: #0b6b57;
          color: #ffffff;
          border-color: #0b6b57;
        }

        .subdivision-tab:hover {
          transform: translateY(-1px);
        }

        .info-item {
          min-height: 260px;
          border-radius: 18px;
        }

        .info-box-title {
          margin: 12px 0 0 0;
          font-size: 1.35rem;
          font-weight: 700;
          color: #1c2430;
          line-height: 1.2;
          text-align: left;
        }

        .info-box-subtitle {
          display: block;
          margin-top: 4px;
          margin-bottom: 10px;
          font-size: 0.95rem;
          font-weight: 500;
          color: #6b7280;
          line-height: 1.2;
          text-align: left;
        }

        .info-item p {
          margin-top: 6px;
          margin-bottom: 0;
          text-align: left;
          line-height: 1.6;
          word-break: normal;
          overflow-wrap: break-word;
          hyphens: auto;
        }

        @media (max-width: 768px) {
          .subdivision-tabs {
            gap: 10px;
          }

          .subdivision-tab {
            width: 100%;
          }

          .info-item {
            min-height: auto;
            padding: 20px 18px;
          }

          .info-box-title {
            font-size: 1.2rem;
          }

          .info-box-subtitle {
            font-size: 0.9rem;
            margin-bottom: 8px;
          }

          .info-item p {
            font-size: 0.95rem;
            line-height: 1.55;
          }
        }
      `}</style>
    </div>
  )
}
