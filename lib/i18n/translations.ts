import type { Locale } from './types'
import { ptBRTranslations } from './pt-BR'
import { enUSTranslations } from './en-US'
import { esESTranslations } from './es-ES'

export type Translation = typeof ptBRTranslations

export const translations: Record<Locale, Translation> = {
  'pt-BR': ptBRTranslations,
  'en-US': enUSTranslations,
  'es-ES': esESTranslations,
}
