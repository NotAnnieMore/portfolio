import {
  BrainCircuit,
  Braces,
  Database,
  PanelsTopLeft,
  Wrench,
} from 'lucide-react'

const icons = {
  'applied-machine-learning': BrainCircuit,
  'data-and-backend': Database,
  'microsoft-low-code': PanelsTopLeft,
  'tools-and-delivery': Wrench,
  'web-development': Braces,
} as const

interface SkillGroupIconProps {
  groupId: string
}

export function SkillGroupIcon({ groupId }: SkillGroupIconProps) {
  const Icon = icons[groupId as keyof typeof icons] ?? Wrench

  return (
    <Icon
      aria-hidden="true"
      className="size-5 shrink-0 text-green-readable"
      strokeWidth={1.6}
    />
  )
}
