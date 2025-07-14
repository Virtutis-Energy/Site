import { useEffect, useState } from 'react'

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
        const res = await fetch('http://localhost:8000/ingressante/subdivisoes/listar/')
        const data = await res.json()
        setSubdivisoes(data)
      } catch (e) {
        console.error('Erro ao carregar subdivisões', e)
      } finally {
        setLoading(false)
      }
    }

    fetchSubdivisoes()
  }, [])

  return { subdivisoes, loading }
}
