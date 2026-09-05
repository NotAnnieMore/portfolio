import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { en } from './locales/en'
import { ptPT } from './locales/pt-PT'
import { detectPreferredLocale, toI18nLanguage } from './locales'

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    'pt-PT': { translation: ptPT },
  },
  lng: toI18nLanguage(detectPreferredLocale()),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export { i18n }

