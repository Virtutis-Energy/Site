import { useEffect, useState } from 'react'
import { Usina } from '@/types/Usina'


export function useNiveisOperacao() {
  const [usinas, setUsinas] = useState<Usina[]>([])

  useEffect(() => {
    console.log('Valor de NEXT_PUBLIC_URL_BACK_END:', process.env.NEXT_PUBLIC_URL_BACK_END) // Debug
    fetch(`${process.env.NEXT_PUBLIC_URL_BACK_END}/usinas/listar/`)
      .then((res) => res.json())
      .then((data) => setUsinas(data))
      .catch((err) => console.error('Erro ao buscar usinas:', err))
  }, [])

  return { usinas }
}
