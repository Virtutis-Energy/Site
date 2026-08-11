import { useEffect, useState } from 'react'
import { getBackendUrl, parseJsonResponse } from '@/lib/backend'

export interface Subdivisao {
  id: number
  name: string
  display_order: number
}

export function useSubdivisoes() {
  const [subdivisoes, setSubdivisoes] = useState<Subdivisao[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSubdivisoes = async () => {
      try {
        const res = await fetch(getBackendUrl('/api/website/subdivisions/'))
        const data = await parseJsonResponse<Subdivisao[]>(res)
        setSubdivisoes([...data].sort((a, b) => a.display_order - b.display_order))
      } catch (e) {
        console.warn('Não foi possível carregar as subdivisões.', e)
      } finally {
        setLoading(false)
      }
    }

    fetchSubdivisoes()
  }, [])

  return { subdivisoes, loading }
}
