'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Contact', href: '#contact', icon: '📧' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out h-15 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center" style={{ marginTop: '15px' }}>
          {/* Logo */}
          <Link
            href="#home"
            className="relative text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:opacity-90 transition duration-300 left-10"
          >
            RANJAN RAWAT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative  text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md shadow-blue-500/25'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                  }`}
                  style={{ padding: '2px 10px' }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 w-3 h-3 -translate-x-1/2 bg-white rounded-full animate-ping"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-between w-6 h-4">
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5 bg-purple-600' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5 bg-purple-600' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-80 mt-3 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-3 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-sm flex items-center gap-3 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
