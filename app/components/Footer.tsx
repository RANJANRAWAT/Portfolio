'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('footer');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Contact', href: '#contact', icon: '📧' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: '🐙',
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: '💼',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: '🐦',
      color: 'from-sky-400 to-sky-600'
    },
    {
      name: 'Email',
      url: 'mailto:ranjan@example.com',
      icon: '📧',
      color: 'from-red-500 to-red-600'
    }
  ];

  const contactInfo = [
    { icon: '📍', text: 'Mumbai, India' },
    { icon: '📧', text: 'ranjan@example.com' },
    { icon: '📱', text: '+91 9876543210' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tl from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Enhanced Brand Section */}
            <div className="lg:col-span-2">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-4xl font-bold mb-6 gradient-text">Ranjan</h3>
                <p className="text-gray-300 mb-8 max-w-lg text-lg leading-relaxed">
                  A passionate full-stack developer creating amazing digital experiences 
                  with modern technologies and innovative solutions. Let's build something 
                  incredible together!
                </p>
                
                {/* Enhanced Social Links */}
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-14 h-14 bg-gradient-to-r ${social.color} text-white rounded-2xl flex items-center justify-center text-2xl hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${200 + index * 100}ms` }}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Quick Links */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h4 className="text-2xl font-bold mb-8 text-white">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="text-xl">{link.icon}</span>
                      <span className="text-lg font-medium">{link.name}</span>
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Contact Info */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h4 className="text-2xl font-bold mb-8 text-white">Contact Info</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300">
                    <span className="text-2xl">{info.icon}</span>
                    <span className="text-lg">{info.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Footer Bottom */}
          <div className={`border-t border-gray-700 mt-16 pt-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-300 text-lg">
                © {currentYear} Ranjan. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <span>Built with</span>
                <span className="text-red-500">❤️</span>
                <span>using</span>
                <span className="text-blue-400 font-semibold">Next.js</span>
                <span>&</span>
                <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
