import { Education } from '../sections/interface/education.interface';

export const EducationData: Education[] = [
  {
    id: 1,
    level: 'SUPERIOR',
    course: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Centro Universitário UNINTER',
    startYear: 2022,
    endYear: 2024,
    technologies: ['Java', 'Spring', 'MySQL'],
  },
  {
    id: 2,
    level: 'TECNICO',
    course: 'Técnico em Desenvolvimento de Sistemas',
    institution: 'ETEC',
    startYear: 2020,
    endYear: 2021,
    technologies: ['JavaScript', 'PHP', 'HTML', 'CSS'],
  },
  {
    id: 3,
    level: 'FORMACAO_CONTINUA',
    course: 'Microserviços e Mensageria com Spring Cloud e Docker',
    institution: 'Udemy',
    startYear: 2024,
    technologies: [
      'Java',
      'Spring',
      'Spring Cloud',
      'Keycloak',
      'Docker',
      'RabbitMQ',
      'Spring Security',
    ],
  },
  {
    id: 4,
    level: 'FORMACAO_CONTINUA',
    course: 'UI Design para Iniciantes',
    institution: 'Origamid',
    startYear: 2024,
    technologies: ['Figma'],
  },
];
