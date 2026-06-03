'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/LanguageProvider'
import { getLocalizedPath } from '@/lib/i18n'
import { useNiveisOperacao } from '@/hooks/useNiveisOperacao'

const BASE_LEASE_VALUE = 0.4
const BASE_LEVEL_VALUE = 1392.05
const fallbackPlants = [
  { id: 'q0', nome: 'Q0', valor_vitis: 0 },
  { id: '20', nome: '20', valor_vitis: 20 },
  { id: '30', nome: '30', valor_vitis: 30 },
  { id: '40', nome: '40', valor_vitis: 40 },
  { id: '50', nome: '50', valor_vitis: 50 },
  { id: '60', nome: '60', valor_vitis: 60 },
]

function getSuggestedEnergy(plantName: string) {
  const numericPower = Number(plantName.replace(/\D/g, ''))
  return numericPower > 0 ? numericPower * 100 : 1000
}

export default function AssociadoPageContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()
  const { usinas } = useNiveisOperacao()
  const plantOptions = usinas.length ? usinas : fallbackPlants
  const [selectedPlant, setSelectedPlant] = useState(fallbackPlants[0].id)
  const [leasedEnergy, setLeasedEnergy] = useState(1000)
  const [associateLevel, setAssociateLevel] = useState(1)

  useEffect(() => {
    if (plantOptions.length && !plantOptions.some((plant) => plant.id === selectedPlant)) {
      setSelectedPlant(plantOptions[0].id)
      setLeasedEnergy(getSuggestedEnergy(plantOptions[0].nome))
    }
  }, [plantOptions, selectedPlant])

  const selectedPlantData = plantOptions.find((plant) => plant.id === selectedPlant) ?? plantOptions[0]

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat(localeSegment === 'pt-br' ? 'pt-BR' : 'en-US', {
        style: 'currency',
        currency: 'BRL',
      }),
    [localeSegment]
  )

  const leaseRevenue = leasedEnergy * BASE_LEASE_VALUE
  const levelRevenue = BASE_LEVEL_VALUE * associateLevel
  const totalRevenue = leaseRevenue + levelRevenue

  return (
    <main className="main associate-page">
      <div className="page-title dark-background" style={{ backgroundImage: 'url(/img/hero-carousel/ft2.jpg)' }}>
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

      <section id="alt-services-2" className="alt-services-2 section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center text-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
              <h3>{t.associatePage.headline}</h3>
              <p>{t.associatePage.body}</p>

              <div className="row mt-4">
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-lightning-charge flex-shrink-0"></i>
                  <div>
                    <h4>{t.associatePage.feature1Title}</h4>
                    <p>{t.associatePage.feature1Text}</p>
                  </div>
                </div>

                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-building-check flex-shrink-0"></i>
                  <div>
                    <h4>{t.associatePage.feature2Title}</h4>
                    <p>{t.associatePage.feature2Text}</p>
                  </div>
                </div>

                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-ui-checks-grid flex-shrink-0"></i>
                  <div>
                    <h4>{t.associatePage.feature3Title}</h4>
                    <p>{t.associatePage.feature3Text}</p>
                  </div>
                </div>

                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-cash-coin flex-shrink-0"></i>
                  <div>
                    <h4>{t.associatePage.feature4Title}</h4>
                    <p>{t.associatePage.feature4Text}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
              <img src="/img/hero-carousel/ft2.jpg" alt={t.associatePage.title} />
            </div>
          </div>
        </div>
      </section>

      <section id="associate-plants" className="services section light-background">
        <div className="container">
          <div className="section-title text-center mb-4" data-aos="fade-up">
            <h2>{t.associatePage.plantsTitle}</h2>
            <p>{t.associatePage.plantsText}</p>
          </div>

          <div className="row gy-4">
            {plantOptions.map((plant, index) => (
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`} key={plant.id}>
                <div className="service-item associate-service-card position-relative text-center">
                  <div className="icon mx-auto">
                    <i className="fa-solid fa-solar-panel"></i>
                  </div>
                  <h3>{t.associatePage.plantLabel} {plant.nome}</h3>
                  <p id="text-index">{t.associatePage.plantDescription(plant.nome)}</p>
                  {plant.valor_vitis > 0 && (
                    <p className="associate-plant-meta">{t.associatePage.referenceValue} {formatter.format(plant.valor_vitis)}</p>
                  )}
                  <button
                    type="button"
                    className="btn-get-started mt-3"
                    onClick={() => {
                      setSelectedPlant(plant.id)
                      setLeasedEnergy(getSuggestedEnergy(plant.nome))
                    }}
                  >
                    {t.associatePage.choosePlant}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="associate-calculator" className="get-started section">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div className="col-lg-5 d-flex align-items-center text-center text-lg-start" data-aos="fade-up">
              <div className="content associate-calculator-copy">
                <h3>{t.associatePage.calculatorTitle}</h3>
                <p>{t.associatePage.calculatorText}</p>
                <p>
                  <strong>{t.associatePage.baseLeaseLabel}</strong> {formatter.format(BASE_LEASE_VALUE)}
                  <br />
                  <strong>{t.associatePage.baseLevelLabel}</strong> {formatter.format(BASE_LEVEL_VALUE)}
                  <br />
                  <strong>{t.associatePage.currentPlantLabel}</strong> {selectedPlantData?.nome}
                </p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <form className="php-email-form">
                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="associatePlant" className="form-label">{t.associatePage.selectedPlant}</label>
                    <select
                      id="associatePlant"
                      className="form-select"
                      value={selectedPlant}
                      onChange={(event) => {
                        const nextPlant = plantOptions.find((plant) => plant.id === event.target.value)
                        setSelectedPlant(event.target.value)
                        if (nextPlant) {
                          setLeasedEnergy(getSuggestedEnergy(nextPlant.nome))
                        }
                      }}
                    >
                      {plantOptions.map((plant) => (
                        <option value={plant.id} key={plant.id}>{t.associatePage.plantLabel} {plant.nome}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="associateLevel" className="form-label">{t.associatePage.associateLevel}</label>
                    <select
                      id="associateLevel"
                      className="form-select"
                      value={associateLevel}
                      onChange={(event) => setAssociateLevel(Number(event.target.value))}
                    >
                      {[0, 1, 2, 3].map((level) => (
                        <option value={level} key={level}>{t.associatePage.levelLabel(level)}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="leasedEnergy" className="form-label">{t.associatePage.leasedEnergy}</label>
                    <input
                      id="leasedEnergy"
                      type="number"
                      min="0"
                      step="100"
                      className="form-control"
                      value={leasedEnergy}
                      onChange={(event) => setLeasedEnergy(Number(event.target.value))}
                    />
                  </div>

                  <div className="col-md-4">
                    <div className="service-item associate-result-card position-relative h-100 text-center">
                      <h3>{t.associatePage.leaseRevenue}</h3>
                      <p id="text-index">{formatter.format(leaseRevenue)}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="service-item associate-result-card position-relative h-100 text-center">
                      <h3>{t.associatePage.levelRevenue}</h3>
                      <p id="text-index">{formatter.format(levelRevenue)}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="service-item associate-result-card position-relative h-100 text-center">
                      <h3>{t.associatePage.totalRevenue}</h3>
                      <p id="text-index">{formatter.format(totalRevenue)}</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="services section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item associate-service-card position-relative text-center">
                <div className="icon mx-auto">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h3>{t.associatePage.service1Title}</h3>
                <p id="text-index">{t.associatePage.service1Text}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item associate-service-card position-relative text-center">
                <div className="icon mx-auto">
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                </div>
                <h3>{t.associatePage.service2Title}</h3>
                <p id="text-index">{t.associatePage.service2Text}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item associate-service-card position-relative text-center">
                <div className="icon mx-auto">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3>{t.associatePage.service3Title}</h3>
                <p id="text-index">{t.associatePage.service3Text}</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <a href="https://wa.me/5585984831512?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20de%20servi%C3%A7os" target="_blank" rel="noopener noreferrer" className="btn-kind">
            {t.common.openAccount}
          </a>
        </div>
      </section>
    </main>
  )
}
