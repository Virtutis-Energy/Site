'use client'

import { useState } from 'react'

interface EconomiaMessages {
  emptyValueError: string
  nonPositiveValueError: string
  invalidValueError: string
}

interface EconomiaResultado {
  contaAtual: string
  custoFinal: string
  economiaMensal: string
}

const pontos = [
  { contaInicial: 0, custoFinal: 0 },
  { contaInicial: 100, custoFinal: 90 },
  { contaInicial: 1000, custoFinal: 800 },
  { contaInicial: 2652, custoFinal: 2280 },
  { contaInicial: 10000, custoFinal: 7000 },
] as const

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

function parseCurrencyInput(value: string) {
  const sanitized = value.replace(/\s+/g, '').replace(/R\$/gi, '')

  if (!sanitized) {
    return null
  }

  const filtered = sanitized.replace(/[^\d,.-]/g, '')
  if (!filtered || !/\d/.test(filtered)) {
    return Number.NaN
  }

  const sign = filtered.trim().startsWith('-') ? '-' : ''
  const unsigned = filtered.replace(/-/g, '')

  const lastComma = unsigned.lastIndexOf(',')
  const lastDot = unsigned.lastIndexOf('.')

  let decimalSeparator = ''
  if (lastComma !== -1 && lastDot !== -1) {
    decimalSeparator = lastComma > lastDot ? ',' : '.'
  } else if (lastComma !== -1) {
    const fractional = unsigned.split(',').pop() ?? ''
    decimalSeparator = unsigned.split(',').length === 2 && fractional.length <= 2 ? ',' : ''
  } else if (lastDot !== -1) {
    const fractional = unsigned.split('.').pop() ?? ''
    decimalSeparator = unsigned.split('.').length === 2 && fractional.length <= 2 ? '.' : ''
  }

  let normalized = ''
  if (decimalSeparator) {
    const separatorIndex = unsigned.lastIndexOf(decimalSeparator)
    const integerPart = unsigned.slice(0, separatorIndex).replace(/[^\d]/g, '')
    const decimalPart = unsigned.slice(separatorIndex + 1).replace(/[^\d]/g, '')
    normalized = `${sign}${integerPart || '0'}.${decimalPart}`
  } else {
    normalized = `${sign}${unsigned.replace(/[^\d]/g, '')}`
  }

  const parsed = Number(normalized)
  return Number.isFinite(parsed) ? parsed : Number.NaN
}

function interpolar(contaInicial: number, pontoAnterior: (typeof pontos)[number], pontoSeguinte: (typeof pontos)[number]) {
  return (
    pontoAnterior.custoFinal +
    ((contaInicial - pontoAnterior.contaInicial) / (pontoSeguinte.contaInicial - pontoAnterior.contaInicial)) *
      (pontoSeguinte.custoFinal - pontoAnterior.custoFinal)
  )
}

export function calcularCustoFinal(contaInicial: number) {
  if (contaInicial <= 100) {
    return contaInicial * 0.9
  }

  if (contaInicial >= 10000) {
    return contaInicial * 0.7
  }

  for (let index = 1; index < pontos.length; index += 1) {
    const pontoAnterior = pontos[index - 1]
    const pontoSeguinte = pontos[index]

    if (contaInicial >= pontoAnterior.contaInicial && contaInicial <= pontoSeguinte.contaInicial) {
      return interpolar(contaInicial, pontoAnterior, pontoSeguinte)
    }
  }

  return contaInicial * 0.7
}

export function useEconomia(messages: EconomiaMessages) {
  const [billValue, setBillValue] = useState('')
  const [economia, setEconomia] = useState<EconomiaResultado | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleCalculate = () => {
    if (!billValue.trim()) {
      setEconomia(null)
      setError(messages.emptyValueError)
      return
    }

    const contaInicial = parseCurrencyInput(billValue)

    if (!Number.isFinite(contaInicial)) {
      setEconomia(null)
      setError(messages.invalidValueError)
      return
    }

    if (contaInicial <= 0) {
      setEconomia(null)
      setError(messages.nonPositiveValueError)
      return
    }

    const custoFinal = Math.max(0, calcularCustoFinal(contaInicial))
    const economiaMensal = Math.max(0, contaInicial - custoFinal)

    setError(null)
    setEconomia({
      contaAtual: formatCurrency(contaInicial),
      custoFinal: formatCurrency(custoFinal),
      economiaMensal: formatCurrency(economiaMensal),
    })
  }

  return {
    billValue,
    setBillValue,
    economia,
    error,
    handleCalculate,
  }
}
