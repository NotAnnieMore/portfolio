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
    <div className="grid gap-4 border-t border-line pt-5 sm:grid-cols-[8rem_1fr] lg:grid-cols-[12rem_1fr]">
      <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
        {index}
      </p>
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
