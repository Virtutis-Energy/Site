import { useEffect, useState } from 'react'
import { getBackendUrl, parseJsonResponse } from '@/lib/backend'

export interface Subdivisao {
  id: number
  nome: string
}

export function useSubdivisoes() {
  const [subdivisoes, setSubdivisoes] = useState<Subdivisao[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSubdivisoes = async () => {
      try {
        const res = await fetch(getBackendUrl('/ingressante/subdivisoes/listar/'))
        const data = await parseJsonResponse<Subdivisao[]>(res)
        setSubdivisoes(data)
      } catch (e) {
        console.error('Erro ao carregar subdivisões!', e)
      } finally {
        setLoading(false)
      }
    }

    fetchSubdivisoes()
  }, [])

  return { subdivisoes, loading }
}
