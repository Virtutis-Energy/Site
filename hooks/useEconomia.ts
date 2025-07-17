'use client'

import { useState } from 'react'

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
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BACK_END}/investidores/calcular-economia/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ valor_conta: valorLimpo }),
      })

      const data = await response.json()

      if (data.economia_mensal) {
        setEconomia(`Economia de aproximadamente R$ ${data.economia_mensal} por mês!`)
      } else {
        setEconomia('Erro ao calcular.')
      }
    } catch (error) {
      console.error(error)
      setEconomia('Erro ao conectar com o servidor.')
    }
  }

  return { economia, handleCalculate }
}
