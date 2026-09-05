import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export function BackToTop() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 640)

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  if (!isVisible) return null

  function scrollToTop() {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })

    document
      .querySelector<HTMLAnchorElement>('header a[href]')
      ?.focus({ preventScroll: true })
  }

  return (
    <button
      aria-label={t('accessibility.backToTop')}
      className="focus-ring fixed bottom-5 right-5 z-50 grid size-11 place-items-center border border-line-strong bg-surface text-ink transition-colors hover:border-action hover:text-action-readable sm:bottom-8 sm:right-8"
      onClick={scrollToTop}
      title={t('accessibility.backToTop')}
      type="button"
    >
      <ArrowUp aria-hidden="true" size={18} strokeWidth={1.8} />
    </button>
  )
}
