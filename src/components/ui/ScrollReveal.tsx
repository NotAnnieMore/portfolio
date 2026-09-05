import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

const revealSelector = [
  '#main-content > section',
  '#main-content > header',
  '#main-content article > header',
  '#main-content article > section',
  '#main-content article > figure',
  '#main-content article > aside',
].join(', ')

function contentPath(pathname: string) {
  return pathname.replace(/^\/(en|pt)(?=\/|$)/, '') || '/'
}

export function ScrollReveal() {
  const { pathname } = useLocation()
  const activeContentPath = contentPath(pathname)

  useLayoutEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    )

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      elements.forEach((element) => element.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    )

    elements.forEach((element) => {
      element.classList.add('scroll-reveal')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [activeContentPath])

  return null
}
