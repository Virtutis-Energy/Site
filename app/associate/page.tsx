'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { defaultLocaleSegment, getLocalizedPath } from '@/lib/i18n'

export default function AssociateRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace(getLocalizedPath(defaultLocaleSegment, 'associate'))
  }, [router])

  return null
}
