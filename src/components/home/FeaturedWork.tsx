import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'

import { getFeaturedProjects } from '../../data/projects'
import { isSupportedLocale } from '../../i18n/locales'
import type { Project } from '../../types/content'
import { SectionHeading } from './SectionHeading'

function ProjectLinks({ project, locale }: { project: Project; locale: string }) {
  const { t } = useTranslation()

  return (
    <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
      <Link
        className="focus-ring border-b border-action pb-1 transition-colors hover:border-action-hover"
        to={`/${locale}/projects/${project.slug}`}
      >
        {t('pages.home.actions.readCaseStudy')}
      </Link>
      {project.links.map((link) => (
        <a
          className={`focus-ring border-b pb-1 transition-colors ${
            link.kind === 'live'
              ? 'border-action text-action-readable hover:border-action-hover'
              : 'border-line hover:border-action'
          }`}
          href={link.href}
          key={`${link.kind}-${link.href}`}
          rel="noreferrer"
          target="_blank"
        >
          {link.labelKey
            ? t(link.labelKey)
            : t(`content.links.${link.kind}`)}{' '}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  )
}

function ProjectDetails({ project }: { project: Project }) {
  const { t } = useTranslation()

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
        {t(`content.projectCategories.${project.category}`)}
      </p>
      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
        {t(`${project.translationKey}.title`)}
      </h3>
      <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
        {t(`${project.translationKey}.summary`)}
      </p>
      <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
        {project.technologies.join(' · ')}
      </p>
    </div>
  )
}

export function FeaturedWork() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'
  const [jobTracker, thesis, portfolio] = getFeaturedProjects()

  if (!jobTracker || !thesis || !portfolio) return null

  const jobImage = jobTracker.media[0]
  const thesisImage = thesis.media[0]

  return (
    <section className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          description={t('pages.home.featured.description')}
          index="01 / 05"
          title={t('pages.home.featured.title')}
        />

        <div className="mt-20 space-y-28 sm:mt-24 sm:space-y-36">
          <article className="grid gap-10 lg:grid-cols-[minmax(17rem,0.72fr)_minmax(0,1.45fr)] lg:items-center lg:gap-14">
            <div>
              <p className="mb-8 font-mono text-xs text-green-readable">01</p>
              <ProjectDetails project={jobTracker} />
              <ProjectLinks project={jobTracker} locale={activeLocale} />
            </div>
            {jobImage ? (
              <figure>
                <div className="overflow-hidden border border-line bg-page">
                  <img
                    alt={t(jobImage.altKey)}
                    className="h-auto w-full"
                    decoding="async"
                    fetchPriority="high"
                    height={jobImage.height}
                    loading={jobImage.loading}
                    src={jobImage.src}
                    width={jobImage.width}
                  />
                </div>
                {jobImage.captionKey ? (
                  <figcaption className="mt-3 text-xs leading-5 text-muted">
                    {t(jobImage.captionKey)}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
          </article>

          <article className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.72fr)] lg:items-center lg:gap-14">
            {thesisImage ? (
              <figure className="lg:order-1">
                <div className="overflow-hidden border border-line bg-surface">
                  <img
                    alt={t(thesisImage.altKey)}
                    className="h-auto w-full"
                    decoding="async"
                    height={thesisImage.height}
                    loading={thesisImage.loading}
                    src={thesisImage.src}
                    width={thesisImage.width}
                  />
                </div>
                {thesisImage.captionKey ? (
                  <figcaption className="mt-3 text-xs leading-5 text-muted">
                    {t(thesisImage.captionKey)}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
            <div className="lg:order-2">
              <p className="mb-8 font-mono text-xs text-green-readable">02</p>
              <ProjectDetails project={thesis} />
              <ProjectLinks project={thesis} locale={activeLocale} />
            </div>
          </article>

          <article className="grid gap-8 border-y border-line py-10 sm:grid-cols-[5rem_1fr] lg:grid-cols-[8rem_1fr_auto] lg:items-center lg:py-12">
            <p className="font-mono text-xs text-green-readable">03</p>
            <ProjectDetails project={portfolio} />
            <div className="sm:col-start-2 lg:col-start-auto">
              <ProjectLinks project={portfolio} locale={activeLocale} />
            </div>
          </article>
        </div>

        <div className="mt-14 flex justify-end">
          <Link
            className="focus-ring border-b border-ink pb-1 text-sm font-semibold"
            to={`/${activeLocale}/projects`}
          >
            {t('pages.home.actions.viewAllProjects')} →
          </Link>
        </div>
      </div>
    </section>
  )
}
