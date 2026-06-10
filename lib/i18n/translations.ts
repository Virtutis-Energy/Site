import type { Locale } from './types'
import { ptBRTranslations } from './pt-BR'
import { enUSTranslations } from './en-US'

export type Translation = typeof ptBRTranslations

export const translations: Record<Locale, Translation> = {
  'pt-BR': ptBRTranslations,
  'en-US': enUSTranslations,
}
