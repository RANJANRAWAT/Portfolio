export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 95, category: 'frontend' },
      { name: 'Next.js', level: 90, category: 'frontend' },
      { name: 'TypeScript', level: 85, category: 'frontend' },
      { name: 'Tailwind CSS', level: 90, category: 'frontend' },
      { name: 'JavaScript', level: 95, category: 'frontend' },
      { name: 'HTML/CSS', level: 98, category: 'frontend' },
      { name: 'Vue.js', level: 75, category: 'frontend' },
      { name: 'SASS/SCSS', level: 85, category: 'frontend' }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85, category: 'backend' },
      { name: 'Express.js', level: 80, category: 'backend' },
      { name: 'MongoDB', level: 75, category: 'backend' },
      { name: 'PostgreSQL', level: 70, category: 'backend' },
      { name: 'REST APIs', level: 85, category: 'backend' },
      { name: 'GraphQL', level: 70, category: 'backend' },
      { name: 'Python', level: 65, category: 'backend' },
      { name: 'Django', level: 60, category: 'backend' }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 90, category: 'tools' },
      { name: 'Docker', level: 70, category: 'tools' },
      { name: 'AWS', level: 65, category: 'tools' },
      { name: 'Figma', level: 80, category: 'tools' },
      { name: 'VS Code', level: 95, category: 'tools' },
      { name: 'Linux', level: 85, category: 'tools' },
      { name: 'Vercel', level: 85, category: 'tools' },
      { name: 'Netlify', level: 80, category: 'tools' }
    ]
  }
];

export const additionalSkills = [
  'Responsive Design',
  'SEO Optimization', 
  'Performance Optimization',
  'Cross-browser Compatibility',
  'Version Control',
  'Agile Methodology',
  'UI/UX Design',
  'Database Design',
  'API Integration',
  'Testing',
  'Deployment',
  'CI/CD',
  'Microservices',
  'Serverless',
  'Progressive Web Apps',
  'Web Accessibility'
];
