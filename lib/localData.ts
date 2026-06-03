export interface LocalUsina {
  id: string
  nome: string
  valor_vitis: number
}

export interface LocalSubdivisao {
  id: number
  nome: string
}

export const localUsinas: LocalUsina[] = [
  { id: '1', nome: 'Usina Fortaleza Norte', valor_vitis: 100 },
  { id: '2', nome: 'Usina Fortaleza Sul', valor_vitis: 120 },
  { id: '3', nome: 'Usina Sobral', valor_vitis: 140 },
]

export const localSubdivisoes: LocalSubdivisao[] = [
  { id: 1, nome: 'Secretaria de Economia' },
  { id: 2, nome: 'Secretaria de Recursos Humanos' },
  { id: 3, nome: 'Setor Administrativo' },
  { id: 4, nome: 'Setor Jurídico' },
  { id: 5, nome: 'Setor Estrutural' },
  { id: 6, nome: 'Setor Tecnológico' },
  { id: 7, nome: 'Setor Comercial' },
  { id: 8, nome: 'Departamento de Contabilidade' },
  { id: 9, nome: 'Departamento de Terrenos' },
  { id: 10, nome: 'Departamento de Projetos' },
  { id: 11, nome: 'Departamento de Obras' },
  { id: 12, nome: 'Departamento de Operação' },
]

export const localIpcaData = [
  { year: 2021, baseYield: 10.06 },
  { year: 2022, baseYield: 5.79 },
  { year: 2023, baseYield: 4.62 },
  { year: 2024, baseYield: 4.3 },
]

export const localCouponDiscounts: Record<string, number> = {
  VITIS10: 10,
  VITIS15: 15,
  VITIS20: 20,
}

export function formatCurrency(value: number) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`
}

export function parseCurrencyInput(value: string) {
  const cleaned = value.replace('R$ ', '').replace(/\./g, '').replace(',', '.')
  const numberValue = Number(cleaned)
  return Number.isFinite(numberValue) ? numberValue : 0
}

export function calculateLocalEconomy(inputValue: string) {
  const bill = parseCurrencyInput(inputValue)
  return bill > 0 ? formatCurrency(bill * 0.3) : null
}

export function calculateLocalInvestment({
  vitis,
  meses,
  usinaId,
  nivel,
  cupom,
}: {
  vitis: number
  meses: number
  usinaId: string
  nivel: number
  cupom?: string
}) {
  const usina =
    localUsinas.find((item) => String(item.id) === String(usinaId)) ?? localUsinas[0]
  const desconto = cupom ? localCouponDiscounts[cupom.trim().toUpperCase()] ?? 0 : 0
  const valorUnitario = usina.valor_vitis
  const baseInvested = vitis * valorUnitario * (1 - desconto / 100)
  const monthlyRate = Math.min(0.0235 + Math.max(nivel - 1, 0) * 0.0025, 0.05)
  const accumulatedSeries = Array.from({ length: Math.max(meses, 0) }, (_, index) => {
    const monthIndex = index + 1
    return Number((baseInvested * Math.pow(1 + monthlyRate, monthIndex)).toFixed(2))
  })
  const finalAmount = accumulatedSeries[accumulatedSeries.length - 1] ?? baseInvested
  const finalDate = new Date()
  finalDate.setMonth(finalDate.getMonth() + Math.max(meses, 0))

  return {
    total_acumulado: finalAmount,
    data_final: finalDate.toLocaleDateString('pt-BR'),
    percentual_rendimento: monthlyRate * 100,
    valor_unitario: valorUnitario,
    desconto,
    valorizacao: accumulatedSeries,
  }
}
