import { useTranslation } from 'react-i18next'

import { skillGroups } from '../../data/skills'
import { SkillGroupIcon } from '../ui/SkillGroupIcon'
import { SectionHeading } from './SectionHeading'

export function SkillsSection() {
  const { t } = useTranslation()

  return (
    <section className="border-y border-line bg-surface py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          description={t('pages.home.skills.description')}
          index="03 / 05"
          title={t('pages.home.skills.title')}
        />

        <div className="mt-14 grid border-y border-line sm:mt-16 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-line">
          {skillGroups.map((group) => (
            <div
              className="relative overflow-hidden border-b border-line px-5 py-8 last:border-b-0 sm:px-6 sm:py-9 lg:border-b-0 lg:px-6"
              key={group.id}
            >
              <span aria-hidden="true" className="surface-texture-layer" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 lg:block">
                  <SkillGroupIcon groupId={group.id} />
                  <h3 className="text-lg font-semibold lg:mt-5 lg:text-base">
                    {t(group.labelKey)}
                  </h3>
                </div>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
                  {group.skills.map((skill) => skill.name).join(' · ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
