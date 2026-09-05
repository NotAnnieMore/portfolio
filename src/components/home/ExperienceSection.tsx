import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

import { experience } from '../../data/experience'
import { isSupportedLocale } from '../../i18n/locales'
import { formatDateRange } from '../../utils/formatDateRange'
import { SectionHeading } from './SectionHeading'

export function ExperienceSection() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
      <SectionHeading
        description={t('pages.home.experience.description')}
        index="02 / 05"
        title={t('pages.home.experience.title')}
      />

      <ol className="mt-16 border-t border-line sm:mt-20">
        {experience.slice(0, 3).map((item) => (
          <li
            className="grid gap-4 border-b border-line py-8 sm:grid-cols-[10rem_1fr] lg:grid-cols-[12rem_minmax(12rem,0.8fr)_minmax(0,1.3fr)] lg:gap-10 lg:py-10"
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
            </div>
            <p className="text-base leading-7 text-muted sm:col-start-2 lg:col-start-auto">
              {t(`${item.translationKey}.summary`)}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

