import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

import { PageIntro } from '../components/layout/PageIntro'
import { AlsThesisCaseStudy } from '../components/projects/AlsThesisCaseStudy'
import { JobApplicationTrackerCaseStudy } from '../components/projects/JobApplicationTrackerCaseStudy'
import { getProjectBySlug } from '../data/projects'
import type { Project } from '../types/content'
import { usePageMeta } from '../utils/usePageMeta'
import { NotFoundPage } from './NotFoundPage'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <NotFoundPage />
  }

  if (project.id === 'job-application-tracker') {
    return <JobTrackerPage project={project} />
  }

  if (project.id === 'als-thesis') {
    return <AlsThesisPage project={project} />
  }

  return <ProjectPlaceholder project={project} />
}

function AlsThesisPage({ project }: { project: Project }) {
  const { t } = useTranslation()
  const title = t(`${project.translationKey}.title`)
  const description = t('pages.project.alsThesis.metaDescription')
  usePageMeta(`${title} — Ivo Camacho`, description)

  return <AlsThesisCaseStudy project={project} />
}

function JobTrackerPage({ project }: { project: Project }) {
  const { t } = useTranslation()
  const title = t(`${project.translationKey}.title`)
  const description = t('pages.project.jobTracker.metaDescription')
  usePageMeta(`${title} — Ivo Camacho`, description)

  return <JobApplicationTrackerCaseStudy project={project} />
}

function ProjectPlaceholder({ project }: { project: Project }) {
  const { t } = useTranslation()
  const title = t(`${project.translationKey}.title`)
  const description = t(`${project.translationKey}.summary`)
  usePageMeta(`${title} — Ivo Camacho`, description)

  return (
    <PageIntro
      description={description}
      eyebrow={t('pages.project.eyebrow')}
      title={title}
    />
  )
}
