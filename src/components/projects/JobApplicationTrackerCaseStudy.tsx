import { Database, LayoutDashboard, ServerCog, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'

import { isSupportedLocale } from '../../i18n/locales'
import type { Project } from '../../types/content'

const capabilityKeys = ['workflow', 'interviews', 'agenda', 'experience'] as const
const decisionKeys = ['security', 'import', 'filters', 'localisation'] as const
const architectureNodes = [
  { key: 'interface', Icon: LayoutDashboard },
  { key: 'application', Icon: ServerCog },
  { key: 'identity', Icon: ShieldCheck },
  { key: 'data', Icon: Database },
] as const

interface JobApplicationTrackerCaseStudyProps {
  project: Project
}

export function JobApplicationTrackerCaseStudy({
  project,
}: JobApplicationTrackerCaseStudyProps) {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'
  const [dashboard, applications, interview, mobile] = project.media
  const liveLink = project.links.find((link) => link.kind === 'live')
  const sourceLink = project.links.find((link) => link.kind === 'github')

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
          {t('pages.project.jobTracker.eyebrow')}
        </p>
        <h1 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-balance">
          {t(`${project.translationKey}.title`)}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">
          {t('pages.project.jobTracker.introduction')}
        </p>

        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm font-semibold">
          {liveLink ? (
            <a
              className="focus-ring inline-flex min-h-11 items-center bg-action-fill px-5 py-3 text-action-contrast transition-colors hover:bg-action-fill-hover"
              href={liveLink.href}
              rel="noreferrer"
              target="_blank"
            >
              {t('content.links.live')} ↗
            </a>
          ) : null}
          {sourceLink ? (
            <a
              className="focus-ring inline-flex min-h-11 items-center border border-line-strong px-5 py-3 transition-colors hover:border-action"
              href={sourceLink.href}
              rel="noreferrer"
              target="_blank"
            >
              {t('content.links.github')} ↗
            </a>
          ) : null}
        </div>

        <dl className="mt-16 grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {(['role', 'year', 'status', 'stack'] as const).map((fact) => (
            <div className="bg-page py-5 sm:px-5 sm:first:pl-0" key={fact}>
              <dt className="font-mono text-xs uppercase tracking-[0.12em] text-green-readable">
                {t(`pages.project.jobTracker.facts.${fact}.label`)}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-muted">
                {t(`pages.project.jobTracker.facts.${fact}.value`)}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {dashboard ? (
        <figure className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
          <div className="overflow-hidden border border-line bg-surface">
            <img
              alt={t(dashboard.altKey)}
              className="h-auto w-full"
              decoding="async"
              fetchPriority="high"
              height={dashboard.height}
              loading="eager"
              src={dashboard.src}
              width={dashboard.width}
            />
          </div>
          {dashboard.captionKey ? (
            <figcaption className="mx-auto mt-3 max-w-6xl text-xs leading-5 text-muted">
              {t(dashboard.captionKey)}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:py-32 lg:grid-cols-[12rem_minmax(0,1fr)] lg:px-10 lg:py-40">
        <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
          01 / 06
        </p>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
            {t('pages.project.jobTracker.context.title')}
          </h2>
          <p className="mt-7 text-lg leading-8 text-muted">
            {t('pages.project.jobTracker.context.body')}
          </p>
          <p className="mt-5 text-lg leading-8 text-muted">
            {t('pages.project.jobTracker.context.bodyTwo')}
          </p>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 border-t border-line pt-5 lg:grid-cols-[12rem_minmax(0,1fr)]">
            <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
              02 / 06
            </p>
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                {t('pages.project.jobTracker.capabilities.title')}
              </h2>
              <div className="mt-14 grid gap-x-10 sm:grid-cols-2">
                {capabilityKeys.map((key, index) => (
                  <div className="border-t border-line py-7" key={key}>
                    <p className="font-mono text-xs text-green-readable">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-5 text-xl font-semibold">
                      {t(`pages.project.jobTracker.capabilities.${key}.title`)}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-muted">
                      {t(`pages.project.jobTracker.capabilities.${key}.body`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
        <div className="grid gap-10 border-t border-line pt-5 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
            03 / 06
          </p>
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {t('pages.project.jobTracker.architecture.title')}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              {t('pages.project.jobTracker.architecture.description')}
            </p>
            <ol className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {architectureNodes.map(
                ({ key: node, Icon }, index) => (
                  <li
                    className="bg-surface-soft p-6 sm:min-h-48 lg:p-7"
                    key={node}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex size-11 items-center justify-center bg-green-soft text-green-readable">
                        <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
                      </span>
                      <p className="font-mono text-xs text-green-readable">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold">
                      {t(
                        `pages.project.jobTracker.architecture.${node}.title`,
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {t(`pages.project.jobTracker.architecture.${node}.body`)}
                    </p>
                  </li>
                ),
              )}
            </ol>
            <p className="mt-5 max-w-3xl text-sm leading-6 text-muted">
              {t('pages.project.jobTracker.architecture.note')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 border-t border-line pt-5 lg:grid-cols-[12rem_minmax(0,1fr)]">
            <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
              04 / 06
            </p>
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                {t('pages.project.jobTracker.decisions.title')}
              </h2>
              <div className="mt-14">
                {decisionKeys.map((key, index) => (
                  <div
                    className="grid gap-5 border-t border-line py-8 sm:grid-cols-[4rem_minmax(0,0.75fr)_minmax(0,1.25fr)] sm:gap-8"
                    key={key}
                  >
                    <p className="font-mono text-xs text-green-readable">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-xl font-semibold">
                      {t(`pages.project.jobTracker.decisions.${key}.title`)}
                    </h3>
                    <p className="text-base leading-7 text-muted">
                      {t(`pages.project.jobTracker.decisions.${key}.body`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 py-24 sm:px-6 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-6xl gap-10 border-t border-line pt-5 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
            05 / 06
          </p>
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {t('pages.project.jobTracker.gallery.title')}
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">
              {t('pages.project.jobTracker.gallery.disclaimer')}
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-16 sm:space-y-24">
          {[applications, interview].map((image) =>
            image ? (
              <figure key={image.src}>
                <div className="overflow-hidden border border-line bg-surface">
                  <img
                    alt={t(image.altKey)}
                    className="h-auto w-full"
                    decoding="async"
                    height={image.height}
                    loading={image.loading}
                    src={image.src}
                    width={image.width}
                  />
                </div>
                {image.captionKey ? (
                  <figcaption className="mx-auto mt-3 max-w-6xl text-xs leading-5 text-muted">
                    {t(image.captionKey)}
                  </figcaption>
                ) : null}
              </figure>
            ) : null,
          )}

          {mobile ? (
            <figure className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-[minmax(16rem,0.55fr)_minmax(0,1fr)] sm:items-center sm:gap-14">
              <div className="mx-auto w-full max-w-sm overflow-hidden border border-line bg-surface">
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
              <figcaption>
                <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
                  {t('pages.project.jobTracker.gallery.mobileLabel')}
                </p>
                <p className="mt-5 max-w-xl text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
                  {t(mobile.captionKey ?? '')}
                </p>
              </figcaption>
            </figure>
          ) : null}
        </div>
      </section>

      <section className="bg-contact py-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[12rem_minmax(0,1fr)] lg:px-10">
          <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
            06 / 06
          </p>
          <div className="max-w-4xl">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-balance">
              {t('pages.project.jobTracker.outcome.title')}
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">
              {t('pages.project.jobTracker.outcome.body')}
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              {t('pages.project.jobTracker.outcome.bodyTwo')}
            </p>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm font-semibold">
              {liveLink ? (
                <a
                  className="focus-ring border-b border-action pb-1 text-action-readable transition-colors hover:border-action-hover"
                  href={liveLink.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {t('content.links.live')} ↗
                </a>
              ) : null}
              {sourceLink ? (
                <a
                  className="focus-ring border-b border-line-strong pb-1 transition-colors hover:border-action"
                  href={sourceLink.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {t('content.links.github')} ↗
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
