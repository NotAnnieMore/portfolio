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

function ProjectDetails({
  index,
  project,
}: {
  index: string
  project: Project
}) {
  const { t } = useTranslation()

  return (
    <div>
      <div className="flex items-center gap-3">
        <p className="font-mono text-xs text-green-readable">{index}</p>
        <span aria-hidden="true" className="h-px w-8 bg-green" />
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-green-readable">
          {t(`content.projectCategories.${project.category}`)}
        </p>
      </div>
      <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
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
  const portfolioImage = portfolio.media[0]

  return (
    <section className="border-y border-line bg-surface py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          description={t('pages.home.featured.description')}
          index="01 / 05"
          title={t('pages.home.featured.title')}
        />

        <div className="mt-10 divide-y divide-line sm:mt-12">
          <article className="grid gap-10 pb-12 lg:grid-cols-[minmax(17rem,0.72fr)_minmax(0,1.45fr)] lg:items-center lg:gap-14 sm:pb-14">
            <div>
              <ProjectDetails index="01" project={jobTracker} />
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

          <article className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.72fr)] lg:items-center lg:gap-14">
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
              <ProjectDetails index="02" project={thesis} />
              <ProjectLinks project={thesis} locale={activeLocale} />
            </div>
          </article>

          <article className="grid gap-10 pt-12 sm:pt-14 lg:grid-cols-[minmax(17rem,0.72fr)_minmax(0,1.45fr)] lg:items-center lg:gap-14">
            <div>
              <ProjectDetails index="03" project={portfolio} />
              <ProjectLinks project={portfolio} locale={activeLocale} />
            </div>
            {portfolioImage ? (
              <figure>
                <div className="overflow-hidden border border-line bg-page">
                  <img
                    alt={t(portfolioImage.altKey)}
                    className="h-auto w-full"
                    decoding="async"
                    height={portfolioImage.height}
                    loading={portfolioImage.loading}
                    src={portfolioImage.src}
                    width={portfolioImage.width}
                  />
                </div>
                {portfolioImage.captionKey ? (
                  <figcaption className="mt-3 text-xs leading-5 text-muted">
                    {t(portfolioImage.captionKey)}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
          </article>
        </div>

        <div className="mt-12 flex justify-end">
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
