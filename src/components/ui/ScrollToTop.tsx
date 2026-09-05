import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router'

function contentPath(pathname: string) {
  return pathname.replace(/^\/(en|pt)(?=\/|$)/, '') || '/'
}

export function ScrollToTop() {
  const { pathname } = useLocation()
  const previousContentPath = useRef<string | null>(null)

  useLayoutEffect(() => {
    const nextContentPath = contentPath(pathname)

    if (previousContentPath.current !== nextContentPath) {
      window.scrollTo({ left: 0, top: 0, behavior: 'auto' })
    }

    previousContentPath.current = nextContentPath
  }, [pathname])

  return null
}
