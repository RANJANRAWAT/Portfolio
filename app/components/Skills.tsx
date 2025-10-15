'use client';

import { useEffect, useState } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const skillCategories = [
        {
          title: 'Frontend Development',
          skills: [
            { name: 'React', level: 95 },
            { name: 'Next.js', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'JavaScript', level: 95 },
            { name: 'HTML/CSS', level: 98 }
          ]
        },
        {
          title: 'Backend Development',
          skills: [
            { name: 'Node.js', level: 85 },
            { name: 'Express.js', level: 80 },
            { name: 'MongoDB', level: 75 },
            { name: 'PostgreSQL', level: 70 },
            { name: 'REST APIs', level: 85 },
            { name: 'GraphQL', level: 70 }
          ]
        },
        {
          title: 'Tools & Technologies',
          skills: [
            { name: 'Git', level: 90 },
            { name: 'Docker', level: 70 },
            { name: 'AWS', level: 65 },
            { name: 'Figma', level: 80 },
            { name: 'VS Code', level: 95 },
            { name: 'Linux', level: 85 }
          ]
        }
      ];

      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          setTimeout(() => {
            setAnimatedSkills(prev => ({
              ...prev,
              [`${categoryIndex}-${skillIndex}`]: skill.level
            }));
          }, (categoryIndex * 200) + (skillIndex * 100));
        });
      });
    }
  }, [isVisible]);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 90, icon: '▲' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'HTML/CSS', level: 98, icon: '🌐' }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 80, icon: '🚀' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'PostgreSQL', level: 70, icon: '🐘' },
        { name: 'REST APIs', level: 85, icon: '🔗' },
        { name: 'GraphQL', level: 70, icon: '📊' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'AWS', level: 65, icon: '☁️' },
        { name: 'Figma', level: 80, icon: '🎨' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Linux', level: 85, icon: '🐧' }
      ]
    }
  ];

  const additionalSkills = [
    { name: 'Responsive Design', icon: '📱' },
    { name: 'SEO Optimization', icon: '🔍' },
    { name: 'Performance Optimization', icon: '⚡' },
    { name: 'Cross-browser Compatibility', icon: '🌐' },
    { name: 'Version Control', icon: '📋' },
    { name: 'Agile Methodology', icon: '🏃' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Database Design', icon: '🗄️' },
    { name: 'API Integration', icon: '🔌' },
    { name: 'Testing', icon: '🧪' },
    { name: 'Deployment', icon: '🚀' },
    { name: 'CI/CD', icon: '🔄' }
  ];

  return (
    <section id="skills" className="relative overflow-hidden py-32 bg-[#0B1220] min-h-[700px] md:min-h-[800px]">
      {/* Decorative background rings */}
      <div className="pointer-events-none absolute inset-0" style={{height:"110%"}}>
        <div className="absolute -left-16 top-1/3 h-72 w-72 rounded-full border border-teal-500/10 [mask-image:radial-gradient(closest-side,white,transparent)]"></div>
        <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full border border-cyan-500/10 [mask-image:radial-gradient(closest-side,white,transparent)]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Heading */}
        <div className={`relative z-20 text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{padding: 16}}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            SKILLS & <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">EXPERTISE</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto p-6">
            Here are the technologies and tools I work with to create amazing digital experiences.
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-indigo-500/40 blur-xl z-0"></div>
              <div className="relative z-10 rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-6 lg:p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group"
              style={{height:"110%"}}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl lg:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  {/* <div className={`w-12 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div> */}
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const key = `${categoryIndex}-${skillIndex}`;
                    const animatedLevel = animatedSkills[key] || 0;
                    
                    return (
                      <div key={skillIndex} className="group/skill" style={{width:'90%', marginLeft:'5%'}}>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg lg:text-xl">{skill.icon}</span>
                            <span className="text-slate-300 font-medium text-sm lg:text-base">{skill.name}</span>
                          </div>
                          <span className="text-cyan-400 font-bold text-sm lg:text-base">{animatedLevel}%</span>
                        </div>
                        <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                          <div
                            className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out relative`}
                            style={{ width: `${animatedLevel}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Skills */}
        <div className={`relative z-10 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{marginTop:'7%'}}>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 lg:mb-12">
            Additional <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4" style={{marginTop:20}}>
            {additionalSkills.map((skill, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-r from-slate-800/50 to-slate-700/50 text-slate-300 px-4 py-2 lg:px-6 lg:py-3 rounded-full text-xs lg:text-sm font-semibold hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer flex items-center gap-2 border border-white/10 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${1200 + index * 50}ms` , padding:4}}
              >
                <span className="text-sm lg:text-lg">{skill.icon}</span>
                <span className="whitespace-nowrap">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
