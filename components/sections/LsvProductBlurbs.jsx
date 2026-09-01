import React from 'react';
import Link from 'next/link';

export default function LsvProductBlurbs({ eyebrow, heading, description, cards }) {
  return (
    <section className="bg-white py-24" id="products">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          {eyebrow && (
            <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
              {eyebrow}
            </p>
          )}
          <h2 className="mt-4 text-[clamp(28px,4vw,38px)] font-display font-bold leading-tight text-ink-950">
            {heading}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-600">
            {description}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div key={card.id} className="bg-white border border-ink-200 rounded-[22px] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg">
              {card.imageSrc ? (
                <div className="bg-paper-dim aspect-[16/10] flex items-center justify-center p-6 border-b border-ink-200">
                  <img src={card.imageSrc} alt={card.imageAlt} className="max-h-full object-contain" />
                </div>
              ) : (
                <div className="bg-gradient-to-br from-ink-950 to-[#1B3627] aspect-[16/10] flex items-center justify-center p-6">
                  <div className="text-volt drop-shadow-md">
                    {card.icon}
                  </div>
                </div>
              )}
              
              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-600 font-bold mb-2">
                  {card.eyebrow}
                </span>
                <h3 className="font-display text-[26px] font-bold text-ink-950 mb-3">
                  {card.title}
                </h3>
                <p className="text-[14.5px] text-ink-600 leading-relaxed flex-1">
                  {card.description}
                </p>
                <div className="mt-5 mb-5 inline-block self-start bg-volt/10 text-volt-dim font-mono text-[11.5px] px-3.5 py-1.5 rounded-full font-semibold">
                  {card.specLine}
                </div>
                <Link href={card.href} className="inline-flex items-center gap-2 font-bold text-[14px] text-volt-dim hover:text-volt transition group mt-auto">
                  Read more about {card.title}
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
