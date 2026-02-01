export enum SkillCategoryEnum {
  Frontend = "Frontend",
  Backend = "Backend",
  Databases = "Databases",
  ToolsCMS = "Tools & CMS",
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategoryEnum;
}

export interface Highlight {
  id: string;
  text: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: Highlight[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  highlight: boolean;
  url: string;
}
