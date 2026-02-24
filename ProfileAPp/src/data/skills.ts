export type SkillCategory = 'frontend' | 'backend' | 'architecture' | 'tools';

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export const skills: Skill[] = [
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'TypeScript', level: 5, category: 'frontend' },
  { name: 'JavaScript', level: 5, category: 'frontend' },
  { name: 'HTML / CSS', level: 4, category: 'frontend' },

  { name: 'C#', level: 4, category: 'backend' },
  { name: '.NET Core', level: 4, category: 'backend' },
  { name: 'Entity Framework', level: 4, category: 'backend' },
  { name: 'LINQ', level: 4, category: 'backend' },
  { name: 'MSSQL', level: 4, category: 'backend' },
  { name: 'MongoDB', level: 3, category: 'backend' },

  { name: 'OOP / SOLID', level: 4, category: 'architecture' },
  { name: 'Design Patterns', level: 4, category: 'architecture' },
  { name: 'REST API Design', level: 5, category: 'architecture' },
  { name: 'Microservices', level: 4, category: 'architecture' },

  { name: 'Git', level: 5, category: 'tools' },
  { name: 'Docker', level: 3, category: 'tools' },
  { name: 'Jira', level: 5, category: 'tools' },
  { name: 'Postman', level: 4, category: 'tools' },
  { name: 'BPMN 2.0 / UML', level: 4, category: 'tools' },
  { name: 'Agile / Scrum', level: 4, category: 'tools' },
];

export const skillCategories: SkillCategory[] = ['frontend', 'backend', 'architecture', 'tools'];
