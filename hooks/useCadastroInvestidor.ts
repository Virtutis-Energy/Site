import { useState } from 'react'

interface CadastroData {
  cpf_cnpj: string
  nome: string
  email: string
  telefone: string
}

export function useCadastroInvestidor() {
  const [loading, setLoading] = useState(false)
  const [sucesso, setSucesso] = useState(false)
  const [erro, setErro] = useState<string | null>(null)

  const cadastrar = async (data: CadastroData) => {
    setLoading(true)
    setErro(null)
    setSucesso(false)

    try {
      const response = await fetch(`${process.env.NEXT_URL_BACK_END}/investidores/cadastrar/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const resposta = await response.json()

      if (response.ok) {
        setSucesso(true)
      } else {
        setErro(resposta.errors ? JSON.stringify(resposta.errors) : resposta.error || 'Erro ao cadastrar')
      }
    } catch (e) {
      setErro('Erro ao enviar os dados.')
    } finally {
      setLoading(false)
    }
  }

  return { cadastrar, loading, sucesso, erro }
}
