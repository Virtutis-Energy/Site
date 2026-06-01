export const locales = ['pt-BR', 'en-US'] as const
export const localeSegments = ['pt-br', 'en-us'] as const

export type Locale = (typeof locales)[number]
export type LocaleSegment = (typeof localeSegments)[number]

export const defaultLocale: Locale = 'pt-BR'
export const defaultLocaleSegment: LocaleSegment = 'pt-br'

export type RouteKey =
  | 'home'
  | 'about'
  | 'clients'
  | 'investors'
  | 'associate'
  | 'signUp'
  | 'privacy'
  | 'workWithUs'
  | 'subdivisions'

export const subdivisionOrder = [
  'secretaryEconomy',
  'secretaryHr',
  'administrativeSector',
  'legalSector',
  'structuralSector',
  'technologySector',
  'commercialSector',
  'accountingDepartment',
  'landDepartment',
  'projectsDepartment',
  'worksDepartment',
  'operationsDepartment',
] as const

export type SubdivisionKey = (typeof subdivisionOrder)[number]
