import { useEffect } from 'react'

const SITE_URL = 'https://ivocamacho.com'

function setMeta(name: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[name="${name}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.name = name
    document.head.append(element)
  }

  element.content = content
}

export function usePageMeta(
  title: string,
  description: string,
  noIndex = false,
) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow')

    const canonicalUrl = new URL(window.location.pathname, SITE_URL).toString()
    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }

    canonical.href = canonicalUrl
  }, [description, noIndex, title])
}

