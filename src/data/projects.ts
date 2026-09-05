import type { Project } from '../types/content'

// Projects are added only after their content and portfolio relevance are approved.
export const projects: readonly Project[] = []

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
