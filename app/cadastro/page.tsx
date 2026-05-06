'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { defaultLocaleSegment, getLocalizedPath } from '@/lib/i18n'

export default function CadastroRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace(getLocalizedPath(defaultLocaleSegment, 'signUp'))
  }, [router])

  return null
}
