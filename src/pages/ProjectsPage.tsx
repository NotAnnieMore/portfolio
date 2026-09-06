import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'

import { EditorialPageHero } from '../components/layout/EditorialPageHero'
import { EditorialSectionIntro } from '../components/layout/EditorialSectionIntro'
import { getOrderedProjects } from '../data/projects'
import { isSupportedLocale } from '../i18n/locales'
import { usePageMeta } from '../utils/usePageMeta'

const projectNoteKeys: Record<string, string> = {
  'job-application-tracker': 'pages.projects.imageNotes.tracker',
  'als-thesis': 'pages.projects.imageNotes.thesis',
  'professional-portfolio': 'pages.projects.imageNotes.portfolio',
}

function ProjectCornerMarks() {
  return (
    <svg
      aria-hidden="true"
      className="absolute -right-5 -top-7 hidden h-11 w-11 overflow-visible text-green sm:block"
      fill="none"
      viewBox="0 0 44 44"
    >
      <path d="M10 25 18 5" stroke="currentColor" strokeLinecap="round" />
      <path d="m18 29 13-7" stroke="currentColor" strokeLinecap="round" />
      <path d="m20 35 14-1" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
}

function ProjectAnnotationArrow({ mirrored }: { mirrored: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`block h-8 w-14 shrink-0 overflow-visible text-green ${
        mirrored ? '-scale-x-100' : ''
      }`}
      fill="none"
      viewBox="0 0 56 34"
    >
      <path
        d="M2 30C25 31 43 23 49 7"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="m49 7-7 4m7-4 1 8"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ProjectsPage() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'
  const projects = getOrderedProjects()

  usePageMeta(t('pages.projects.metaTitle'), t('pages.projects.metaDescription'))

  return (
    <>
      <EditorialPageHero
        annotation={t('pages.projects.annotation')}
        description={t('pages.projects.description')}
        imageHeight={1080}
        imageSrc="/images/page-heroes/projects.webp"
        imageWidth={900}
        title={t('pages.projects.title')}
      />

      <section
        className="scroll-mt-20 bg-surface py-16 sm:py-20 lg:py-24"
        id="featured-projects"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <EditorialSectionIntro
            count={`${String(projects.length).padStart(2, '0')} / 03`}
            description={t('pages.projects.featuredIntroduction')}
            eyebrow={t('pages.projects.featuredLabel')}
            note={t('pages.projects.featuredNote')}
            title={t('pages.projects.selectedTitle')}
          />

          <div className="mt-16 sm:mt-20">
            {projects.map((project, index) => {
              const image = project.media[0]
              const imageNoteKey =
                projectNoteKeys[project.id] ??
                'pages.projects.imageNotes.portfolio'

              return (
                <article
                  className="grid gap-8 border-t border-line py-10 first:border-t-0 first:pt-0 sm:grid-cols-[5rem_minmax(0,1fr)] lg:grid-cols-[8rem_minmax(0,0.9fr)_minmax(20rem,1.1fr)] lg:gap-12 lg:py-12"
                  key={project.id}
                >
                  <p className="flex items-center gap-3 self-start font-mono text-xs font-semibold text-green-readable">
                    {String(index + 1).padStart(2, '0')}
                    <span aria-hidden="true" className="h-px w-8 bg-green" />
                  </p>

                  <div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.12em]">
                      <span className="font-semibold text-green-readable">
                        {t(`content.projectCategories.${project.category}`)}
                      </span>
                      <span aria-hidden="true" className="text-muted">·</span>
                      <span className="text-muted">
                        {t(`content.projectStatuses.${project.status}`)}
                      </span>
                    </div>
                    <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                      <Link
                        className="focus-ring transition-colors hover:text-action-readable"
                        to={`/${activeLocale}/projects/${project.slug}`}
                      >
                        {t(`${project.translationKey}.title`)}
                      </Link>
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-7 text-muted">
                      {t(`${project.translationKey}.summary`)}
                    </p>
                    <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
                      {project.technologies.join(' · ')}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
                      <Link
                        className="focus-ring border-b border-action pb-1 transition-colors hover:border-action-hover"
                        to={`/${activeLocale}/projects/${project.slug}`}
                      >
                        {t('pages.projects.viewProject')}
                      </Link>
                      {project.links.map((link) => (
                        <a
                          className={
                            link.kind === 'live'
                              ? 'focus-ring border-b border-action pb-1 text-action-readable transition-colors hover:border-action-hover'
                              : 'focus-ring border-b border-line pb-1 transition-colors hover:border-action'
                          }
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
                  </div>

                  {image ? (
                    <figure className="relative self-start sm:col-start-2 lg:col-start-3 lg:row-start-1 min-[1081px]:pb-14">
                      <div
                        className={`relative p-3 sm:p-5 ${
                          index === 1 ? 'bg-action-soft' : 'bg-green-soft'
                        }`}
                      >
                        {index !== 1 ? <ProjectCornerMarks /> : null}

                        <div className="overflow-hidden border border-line-strong bg-page">
                          <img
                            alt={t(image.altKey)}
                            className="h-auto w-full"
                            decoding="async"
                            height={image.height}
                            loading={index === 0 ? 'eager' : image.loading}
                            src={image.src}
                            width={image.width}
                          />
                        </div>
                      </div>

                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 hidden items-center justify-center gap-1 min-[1081px]:flex"
                      >
                        {index === 1 ? (
                          <>
                            <ProjectAnnotationArrow mirrored />
                            <p className="editorial-note max-w-44 text-left text-sm leading-5 text-muted">
                              {t(imageNoteKey)}
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="editorial-note max-w-44 text-right text-sm leading-5 text-muted">
                              {t(imageNoteKey)}
                            </p>
                            <ProjectAnnotationArrow mirrored={false} />
                          </>
                        )}
                      </div>
                    </figure>
                  ) : (
                    <div className="hidden min-h-52 items-end border-t border-line-strong lg:flex">
                      <p className="max-w-sm pb-2 text-2xl font-semibold leading-9 tracking-[-0.025em]">
                        {t('pages.projects.currentProjectNote')}
                      </p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
