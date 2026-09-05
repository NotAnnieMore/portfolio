interface SectionHeadingProps {
  index: string
  title: string
  description?: string
}

export function SectionHeading({
  index,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-4 border-t border-line pt-5 sm:grid-cols-[7rem_1fr] lg:grid-cols-[9rem_1fr]">
      <div className="flex items-center gap-3 self-start">
        <p className="font-mono text-xs font-semibold tracking-[0.16em] text-green-readable">
          {index}
        </p>
        <span aria-hidden="true" className="h-px w-8 bg-green" />
      </div>
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-muted">{description}</p>
        ) : null}
      </div>
    </div>
  )
}
