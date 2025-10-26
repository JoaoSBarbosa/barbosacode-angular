export interface Education {
  id: number;
  level: EducationLevel;
  course: string;
  institution: string;
  startYear: number;
  endYear?: number;
  technologies: string[];
}
export type EducationLevel = 'SUPERIOR' | 'TECNICO' | 'FORMACAO_CONTINUA';
