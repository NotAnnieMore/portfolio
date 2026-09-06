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
        rankingSensitivityImageAlt:
          'Comparação entre ROC-AUC de validação cruzada e sensibilidade no teste para sete classificadores de sobrevivência',
        rankingSensitivityImageCaption:
          'No Estudo II, uma ROC-AUC elevada não garantiu deteção útil no limiar predefinido: o MLP obteve 0,915 em validação cruzada, mas apenas 0,029 de sensibilidade no teste.',
        studyOneImportanceImageAlt:
          'Importância global das variáveis do XGBoost para progressão funcional aos seis meses',
        studyOneImportanceImageCaption:
          'No Estudo I, o ALSFRS-R inicial apresentou a maior atribuição global, seguido da FVC. Estas relações descrevem o comportamento do modelo, não causas clínicas.',
        studyTwoDistributionsImageAlt:
          'Distribuições do atraso no diagnóstico e do declive da marcha por grupo de sobrevivência',
        studyTwoDistributionsImageCaption:
          'No Estudo II, os grupos diferiram sobretudo no atraso do diagnóstico e no declive da marcha. As diferenças apoiam a explicação das previsões, sem estabelecer causalidade.',
      },
      professionalPortfolio: {
        title: 'Portefólio Profissional',
        summary:
          'Um portefólio estático, bilingue e acessível, concebido para apresentar projetos reais através de contexto, decisões e casos de estudo.',
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
        'Programador de software em aplicações web, dados e Machine Learning aplicado.',
      hero: {
        illustrationAlt:
          'Ilustração editorial de um portátil, caderno, caneca e planta',
        annotation: 'Criar. Aprender. Melhorar.',
        name: 'Ivo Camacho',
        title:
          'Programador de software em aplicações web, dados e Machine Learning aplicado.',
        introduction:
          'Trabalho com TypeScript, React, Python e dados relacionais em projetos pessoais, académicos e profissionais. Estou atualmente a concluir uma tese de Mestrado sobre Machine Learning explicável e reprodutível aplicado ao prognóstico da ALS.',
        location: 'Em Portugal · Trabalho em Português e Inglês',
      },
      actions: {
        viewProjects: 'Ver projetos',
        viewAllProjects: 'Ver todos os projetos',
        viewCv: 'Ver CV',
        readCaseStudy: 'Ler caso de estudo',
      },
      featured: {
        title: 'Projetos',
        description:
          'Três projetos que representam desenvolvimento de produto, investigação aplicada e as decisões por detrás deste portefólio.',
      },
      experience: {
        title: 'Experiência',
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
          'Podes entrar em contacto através do LinkedIn, consultar o meu CV ou encontrar no GitHub o código dos projetos apresentados.',
      },
    },
    projects: {
      title: 'Projetos',
      annotation: 'Do problema ao produto.',
      description:
        'Uma seleção focada de desenvolvimento de produto e investigação aplicada, apresentada através do problema, das decisões e do sistema resultante.',
      selectedTitle: 'Três projetos, três contextos',
      viewProject: 'Ver projeto',
      currentProjectNote:
        'Este portefólio é também um registo em evolução do trabalho por detrás dele.',
      metaTitle: 'Projetos — Ivo Camacho',
      metaDescription: 'Projetos e casos de estudo técnicos de Ivo Camacho.',
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
        highlights: {
          languages: { value: '2', label: 'idiomas de interface' },
          workflows: { value: '4', label: 'fluxos principais integrados' },
          protection: {
            value: 'RLS',
            label: 'isolamento testado por utilizador',
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
            body: 'Sessões PKCE, cookies SSR, confirmação de conta e claims no servidor.',
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
          period: { label: 'Período', value: '2025 — 2026' },
          dataset: {
            label: 'Dataset',
            value: 'PRO-ACT · 16 tabelas clínicas',
          },
          status: { label: 'Estado', value: 'Defesa de mestrado · 2026' },
        },
        highlights: {
          studies: { value: '2', label: 'estudos ligados' },
          classifiers: { value: '70', label: 'configurações no Estudo II' },
          sensitivity: {
            value: '301',
            label: 'participantes no teste selado do Estudo II',
          },
        },
        problem: {
          title: 'Prognóstico não é apenas um problema de classificação',
          body:
            'A esclerose lateral amiotrófica progride de forma muito diferente entre pessoas. Um fluxo de prognóstico útil tem, por isso, de lidar com registos longitudinais, poucos casos da classe minoritária, horizontes clínicos distintos e as consequências de falsos negativos e falsos positivos.',
          bodyTwo:
            'A tese usa dados da base PRO-ACT, organizada a partir de 16 tabelas clínicas. Em vez de reduzir o trabalho a um único modelo, estuda dois resultados diferentes e trata o desenho da validação, o desequilíbrio de classes, os limiares de decisão e a explicabilidade como partes da própria modelação.',
        },
        studies: {
          title: 'Dois resultados, uma questão metodológica',
          functional: {
            label: 'Estudo I · Pipeline original',
            title: 'Progressão funcional aos três e seis meses',
            body:
              'Uma coorte de 1 392 participantes e 35 variáveis iniciais é usada para distinguir progressão rápida e lenta do ALSFRS-R. Sete classificadores são avaliados aos três e aos seis meses.',
            detail:
              'O limiar que define progressão rápida é estimado dentro de cada fold de treino, evitando que informação dos participantes de validação entre na construção do target.',
          },
          survival: {
            label: 'Estudo II · Replicação e extensão',
            title: 'Prognóstico de sobrevivência até 24 meses',
            body:
              'Uma coorte de 1 502 participantes, incluindo 174 Short Survivors, suporta a replicação e extensão. O estudo compara sete classificadores e dez estratégias para desequilíbrio, totalizando 70 configurações antes da avaliação final.',
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
          title: 'Uma boa ordenação não garante uma boa decisão',
          introduction:
            'Os resultados sustentam o valor do pipeline, mas também mostram por que razão uma única métrica não basta para uma afirmação de prognóstico.',
          functional: {
            label: 'Estudo I · Hold-out aos seis meses',
            metric: '0,456',
            metricLabel: 'PR-AUC · XGBoost · n = 279',
            body:
              'No limiar de 0,21, derivado no desenvolvimento, o modelo detetou 72 dos 84 participantes com progressão rápida: 85,7% de sensibilidade e 35,1% de precisão. O ganho de sensibilidade produziu 133 falsos positivos.',
          },
          survival: {
            label: 'Estudo II · Teste hold-out',
            metric: '0,918',
            metricLabel: 'ROC-AUC · MLP sem modificação · n = 301',
            body:
              'No limiar predefinido, o modelo detetou apenas 1 dos 35 Short Survivors. Um limiar de 0,078, escolhido com previsões out-of-fold, elevou a sensibilidade para 77,1% e manteve 88,3% de especificidade, detetando 27 dos 35 casos.',
          },
          caution:
            'O Estudo II expôs uma diferença decisiva entre ranking e deteção. Uma ROC-AUC forte pode coexistir com uma sensibilidade quase nula quando o limiar não corresponde ao objetivo clínico.',
        },
        evidence: {
          title: 'Do desempenho agregado ao comportamento do modelo',
          introduction:
            'A análise passa da discriminação hold-out para as variáveis que moldam as previsões. As figuras são resultados dos pipelines experimentais reais, não gráficos de marketing recriados.',
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
          'Um website deliberadamente contido que transforma projetos, experiência e evidência técnica numa narrativa profissional clara — sem imitar um dashboard ou um template genérico de programador.',
        facts: {
          role: {
            label: 'Papel',
            value: 'Arquitetura de informação, direção visual, conteúdo e frontend',
          },
          year: { label: 'Ano', value: '2026' },
          format: { label: 'Formato', value: 'Website estático bilingue' },
          stack: { label: 'Stack principal', value: 'React · TypeScript · Vite' },
        },
        highlights: {
          languages: { value: '2', label: 'idiomas na mesma interface' },
          caseStudies: { value: '3', label: 'casos de estudo detalhados' },
          backend: { value: '0', label: 'dependências de backend' },
        },
        purpose: {
          title: 'Um portefólio deve explicar o trabalho, não repetir o GitHub',
          body:
            'O objetivo era permitir que um recrutador ou leitor técnico compreendesse, em poucos minutos, em que áreas trabalho, o que construí e como tomo decisões. Um repositório já mostra ficheiros e commits; este site acrescenta contexto, compromissos e resultados.',
          bodyTwo:
            'Daí resulta uma estrutura principal reduzida — Início, Projetos, Sobre e CV — e três projetos apresentados em profundidade. A prioridade do conteúdo segue o valor profissional, não a quantidade ou a data dos repositórios.',
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
              'O verde organiza etiquetas e pequenos detalhes; o laranja fica reservado para ações importantes. Não existem gradientes ou brilhos, e o movimento limita-se a transições discretas no scroll.',
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
      annotation: 'Aprender, construir, evoluir.',
      introduction:
        'Programador de software com experiência em aplicações web, dados relacionais e Machine Learning aplicado, incluindo também ensino de programação, fluxos móveis e resolução de problemas técnicos.',
      location: 'Em Portugal · Trabalho em Português e Inglês',
      focus: {
        title: 'Áreas técnicas complementares',
        introduction:
          'O meu trabalho mais forte acontece onde decisões de interface, estruturas de dados e restrições práticas se encontram. Sinto-me confortável entre o detalhe da implementação e o propósito mais amplo de um sistema.',
        product: {
          title: 'Produtos web',
          body:
            'Interfaces responsivas e fluxos full-stack desenvolvidos com React, TypeScript, Next.js, Vite, Supabase e PostgreSQL.',
        },
        data: {
          title: 'Dados e operações',
          body:
            'Modelação relacional, controlo de acesso, processos suportados por SQL e interfaces desenhadas em torno de informação operacional real.',
        },
        research: {
          title: 'Machine Learning aplicado',
          body:
            'Pipelines experimentais reprodutíveis, classificação desequilibrada, desenho de validação e explicabilidade prudente para investigação de prognóstico em ALS.',
        },
      },
      experience: {
        title: 'Experiência profissional',
        introduction:
          'Experiência em ensino de programação, desenvolvimento web, aplicações móveis operacionais, migração de dados e produção multimédia numa fase anterior.',
      },
      skills: {
        title: 'Áreas técnicas',
        introduction:
          'As tecnologias estão agrupadas pelas situações em que as usei em projetos ou trabalho profissional — não por percentagens arbitrárias de domínio.',
      },
      education: {
        title: 'Educação e formação',
        introduction:
          'Um percurso desde a formação em multimédia e sistemas de informação até Informática, Engenharia Informática e um Mestrado em Informática Aplicada.',
      },
      closing: {
        title: 'Os projetos mostram o detalhe por detrás do perfil.',
        body:
          'Para arquitetura, compromissos, resultados de investigação e interfaces funcionais, os casos de estudo são o melhor ponto para continuar. O CV apresenta a versão cronológica compacta.',
        projects: 'Explorar projetos',
        cv: 'Ver CV',
      },
      metaTitle: 'Sobre — Ivo Camacho',
      metaDescription:
        'Perfil profissional, experiência, áreas técnicas e formação do programador de software Ivo Camacho.',
    },
    cv: {
      title: 'Curriculum Vitae',
      annotation: 'Experiência em contexto.',
      introduction:
        'Escolhe a versão em português ou inglês. Ambos os documentos podem ser abertos no browser ou descarregados como PDF original.',
      documents: {
        title: 'Dois idiomas, o mesmo percurso profissional',
        introduction:
          'A versão correspondente ao idioma do website surge primeiro. Cada PDF tem duas páginas A4 e abre de forma independente do portefólio.',
        current: 'Idioma atual',
        pt: {
          label: 'Português · PT-PT',
          title: 'Curriculum Vitae em português',
          previewAlt: 'Pré-visualização da primeira página do CV em português de Ivo Camacho',
          viewLabel: 'Abrir o CV em português de Ivo Camacho num novo separador',
          downloadLabel: 'Descarregar o CV em português de Ivo Camacho',
        },
        en: {
          label: 'English · EN',
          title: 'Curriculum Vitae em inglês',
          previewAlt: 'Pré-visualização da primeira página do CV em inglês de Ivo Camacho',
          viewLabel: 'Abrir o CV em inglês de Ivo Camacho num novo separador',
          downloadLabel: 'Descarregar o CV em inglês de Ivo Camacho',
        },
        fileMeta: 'PDF · 2 páginas · A4',
        view: 'Abrir PDF',
        download: 'Descarregar',
      },
      updateNote:
        'Os endereços dos PDFs mantêm-se estáveis. Quando um CV for atualizado, o ficheiro correspondente pode ser substituído sem alterar os links do website.',
      metaTitle: 'CV — Ivo Camacho',
      metaDescription:
        'Consultar ou descarregar o curriculum vitae de Ivo Camacho em português ou inglês.',
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
