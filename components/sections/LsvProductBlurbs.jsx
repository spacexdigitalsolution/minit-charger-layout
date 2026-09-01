import React from 'react';
import Link from 'next/link';

export default function LsvProductBlurbs({ eyebrow, heading, description, cards }) {
  return (
    <section className="bg-white py-24" id="products">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          {eyebrow && (
            <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-green-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_0_4px_rgba(46,153,85,0.25)]"></span>
              {eyebrow}
            </p>
          )}
          <h2 className="mt-4 text-[clamp(28px,4vw,38px)] font-display font-bold leading-tight text-ink">
            {heading}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            {description}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div key={card.id} className="bg-white border border-line rounded-[22px] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg">
              {card.imageSrc ? (
                <div className="bg-panel aspect-[16/10] flex items-center justify-center p-6 border-b border-line">
                  <img src={card.imageSrc} alt={card.imageAlt} className="max-h-full object-contain" />
                </div>
              ) : (
                <div className="bg-gradient-to-br from-ink to-[#1B3627] aspect-[16/10] flex items-center justify-center p-6">
                  <div className="text-volt drop-shadow-md">
                    {card.icon}
                  </div>
                </div>
              )}
              
              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted font-bold mb-2">
                  {card.eyebrow}
                </span>
                <h3 className="font-display text-[26px] font-bold text-ink mb-3">
                  {card.title}
                </h3>
                <p className="text-[14.5px] text-muted leading-relaxed flex-1">
                  {card.description}
                </p>
                <div className="mt-5 mb-5 inline-block self-start bg-green-wash text-green-deep font-mono text-[11.5px] px-3.5 py-1.5 rounded-full font-semibold">
                  {card.specLine}
                </div>
                <Link href={card.href} className="inline-flex items-center gap-2 font-bold text-[14px] text-green-deep hover:text-green-bright transition group mt-auto">
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
