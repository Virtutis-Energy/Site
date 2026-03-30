// hooks/useIpcaData.ts
import { useEffect, useState } from 'react'
import { getBackendUrl, parseJsonResponse } from '@/lib/backend'

export function useIpcaData() {
  const [ipcaData, setIpcaData] = useState<{ year: number; baseYield: number }[]>([])

  useEffect(() => {
    fetch(getBackendUrl('/ipca/listar'))
      .then((res) => parseJsonResponse<{ year: number; baseYield: number }[]>(res))
      .then((data) => setIpcaData(data))
      .catch((err) => console.error('Erro ao buscar IPCA:', err))
  }, [])

  return { ipcaData }
}
