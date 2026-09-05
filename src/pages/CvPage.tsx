import { useTranslation } from 'react-i18next'

import { PageIntro } from '../components/layout/PageIntro'
import { usePageMeta } from '../utils/usePageMeta'

export function CvPage() {
  const { t } = useTranslation()
  usePageMeta(t('pages.cv.metaTitle'), t('pages.cv.metaDescription'))

  return (
    <PageIntro
      description={t('pages.cv.description')}
      title={t('pages.cv.title')}
    />
  )
}

