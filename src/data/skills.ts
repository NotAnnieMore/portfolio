import type { SkillGroup } from '../types/content'

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'web-development',
    labelKey: 'content.skillGroups.webDevelopment',
    skills: [
      {
        name: 'TypeScript',
        evidenceProjectIds: [
          'job-application-tracker',
          'professional-portfolio',
        ],
      },
      {
        name: 'JavaScript',
        evidenceProjectIds: ['job-application-tracker'],
      },
      {
        name: 'React',
        evidenceProjectIds: [
          'job-application-tracker',
          'professional-portfolio',
        ],
        evidenceExperienceIds: ['software-developer-intern'],
      },
      {
        name: 'Next.js',
        evidenceProjectIds: ['job-application-tracker'],
      },
      {
        name: 'Vite',
        evidenceProjectIds: ['professional-portfolio'],
        evidenceExperienceIds: ['software-developer-intern'],
      },
      {
        name: 'Tailwind CSS',
        evidenceProjectIds: [
          'job-application-tracker',
          'professional-portfolio',
        ],
      },
    ],
  },
  {
    id: 'data-and-backend',
    labelKey: 'content.skillGroups.dataAndBackend',
    skills: [
      {
        name: 'Supabase',
        evidenceProjectIds: ['job-application-tracker'],
      },
      {
        name: 'PostgreSQL',
        evidenceProjectIds: ['job-application-tracker'],
      },
      {
        name: 'Microsoft SQL Server',
        evidenceExperienceIds: ['mobile-application-developer-intern'],
      },
    ],
  },
  {
    id: 'applied-machine-learning',
    labelKey: 'content.skillGroups.appliedMachineLearning',
    skills: [
      { name: 'Python', evidenceProjectIds: ['als-thesis'] },
      { name: 'Jupyter Notebook', evidenceProjectIds: ['als-thesis'] },
      { name: 'Machine Learning', evidenceProjectIds: ['als-thesis'] },
      { name: 'Explainable AI', evidenceProjectIds: ['als-thesis'] },
    ],
  },
  {
    id: 'microsoft-low-code',
    labelKey: 'content.skillGroups.microsoftLowCode',
    skills: [
      {
        name: 'Microsoft Power Apps',
        evidenceExperienceIds: ['mobile-application-developer-intern'],
      },
    ],
  },
  {
    id: 'tools-and-delivery',
    labelKey: 'content.skillGroups.toolsAndDelivery',
    skills: [
      {
        name: 'Git',
        evidenceProjectIds: [
          'job-application-tracker',
          'als-thesis',
          'professional-portfolio',
        ],
      },
      {
        name: 'GitHub',
        evidenceProjectIds: [
          'job-application-tracker',
          'als-thesis',
          'professional-portfolio',
        ],
      },
      {
        name: 'Vercel',
        evidenceProjectIds: ['job-application-tracker'],
      },
    ],
  },
  {
    id: 'quality-and-support',
    labelKey: 'content.skillGroups.qualityAndSupport',
    skills: [
      {
        name: 'Debugging',
        labelKey: 'content.skills.debugging',
        evidenceProjectIds: [
          'job-application-tracker',
          'als-thesis',
          'professional-portfolio',
        ],
      },
      {
        name: 'Testing & validation',
        labelKey: 'content.skills.testingAndValidation',
        evidenceProjectIds: [
          'job-application-tracker',
          'als-thesis',
          'professional-portfolio',
        ],
      },
      {
        name: 'Technical documentation',
        labelKey: 'content.skills.technicalDocumentation',
        evidenceProjectIds: ['als-thesis', 'professional-portfolio'],
      },
      {
        name: 'Technical support',
        labelKey: 'content.skills.technicalSupport',
        evidenceExperienceIds: [
          'teaching-assistant',
          'mobile-application-developer-intern',
        ],
      },
    ],
  },
]
