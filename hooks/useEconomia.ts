'use client'

import { useState } from 'react'
import { getBackendUrl, parseJsonResponse } from '@/lib/backend'

export function useEconomia() {
  const [economia, setEconomia] = useState<string | null>(null)

  const handleCalculate = async () => {
    const input = document.getElementById('monthlyBill') as HTMLInputElement
    if (!input || !input.value) return

    const valorLimpo = input.value
      .replace('R$ ', '')
      .replace('.', '')
      .replace(',', '.')

    try {
      const response = await fetch(getBackendUrl('/investidores/calcular-economia/'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ valor_conta: valorLimpo }),
      })

      const data = await parseJsonResponse<{ economia_mensal?: string }>(response)

      if (data.economia_mensal) {
        setEconomia(`Economia de aproximadamente R$ ${data.economia_mensal} por mês!`)
      } else {
        setEconomia('Erro ao calcular.')
      }
    } catch (error) {
      console.error(error)
      setEconomia(error instanceof Error ? error.message : 'Erro ao conectar com o servidor.')
    }
  }

  return { economia, handleCalculate }
}
