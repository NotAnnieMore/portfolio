import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'

import { isSupportedLocale } from '../../i18n/locales'
import { SectionHeading } from './SectionHeading'

export function ContactSection() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'

  return (
    <section className="relative overflow-hidden border-t border-line bg-contact py-20 text-ink sm:py-28 lg:py-32">
      <img
        alt=""
        aria-hidden="true"
        className="botanical-accent pointer-events-none absolute bottom-2 right-2 hidden w-[36rem] max-w-[40vw] select-none lg:block"
        decoding="async"
        height="600"
        loading="lazy"
        src="/images/decor/botanical-corner-v2.webp"
        width="900"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <div>
          <SectionHeading index="05 / 05" title={t('pages.home.contact.label')} />
        </div>
        <div className="mt-14 max-w-3xl sm:mt-20">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-balance">
            {t('pages.home.contact.title')}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            {t('pages.home.contact.description')}
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 text-sm font-semibold">
            <a
              className="focus-ring border-b border-action pb-1 transition-colors hover:border-action-hover"
              href="mailto:ivocamachomail@gmail.com"
            >
              {t('pages.home.actions.emailMe')}
            </a>
            <Link
              className="focus-ring border-b border-line-strong pb-1 transition-colors hover:border-action"
              to={`/${activeLocale}/cv`}
            >
              {t('pages.home.actions.viewCv')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
