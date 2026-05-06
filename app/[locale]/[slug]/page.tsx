import { notFound } from 'next/navigation'
import type { ComponentType } from 'react'
import SobreNosPageContent from '@/components/pages/SobreNosPageContent'
import ClientesPageContent from '@/components/pages/ClientesPageContent'
import InvestidoresPageContent from '@/components/pages/InvestidoresPageContent'
import CadastroPageContent from '@/components/pages/CadastroPageContent'
import PrivacidadePageContent from '@/components/pages/PrivacidadePageContent'
import FormularioIngressanteContent from '@/components/pages/FormularioIngressanteContent'
import SubdivisoesPageContent from '@/components/pages/SubdivisoesPageContent'
import { buildPageMetadata } from '@/lib/seo'
import {
  getLocaleFromSegment,
  getRouteKeyFromSlug,
  isLocaleSegment,
  translations,
  type LocaleSegment,
  type RouteKey,
} from '@/lib/i18n'

const pageComponents: Record<Exclude<RouteKey, 'home'>, ComponentType> = {
  about: SobreNosPageContent,
  clients: ClientesPageContent,
  investors: InvestidoresPageContent,
  signUp: CadastroPageContent,
  privacy: PrivacidadePageContent,
  workWithUs: FormularioIngressanteContent,
  subdivisions: SubdivisoesPageContent,
}

function getPageTitle(locale: LocaleSegment, routeKey: RouteKey) {
  const t = translations[getLocaleFromSegment(locale)]

  switch (routeKey) {
    case 'about':
      return t.aboutPage.title
    case 'clients':
      return t.clientsPage.title
    case 'investors':
      return t.investorsPage.title
    case 'signUp':
      return t.signUpPage.title
    case 'privacy':
      return t.privacyPage.title
    case 'workWithUs':
      return t.workWithUsPage.title
    case 'subdivisions':
      return t.subdivisionsPage.title
    default:
      return 'Virtutis Energy'
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  if (!isLocaleSegment(locale)) {
    return {}
  }

  const routeKey = getRouteKeyFromSlug(locale, slug)

  if (!routeKey || routeKey === 'home') {
    return {}
  }

  return buildPageMetadata(locale, routeKey, getPageTitle(locale, routeKey))
}

export default async function LocalizedSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  if (!isLocaleSegment(locale)) {
    notFound()
  }

  const routeKey = getRouteKeyFromSlug(locale, slug)

  if (!routeKey || routeKey === 'home') {
    notFound()
  }

  const PageComponent = pageComponents[routeKey as Exclude<RouteKey, 'home'>]

  return <PageComponent />
}
