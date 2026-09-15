export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  demoUrl?: string;
  status: string;
  category: 'backend' | 'fullstack' | 'frontend';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  projects: ExperienceProject[];
}

export interface ExperienceProject {
  name: string;
  domain: string;
  description: string;
  technologies: string[];
  contributions: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
