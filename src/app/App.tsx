import { Route, Routes } from 'react-router'

import { LanguageRedirect } from './LanguageRedirect'
import { LocaleRoute } from './LocaleRoute'
import { AboutPage } from '../pages/AboutPage'
import { CvPage } from '../pages/CvPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProjectPage } from '../pages/ProjectPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { ScrollToTop } from '../components/ui/ScrollToTop'

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<LanguageRedirect />} />
        <Route path=":locale" element={<LocaleRoute />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cv" element={<CvPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
