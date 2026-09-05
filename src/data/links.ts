import type { ProfileLink } from '../types/content'

export const profileLinks: readonly ProfileLink[] = [
  {
    id: 'email',
    kind: 'email',
    href: 'mailto:ivocamachomail@gmail.com',
  },
  {
    id: 'linkedin',
    kind: 'linkedin',
    href: 'https://www.linkedin.com/in/ivocamacho99',
  },
  {
    id: 'github',
    kind: 'github',
    href: 'https://github.com/NotAnnieMore',
  },
  {
    id: 'cv-en',
    kind: 'document',
    href: '/cv/ivo-camacho-cv-en.pdf',
    labelKey: 'content.links.cvEnglish',
  },
  {
    id: 'cv-pt',
    kind: 'document',
    href: '/cv/ivo-camacho-cv-pt.pdf',
    labelKey: 'content.links.cvPortuguese',
  },
]
