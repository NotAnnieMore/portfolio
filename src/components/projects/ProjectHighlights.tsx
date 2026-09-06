import { useTranslation } from 'react-i18next'

interface ProjectHighlightsProps {
  keys: readonly string[]
  translationKey: string
}

export function ProjectHighlights({
  keys,
  translationKey,
}: ProjectHighlightsProps) {
  const { t } = useTranslation()

  return (
    <dl className="mt-10 grid gap-4 sm:grid-cols-3">
      {keys.map((key) => (
        <div
          className="flex min-h-32 flex-col border-t-2 border-green bg-surface-soft px-5 py-5"
          key={key}
        >
          <dt className="mt-3 text-sm leading-6 text-muted">
            {t(`${translationKey}.${key}.label`)}
          </dt>
          <dd className="order-first text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
            {t(`${translationKey}.${key}.value`)}
          </dd>
        </div>
      ))}
    </dl>
  )
}
