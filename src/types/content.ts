export type ContentLinkKind =
  | 'live'
  | 'github'
  | 'document'
  | 'email'
  | 'linkedin'
  | 'external'

export interface ContentLink {
  readonly kind: ContentLinkKind
  readonly href: string
  readonly labelKey?: string
}

export interface ProjectMedia {
  readonly src: string
  readonly altKey: string
  readonly width: number
  readonly height: number
  readonly captionKey?: string
  readonly loading?: 'eager' | 'lazy'
}

export type ProjectCategory = 'product' | 'academic' | 'experiment'
export type ProjectStatus = 'completed' | 'in-progress' | 'maintained'

export interface Project {
  readonly id: string
  readonly slug: string
  readonly translationKey: string
  readonly category: ProjectCategory
  readonly status: ProjectStatus
  readonly featured: boolean
  readonly order: number
  readonly technologies: readonly string[]
  readonly links: readonly ContentLink[]
  readonly media: readonly ProjectMedia[]
}

export interface Experience {
  readonly id: string
  readonly translationKey: string
  readonly organisation: string
  readonly startDate: string
  readonly endDate?: string
  readonly technologies: readonly string[]
}

export interface Education {
  readonly id: string
  readonly translationKey: string
  readonly institution: string
  readonly startDate: string
  readonly endDate?: string
  readonly relatedProjectIds?: readonly string[]
}

export interface Skill {
  readonly name: string
  readonly evidenceProjectIds?: readonly string[]
  readonly evidenceExperienceIds?: readonly string[]
}

export interface SkillGroup {
  readonly id: string
  readonly labelKey: string
  readonly skills: readonly Skill[]
}

export interface ProfileLink extends ContentLink {
  readonly id: string
}
