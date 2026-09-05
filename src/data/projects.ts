import type { Project } from '../types/content'

export const projects: readonly Project[] = [
  {
    id: 'job-application-tracker',
    slug: 'job-application-tracker',
    translationKey: 'content.projects.jobApplicationTracker',
    category: 'product',
    status: 'maintained',
    featured: true,
    order: 1,
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Vercel',
    ],
    links: [
      {
        kind: 'live',
        href: 'https://jobs.ivocamacho.com',
      },
      {
        kind: 'github',
        href: 'https://github.com/NotAnnieMore/job-application-tracker',
      },
    ],
    media: [
      {
        src: '/images/projects/job-application-tracker/dashboard.webp',
        altKey: 'content.projects.jobApplicationTracker.imageAlt',
        captionKey: 'content.projects.jobApplicationTracker.imageCaption',
        width: 1787,
        height: 880,
        loading: 'eager',
      },
    ],
  },
  {
    id: 'als-thesis',
    slug: 'als-prognosis-thesis',
    translationKey: 'content.projects.alsThesis',
    category: 'academic',
    status: 'in-progress',
    featured: true,
    order: 2,
    technologies: [
      'Python',
      'Jupyter Notebook',
      'Machine Learning',
      'Explainable AI',
    ],
    links: [
      {
        kind: 'github',
        href: 'https://github.com/NotAnnieMore/ALSThesis',
        labelKey: 'content.links.mainRepository',
      },
      {
        kind: 'github',
        href: 'https://github.com/NotAnnieMore/ThesisReplication',
        labelKey: 'content.links.replicationRepository',
      },
    ],
    media: [
      {
        src: '/images/projects/als-thesis/experimental-pipeline.webp',
        altKey: 'content.projects.alsThesis.imageAlt',
        captionKey: 'content.projects.alsThesis.imageCaption',
        width: 1800,
        height: 900,
        loading: 'lazy',
      },
    ],
  },
  {
    id: 'professional-portfolio',
    slug: 'professional-portfolio',
    translationKey: 'content.projects.professionalPortfolio',
    category: 'product',
    status: 'in-progress',
    featured: true,
    order: 3,
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'i18next',
    ],
    links: [
      {
        kind: 'github',
        href: 'https://github.com/NotAnnieMore/portfolio',
      },
    ],
    media: [],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects() {
  return [...projects]
    .filter((project) => project.featured)
    .sort((first, second) => first.order - second.order)
}

export function getOrderedProjects() {
  return [...projects].sort((first, second) => first.order - second.order)
}
