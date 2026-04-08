import { useMemo } from 'react'

interface Usina {
  id: string | number
  nome: string
  nivel: number
}

export function useCalculoUsina(
  usinas: Usina[],
  usinaId: string | number
) {
  return useMemo(() => {
    const usina = usinas.find((u) => String(u.id) === String(usinaId))

    if (!usina) {
      return {
        usina: null,
        nivel: 0,
        fatorUsina: 0,
      }
    }

    const nivel = Number(usina.nivel ?? 0)
    const fatorUsina = Math.pow(2, nivel)

    return {
      usina,
      nivel,
      fatorUsina,
    }
  }, [usinas, usinaId])
}