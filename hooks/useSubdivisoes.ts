import { useEffect, useState } from 'react'
import { getBackendUrl, parseJsonResponse } from '@/lib/backend'
import { localSubdivisoes } from '@/lib/localData'

export interface Subdivisao {
  id: number
  nome: string
}

export function useSubdivisoes() {
  const [subdivisoes, setSubdivisoes] = useState<Subdivisao[]>(localSubdivisoes)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSubdivisoes = async () => {
      try {
        const res = await fetch(getBackendUrl('/ingressante/subdivisoes/listar/'))
        const data = await parseJsonResponse<Subdivisao[]>(res)
        setSubdivisoes(data)
      } catch (e) {
        console.warn('Usando subdivisões locais porque a API não respondeu.', e)
      } finally {
        setLoading(false)
      }
    }

    fetchSubdivisoes()
  }, [])

  return { subdivisoes, loading }
}
