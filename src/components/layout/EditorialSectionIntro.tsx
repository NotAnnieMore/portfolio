interface EditorialSectionIntroProps {
  count: string
  description: string
  eyebrow: string
  note: string
  title: string
}

export function EditorialSectionIntro({
  count,
  description,
  eyebrow,
  note,
  title,
}: EditorialSectionIntroProps) {
  return (
    <div className="grid gap-10 border-t border-line pt-7 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16">
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-green-readable">
          {eyebrow}
        </p>
        <h2 className="mt-6 max-w-4xl text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
          {title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
          {description}
        </p>
      </div>

      <aside className="hidden self-start border-l border-line-strong pl-6 lg:block">
        <p className="whitespace-pre-line font-mono text-xs uppercase italic leading-6 tracking-[0.14em] text-muted">
          {note}
        </p>
        <p className="mt-6 font-mono text-xs font-semibold tracking-[0.16em] text-green-readable">
          {count}
        </p>
      </aside>
    </div>
  )
}
