import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

import { PageIntro } from '../components/layout/PageIntro'
import { getProjectBySlug } from '../data/projects'
import { usePageMeta } from '../utils/usePageMeta'
import { NotFoundPage } from './NotFoundPage'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <NotFoundPage />
  }

  return <ProjectPlaceholder slug={project.slug} />
}

function ProjectPlaceholder({ slug }: { slug: string }) {
  const { t } = useTranslation()
  usePageMeta(t('pages.project.metaTitle'), t('pages.project.metaDescription'))

  return (
    <PageIntro
      description={t('pages.project.description')}
      eyebrow={slug}
      title={t('pages.project.title')}
    />
  )
}
