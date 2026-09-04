import React from 'react';

export default function AltusTitleBanner({
  eyebrow,
  heading,
  description
}) {
  return (
    <section className="relative text-white overflow-hidden pt-[70px] pb-[46px] bg-ink-950">
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 1600 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="skyb" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1B3627" />
              <stop offset="1" stopColor="#0B140F" />
            </linearGradient>
          </defs>
          <rect width="1600" height="500" fill="url(#skyb)" />
          <rect y="360" width="1600" height="140" fill="#0E1A13" />
          <line x1="0" y1="360" x2="1600" y2="360" stroke="#2E9955" strokeOpacity=".3" />
          <line x1="0" y1="430" x2="1600" y2="430" stroke="#E2A03D" strokeWidth="4" strokeDasharray="30 24" strokeOpacity=".8" />
          <g transform="translate(180,300)" opacity=".85">
            <rect x="-16" y="0" width="120" height="46" rx="6" fill="#16261D" stroke="#2E9955" strokeOpacity=".4" />
            <rect x="94" y="-16" width="10" height="16" fill="#0E1A13" />
            <circle cx="10" cy="46" r="12" fill="#0B140F" stroke="#3FBE6C" strokeWidth="2" />
            <circle cx="90" cy="46" r="12" fill="#0B140F" stroke="#3FBE6C" strokeWidth="2" />
          </g>
          <g transform="translate(1100,290)" opacity=".7">
            <rect x="0" y="0" width="90" height="40" rx="6" fill="#16261D" stroke="#2E9955" strokeOpacity=".35" />
            <circle cx="14" cy="40" r="10" fill="#0B140F" stroke="#3FBE6C" strokeWidth="2" />
            <circle cx="76" cy="40" r="10" fill="#0B140F" stroke="#3FBE6C" strokeWidth="2" />
          </g>
          <g transform="translate(1350,140)" fill="#c9d6cd" opacity=".45">
            <path d="M0 0 L60 6 L44 14 L8 12 Z" />
          </g>
        </svg>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink-950/55 via-ink-950/85 to-ink-950"></div>
      </div>
      <div className="container relative z-20 mx-auto px-6 max-w-[1180px]">
        <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt">
          <span className="inline-block w-4 h-[2px] bg-copper"></span>
          {eyebrow}
        </span>
        <h1 className="text-[clamp(44px,7vw,84px)] text-white font-display font-bold mt-3 leading-[1.02] tracking-[0.01em]">
          {heading}
        </h1>
        <p className="mt-3 text-[18px] text-mist max-w-[560px]">
          {description}
        </p>
      </div>
    </section>
  );
}
