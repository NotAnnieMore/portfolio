import { useTranslation } from 'react-i18next'

import { skillGroups } from '../../data/skills'
import { SectionHeading } from './SectionHeading'

export function SkillsSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          description={t('pages.home.skills.description')}
          index="03 / 05"
          title={t('pages.home.skills.title')}
        />

        <div className="mt-16 grid border-t border-line sm:mt-20 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              className={`border-b border-line py-8 sm:py-10 ${
                index % 2 === 0
                  ? 'sm:border-r sm:pr-10'
                  : 'sm:pl-10'
              }`}
              key={group.id}
            >
              <h3 className="text-lg font-semibold">{t(group.labelKey)}</h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
                {group.skills.map((skill) => skill.name).join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

