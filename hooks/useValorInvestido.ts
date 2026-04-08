import { useMemo } from 'react'

interface Usina {
  id: string | number
  nome: string
  valor_vitis: string | number
}

export function useValorInvestido(
  usinas: Usina[],
  usinaId: string | number,
  quantidade: number,
  desconto: number
) {
  return useMemo(() => {
    const usina = usinas.find((u) => String(u.id) === String(usinaId))
    const valorUnitario = usina ? parseFloat(usina.valor_vitis as string) : 0

    if (!usina || quantidade <= 0 || isNaN(valorUnitario)) return 'R$ 0,00'

    const total = (quantidade * valorUnitario) * (1 - desconto / 100)
    return `R$ ${total.toFixed(2).replace('.', ',')}`
  }, [usinas, usinaId, quantidade, desconto])
}
