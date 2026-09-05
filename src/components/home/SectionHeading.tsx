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
    <div className="grid gap-4 border-t-2 border-green pt-6 sm:grid-cols-[8rem_1fr] lg:grid-cols-[12rem_1fr]">
      <div className="flex items-center gap-3 self-start">
        <p className="bg-green-soft px-3 py-2 font-mono text-xs tracking-[0.16em] text-green-readable">
          {index}
        </p>
        <span aria-hidden="true" className="h-px w-10 bg-green" />
      </div>
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-muted">{description}</p>
        ) : null}
      </div>
    </div>
  )
}
