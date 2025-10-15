'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const [spotPos, setSpotPos] = useState({ x: '50%', y: '50%' });
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const [tiltAngles, setTiltAngles] = useState({ rotateX: 0, rotateY: 0 });
  const [avatarPos, setAvatarPos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  const texts = [
    'Full Stack Developer',
    'React Specialist',
    'Next.js Expert',
    'UI/UX Designer',
    'Problem Solver',
    'Tech Enthusiast'
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
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

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

  // 3D tilt effect for avatar
  const handleAvatarMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = avatarRef.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // 0..100
    const y = ((e.clientY - rect.top) / rect.height) * 100; // 0..100
    setAvatarPos({ x, y });

    // Map to tilt angles
    const maxTilt = 16; // degrees
    const rotateY = ((x - 50) / 50) * maxTilt; // left/right
    const rotateX = -((y - 50) / 50) * maxTilt; // up/down
    setTiltAngles({ rotateX, rotateY });
  };

  const handleAvatarLeave = () => {
    setTiltAngles({ rotateX: 0, rotateY: 0 });
    setAvatarPos({ x: 50, y: 50 });
  };

  return (
    <section
      id="home"
      ref={heroRef as any}
      className="relative min-h-screen flex items-center overflow-hidden text-white"
      style={{ ['--spot-x' as any]: spotPos.x, ['--spot-y' as any]: spotPos.y }}
    >
      {/* Subtle dark gradient and vignette (semi-transparent to reveal developer background) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c14]/80 via-[#121223]/70 to-[#0e0e18]/80"></div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(600px 600px at var(--spot-x,50%) var(--spot-y,50%), rgba(124,58,237,0.10), transparent 60%)' }}></div>

      {/* Huge background initial */}
      <div className="absolute inset-0 flex items-center">
        <span className="select-none pointer-events-none text-[36rem] leading-none font-extrabold tracking-tight text-white/5 pl-6 hidden lg:block">RR</span>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 left-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: Text */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="uppercase tracking-[0.25em] text-sm text-white/70 mb-4">Hello I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3">
              Ranjan <span className="text-white">Rawat</span>
            </h1>
            <div className="h-8 mb-6 text-xl text-white/80">
              <span className="align-middle">{currentText}</span>
            </div>

            {/* Email pill */}
            <a
              href="mailto:ranjanrawat7979@gmail.com"
              className="inline-block mb-10"
              style={{ marginTop: '10px'}}
            >
              <span
                className="rounded-full border border-fuchsia-400/50 bg-fuchsia-900/10 text-fuchsia-300 font-semibold shadow-sm hover:shadow-fuchsia-500/30 hover:bg-fuchsia-900/20 transition-all duration-300" 
                style={{ padding: '5px 10px'}}
              >
                ranjanrawat7979@gmail.com
              </span>
            </a>



            {/* Address line */}
              <p className="text-white/70 max-w-xl mt-[50px]" style={{ marginTop: '10px'}}>
               Gurgaon, India
            </p>

            {/* Social buttons */}
            <div className="flex items-center gap-4" style={{ marginTop: '10px'}}>
              <a aria-label="Facebook" href="#" className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-fuchsia-600 hover:ring-fuchsia-500 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/80"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.5-3.88 3.79-3.88 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.79l-.45 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z"/></svg>
              </a>
              <a aria-label="Twitter" href="#" className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-fuchsia-600 hover:ring-fuchsia-500 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/80"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.58 8.58 0 0 1-2.71 1.04A4.28 4.28 0 0 0 12.1 8.1a12.14 12.14 0 0 1-8.82-4.47 4.28 4.28 0 0 0 1.32 5.72 4.22 4.22 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.19 4.3 4.3 0 0 1-1.12.15c-.27 0-.55-.03-.81-.07a4.29 4.29 0 0 0 4 2.97 8.6 8.6 0 0 1-5.32 1.84c-.35 0-.7-.02-1.04-.06A12.13 12.13 0 0 0 8 20.29c7.87 0 12.18-6.52 12.18-12.17 0-.18 0-.35-.01-.53A8.69 8.69 0 0 0 22.46 6z"/></svg>
              </a>
              <a aria-label="Dribbble" href="#" className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-fuchsia-600 hover:ring-fuchsia-500 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/80"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm6.92 6.57a8.32 8.32 0 0 1 1.69 5.01c-1.17-.24-2.23-.34-3.2-.3-.1-.26-.2-.53-.31-.79-.36-.85-.79-1.68-1.27-2.48 1.26-.54 2.31-1.22 3.09-1.44zm-2.29-2.2c-.66.96-1.67 1.68-2.92 2.19a19.5 19.5 0 0 0-3.09-3.99 8.36 8.36 0 0 1 6.01 1.8zM8.96 4.43a18.1 18.1 0 0 1 3.29 4.22c-1.74.5-3.82.77-6.22.77-.66 0-1.29-.02-1.88-.05a8.38 8.38 0 0 1 4.81-4.94zM3.6 12.06c0-.07 0-.14.01-.2.75.03 1.55.05 2.41.05 2.76 0 5.11-.3 7.04-.9.4.7.75 1.43 1.05 2.18-2.33.59-4.29 1.83-5.85 3.73a8.38 8.38 0 0 1-4.66-4.86zM12 20.44c-1.66 0-3.22-.46-4.56-1.26 1.39-1.77 3.23-2.91 5.51-3.39.7 1.86 1.16 3.88 1.37 5.86a8.28 8.28 0 0 1-2.32.33zm4.56-.96c-.21-1.76-.63-3.55-1.26-5.15.83-.05 1.76 0 2.78.17.97.16 2.01.43 3.1.82a8.38 8.38 0 0 1-4.62 4.16z"/></svg>
              </a>
            </div>
          </div>

          {/* Right column: Avatar with purple radial + 3D tilt */}
          <div
            ref={avatarRef}
            onMouseMove={handleAvatarMove}
            onMouseLeave={handleAvatarLeave}
            className={`relative mx-auto w-[16rem] h-[16rem] md:w-[20rem] md:h-[20rem] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ ['--ax' as any]: `${avatarPos.x}%`, ['--ay' as any]: `${avatarPos.y}%` }}
          >
            <div className="absolute inset-0 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-fuchsia-500/40" style={{ boxShadow: '0 0 0 8px rgba(168,85,247,0.08)' }}></div>
            <div
              className="relative w-full h-full rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-700 flex items-center justify-center ring-2 ring-white/10 shadow-2xl will-change-transform"
              style={{
                transform: `perspective(900px) rotateX(${tiltAngles.rotateX}deg) rotateY(${tiltAngles.rotateY}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 180ms ease',
                // marginLeft: 120
              }}
            >
              {/* Shine highlight following cursor */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(160px 160px at var(--ax,50%) var(--ay,50%), rgba(255,255,255,0.18), transparent 60%)',
                  mixBlendMode: 'screen',
                  transform: 'translateZ(45px)',
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
