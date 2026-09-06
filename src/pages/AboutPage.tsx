import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'

import { EditorialPageHero } from '../components/layout/EditorialPageHero'
import { EditorialSectionIntro } from '../components/layout/EditorialSectionIntro'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { skillGroups } from '../data/skills'
import { SkillGroupIcon } from '../components/ui/SkillGroupIcon'
import { isSupportedLocale } from '../i18n/locales'
import { formatDateRange } from '../utils/formatDateRange'
import { usePageMeta } from '../utils/usePageMeta'

const focusKeys = ['product', 'data', 'research'] as const

export function AboutPage() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'
  usePageMeta(t('pages.about.metaTitle'), t('pages.about.metaDescription'))

  return (
    <article>
      <EditorialPageHero
        annotation={t('pages.about.annotation')}
        annotationPlacement="upper-right"
        description={t('pages.about.introduction')}
        imageHeight={1080}
        imageSrc="/images/page-heroes/about.webp"
        imageWidth={900}
        title={t('pages.about.title')}
      />

      <section className="bg-surface py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <EditorialSectionIntro
            count="01 / 04"
            description={t('pages.about.focus.introduction')}
            eyebrow={t('pages.about.focus.eyebrow')}
            note={t('pages.about.focus.note')}
            title={t('pages.about.focus.title')}
          />

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {focusKeys.map((key, index) => (
              <article className="border-t border-line pt-6" key={key}>
                <p className="font-mono text-xs text-green-readable">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-7 text-xl font-semibold">
                  {t(`pages.about.focus.${key}.title`)}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">
                  {t(`pages.about.focus.${key}.body`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
        <EditorialSectionIntro
          count="02 / 04"
          description={t('pages.about.experience.introduction')}
          eyebrow={t('pages.about.experience.eyebrow')}
          note={t('pages.about.experience.note')}
          title={t('pages.about.experience.title')}
        />

        <ol className="mt-14 border-t border-line">
          {experience.map((item) => (
            <li
              className="grid gap-5 border-b border-line py-8 md:grid-cols-[9rem_minmax(12rem,0.8fr)_minmax(0,1.2fr)] md:gap-8"
              key={item.id}
            >
              <p className="font-mono text-xs leading-5 text-muted">
                {formatDateRange(
                  item.startDate,
                  item.endDate,
                  activeLocale,
                  t('content.dates.present'),
                )}
              </p>
              <div>
                <h3 className="font-semibold leading-6">
                  {t(`${item.translationKey}.role`)}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {item.organisation}
                </p>
                <p className="mt-4 font-mono text-xs leading-5 text-green-readable">
                  {item.technologies.join(' · ')}
                </p>
              </div>
              <p className="text-base leading-7 text-muted">
                {t(`${item.translationKey}.summary`)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-surface py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <EditorialSectionIntro
            count="03 / 04"
            description={t('pages.about.skills.introduction')}
            eyebrow={t('pages.about.skills.eyebrow')}
            note={t('pages.about.skills.note')}
            title={t('pages.about.skills.title')}
          />

          <div className="mt-14 grid border-t border-line md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <article
                className={`border-b border-line py-8 md:py-10 ${
                  index % 2 === 0 ? 'md:border-r md:pr-10' : 'md:pl-10'
                }`}
                key={group.id}
              >
                <div className="flex items-center gap-3">
                  <SkillGroupIcon groupId={group.id} />
                  <h3 className="text-lg font-semibold">
                    {t(group.labelKey)}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {group.skills
                    .map((skill) =>
                      skill.labelKey ? t(skill.labelKey) : skill.name,
                    )
                    .join(' · ')}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
        <EditorialSectionIntro
          count="04 / 04"
          description={t('pages.about.education.introduction')}
          eyebrow={t('pages.about.education.eyebrow')}
          note={t('pages.about.education.note')}
          title={t('pages.about.education.title')}
        />

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {education.map((item) => (
            <article className="border-t border-line pt-6" key={item.id}>
              <p className="font-mono text-xs text-green-readable">
                {formatDateRange(
                  item.startDate,
                  item.endDate,
                  activeLocale,
                  t('content.dates.present'),
                )}
              </p>
              <h3 className="mt-6 text-xl font-semibold leading-7">
                {t(item.translationKey)}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {item.institution}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-contact py-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] lg:items-center lg:gap-20 lg:px-10">
          <div>
            <h2 className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-balance">
              {t('pages.about.closing.title')}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              {t('pages.about.closing.body')}
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 text-sm font-semibold">
              <Link
                className="focus-ring border-b border-action pb-1 text-action-readable transition-colors hover:border-action-hover"
                to={`/${activeLocale}/projects`}
              >
                {t('pages.about.closing.projects')}
              </Link>
              <Link
                className="focus-ring border-b border-line-strong pb-1 transition-colors hover:border-action"
                to={`/${activeLocale}/cv`}
              >
                {t('pages.about.closing.cv')}
              </Link>
            </div>
          </div>

          <aside className="border-l border-line-strong pl-6 sm:pl-10">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-green-readable">
              {t('pages.about.closing.impact.label')}
            </p>
            <h3 className="mt-5 max-w-md text-2xl font-semibold leading-8 tracking-[-0.025em] sm:text-3xl sm:leading-9">
              {t('pages.about.closing.impact.title')}
            </h3>
            <span aria-hidden="true" className="mt-7 block h-0.5 w-8 bg-action" />

            <dl className="mt-10 grid grid-cols-3 border-t border-line-strong pt-6">
              {(['projects', 'areas', 'languages'] as const).map((metric) => (
                <div
                  className="border-r border-line px-4 first:pl-0 last:border-r-0 last:pr-0"
                  key={metric}
                >
                  <dt className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                    {t(`pages.about.closing.impact.${metric}.value`)}
                  </dt>
                  <dd className="mt-2 text-xs leading-5 text-muted sm:text-sm">
                    {t(`pages.about.closing.impact.${metric}.label`)}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
    </article>
  )
}
