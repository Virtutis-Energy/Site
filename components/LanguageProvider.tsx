'use client'

import { createContext, useContext } from 'react'
import {
  getLocaleFromSegment,
  type Locale,
  type LocaleSegment,
  translations,
} from '@/lib/i18n'

interface LanguageContextValue {
  locale: Locale
  localeSegment: LocaleSegment
  t: (typeof translations)[Locale]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export default function LanguageProvider({
  localeSegment,
  children,
}: {
  localeSegment: LocaleSegment
  children: React.ReactNode
}) {
  const locale = getLocaleFromSegment(localeSegment)

  return (
    <LanguageContext.Provider
      value={{
        locale,
        localeSegment,
        t: translations[locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
