export type QuestRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface ExperienceEntry {
  id: string;
  rarity: QuestRarity;
  techStack: string[];
  icon: string;
}

export const experienceData: ExperienceEntry[] = [
  {
    id: 'military',
    rarity: 'legendary',
    techStack: [],
    icon: '🇺🇦',
  },
  {
    id: 'b2bsoft',
    rarity: 'legendary',
    techStack: ['React', 'TypeScript', 'C#', '.NET', 'MSSQL'],
    icon: '\u2694\uFE0F',
  },
  {
    id: 'b2bsoft_early',
    rarity: 'epic',
    techStack: ['React', 'HTML', 'CSS', 'Figma'],
    icon: '\uD83D\uDEE1\uFE0F',
  },
  {
    id: 'wirex',
    rarity: 'epic',
    techStack: ['BPMN', 'REST API', 'UML'],
    icon: '\uD83D\uDD2E',
  },
  {
    id: 'nullgravity',
    rarity: 'rare',
    techStack: ['REST API', 'JSON', 'Postman', 'UML'],
    icon: '\uD83D\uDDFA\uFE0F',
  },
  {
    id: 'banza',
    rarity: 'rare',
    techStack: ['CRM', 'BPM', 'Axure', 'Figma', 'SQL'],
    icon: '\uD83D\uDEE0\uFE0F',
  },
  {
    id: 'teamsoft',
    rarity: 'uncommon',
    techStack: ['SQL', 'QlikView', 'BI'],
    icon: '\uD83D\uDCCA',
  },
  {
    id: 'oschadbank',
    rarity: 'common',
    techStack: ['Management', 'Banking', 'Training'],
    icon: '\uD83C\uDFE6',
  },
];
