import { useTranslation } from 'react-i18next'

import { ContactSection } from '../components/home/ContactSection'
import { EducationSection } from '../components/home/EducationSection'
import { ExperienceSection } from '../components/home/ExperienceSection'
import { FeaturedWork } from '../components/home/FeaturedWork'
import { HomeHero } from '../components/home/HomeHero'
import { SkillsSection } from '../components/home/SkillsSection'
import { usePageMeta } from '../utils/usePageMeta'

export function HomePage() {
  const { t } = useTranslation()
  usePageMeta(t('pages.home.metaTitle'), t('pages.home.metaDescription'))

  return (
    <>
      <HomeHero />
      <FeaturedWork />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </>
  )
}
