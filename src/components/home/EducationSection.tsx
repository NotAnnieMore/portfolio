import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

import { education } from '../../data/education'
import { isSupportedLocale } from '../../i18n/locales'
import { formatDateRange } from '../../utils/formatDateRange'
import { SectionHeading } from './SectionHeading'

export function EducationSection() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
      <SectionHeading index="04 / 05" title={t('pages.home.education.title')} />

      <div className="mt-16 grid gap-x-10 gap-y-10 sm:mt-20 lg:grid-cols-3">
        {education.slice(0, 3).map((item) => (
          <article className="border-t border-line pt-5" key={item.id}>
            <p className="font-mono text-xs text-muted">
              {formatDateRange(
                item.startDate,
                item.endDate,
                activeLocale,
                t('content.dates.present'),
              )}
            </p>
            <h3 className="mt-5 text-lg font-semibold leading-6">
              {t(item.translationKey)}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              {item.institution}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

