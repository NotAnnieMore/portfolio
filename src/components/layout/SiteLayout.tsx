import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, Outlet, useParams } from 'react-router'

import { LanguageToggle } from '../ui/LanguageToggle'
import { ThemeToggle } from '../ui/ThemeToggle'
import { BackToTop } from '../ui/BackToTop'
import { isSupportedLocale } from '../../i18n/locales'

export function SiteLayout() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const updateHeader = () => setIsCompact(window.scrollY > 56)

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  const navItems = [
    { to: `/${activeLocale}/projects`, label: t('navigation.projects') },
    { to: `/${activeLocale}/about`, label: t('navigation.about') },
    { to: `/${activeLocale}/cv`, label: t('navigation.cv') },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <a className="skip-link" href="#main-content">
        {t('accessibility.skipToContent')}
      </a>

      <header className="sticky top-0 z-40 border-b border-line bg-page">
        <div
          className={`mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 px-6 transition-[padding] duration-200 motion-reduce:transition-none lg:px-10 ${
            isCompact ? 'gap-y-2 py-3' : 'gap-y-4 py-6'
          }`}
        >
          <NavLink
            aria-label="Ivo Camacho"
            className="inline-flex items-center gap-2.5 text-base font-semibold tracking-tight"
            to={`/${activeLocale}`}
          >
            <img
              alt=""
              className="size-6"
              height="24"
              src="/logo-icon.png"
              width="24"
            />
            <span>Ivo Camacho</span>
          </NavLink>

          <nav
            aria-label={t('navigation.primary')}
            className="order-3 w-full sm:order-none sm:ml-auto sm:w-auto"
          >
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-sm text-ink underline decoration-action decoration-2 underline-offset-8'
                        : 'text-sm text-muted transition-colors hover:text-ink'
                    }
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:ml-0 sm:border-l sm:border-line sm:pl-5">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1" id="main-content">
        <Outlet />
      </main>

      <BackToTop />

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>{t('footer.note', { year: new Date().getFullYear() })}</p>
          <a
            className="focus-ring transition-colors hover:text-ink"
            href="https://github.com/NotAnnieMore"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}
