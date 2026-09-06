import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'

import { isSupportedLocale } from '../../i18n/locales'

export function HomeHero() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pb-28 sm:pt-24 lg:px-10 lg:pb-32 lg:pt-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.22fr)_minmax(22rem,0.78fr)] lg:items-start lg:gap-10">
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

          <div className="mt-8 border-l border-green pl-5">
            <p className="text-sm leading-6 text-muted">
              {t('pages.home.hero.location')}
            </p>
          </div>
        </div>

        <aside className="lg:-mr-10 xl:-mr-20">
          <figure className="relative min-h-[27rem] overflow-hidden sm:min-h-[32rem] lg:min-h-[36rem] lg:overflow-visible">
            <img
              alt={t('pages.home.hero.illustrationAlt')}
              className="absolute -bottom-10 left-1/2 z-10 h-[116%] w-auto max-w-none -translate-x-1/2 object-contain sm:-bottom-12 sm:h-[120%] lg:-bottom-16 lg:left-[56%] lg:h-[124%] xl:left-[60%]"
              decoding="async"
              fetchPriority="high"
              height="1200"
              src="/images/decor/hero-workspace.webp"
              width="800"
            />
          </figure>
        </aside>
      </div>
    </section>
  )
}
