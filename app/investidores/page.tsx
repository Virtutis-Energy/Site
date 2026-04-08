'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useNiveisOperacao } from '@/hooks/useNiveisOperacao'
import { useValorInvestido } from '@/hooks/useValorInvestido'
import { useState } from 'react'
import { useSimulacaoInvestimento } from '@/hooks/useSimulacaoInvestimento'
import { useCupomValidator } from '@/hooks/useCupomValidator'
import { InvestChart } from '@/components/RendimentoChart'


export default function Investidores() {
  const router = useRouter()
  const { usinas } = useNiveisOperacao()



  // Estados de formulário
  const [usinaSelecionada, setUsinaSelecionada] = useState<string>('default')
  const [quantidadeVitisInput, setQuantidadeVitisInput] = useState<string>('')
  const [mesesInput, setMesesInput] = useState<string>('')
  const [fatorNivelInput, setFatorNivelInput] = useState<string>('')
  const [cupom, setCupom] = useState<string>('')

  const { cupomValido, desconto } = useCupomValidator(cupom)

  const quantidadeVitis = Number(quantidadeVitisInput) || 0
  const meses = Number(mesesInput) || 0
  const nivel = Number(fatorNivelInput) || 0
  const valorInvestido = useValorInvestido(usinas, usinaSelecionada, quantidadeVitis, desconto)

  const {
    totalYield,
    dateResult,
    yieldPercentage,
    graficoDados, // ← AQUI
    calcular
  } = useSimulacaoInvestimento()

  const handleCalculate = () => {
    if (!quantidadeVitis || !meses || usinaSelecionada === 'default') {
      alert('Preencha todos os campos corretamente.')
      return
    }

    calcular({
      vitis: quantidadeVitis,
      meses,
      usina_id: usinaSelecionada,
      nivel,
      cupom
    })
  }
  return (
    <main className="main">
      <div
        className="page-title dark-background"
        style={{ backgroundImage: "url('/img/hero-carousel/hero-carousel-6.jpg')" }}
      >
        <div className="container position-relative">
          <h1>Investidores</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><button onClick={() => router.push('/')} style={{ fontWeight: 600, color: 'white' }}>Home</button></li>
              <li className="current">Investidores</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="alt-services-2" className="alt-services-2 section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1">
              <h3>Venha ser Investidor Virtutis Energy</h3>

              <h5>Como funcionam os Vitis? </h5>

              <p>Os Vitis são notas comerciais emitidas pelas usinas da Virtutis Energy, proporcionando uma rentabilidade
                de até 2,35% a.m., em proventos mensais. Com os Vitis, os investidores desfrutam de total liberdade para
                realizar aportes e cessões conforme desejarem, maximizando sua flexibilidade financeira!
              </p>

              <h6>Faça aqui sua <strong>simulação</strong></h6>

              <select
                className="form-select mb-3 mt-3 w-60"
                value={usinaSelecionada}
                onChange={(e) => setUsinaSelecionada(e.target.value)}
              >
                <option value="default">Selecione a usina</option>
                {usinas.map((usina) => (
                  <option key={usina.id} value={usina.id}>{usina.nome}</option>
                ))}
              </select>

              <div className="card shadow-sm p-4">
                <h5 className="mb-4">
                  <i className="bi bi-calculator-fill me-2"></i>Analise de Investimento
                </h5>

                <div className="row g-4 align-items-end">
                  <div className="col-md-4">
                    <label className="form-label"><strong>Valor Investido</strong></label>
                    <div className="form-control bg-light" id="vitisResult">
                      {valorInvestido}
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="vitisInput" className="form-label">Quantidade de Vitis</label>
                    <input
                      type="number"
                      className="form-control"
                      id="vitisInput"
                      placeholder="Ex: 1"
                      value={quantidadeVitisInput}
                      onChange={(e) => setQuantidadeVitisInput(e.target.value)}
                      disabled={usinaSelecionada === 'default'}
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="monthsInput" className="form-label">Período (em meses)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="monthsInput"
                      placeholder="Ex: 1"
                      value={mesesInput}
                      onChange={(e) => setMesesInput(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-4 pt-2">
                  <label htmlFor="fatorNivelInput" className="form-label">Nível da usina</label>
                  <input
                    type="number"
                    className="form-control"
                    id="fatorNivelInput"
                    placeholder="Ex: 1"
                    value={fatorNivelInput}
                    onChange={(e) => setFatorNivelInput(e.target.value)}
                  />
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <label htmlFor="cupom" className="form-label">Cupom de Desconto</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cupom"
                      placeholder="Opcional"
                      value={cupom}
                      onChange={(e) => setCupom(e.target.value)}
                    />

                    {cupom !== '' && (
                      <small className={`mt-1 ${cupomValido ? 'text-success' : 'text-danger'}`}>
                        {cupomValido === null ? 'Validando...' : cupomValido ? 'Cupom válido!' : 'Cupom inválido'}
                      </small>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <button className="btn btn-primary w-100" onClick={handleCalculate}>
                    <i className="bi bi-graph-up-arrow me-2"></i>Simular Investimento
                  </button>
                </div>

                <div className="row mt-4 text-center">
                  <div className="col-md-6">
                    <div className="result-box p-3 border rounded bg-light">
                      <strong>Proventos Acumulados</strong><br />
                      <span id="totalYield">{totalYield}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="result-box p-3 border rounded bg-light">
                      <strong>Data Final</strong><br />
                      <span id="dateResult">{dateResult}</span>
                    </div>
                  </div>
                  {graficoDados.length > 0 && (
                    <div className="mt-5">
                      <h5 className="text-center">Evolução Mensal do Rendimento</h5>
                      <InvestChart data={graficoDados} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="features-image col-lg-5 order-1 order-lg-2">
              <Image
                src="/img/hero-carousel/hero-carousel-3.jpg"
                alt="Investimento"
                className="img-fluid"
                width={500}
                height={350}
              />
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}
