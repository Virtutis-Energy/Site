// hooks/useIpcaData.ts
import { useEffect, useState } from 'react'

export function useIpcaData() {
  const [ipcaData, setIpcaData] = useState<{ year: number; baseYield: number }[]>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL_BACK_END}/ipca/listar`)
      .then((res) => res.json())
      .then((data) => setIpcaData(data))
      .catch((err) => console.error('Erro ao buscar IPCA:', err))
  }, [])

  return { ipcaData }
}
