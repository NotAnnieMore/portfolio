export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'portfolio-theme'

export function getAppliedTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme

  const themeColor = theme === 'dark' ? '#171817' : '#f6f5f2'
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', themeColor)
}

