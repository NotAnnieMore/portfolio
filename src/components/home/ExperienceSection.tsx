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
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <img
        alt=""
        aria-hidden="true"
        className="experience-watermark pointer-events-none absolute -right-28 top-20 hidden w-[34rem] max-w-[45vw] select-none lg:block"
        decoding="async"
        height="1000"
        loading="lazy"
        src="/images/decor/hero-workspace.webp"
        width="800"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          description={t('pages.home.experience.description')}
          index="02 / 05"
          title={t('pages.home.experience.title')}
        />

        <ol className="mt-14 border-t border-line sm:mt-16">
          {experience.slice(0, 3).map((item) => (
            <li
              className="grid gap-5 border-b border-line py-8 sm:grid-cols-[10rem_1fr] lg:grid-cols-[12rem_minmax(12rem,0.8fr)_minmax(0,1.3fr)] lg:gap-10 lg:py-9"
              key={item.id}
            >
              <p className="flex items-center gap-3 font-mono text-xs font-semibold leading-5 text-green-readable">
                <span
                  aria-hidden="true"
                  className="size-2 shrink-0 bg-green"
                />
                <span>
                  {formatDateRange(
                    item.startDate,
                    item.endDate,
                    activeLocale,
                    t('content.dates.present'),
                  )}
                </span>
              </p>
              <div className="border-l border-green pl-5">
                <h3 className="font-semibold leading-6">
                  {t(`${item.translationKey}.role`)}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {item.organisation}
                </p>
                <p className="mt-3 font-mono text-xs leading-5 text-green-readable">
                  {item.technologies.join(' · ')}
                </p>
              </div>
              <p className="text-base leading-7 text-muted sm:col-start-2 lg:col-start-auto">
                {t(`${item.translationKey}.summary`)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
