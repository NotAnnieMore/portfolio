import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

import { SiteLayout } from '../components/layout/SiteLayout'
import { toI18nLanguage, isSupportedLocale } from '../i18n/locales'
import { NotFoundPage } from '../pages/NotFoundPage'

export function LocaleRoute() {
  const { i18n } = useTranslation()
  const { locale } = useParams()
  const supportedLocale = isSupportedLocale(locale) ? locale : null

  useEffect(() => {
    if (!supportedLocale) return

    const language = toI18nLanguage(supportedLocale)
    document.documentElement.lang = language

    if (i18n.resolvedLanguage !== language) {
      void i18n.changeLanguage(language)
    }
  }, [i18n, supportedLocale])

  if (!supportedLocale) {
    return <NotFoundPage />
  }

  return <SiteLayout />
}

