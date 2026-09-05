import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'

import { isSupportedLocale } from '../../i18n/locales'
import type { Project } from '../../types/content'

const principleKeys = ['hierarchy', 'evidence', 'restraint', 'responsive'] as const
const detailKeys = ['language', 'theme', 'accessibility', 'delivery'] as const

interface PortfolioCaseStudyProps {
  project: Project
}

export function PortfolioCaseStudy({ project }: PortfolioCaseStudyProps) {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'
  const [desktop, mobile] = project.media
  const repository = project.links.find((link) => link.kind === 'github')

  return (
    <article>
      <header className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-28 lg:px-10 lg:pb-36 lg:pt-36">
        <Link
          className="focus-ring text-sm text-muted transition-colors hover:text-ink"
          to={`/${activeLocale}/projects`}
        >
          ← {t('pages.project.backToProjects')}
        </Link>
        <p className="mt-16 text-sm font-medium text-green-readable">
          {t('pages.project.portfolio.eyebrow')}
        </p>
        <h1 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-balance">
          {t(`${project.translationKey}.title`)}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">
          {t('pages.project.portfolio.introduction')}
        </p>

        {repository ? (
          <a
            className="focus-ring mt-10 inline-flex min-h-11 items-center bg-action-fill px-5 py-3 text-sm font-semibold text-action-contrast transition-colors hover:bg-action-fill-hover"
            href={repository.href}
            rel="noreferrer"
            target="_blank"
          >
            {t('content.links.github')} ↗
          </a>
        ) : null}

        <dl className="mt-16 grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {(['role', 'year', 'format', 'stack'] as const).map((fact) => (
            <div className="bg-page py-5 sm:px-5 sm:first:pl-0" key={fact}>
              <dt className="font-mono text-xs uppercase tracking-[0.12em] text-green-readable">
                {t(`pages.project.portfolio.facts.${fact}.label`)}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-muted">
                {t(`pages.project.portfolio.facts.${fact}.value`)}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {desktop ? (
        <figure className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
          <div className="overflow-hidden border border-line bg-surface">
            <img
              alt={t(desktop.altKey)}
              className="h-auto w-full"
              decoding="async"
              fetchPriority="high"
              height={desktop.height}
              loading="eager"
              src={desktop.src}
              width={desktop.width}
            />
          </div>
          {desktop.captionKey ? (
            <figcaption className="mx-auto mt-3 max-w-6xl text-xs leading-5 text-muted">
              {t(desktop.captionKey)}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:py-32 lg:grid-cols-[12rem_minmax(0,1fr)] lg:px-10 lg:py-40">
        <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
          01 / 05
        </p>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
            {t('pages.project.portfolio.purpose.title')}
          </h2>
          <p className="mt-7 text-lg leading-8 text-muted">
            {t('pages.project.portfolio.purpose.body')}
          </p>
          <p className="mt-5 text-lg leading-8 text-muted">
            {t('pages.project.portfolio.purpose.bodyTwo')}
          </p>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 border-t border-line pt-5 lg:grid-cols-[12rem_minmax(0,1fr)]">
            <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
              02 / 05
            </p>
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                {t('pages.project.portfolio.principles.title')}
              </h2>
              <div className="mt-14 grid gap-x-12 md:grid-cols-2">
                {principleKeys.map((key, index) => (
                  <article className="border-t border-line py-7" key={key}>
                    <p className="font-mono text-xs text-green-readable">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-6 text-xl font-semibold">
                      {t(`pages.project.portfolio.principles.${key}.title`)}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-muted">
                      {t(`pages.project.portfolio.principles.${key}.body`)}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
        <div className="grid gap-10 border-t border-line pt-5 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
            03 / 05
          </p>
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {t('pages.project.portfolio.architecture.title')}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              {t('pages.project.portfolio.architecture.introduction')}
            </p>
            <ol className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {(['content', 'locale', 'interface', 'deployment'] as const).map(
                (step, index) => (
                  <li className="bg-surface-soft p-6 lg:min-h-56 lg:p-7" key={step}>
                    <p className="font-mono text-xs text-green-readable">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-8 text-lg font-semibold">
                      {t(`pages.project.portfolio.architecture.${step}.title`)}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {t(`pages.project.portfolio.architecture.${step}.body`)}
                    </p>
                  </li>
                ),
              )}
            </ol>
            <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">
              {t('pages.project.portfolio.architecture.note')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,0.48fr)] lg:items-start lg:px-10">
          <div className="border-t border-line pt-5">
            <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
              04 / 05
            </p>
            <h2 className="mt-10 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {t('pages.project.portfolio.details.title')}
            </h2>
            <div className="mt-12">
              {detailKeys.map((key) => (
                <article className="border-t border-line py-7" key={key}>
                  <h3 className="text-xl font-semibold">
                    {t(`pages.project.portfolio.details.${key}.title`)}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                    {t(`pages.project.portfolio.details.${key}.body`)}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {mobile ? (
            <figure className="lg:sticky lg:top-28">
              <div className="mx-auto max-w-sm overflow-hidden border border-line bg-page">
                <img
                  alt={t(mobile.altKey)}
                  className="h-auto w-full"
                  decoding="async"
                  height={mobile.height}
                  loading={mobile.loading}
                  src={mobile.src}
                  width={mobile.width}
                />
              </div>
              {mobile.captionKey ? (
                <figcaption className="mx-auto mt-3 max-w-sm text-xs leading-5 text-muted">
                  {t(mobile.captionKey)}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>
      </section>

      <section className="bg-contact py-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[12rem_minmax(0,1fr)] lg:px-10">
          <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
            05 / 05
          </p>
          <div className="max-w-4xl">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-balance">
              {t('pages.project.portfolio.outcome.title')}
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">
              {t('pages.project.portfolio.outcome.body')}
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              {t('pages.project.portfolio.outcome.bodyTwo')}
            </p>
            {repository ? (
              <a
                className="focus-ring mt-10 inline-flex border-b border-action pb-1 text-sm font-semibold text-action-readable transition-colors hover:border-action-hover"
                href={repository.href}
                rel="noreferrer"
                target="_blank"
              >
                {t('content.links.github')} ↗
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </article>
  )
}
