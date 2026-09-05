import { useTranslation } from 'react-i18next'

import { PageIntro } from '../components/layout/PageIntro'
import { usePageMeta } from '../utils/usePageMeta'

export function HomePage() {
  const { t } = useTranslation()
  usePageMeta(t('pages.home.metaTitle'), t('pages.home.metaDescription'))

  return (
    <PageIntro
      description={t('pages.home.description')}
      eyebrow={t('pages.home.eyebrow')}
      title={t('pages.home.title')}
    />
  )
}

