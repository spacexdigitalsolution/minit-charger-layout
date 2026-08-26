'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AviationHero({ eyebrow, heading, headingHighlight, description, tagsLabel, tags, proofText }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1100px_480px_at_82%_-10%,rgba(63,190,108,0.20),transparent_60%),linear-gradient(180deg,#0B140F_0%,#0E1A13_100%)] pt-24 text-white">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center pb-14">
        <div>
          <span className="font-mono text-[13.5px] uppercase tracking-[0.12em] text-volt-dim">{eyebrow}</span>
          <h1 className="mt-4 text-[clamp(36px,5.2vw,58px)] leading-tight font-display font-bold">
            {heading} <span className="text-amber">{headingHighlight}</span>
          </h1>
          <p className="mt-5 text-lg text-mist-dark max-w-xl leading-relaxed">
            {description}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#assessment" className="inline-flex items-center justify-center rounded-full font-bold shadow-sm transition px-8 py-3.5 text-sm bg-gradient-to-b from-[#6BFFB1] to-volt text-[#04150C] hover:brightness-110 shadow-volt hover:-translate-y-0.5">
              Get Your Free Charging Assessment
            </a>
            <a href="#guide" className="inline-flex items-center justify-center rounded-full font-bold shadow-sm transition px-8 py-3.5 text-sm bg-transparent border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/10">
              Download the Airport Ops Guide
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-mist-dark">{tagsLabel}</div>
            <div className="mt-3 flex flex-wrap gap-2.5 text-[13.5px] text-[#dfe9e2]">
              {tags.map((tag, i) => (
                <span key={i} className="px-3 py-1.5 border border-white/10 rounded-full">{tag}</span>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="font-bold text-[15.5px] text-white">Get a charging plan for your ramp</div>
            <div className="text-[13px] text-mist-dark mt-1">One call. We'll size a charger fleet to your GSE mix and your existing power feed.</div>
            
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="hf-name" className="text-xs font-semibold text-mist-dark">Full name</label>
                <input id="hf-name" type="text" placeholder="Jordan Ramirez" required className="bg-white/5 border border-white/10 text-white rounded-xl px-3 py-2.5 text-[14.5px] focus:outline-none focus:border-volt focus:ring-1 focus:ring-volt placeholder-white/30" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="hf-org" className="text-xs font-semibold text-mist-dark">Airport / organization</label>
                <input id="hf-org" type="text" placeholder="e.g. PHX Ground Ops" required className="bg-white/5 border border-white/10 text-white rounded-xl px-3 py-2.5 text-[14.5px] focus:outline-none focus:border-volt focus:ring-1 focus:ring-volt placeholder-white/30" />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="hf-email" className="text-xs font-semibold text-mist-dark">Work email</label>
                <input id="hf-email" type="email" placeholder="you@airline.com" required className="bg-white/5 border border-white/10 text-white rounded-xl px-3 py-2.5 text-[14.5px] focus:outline-none focus:border-volt focus:ring-1 focus:ring-volt placeholder-white/30" />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button type="submit" className="inline-flex items-center justify-center rounded-full font-bold shadow-sm transition px-6 py-2.5 text-sm bg-gradient-to-b from-[#6BFFB1] to-volt text-[#04150C] hover:brightness-110 shadow-volt hover:-translate-y-0.5">
                Get My Assessment
              </button>
              <span className="text-xs text-mist-dark">No spam. One reply from a real engineer.</span>
            </div>

            {submitted && (
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-volt font-semibold text-[13.5px]">
                Thanks — someone from our team will reach out within one business day.
              </div>
            )}
          </form>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-b from-[#16261D] via-[#0E1A13] to-[#0B140F]">
          <svg viewBox="0 0 560 520" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#1B3627" />
                <stop offset="1" stopColor="#0B140F" />
              </linearGradient>
            </defs>
            <rect width="560" height="520" fill="url(#sky)" />
            <rect y="360" width="560" height="160" fill="#0E1A13" />
            <line x1="0" y1="360" x2="560" y2="360" stroke="#2E9955" strokeOpacity=".35" />
            <line x1="0" y1="440" x2="560" y2="440" stroke="#E2A03D" strokeWidth="4" strokeDasharray="26 20" strokeOpacity=".85" />
            <g transform="translate(150,300)">
              <rect x="-18" y="0" width="36" height="130" rx="8" fill="#16261D" stroke="#3FBE6C" strokeOpacity=".5" />
              <rect x="-12" y="16" width="24" height="46" rx="4" fill="#0B140F" />
              <circle className="animate-ping" cx="0" cy="-14" r="5" fill="#3FBE6C" />
              <circle cx="0" cy="-14" r="3" fill="#E2A03D" />
              <path d="M18 60 C 70 60, 70 150, 130 150" stroke="#3FBE6C" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
            <g transform="translate(280,410)">
              <rect x="0" y="-38" width="90" height="34" rx="6" fill="#1B6B3B" />
              <rect x="10" y="-58" width="34" height="24" rx="4" fill="#1B6B3B" />
              <circle cx="16" cy="0" r="12" fill="#0B140F" stroke="#3FBE6C" strokeWidth="2" />
              <circle cx="70" cy="0" r="12" fill="#0B140F" stroke="#3FBE6C" strokeWidth="2" />
            </g>
            <g transform="translate(150,240)" stroke="#3FBE6C" fill="none" strokeOpacity=".35">
              <circle r="20" />
              <circle r="34" />
            </g>
            <g transform="translate(420,150)" fill="#c9d6cd" opacity=".5">
              <path d="M0 0 L60 6 L44 14 L8 12 Z" />
            </g>
          </svg>
        </div>
      </div>
      <div className="bg-[#0b140f] border-b border-white/5 py-5">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 flex items-center gap-6 flex-wrap font-mono text-[12.5px] tracking-[0.04em] text-mist-dark">
          <span className="px-3 py-1 border border-dashed border-amber-deep/50 rounded-full text-amber-deep font-semibold">[CLIENT TO CONFIRM]</span>
          <span>{proofText}</span>
        </div>
      </div>
    </section>
  );
}
