import { Navigate } from 'react-router'

import { detectPreferredLocale } from '../i18n/locales'

export function LanguageRedirect() {
  return <Navigate to={`/${detectPreferredLocale()}`} replace />
}

