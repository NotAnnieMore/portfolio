import type { Locale } from '../i18n/locales'

function formatDate(value: string, locale: Locale) {
  if (/^\d{4}$/.test(value)) return value

  const [year, month] = value.split('-').map(Number)
  if (!year || !month) return value

  return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-PT' : 'en-GB', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, 1)))
}

export function formatDateRange(
  startDate: string,
  endDate: string | undefined,
  locale: Locale,
  presentLabel: string,
) {
  const start = formatDate(startDate, locale)
  const end = endDate ? formatDate(endDate, locale) : presentLabel
  return `${start} — ${end}`
}

