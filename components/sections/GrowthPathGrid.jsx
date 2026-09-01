import React from 'react';
import Link from 'next/link';

export default function GrowthPathGrid({ eyebrow, heading, description, cards }) {
  return (
    <section className="bg-[#08100C] py-24 border-t border-white/5" id="growth-path">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          {eyebrow && (
            <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
              {eyebrow}
            </p>
          )}
          <h2 className="mt-4 text-[clamp(28px,4vw,38px)] font-display font-bold leading-tight text-white">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-[17px] leading-relaxed text-[#9FB3A9]">
              {description}
            </p>
          )}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div key={card.id} className="bg-[#0F1E17] border border-[#1C3327] rounded-[16px] p-8 lg:p-10 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg">
              <span className="font-display text-[26px] font-bold text-volt-dim mb-2">
                {card.title}
              </span>
              
              {card.specLine && (
                <div className="font-mono text-[12.5px] text-[#9FB3A9] mb-4">
                  {card.specLine}
                </div>
              )}
              
              <p className="text-[16px] text-white/90 leading-relaxed flex-1">
                {card.description}
              </p>
              
              <Link href={card.href} className="inline-flex items-center justify-center gap-2 font-bold text-[14px] text-white border border-[#1C3327] hover:bg-[#1C3327] rounded-full px-5 py-2.5 transition mt-8 self-start">
                Explore {card.title}
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
