export const ptPT = {
  accessibility: {
    skipToContent: 'Saltar para o conteúdo',
    backToTop: 'Voltar ao topo',
  },
  navigation: {
    primary: 'Navegação principal',
    projects: 'Projetos',
    about: 'Sobre',
    cv: 'CV',
  },
  language: {
    switchTo: 'Mudar o idioma para {{language}}',
  },
  theme: {
    switchToDark: 'Usar tema escuro',
    switchToLight: 'Usar tema claro',
  },
  footer: {
    note: '© {{year}} Ivo Camacho',
  },
  content: {
    projects: {
      jobApplicationTracker: {
        title: 'Job Application Tracker',
        summary:
          'Uma aplicação full-stack que reúne candidaturas, empresas, recrutadores, entrevistas e tarefas de acompanhamento num único fluxo de trabalho.',
        imageAlt:
          'Dashboard do Job Application Tracker em inglês com dados ilustrativos anonimizados',
        imageCaption:
          'Dashboard responsivo com dados ilustrativos anonimizados. A aplicação suporta inglês e português.',
        applicationsImageAlt:
          'Lista de candidaturas com pesquisa, filtros combinados, ordenação e registos ilustrativos anonimizados',
        applicationsImageCaption:
          'A gestão de candidaturas reúne pesquisa, filtros combinados, ordenação e alteração rápida de estado na mesma vista.',
        interviewImageAlt:
          'Resumo de entrevista com agendamento, recrutador, preparação e dados ilustrativos anonimizados',
        interviewImageCaption:
          'O resumo da entrevista separa consulta e edição, mantendo a preparação e o acompanhamento facilmente acessíveis.',
        mobileImageAlt:
          'Resumo de entrevista em português num ecrã móvel estreito e em modo escuro',
        mobileImageCaption:
          'O mesmo fluxo de entrevista adapta-se a um ecrã estreito sem remover contexto ou ações.',
      },
      alsThesis: {
        title: 'Machine Learning Explicável para Prognóstico da ALS',
        summary:
          'Investigação aplicada que combina classificação da progressão funcional e previsão de sobrevivência com explicabilidade e reprodutibilidade experimental.',
        imageAlt:
          'Pipeline experimental de Machine Learning desde a definição da coorte até à avaliação e explicabilidade dos modelos',
        imageCaption:
          'Pipeline experimental que abrange definição da coorte, seleção de modelos, avaliação hold-out e interpretabilidade com SHAP.',
        precisionRecallImageAlt:
          'Curvas Precision–Recall de sete modelos no conjunto de teste da progressão funcional aos seis meses',
        precisionRecallImageCaption:
          'Curvas Precision–Recall hold-out do Estudo I. A linha tracejada representa a prevalência de 0,30 da classe de progressão rápida.',
        studyOneShapImageAlt:
          'Gráfico SHAP beeswarm que mostra a influência das variáveis iniciais nas previsões de progressão funcional do XGBoost',
        studyOneShapImageCaption:
          'Visão SHAP global do Estudo I. O ALSFRS-R inicial teve o maior contributo global; medidas respiratórias e idade também surgiram de forma recorrente.',
        studyTwoShapImageAlt:
          'Importância das variáveis e distribuições dos valores SHAP do modelo LightGBM de sobrevivência com sobreamostragem aleatória',
        studyTwoShapImageCaption:
          'No Estudo II, o atraso no diagnóstico e os declives dos itens ALSFRS-R destacaram-se nas explicações do LightGBM. São associações preditivas, não efeitos causais.',
      },
      professionalPortfolio: {
        title: 'Portefólio Profissional',
        summary:
          'Um portefólio estático, bilingue e acessível, concebido para apresentar trabalho selecionado através de contexto, decisões e casos de estudo.',
        desktopImageAlt:
          'Página inicial do portefólio em inglês e modo claro num ecrã de computador',
        desktopImageCaption:
          'A página inicial em desktop usa tipografia, espaço e uma paleta contida para estabelecer hierarquia sem efeitos decorativos.',
        mobileImageAlt:
          'Página de projetos em português e modo escuro num ecrã móvel estreito',
        mobileImageCaption:
          'O layout mobile altera o espaçamento e a hierarquia da navegação, em vez de apenas comprimir a composição de desktop.',
      },
    },
    projectCategories: {
      product: 'Produto',
      academic: 'Investigação académica',
      experiment: 'Experiência',
    },
    projectStatuses: {
      completed: 'Concluído',
      'in-progress': 'Em desenvolvimento',
      maintained: 'Online e mantido',
    },
    dates: {
      present: 'Atual',
    },
    experience: {
      teachingAssistant: {
        role: 'Professor Assistente, Introdução à Programação',
        summary:
          'Apoio a alunos na aprendizagem de fundamentos de programação, algoritmos e resolução de problemas com Python.',
      },
      softwareDeveloperIntern: {
        role: 'Programador de Aplicações, Estágio',
        summary:
          'Contributo para um dashboard de gestão de condomínios em React e Vite, abrangendo pedidos, reservas de espaços, consulta de dados e apoio à gestão de pagamentos.',
      },
      mobileDeveloperIntern: {
        role: 'Programador de Aplicações Móveis, Estágio',
        summary:
          'Desenvolvimento e manutenção de um fluxo operacional em Microsoft Power Apps para serviços de lavagem automóvel, incluindo apoio à migração de dados para Microsoft SQL Server.',
      },
      multimediaIntern: {
        role: 'Designer, Estágios',
        summary:
          'Criação de materiais gráficos e audiovisuais com ferramentas Adobe de design e produção de vídeo.',
      },
    },
    education: {
      mastersAppliedInformatics: 'Mestrado em Informática Aplicada',
      bachelorsComputerEngineering: 'Licenciatura em Engenharia Informática',
      bachelorsInformatics: 'Licenciatura em Informática',
      ctespInformationSystems:
        'CTeSP — Tecnologias e Programação de Sistemas de Informação',
      professionalMultimediaCourse: 'Curso Profissional de Multimédia',
    },
    skillGroups: {
      webDevelopment: 'Desenvolvimento web',
      dataAndBackend: 'Dados e backend',
      appliedMachineLearning: 'Machine Learning aplicado',
      microsoftLowCode: 'Microsoft e low-code',
      toolsAndDelivery: 'Ferramentas e publicação',
    },
    links: {
      live: 'Aplicação',
      github: 'GitHub',
      email: 'Email',
      linkedin: 'LinkedIn',
      mainRepository: 'Repositório principal',
      replicationRepository: 'Repositório de replicação',
      cvEnglish: 'CV em inglês',
      cvPortuguese: 'CV em português',
    },
  },
  pages: {
    home: {
      metaTitle: 'Ivo Camacho — Portefólio',
      metaDescription:
        'Programador de software com trabalho em aplicações web, dados e Machine Learning aplicado.',
      hero: {
        name: 'Ivo Camacho',
        title:
          'Programador de software com trabalho em aplicações web, dados e Machine Learning aplicado.',
        introduction:
          'Trabalho com TypeScript, React, Python e dados relacionais em projetos pessoais, académicos e profissionais. Estou atualmente a concluir uma tese de Mestrado sobre Machine Learning explicável e reprodutível aplicado ao prognóstico da ALS.',
        location: 'Em Portugal · Trabalho em português e inglês',
      },
      actions: {
        viewProjects: 'Ver projetos',
        viewAllProjects: 'Ver todos os projetos',
        viewCv: 'Ver CV',
        readCaseStudy: 'Ler caso de estudo',
        emailMe: 'Enviar email',
      },
      featured: {
        title: 'Trabalho selecionado',
        description:
          'Três projetos que representam desenvolvimento de produto, investigação aplicada e as decisões por detrás deste portefólio.',
      },
      experience: {
        title: 'Experiência selecionada',
        description:
          'Trabalho prático em ensino de programação, desenvolvimento web, aplicações operacionais e suporte técnico.',
      },
      skills: {
        title: 'Áreas técnicas',
        description:
          'Uma visão focada das tecnologias sustentadas pelo trabalho e pelos projetos apresentados.',
      },
      education: {
        title: 'Educação e formação',
      },
      contact: {
        label: 'Contacto',
        title:
          'Disponível para conversar sobre software, dados e oportunidades técnicas.',
        description:
          'O email é a forma mais direta de entrar em contacto. Também podes consultar o meu CV ou encontrar no GitHub o código dos projetos apresentados.',
      },
    },
    projects: {
      title: 'Projetos',
      eyebrow: 'Trabalho selecionado',
      description:
        'Uma seleção focada de desenvolvimento de produto e investigação aplicada, apresentada através do problema, das decisões e do sistema resultante.',
      selectedTitle: 'Três projetos, três contextos',
      viewProject: 'Ver projeto',
      currentProjectNote:
        'Este portefólio é também um registo em evolução do trabalho por detrás dele.',
      metaTitle: 'Projetos — Ivo Camacho',
      metaDescription: 'Projetos selecionados e casos de estudo técnicos de Ivo Camacho.',
    },
    project: {
      eyebrow: 'Caso de estudo',
      backToProjects: 'Todos os projetos',
      title: 'Caso de estudo',
      description:
        'O conteúdo do projeto será adicionado depois da seleção e validação da informação.',
      metaTitle: 'Projeto — Ivo Camacho',
      metaDescription: 'Caso de estudo de um projeto de Ivo Camacho.',
      jobTracker: {
        metaDescription:
          'Caso de estudo de um gestor de candidaturas bilingue e responsivo, desenvolvido com Next.js, Supabase, PostgreSQL e Row Level Security.',
        eyebrow: 'Caso de estudo de produto · Aplicação online',
        introduction:
          'Um espaço privado e bilingue que transforma candidaturas, empresas, recrutadores, entrevistas e próximas ações num único fluxo coerente de procura de emprego.',
        facts: {
          role: {
            label: 'Papel',
            value: 'Design de produto e desenvolvimento full-stack',
          },
          year: {
            label: 'Ano',
            value: '2026',
          },
          status: {
            label: 'Estado',
            value: 'Online e em manutenção ativa',
          },
          stack: {
            label: 'Stack principal',
            value: 'Next.js 16 · Supabase · PostgreSQL',
          },
        },
        context: {
          title: 'De notas dispersas a um fluxo operacional',
          body:
            'A procura de emprego produz informação relacionada que folhas de cálculo e notas isoladas gerem mal: uma vaga pertence a uma empresa, pode envolver um recrutador e várias entrevistas, e normalmente cria acompanhamentos e prazos.',
          bodyTwo:
            'O objetivo não era apenas guardar candidaturas. Era construir uma aplicação web privada que preservasse este contexto e tornasse visível a próxima ação útil, tanto no computador como no telemóvel.',
        },
        capabilities: {
          title: 'Um sistema em torno do ciclo da candidatura',
          workflow: {
            title: 'Registos relacionados',
            body:
              'As candidaturas ligam empresas, oportunidades, recrutadores, notas e alterações de estado, em vez de tratar cada elemento como um registo isolado.',
          },
          interviews: {
            title: 'Preparação de entrevistas',
            body:
              'Resumos dedicados reúnem agendamento, contactos, guião pessoal, perguntas, feedback e resultado sem obrigar cada consulta a entrar no modo de edição.',
          },
          agenda: {
            title: 'Agenda operacional',
            body:
              'Entrevistas, follow-ups e tarefas com prazo são combinados no servidor numa cronologia única, incluindo elementos em atraso, sem duplicar os dados de origem.',
          },
          experience: {
            title: 'Experiência adaptável',
            body:
              'Interfaces em português e inglês, temas claro e escuro persistentes, layouts responsivos e estados de carregamento contextualizados apoiam a utilização diária.',
          },
        },
        architecture: {
          title: 'Arquitetura orientada pelo servidor, com proteção de dados no centro',
          description:
            'O App Router combina dados renderizados no servidor, Server Actions e componentes interativos focados. A autenticação e a autorização permanecem próximas dos dados, em vez de dependerem de controlos escondidos na interface.',
          interface: {
            title: 'Interface responsiva',
            body: 'React 19, Tailwind CSS 4 e interações de cliente focadas.',
          },
          application: {
            title: 'Next.js 16',
            body: 'App Router, server components, Server Actions e rotas validadas.',
          },
          identity: {
            title: 'Supabase Auth',
            body: 'Sessões PKCE, cookies SSR, confirmação de email e claims no servidor.',
          },
          data: {
            title: 'PostgreSQL + RLS',
            body: 'Registos relacionais protegidos por utilizador e por operação.',
          },
          note:
            'O Supabase Storage guarda imagens de perfil validadas. A Vercel publica automaticamente a aplicação a partir do GitHub.',
        },
        decisions: {
          title: 'Decisões que moldaram o produto',
          security: {
            title: 'Impor o isolamento na base de dados',
            body:
              'Cada tabela privada usa políticas Row Level Security separadas para leitura, criação, edição e eliminação. As operações sensíveis voltam a validar a identidade no servidor, e testes com dois utilizadores exercitam o isolamento real.',
          },
          import: {
            title: 'Ajudar a importar sem retirar o julgamento',
            body:
              'O importador lê dados estruturados da vaga ou texto colado, normaliza ligações do LinkedIn e Indeed e exige sempre revisão. Antes de um pedido público, bloqueia endereços privados, respostas excessivas e cadeias de redirecionamento inseguras.',
          },
          filters: {
            title: 'Tratar o URL como estado útil',
            body:
              'Pesquisa, filtros, intervalos de datas e ordenação usam parâmetros validados. A vista de trabalho sobrevive a recargas e pode ser guardada ou partilhada sem outra camada de estado no cliente.',
          },
          localisation: {
            title: 'Traduzir a interface, não os dados pessoais',
            body:
              'A interface, validação, datas e contagens suportam pt-PT e en-GB. Descrições de vagas, notas e preparação escritas pelo utilizador mantêm-se intactas, enquanto as preferências de idioma e tema persistem no browser.',
          },
        },
        gallery: {
          title: 'Superfícies do produto',
          disclaimer:
            'As imagens de apresentação foram editadas com IA para substituir dados pessoais e de empresas por exemplos fictícios. Ilustram a interface e podem conter pequenas diferenças visuais face à aplicação online.',
          mobileLabel: 'Comportamento responsivo',
        },
        outcome: {
          title: 'Um produto funcional, não um protótipo estático',
          body:
            'O resultado é uma aplicação publicada e autenticada que cobre o percurso desde a criação da conta até às candidaturas, entrevistas, tarefas, agenda e gestão do perfil. Está disponível em dois idiomas e foi concebida para computador e telemóvel.',
          bodyTwo:
            'O repositório regista as decisões e verificações de qualidade por detrás da interface: TypeScript, lint, paridade das traduções, scripts de validação de domínio, builds de produção e testes de RLS ao nível da base de dados. O projeto continua em manutenção ativa à medida que o fluxo real evolui.',
        },
      },
      alsThesis: {
        metaDescription:
          'Caso de estudo de uma tese de mestrado sobre Machine Learning explicável para progressão funcional e prognóstico de sobrevivência em ALS com dados PRO-ACT.',
        eyebrow: 'Investigação académica · Tese de mestrado',
        introduction:
          'Dois estudos ligados partem da mesma pergunta: quando os dados de prognóstico são desequilibrados e clinicamente sensíveis, o que torna credível um resultado de Machine Learning para além de uma métrica forte?',
        facts: {
          role: {
            label: 'Papel',
            value: 'Desenho da investigação, implementação, análise e escrita',
          },
          period: { label: 'Período', value: '2025 — atual' },
          dataset: {
            label: 'Dataset',
            value: 'PRO-ACT · 23 ensaios clínicos de ALS',
          },
          status: { label: 'Estado', value: 'Tese em desenvolvimento' },
        },
        problem: {
          title: 'Prognóstico não é apenas um problema de classificação',
          body:
            'A esclerose lateral amiotrófica progride de forma muito diferente entre pessoas. Um fluxo de prognóstico útil tem, por isso, de lidar com registos longitudinais, poucos casos da classe minoritária, horizontes clínicos distintos e as consequências de falsos negativos e falsos positivos.',
          bodyTwo:
            'A tese usa registos longitudinais de 23 ensaios clínicos da base PRO-ACT. Em vez de reduzir o trabalho a um único modelo, estuda dois resultados diferentes e trata o desenho da validação, o desequilíbrio de classes, os limiares de decisão e a explicabilidade como partes da própria modelação.',
        },
        studies: {
          title: 'Dois resultados, uma questão metodológica',
          functional: {
            label: 'Estudo I · Pipeline original',
            title: 'Progressão funcional aos três e seis meses',
            body:
              'Sete classificadores usam informação clínica inicial para distinguir progressão rápida e lenta do ALSFRS-R. Grupos de variáveis, ponderação de classes, horizonte de previsão e explicações globais e individuais são avaliados em conjunto.',
            detail:
              'O limiar que define progressão rápida é estimado dentro de cada fold de treino, evitando que informação dos participantes de validação entre na construção do target.',
          },
          survival: {
            label: 'Estudo II · Replicação e extensão',
            title: 'Prognóstico de sobrevivência até 24 meses',
            body:
              'Uma replicação parcial de trabalho publicado com BalancedBagging é alargada com sete classificadores, dez estratégias para desequilíbrio, otimização Bayesiana, teste hold-out, análise de thresholds, estimativas de incerteza e SHAP.',
            detail:
              'O estudo testa se uma ROC-AUC elevada também se traduz numa deteção adequada da classe minoritária Short Survivor.',
          },
        },
        safeguards: {
          title: 'Rigor integrado no fluxo experimental',
          introduction:
            'O trabalho de engenharia mais importante acontece antes de surgir uma pontuação final. O pipeline torna explícitas as fronteiras entre aprendizagem, seleção e avaliação.',
          separation: {
            title: 'Separar pessoas, não linhas',
            body:
              'Os participantes são separados entre partições para impedir que vários registos clínicos da mesma pessoa tornem os resultados de validação artificialmente fortes.',
          },
          folds: {
            title: 'Manter transformações dentro do treino',
            body:
              'A estimação do target e o resampling acontecem apenas nos folds de treino. Os hiperparâmetros são escolhidos com validação cruzada, sem consultar repetidamente o conjunto de teste final.',
          },
          evaluation: {
            title: 'Avaliar uma vez, por vários ângulos',
            body:
              'Os candidatos finais são avaliados numa coorte hold-out com intervalos de confiança, métricas da classe minoritária, comportamento dos limiares de decisão e métricas adequadas a cada resultado.',
          },
          interpretation: {
            title: 'Explicar sem afirmar causalidade',
            body:
              'SHAP, LIME e coeficientes revelam padrões usados pelos modelos. A concordância e discordância entre explicações é analisada, mantendo-as como associações preditivas e não causas clínicas.',
          },
        },
        results: {
          title: 'Resultados com os trade-offs visíveis',
          introduction:
            'Os resultados sustentam o valor do pipeline, mas também mostram por que razão uma única métrica não basta para uma afirmação de prognóstico.',
          functional: {
            label: 'Estudo I · Hold-out aos seis meses',
            metric: '0,456',
            metricLabel: 'PR-AUC · XGBoost · n = 279',
            body:
              'No threshold de 0,21, derivado no desenvolvimento, o modelo atingiu 85,7% de recall e 35,1% de precisão. A escolha privilegiou sensibilidade, mas também produziu muitos falsos positivos — um compromisso que deve permanecer explícito.',
          },
          survival: {
            label: 'Estudo II · Teste hold-out',
            metric: '0,923',
            metricLabel: 'ROC-AUC · LightGBM + ROS · n = 301',
            body:
              'O modelo atingiu 85,7% de sensibilidade e 83,1% de especificidade, com intervalo ROC-AUC de 95% entre 0,868 e 0,966. Outra configuração apresentou intervalos sobrepostos, pelo que a evidência não demonstra superioridade clara.',
          },
          caution:
            'Um modelo neuronal deixou um aviso particularmente útil: uma boa capacidade de ordenação no threshold predefinido detetou apenas 1 dos 35 Short Survivors. A escolha do threshold faz parte do modelo, não é um acabamento.',
        },
        evidence: {
          title: 'Do desempenho agregado ao comportamento do modelo',
          introduction:
            'A análise passa da discriminação hold-out para as variáveis que moldam as previsões. As figuras são resultados dos pipelines experimentais reais, não gráficos de marketing recriados.',
          studyTwoLabel: 'Estudo II · Camada de explicação',
        },
        outcome: {
          title: 'O contributo é metodológico, não uma promessa de utilização clínica',
          body:
            'Em duas tarefas de prognóstico, a tese mostra como separação de participantes, construção do target, estratégia de desequilíbrio, escolha do threshold, incerteza e explicabilidade podem alterar materialmente o significado de uma métrica principal.',
          bodyTwo:
            'O trabalho não propõe que as previsões determinem cuidados de forma isolada. O resultado é um pipeline de investigação reprodutível e uma leitura prudente de onde os modelos informam, onde falham e do que precisaria de validação adicional antes de qualquer uso clínico.',
        },
      },
      portfolio: {
        metaDescription:
          'Caso de estudo do portefólio profissional bilingue, acessível e responsivo de Ivo Camacho, desenvolvido com React, TypeScript, Vite e i18next.',
        eyebrow: 'Caso de estudo do portefólio · Este website',
        introduction:
          'Um website deliberadamente contido que transforma trabalho selecionado, experiência e evidência técnica numa narrativa profissional clara — sem imitar um dashboard ou um template genérico de programador.',
        facts: {
          role: {
            label: 'Papel',
            value: 'Arquitetura de informação, direção visual, conteúdo e frontend',
          },
          year: { label: 'Ano', value: '2026' },
          format: { label: 'Formato', value: 'Website estático bilingue' },
          stack: { label: 'Stack principal', value: 'React · TypeScript · Vite' },
        },
        purpose: {
          title: 'Um portefólio deve explicar o trabalho, não repetir o GitHub',
          body:
            'O objetivo era permitir que um recrutador ou leitor técnico compreendesse, em poucos minutos, em que áreas trabalho, o que construí e como tomo decisões. Um repositório já mostra ficheiros e commits; este site acrescenta contexto, compromissos e resultados.',
          bodyTwo:
            'Daí resulta uma estrutura principal reduzida — Início, Projetos, Sobre e CV — e três projetos selecionados apresentados em profundidade. A prioridade do conteúdo segue o valor profissional, não a quantidade ou a data dos repositórios.',
        },
        principles: {
          title: 'Um sistema editorial, não uma estética de template',
          hierarchy: {
            title: 'A tipografia cria a hierarquia',
            body:
              'Escala, comprimento das linhas e um ritmo vertical generoso fazem a maior parte do trabalho visual. As secções respiram em vez de competir dentro de cartões iguais.',
          },
          evidence: {
            title: 'O trabalho real é o material visual',
            body:
              'Capturas do produto, figuras da investigação, tecnologias verificadas e decisões concretas substituem janelas de código decorativas ou afirmações sem suporte.',
          },
          restraint: {
            title: 'Os neutros permanecem dominantes',
            body:
              'O verde organiza etiquetas e pequenos detalhes; o laranja fica reservado para ações importantes. Não existem gradientes, brilhos ou movimento decorativo.',
          },
          responsive: {
            title: 'Mobile tem o seu próprio ritmo',
            body:
              'Navegação, espaçamento, tipografia, escala das imagens e ordem do conteúdo adaptam-se a ecrãs estreitos, em vez de tratar mobile como desktop comprimido.',
          },
        },
        architecture: {
          title: 'Um modelo de conteúdo, dois idiomas, publicação estática',
          introduction:
            'Os dados de projeto independentes do idioma estão separados das traduções editoriais. Componentes React partilhados consomem ambos, evitando páginas duplicadas para inglês e português.',
          content: {
            title: 'Evidência estruturada',
            body: 'Projetos, experiência, formação, competências, links e media vivem em módulos de dados tipados.',
          },
          locale: {
            title: 'Rotas por idioma',
            body: 'i18next e React Router servem os mesmos componentes através de URLs estáveis /en e /pt.',
          },
          interface: {
            title: 'Interface partilhada',
            body: 'Componentes React aplicam layouts editoriais, tokens de cor semânticos e interações acessíveis.',
          },
          deployment: {
            title: 'Build estático de produção',
            body: 'O Vite cria os ficheiros publicáveis e as regras de fallback do Apache preservam acesso direto às rotas do cliente.',
          },
          note:
            'O resultado não depende de um servidor aplicacional ou CMS. O repositório mantém-se como fonte de verdade para conteúdo e recursos.',
        },
        details: {
          title: 'Pequenos comportamentos que completam o sistema',
          language: {
            title: 'O idioma acompanha o contexto',
            body:
              'A primeira visita usa o idioma do browser e um toggle explícito guarda a escolha do leitor. A troca conserva a página atual e o controlo mostra o idioma que está a ser lido.',
          },
          theme: {
            title: 'Temas desenhados através de tokens',
            body:
              'Os modos claro e escuro partilham variáveis CSS semânticas, mas usam superfícies e contraste intencionais. A preferência guardada ou do sistema é aplicada antes do React para evitar uma mudança de tema visível.',
          },
          accessibility: {
            title: 'A navegação permanece utilizável',
            body:
              'Landmarks semânticos, link para saltar conteúdo, foco visível, alternativas descritivas, respeito por movimento reduzido, header persistente e controlo de topo com gestão de foco cobrem necessidades comuns de teclado e leitura.',
          },
          delivery: {
            title: 'Atualizações rotineiras mantêm-se simples',
            body:
              'O build de produção é uma diretoria estática. Os CVs usam caminhos públicos estáveis, permitindo substituir um PDF urgente de forma independente e manter depois a cópia versionada no repositório.',
          },
        },
        outcome: {
          title: 'Um portefólio que pode crescer sem perder o seu ponto de vista',
          body:
            'O sistema atual apresenta três tipos de trabalho com ritmos de case study distintos, mantendo navegação, idiomas, temas e estrutura de conteúdo consistentes em todo o site.',
          bodyTwo:
            'A sua principal restrição também é útil: novo conteúdo tem de justificar o lugar através de contexto e evidência verificados. Isso mantém as atualizações futuras focadas e evita transformar o portefólio num catálogo indiscriminado de repositórios.',
        },
      },
    },
    about: {
      title: 'Sobre',
      description:
        'A experiência profissional, formação e interesses técnicos serão adicionados a partir de informação validada.',
      metaTitle: 'Sobre — Ivo Camacho',
      metaDescription: 'Perfil profissional, experiência e formação de Ivo Camacho.',
    },
    cv: {
      title: 'Curriculum Vitae',
      description:
        'Os CVs em português e inglês estarão disponíveis aqui para consulta e transferência.',
      metaTitle: 'CV — Ivo Camacho',
      metaDescription: 'Consultar ou transferir o CV de Ivo Camacho.',
    },
    notFound: {
      title: 'Página não encontrada',
      description: 'A página que procuras não existe.',
      backHome: 'Voltar ao início',
      metaTitle: 'Página não encontrada — Ivo Camacho',
      metaDescription: 'Não foi possível encontrar a página pedida.',
    },
  },
} as const
