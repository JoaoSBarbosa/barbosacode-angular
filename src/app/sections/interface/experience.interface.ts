export interface Experience {
  id: number;
  startYear: number;
  endYear: number | null;
  jobTitle: string;
  company: string;
  description: string;
  technologies: ExperienceTechnologiesListType[];
}
export interface ExperienceTechnologiesListType {
  id: number;
  technology: string;
}
