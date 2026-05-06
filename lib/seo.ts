import {
  getLocalizedPath,
  type LocaleSegment,
  type RouteKey,
} from '@/lib/i18n'

export function buildPageMetadata(locale: LocaleSegment, route: RouteKey, title: string) {
  return {
    title,
    alternates: {
      canonical: getLocalizedPath(locale, route),
      languages: {
        'pt-BR': getLocalizedPath('pt-br', route),
        'en-US': getLocalizedPath('en-us', route),
      },
    },
  }
}
