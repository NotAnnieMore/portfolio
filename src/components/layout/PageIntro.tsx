interface PageIntroProps {
  eyebrow?: string
  title: string
  description: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto min-h-[62vh] max-w-6xl px-6 py-24 sm:py-32 lg:px-10">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-5 text-sm font-medium text-accent">{eyebrow}</p>
        ) : null}
        <h1 className="text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
          {description}
        </p>
      </div>
    </section>
  )
}

