export const en = {
  accessibility: {
    skipToContent: 'Skip to content',
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
      description:
        'Selected projects will be presented here as case studies based on real context, decisions, and outcomes.',
      metaTitle: 'Projects — Ivo Camacho',
      metaDescription: 'Selected projects and technical case studies by Ivo Camacho.',
    },
    project: {
      eyebrow: 'Project case study',
      title: 'Project case study',
      description:
        'Project content will be added after the project selection and content review.',
      metaTitle: 'Project — Ivo Camacho',
      metaDescription: 'Project case study by Ivo Camacho.',
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
