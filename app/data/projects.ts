export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express.js'],
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    category: 'frontend',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Blog CMS',
    description: 'A content management system for blogs with markdown support, SEO optimization, and multi-author capabilities.',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'MDX', 'Vercel', 'Tailwind CSS', 'Sanity'],
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    category: 'frontend',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'API Gateway',
    description: 'A microservices API gateway with authentication, rate limiting, and request routing for scalable applications.',
    image: '/api/placeholder/400/300',
    technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'JWT'],
    category: 'backend',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 7,
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media management dashboard with analytics, scheduling, and engagement tracking.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Socket.io'],
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 8,
    title: 'Real Estate Platform',
    description: 'A property listing platform with advanced search, virtual tours, and property management features.',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Mapbox'],
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: '#'
  }
];
