'use client';

import { useState, useEffect } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
      icon: '🛒',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      icon: '📋',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      icon: '🌤️',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 4,
      title: 'Blog CMS',
      description: 'A content management system for blogs with markdown support, SEO optimization, and multi-author capabilities.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'MDX', 'Vercel', 'Tailwind CSS'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
      icon: '📝',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      icon: '💼',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'API Gateway',
      description: 'A microservices API gateway with authentication, rate limiting, and request routing for scalable applications.',
      image: '/api/placeholder/400/300',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#',
      icon: '🚀',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: '🌟' },
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'fullstack', label: 'Full Stack', icon: '🚀' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="relative overflow-hidden py-32 bg-[#0B1220] min-h-[700px] md:min-h-[800px]">
      {/* Decorative background rings */}
      <div className="pointer-events-none absolute inset-0" style={{height:"110%"}}>
        {/* Rings (match Skills.tsx vibe) */}
        <div className="absolute -left-16 top-1/3 h-72 w-72 rounded-full border border-teal-500/10 [mask-image:radial-gradient(closest-side,white,transparent)]"></div>
        <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full border border-cyan-500/10 [mask-image:radial-gradient(closest-side,white,transparent)]"></div>

        {/* Subtle gradient blobs */}
        <div className="absolute inset-0 blur-3xl opacity-30">
          <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-cyan-500/30"></div>
          <div className="absolute bottom-16 right-1/4 w-72 h-72 rounded-full bg-indigo-500/25"></div>
          <div className="absolute top-1/2 left-10 w-56 h-56 rounded-full bg-blue-500/20"></div>
        </div>

        {/* Starfield grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0'
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div className={`relative z-20 text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{padding: 16}}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              MY <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">PROJECTS</span>
            </h2>
            <p className="text-lg text-slate-300 mx-auto p-6">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>

          {/* Enhanced Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} >
            {filters.map((filter, index) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`group flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-800/60 text-slate-300 border border-white/10 hover:bg-slate-700/60 hover:text-white hover:shadow-lg hover:shadow-cyan-500/10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms`, padding: 6, }}
              >
                <span className="text-lg">{filter.icon}</span>
                <span>{filter.label}</span>
                {activeFilter === filter.key && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse-custom"></div>
                )}
              </button>
            ))}
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center justify-center w-fit mx-auto" style={{marginTop:"5%", marginLeft:"5%",}} >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-indigo-500/40 blur-xl z-0"></div>
                <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-sm shadow-2xl">
                {/* Enhanced Project Image */}
                <div className={`relative h-56 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4">{project.icon}</div>
                    {/* <div className="text-4xl font-bold text-white opacity-90">
                      {project.title.charAt(0)}
                    </div> */}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-2">{project.icon}</div>
                      <div className="text-lg font-semibold">View Project</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Project Content */}
                <div className="p-8" style={{padding: 8}}>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Enhanced Technologies */}
                  <div className="flex flex-wrap gap-2 mb-2" style={{padding: 8}}>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-slate-700/60 to-slate-600/60 text-slate-200 px-4 py-2 rounded-full text-sm font-medium border border-white/10 hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-white transition-all duration-300"
                        style={{paddingLeft:8, paddingRight:4}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Enhanced Action Buttons */}
                  <div className="flex gap-3" style={{marginTop:'4%', padding: 8}}>
                    <a
                      href={project.liveUrl}
                      className="group/btn flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="group/btn flex-1 border-2 border-blue-600 text-blue-600 text-center py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                    >
                      <span>GitHub</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className={`text-center py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-slate-300 text-xl">No projects found for the selected filter.</p>
              <p className="text-slate-400 mt-2">Try selecting a different category above.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
