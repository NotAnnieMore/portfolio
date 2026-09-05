import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useParams } from 'react-router'

import {
  isSupportedLocale,
  LANGUAGE_STORAGE_KEY,
  toI18nLanguage,
  type Locale,
} from '../../i18n/locales'

function replaceLocale(pathname: string, locale: Locale) {
  const segments = pathname.split('/')
  segments[1] = locale
  return segments.join('/') || `/${locale}`
}

export function LanguageToggle() {
  const { i18n, t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  const currentLocale = isSupportedLocale(params.locale) ? params.locale : 'en'
  const nextLocale: Locale = currentLocale === 'en' ? 'pt' : 'en'

  function changeLocale() {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLocale)
    void i18n.changeLanguage(toI18nLanguage(nextLocale))
    navigate(
      {
        pathname: replaceLocale(location.pathname, nextLocale),
        search: location.search,
        hash: location.hash,
      },
      { replace: true },
    )
  }

  return (
    <button
      aria-label={t('language.switchTo', {
        language: nextLocale === 'pt' ? 'Português' : 'English',
      })}
      className="focus-ring min-h-10 min-w-10 px-2 text-sm font-semibold uppercase text-action-readable transition-colors hover:bg-action-soft"
      onClick={changeLocale}
      type="button"
    >
      {nextLocale}
    </button>
  )
}
