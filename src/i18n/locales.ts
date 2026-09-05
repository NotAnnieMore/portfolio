export const supportedLocales = ['en', 'pt'] as const
export type Locale = (typeof supportedLocales)[number]

export const LANGUAGE_STORAGE_KEY = 'portfolio-language'

export function isSupportedLocale(value: unknown): value is Locale {
  return supportedLocales.includes(value as Locale)
}

export function toI18nLanguage(locale: Locale) {
  return locale === 'pt' ? 'pt-PT' : 'en'
}

function localeFromPath(): Locale | null {
  const segment = window.location.pathname.split('/')[1]
  return isSupportedLocale(segment) ? segment : null
}

function localeFromBrowser(): Locale {
  const languages = navigator.languages.length
    ? navigator.languages
    : [navigator.language]

  return languages.some((language) => language.toLowerCase().startsWith('pt'))
    ? 'pt'
    : 'en'
}

export function detectPreferredLocale(): Locale {
  const pathLocale = localeFromPath()
  if (pathLocale) return pathLocale

  const storedLocale = localStorage.getItem(LANGUAGE_STORAGE_KEY)
  if (isSupportedLocale(storedLocale)) return storedLocale

  return localeFromBrowser()
}

