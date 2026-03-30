import { useState } from 'react'
import { getBackendUrl, parseJsonResponse } from '@/lib/backend'

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
      const response = await fetch(getBackendUrl('/investidores/cadastrar/'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const resposta = await parseJsonResponse<{ errors?: unknown; error?: string }>(response)

      if (response.ok) {
        setSucesso(true)
      } else {
        setErro(resposta.errors ? JSON.stringify(resposta.errors) : resposta.error || 'Erro ao cadastrar')
      }
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Erro ao enviar os dados.')
    } finally {
      setLoading(false)
    }
  }

  return { cadastrar, loading, sucesso, erro }
}
