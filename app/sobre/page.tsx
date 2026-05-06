'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { defaultLocaleSegment, getLocalizedPath } from '@/lib/i18n'

export default function SobreRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace(getLocalizedPath(defaultLocaleSegment, 'about'))
  }, [router])

  return null
}
