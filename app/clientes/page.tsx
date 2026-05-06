'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { defaultLocaleSegment, getLocalizedPath } from '@/lib/i18n'

export default function ClientesRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace(getLocalizedPath(defaultLocaleSegment, 'clients'))
  }, [router])

  return null
}
