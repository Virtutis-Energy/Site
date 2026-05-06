import { notFound } from 'next/navigation'
import HomePageContent from '@/components/pages/HomePageContent'
import { buildPageMetadata } from '@/lib/seo'
import { isLocaleSegment } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocaleSegment(locale)) {
    return {}
  }

  return buildPageMetadata(locale, 'home', 'Virtutis Energy')
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocaleSegment(locale)) {
    notFound()
  }

  return <HomePageContent />
}
