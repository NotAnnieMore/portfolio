interface SectionHeadingProps {
  index: string
  title: string
  description?: string
  emphasis?: boolean
}

export function SectionHeading({
  index,
  title,
  description,
  emphasis = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`grid gap-4 sm:grid-cols-[8rem_1fr] lg:grid-cols-[12rem_1fr] ${
        emphasis
          ? 'border-t-2 border-green pt-6'
          : 'border-t border-line pt-5'
      }`}
    >
      <div className="flex items-center gap-3 self-start">
        <p
          className={`font-mono text-xs tracking-[0.16em] text-green-readable ${
            emphasis ? 'bg-green-soft px-3 py-2' : 'font-semibold'
          }`}
        >
          {index}
        </p>
        <span
          aria-hidden="true"
          className={`h-px bg-green ${emphasis ? 'w-10' : 'w-8'}`}
        />
      </div>
      <div className="max-w-2xl">
        <h2
          className={`font-semibold tracking-[-0.035em] ${
            emphasis ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-muted">{description}</p>
        ) : null}
      </div>
    </div>
  )
}
