import { useTranslation } from 'react-i18next'

import { PageIntro } from '../components/layout/PageIntro'
import { usePageMeta } from '../utils/usePageMeta'

export function ProjectsPage() {
  const { t } = useTranslation()
  usePageMeta(t('pages.projects.metaTitle'), t('pages.projects.metaDescription'))

  return (
    <PageIntro
      description={t('pages.projects.description')}
      title={t('pages.projects.title')}
    />
  )
}

