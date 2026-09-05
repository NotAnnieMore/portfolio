import type { Experience } from '../types/content'

export const experience: readonly Experience[] = [
  {
    id: 'teaching-assistant',
    translationKey: 'content.experience.teachingAssistant',
    organisation:
      'Escola Superior de Gestão e Tecnologia de Santarém, Universidade Politécnica de Santarém',
    startDate: '2024-09',
    endDate: '2025-02',
    technologies: ['Python'],
  },
  {
    id: 'software-developer-intern',
    translationKey: 'content.experience.softwareDeveloperIntern',
    organisation: 'Pensamento Binário',
    startDate: '2024-06',
    endDate: '2024-07',
    technologies: ['React', 'Vite'],
  },
  {
    id: 'mobile-application-developer-intern',
    translationKey: 'content.experience.mobileDeveloperIntern',
    organisation: 'Pensamento Binário',
    startDate: '2022-03',
    endDate: '2022-07',
    technologies: ['Microsoft Power Apps', 'Microsoft SQL Server'],
  },
  {
    id: 'multimedia-intern',
    translationKey: 'content.experience.multimediaIntern',
    organisation: 'Terra das Ideias',
    startDate: '2016',
    endDate: '2018',
    technologies: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe Premiere Pro',
      'Adobe After Effects',
    ],
  },
]
