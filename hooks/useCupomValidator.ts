import { useEffect, useState } from 'react'
import { getBackendUrl, hasBackendUrl, parseJsonResponse } from '@/lib/backend'

interface CupomResponse {
  valido: boolean
  percent_discount: string
  erro?: string
}

export function useCupomValidator(cupom: string) {
  const [cupomValido, setCupomValido] = useState<boolean | null>(null)
  const [desconto, setDesconto] = useState<number>(0)

  useEffect(() => {
    const validarCupom = async () => {
      if (cupom.trim() === '') {
        setCupomValido(null)
        setDesconto(0)
        return
      }

      if (!hasBackendUrl()) {
        setCupomValido(false)
        setDesconto(0)
        return
      }

      try {
        const response = await fetch(getBackendUrl(`/cupom/validar/?nome=${encodeURIComponent(cupom)}`), {
          method: 'GET'
        })

        const data = await parseJsonResponse<CupomResponse>(response)

        if (data.valido && data.percent_discount) {
          setCupomValido(true)
          setDesconto(parseFloat(data.percent_discount))
        } else {
          setCupomValido(false)
          setDesconto(0)
        }
      } catch (err) {
        console.error(err)
        setCupomValido(false)
        setDesconto(0)
      }
    }

    validarCupom()
  }, [cupom])

  return { cupomValido, desconto }
}
