import { Experience } from '../sections/interface/experience.interface';

export const ExperienceList: Experience[] = [
  {
    id: 1,
    startYear: 2022,
    endYear: 2023,
    jobTitle: 'Assistente de programação',
    company: 'ByFanstore',
    description:
      'Responsável pelo desenvolvimento de sites de e-commerce com WordPress, utilizando codificação em ' +
      'JavaScript, HTML5 e CSS para estruturar e estilizar o conteúdo; Criação de documentação técnica para auxiliar ' +
      'na manutenção e atualização do site, assim como na integração com sistemas ERP; ' +
      '• Utilização de ferramentas como: Jira, Trello, Analytics, Google Search Console Google Data, ' +
      'Workspace, Hotjar e Mautic para monitoramento e análise de dados;',
    technologies: [
      { id: 1, technology: 'react' },
      { id: 2, technology: 'javascript' },
      { id: 3, technology: 'html' },
      { id: 4, technology: 'css' },
    ],
  },
  {
    id: 2,
    startYear: 2023,
    endYear: 2025,
    jobTitle: 'Programador júnior',
    company: 'Angulo Sistema',
    description:
      'Responsável pelo desenvolvimento backend Java, aplicando camadas service, controller, repository, ' +
      'DAO, e métodos CRUD para processar requisições. No frontend, emprego React, Next, TypeScript, Tailwind, e ' +
      'Flowbite, consumindo APIs REST do Java e facilitando a comunicação entre frontend e backend.',
    technologies: [
      { id: 1, technology: 'java' },
      { id: 2, technology: 'spring' },
      { id: 3, technology: 'nextjs' },
      { id: 4, technology: 'mysql' },
      { id: 5, technology: 'react' },
    ],
  },
  {
    id: 3,
    startYear: 2025,
    endYear: null,
    jobTitle: 'Desenvolvedor de sistemas',
    company: 'Metasix Tecnologia',
    description: `
Atuo na equipe de Sustentação da Metasix Tecnologia, com foco em correção, manutenção e evolução de código legado em Java EE 8, Spring, WildFly 10, Angular e Ember.js. Sou responsável pela implementação de correções em sistemas críticos de produção, garantindo a estabilidade e a disponibilidade das aplicações, além do desenvolvimento de melhorias pontuais e evolução de funcionalidades em aplicações Java e JavaScript. Também realizo análise de chamados de produção, criando e acompanhando tarefas no Jira, e ofereço integração e suporte a sistemas com mensageria utilizando RabbitMQ e ActiveMQ. Minha stack principal inclui Java EE 8, Spring, WildFly 10, Angular, Ember.js, RabbitMQ, ActiveMQ e Elasticsearch.
`,
    technologies: [
      { id: 1, technology: 'Java EE 8' },
      { id: 2, technology: 'Spring' },
      { id: 3, technology: 'WildFly 10' },
      { id: 4, technology: 'Angular' },
      { id: 5, technology: 'Ember.js' },
      { id: 6, technology: 'RabbitMQ' },
      { id: 7, technology: 'ActiveMQ' },
      { id: 8, technology: 'PostgreSQL' },
      { id: 9, technology: 'Elasticsearch' },
    ],
  },
];
