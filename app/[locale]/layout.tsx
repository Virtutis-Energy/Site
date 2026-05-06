import { notFound } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LanguageProvider from '@/components/LanguageProvider'
import {
  isLocaleSegment,
  type LocaleSegment,
} from '@/lib/i18n'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocaleSegment(locale)) {
    notFound()
  }

  return (
    <LanguageProvider localeSegment={locale as LocaleSegment}>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  )
}
