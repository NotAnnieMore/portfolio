import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  applyTheme,
  getAppliedTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from '../../utils/theme'

export function ThemeToggle() {
  const { t } = useTranslation()
  const [theme, setTheme] = useState<Theme>(getAppliedTheme)

  useEffect(() => {
    if (localStorage.getItem(THEME_STORAGE_KEY)) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const systemTheme: Theme = mediaQuery.matches ? 'dark' : 'light'
      applyTheme(systemTheme)
      setTheme(systemTheme)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'

  function toggleTheme() {
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    applyTheme(nextTheme)
    setTheme(nextTheme)
  }

  const label =
    nextTheme === 'dark' ? t('theme.switchToDark') : t('theme.switchToLight')

  return (
    <button
      aria-label={label}
      className="focus-ring grid size-10 place-items-center text-muted transition-colors hover:text-ink"
      onClick={toggleTheme}
      title={label}
      type="button"
    >
      {theme === 'dark' ? (
        <Sun aria-hidden="true" size={18} strokeWidth={1.75} />
      ) : (
        <Moon aria-hidden="true" size={18} strokeWidth={1.75} />
      )}
    </button>
  )
}

