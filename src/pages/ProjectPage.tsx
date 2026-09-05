import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

import { PageIntro } from '../components/layout/PageIntro'
import { usePageMeta } from '../utils/usePageMeta'

export function ProjectPage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  usePageMeta(t('pages.project.metaTitle'), t('pages.project.metaDescription'))

  return (
    <PageIntro
      description={t('pages.project.description')}
      eyebrow={slug}
      title={t('pages.project.title')}
    />
  )
}

