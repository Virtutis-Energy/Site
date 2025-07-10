import { useEffect, useState } from 'react'

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

      try {
        const response = await fetch(`http://localhost:8000/cupom/validar/?nome=${encodeURIComponent(cupom)}`, {
          method: 'GET'
        })

        const data: CupomResponse = await response.json()

        if (data.valido && data.percent_discount) {
          setCupomValido(true)
          setDesconto(parseFloat(data.percent_discount))
        } else {
          setCupomValido(false)
          setDesconto(0)
        }
      } catch (err) {
        setCupomValido(false)
        setDesconto(0)
      }
    }

    validarCupom()
  }, [cupom])

  return { cupomValido, desconto }
}
