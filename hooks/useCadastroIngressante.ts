import { useState } from 'react'
import { getBackendUrl, parseJsonResponse } from '@/lib/backend'

export interface IngressantePayload {
  nome: string
  email: string
  telefone: string
  subdivisoes: number[]
}

export function useCadastrarIngressante() {
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [sucesso, setSucesso] = useState(false)

  const cadastrar = async (data: IngressantePayload) => {
    setLoading(true)
    setErro(null)
    setSucesso(false)

    try {
      const response = await fetch(getBackendUrl('/ingressante/cadastrar/'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await parseJsonResponse<{
        success?: boolean
        errors?: Record<string, string> | string
      }>(response)

      if (response.ok && result.success) {
        setSucesso(true)
      } else {
        setErro(
          typeof result.errors === 'object'
            ? Object.values(result.errors).join(', ')
            : result.errors || 'Erro ao cadastrar'
        )
      }
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Erro de conexão com o servidor.')
    } finally {
      setLoading(false)
    }
  }

  return { cadastrar, loading, erro, sucesso }
}
