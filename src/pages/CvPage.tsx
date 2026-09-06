import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

import { EditorialPageHero } from '../components/layout/EditorialPageHero'
import { isSupportedLocale } from '../i18n/locales'
import { usePageMeta } from '../utils/usePageMeta'

const cvDocuments = [
  {
    locale: 'pt',
    href: '/cv/ivo-camacho-cv-pt.pdf',
    preview: '/images/cv/cv-pt-preview.webp',
  },
  {
    locale: 'en',
    href: '/cv/ivo-camacho-cv-en.pdf',
    preview: '/images/cv/cv-en-preview.webp',
  },
] as const

export function CvPage() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const activeLocale = isSupportedLocale(locale) ? locale : 'en'
  const orderedDocuments = [...cvDocuments].sort((first, second) => {
    if (first.locale === activeLocale) return -1
    if (second.locale === activeLocale) return 1
    return 0
  })
  usePageMeta(t('pages.cv.metaTitle'), t('pages.cv.metaDescription'))

  return (
    <article>
      <EditorialPageHero
        annotation={t('pages.cv.annotation')}
        description={t('pages.cv.introduction')}
        eyebrow={t('pages.cv.eyebrow')}
        imageHeight={1350}
        imageSrc="/images/page-heroes/cv.webp"
        imageWidth={900}
        title={t('pages.cv.title')}
      />

      <section className="bg-surface py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 border-t border-line pt-5 lg:grid-cols-[12rem_minmax(0,1fr)]">
            <p className="font-mono text-xs tracking-[0.16em] text-green-readable">
              01 / 01
            </p>
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                {t('pages.cv.documents.title')}
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                {t('pages.cv.documents.introduction')}
              </p>

              <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
                {orderedDocuments.map((document) => (
                  <article className="flex flex-col border-t border-line pt-6" key={document.locale}>
                    <div className="flex items-start justify-between gap-6 md:min-h-32">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-green-readable">
                          {t(`pages.cv.documents.${document.locale}.label`)}
                        </p>
                        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em]">
                          {t(`pages.cv.documents.${document.locale}.title`)}
                        </h3>
                      </div>
                      {document.locale === activeLocale ? (
                        <span className="font-mono text-xs text-action-readable">
                          {t('pages.cv.documents.current')}
                        </span>
                      ) : null}
                    </div>

                    <a
                      aria-label={t(`pages.cv.documents.${document.locale}.viewLabel`)}
                      className="focus-ring mt-7 block overflow-hidden border border-line bg-page transition-colors hover:border-action"
                      href={document.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        alt={t(`pages.cv.documents.${document.locale}.previewAlt`)}
                        className="h-auto w-full"
                        decoding="async"
                        height="1414"
                        loading={document.locale === activeLocale ? 'eager' : 'lazy'}
                        src={document.preview}
                        width="1000"
                      />
                    </a>

                    <p className="mt-4 text-sm leading-6 text-muted">
                      {t('pages.cv.documents.fileMeta')}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                      <a
                        aria-label={t(
                          `pages.cv.documents.${document.locale}.viewLabel`,
                        )}
                        className="focus-ring inline-flex min-h-11 items-center bg-action-fill px-5 py-3 text-action-contrast transition-colors hover:bg-action-fill-hover"
                        href={document.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {t('pages.cv.documents.view')} ↗
                      </a>
                      <a
                        aria-label={t(
                          `pages.cv.documents.${document.locale}.downloadLabel`,
                        )}
                        className="focus-ring inline-flex min-h-11 items-center border border-line-strong px-5 py-3 transition-colors hover:border-action"
                        download
                        href={document.href}
                      >
                        {t('pages.cv.documents.download')} ↓
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <aside className="bg-contact py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="max-w-3xl text-sm leading-7 text-muted">
            {t('pages.cv.updateNote')}
          </p>
        </div>
      </aside>
    </article>
  )
}
