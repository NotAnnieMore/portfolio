import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'

import { isSupportedLocale } from '../../i18n/locales'
import { SectionHeading } from './SectionHeading'

export function ContactSection() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'

  return (
    <section className="bg-contact py-24 text-ink sm:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div>
          <SectionHeading index="05 / 05" title={t('pages.home.contact.label')} />
        </div>
        <div className="mt-14 max-w-4xl sm:mt-20">
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
