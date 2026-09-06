interface EditorialPageHeroProps {
  description: string
  eyebrow: string
  imageHeight: number
  imageSrc: string
  imageWidth: number
  title: string
}

export function EditorialPageHero({
  description,
  eyebrow,
  imageHeight,
  imageSrc,
  imageWidth,
  title,
}: EditorialPageHeroProps) {
  return (
    <header className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)] lg:items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-green" />
            <p className="text-sm font-semibold text-green-readable">
              {eyebrow}
            </p>
          </div>
          <h1 className="mt-7 max-w-4xl text-[clamp(3.5rem,8vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-balance">
            {title}
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">
            {description}
          </p>
        </div>

        <figure
          aria-hidden="true"
          className="relative min-h-[24rem] overflow-hidden sm:min-h-[28rem] lg:-mr-10 lg:min-h-[32rem] lg:overflow-visible xl:-mr-16"
        >
          <img
            alt=""
            className="absolute left-1/2 top-1/2 h-[112%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:h-[118%] lg:left-[56%] lg:h-[122%] xl:left-[60%]"
            decoding="async"
            fetchPriority="high"
            height={imageHeight}
            src={imageSrc}
            width={imageWidth}
          />
        </figure>
      </div>
    </header>
  )
}
