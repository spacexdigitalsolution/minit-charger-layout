import React from 'react';
import Link from 'next/link';

export default function BpmCallout({ eyebrow, heading, description, features }) {
  return (
    <section className="bg-ink-950 py-24 text-white">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-white">
            {heading}
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-mist-dark">
            {description}
          </p>
          
          <div className="mt-8 flex flex-col gap-3">
            {features && features.map((feature, i) => (
              <div key={i} className="flex gap-3 items-center text-[15px] font-medium text-[#dce7df]">
                <svg className="w-5 h-5 text-volt-dim shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="#assessment" className="inline-flex items-center justify-center rounded-full font-bold shadow-sm transition px-8 py-3.5 text-[15px] bg-amber text-ink-950 hover:bg-amber-deep hover:-translate-y-0.5">
              Ask About BPM for Your Ramp
            </Link>
          </div>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-[#0E1A13] overflow-hidden p-8 flex items-center justify-center">
          <svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm h-auto">
            <rect x="20" y="30" width="90" height="50" rx="8" fill="#16261D" stroke="#3FBE6C" />
            <text x="65" y="60" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#9FB2A5">FEED</text>
            <g stroke="#3FBE6C" strokeWidth="2" fill="none">
              <path d="M110 55 C 160 55, 160 100, 200 100" />
              <path d="M110 55 C 160 55, 160 180, 200 180" />
              <path d="M110 55 C 160 55, 160 260, 200 260" />
            </g>
            <g fill="#0E1A13" stroke="#E2A03D" strokeWidth="1.6">
              <rect x="200" y="80" width="80" height="40" rx="6" />
              <rect x="200" y="160" width="80" height="40" rx="6" />
              <rect x="200" y="240" width="80" height="40" rx="6" />
            </g>
            <g fontFamily="monospace" fontSize="11" fill="#e6ede7" textAnchor="middle">
              <text x="240" y="104">CHARGER 1</text>
              <text x="240" y="184">CHARGER 2</text>
              <text x="240" y="264">CHARGER 3</text>
            </g>
            <g fontFamily="monospace" fontSize="11" fill="#3FBE6C" textAnchor="start" fontWeight="bold">
              <text x="300" y="104">45%</text>
              <text x="300" y="184">30%</text>
              <text x="300" y="264">25%</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
