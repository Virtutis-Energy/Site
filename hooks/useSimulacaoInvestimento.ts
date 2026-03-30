import { useState } from 'react'
import { getBackendUrl, parseJsonResponse } from '@/lib/backend'

interface CalculoResult {
  total_acumulado: number
  data_final: string
  percentual_rendimento: number
  valor_unitario: number
  desconto: number
  valorizacao: number[] // ← adicione isso aqui
} 

export function useSimulacaoInvestimento() {
  const [totalYield, setTotalYield] = useState('R$ 0,00')
  const [dateResult, setDateResult] = useState('__/__/____')
  const [yieldPercentage, setYieldPercentage] = useState('0%')
  const [valorUnitario, setValorUnitario] = useState('R$ 0,00')
  const [descontoAplicado, setDescontoAplicado] = useState<number>(0)
  const [graficoDados, setGraficoDados] = useState<number[]>([])

  const calcular = async ({
    vitis,
    meses,
    usina_id,
    cupom,
  }: {
    vitis: number
    meses: number
    usina_id: string
    cupom?: string
  }) => {
    try {
      const response = await fetch(getBackendUrl('/investidores/calcular-investimento/'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vitis, meses, usina_id, cupom }),
      })

      const data = await parseJsonResponse<CalculoResult & { erro?: string }>(response)

      if (data.erro) {
        alert('Erro: ' + data.erro)
        return
      }

      // Usa os valores retornados pelo backend diretamente
      setTotalYield(`R$ ${data.total_acumulado.toFixed(2).replace('.', ',')}`)
      setDateResult(data.data_final)
      setYieldPercentage(`${data.percentual_rendimento.toFixed(2)}%`)
      setValorUnitario(`R$ ${data.valor_unitario.toFixed(2).replace('.', ',')}`)
      setDescontoAplicado(data.desconto)
      setGraficoDados(data.valorizacao || [])
    } catch (error) {
      console.error('Erro ao calcular investimento:', error)
      alert(error instanceof Error ? error.message : 'Erro ao se comunicar com o servidor.')
    }
  }

  return {
  totalYield,
  dateResult,
  yieldPercentage,
  valorUnitario,
  descontoAplicado,
  graficoDados,
  calcular,
}

}
