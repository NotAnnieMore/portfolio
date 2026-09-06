export const en = {
  accessibility: {
    skipToContent: 'Skip to content',
    backToTop: 'Back to top',
  },
  navigation: {
    primary: 'Primary navigation',
    projects: 'Projects',
    about: 'About',
    cv: 'CV',
  },
  language: {
    switchTo: 'Switch language to {{language}}',
  },
  theme: {
    switchToDark: 'Use dark theme',
    switchToLight: 'Use light theme',
  },
  footer: {
    note: '© {{year}} Ivo Camacho',
  },
  content: {
    projects: {
      jobApplicationTracker: {
        title: 'Job Application Tracker',
        summary:
          'A full-stack application that brings job applications, companies, recruiters, interviews, and follow-up tasks into one workflow.',
        imageAlt:
          'Job Application Tracker dashboard in English with anonymised illustrative data',
        imageCaption:
          'Responsive dashboard with anonymised illustrative data. The application itself supports English and Portuguese.',
        applicationsImageAlt:
          'Applications list with search, combined filters, sorting, and anonymised illustrative records',
        applicationsImageCaption:
          'Application management keeps search, combined filters, ordering, and quick status changes in one view.',
        interviewImageAlt:
          'Interview summary with schedule, recruiter, preparation, and anonymised illustrative details',
        interviewImageCaption:
          'The interview summary separates consultation from editing while keeping preparation and follow-up close at hand.',
        mobileImageAlt:
          'Portuguese interview summary on a narrow mobile screen in dark mode',
        mobileImageCaption:
          'The same interview workflow adapts to a narrow screen without removing context or actions.',
      },
      alsThesis: {
        title: 'Explainable Machine Learning for ALS Prognosis',
        summary:
          'Applied research combining functional progression classification and survival prediction with explainability and experimental reproducibility.',
        imageAlt:
          'Experimental machine learning pipeline from cohort definition to model assessment and explainability',
        imageCaption:
          'Experimental pipeline covering cohort definition, model selection, held-out evaluation, and SHAP interpretability.',
        precisionRecallImageAlt:
          'Precision–recall curves for seven models on the six-month functional progression test set',
        precisionRecallImageCaption:
          'Held-out Precision–Recall curves for Study I. The dashed line marks the rapid-progression prevalence baseline of 0.30.',
        studyOneShapImageAlt:
          'SHAP beeswarm showing how baseline variables influenced the XGBoost functional progression predictions',
        studyOneShapImageCaption:
          'Study I global SHAP view. Baseline ALSFRS-R had the largest overall contribution, with respiratory measurements and age also recurring.',
        studyTwoShapImageAlt:
          'Feature importance and SHAP value distributions for the LightGBM survival model with random oversampling',
        studyTwoShapImageCaption:
          'In Study II, diagnostic delay and ALSFRS-R item slopes were prominent in the LightGBM explanations. These are predictive associations, not causal effects.',
      },
      professionalPortfolio: {
        title: 'Professional Portfolio',
        summary:
          'A bilingual and accessible static portfolio designed to present selected work through context, decisions, and case studies.',
        desktopImageAlt:
          'English portfolio home page in light mode on a desktop viewport',
        desktopImageCaption:
          'The desktop home page uses typography, spacing, and a restrained palette to establish hierarchy without decorative effects.',
        mobileImageAlt:
          'Portuguese projects page in dark mode on a narrow mobile viewport',
        mobileImageCaption:
          'The mobile layout changes its spacing and navigation hierarchy instead of simply compressing the desktop composition.',
      },
    },
    projectCategories: {
      product: 'Product',
      academic: 'Academic research',
      experiment: 'Experiment',
    },
    projectStatuses: {
      completed: 'Completed',
      'in-progress': 'In progress',
      maintained: 'Live and maintained',
    },
    dates: {
      present: 'Present',
    },
    experience: {
      teachingAssistant: {
        role: 'Teaching Assistant, Introduction to Programming',
        summary:
          'Supported students as they learned programming fundamentals, algorithms, and problem solving with Python.',
      },
      softwareDeveloperIntern: {
        role: 'Software Developer Intern',
        summary:
          'Contributed to a React and Vite condominium-management dashboard covering requests, shared-space reservations, data consultation, and payment-management support.',
      },
      mobileDeveloperIntern: {
        role: 'Mobile Application Developer Intern',
        summary:
          'Built and maintained a Microsoft Power Apps workflow for car-wash operations and supported its data migration to Microsoft SQL Server.',
      },
      multimediaIntern: {
        role: 'Graphic Design and Multimedia Intern',
        summary:
          'Created graphic and audiovisual material using Adobe design and video-production tools.',
      },
    },
    education: {
      mastersAppliedInformatics: 'Master’s Degree in Applied Informatics',
      bachelorsComputerEngineering: 'Bachelor’s Degree in Computer Engineering',
      bachelorsInformatics: 'Bachelor’s Degree in Informatics',
      ctespInformationSystems:
        'Higher Professional Technical Diploma in Information Systems Technologies and Programming',
      professionalMultimediaCourse: 'Professional Course in Multimedia',
    },
    skillGroups: {
      webDevelopment: 'Web development',
      dataAndBackend: 'Data and backend',
      appliedMachineLearning: 'Applied machine learning',
      microsoftLowCode: 'Microsoft and low-code',
      toolsAndDelivery: 'Tools and delivery',
    },
    links: {
      live: 'Live application',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      mainRepository: 'Main repository',
      replicationRepository: 'Replication repository',
      cvEnglish: 'CV in English',
      cvPortuguese: 'CV in Portuguese',
    },
  },
  pages: {
    home: {
      metaTitle: 'Ivo Camacho — Portfolio',
      metaDescription:
        'Software developer working across web applications, data, and applied machine learning.',
      hero: {
        illustrationAlt:
          'Editorial illustration of a laptop, notebook, coffee mug, and leafy plant',
        annotation: 'Build. Learn. Improve.',
        name: 'Ivo Camacho',
        title:
          'Software developer across web applications, data, and applied machine learning.',
        introduction:
          'I work with TypeScript, React, Python, and relational data across personal, academic, and professional projects. I am currently completing a Master’s thesis on explainable and reproducible Machine Learning for ALS prognosis.',
        location: 'Based in Portugal · Working in English and Portuguese',
      },
      actions: {
        viewProjects: 'View projects',
        viewAllProjects: 'View all projects',
        viewCv: 'View CV',
        readCaseStudy: 'Read case study',
      },
      featured: {
        title: 'Selected work',
        description:
          'Three projects that represent product development, applied research, and the decisions behind this portfolio.',
      },
      experience: {
        title: 'Selected experience',
        description:
          'Practical work across programming education, web development, operational applications, and technical support.',
      },
      skills: {
        title: 'Technical areas',
        description:
          'A focused view of the technologies supported by the work and projects shown here.',
      },
      education: {
        title: 'Education',
      },
      contact: {
        label: 'Contact',
        title: 'Open to conversations about software, data, and technical roles.',
        description:
          'You can reach me through LinkedIn, review my CV, or find the source code for the featured projects on GitHub.',
      },
    },
    projects: {
      title: 'Projects',
      eyebrow: 'Project index',
      annotation: 'From problem to product.',
      description:
        'A focused selection of product development and applied research, presented through the problem, the decisions, and the resulting system.',
      selectedTitle: 'Three projects, three contexts',
      viewProject: 'View project',
      currentProjectNote:
        'This portfolio is itself an evolving record of the work behind it.',
      metaTitle: 'Projects — Ivo Camacho',
      metaDescription: 'Selected projects and technical case studies by Ivo Camacho.',
    },
    project: {
      eyebrow: 'Project case study',
      backToProjects: 'All projects',
      title: 'Project case study',
      description:
        'Project content will be added after the project selection and content review.',
      metaTitle: 'Project — Ivo Camacho',
      metaDescription: 'Project case study by Ivo Camacho.',
      jobTracker: {
        metaDescription:
          'Case study of a bilingual, responsive job application tracker built with Next.js, Supabase, PostgreSQL, and Row Level Security.',
        eyebrow: 'Product case study · Live application',
        introduction:
          'A private, bilingual workspace that turns applications, companies, recruiters, interviews, and next actions into one coherent job-search workflow.',
        facts: {
          role: {
            label: 'Role',
            value: 'Product design and full-stack development',
          },
          year: {
            label: 'Year',
            value: '2026',
          },
          status: {
            label: 'Status',
            value: 'Live and actively maintained',
          },
          stack: {
            label: 'Core stack',
            value: 'Next.js 16 · Supabase · PostgreSQL',
          },
        },
        highlights: {
          languages: { value: '2', label: 'interface languages' },
          workflows: { value: '4', label: 'integrated core workflows' },
          protection: {
            value: 'RLS',
            label: 'tested per-user isolation',
          },
        },
        context: {
          title: 'From scattered notes to an operational workflow',
          body:
            'A job search produces connected information that spreadsheets and isolated notes handle poorly: a role belongs to a company, may involve a recruiter and several interviews, and usually creates follow-ups and deadlines.',
          bodyTwo:
            'The objective was not simply to store applications. It was to build a private web application that preserves this context and makes the next useful action visible on both desktop and mobile.',
        },
        capabilities: {
          title: 'One system around the application lifecycle',
          workflow: {
            title: 'Connected records',
            body:
              'Applications connect companies, opportunities, recruiters, notes, and status changes instead of treating each item as an isolated entry.',
          },
          interviews: {
            title: 'Interview preparation',
            body:
              'Dedicated summaries bring together schedule, contacts, personal talking points, questions, feedback, and outcome without forcing every visit into edit mode.',
          },
          agenda: {
            title: 'Operational agenda',
            body:
              'Interviews, follow-ups, and dated tasks are combined server-side into one chronology, including overdue items, without duplicating the underlying data.',
          },
          experience: {
            title: 'Adaptive experience',
            body:
              'Portuguese and English interfaces, persistent light and dark themes, responsive layouts, and contextual loading states support repeated daily use.',
          },
        },
        architecture: {
          title: 'A server-led architecture with data protection at its core',
          description:
            'The App Router combines server-rendered data, Server Actions, and focused interactive components. Authentication and authorisation remain close to the data rather than relying on hidden controls in the interface.',
          interface: {
            title: 'Responsive interface',
            body: 'React 19, Tailwind CSS 4, and focused client interactions.',
          },
          application: {
            title: 'Next.js 16',
            body: 'App Router, server components, Server Actions, and validated routes.',
          },
          identity: {
            title: 'Supabase Auth',
            body: 'PKCE sessions, SSR cookies, account confirmation, and server-side claims.',
          },
          data: {
            title: 'PostgreSQL + RLS',
            body: 'Relational records protected per user and per operation.',
          },
          note:
            'Supabase Storage holds validated profile images. Vercel deploys the application automatically from GitHub.',
        },
        decisions: {
          title: 'Decisions that shaped the product',
          security: {
            title: 'Enforce isolation in the database',
            body:
              'Every private table uses separate Row Level Security policies for reading, creating, updating, and deleting. Sensitive operations also verify the authenticated identity on the server, and two-user tests exercise real isolation.',
          },
          import: {
            title: 'Assist import without removing judgement',
            body:
              'The importer reads structured job data or pasted text, normalises LinkedIn and Indeed links, and always requires review. It blocks private addresses, oversized responses, and unsafe redirect chains before making a public request.',
          },
          filters: {
            title: 'Treat the URL as useful state',
            body:
              'Search, filters, date ranges, and ordering use validated query parameters. A working view survives refreshes and can be bookmarked or shared without another client-side state layer.',
          },
          localisation: {
            title: 'Translate the interface, not personal data',
            body:
              'The UI, validation, dates, and counts support pt-PT and en-GB. User-written job descriptions, notes, and interview preparation stay exactly as entered, while language and theme preferences persist in the browser.',
          },
        },
        gallery: {
          title: 'Product surfaces',
          disclaimer:
            'The presentation images were edited with AI to replace personal and company data with fictional examples. They illustrate the interface and may contain small visual differences from the live application.',
          mobileLabel: 'Responsive behaviour',
        },
        outcome: {
          title: 'A working product, not a static prototype',
          body:
            'The result is a deployed, authenticated application covering the flow from account creation to applications, interviews, tasks, agenda, and profile management. It is available in two languages and designed for desktop and mobile use.',
          bodyTwo:
            'The repository records the decisions and quality checks behind the interface: TypeScript, linting, translation parity, domain-validation scripts, production builds, and database-level RLS tests. The project remains actively maintained as the real workflow evolves.',
        },
      },
      alsThesis: {
        metaDescription:
          'Case study of a master’s thesis on explainable machine learning for ALS functional progression and survival prognosis using PRO-ACT data.',
        eyebrow: 'Academic research · Master’s thesis',
        introduction:
          'Two connected studies ask a shared question: when prognosis data is imbalanced and clinically sensitive, what makes a machine-learning result credible beyond a strong headline metric?',
        facts: {
          role: {
            label: 'Role',
            value: 'Research design, implementation, analysis, and writing',
          },
          period: { label: 'Period', value: '2025 — present' },
          dataset: {
            label: 'Dataset',
            value: 'PRO-ACT · 23 ALS clinical trials',
          },
          status: { label: 'Status', value: 'Thesis in progress' },
        },
        highlights: {
          studies: { value: '2', label: 'connected studies' },
          classifiers: { value: '7', label: 'classifiers evaluated' },
          sensitivity: {
            value: '85.7%',
            label: 'Study II held-out sensitivity',
          },
        },
        problem: {
          title: 'Prognosis is not just a classification problem',
          body:
            'Amyotrophic lateral sclerosis progresses very differently between people. A useful prognosis workflow must therefore handle longitudinal records, limited minority cases, changing clinical horizons, and the consequences of false negatives and false positives.',
          bodyTwo:
            'The thesis uses longitudinal records from 23 clinical trials in the PRO-ACT database. Instead of collapsing the work into one model, it examines two distinct outcomes and treats validation design, class imbalance, decision thresholds, and explainability as part of the modelling itself.',
        },
        studies: {
          title: 'Two outcomes, one methodological question',
          functional: {
            label: 'Study I · Original pipeline',
            title: 'Functional progression at three and six months',
            body:
              'Seven classifiers use baseline clinical information to distinguish rapid from slow ALSFRS-R progression. Feature groups, class weighting, prediction horizon, global explanations, and individual explanations are evaluated together.',
            detail:
              'The rapid-progression target is estimated inside each training fold, avoiding information from validation participants leaking into target construction.',
          },
          survival: {
            label: 'Study II · Replication and extension',
            title: 'Survival prognosis within 24 months',
            body:
              'A partial replication of published BalancedBagging work is extended with seven classifiers, ten imbalance-handling strategies, Bayesian optimisation, held-out testing, threshold analysis, uncertainty estimates, and SHAP.',
            detail:
              'The study tests whether strong ROC-AUC ranking also translates into adequate detection of the smaller Short Survivor class.',
          },
        },
        safeguards: {
          title: 'Rigor designed into the workflow',
          introduction:
            'The most important engineering work happens before a final score appears. The pipeline makes the boundaries between learning, selection, and evaluation explicit.',
          separation: {
            title: 'Separate people, not rows',
            body:
              'Participants are separated across partitions so repeated clinical records from the same person cannot make validation results look artificially strong.',
          },
          folds: {
            title: 'Keep transformations inside training',
            body:
              'Target estimation and resampling happen only within training folds. Hyperparameters are selected with cross-validation rather than by repeatedly consulting the final test set.',
          },
          evaluation: {
            title: 'Evaluate once, from several angles',
            body:
              'Final candidates are assessed on a held-out cohort with confidence intervals, minority-class measures, decision-threshold behaviour, and metrics suited to each outcome.',
          },
          interpretation: {
            title: 'Explain without claiming causality',
            body:
              'SHAP, LIME, and coefficients reveal patterns used by the models. Their agreement and disagreement are examined, while explanations remain predictive associations rather than clinical causes.',
          },
        },
        results: {
          title: 'Results with the trade-offs left visible',
          introduction:
            'The results support the workflow’s value, but they also show why no single metric is enough for a prognosis claim.',
          functional: {
            label: 'Study I · Six-month hold-out',
            metric: '0.456',
            metricLabel: 'PR-AUC · XGBoost · n = 279',
            body:
              'At the development-derived threshold of 0.21, the model reached 85.7% recall and 35.1% precision. This prioritised sensitivity, but also produced many false positives — a trade-off that must remain explicit.',
          },
          survival: {
            label: 'Study II · Held-out test',
            metric: '0.923',
            metricLabel: 'ROC-AUC · LightGBM + ROS · n = 301',
            body:
              'The model reached 85.7% sensitivity and 83.1% specificity, with a 95% ROC-AUC interval of 0.868–0.966. Another configuration had overlapping intervals, so the evidence does not establish clear superiority.',
          },
          caution:
            'A neural model provided a particularly useful warning: strong ranking performance at the default threshold still detected only 1 of 35 Short Survivors. Threshold choice is part of the model, not a finishing detail.',
        },
        evidence: {
          title: 'From aggregate performance to model behaviour',
          introduction:
            'The analysis moves from held-out discrimination to the variables shaping predictions. The figures are outputs from the actual experimental pipelines, not recreated marketing graphics.',
          studyTwoLabel: 'Study II · Explanation layer',
        },
        outcome: {
          title: 'The contribution is methodological, not a deployment claim',
          body:
            'Across two prognosis tasks, the thesis shows how patient separation, target construction, imbalance strategy, threshold choice, uncertainty, and explainability can materially change what a headline score means.',
          bodyTwo:
            'The work does not propose that predictions should determine care in isolation. Its output is a reproducible research pipeline and a cautious account of where the models are informative, where they fail, and what would need further validation before clinical use.',
        },
      },
      portfolio: {
        metaDescription:
          'Case study of Ivo Camacho’s bilingual, accessible, and responsive professional portfolio built with React, TypeScript, Vite, and i18next.',
        eyebrow: 'Portfolio case study · This website',
        introduction:
          'A deliberately restrained website that turns selected work, experience, and technical evidence into a clear professional narrative — without imitating a dashboard or a generic developer template.',
        facts: {
          role: {
            label: 'Role',
            value: 'Information architecture, visual direction, content, and frontend',
          },
          year: { label: 'Year', value: '2026' },
          format: { label: 'Format', value: 'Static bilingual website' },
          stack: { label: 'Core stack', value: 'React · TypeScript · Vite' },
        },
        highlights: {
          languages: { value: '2', label: 'languages in one interface' },
          caseStudies: { value: '3', label: 'detailed case studies' },
          backend: { value: '0', label: 'backend dependencies' },
        },
        purpose: {
          title: 'A portfolio should explain the work, not repeat GitHub',
          body:
            'The brief was to help a recruiter or technical reader understand, within a few minutes, what I work on, what I have built, and how I approach decisions. A repository already shows files and commits; this site adds context, trade-offs, and outcomes.',
          bodyTwo:
            'That led to a small top-level structure — Home, Projects, About, and CV — and three selected projects presented in depth. Content priority follows professional value rather than repository count or creation date.',
        },
        principles: {
          title: 'An editorial system, not a template aesthetic',
          hierarchy: {
            title: 'Typography carries the hierarchy',
            body:
              'Scale, line length, and generous vertical rhythm do most of the visual work. Sections can breathe instead of competing inside identical cards.',
          },
          evidence: {
            title: 'Real work is the visual material',
            body:
              'Product screenshots, research figures, verified technologies, and concrete decisions replace decorative code windows or unsupported claims.',
          },
          restraint: {
            title: 'Neutrals remain dominant',
            body:
              'Green organises labels and small details; orange is reserved for important actions. There are no gradients or glows, and motion is limited to restrained scroll transitions.',
          },
          responsive: {
            title: 'Mobile has its own rhythm',
            body:
              'Navigation, spacing, typography, image scale, and content order adapt at narrow widths rather than treating mobile as a squeezed desktop.',
          },
        },
        architecture: {
          title: 'One content model, two languages, static delivery',
          introduction:
            'Language-neutral project data is separated from editorial translations. Shared React components consume both, so English and Portuguese do not become duplicated page implementations.',
          content: {
            title: 'Structured evidence',
            body: 'Projects, experience, education, skills, links, and media live in typed data modules.',
          },
          locale: {
            title: 'Locale-aware routes',
            body: 'i18next and React Router serve the same components through stable /en and /pt URLs.',
          },
          interface: {
            title: 'Shared interface',
            body: 'React components apply the editorial layouts, semantic colour tokens, and accessible interactions.',
          },
          deployment: {
            title: 'Static production build',
            body: 'Vite creates deployable files while Apache fallback rules preserve direct access to client routes.',
          },
          note:
            'The result has no application server or content-management dependency. The repository remains the source of truth for content and assets.',
        },
        details: {
          title: 'Small behaviours that make the system feel complete',
          language: {
            title: 'Language follows context',
            body:
              'A first visit uses the browser language, while an explicit toggle persists the reader’s choice. Switching language keeps the current page and the control displays the language being read.',
          },
          theme: {
            title: 'Themes are designed through tokens',
            body:
              'Light and dark modes share semantic CSS variables but use intentionally different surfaces and contrast. Stored or system preference is applied before React loads to avoid a visible theme flash.',
          },
          accessibility: {
            title: 'Navigation remains usable',
            body:
              'Semantic landmarks, a skip link, visible focus states, descriptive alternatives, reduced-motion support, a persistent header, and a focus-aware back-to-top control cover common keyboard and reading needs.',
          },
          delivery: {
            title: 'Routine updates stay simple',
            body:
              'The production build is a static directory. CV files use stable public paths, so an urgent PDF replacement can be deployed independently while the versioned copy remains in the repository.',
          },
        },
        outcome: {
          title: 'A portfolio that can grow without losing its point of view',
          body:
            'The current system presents three different kinds of work with distinct case-study rhythms while keeping navigation, language, themes, and content structure consistent across the site.',
          bodyTwo:
            'Its main constraint is also useful: new content must earn its place through verified context and evidence. That keeps future updates focused and prevents the portfolio from becoming an unfiltered catalogue of repositories.',
        },
      },
    },
    about: {
      title: 'About',
      eyebrow: 'Profile and experience',
      annotation: 'Learn, build, evolve.',
      introduction:
        'Software developer working across web applications, relational data, and applied Machine Learning, with experience that also includes programming education, mobile workflows, and technical problem-solving.',
      location: 'Based in Portugal · Working in English and Portuguese',
      focus: {
        title: 'Working across connected technical layers',
        introduction:
          'My strongest work sits where interface decisions, data structures, and practical constraints meet. I am comfortable moving between implementation detail and the wider purpose of a system.',
        product: {
          title: 'Web products',
          body:
            'Responsive interfaces and full-stack workflows built with React, TypeScript, Next.js, Vite, Supabase, and PostgreSQL.',
        },
        data: {
          title: 'Data and operations',
          body:
            'Relational modelling, access control, SQL-backed processes, and interfaces designed around real operational information.',
        },
        research: {
          title: 'Applied Machine Learning',
          body:
            'Reproducible experimental pipelines, imbalanced classification, validation design, and cautious explainability for ALS prognosis research.',
        },
      },
      experience: {
        title: 'Professional experience',
        introduction:
          'Experience spanning programming education, web development, operational mobile applications, data migration, and earlier multimedia production.',
      },
      skills: {
        title: 'Technical areas',
        introduction:
          'Technologies are grouped by where I have used them in projects or professional work — not by arbitrary proficiency percentages.',
      },
      education: {
        title: 'Education and training',
        introduction:
          'A progression from multimedia and information-systems training to Informatics, Computer Engineering, and a Master’s in Applied Informatics.',
      },
      closing: {
        title: 'The projects show the detail behind the profile.',
        body:
          'For architecture, trade-offs, research results, and working interfaces, the selected case studies are the best place to continue. The CV provides the compact chronological version.',
        projects: 'Explore projects',
        cv: 'View CV',
      },
      metaTitle: 'About — Ivo Camacho',
      metaDescription:
        'Professional profile, experience, technical areas, and education of software developer Ivo Camacho.',
    },
    cv: {
      title: 'Curriculum Vitae',
      eyebrow: 'Professional documents',
      annotation: 'Experience in context.',
      introduction:
        'Choose the Portuguese or English version. Both documents can be opened in the browser or downloaded as the original PDF.',
      documents: {
        title: 'Two languages, the same professional record',
        introduction:
          'The version matching the website language appears first. Each PDF contains two A4 pages and opens independently from the portfolio.',
        current: 'Current language',
        pt: {
          label: 'Português · PT-PT',
          title: 'Curriculum Vitae em português',
          previewAlt: 'Preview of the first page of Ivo Camacho’s Portuguese CV',
          viewLabel: 'Open Ivo Camacho’s Portuguese CV in a new tab',
          downloadLabel: 'Download Ivo Camacho’s Portuguese CV',
        },
        en: {
          label: 'English · EN',
          title: 'Curriculum Vitae in English',
          previewAlt: 'Preview of the first page of Ivo Camacho’s English CV',
          viewLabel: 'Open Ivo Camacho’s English CV in a new tab',
          downloadLabel: 'Download Ivo Camacho’s English CV',
        },
        fileMeta: 'PDF · 2 pages · A4',
        view: 'Open PDF',
        download: 'Download',
      },
      updateNote:
        'The PDF addresses remain stable. When a CV is updated, the corresponding file can be replaced without changing links across the website.',
      metaTitle: 'CV — Ivo Camacho',
      metaDescription:
        'View or download Ivo Camacho’s curriculum vitae in English or Portuguese.',
    },
    notFound: {
      title: 'Page not found',
      description: 'The page you requested does not exist.',
      backHome: 'Return home',
      metaTitle: 'Page not found — Ivo Camacho',
      metaDescription: 'The requested page could not be found.',
    },
  },
} as const
