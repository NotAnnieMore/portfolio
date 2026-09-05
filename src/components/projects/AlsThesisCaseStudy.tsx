import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'

import { isSupportedLocale } from '../../i18n/locales'
import type { Project } from '../../types/content'

const safeguardKeys = [
  'separation',
  'folds',
  'evaluation',
  'interpretation',
] as const

interface AlsThesisCaseStudyProps {
  project: Project
}

export function AlsThesisCaseStudy({ project }: AlsThesisCaseStudyProps) {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'
  const [pipeline, precisionRecall, studyOneShap, studyTwoShap] = project.media
  const [mainRepository, replicationRepository] = project.links

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
          {t('pages.project.alsThesis.eyebrow')}
        </p>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.8rem,7.5vw,6.25rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-balance">
          {t(`${project.translationKey}.title`)}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">
          {t('pages.project.alsThesis.introduction')}
        </p>

        <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
          {mainRepository ? (
            <a
              className="focus-ring inline-flex min-h-11 items-center bg-action-fill px-5 py-3 text-action-contrast transition-colors hover:bg-action-fill-hover"
              href={mainRepository.href}
              rel="noreferrer"
              target="_blank"
            >
              {t(mainRepository.labelKey ?? 'content.links.github')} ↗
            </a>
          ) : null}
          {replicationRepository ? (
            <a
              className="focus-ring inline-flex min-h-11 items-center border border-line-strong px-5 py-3 transition-colors hover:border-action"
              href={replicationRepository.href}
              rel="noreferrer"
              target="_blank"
            >
              {t(replicationRepository.labelKey ?? 'content.links.github')} ↗
            </a>
          ) : null}
        </div>

        <dl className="mt-16 grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {(['role', 'period', 'dataset', 'status'] as const).map((fact) => (
            <div className="bg-page py-5 sm:px-5 sm:first:pl-0" key={fact}>
              <dt className="font-mono text-xs uppercase tracking-[0.12em] text-green-readable">
                {t(`pages.project.alsThesis.facts.${fact}.label`)}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-muted">
                {t(`pages.project.alsThesis.facts.${fact}.value`)}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {pipeline ? (
        <figure className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
          <div className="overflow-hidden border border-line bg-surface">
            <img
              alt={t(pipeline.altKey)}
              className="h-auto w-full"
              decoding="async"
              fetchPriority="high"
              height={pipeline.height}
              loading="eager"
              src={pipeline.src}
              width={pipeline.width}
            />
          </div>
          {pipeline.captionKey ? (
            <figcaption className="mx-auto mt-3 max-w-6xl text-xs leading-5 text-muted">
              {t(pipeline.captionKey)}
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
            {t('pages.project.alsThesis.problem.title')}
          </h2>
          <p className="mt-7 text-lg leading-8 text-muted">
            {t('pages.project.alsThesis.problem.body')}
          </p>
          <p className="mt-5 text-lg leading-8 text-muted">
            {t('pages.project.alsThesis.problem.bodyTwo')}
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
                {t('pages.project.alsThesis.studies.title')}
              </h2>
              <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
                {(['functional', 'survival'] as const).map((study) => (
                  <article className="border-t border-line pt-6" key={study}>
                    <p className="font-mono text-xs tracking-[0.14em] text-green-readable">
                      {t(`pages.project.alsThesis.studies.${study}.label`)}
                    </p>
                    <h3 className="mt-7 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
                      {t(`pages.project.alsThesis.studies.${study}.title`)}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-muted">
                      {t(`pages.project.alsThesis.studies.${study}.body`)}
                    </p>
                    <p className="mt-7 border-l-2 border-green pl-4 text-sm leading-6 text-muted">
                      {t(`pages.project.alsThesis.studies.${study}.detail`)}
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
            03 / 06
          </p>
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {t('pages.project.alsThesis.safeguards.title')}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              {t('pages.project.alsThesis.safeguards.introduction')}
            </p>
            <ol className="mt-14">
              {safeguardKeys.map((key, index) => (
                <li
                  className="grid gap-5 border-t border-line py-8 sm:grid-cols-[4rem_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8"
                  key={key}
                >
                  <p className="font-mono text-xs text-green-readable">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl font-semibold">
                    {t(`pages.project.alsThesis.safeguards.${key}.title`)}
                  </h3>
                  <p className="text-base leading-7 text-muted">
                    {t(`pages.project.alsThesis.safeguards.${key}.body`)}
                  </p>
                </li>
              ))}
            </ol>
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
                {t('pages.project.alsThesis.results.title')}
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                {t('pages.project.alsThesis.results.introduction')}
              </p>
              <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
                {(['functional', 'survival'] as const).map((result) => (
                  <article className="bg-surface-soft p-7 sm:p-9" key={result}>
                    <p className="font-mono text-xs tracking-[0.14em] text-green-readable">
                      {t(`pages.project.alsThesis.results.${result}.label`)}
                    </p>
                    <p className="mt-8 text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.055em]">
                      {t(`pages.project.alsThesis.results.${result}.metric`)}
                    </p>
                    <p className="mt-3 text-sm font-medium">
                      {t(`pages.project.alsThesis.results.${result}.metricLabel`)}
                    </p>
                    <p className="mt-7 text-base leading-7 text-muted">
                      {t(`pages.project.alsThesis.results.${result}.body`)}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-7 max-w-3xl border-l-2 border-action pl-5 text-base leading-7 text-muted">
                {t('pages.project.alsThesis.results.caution')}
              </p>
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
              {t('pages.project.alsThesis.evidence.title')}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              {t('pages.project.alsThesis.evidence.introduction')}
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-16 sm:space-y-24">
          {[precisionRecall, studyOneShap].map((image) =>
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

          {studyTwoShap ? (
            <figure className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.45fr)] lg:items-center lg:gap-16">
              <div className="overflow-hidden border border-line bg-surface">
                <img
                  alt={t(studyTwoShap.altKey)}
                  className="h-auto w-full"
                  decoding="async"
                  height={studyTwoShap.height}
                  loading={studyTwoShap.loading}
                  src={studyTwoShap.src}
                  width={studyTwoShap.width}
                />
              </div>
              <figcaption>
                <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
                  {t('pages.project.alsThesis.evidence.studyTwoLabel')}
                </p>
                <p className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
                  {t(studyTwoShap.captionKey ?? '')}
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
              {t('pages.project.alsThesis.outcome.title')}
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">
              {t('pages.project.alsThesis.outcome.body')}
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              {t('pages.project.alsThesis.outcome.bodyTwo')}
            </p>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm font-semibold">
              {project.links.map((link) => (
                <a
                  className="focus-ring border-b border-line-strong pb-1 transition-colors hover:border-action"
                  href={link.href}
                  key={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {t(link.labelKey ?? 'content.links.github')} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
