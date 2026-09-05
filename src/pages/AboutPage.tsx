import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'

import { education } from '../data/education'
import { experience } from '../data/experience'
import { profileLinks } from '../data/links'
import { skillGroups } from '../data/skills'
import { ProfileLinkIcon } from '../components/ui/ProfileLinkIcon'
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
      <header className="mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-10 lg:py-36">
        <p className="text-sm font-medium text-green-readable">
          {t('pages.about.eyebrow')}
        </p>
        <div className="mt-7 grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-end lg:gap-20">
          <div>
            <h1 className="max-w-4xl text-[clamp(3.5rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-balance">
              {t('pages.about.title')}
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">
              {t('pages.about.introduction')}
            </p>
          </div>
          <aside className="border-l border-line pl-5 text-sm leading-6 text-muted">
            <p>{t('pages.about.location')}</p>
            <div className="mt-5 flex flex-col items-start gap-2 font-semibold text-ink">
              {profileLinks.slice(0, 3).map((link) => (
                <a
                  className="focus-ring inline-flex items-center gap-2 border-b border-line transition-colors hover:border-action"
                  href={link.href}
                  key={link.id}
                  rel={link.kind === 'email' ? undefined : 'noreferrer'}
                  target={link.kind === 'email' ? undefined : '_blank'}
                >
                  <ProfileLinkIcon id={link.id} />
                  {t(`content.links.${link.id}`)}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </header>

      <section className="bg-surface py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 border-t border-line pt-5 lg:grid-cols-[12rem_minmax(0,1fr)]">
            <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
              01 / 04
            </p>
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                {t('pages.about.focus.title')}
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                {t('pages.about.focus.introduction')}
              </p>
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
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
        <div className="grid gap-10 border-t border-line pt-5 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
            02 / 04
          </p>
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {t('pages.about.experience.title')}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              {t('pages.about.experience.introduction')}
            </p>
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
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 border-t border-line pt-5 lg:grid-cols-[12rem_minmax(0,1fr)]">
            <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
              03 / 04
            </p>
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                {t('pages.about.skills.title')}
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                {t('pages.about.skills.introduction')}
              </p>
              <div className="mt-14 grid border-t border-line md:grid-cols-2">
                {skillGroups.map((group, index) => (
                  <article
                    className={`border-b border-line py-8 md:py-10 ${
                      index % 2 === 0
                        ? 'md:border-r md:pr-10'
                        : 'md:pl-10'
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
                      {group.skills.map((skill) => skill.name).join(' · ')}
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
            04 / 04
          </p>
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {t('pages.about.education.title')}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              {t('pages.about.education.introduction')}
            </p>
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
          </div>
        </div>
      </section>

      <section className="bg-contact py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
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
      </section>
    </article>
  )
}
