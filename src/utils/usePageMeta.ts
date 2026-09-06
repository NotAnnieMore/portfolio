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

function setPropertyMeta(property: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.append(element)
  }

  element.content = content
}

function setAlternateLink(language: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${language}"]`,
  )

  if (!element) {
    element = document.createElement('link')
    element.rel = 'alternate'
    element.hreflang = language
    document.head.append(element)
  }

  element.href = href
}

function pathForLocale(pathname: string, locale: 'en' | 'pt') {
  const segments = pathname.split('/')

  if (segments[1] === 'en' || segments[1] === 'pt') {
    segments[1] = locale
  } else {
    segments.splice(1, 0, locale)
  }

  return segments.join('/') || `/${locale}`
}

function socialImageForPath(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  const locale = segments[0] === 'pt' ? 'pt' : 'en'
  const route = segments.slice(1).join('/')
  const imageKey =
    route === 'projects'
      ? 'projects'
      : route === 'about'
        ? 'about'
        : route === 'cv'
          ? 'cv'
          : route.startsWith('projects/job-application-tracker')
            ? 'job-application-tracker'
            : route.startsWith('projects/als-prognosis-thesis')
              ? 'als-prognosis-thesis'
              : route.startsWith('projects/professional-portfolio')
                ? 'professional-portfolio'
                : 'home'

  return new URL(`/og/${imageKey}-${locale}.jpg`, SITE_URL).toString()
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
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    const canonicalUrl = new URL(window.location.pathname, SITE_URL).toString()
    const socialImageUrl = socialImageForPath(window.location.pathname)
    const isPortuguese = window.location.pathname.split('/')[1] === 'pt'
    const englishUrl = new URL(
      pathForLocale(window.location.pathname, 'en'),
      SITE_URL,
    ).toString()
    const portugueseUrl = new URL(
      pathForLocale(window.location.pathname, 'pt'),
      SITE_URL,
    ).toString()

    setPropertyMeta('og:title', title)
    setPropertyMeta('og:description', description)
    setPropertyMeta('og:url', canonicalUrl)
    setPropertyMeta('og:image', socialImageUrl)
    setPropertyMeta('og:image:type', 'image/jpeg')
    setPropertyMeta('og:image:width', '1200')
    setPropertyMeta('og:image:height', '630')
    setPropertyMeta('og:image:alt', title)
    setPropertyMeta('og:locale', isPortuguese ? 'pt_PT' : 'en_GB')
    setPropertyMeta('og:locale:alternate', isPortuguese ? 'en_GB' : 'pt_PT')
    setAlternateLink('en', englishUrl)
    setAlternateLink('pt-PT', portugueseUrl)
    setAlternateLink('x-default', englishUrl)
    setMeta('twitter:image', socialImageUrl)
    setMeta('twitter:image:alt', title)

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
