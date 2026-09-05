import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'

import { isSupportedLocale } from '../i18n/locales'
import { usePageMeta } from '../utils/usePageMeta'

export function NotFoundPage() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const homeLocale = isSupportedLocale(locale) ? locale : 'en'
  usePageMeta(t('pages.notFound.metaTitle'), t('pages.notFound.metaDescription'), true)

  return (
    <main className="grid min-h-screen place-items-center bg-page px-6 text-ink">
      <div className="max-w-xl text-center">
        <p className="text-sm font-medium text-accent">404</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight">
          {t('pages.notFound.title')}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          {t('pages.notFound.description')}
        </p>
        <Link
          className="focus-ring mt-8 inline-block border-b-2 border-accent pb-1 font-medium"
          to={`/${homeLocale}`}
        >
          {t('pages.notFound.backHome')}
        </Link>
      </div>
    </main>
  )
}

