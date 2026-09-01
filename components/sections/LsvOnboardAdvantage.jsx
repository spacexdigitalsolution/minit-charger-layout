import React from 'react';

export default function LsvOnboardAdvantage({ eyebrow, heading, description, chips, cta }) {
  return (
    <section className="bg-ink-950 text-white py-24 relative overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            {eyebrow && (
              <span className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt">
                <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
                {eyebrow}
              </span>
            )}
            <h2 className="mt-4 text-[clamp(28px,4vw,42px)] font-display font-bold leading-tight">
              {heading}
            </h2>
            <p className="mt-5 text-[17px] text-mist-dark leading-relaxed">
              {description}
            </p>
            
            {chips && chips.length > 0 && (
              <div className="mt-8 flex flex-col gap-3.5">
                {chips.map((chip, idx) => (
                  <div key={idx} className="flex gap-3 items-start text-[15px] text-[#e6ede7]">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-volt flex-none mt-0.5">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {chip}
                  </div>
                ))}
              </div>
            )}
            
            {cta && (
              <a 
                href={cta.href} 
                className="mt-8 inline-flex items-center justify-center rounded-full font-semibold transition px-6 py-3.5 text-[15px] bg-copper text-white hover:bg-copper/90 shadow-md hover:-translate-y-0.5"
              >
                {cta.text}
              </a>
            )}
          </div>
          
          <div className="bg-[#0E1A13] border border-white/10 rounded-[26px] p-7 lg:p-10 relative">
            <svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <rect x="30" y="40" width="60" height="90" rx="6" fill="#0E1A13" stroke="#9FB2A5" strokeWidth="1.4" />
              <text x="60" y="150" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#9FB2A5">FIXED STATION</text>
              <g stroke="#5B6A5C" strokeWidth="1.4" strokeDasharray="4 4" fill="none">
                  <path d="M90 70 C 150 60, 190 90, 220 60" />
                  <path d="M90 90 C 150 130, 190 140, 230 170" />
                  <path d="M90 110 C 140 160, 170 200, 210 230" />
              </g>
              <g fill="#274a35">
                  <circle cx="225" cy="58" r="7" />
                  <circle cx="233" cy="172" r="7" />
                  <circle cx="213" cy="232" r="7" />
              </g>
              <text x="230" y="270" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9.5" fill="#6b7d70">vehicles must return</text>

              <line x1="255" y1="20" x2="255" y2="300" stroke="#28402F" strokeWidth="1.5" />

              <g transform="translate(300,60)">
                  <rect x="0" y="0" width="70" height="34" rx="6" fill="#1B6B3B" />
                  <rect x="10" y="-14" width="18" height="14" fill="#274a35" />
                  <circle cx="12" cy="42" r="8" fill="#0B140F" stroke="#3FBE6C" strokeWidth="2" />
                  <circle cx="58" cy="42" r="8" fill="#3FBE6C" opacity=".15" />
                  <circle className="animate-ping" cx="55" cy="10" r="4" fill="#3FBE6C" />
              </g>
              <g transform="translate(305,160)">
                  <rect x="0" y="0" width="70" height="34" rx="6" fill="#1B6B3B" />
                  <rect x="10" y="-14" width="18" height="14" fill="#274a35" />
                  <circle cx="12" cy="42" r="8" fill="#0B140F" stroke="#3FBE6C" strokeWidth="2" />
                  <circle cx="58" cy="42" r="8" fill="#3FBE6C" opacity=".15" />
              </g>
              <g transform="translate(295,245)">
                  <rect x="0" y="0" width="70" height="34" rx="6" fill="#1B6B3B" />
                  <rect x="10" y="-14" width="18" height="14" fill="#274a35" />
                  <circle cx="12" cy="42" r="8" fill="#0B140F" stroke="#3FBE6C" strokeWidth="2" />
                  <circle cx="58" cy="42" r="8" fill="#3FBE6C" opacity=".15" />
              </g>
              <text x="345" y="300" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#e6ede7">ONBOARD DURUS — plugs in anywhere</text>
            </svg>
            <div className="flex justify-between mt-4 font-mono text-[11px] text-mist-dark uppercase tracking-wide">
              <span>Offboard / pedestal</span>
              <span>Onboard / Durus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
