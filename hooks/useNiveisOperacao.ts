import { useEffect, useState } from 'react'
import { Usina } from '@/types/Usina'


export function useNiveisOperacao() {
  const [usinas, setUsinas] = useState<Usina[]>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL_BACK_END}/usinas/listar/`)
      .then((res) => res.json())
      .then((data) => setUsinas(data))
      .catch((err) => console.error('Erro ao buscar usinas:', err))
  }, [])
console.log(usinas)
  return { usinas }
}
