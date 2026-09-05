import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'

import { profileLinks } from '../../data/links'
import { isSupportedLocale } from '../../i18n/locales'
import { ProfileLinkIcon } from '../ui/ProfileLinkIcon'

const visibleProfileLinks = new Set(['email', 'linkedin', 'github'])

export function HomeHero() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pb-28 sm:pt-24 lg:px-10 lg:pb-32 lg:pt-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(15rem,1.4fr)] lg:items-end">
        <div className="max-w-4xl">
          <h1 className="text-[clamp(2.75rem,7vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-balance">
            {t('pages.home.hero.title')}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            {t('pages.home.hero.introduction')}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-5">
            <Link
              className="focus-ring inline-flex min-h-11 items-center bg-action-fill px-5 py-3 text-sm font-semibold text-action-contrast transition-colors hover:bg-action-fill-hover"
              to={`/${activeLocale}/projects`}
            >
              {t('pages.home.actions.viewProjects')}
            </Link>
            <Link
              className="focus-ring border-b border-ink pb-1 text-sm font-semibold"
              to={`/${activeLocale}/cv`}
            >
              {t('pages.home.actions.viewCv')}
            </Link>
          </div>
        </div>

        <div className="border-l border-line pl-5 lg:pb-2">
          <p className="text-sm leading-6 text-muted">
            {t('pages.home.hero.location')}
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {profileLinks
              .filter((link) => visibleProfileLinks.has(link.id))
              .map((link) => (
                <li key={link.id}>
                  <a
                    className="focus-ring inline-flex items-center gap-2 font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-action"
                    href={link.href}
                    rel={link.kind === 'email' ? undefined : 'noreferrer'}
                    target={link.kind === 'email' ? undefined : '_blank'}
                  >
                    <ProfileLinkIcon id={link.id} />
                    {t(`content.links.${link.id}`)}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
