import { useState } from 'react'
import { getBackendUrl, parseJsonResponse } from '@/lib/backend'

export interface IngressantePayload {
  name: string
  email: string
  phone: string
  subdivisions: number[]
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
      const response = await fetch(getBackendUrl('/api/website/candidates/'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        await parseJsonResponse(response)
      }

      setSucesso(true)
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Erro de conexão com o servidor.')
    } finally {
      setLoading(false)
    }
  }

  return { cadastrar, loading, erro, sucesso }
}
