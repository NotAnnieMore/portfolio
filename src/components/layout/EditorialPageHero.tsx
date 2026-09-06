interface EditorialPageHeroProps {
  annotation: string
  annotationPlacement?: 'lower' | 'upper-right'
  description: string
  imageHeight: number
  imageSrc: string
  imageWidth: number
  title: string
}

export function EditorialPageHero({
  annotation,
  annotationPlacement = 'lower',
  description,
  imageHeight,
  imageSrc,
  imageWidth,
  title,
}: EditorialPageHeroProps) {
  return (
    <header className="mx-auto max-w-6xl px-6 pb-6 pt-20 sm:pb-8 sm:pt-24 lg:px-10 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)] lg:items-center lg:gap-10">
        <div>
          <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-balance">
            {title}
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">
            {description}
          </p>
        </div>

        <figure
          aria-hidden="true"
          className="relative min-h-[26rem] overflow-hidden sm:min-h-[30rem] lg:-mr-10 lg:min-h-[32rem] lg:overflow-visible xl:-mr-16"
        >
          <img
            alt=""
            className={`absolute left-1/2 top-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:h-full ${
              annotationPlacement === 'upper-right'
                ? 'lg:left-[56%] lg:h-[114%] xl:left-[60%] xl:h-[116%]'
                : 'lg:left-[56%] lg:h-[122%] xl:left-[60%]'
            }`}
            decoding="async"
            fetchPriority="high"
            height={imageHeight}
            src={imageSrc}
            width={imageWidth}
          />
          <figcaption
            className={`editorial-note absolute right-3 z-20 hidden max-w-40 text-lg leading-6 text-ink min-[1400px]:block ${
              annotationPlacement === 'upper-right'
                ? 'bottom-44 min-[1400px]:-right-36'
                : '-bottom-10 min-[1400px]:-right-1'
            }`}
          >
            {annotation}
          </figcaption>
        </figure>
      </div>
    </header>
  )
}
