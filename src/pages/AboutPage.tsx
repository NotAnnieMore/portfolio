import { useTranslation } from 'react-i18next'

import { PageIntro } from '../components/layout/PageIntro'
import { usePageMeta } from '../utils/usePageMeta'

export function AboutPage() {
  const { t } = useTranslation()
  usePageMeta(t('pages.about.metaTitle'), t('pages.about.metaDescription'))

  return (
    <PageIntro
      description={t('pages.about.description')}
      title={t('pages.about.title')}
    />
  )
}

