import { useEffect, useState } from 'react'
import { Usina } from '@/types/Usina'

export function useNiveisOperacao() {
  const [usinas, setUsinas] = useState<Usina[]>([])

  useEffect(() => {
    fetch('http://localhost:8000/usinas/listar/')
      .then((res) => res.json())
      .then((data) => setUsinas(data))
      .catch((err) => console.error('Erro ao buscar usinas:', err))
  }, [])

  return { usinas }
}
