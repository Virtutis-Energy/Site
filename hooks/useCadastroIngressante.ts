import { useState } from 'react'

export interface IngressantePayload {
  cpf: string
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
      const response = await fetch('http://localhost:8000/ingressante/cadastrar/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

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
      setErro('Erro de conexão com o servidor.')
    } finally {
      setLoading(false)
    }
  }

  return { cadastrar, loading, erro, sucesso }
}
