'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '280+', label: 'Google Review' },
    { number: '03+', label: 'Years Experience' },
    { number: '49+', label: 'Award Winning' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="relative overflow-hidden py-32 bg-[#0B1220] min-h-[700px] md:min-h-[800px]">
      {/* Decorative background rings */}
      <div className="pointer-events-none absolute inset-0" style={{height:"110%"}}>
        <div className="absolute -left-16 top-1/3 h-72 w-72 rounded-full border border-teal-500/10 [mask-image:radial-gradient(closest-side,white,transparent)]"></div>
        <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full border border-cyan-500/10 [mask-image:radial-gradient(closest-side,white,transparent)]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{paddingTop: '80px'}}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ABOUT <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">US</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Visual Card */}
          <div className={`flex items-center justify-center transition-all duration-1000 lg:order-1 order-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-indigo-500/40 blur-2xl"></div>
              <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 p-2 shadow-2xl">
                <div className="rounded-[22px] bg-gradient-to-b from-slate-700 to-slate-800 p-2">
                  <div className="relative h-[360px] w-full overflow-hidden rounded-[18px] bg-slate-800/80 sm:h-[420px]">
                    <Image
                      src="/self-img1.jpeg"
                      alt="Profile photo"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`transition-all duration-1000 delay-150 lg:order-2 order-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} >

            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Turning ideas into seamless digital experiences {' '}
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">open for React and UI/UX</span>{' '}
              PROJECT
            </h2>

            <p className="mb-8 max-w-2xl text-base leading-7 text-slate-300">
            I’m a React developer with 3 years of professional experience building scalable, maintainable front-end applications. I specialize in component-driven design, state management, and performance optimization to deliver pixel-perfect, accessible UIs that improve user engagement.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3" style={{marginTop: "10px"}}>
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex h-16 w-40 flex-col justify-center rounded-2xl border border-white/10 bg-white/5 px-5 backdrop-blur transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                  style={{ transitionDelay: `${250 + index * 80}ms` }}
                >
                  <div className="text-2xl font-extrabold text-white" style={{marginLeft: "10px"}}>{item.number}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400" style={{marginLeft: "10px"}}>{item.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:brightness-110 focus:outline-none"
              style={{marginTop: "10px", padding: "10px"}}
            >
              GET IN TOUCH
              <span className="text-lg" style={{marginTop: "-8px"}}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
