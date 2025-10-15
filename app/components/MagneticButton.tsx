'use client';

import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function MagneticButton({ children, href = '#', className = '' }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.setAttribute('style', `transform: translate(${x * 0.15}px, ${y * 0.15}px)`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.setAttribute('style', 'transform: translate(0px, 0px)');
  };

  const content = (
    <span className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-semibold ring-1 ring-white/10 shadow-lg hover:shadow-fuchsia-500/30">
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(120px 120px at 30% 30%, rgba(255,255,255,0.18), transparent 60%)', mixBlendMode: 'screen' }} />
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        ref={ref as any}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`inline-block will-change-transform transition-transform duration-200 ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as any}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block will-change-transform transition-transform duration-200 ${className}`}
    >
      {content}
    </button>
  );
}


