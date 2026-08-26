import React from 'react';
import Link from 'next/link';

export default function ValuePropBand({ eyebrow, heading, description, features, primaryCta, secondaryCta }) {
  return (
    <section className="bg-gradient-to-b from-[#F2F5F0] to-white py-24 border-y border-black/5">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-[13.5px] uppercase tracking-[0.12em] text-volt-dim">{eyebrow}</span>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-ink-950">
            {heading}
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#4C5C54]">
            {description}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-2.5">
            {features.map((feature, i) => (
              <span key={i} className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.05em] uppercase bg-volt/10 text-green-900 border border-volt/30 rounded-full px-3.5 py-1.5">
                <svg className="w-3.5 h-3.5 text-volt-dim" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <Link href={primaryCta.href} className="inline-flex items-center justify-center rounded-full font-bold shadow-sm transition px-6 py-2.5 text-sm bg-gradient-to-b from-[#6BFFB1] to-volt text-[#04150C] hover:brightness-110 shadow-volt hover:-translate-y-0.5">
                {primaryCta.text}
              </Link>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href} className="inline-flex items-center justify-center rounded-full font-bold shadow-sm transition px-6 py-2.5 text-sm bg-white border border-black/10 text-ink-950 hover:bg-gray-50 hover:-translate-y-0.5">
                {secondaryCta.text}
              </a>
            )}
          </div>
        </div>

        <div className="relative" aria-hidden="true">
          <svg viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl">
            <rect width="500" height="420" rx="18" fill="#EAEFE1" />
            <rect x="200" y="90" width="100" height="240" rx="14" fill="#16261D" />
            <rect x="216" y="110" width="68" height="44" rx="6" fill="#0B140F" />
            <circle cx="250" cy="132" r="5" fill="#3FBE6C" />
            <rect x="216" y="168" width="68" height="10" rx="3" fill="#3FBE6C" opacity=".6" />
            <rect x="216" y="186" width="44" height="10" rx="3" fill="#E2A03D" opacity=".7" />
            <path d="M300 220 C 360 220, 360 270, 400 270" stroke="#1B6B3B" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M200 220 C 140 220, 140 270, 100 270" stroke="#1B6B3B" strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="400" cy="285" r="18" fill="#fff" stroke="#1B6B3B" strokeWidth="3" />
            <circle cx="100" cy="285" r="18" fill="#fff" stroke="#1B6B3B" strokeWidth="3" />
            <text x="250" y="380" textAnchor="middle" fontFamily="monospace" fontSize="13" fill="#5B6A5C" fontWeight="bold" letterSpacing="0.05em">ALTUS II — DUAL PORT — IP65</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
