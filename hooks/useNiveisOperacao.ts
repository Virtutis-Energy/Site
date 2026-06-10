import { useEffect, useState } from 'react'
import { Usina } from '@/types/Usina'
import { getBackendUrl, hasBackendUrl, parseJsonResponse } from '@/lib/backend'


export function useNiveisOperacao() {
  const [usinas, setUsinas] = useState<Usina[]>([])
  const [backendUnavailable, setBackendUnavailable] = useState(false)

  useEffect(() => {
    if (!hasBackendUrl()) {
      setBackendUnavailable(true)
      return
    }

    fetch(getBackendUrl('/usinas/listar/'))
      .then((res) => parseJsonResponse<Usina[]>(res))
      .then((data) => setUsinas(data))
      .catch((err) => console.error('Erro ao buscar usinas:', err))
  }, [])

  return { usinas, backendUnavailable }
}
