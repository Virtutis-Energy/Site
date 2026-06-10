'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useNiveisOperacao } from '@/hooks/useNiveisOperacao'
import { useValorInvestido } from '@/hooks/useValorInvestido'
import { useState } from 'react'
import { useSimulacaoInvestimento } from '@/hooks/useSimulacaoInvestimento'
import { useCupomValidator } from '@/hooks/useCupomValidator'
import { InvestChart } from '@/components/RendimentoChart'
import { useLanguage } from '@/components/LanguageProvider'
import { getLocalizedPath } from '@/lib/i18n'
import { hasBackendUrl } from '@/lib/backend'

export default function InvestidoresPageContent() {
  const router = useRouter()
  const { localeSegment, t } = useLanguage()
  const { usinas, backendUnavailable } = useNiveisOperacao()
  const plantLevels = [1, 2, 3]
  const backendConfigured = hasBackendUrl()

  const [usinaSelecionada, setUsinaSelecionada] = useState<string>('default')
  const [quantidadeVitisInput, setQuantidadeVitisInput] = useState<string>('')
  const [mesesInput, setMesesInput] = useState<string>('')
  const [fatorNivelInput, setFatorNivelInput] = useState<string>('1')
  const [cupom, setCupom] = useState<string>('')

  const { cupomValido, desconto } = useCupomValidator(cupom)

  const quantidadeVitis = Number(quantidadeVitisInput) || 0
  const meses = Number(mesesInput) || 0
  const nivel = Number(fatorNivelInput) || 0
  const valorInvestido = useValorInvestido(usinas, usinaSelecionada, quantidadeVitis, desconto)

  const { totalYield, dateResult, graficoDados, calcular } = useSimulacaoInvestimento()

  const handleCalculate = () => {
    if (!backendConfigured) {
      alert(t.investorsPage.backendConfigError)
      return
    }

    if (!quantidadeVitis || !meses || usinaSelecionada === 'default' || !nivel) {
      alert(t.investorsPage.fillFieldsAlert)
      return
    }

    calcular({
      vitis: quantidadeVitis,
      meses,
      usina_id: usinaSelecionada,
      nivel,
      cupom,
      errorPrefix: t.investorsPage.errorPrefix,
      serverError: t.investorsPage.serverError,
    })
  }

  return (
    <main className="main">
      <div className="page-title dark-background" style={{ backgroundImage: "url('/img/hero-carousel/hero-carousel-6.jpg')" }}>
        <div className="container position-relative">
          <h1>{t.investorsPage.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><button onClick={() => router.push(getLocalizedPath(localeSegment, 'home'))} style={{ fontWeight: 600, color: 'white' }}>{t.common.home}</button></li>
              <li className="current">{t.investorsPage.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="alt-services-2" className="alt-services-2 section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1">
              <h3>{t.investorsPage.headline}</h3>
              <h5>{t.investorsPage.vitisTitle}</h5>
              <p>{t.investorsPage.vitisText}</p>
              <h5 className="mt-4">{t.investorsPage.levelsTitle}</h5>
              <p>{t.investorsPage.levelsIntro}</p>

              <div className="row mt-2">
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-1-circle flex-shrink-0"></i>
                  <div>
                    <h4>{t.investorsPage.level1Title}</h4>
                    <p>{t.investorsPage.level1Text}</p>
                  </div>
                </div>

                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-2-circle flex-shrink-0"></i>
                  <div>
                    <h4>{t.investorsPage.level2Title}</h4>
                    <p>{t.investorsPage.level2Text}</p>
                  </div>
                </div>

                <div className="col-lg-12 icon-box d-flex">
                  <i className="bi bi-3-circle flex-shrink-0"></i>
                  <div>
                    <h4>{t.investorsPage.level3Title}</h4>
                    <p>{t.investorsPage.level3Text}</p>
                  </div>
                </div>
              </div>

              <p className="mt-3">{t.investorsPage.levelsGuidance}</p>
              <h6>{t.investorsPage.simulatePrompt}</h6>

              <select
                className="form-select mb-3 mt-3 w-60"
                value={usinaSelecionada}
                onChange={(e) => setUsinaSelecionada(e.target.value)}
              >
                <option value="default">{t.investorsPage.selectPlant}</option>
                {usinas.map((usina) => (
                  <option key={usina.id} value={usina.id}>{usina.nome}</option>
                ))}
              </select>

              {usinaSelecionada === 'default' && (
                <p className="mb-3">{t.investorsPage.selectPlantGuidance}</p>
              )}

              {backendUnavailable && (
                <div className="alert alert-warning mb-3" role="alert">
                  {t.investorsPage.backendConfigError}
                </div>
              )}

              <div className="card shadow-sm p-4">
                <h5 className="mb-4">
                  <i className="bi bi-calculator-fill me-2"></i>{t.investorsPage.analysisTitle}
                </h5>

                <div className="row g-4 align-items-end">
                  <div className="col-md-4">
                    <label className="form-label"><strong>{t.investorsPage.investedValue}</strong></label>
                    <div className="form-control bg-light" id="vitisResult">{valorInvestido}</div>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="vitisInput" className="form-label">{t.investorsPage.quantity}</label>
                    <input
                      type="number"
                      className="form-control"
                      id="vitisInput"
                      placeholder="Ex: 1"
                      value={quantidadeVitisInput}
                      onChange={(e) => setQuantidadeVitisInput(e.target.value)}
                      disabled={usinaSelecionada === 'default' || backendUnavailable}
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="monthsInput" className="form-label">{t.investorsPage.period}</label>
                    <input
                      type="number"
                      className="form-control"
                      id="monthsInput"
                      placeholder="Ex: 1"
                      value={mesesInput}
                      onChange={(e) => setMesesInput(e.target.value)}
                      disabled={backendUnavailable}
                    />
                  </div>
                </div>

                <div className="col-md-4 pt-2">
                  <label htmlFor="fatorNivelInput" className="form-label">{t.investorsPage.plantLevel}</label>
                  <select
                    className="form-select"
                    id="fatorNivelInput"
                    value={fatorNivelInput}
                    onChange={(e) => setFatorNivelInput(e.target.value)}
                    disabled={usinaSelecionada === 'default' || backendUnavailable}
                  >
                    {plantLevels.map((level) => (
                      <option key={level} value={String(level)}>
                        {t.investorsPage.levelOption(level)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <label htmlFor="cupom" className="form-label">{t.investorsPage.coupon}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cupom"
                      placeholder={t.investorsPage.optional}
                      value={cupom}
                      onChange={(e) => setCupom(e.target.value)}
                      disabled={backendUnavailable}
                    />

                    {cupom !== '' && (
                      <small className={`mt-1 ${cupomValido ? 'text-success' : 'text-danger'}`}>
                        {cupomValido === null ? t.investorsPage.validating : cupomValido ? t.investorsPage.validCoupon : t.investorsPage.invalidCoupon}
                      </small>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <button className="btn btn-primary w-100" onClick={handleCalculate} disabled={backendUnavailable}>
                    <i className="bi bi-graph-up-arrow me-2"></i>{t.investorsPage.simulateButton}
                  </button>
                </div>

                <div className="row mt-4 text-center">
                  <div className="col-md-6">
                    <div className="result-box p-3 border rounded bg-light">
                      <strong>{t.investorsPage.accumulatedYield}</strong><br />
                      <span id="totalYield">{totalYield}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="result-box p-3 border rounded bg-light">
                      <strong>{t.investorsPage.finalDate}</strong><br />
                      <span id="dateResult">{dateResult}</span>
                    </div>
                  </div>
                  {graficoDados.length > 0 && (
                    <div className="mt-5">
                      <h5 className="text-center">{t.investorsPage.chartTitle}</h5>
                      <InvestChart
                        data={graficoDados}
                        monthLabel={t.common.monthLabel}
                        datasetLabel={t.investorsPage.chartDataset}
                        yAxisLabel={t.investorsPage.chartYAxis}
                        xAxisLabel={t.investorsPage.chartXAxis}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="features-image col-lg-5 order-1 order-lg-2">
              <Image src="/img/hero-carousel/hero-carousel-3.jpg" alt="Investimento" className="img-fluid" width={500} height={350} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
