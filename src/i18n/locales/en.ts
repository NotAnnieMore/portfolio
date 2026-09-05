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
      },
      professionalPortfolio: {
        title: 'Professional Portfolio',
        summary:
          'A bilingual and accessible static portfolio designed to present selected work through context, decisions, and case studies.',
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
      email: 'Email',
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
        emailMe: 'Send an email',
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
          'Email is the most direct way to reach me. You can also review my CV or find the source code for my work on GitHub.',
      },
    },
    projects: {
      title: 'Projects',
      eyebrow: 'Selected work',
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
            body: 'PKCE sessions, SSR cookies, email confirmation, and server-side claims.',
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
    },
    about: {
      title: 'About',
      description:
        'Professional experience, education, and technical interests will be added from verified information.',
      metaTitle: 'About — Ivo Camacho',
      metaDescription: 'Professional profile, experience, and education of Ivo Camacho.',
    },
    cv: {
      title: 'Curriculum Vitae',
      description:
        'Portuguese and English CVs will be available to view and download here.',
      metaTitle: 'CV — Ivo Camacho',
      metaDescription: 'View or download the CV of Ivo Camacho.',
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
