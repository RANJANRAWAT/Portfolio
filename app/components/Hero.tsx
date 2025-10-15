'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, MouseEvent } from 'react';

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const [spotPos, setSpotPos] = useState<{ x: string; y: string }>({ x: '50%', y: '50%' });
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const [tiltAngles, setTiltAngles] = useState<{ rotateX: number; rotateY: number }>({ rotateX: 0, rotateY: 0 });
  const [avatarPos, setAvatarPos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  const texts: string[] = [
    'Full Stack Developer',
    'React Specialist',
    'Next.js Expert',
    'UI/UX Designer',
    'Problem Solver',
    'Tech Enthusiast',
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Spotlight follow effect
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const target = heroRef.current;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setSpotPos({ x: `${x}%`, y: `${y}%` });
    };

    window.addEventListener('mousemove', handleMove as any);
    return () => window.removeEventListener('mousemove', handleMove as any);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex];

      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, texts]);

  // Avatar tilt
  const handleAvatarMove = (e: MouseEvent<HTMLDivElement>) => {
    const target = avatarRef.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setAvatarPos({ x, y });

    const maxTilt = 16;
    const rotateY = ((x - 50) / 50) * maxTilt;
    const rotateX = -((y - 50) / 50) * maxTilt;
    setTiltAngles({ rotateX, rotateY });
  };

  const handleAvatarLeave = () => {
    setTiltAngles({ rotateX: 0, rotateY: 0 });
    setAvatarPos({ x: 50, y: 50 });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden text-white"
      style={{ ['--spot-x' as any]: spotPos.x, ['--spot-y' as any]: spotPos.y }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c14]/80 via-[#121223]/70 to-[#0e0e18]/80"></div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(600px 600px at var(--spot-x,50%) var(--spot-y,50%), rgba(124,58,237,0.10), transparent 60%)',
        }}
      ></div>

      {/* Background Initials */}
      <div className="absolute inset-0 flex items-center">
        <span className="select-none pointer-events-none text-[36rem] leading-none font-extrabold tracking-tight text-white/5 pl-6 hidden lg:block">
          RR
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 left-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="uppercase tracking-[0.25em] text-sm text-white/70 mb-4">Hello I&apos;m</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3">
              Ranjan <span className="text-white">Rawat</span>
            </h1>
            <div className="h-8 mb-6 text-xl text-white/80">
              <span className="align-middle">{currentText}</span>
            </div>

            {/* Email */}
            <a href="mailto:ranjanrawat7979@gmail.com" className="inline-block mb-10" style={{ marginTop: '10px' }}>
              <span className="rounded-full border border-fuchsia-400/50 bg-fuchsia-900/10 text-fuchsia-300 font-semibold shadow-sm hover:shadow-fuchsia-500/30 hover:bg-fuchsia-900/20 transition-all duration-300 px-3 py-1">
                ranjanrawat7979@gmail.com
              </span>
            </a>

            <p className="text-white/70 max-w-xl mt-3">Gurgaon, India</p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-3">
              {['Facebook', 'Twitter', 'Dribbble'].map((name) => (
                <a
                  key={name}
                  aria-label={name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-fuchsia-600 hover:ring-fuchsia-500 transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/80">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div
            ref={avatarRef}
            onMouseMove={handleAvatarMove}
            onMouseLeave={handleAvatarLeave}
            className={`relative mx-auto w-[16rem] h-[16rem] md:w-[20rem] md:h-[20rem] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ ['--ax' as any]: `${avatarPos.x}%`, ['--ay' as any]: `${avatarPos.y}%` }}
          >
            <div className="absolute inset-0 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
            <div
              className="absolute -right-8 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-fuchsia-500/40"
              style={{ boxShadow: '0 0 0 8px rgba(168,85,247,0.08)' }}
            ></div>
            <div
              className="relative w-full h-full rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-700 flex items-center justify-center ring-2 ring-white/10 shadow-2xl"
              style={{
                transform: `perspective(900px) rotateX(${tiltAngles.rotateX}deg) rotateY(${tiltAngles.rotateY}deg)`,
                transition: 'transform 180ms ease',
              }}
            >
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(160px 160px at var(--ax,50%) var(--ay,50%), rgba(255,255,255,0.18), transparent 60%)',
                  mixBlendMode: 'screen',
                }}
              />
              <Image
                src="/self-img1.jpeg"
                alt="Profile photo"
                fill
                className="object-cover rounded-full"
                priority
                style={{ transform: 'translateZ(35px)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
