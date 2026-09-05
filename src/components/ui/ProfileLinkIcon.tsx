import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'

const icons = {
  email: Mail,
  github: GitBranch,
  linkedin: BriefcaseBusiness,
} as const

interface ProfileLinkIconProps {
  id: string
}

export function ProfileLinkIcon({ id }: ProfileLinkIconProps) {
  const Icon = icons[id as keyof typeof icons]

  if (!Icon) return null

  return <Icon aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.7} />
}
