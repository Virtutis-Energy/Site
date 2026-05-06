'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { defaultLocaleSegment, getLocalizedPath } from '@/lib/i18n'

export default function InvestidoresRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace(getLocalizedPath(defaultLocaleSegment, 'investors'))
  }, [router])

  return null
}
