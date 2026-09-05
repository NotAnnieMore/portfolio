import type { Education } from '../types/content'

const polytechnicInstitute =
  'Escola Superior de Gestão e Tecnologia de Santarém, Universidade Politécnica de Santarém'

export const education: readonly Education[] = [
  {
    id: 'masters-applied-informatics',
    translationKey: 'content.education.mastersAppliedInformatics',
    institution: polytechnicInstitute,
    startDate: '2024-10',
    relatedProjectIds: ['als-thesis'],
  },
  {
    id: 'bachelors-computer-engineering',
    translationKey: 'content.education.bachelorsComputerEngineering',
    institution: polytechnicInstitute,
    startDate: '2025-09',
    endDate: '2026-06',
  },
  {
    id: 'bachelors-informatics',
    translationKey: 'content.education.bachelorsInformatics',
    institution: polytechnicInstitute,
    startDate: '2022',
    endDate: '2024',
  },
  {
    id: 'ctesp-information-systems',
    translationKey: 'content.education.ctespInformationSystems',
    institution: polytechnicInstitute,
    startDate: '2020',
    endDate: '2022',
  },
  {
    id: 'professional-multimedia-course',
    translationKey: 'content.education.professionalMultimediaCourse',
    institution: 'Agrupamento de Escolas de Salvaterra de Magos',
    startDate: '2015',
    endDate: '2019',
  },
]
