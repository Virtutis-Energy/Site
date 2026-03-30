import { useEffect, useState } from 'react'
import { Usina } from '@/types/Usina'
import { getBackendUrl, parseJsonResponse } from '@/lib/backend'


export function useNiveisOperacao() {
  const [usinas, setUsinas] = useState<Usina[]>([])

  useEffect(() => {
    fetch(getBackendUrl('/usinas/listar/'))
      .then((res) => parseJsonResponse<Usina[]>(res))
      .then((data) => setUsinas(data))
      .catch((err) => console.error('Erro ao buscar usinas:', err))
  }, [])

  return { usinas }
}
