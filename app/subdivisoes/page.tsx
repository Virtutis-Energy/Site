'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { defaultLocaleSegment, getLocalizedPath } from '@/lib/i18n'

export default function SubdivisoesRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace(getLocalizedPath(defaultLocaleSegment, 'subdivisions'))
  }, [router])

  return null
}
