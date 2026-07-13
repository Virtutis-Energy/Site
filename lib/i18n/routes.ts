import {
  defaultLocaleSegment,
  localeSegments,
  type Locale,
  type LocaleSegment,
  type RouteKey,
} from './types'

export const localeSegmentToLocale: Record<LocaleSegment, Locale> = {
  'pt-br': 'pt-BR',
  'en-us': 'en-US',
  es: 'es-ES',
}

export const localeToSegment: Record<Locale, LocaleSegment> = {
  'pt-BR': 'pt-br',
  'en-US': 'en-us',
  'es-ES': 'es',
}

export const routeSlugs: Record<LocaleSegment, Record<RouteKey, string>> = {
  'pt-br': {
    home: '',
    about: 'sobre',
    clients: 'clientes',
    investors: 'investidores',
    associate: 'associado',
    signUp: 'cadastro',
    privacy: 'privacidade',
    workWithUs: 'trabalhe-conosco',
    subdivisions: 'subdivisoes',
  },
  'en-us': {
    home: '',
    about: 'about-us',
    clients: 'clients',
    investors: 'investors',
    associate: 'associate',
    signUp: 'sign-up',
    privacy: 'privacy-policy',
    workWithUs: 'work-with-us',
    subdivisions: 'departments',
  },
  es: {
    home: '',
    about: 'sobre-nosotros',
    clients: 'clientes',
    investors: 'inversionistas',
    associate: 'asociado',
    signUp: 'registro',
    privacy: 'privacidad',
    workWithUs: 'trabaja-con-nosotros',
    subdivisions: 'subdivisiones',
  },
}

export function isLocaleSegment(value: string): value is LocaleSegment {
  return localeSegments.includes(value as LocaleSegment)
}

export function getLocaleFromSegment(segment: LocaleSegment): Locale {
  return localeSegmentToLocale[segment]
}

export function getLocalizedPath(locale: LocaleSegment, route: RouteKey): string {
  const slug = routeSlugs[locale][route]
  return slug ? `/${locale}/${slug}` : `/${locale}`
}

export function getRouteKeyFromPath(pathname: string): RouteKey | null {
  const segments = pathname.split('/').filter(Boolean)
  const locale = segments[0]

  if (!locale || !isLocaleSegment(locale)) {
    return null
  }

  const slug = segments[1] ?? ''
  const entries = Object.entries(routeSlugs[locale]) as Array<[RouteKey, string]>
  const match = entries.find(([, value]) => value === slug)

  return match?.[0] ?? null
}

export function getRouteKeyFromSlug(
  locale: LocaleSegment,
  slug: string
): RouteKey | null {
  const entries = Object.entries(routeSlugs[locale]) as Array<[RouteKey, string]>
  const match = entries.find(([, value]) => value === slug)
  return match?.[0] ?? null
}

export function getLocalizedPathFromPathname(
  pathname: string,
  targetLocale: LocaleSegment
): string {
  const routeKey = getRouteKeyFromPath(pathname)

  if (!routeKey) {
    return getLocalizedPath(targetLocale, 'home')
  }

  return getLocalizedPath(targetLocale, routeKey)
}

export { defaultLocaleSegment }
